/**
 * Created by HJH on 2016/7/19.
 */

var app = angular.module('myApp', ['ngAnimate']);

app.controller('myCtrl', [function () {
    var own = this;
    own.clickable = true;
    own.isClick = function () {
        own.clickable = !own.clickable;
        if (own.clickable) {
            own.switch = {'show': true, 'hide': false};
        } else {
            own.switch = {'show': false, 'hide': true};
        }
    }
}]);

