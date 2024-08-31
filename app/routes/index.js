

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  model(params) {
    return this.store.createRecord('user', {
      country: params.country,
      language: params.language,
      username: params.username
    });
  }
}