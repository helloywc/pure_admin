<script>
/**
  *  @name 初始化-详情(表单)
  *  @description 配置化[通过配置项构建参数]
  */

// utils
import { processConfigDetail } from '@/utils/common/FormConfiguration';

export default {
  name: 'CommonMixinInitDetail',
  data() {
    return {
      // 标记-初始化详情
      mixinSignInitDetail: false,
      // 详情数据
      detailData: {},
      // 详情项
      detailItems: {},
    };
  },
  computed: {
    // 详情配置项 => 详情数据 & 详情项
    configDetail() {
      return [];
    },
  },
  methods: {
    // 初始化-详情
    async mixinInitDetail() {
      if (!this.mixinSignInitDetail) {
        this.mixinSignInitDetail = true;
        const { data, items } = processConfigDetail(this.configDetail);
        this.detailData = data;
        this.detailItems = items;
      }
    },
  },
}
</script>