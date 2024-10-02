var app = angular.module('dashboardApp', []);

app.controller('DashboardController', ['$scope', '$interval', function($scope, $interval) {
    // Sample User Data
    $scope.users = [
        { name: 'Alice', status: 'Active', messages: 120 },
        { name: 'Bob', status: 'Inactive', messages: 75 },
        { name: 'Charlie', status: 'Active', messages: 200 }
    ];

    // Function to simulate real-time data updates
    function updateUserData() {
        $scope.users.forEach(user => {
            user.messages += Math.floor(Math.random() * 10);  // Simulating new messages
            user.status = Math.random() > 0.5 ? 'Active' : 'Inactive';  // Randomize status
        });
    }

    // Update user data every 5 seconds
    $interval(updateUserData, 5000);
}]);
