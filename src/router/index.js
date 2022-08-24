import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Chat from '@/views/Chat';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat,
      }
  ]
})
