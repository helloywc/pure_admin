<script>
/**
  *  @name 初始化-列表搜索
  *  @description 通关表单配置，构架相关的表单参数
  */

// utils
import { processConfigForm } from '@/utils/common/FormConfiguration';

export default {
  name: 'CommonMixinInitSearch',
  data() {
    return {
      // 标记-初始化搜索
      mixinSignInitSearch: false,
      // 搜索数据
      searchData: {},
      // 搜索验证
      searchRules: {},
      // 搜索项
      searchItems: [],
    };
  },
  computed: {
    // 搜索配置
    configSearch() {
      return [];
    },
    // 存在-搜索数据
    mixinHasSearchData() {
      return Object.keys(this.searchData).some(item => this.searchData[item]);
    },
  },
  methods: {
    // 初始化-列表搜索
    async mixinInitSearch() {
      if (!this.mixinSignInitSearch) {
        this.mixinSignInitSearch = true;
        const { data, rules, items } = processConfigForm(this.configSearch, 'search');
        this.searchData = data;
        this.searchRules = rules;
        this.searchItems = (items && items[0]) ? items[0] : [];
      }
    },
  },
}
</script>