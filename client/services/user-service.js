export default ['ApiService', function(ApiService){
    let usersList = [];

    function getUsers(){
        ApiService.getUsers().then((resp) => {
            //usersList = resp.plain().users;
            usersList = resp.users;
        });
    }

    function getUsersList(){
        return usersList;
    }

    return {
        getUsers: getUsers,
        getUsersList: getUsersList
    };
}];