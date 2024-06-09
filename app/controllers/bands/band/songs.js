import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { Song } from '../../../models/song';

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
  saveSong() {
    let song = new Song({
      title: this.title,
      rating: 0,
      band: this.model
    });

    this.catalog.add('song', song);
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
