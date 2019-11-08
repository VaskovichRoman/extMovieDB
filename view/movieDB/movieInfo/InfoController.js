Ext.define('MyApp.view.movieDB.movieInfo.InfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.info',

    beforerenderInfoPanel: function () {
        const vm = this.getViewModel();
        const idMovie = vm.get('selectIdMovie');
        const decodeObject = JSON.parse(atob(idMovie));
        debugger
        vm.set('selMovie', decodeObject);
    },


    backToMainList: function () {
        this.redirectTo('movieList');
    },

    handlerAddToFavoriteBtn: function () {

        const vm = this.getViewModel();
        const selMovie = vm.get('selMovie');
        const favMovie = vm.get('favList');

        favMovie.add(selMovie);
        //const movieArrayToLS = favMovie.data.items.map(movie => movie.getData());

        const movieArrayToLS = favMovie.data.items.map(movie => {
            let movieData = movie.getData();
            return {
                title: movieData.title,
                poster: movieData.poster,
                description: movieData.description
            }
        });

        debugger
        localStorage.setItem('favList', JSON.stringify(movieArrayToLS));
    }
});
