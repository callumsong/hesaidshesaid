var app = app || {};

$(function() {
    var opinions = [
        {
            maleTitle: "Basketball Rocks",
            maleContent: "Basketball is the best ever",
            femaleTitle: "Basketball is lame",
            femaleContent: "Basketball is really boring"
        },
        {
            maleTitle: "Football Rocks",
            maleContent: "Football is the best ever",
            femaleTitle: "Football is lame",
            femaleContent: "Football is really boring"
        }
    ];
    
    new app.OpinionCollection(opinions);
});