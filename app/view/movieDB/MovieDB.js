Ext.define('MyApp.view.movieDB.MovieDB', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainMovieDB',
    controller: 'mainController',
    viewModel: 'mainMovieModel',

    header: {
        titlePosition: 0,
        height: 50,
        title: 'MovieDB',
        items: [{
            xtype: 'button',
            text: 'Favorite',
            listeners: {
                click: 'handleClickFavoriteBtn'
            }
        }]
    },
    layout: {
        type: 'vbox'
    },
    width: '100%',
    items: [{
        layout: {
            display: 'fit',
            height: '100%',
        },
        xtype: 'movie-list',
        height: '100%',
        width: '100%'
    }]

});