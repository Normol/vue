/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-06 17:04:00
 * @LastEditTime: 2019-08-19 11:10:57
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import testRouter from './module/test'
import homeRouter from './module/home'

Vue.use(Router)

const router = new VueRouter({
  routes: [
    homeRouter
    // testRouter
  ]
})

export default router
