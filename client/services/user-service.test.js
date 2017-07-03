describe('User service', function(){

    var userService;
    var $httpBackend;
    var apiService;

    var response = {
        users: [
                {
                    firstName: 'FirsName',
                    lastName: "LastName"
                }
            ]
    };

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function($injector, UserService, ApiService){
        userService = UserService;
        apiService = ApiService;
        $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Get an users list', function(){
        $httpBackend.expectGET("/api/user").respond(200, response);
        userService.getUsers();
        $httpBackend.flush();

        expect(userService.getUsersList()).to.be.an('array');
        expect(userService.getUsersList()).to.deep.equal(response.users);
    });

});