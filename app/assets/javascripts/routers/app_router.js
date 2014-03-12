window.Journal.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(){
    var indexView = new Journal.Views.PostsIndexView({collection: Journal.Data.posts});
    Journal.Data.posts.fetch();
    $('div#sidebar').append(indexView.render().$el);
  },

  routes: {
    "": "postsIndex",
    "posts/new": "postNew",
    "posts/:id": "postShow",
    "posts/:id/edit": "postEdit"
  },

  postsIndex: function() {
    var indexView = new Journal.Views.PostsIndexView({collection: Journal.Data.posts});
    Journal.Data.posts.fetch();
    this._swapView(indexView);

  },

  postShow: function(id){
    var post = Journal.Data.posts.getOrFetch(id);

    var showView = new Journal.Views.PostShowView({
      model: post
    });

    this._swapView(showView)
  },

  postEdit: function(id){
    var post = Journal.Data.posts.getOrFetch(id);
    var editView = new Journal.Views.PostFormView({
      model: post
    });

    this._swapView(editView);

  },

  postNew: function(){
    var post = new Journal.Models.Post();
    var newView = new Journal.Views.PostFormView({
      model: post,
      collection: Journal.Data.posts
    });
    this._swapView(newView);
  },

  _swapView: function(view){
    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;

    $('div#content').html(view.render().$el);
  }
})

