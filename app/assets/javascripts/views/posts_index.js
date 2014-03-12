window.Journal.Views.PostsIndexView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'add remove sync reset', _.debounce(this.render, 50));
  },

  template: JST['posts/index'],

  render: function(){
    console.log('rendering')
    var rendered = this.template({ posts: this.collection });
    this.$el.html(rendered);
    return this;
  },

  events: {
    "click button.delete-button" : "destroyPost"
  },

  destroyPost: function(event) {
    var postId = $(event.target).data("id");
    var post = this.collection.get(postId);
    post.destroy();
  }
});