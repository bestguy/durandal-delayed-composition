define(function (require, exports, module) {

    var ko = require('knockout');

    /**
     * This is the view model used on the landing page prior to Durandal being started.
     */
    function Model() {
        var self = this;

        self.message = ko.observable('Some dynamic text');

        // Where the 'magic' happens:
        self.startDurandal = function () {
            var app = require('durandal/app');
            var viewLocator = require('durandal/viewLocator');

            app.start().then(function () {
                viewLocator.useConvention();
                app.setRoot('Shell', 'entrance');
            });
        }
    }

    module.exports = Model;
});