<script>
/**
  *  @name 列表-数据删除
  *  @description 数据删除后，实际分页总数大于删除前的，则当前分页减一
  *  @description 或者，数据删除后，当前分页数固定为第一页
  */
export default {
  name: 'CommonMixinListDelete',
  data() {
    return {
      // 列表-数据
      tableData: [],
      // 列表-选中数据
      tableSelection: [],
      // 分页
      pager: { page: 1, size: 10, total: 0 },
    };
  },
  methods: {
    // 获取 列表数据
    getList() { },
    // 删除成功后-重新获取列表数据
    mixinAfterDeleteSuccess() {
      // 最大页数
      const maxPage = Math.ceil(this.pager.total / this.pager.size);
      // 判断 => 大于一页 & 尾页 & 全选
      const sign = (maxPage > 1)
        && (maxPage === this.pager.page)
        && (this.tableSelection.length === this.tableData.length);
      if (sign) {
        // 上一页
        this.$set(this.pager, 'page', maxPage - 1);
      } else {
        // 获取 列表数据
        this.getList();
      }
    },
  },
}
</script>


