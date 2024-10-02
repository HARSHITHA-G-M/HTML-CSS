var app = angular.module('responsiveApp', []);

app.controller('MainController', ['$scope', function($scope) {
    // Navigation Links
    $scope.navLinks = [
        { label: 'Home', url: '#' },
        { label: 'About', url: '#' },
        { label: 'Services', url: '#' },
        { label: 'Contact', url: '#' }
    ];

    // Sidebar Items
    $scope.sidebarItems = ['Dashboard', 'Profile', 'Settings', 'Logout'];

    // Cards for Dashboard
    $scope.cards = [
        { title: 'Card 1', content: 'This is card number 1.' },
        { title: 'Card 2', content: 'This is card number 2.' },
        { title: 'Card 3', content: 'This is card number 3.' },
        { title: 'Card 4', content: 'This is card number 4.' }
    ];

    // Toggle for Hamburger Menu
    $scope.menuActive = false;
    $scope.toggleMenu = function() {
        $scope.menuActive = !$scope.menuActive;
    };
}]);
