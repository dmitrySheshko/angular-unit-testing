describe('Api service.', function(){

    var apiService;
    var $httpBackend;
    var usersList = [{firstName: 'FirsName'}];

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function($injector, ApiService){
        apiService = ApiService;
        $httpBackend = $injector.get("$httpBackend");
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Send an user request', function () {
        $httpBackend.expectGET("/api/user").respond(usersList);
        apiService.getUsers();
        expect($httpBackend.flush).to.not.Throw();
    });
});