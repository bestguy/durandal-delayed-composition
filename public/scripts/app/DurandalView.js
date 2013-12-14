define(function (require, exports, module) {

    var ko = require('knockout');

    function DurandalView() {
        var self = this;

        self.message = ko.observable('So much awesome.');
    }

    module.exports = DurandalView;
});