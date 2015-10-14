'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
 .controller('MainCtrl', function($scope){
        var URL='http://placeimg.com/500/500/';
        $scope.time=6000;
        $scope.presentation=[
        {
            title:'Tipo de personas',
            image:URL+'people',
            description:'Prefiero hablar con personas que hacen cosas, que con personas que critican lo que otros hacen.'
        },
        {
            title:'Tus mejores amigos',
            image:URL+'animals',
            description:'Cuando un hombre mata a un tigre lo llaman deporte, cuando un tigre mata al hombre lo llaman ferocidad.'
        },   {
            title:'Cuida el lugar donde vives',
            image:URL+'nature',
            description:'Mira profundamente en la naturaleza y entonces comprenderás todo mejor.'
        }
        ];

 });
