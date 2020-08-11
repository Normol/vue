<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 13:03:52
 * @LastEditTime: 2019-08-19 11:18:08
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div>
      <button>主页面</button>
      <router-link :to="{path: 'test/11', params: {id: '12'}}">ceshi</router-link>
      <router-view></router-view>
    </div>
</template>
<script>
import { debounce } from '@/utils/index'
export default {
  name: 'Home',
  mounted() {
    const buttonDom = document.querySelector('button')
    const fn = debounce(() => { console.log(12) }, 2000)
    buttonDom.addEventListener('click', fn, false)
  },
  data() {
    return {

    }
  },
  methods: {
    handleClick() {
    }
  }
}
</script>
<style lang="less" scoped>

</style>

