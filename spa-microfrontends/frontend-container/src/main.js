System.import('single-spa').then(function (singleSpa) {
  singleSpa.registerApplication({
    name: '@mfs/microfrontend-react',
    app: () => System.import('@mfs/microfrontend-react'),
    activeWhen: ["/"],
    customProps: {}
  });

  singleSpa.registerApplication({
    name: '@mfs/microfrontend-react-two',
    app: () => System.import('@mfs/microfrontend-react-two'),
    activeWhen: ["/"],
    customProps: {}
  });

  singleSpa.start();
});