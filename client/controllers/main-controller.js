export default ['UserService', function(UserService){

    this.ctrlName = 'Main controller';

    this.changeCtrlName = function( _name ){
        this.ctrlName = _name;
    };

    this.getUsersList = function(){
        return UserService.getUsersList();
    };

    UserService.getUsers();
}];