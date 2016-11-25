import LibraryDialogController from 'src/library/components/details/LibraryDialog';
export default {
    name : 'libraryDetails',
    config : {
        bindings         : {  selected: '<' },
        templateUrl      : 'src/library/components/details/LibraryDetails.html',
        controller       : ['$routeParams', '$scope','$mdPanel','$mdBottomSheet', '$rootScope', 
            function LibraryDetailsController ($routeParams, $scope,     $mdPanel, $mdBottomSheet, $rootScope)  {
                this.libraries    = $.parseJSON(sessionStorage.getItem("libraryData"));
                this.availability = $.parseJSON(sessionStorage.getItem("availability"));        
                this.selected = $.grep( this.libraries, function(e) {
                    return Number(e.lid) === Number($routeParams.ID);
                })[0];
                var selLib = this.selected;
      
                $rootScope.$emit("CallSelectLibrary", selLib);
                
                this.selectedAvailabilty = $.grep(this.availability, function(e){
                    return e.library.split(" ")[0] === selLib.name.split(" ")[0]; 
                })[0];

                if(this.selectedAvailabilty){
                    this.availableLevels = Object.keys(this.selectedAvailabilty.availability);
                }
                
                this.add = () => {
                    var position = $mdPanel.newPanelPosition()
                          .absolute()
                          .center();

                    var config = {
                        attachTo: angular.element(document.body),
                        controller: LibraryDialogController,
                        controllerAs: 'ctrl',
                        disableParentScroll: this.disableParentScroll,
                        templateUrl: 'src/library/components/details/LibraryDialog.html',
                        hasBackdrop: true,
                        panelClass: 'demo-dialog-example',
                        position: position,
                        trapFocus: true,
                        zIndex: 150,
                        clickOutsideToClose: true,
                        escapeToClose: true,
                        focusOnOpen: true
                    };

                    $mdPanel.open(config);
                };      
        }]
    }
};


