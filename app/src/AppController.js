/**
 * Main App Controller for the UQ Library
 * @param $mdSidenav
 * @constructor
 */
function AppController($mdSidenav,$location, $rootScope) {
    let self = this;

    self.selected     = null;
    self.libraries    = [ ];
    
    
    $rootScope.$on("CallSelectLibrary", function(event, data){
        self.selectLibrary(data);
    });

    self.selectLibrary   =  ( library ) => {
        self.selected = angular.isNumber(library) ? $scope.libraries[library] : library;
        $('md-list .md-button').removeClass('selected');
        var selSpan = $(".md-button span").filter(function() { return ($(this).text().indexOf(self.selected.name) > -1) });
        selSpan.closest('button').addClass('selected');
        $location.path('/library-detail/'+self.selected.lid ).replace();
    };
    self.toggleList   = (ev) => {
        if(ev && ev.target && ev.target.name ==="search"){
            return;
        }
        $mdSidenav('left').toggle();
    };

    // Load all libraries and availability data
    self.libraries    = $.parseJSON(sessionStorage.getItem("libraryData"));
    self.availability = $.parseJSON(sessionStorage.getItem("availability"));
}

export default [ '$mdSidenav','$location','$rootScope', AppController ];
