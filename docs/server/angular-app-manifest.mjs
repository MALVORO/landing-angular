
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 694, hash: '929f5998fff10198c6c232043e3b8aa0c5aaad7829549cea0a1094f589be2c73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'fb4b7dcb192a8c4002f6c862898c31160bcad9987d659baba89bd36a3b7019e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6073, hash: '99a5aac8090d58d634e24c84bcfe676baa7d4b7cb4de0c61662eef4fc8c47f61', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CVMPDVDB.css': {size: 117, hash: 'UJ1Ft6Lwi7Q', text: () => import('./assets-chunks/styles-CVMPDVDB_css.mjs').then(m => m.default)}
  },
};
