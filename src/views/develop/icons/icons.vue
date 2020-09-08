<template>
  <div class="app-container">
    <h1>icons</h1>
    <div class="svg-icon-library">
      <div class="title">
        <div>name</div>
        <div>16*16</div>
        <div>24*24</div>
        <div>32*32</div>
      </div>
      <!--  -->
      <div class="icon-list">
        <div v-for="item in iconLibrary"
             :key="item"
             class="row">
          <!-- 名称 -->
          <div class="name">{{item}}</div>
          <!--  -->
          <div class="icon">
            <svg-icon :icon-class="item" />
          </div>
          <!--  -->
          <div class="icon">
            <svg-icon :icon-class="item"
                      class="icon svg-icon-background" />
          </div>
          <!--  -->
          <div class="icon">
            <svg-icon :icon-class="item"
                      class="icon svg-icon-fill" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'userDetail',
  data() {
    return {
      // 图标库
      iconLibrary: [],
    };
  },
  methods: {
    getIconLibrary() {
      this.iconLibrary = require
        .context('@/icons/svg', false, /\.svg$/)
        .keys()
        .map(item => item.replace(/^(\.\/)|(\.svg)$/g, ''));
    },
  },
  created(){
    this.getIconLibrary()
  },



}
</script>

<style lang="scss" scoped>
  .svg-icon-library {
    .title {
      width: 300px;
      display: flex;
      font-size: 16px;
      font-weight: bold;
      line-height: 30px;
      div {
        width: 50px;
        text-align: center;
        &:first-child {
          width: 120px;
        }
      }
    }
    .icon-list {
      display: flex;
      flex-wrap: wrap;
      .row {
        height: 50px;
        width: 300px;
        display: flex;
        align-items: center;
        border-right: 1px solid #30b08f;
        .name {
          width: 120px;
          font-size: 16px;
          text-align: center;
        }
        .icon {
          height: 50px;
          width: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          fill: #999;
        }
        .svg-icon-background {
          height: 30px;
          width: 30px;
          background: rgb(64, 158, 255);
          padding:3px;
          fill: #fff;
        }
        .svg-icon-fill {
          height: 32px;
          width: 32px;
          fill: rgb(64, 158, 255);
        }
      }
    }
  }
</style>
