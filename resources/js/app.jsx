/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

require('./components/SideBar/SideBarNav');
require('./components/SideBar/NavItem');

require('./components/Treatment/TreatmentOverviewContainer');
require('./components/Treatment/CreateTreatmentContainer');
require('./components/Treatment/TreatmentContainer');
require('./components/pages/Users/UserProfileContainer');
require('./components/pages/Users/EditProfileContainer');
require('./components/Treatment/EditTreatmentContainer');
require('./components/pages/Admin/UserOverviewContainer');
require('./components/pages/Admin/AssignTreatmentContainer')

/*
require('./components/Treatment/NoTreatments');
require('./components/Treatment/TreatmentList');
require('./components/Treatment/TreatmentFilters');
require('./components/Treatment/Treatment');
require('./components/Treatment/CreateTreatment');
*/

