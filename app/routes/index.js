import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  queryParams = {
    country: { refreshModel: true },
    language: { refreshModel: true },
    username: { refreshModel: true }
  };

  model(params) {
    return {
      country: params.country,
      language: params.language,
      username: params.username
    };
  }
}