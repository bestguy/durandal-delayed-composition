define(function (require, exports, module) {

    var router = require('plugins/router');

    /**
     * This is the Durandal shell.
     */
    function Shell() {
        var self = this;
        self.router = router;

        self.activate = function () {
            return router.map([
                { route: '', title: 'Durandal View', moduleId: 'DurandalView', nav: true },
                { route: 'another', title: 'Another View', moduleId: 'AnotherView', nav: true }
            ]).activate();
        }
    }

    module.exports = Shell;
});
