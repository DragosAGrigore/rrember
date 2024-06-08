import Route from '@ember/routing/route';

export default class BandsNewRoute extends Route {
  resetController(_controller, _isExiting, _transition) {
    _controller.name = '';
  }
}
