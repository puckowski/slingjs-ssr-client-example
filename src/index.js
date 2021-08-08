import { mount } from '../dist/sling.min';
import NavComponent from './ssr-example/components/nav.component';
import Test1Component from './ssr-example/components/test1.component';
import Test2Component from './ssr-example/components/test2.component';

window.Test1Component = Test1Component;
window.Test2Component = Test2Component;

let compNav = new NavComponent();
mount('divnav', compNav);
