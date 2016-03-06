var pokeme = angular.module('pokeme', []);

pokeme.controller('friends-list-ctrl', function($scope){
    $scope.friends = [
        {first_name: "John", last_name: "Ceena", email: "jc@mail.com", image: "poking.jpg"},
        {first_name: "Cesar", last_name: "Perez", email: "cp@mail.com", image: "poking.jpg"},
        {first_name: "Some", last_name: "Friend", email: "sf@mail.com", image: "poking.jpg"},
        {first_name: "Cesar", last_name: "Armando", email: "ca@mail.com", image: "poking.jpg"},
        {first_name: "Make", last_name: "Hacking", email: "mh@mail.com", image: "poking.jpg"},
        {first_name: "Zack", last_name: "Lee", email: "zl@mail.com", image: "poking.jpg"},
        {first_name: "Ethan", last_name: "Chung", email: "ec@mail.com", image: "poking.jpg"},
        {first_name: "Cesar", last_name: "Armando", email: "cap@mail.com", image: "poking.jpg"},
        {first_name: "Some", last_name: "Friend", email: "sfe@mail.com", image: "poking.jpg"},
        {first_name: "Make", last_name: "Hacking", email: "mhl@mail.com", image: "poking.jpg"},
        {first_name: "Zack", last_name: "Lee", email: "zlw@mail.com", image: "poking.jpg"},
        {first_name: "Ethan", last_name: "Chung", email: "ecl@mail.com", image: "poking.jpg"}
    ];
});
