<script>
/**
  *  @name 初始化-表单
  *  @description 配置化[通过配置项构建参数]
  */

// utils
import { processConfigForm } from '@/utils/common/FormConfiguration';

export default {
  name: 'CommonMixinInitForm',
  data() {
    return {
      // 标记-初始化表单
      mixinSignInitForm: false,
      // 表单数据
      formData: {},
      // 表单验证
      formRules: {},
      // 表单项
      formItems: {},
    };
  },
  computed: {
    // 表单配置项 => 表单数据 & 表单验证 & 表单项
    configForm() {
      return [];
    },
  },
  methods: {
    // 初始化-表单
    async mixinInitForm() {
      if (!this.mixinSignInitForm) {
        this.mixinSignInitForm = true;
        const { data, rules, items } = processConfigForm(this.configForm);
        this.formData = data;
        this.formRules = rules;
        this.formItems = items;
      }
    },
  },
}
</script>