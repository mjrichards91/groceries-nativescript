var frameModule = require('ui/frame');
var observableModule = require('data/observable');
var UserViewModel = require('../../shared/view-models/user-view-model');

var page;
var email;

var user = new observableModule.fromObject({
    email: "user@domain.com",
    password: "password"
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = user;
};

exports.signIn = function () {
    email = page.getViewById('email');
    console.log(email.text);
};

exports.register = function () {
    frameModule.topmost().navigate('views/register/register');
};