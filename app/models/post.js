import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.belongsTo('author'),
  body: DS.attr('string'),
  comments: DS.hasMany('comment')
});
