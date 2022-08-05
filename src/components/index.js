
export default function registerComponents(app) {
  const req = require.context(".", true, /\.vue$/);

  req.keys().forEach(fileName => {
    const componentConfig = req(fileName);
    const name =
      fileName.name ||
      fileName.replace(/^\.\/(.*\/)?/, "").replace(/\.vue$/, "");
    /^My/.test(name) &&
      app.component(name, componentConfig.default || componentConfig);
  });
}
