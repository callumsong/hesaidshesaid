var app = app || {};

app.OpinionCollection = Backbone.View.extend({
  el: "#opinions",
  
  initialize: function(initialOpinions) {
    this.collection = new app.Opinions(initialOpinions);
    this.render();
  },
  
  render: function() {
    this.collection.each(function(item) {
      this.renderOpinion(item);
    }, this);
  },
  
  renderOpinion: function(item) {
    var opinionView = new app.OpinionView({
      model: item
    });
    this.$el.append(opinionView.render().el);
  }
});