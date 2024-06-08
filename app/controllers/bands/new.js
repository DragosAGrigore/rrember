import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Band } from '../../routes/bands';
import { dasherize } from '@ember/string';

export default class BandsNewController extends Controller {
  @tracked name = '';

  get hasNoName() {
    return !this.name;
  }

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  saveBand() {
    new Band({
      id: dasherize(this.name),
      name: this.name,
      songs: []
    });
  }
}
