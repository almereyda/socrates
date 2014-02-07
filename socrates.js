/*global Socrates Backbone marked */

marked.setOptions({
    gfm      : true,
    sanitize : true
});

window.Socrates = {
    firebaseUrl : 'https://torid-fire-5008.firebaseio.com/'
};


// Start the app.
$(function () {
    var view = new Socrates.View({
        model : new Socrates.Model(),
        el    : $('html')
    })
        .render();

    Backbone.history.start();
});
