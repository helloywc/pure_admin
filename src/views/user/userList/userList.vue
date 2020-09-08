<template>
  <div class="app-container">
    <h1>userList</h1>
  </div>
</template>

<script>
  import MixinCommon from '@/components/common/Mixins/MixinCommon';

export default{
  name: 'userList',
  mixins: [MixinCommon],
  methods: {
    initPage(){
      console.log(123)
    },
    mixinBeforeInit(){
      console.log(223)
    }
  }
}
</script>
