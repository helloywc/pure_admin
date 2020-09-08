<script>
/**
  *  @name 初始化-页面
  *  @description 1.避免接口重复请求
  *  @description 2.按步骤执行初始化
  *  @description 3.初始化-前置函数
  */

export default {
  name: 'CommonMixinInitialization',
  data() {
    return {
      // 标记-页面选中
      mixinSignPageActivated: false,
    };
  },
  created() {
    // 初始化
    this.mixinInitialization();
    // 页面已选中
    this.mixinSignPageActivated = true;
  },
  mounted() {
    // 页面渲染完成
    this.initPageMounted();
  },
  activated() {
    // 判断页面是否选中
    if (!this.mixinSignPageActivated) {
      // 初始化
      this.mixinInitialization();
      // 页面渲染完成
      this.initPageMounted();
    }
  },
  deactivated() {
    // 页面选中状态重置
    this.mixinSignPageActivated = false;
  },
  methods: {
    // 初始化-合并
    async mixinInitialization() {
      // 初始化-前置函数
      await this.mixinBeforeInit();
      // 初始化-页面
      this.initPage();
    },
    // 初始化-前置函数
    async mixinBeforeInit() { },
    // 初始化-页面
    initPage() { },
    // 初始化-页面渲染完成
    initPageMounted() { },
  },
}
</script>