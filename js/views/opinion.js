var app = app || {};

app.OpinionView = Backbone.View.extend({
  tagName: 'div',
  className: 'opinionContainer',
  template: _.template($('#opinionTemplate').html()),
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    
    return this;
  }
});