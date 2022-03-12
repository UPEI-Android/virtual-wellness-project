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
require('./components/Treatment/TreatmentOverview');
require('./components/Treatment/TreatmentForm');
require('./components/Treatment/NoTreatments');
require('./components/Treatment/TreatmentList');

import ReactRenderer from './ReactRenderer'

new ReactRenderer(components).renderAll()
