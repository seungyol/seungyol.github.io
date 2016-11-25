// Load the custom app ES6 modules
import LibraryList from 'src/library/components/list/LibraryList';
import LibraryDetails from 'src/library/components/details/LibraryDetails';

// Define the Angular 'library' module
export default angular
  .module("library", ['ngMaterial', 'ngMessages'])
  .component(LibraryList.name, LibraryList.config)
  .component(LibraryDetails.name, LibraryDetails.config);
