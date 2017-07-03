import angular from 'angular';
import mocks from 'angular-mocks';
import sinon from 'sinon';
import ModuleName from './app';

var context = require.context('./', true, /\.test\.js/);
context.keys().forEach(context);