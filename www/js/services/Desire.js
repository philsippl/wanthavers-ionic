wanthaver.factory('Desire', ['$http', 'Auth', 'FilterSetting', function ($http, Auth, FilterSetting) {
    return {

        list: function(last_desire_id){
            var limit = 6;
            return $http.get(server+'/v1/desires', {
                params: {
                    category: FilterSetting.getCategory(),
                    price_min: FilterSetting.getMinPrice(),
                    price_max:  FilterSetting.getMaxPrice(),
                    rating_min: FilterSetting.getMinRating(),
                    last_desire_id: last_desire_id,
                    limit : limit,
                    status: 1
                }
            });
        },

        getDetail: function (id) {
            return $http.get(server+'/v1/desires/'+id);
        },

        create: function(desire){
            console.log(desire);
            return $http.post(server+'/v1/desires',
                desire,
                Auth.getHeaderObject()

            );
        },

        deleteDesire: function(id) {
            return $http.delete(server+'/v1/desires/'+id, Auth.getHeaderObject());
        },

        flagDesire: function(id, desireFlag) {
            return $http.post(server+'/v1/desires/'+id+'/flags'+desireFlag, Auth.getHeaderObject());
        },

        getChat: function(id, user2) {
            return $http.get(server+'/v1/desires/'+id+'/chat/'+user2, Auth.getHeaderObject());
        },

        updateDesireStatus: function(id, status) {
            return $http.put(server+'/v1/desires/'+id+'/status?status='+status, {}, Auth.getHeaderObject(true));
        }

    };
}]);