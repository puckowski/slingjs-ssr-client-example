import { mount } from '../node_modules/slingjs/sling.min';
import NavComponent from './ssr-example/components/nav.component';
import Test1Component from './ssr-example/components/test1.component';

window.Test1Component = Test1Component;

let compNav = new NavComponent();
mount('divnav', compNav);
