'use strict'; //http://www.w3schools.com/js/js_strict.asp

var app = angular.module('PhoneBookApp');

app.controller('homeCtrl',
    function ($scope, restService) {
        restService.getContacts().success(function (data) {
            $scope.contacts = data.d.results
        });
     
        $scope.deleteContact = function (id) {
            restService.deleteContact(id).success(function (data) {
                restService.getContacts().success(function (data) {
                    $scope.contacts = data.d.results
                });
            });
        }
    }
);

app.controller('addCtrl',
    function ($scope, $location, restService) {

        $scope.contact = {};
        $scope.contact.FirstName = "";
        $scope.contact.FullName = "";
        $scope.contact.HomePhone = "";
        $scope.contact.EMail = "";
        $scope.contact.Url = "http://api.randomuser.me/portraits/men/95.jpg";

        $scope.addContact = function () {
            var firstName = $scope.contact.FirstName;
            var lastName = $scope.contact.FullName;
            var homePhone = $scope.contact.HomePhone;
            var email = $scope.contact.EMail;
            var url = $scope.contact.Url;

          
            restService.addContact(firstName, lastName, homePhone, email, url)
              .success(function (data) {
                  $location.path("/");
              });
        }
    }
);

app.controller('aboutCtrl',
       function ($scope) {
           $scope.title = "Phone Book App by Marc Koster"
           $scope.description = "This is my Phone Book App"
       }
);