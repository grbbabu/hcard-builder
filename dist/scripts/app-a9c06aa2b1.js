!function(){"use strict";angular.module("hcardBuilder",["ngTouch","ui.bootstrap"])}(),function(){"use strict";function e(){function e(){return a.givenName&&a.surname?"hcard-"+a.givenName+"-"+a.surname:a.givenName&&!a.surname?"hcard-"+a.givenName:!a.givenName&&a.surname?"hcard-"+a.surname:void 0}function n(){return a.givenName&&a.surname?a.givenName+" "+a.surname:a.givenName&&!a.surname?a.givenName:!a.givenName&&a.surname?a.surname:" "}function r(){return a.houseName&&a.street?a.houseName+" "+a.street:a.houseName&&!a.street?a.houseName:!a.houseName&&a.street?a.street:void 0}var a=this;a.getNameId=e,a.getName=n,a.getStreetAddress=r}angular.module("hcardBuilder").controller("MainController",e)}(),function(){"use strict";angular.module("hcardBuilder")}(),function(){"use strict";function e(e){e.debugEnabled(!0)}angular.module("hcardBuilder").config(e),e.$inject=["$logProvider"]}();
//# sourceMappingURL=../maps/scripts/app-a9c06aa2b1.js.map
