/**
 * Created by alex on 21/02/2015.
 */
(function(){
    angular
        .module('ShopkinsApp')
        .controller('ShopkinsViewerController',ShopkinsViewerController);

    ShopkinsViewerController.$inject=['ShopkinsViewerService'];

    function ShopkinsViewerController(ShopkinsViewerService){
        var vm = this;

        vm.message=message();
        vm.getLogs=GetLogs;

        vm.show=ShopkinsViewerService.someValue;

        function message() {
            return 'This is Shopkins Viewer';
        }

        function GetLogs(rc){
            var ret =[];

            //Make an array to display in the table:
            var now = new Date();
            var dte = now;
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});
            ret.push({RC:1,revision:324,author:'Alex', date: dte, msg:'asdf'});

            return ret;
        }
    }

})();