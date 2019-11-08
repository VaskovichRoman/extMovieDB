Ext.define('MyApp.view.movieDB.movieList.MovieList', {
    extend: 'Ext.panel.Panel',
    xtype: 'movie-list',
    controller: 'movieList',
    scrollable: 'y',
    maxHeight: 720,
    layout: {
        type: 'column',
    },
    width: '100%',
    items: [
        {
            xtype: 'box',
            tpl: [
                `<tpl for=".">
                <div id="{data.id}" style="display:inline-block; margin:10px;">
                <img src="http://image.tmdb.org/t/p/w342{data.poster_path}" height = 500> 
                </div>
                </tpl>`
            ],
            bind: {
                data: '{movieDB.data.items}'
            },
            listeners: {
                element: 'el',
                delegate: 'div',
                click: 'redirectToMovieInfoPanel'
            }
        }
    ]
});
