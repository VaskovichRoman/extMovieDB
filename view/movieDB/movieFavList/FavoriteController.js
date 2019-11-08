Ext.define('MyApp.view.movieDB.movieFavList.FavoriteController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.fav-list',


    backToMainList: function () {
        this.redirectTo('movieList');
    },

    onLoadFavList: function () {
        const vm = this.getViewModel();
        const favorList = vm.get('favList');
        debugger
        favorList.add(JSON.parse(localStorage.getItem('favList')));
    },
    handleClickDeleteBtn: function (e) {
        debugger

    }

});
