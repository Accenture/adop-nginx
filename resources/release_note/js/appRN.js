(function (ng, window, document, undefined) {
    'use strict';
    
    /* this module allows to execute js code loaded dynamically from the bp */
    ng.module('ngLoadScript', [])
         .directive('script', function() {
             return {
                 restrict: 'E',
                 scope: false,
                 link: function(scope, elem, attr) {

                     if (attr.type === 'text/javascript-lazy') {
                         var code = elem.text();
                         var f = new Function(code);
                         f();
                     }
                 }
             };
         });

    ng.module('rnApp', ['ngLoadScript'])
        /* main controller that load the tools and the blueprints */
        .controller('mainController', ['dataFactory', 'getServicesStatus', '$scope', function(dataFactory, getServicesStatus, $scope){
                var controller = this;

                dataFactory().success(function(data){ 
                    controller.core = data.core;
                    $scope.codeJSON = data.blueprints;
                    controller.core.forEach(function(element, index, array){
                        generateUrls(element.components);
                    });
                    getServicesStatus(controller.core);
                    setInterval(function(){
                        getServicesStatus(controller.core);
                    },10000);
                });                
            }]
        )
        /* load the components/tools */
        .directive('componentList', function(){
            var app = this;
            return{
                restrict: 'E',
                templateUrl: 'dir/component-list.html',
                controller: function(){
                   
                }
            };
        })
        /* replace the missing image with text*/
        .directive('errSrc', function() {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {                                        
                    element.bind('error', function() {
                        var parent = element.parent();
                        if(parent.find("span").length === 0){
                            var span = ng.element('<span></span>');
                            span.text(attrs.title);
                            parent.append(span);
                        }
                        parent.addClass("no-image");
                        
                    });
                }
            };
        });
    
    /* fetch the data from the descriptor file */
    ng.module('rnApp').factory('dataFactory', ['$http', function($http){
        return function () { return $http.get('./plugins.json'); };
    }]);
  
  
    function generateUrls(data){
        data.forEach(function(element, index, array){
            if(element.linkCreate){
                element.link = createUrl(element.linkCreate.host) + element.linkCreate.endPath;
            }
        });        
    }
    
    function createUrl(host){
        return "http://"+ host + "." + window.location.host+ (window.location.host.indexOf(".xip.io") > -1 ? "" : ".xip.io/");
    }
         
    function getStatusClass(status,node_status){

        if (status === "passing" && node_status === "passing"){
            return "bs-callout-success";
        }else{
           return "bs-callout-danger";
        }
    }
    /* check the status of the services */
    ng.module('rnApp').factory('getServicesStatus', ['$http', function($http){
        return function (components) {     
        };
    }]);
    
    
         
    


})(angular, window, document);
