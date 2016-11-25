// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name : 'libraryList',
  config : {
    bindings         : {  libraries: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/library/components/list/LibraryList.html'
  }
};
