window.Journal.Views.PostShowView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'add remove sync reset update', _.debounce(this.render, 50));

  },
  template: JST['posts/show'],
  editbox: JST['posts/edit_box'],

  render: function(){
    var rendered = this.template({ post: this.model });
    this.$el.html(rendered);
    return this;
  },

  events: {
    "dblclick div#title" : "editTitle",
    "dblclick div#body" : "editBody",
    "blur form" : "update"
  },

  editTitle: function(event){
    var rendered = this.editbox({ attr: this.model.escape("title"), name: "title" });
    $('#title').html(rendered);
    return this;
  },

  editBody: function(event){
    var rendered = this.editbox({ attr: this.model.escape("body"), name: "body" });
    $('#body').html(rendered);
    return this;
  },

  update: function(event){
    event.preventDefault();
    var postId = this.model.id
    var post = $(event.target).serializeJSON().post;
    this.model.save(post, {
      patch: true,
      success: function(){
        console.log('success')
        Backbone.history.navigate("#/posts/" + postId, {trigger: true})
      },
      error: function(model, response){
        alert(response.responseText);
      }
    });
  }
});