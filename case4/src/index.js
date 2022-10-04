window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const path = window.location.pathname;

  (async () => {
    let text = '読み込むファイルがありませんでした。';
    if (path.includes('a')) {
      const { default: a } = await import( /* webpackChunkName: "a" */ './a.js');
      text = a();
    } else if (path.includes('b')) {
      const { default: b } = await import( /* webpackChunkName: "b" */ './b.js');
      text = b();
    }

    app.textContent = text;
  })();
})