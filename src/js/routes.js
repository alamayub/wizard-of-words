
import HomePage from '../pages/home.vue';
import ProfilePage from '../pages/profile.vue';
import PostViewPage from '../pages/post_view.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '/postView/:post',
    component: PostViewPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
