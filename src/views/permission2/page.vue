<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
  </div>
</template>

<script>
import SwitchRoles from './components/SwitchRoles'

export default{
  name: 'PagePermission',
  components: { SwitchRoles },
  created(){
    console.log(123)
      console.log("this.$store",this.$store.state.tagsView)
      console.log("this.cachedViews",this.$store.state.tagsView.cachedViews)
      console.log("this.visitedViews",this.$store.state.tagsView.visitedViews)
  },
  methods: {
    handleRolesChange() {
      this.$router.push({ path: '/permission/index?' + +new Date() })
    },
  }
}
</script>
