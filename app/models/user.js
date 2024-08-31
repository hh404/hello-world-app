import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') country;
  @attr('string') language;
  @attr('string') username;
}
