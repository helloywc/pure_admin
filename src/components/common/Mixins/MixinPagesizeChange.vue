<script>
/**
  *  @name 页面大小改变(窗口)
  */
// vuex
import { mapGetters } from 'vuex';

export default {
  name: 'CommonMixinPagesizeChange',
  data() {
    return {
      // 存在-窗口事件
      mixinHasWindowEventListener: false,
      // 事件处理函数-窗口调整大小
      fnResizeHandler: null,
      // 定时器
      mixinTimerPagesizeChange: null,
    };
  },
  computed: {
    ...mapGetters(['sidebarStyleChange']),
  },
  watch: {
    // 侧边栏样式改变
    sidebarStyleChange() {
      this.mixinPagesizeChangeDebounce();
    }
  },
  created() {
    // 添加-窗口事件
    this.mixinAddWindowEventListener();
    // 存在-窗口事件
    this.mixinHasWindowEventListener = true;
  },
  activated() {
    // 存在-窗口事件
    if (!this.mixinHasWindowEventListener) {
      // 添加-窗口事件
      this.mixinAddWindowEventListener();
    }
  },
  deactivated() {
    // 移除-窗口事件
    this.mixinRemoveWindowEventListener();
    // 状态重置
    this.mixinHasWindowEventListener = false;
  },
  destroyed() {
    // 移除-窗口事件
    this.mixinRemoveWindowEventListener();
  },
  methods: {
    // 添加-窗口事件
    mixinAddWindowEventListener() {
      // 避免事件重复添加
      this.mixinRemoveWindowEventListener();
      // 事件处理函数-窗口调整大小
      this.fnResizeHandler = this.mixinResizeThrottle(this.mixinPagesizeChangeDebounce);
      // 添加-窗口事件
      window.addEventListener('resize', this.fnResizeHandler);
    },
    // 移除-窗口事件
    mixinRemoveWindowEventListener() {
      window.removeEventListener('resize', this.fnResizeHandler);
    },
    // 窗口调整大小-事件节流
    mixinResizeThrottle(callback, interval = 500) {
      // 最后执行时间
      let last = Date.now();
      // 定时器
      let timer = null;
      // 返回值
      return () => {
        const now = Date.now();
        // 清除-定时器
        clearTimeout(timer);
        if (now - last >= interval) {
          // 事件触发
          callback && callback();
          last = now;
        } else {
          // 事件结束触发
          timer = setTimeout(() => {
            callback && callback();
            last = now;
          }, 100);
        }
      }
    },
    // 1.事件防抖 2.侧边栏动效时间 0.28s
    mixinPagesizeChangeDebounce(interval = 300) {
      clearTimeout(this.mixinTimerPagesizeChange)
      this.mixinTimerPagesizeChange = setTimeout(() => {
        this.mixinHandlePagesizeChange();
      }, interval)
    },
    // 处理-页面大小改变
    mixinHandlePagesizeChange() { },
  },
}
</script>


