/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-06 17:16:19
 * @LastEditTime: 2019-08-19 11:06:05
 * @LastEditors: Please set LastEditors
 */
const testRouter = {
  path: '/test',
  component: () => import('@/views/test/index.vue'),
  children: [
    {
      path: 'index',
      component: () => import('@/views/test/index.vue')
    }
  ]
}
export default testRouter
