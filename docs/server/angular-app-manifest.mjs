
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/landing-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/landing-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 709, hash: '15a511c2794d855176425923a0c8c8731b33dc9d4c79c1cfce29e9143b61c26a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'c47908cdad9d04c0e044577143d7a8713ad6353bb87883e0cbd15fd4e16e572e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6088, hash: 'b74582f2c0ed468e4da6c47bcfc8acfc8126a4c83a70c74f82e417a024213f38', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CVMPDVDB.css': {size: 117, hash: 'UJ1Ft6Lwi7Q', text: () => import('./assets-chunks/styles-CVMPDVDB_css.mjs').then(m => m.default)}
  },
};
