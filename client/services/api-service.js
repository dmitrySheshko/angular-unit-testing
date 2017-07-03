export default ['Restangular', function(Restangular) {
    const rest = Restangular.all('api');

    function getUsers(){
        return rest.customGET('user');
    }

    return {
        getUsers: getUsers
    };
}];