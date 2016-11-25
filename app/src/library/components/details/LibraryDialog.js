export default function LibraryDialogController(mdPanelRef, $timeout){
    this._mdPanelRef = mdPanelRef;
    
    this.closeDialog = function() {
        mdPanelRef && mdPanelRef.close().then(function() {
            angular.element(document.querySelector('.demo-dialog-open-button')).focus();
            mdPanelRef.destroy();
        });
    };
    this.campuses = [{name:'St Lucia'},{name:'Herston'},{name:'Bundaberg'},{name:'PACE'}, {name: 'Mater'}];
    this.library = {};
    this.save = (form) => {
        if(form.$invalid){
            return;
        }        
        
        this.saveSuccess= true;
        $timeout(this.closeDialog, 5000);
    };
   
}