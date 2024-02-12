import { registerApplication, start } from 'single-spa';

registerApplication(
  'reactApp',
  () => import('../my-react-app/src/index.js'),
  (location) => location.pathname.startsWith('/react')
);

registerApplication(
  'vueApp',
  () => import('../my-vue-project-v2/src/main.js'),
  (location) => location.pathname.startsWith('/vue')
);

start();
