import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class BandsBandSongsController extends Controller {
  @service catalog;

  @tracked showAddSong = true;
  @tracked title = '';

  get hasNoTitle() {
    return !this.title;
  }

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }

  @action
  async updateRating(song, rating) {
    song.rating = rating;
    this.catalog.update('song', song, { rating });
  }

  @action
  async saveSong() {
    let song = await this.catalog.create(
      'song',
      { title: this.title },
      {
        band: {
          data: {
            id: this.model.id,
            type: 'bands'
          }
        }
      }
    );
    console.log(song);
    this.model.songs = [...this.model.songs, song];
    this.#resetForm();
  }

  @action
  cancel() {
    this.#resetForm();
  }

  #resetForm() {
    this.title = '';
    this.showAddSong = true;
  }
}
