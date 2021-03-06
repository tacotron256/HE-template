export class App {
    configureRouter (config, router) {
      console.log('configuring router');
    this.router = router;
    config.title = "Home";
    config.map([
      {route: '', name: 'safety', moduleId: 'safety/safety', nav: true, title: 'Safety'},
      {route: 'register', name: 'register', moduleId: 'registration/register', nav: true, title: 'Register'},
      {route: 'registration-status', name: 'registration-status', moduleId: 'registration/registration-status', nav: true, title: 'Registration Status'}
    ]);
  }
}