requirejs.config({
    baseUrl: 'node_modules',
    paths: {
      app: '../app',
    }
});

requirejs(['app/fibonacci']);
