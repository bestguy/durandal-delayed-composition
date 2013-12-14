define(function (require, exports, module) {

    var ko = require('knockout');

    function AnotherView() {
        var self = this;

        self.message = ko.observable('Very cool');
    }

    module.exports = AnotherView;
});