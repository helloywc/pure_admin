<script>
/**
 *  @name 入口页面[列表]
 *  @description
 *    1. 页面通用方法
 *    2. 初始化-列表搜索
 *    3. 列表-数据删除
 */

// mixins
import MixinCommon from './MixinCommon';
import MixinInitSearch from './MixinInitSearch';
import MixinListDelete from './MixinListDelete';

export default {
  name: 'CommonMixinPageEntrance',
  mixins: [MixinCommon, MixinInitSearch, MixinListDelete],
  methods: {
    // 初始化-合并
    async mixinInitialization() {
      // 初始化 数据字典
      await this.mixinInitDataDictionarys(this.mixinDictionarys);
      // 初始化-公共数据
      await this.mixinInitPublicData();
      // 初始化-前置函数
      await this.mixinBeforeInit();
      // 初始化-列表搜索
      await this.mixinInitSearch();
      // 初始化-页面
      this.initPage();
    },
  },
};
</script>