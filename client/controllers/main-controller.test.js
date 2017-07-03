describe('Main controller', function(){

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
    }));

    it('Has a name property', function() {
        var controller = $controller('MainController');
        expect(controller).to.have.property('ctrlName');
    });

    it('Check a ctrlName variable', function(){
        var controller = $controller('MainController');
        expect(controller.ctrlName).to.equal('Main controller');
    });

    it('Change a ctrlName variable and compare with a new value', function(){
        var newName = 'New name';
        var controller = $controller('MainController');
        controller.changeCtrlName(newName);
        expect(controller.ctrlName).to.equal(newName);
    });

    describe('Get users list', function(){

        var $userService;
        var usersList = [{firstName: 'FirsName'}];

        beforeEach(angular.mock.inject(function(UserService){
            $userService = UserService;
            sinon.spy($userService, 'getUsers');
            sinon.stub($userService, 'getUsersList').callsFake(function(){return usersList});
        }));

        afterEach(function(){
            $userService.getUsers.restore();
            $userService.getUsersList.restore();
        });

        it('Call a getUsers method when a controller was initiated', function(){
            var controller = $controller('MainController', {UserService: $userService});
            assert($userService.getUsers.calledOnce);
        });

        it('Get an users list', function(){
            var controller = $controller('MainController', {UserService: $userService});
            var _userList = controller.getUsersList();
            expect(_userList).to.equal(usersList);
        });
    });
});