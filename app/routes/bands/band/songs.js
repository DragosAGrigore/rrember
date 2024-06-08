import Route from '@ember/routing/route';

export default class BandsBandSongsRoute extends Route {
  resetController(_controller, _isExiting, _transition) {
    _controller.title = '';
    _controller.showAddSong = true;
  }
}
