import angular from 'angular';
import 'restangular';
import appConfig from './config/app-config';
import MainController from './controllers/main-controller';
import UserService from './services/user-service';
import ApiService from './services/api-service';

const app = angular.module('app', ['restangular']);

app.controller('MainController', MainController);

app.service('ApiService', ApiService);
app.service('UserService', UserService);

app.run(appConfig);

export default app;