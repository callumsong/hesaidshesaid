var app = app || {};

app.OpinionCollection = Backbone.View.extend({
  el: "#opinions",
  
  initialize: function(initialOpinions) {
    this.collection = new app.Opinions(initialOpinions);
    this.render();
    this.listenTo(this.collection, "add", this.renderOpinion);
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
  },
  
  events: {
    "click #addNewOpinion":"addOpinion"
  },
  
  addOpinion: function(e) {
    e.preventDefault();
    
    var formData = {};
    
    $("#addOpinion div").children("input, textarea").each(function(i, el) {
      if ($(el).val() != "") {
        formData[el.id] = $(el).val();
      }
    });
    
    this.collection.add(new app.Opinion(formData));
  }
});