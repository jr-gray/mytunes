// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  count: 0,

  // initialize: function(song) {
  //   if (song) {
  //     this.queue.push(song);
  //   }
  // },

  initialize: function(queue) {
    if (Array.isArray(queue)) {
      for (var i = 0; i < queue.length; ++i) {
        this.set(queue[i].title, queue[i]);
      }       
    } else if (queue) {
      console.log(queue);
      this.set(queue.title, queue);
    }
  },

  add: function(song) {
    this.set(song.title, song);
    console.log(song);
    if (this.length === 1) {
      this.playFirst();
    } 
  },

  playFirst: function() {
    //this.model.play();
  },

  //model.on('ended', ended);

  ended: function() {
    console.log('this ran');
    this.queue.shift();
  }


});