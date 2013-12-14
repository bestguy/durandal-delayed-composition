requirejs.config({
    paths: {
        'durandal': '../lib/durandal/js',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'jquery.bootstrap': '../lib/bootstrap/bootstrap',
        'knockout': '../lib/knockout/knockout-2.3.0',
        'plugins': '../lib/durandal/js/plugins',
        'text': '../lib/require/text',
        'transitions': '../lib/durandal/js/transitions'
    },
    shim: {
        'jquery.bootstrap': { deps: ['jquery'] }
    }
});

define(function (require) {
    require('jquery.bootstrap');

    var $ = require('jquery');
    var ko = require('knockout');
    var Model = require('./Model');

    var viewModel = new Model();
    var view = $("#applicationHost")[0];
    ko.applyBindings(viewModel, view);

    // Durandal initialization (but not started)
    var app = require('durandal/app');
    var system = require('durandal/system');

    system.debug(true);
    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });
});