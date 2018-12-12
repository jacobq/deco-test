import Component from '@ember/component';
import layout from '../templates/components/comp-with-decos';

import { computed } from '@ember-decorators/object';

export default class CompWithDecosComponent extends Component.extend({
  layout,
  greetee: 'world'
}) {
  @computed('greetee')
  get greeting() {
    return `Hello, ${this.greetee}!`;
  }
}
