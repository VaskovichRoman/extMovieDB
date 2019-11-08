Ext.define('MyApp.view.movieDB.MovieDBModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainMovieModel',

    stores: {
        movieDB: {
            fields: [
                //{name: 'title', type: 'string'}
            ],
            data:[],
            proxy: {
                type: 'ajax',
                url: 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=2.json',
                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            },
            autoLoad: true
        },
        favList:{
            fields: [],
            data:[]
        }
    }
});
