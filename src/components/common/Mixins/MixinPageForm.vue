<script>
/**
 *  @name 表单页面[新增/编辑]
 *  @description
 *    1. 页面通用方法
 *    2. 初始化-表单
 */

// mixins
import MixinCommon from './MixinCommon';
import MixinInitForm from './MixinInitForm';

export default {
  name: 'CommonMixinPageForm',
  mixins: [MixinCommon, MixinInitForm],
  methods: {
    // 初始化-合并
    async mixinInitialization() {
      // 初始化 数据字典
      await this.mixinInitDataDictionarys(this.mixinDictionarys);
      // 初始化-公共数据
      await this.mixinInitPublicData();
      // 初始化-前置函数
      await this.mixinBeforeInit();
      // 初始化-表单
      await this.mixinInitForm();
      // 初始化-页面
      this.initPage();
    },
  },
};
</script>