<script>
/**
  *  @name 自动返回登录页面
  */

// utils
import { setSignPageLogin } from '@/utils/webStorage';

export default {
  name: 'CommonMixinGobackLogin',
  data() {
    return {
      // 倒计时
      minxinCountdown: 10,
      // 定时器
      minxinTimer: null,
      // 用户信息
      userInfo: this.$store.getters.userInfo,
    };
  },
  methods: {
    // 倒计时-开始
    minxinStartCountdown() {
      // 存储-是否进入登录页面
      setSignPageLogin();
      // 定时器
      clearInterval(this.minxinTimer);
      this.minxinTimer = setInterval(() => {
        this.minxinCountdown--;
        if (this.minxinCountdown <= 0) {
          clearInterval(this.minxinTimer);
          // 跳转登录页面
          this.minxinPageLogin();
        }
      }, 1000);
    },
    // 跳转登录页面
    minxinPageLogin() {
      clearInterval(this.minxinTimer);
      // 登出
      if (this.userInfo) {
        this.$store.dispatch('LogOut');
      } else {
        this.$router.push({ name: 'login' });
      }
    },
  },
}
</script>


