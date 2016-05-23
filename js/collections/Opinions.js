var app = app || {};

app.Opinions = Backbone.Collection.extend({
  // initialize: function() {
  //   this.add({maleSay: "I think males are awesome", femaleSay: "I thinks females are awesome"});
  //   this.add({maleSay: "Need to play sport", femaleSay: "Need my nails done"});
  // },
  model: app.Opinion
  // changeStatus: function(voted, index) {
  //   this.models[index].set("voted", voted);
  //   var newVoteCount = this.models[index].get("votes") + 1;
  //   this.models[index].set("votes", newVoteCount);
  // }
});