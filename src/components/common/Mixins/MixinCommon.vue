<script>
/**
 *    1. 页面初始化
 *    2. 数据字典
 *    3. 公共数据
 */

// mixins
import MixinInitialization from './MixinInitialization';
import MixinDictionary from './MixinDictionary';

export default {
  name: 'CommonMixinCommon',
  mixins: [MixinInitialization, MixinDictionary],
  methods: {
    // 初始化-合并
    async mixinInitialization() {
      // 初始化-数据字典
      // await this.mixinInitDataDictionarys(this.mixinDictionarys);
    // 初始化-前置函数
    await this.mixinBeforeInit();
    // 初始化-页面
    this.initPage();
    },
  },
};
</script>
