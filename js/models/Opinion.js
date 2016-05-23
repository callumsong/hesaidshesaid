var app = app || {};

app.Opinion = Backbone.Model.extend({
  defaults: {
    maleTitle: "",
    maleContent: "",
    femaletTitle: "",
    femaleContent: ""
  }
});