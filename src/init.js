import NProgress from "nprogress";
import lodash from "lodash";
import Vue from 'vue';
import jquery from "jquery";
import bootstrap from "bootstrap";
import router from "./router";
import axios from "axios";
import moment from "moment";
import sweetalert from "sweetalert";
import VueTippy from 'vue-tippy';


window.swal = sweetalert;
window._ = lodash;
try {
    window.$ = window.jQuery = jquery;
} catch (e) {}
window.axios = axios;
window.moment = moment;
window.log = function (message) {
    console.log(message);
};
window.eventHub = new Vue();
function genUUID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() +'-'+Date.now();
}

router.beforeEach(function (to, from, next) {
    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    window.axios.defaults.headers.common['X-Ag-Request-Id'] = genUUID();
    try{NProgress.start()}catch (e) {log("nprogress failed")};
    next();
});

router.afterEach(function () { NProgress.done(); });

Vue.use(VueTippy, {
    placement: 'bottom',
    arrow: true
});
