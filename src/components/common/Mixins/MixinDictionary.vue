<script>

// utils
// import { getDictionarys } from '@/utils/cache';

export default {
  name: 'CommonMixinDictionary',
  data() {
    return {
      // 数据字典
      mixinDictionarys: {},
    };
  },
  methods: {
    // 初始化-数据字典
    async mixinInitDataDictionarys(dictionarys) {
      // if (dictionarys && typeof dictionarys === 'object') {
      //   const keys = Object.keys(dictionarys);
      //   if (keys.length > 0) {
      //     Object.assign(dictionarys, await getDictionarys(keys));
      //   }
      // }
    },
  },
}
</script>


