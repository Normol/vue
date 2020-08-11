/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 13:04:06
 * @LastEditTime: 2019-08-19 11:19:56
 * @LastEditors: Please set LastEditors
 */
const homeRouter = {
  path: '',
  component: () => import('@/views/home/index.vue'),
  children: [
    {
      path: 'test/:id?',
      component: () => import('@/views/test/index.vue'),
      children: [
        {
          path: 're',
          name: 're',
          component: () => import('@/views/test/index.vue')
        }
      ]
    }
  ]
}
export default homeRouter

