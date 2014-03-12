window.Journal.Views.PostFormView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'add remove sync reset', _.debounce(this.render, 50));
  },
  template: JST['posts/form'],

  render: function(){
    var rendered = this.template({post: this.model});
    this.$el.html(rendered);
    return this;
  },

  events: {
    "submit form" : "update"
  },

  update: function(event){
    event.preventDefault();
    var post = $(event.target).serializeJSON();
    if(post.isNew){
      this.collection.create(post,{
        post: true,
        success: function(){
          Backbone.history.navigate("#/", {trigger: true})
        }
      })
    } else {
      this.model.save(post, {
        patch: true,
        success: function(){
          Backbone.history.navigate("#/", {trigger: true})
        }
      });
    }
  }
});