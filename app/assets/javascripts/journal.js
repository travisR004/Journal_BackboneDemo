window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Data: {},
  initialize: function() {
    window.Journal.Data.posts = new Journal.Collections.Posts();
    new Journal.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Journal.initialize();

});
