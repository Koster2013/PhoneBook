'use strict';

var app = angular.module('PhoneBookApp');

app.factory("restService",
  function ($http) {
      
      var service = {};

      //  Anforderungen  autorisieren https://msdn.microsoft.com/de-de/library/office/JJ164022.aspx
      var requestDigest;

      $http({
          method: 'POST',
          url: "../_api/contextinfo",
          headers: { "Accept": "application/json; odata=verbose" }
      }).success(function (data) {
          requestDigest = data.d.GetContextWebInformation.FormDigestValue
      });



      // ************* Services
      service.getContacts = function () {
          var restQueryUrl = "../_api/web/lists/getByTitle('Contact')/items/" +
                             "?$select=ID,FirstName,FullName,HomePhone,EMail,URL";
          return $http({
              method: 'GET',
              url: restQueryUrl,
              headers: { "Accept": "application/json; odata=verbose" }
          })
      }


      service.addContact = function (FirstName, FullName, HomePhone, EMail ,Url) {
          var restQueryUrl = "../_api/web/lists/getByTitle('Contact')/items";

          var customerData = {
              __metadata: { "type": "SP.Data.ContactListItem" },
              FirstName: FirstName,
              FullName: FullName,
              HomePhone: HomePhone,
              EMail: EMail,
              URL: { "Url": 'http://api.randomuser.me/portraits/men/95.jpg' }
          };

          var requestBody = JSON.stringify(customerData);

          console.log(requestBody);

          return $http({
              method: 'POST',
              url: restQueryUrl,
              contentType: "application/json;odata=verbose",
              data: requestBody,
              headers: {
                  "Accept": "application/json; odata=verbose",
                  "X-RequestDigest": requestDigest,
                  "content-type": "application/json;odata=verbose"
              }
          });
      }

      service.deleteContact = function (id) {
          var restQueryUrl = "../_api/web/lists/getByTitle('Contact')/items(" + id + ")";
          return $http({
              method: 'DELETE',
              url: restQueryUrl,
              headers: {
                  "Accept": "application/json; odata=verbose",
                  "X-RequestDigest": requestDigest,
                  "If-Match": "*"
              }
          });
      }

      return service;
  });