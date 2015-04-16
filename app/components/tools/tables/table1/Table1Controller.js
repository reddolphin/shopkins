/**
 * Created by alex on 16/04/2015.
 */
/**
 * Created by alex on 21/02/2015.
 */
(function(){
    angular
        .module('ShopkinsApp')
        .controller('Table1Controller',Table1Controller);

    function Table1Controller(){
        var vm = this;

        vm.getLogs=GetLogs;

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