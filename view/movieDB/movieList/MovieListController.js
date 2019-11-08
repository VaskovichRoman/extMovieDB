Ext.define('MyApp.view.movieDB.movieList.MovieListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.movieList',


    onFavoriteList: function () {
        const view = this.getView();
        debugger

        view.removeAll();
        view.add({
            xtype: 'fav-list'
        });
    },

    onMovieInfo: function (id) {
        const view = this.getView();
        const vm = this.getViewModel();

        view.removeAll();
        vm.set('selectIdMovie', id);
        view.add({
            xtype: 'movie-info',
            selectIdMovie: id
        });
    },

    redirectToMovieInfoPanel: function (event) {
        const vm = this.getViewModel();
        const store = vm.get('movieDB');
        const currentId = event.currentTarget.getAttribute('id');
        const selectMovieData = store.getById(currentId).getData();
        const objectMovieData = {
            title: selectMovieData.original_title,
            description: selectMovieData.overview,
            poster: selectMovieData.poster_path,
        };
        const encodeMovie = btoa(JSON.stringify(objectMovieData));

        this.redirectTo(`movieInfo/${encodeMovie}`);
    }
});
