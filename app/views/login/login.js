var frameModule = require('ui/frame');
var UserViewModel = require('../../shared/view-models/user-view-model');
var dialogsModule = require('ui/dialogs');

var user = new UserViewModel({
    email: "mjrichards91@gmail.com",
    password: "Password1!"
});

var page;
var email;

exports.loaded = function (args) {
    page = args.object;

    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }

    page.bindingContext = user;
};

exports.signIn = function () {
    user.login()
        .catch(function (error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function () {
            frameModule.topmost().navigate("views/list/list");
        });
};

exports.register = function () {
    frameModule.topmost().navigate('views/register/register');
};