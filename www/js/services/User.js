wanthaver.factory('User', ['$http', 'Auth', function ($http, Auth, $httpParamSerializerJQLike) {
    return {
    
        getCurrentUser: function(){
            return $http.get(server+'/v1/login', Auth.getHeaderObject());
        },

        getById: function(id){
            return $http.get(server+'/v1/users/'+id, Auth.getHeaderObject());
        },

        createUser: function(user){
            return $http.post(server+'/v1/users?password='+user.password, user, Auth.getHeaderObject());
        },

        sendResetToken: function(email){
            return $http.post(server+'/v1/users/passwordtoken', "email="+email, {headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }});
        }

    };
}]);
