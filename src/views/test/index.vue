<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 11:22:38
 * @LastEditTime: 2019-08-19 11:16:11
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div>测试
      <router-link :to="{path: 're'}">re</router-link>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'Test',
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>

</style>

