<script>
/**
 *  @name 详情页面
 *  @description
 *    1. 页面通用方法
 *    2. 初始化-详情
 */

// mixins
import MixinCommon from './MixinCommon';
import MixinInitDetail from './MixinInitDetail';

export default {
  name: 'CommonMixinPageDetail',
  mixins: [MixinCommon, MixinInitDetail],
  methods: {
    // 初始化-合并
    async mixinInitialization() {
      // 初始化 数据字典
      await this.mixinInitDataDictionarys(this.mixinDictionarys);
      // 初始化-公共数据
      await this.mixinInitPublicData();
      // 初始化-前置函数
      await this.mixinBeforeInit();
      // 初始化-详情
      await this.mixinInitDetail();
      // 初始化-页面
      this.initPage();
    },
  },
};
</script>