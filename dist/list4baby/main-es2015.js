(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"app\">\n  <header id=\"header\">\n    <div class=\"container\">\n      <h1>\n        List <span>4</span> Baby\n      </h1>\n    </div>\n    <div class=\"cloud main-cloud\"></div>\n    <div class=\"bg-clouds\">\n      <div class=\"cloud cloud-1\"></div>\n      <div class=\"cloud cloud-2\"></div>\n      <div class=\"cloud cloud-3\"></div>\n      <div class=\"cloud cloud-4\"></div>\n    </div>\n  </header>\n  \n  <div id=\"content\">\n    <div class=\"container\">\n      <nav id=\"nav-bar\">\n        <a routerLink=\"/items\" routerLinkActive=\"active\">Items</a>\n        <a routerLink=\"/categories\" routerLinkActive=\"active\">Categories</a>\n        <a routerLink=\"/products\" routerLinkActive=\"active\">Search</a>\n        <a routerLink=\"/settings\" routerLinkActive=\"active\">Settings</a>\n      </nav>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  \n  <footer id=\"footer\">\n    <div class=\"container\">\n      Made with <span class=\"heart\">&hearts;</span> and Angular.\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add/add.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add/add.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"add-item\">\n\t<form (ngSubmit)=\"onAdd()\">\n\t\t<div class=\"form-group group1\">\n\t\t\t<div class=\"form-row inline\">\n\t\t\t\t<div class=\"form-field name\">\n\t\t\t\t\t<label class=\"sr-only\" for=\"name\">Name:</label>\n\t\t\t\t\t<input type=\"text\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"name\"/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-field category\">\n\t\t\t\t\t<select name=\"cat\" (change)=\"onCatSelect($event.target.value)\">\n\t\t\t\t\t\t<option [value]=\"null\" [selected]=\"!cat || !selectedCat\">select category</option>\n\t\t\t\t\t\t<option *ngFor=\"let cat of categories\" [value]=\"cat.id\" [selected]=\"cat.id == selectedCat\">\n\t\t\t\t\t\t\t{{cat.name}}\n\t\t\t\t\t\t</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"submit\">\n\t\t\t\t<button class=\"btn btn-save\" type=\"submit\">Add item</button>\n\t\t\t\t<button class=\"more-link\" (click)=\"showMore()\">{{ moreStatus ? 'Less' : 'Show more' }}</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-more\" [@openClose]=\"moreStatus ? 'open' : 'closed'\">\n\t\t\t<div class=\"form-group group2\">\n\t\t\t\t<div class=\"form-row inline\">\n\t\t\t\t\t<div class=\"form-field quantity\">\n\t\t\t\t\t\t<label class=\"sr-only\" for=\"quantity\">Quantity:</label>\n\t\t\t\t\t\t<input type=\"number\" name=\"quantity\" [(ngModel)]=\"quantity\" placeholder=\"quantity\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-field price\">\n\t\t\t\t\t\t<label class=\"sr-only\" for=\"price\">Price:</label>\n\t\t\t\t\t\t<input type=\"number\" name=\"price\" [(ngModel)]=\"price\" placeholder=\"price\"/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"form-field note\">\n\t\t\t\t\t\t<label class=\"sr-only\" for=\"note\">Note:</label>\n\t\t\t\t\t\t<textarea name=\"note\" [(ngModel)]=\"note\" placeholder=\"note\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/categories/categories.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"add-category\">\n\t<form (ngSubmit)=\"onAdd()\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"form-row inline\">\n\t\t\t\t<div class=\"form-field name\">\n\t\t\t\t\t<label class=\"sr-only\" for=\"name\">Name:</label>\n\t\t\t\t\t<input type=\"text\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"name\"/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-field color\">\n\t\t\t\t\t<label class=\"sr-only\" for=\"color\">Color:</label>\n\t\t\t\t\t<input type=\"text\" [(colorPicker)]=\"color\" [cpCancelButton]=\"true\" [cpAlphaChannel]=\"disabled\" placeholder=\"Color\" [style.background]=\"color\"/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"submit\">\n\t\t\t\t\t<button class=\"btn btn-add\" type=\"submit\">Add category</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n\n<app-messages></app-messages>\n\n<div id=\"categories\">\n\t<div class=\"categories-box\">\n\t\t<ul class=\"categories-list\">\n\t\t\t<li *ngFor=\"let category of categories\" (click)=\"onSelect(category)\">\n\t\t\t\t<span>{{ category.name }}</span>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div id=\"edit-category\">\n\t\t<div *ngIf=\"!selectedCategory\">\n\t\t\t<p class=\"select\" *ngIf=\"categories.length > 0\">Select category</p>\n\t\t\t<p class=\"select\" *ngIf=\"categories.length == 0\">Add category</p>\n\t\t</div>\n\t\t<div class=\"animated fadeIn\" *ngIf=\"selectedCategory\">\n\t\t\t<h2>Edit: {{ selectedCategory.name }}</h2>\n\t\t\t<form (ngSubmit)=\"onEdit(selectedCategory)\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"form-row inline\">\n\t\t\t\t\t\t<div class=\"form-field name\">\n\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"name\">Name:</label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" [(ngModel)]=\"selectedCategory.name\" placeholder=\"name\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-field color\">\n\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"color\">Color:</label>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"color\" [(colorPicker)]=\"selectedCategory.color\" [cpCancelButton]=\"disabled\" [cpAlphaChannel]=\"false\" placeholder=\"Color\" [style.background]=\"selectedCategory.color\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t<div class=\"submit\">\n\t\t\t\t\t\t\t<button class=\"btn btn-save\" type=\"submit\">Save</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-cancel\" type=\"button\" (click)=\"goBack()\">Cancel</button>\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"onRemove(selectedCategory)\">Remove</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/catlist/catlist.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/catlist/catlist.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filters\">\n    <div class=\"categories\">\n        <ul class=\"cat-list\">\n            <li [class.active]=\"selected==null\"><button class=\"cat-item\" (click)=\"onSelect()\">All</button></li>\n            <li *ngFor=\"let category of categories\" [class.active]=\"selected==category.id\">\n                <button\n                class=\"cat-item\"\n                (click)=\"onSelect(category)\"\n                [ngStyle]=\"category.color && { 'background': category.color }\"\n                >{{category.name}}</button>\n            </li>\n        </ul>\n    </div>\n    <div *ngIf=\"total\" class=\"total\">Total: <strong>${{ total }}</strong></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/item/item.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/item/item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"item\" *ngIf=\"item\">\n    <h2>Edit: {{ item.name }}</h2>\n    <form (ngSubmit)=\"onEdit()\">\n        <div class=\"form-group\">\n            <div class=\"form-row\">\n                <div class=\"form-field name\">\n                    <label class=\"sr-only\" for=\"name\">Name:</label>\n                    <input type=\"text\" name=\"name\" [(ngModel)]=\"item.name\" placeholder=\"name\"/>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-field cat\">\n                    <select name=\"cat\" [(ngModel)]=\"item.cat\">\n                        <option [ngValue]=\"\"></option>\n                        <option *ngFor=\"let cat of categories\" [ngValue]=\"cat.id\" [selected]=\"cat.id == item.cat\">\n                            {{cat.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-field quantity\">\n                    <label class=\"sr-only\" for=\"quantity\">Quantity:</label>\n                    <input type=\"number\" name=\"quantity\" [(ngModel)]=\"item.quantity\" placeholder=\"quantity\"/>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-field price\">\n                    <label class=\"sr-only\" for=\"price\">Price:</label>\n                    <input type=\"number\" name=\"price\" [(ngModel)]=\"item.price\" placeholder=\"price\"/>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-field note\">\n                    <label class=\"sr-only\" for=\"note\">Note:</label>\n                    <textarea name=\"note\" [(ngModel)]=\"item.note\" placeholder=\"note\">{{ item.note }}</textarea>\n                </div>\n            </div>\n            <div class=\"submit\">\n                <button class=\"btn btn-save\" type=\"submit\">Save</button>\n                <button class=\"btn\" type=\"button\" (click)=\"goBack()\">Cancel</button>\n            </div>\n            \n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/list/list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/list/list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-add [selectedCat]=\"filter\"></app-add>\n\n<app-catlist (filterList)=\"onFilter($event)\" [total]=\"totalPrice\"></app-catlist>\n\n<app-messages></app-messages>\n\n<ul class=\"items\">\n    <li\n    *ngFor=\"let item of items; index as i\"\n    class=\"item animated slideInUp\"\n    [ngClass]=\"item.cat ? 'cat-' + item.cat : 'no-cat'\"\n    [ngStyle]=\"{ 'animation-duration': 0.5 + i/5 + 's' }\"\n    [class.is-completed]=\"item.completed === true\">\n        <label class=\"toggler-wrapper\">\n            <input type=\"checkbox\" (change)=\"onComplete(item)\" [checked]=\"item.completed\">\n            <div class=\"toggler-slider\"></div>\n        </label>\n        <a class=\"title\" [routerLink]=\"['/item', item.id]\">{{item.name}}</a> \n        <button class=\"btn btn-border btn-online\" (click)=\"onSearch(item.name)\">Search online</button>\n        <span class=\"price\" *ngIf=\"item.price\">${{ item.price }}</span>\n        <span class=\"quantity\" *ngIf=\"item.quantity > 1\"><span class=\"q\">&times;</span>{{ item.quantity }}</span>\n        <span class=\"category\" *ngIf=\"item.cat != undefined\" [ngStyle]=\"{ 'background': getColor(item.cat) }\">{{ getName(item.cat) }}</span>\n        <button class=\"remove-item\" (click)=\"onRemove(item)\" title=\"Remove\">&times;</button>\n    </li>\n</ul>\n\n<p class=\"info\">All items and categories are saved in your browser local storage.</p>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/messages/messages.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/messages/messages.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"messages\" *ngIf=\"message.name\">\n\t<div class=\"alert\" [ngClass]=\"message.type\">{{ message.name }}</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pagination/pagination.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pagination/pagination.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"pagination\" *ngIf=\"cPages\">\n\t<li class=\"first\" *ngIf=\"cPage > 1\">\n\t\t<a routerLink=\"/products/{{ cQuery }}/1\">First</a>\n\t</li>\n\t<li *ngIf=\"cPage > 2\">\n\t\t<a routerLink=\"/products/{{ cQuery }}/{{ (cPage - 2) }}\">{{ (cPage - 2) }}</a>\n\t</li>\n\t<li *ngIf=\"cPage > 1\">\n\t\t<a routerLink=\"/products/{{ cQuery }}/{{ (cPage - 1) }}\">{{ (cPage - 1) }}</a>\n\t</li>\n\t<li class=\"current\">\n\t\t<a routerLink=\"/products/{{ cQuery }}/{{ cPage }}\">{{ cPage }}</a>\n\t</li>\n\t<li *ngIf=\"(cPage + 1) < cPages\">\n\t\t<a routerLink=\"/products/{{ cQuery }}/{{ (cPage + 1) }}\">{{ (cPage + 1) }}</a>\n\t</li>\n\t<li *ngIf=\"(cPage + 2) < cPages\">\n\t\t<a routerLink=\"/products/{{ cQuery }}/{{ (cPage + 2) }}\">{{ (cPage + 2) }}</a>\n\t</li>\n\t<li class=\"last\" *ngIf=\"(cPage + 1) < cPages\">\n\t\t<a routerLink=\"/products/{{ cQuery }}/{{ cPages }}\">Last</a>\n\t</li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/products/products.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/products/products.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"products\">\n    <div id=\"query\">\n        <form>\n            <div class=\"form-group\">\n                <div class=\"form-row inline\">\n                    <div class=\"form-field query\">\n                        <input type=\"text\" name=\"queryInput\" [(ngModel)]=\"queryInput\" placeholder=\"Query\" (keyup.enter)=\"getProducts(queryInput)\" />\n                    </div>\n                    <div class=\"submit\">\n                        <button class=\"btn\" (click)=\"getProducts(queryInput)\">Search</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <app-messages></app-messages>\n\n    <app-pagination [cQuery]=\"queryURI\" [cPages]=\"pages\" [cPage]=\"page\"></app-pagination>\n\n    <div id=\"products-box\">\n        <div class=\"loader\" *ngIf=\"loader\"></div>\n        <ul class=\"products-list\" *ngIf=\"products\">\n            <li \n            class=\"item animated fadeIn\"\n            *ngFor=\"let product of products; index as i\"\n            [ngStyle]=\"{ 'animation-duration': 1 + i/10 + 's' }\"\n            >\n                <h2 class=\"title\"><span class=\"number\">{{ ( page > 1 ) ? ((page - 1) * 10) + (i + 1) : (i + 1) }}.</span> {{ product.title }}</h2>\n                <a href=\"{{ product.link }}\" target=\"_blank\">{{ product.displayLink }}</a>\n            </li>\n        </ul>\n    </div>\n\n    <app-pagination [cQuery]=\"queryURI\" [cPages]=\"pages\" [cPage]=\"page\"></app-pagination>\n\n    <p *ngIf=\"total\">Total results: <strong>{{ total }}</strong></p>\n    <p class=\"info\">Results are limited to ~100</p>\n    <p class=\"info\">Powered by Google Custom Search API</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings/settings.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-messages></app-messages>\n\n<div id=\"settings\">\n\t<div class=\"field sample-data\">\n\t\t<label class=\"toggler-wrapper grey\">\n\t\t\t<input type=\"checkbox\" (change)=\"useSampleData()\" [checked]=\"useSample\">\n\t\t\t<div class=\"toggler-slider\"></div>\n\t\t</label> Use sample data\n\t</div>\n\t<div class=\"field reset\">\n\t\t<button class=\"btn\" (click)=\"removeData()\">Remove all data</button>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/item/item.component */ "./src/app/components/item/item.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");








const routes = [
    { path: 'items', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: 'item/:id', component: _components_item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"] },
    { path: 'categories', component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"] },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"] },
    { path: 'products/:query', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"] },
    { path: 'products/:query/:page', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] },
    { path: '', redirectTo: '/items', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\n  text-align: center;\n  background: #9be1d6;\n  padding: 100px 0 25px;\n  overflow: hidden;\n  position: relative;\n}\n#header h1 {\n  font-size: 2.2em;\n  position: relative;\n  z-index: 2;\n}\n#header h1 span {\n  display: inline-block;\n  background: #222;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  color: #fff;\n  text-align: center;\n}\n#header .main-cloud {\n  position: absolute;\n  bottom: -60px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 1;\n}\n#header .cloud {\n  background: #fff;\n  border-radius: 100px;\n  height: 120px;\n  width: 350px;\n  pointer-events: none;\n}\n#header .cloud:after, #header .cloud:before {\n  background: #fff;\n  content: \"\";\n  position: absolute;\n  z-indeX: -1;\n}\n#header .cloud:before {\n  border-radius: 200px;\n  width: 180px;\n  height: 180px;\n  right: 50px;\n  top: -90px;\n}\n#header .cloud:after {\n  border-radius: 100px;\n  height: 100px;\n  left: 50px;\n  top: -50px;\n  width: 100px;\n}\n#header .bg-clouds .cloud {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n#header .bg-clouds .cloud:hover {\n  opacity: 1;\n}\n#header .cloud-1 {\n  -webkit-animation: animateCloud 35s linear infinite;\n          animation: animateCloud 35s linear infinite;\n  -webkit-transform: scale(0.65);\n          transform: scale(0.65);\n  opacity: 0.5;\n}\n#header .cloud-2 {\n  -webkit-animation: animateCloud 20s linear infinite;\n          animation: animateCloud 20s linear infinite;\n  -webkit-transform: scale(0.3);\n          transform: scale(0.3);\n  opacity: 0.6;\n}\n#header .cloud-3 {\n  -webkit-animation: animateCloud 30s linear infinite;\n          animation: animateCloud 30s linear infinite;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  opacity: 0.3;\n}\n#header .cloud-4 {\n  -webkit-animation: animateCloud 18s linear infinite;\n          animation: animateCloud 18s linear infinite;\n  -webkit-transform: scale(0.4);\n          transform: scale(0.4);\n  opacity: 0.25;\n}\n#header .cloud-5 {\n  -webkit-animation: animateCloud 25s linear infinite;\n          animation: animateCloud 25s linear infinite;\n  -webkit-transform: scale(0.55);\n          transform: scale(0.55);\n  opacity: 0.65;\n}\n@-webkit-keyframes animateCloud {\n  0% {\n    margin-left: -300px;\n  }\n  100% {\n    margin-left: 100%;\n  }\n}\n@keyframes animateCloud {\n  0% {\n    margin-left: -300px;\n  }\n  100% {\n    margin-left: 100%;\n  }\n}\n#content {\n  padding: 30px 0;\n  position: relative;\n  z-index: 2;\n}\n#nav-bar {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0 0 30px;\n}\n#nav-bar a {\n  padding: 5px 20px;\n  color: #222;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.1;\n  text-transform: uppercase;\n}\n#nav-bar a:hover, #nav-bar a.active {\n  color: #65d2c1;\n}\n#footer {\n  padding: 0 0 50px;\n  font-size: 14px;\n  text-align: center;\n}\n#footer .heart {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9saXN0NGJhYnkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRDtBRENDO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VIO0FEQ0M7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFVBQUE7QUNDRjtBRENDO0VBQ0MsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBRUMsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0g7QURFRTtFQUNDLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0FIO0FERUU7RUFDQyxvQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBSDtBRElFO0VBQ0Msa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ0ZIO0FER0c7RUFDQyxVQUFBO0FDREo7QURLQztFQUNDLG1EQUFBO1VBQUEsMkNBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtBQ0hGO0FETUM7RUFDQyxtREFBQTtVQUFBLDJDQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLFlBQUE7QUNKRjtBRE9DO0VBQ0MsbURBQUE7VUFBQSwyQ0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxZQUFBO0FDTEY7QURRQztFQUNDLG1EQUFBO1VBQUEsMkNBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsYUFBQTtBQ05GO0FEU0M7RUFDQyxtREFBQTtVQUFBLDJDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGFBQUE7QUNQRjtBRFdBO0VBQ0k7SUFDSSxtQkFBQTtFQ1JOO0VEVUU7SUFDSSxpQkFBQTtFQ1JOO0FBQ0Y7QURFQTtFQUNJO0lBQ0ksbUJBQUE7RUNSTjtFRFVFO0lBQ0ksaUJBQUE7RUNSTjtBQUNGO0FEV0E7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDVEQ7QURZQTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNURDtBRFVDO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ1JGO0FEU0U7RUFFQyxjQUFBO0FDUkg7QURhQTtFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVkQ7QURXQztFQUNDLFVBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2hlYWRlciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZDogIzliZTFkNjtcblx0cGFkZGluZzogMTAwcHggMCAyNXB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuMmVtO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR6LWluZGV4OiAyO1xuXHRcdHNwYW4ge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0YmFja2dyb3VuZDogIzIyMjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDQwcHg7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cdH1cblx0Lm1haW4tY2xvdWQge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IC02MHB4O1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdFx0ei1pbmRleDogMTtcblx0fVxuXHQuY2xvdWQge1xuXHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XG5cdFx0aGVpZ2h0OiAxMjBweDtcblx0XHR3aWR0aDogMzUwcHg7XG5cdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0JjphZnRlcixcblx0XHQmOmJlZm9yZSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR6LWluZGVYOiAtMTtcblx0XHR9XG5cdFxuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwMHB4O1xuXHRcdFx0d2lkdGg6IDE4MHB4O1xuXHRcdFx0aGVpZ2h0OiAxODBweDtcblx0XHRcdHJpZ2h0OiA1MHB4O1xuXHRcdFx0dG9wOiAtOTBweDtcblx0XHR9XG5cdFx0JjphZnRlciB7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcblx0XHRcdGhlaWdodDogMTAwcHg7XG5cdFx0XHRsZWZ0OiA1MHB4O1xuXHRcdFx0dG9wOiAtNTBweDtcblx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHR9XG5cdH1cblx0LmJnLWNsb3VkcyB7XG5cdFx0LmNsb3VkIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmNsb3VkLTEge1xuXHRcdGFuaW1hdGlvbjogYW5pbWF0ZUNsb3VkIDM1cyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjY1KTtcblx0XHRvcGFjaXR5OiAwLjU7XG5cdH1cblx0XG5cdC5jbG91ZC0yIHtcblx0XHRhbmltYXRpb246IGFuaW1hdGVDbG91ZCAyMHMgbGluZWFyIGluZmluaXRlO1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcblx0XHRvcGFjaXR5OiAwLjY7XG5cdH1cblx0XG5cdC5jbG91ZC0zIHtcblx0XHRhbmltYXRpb246IGFuaW1hdGVDbG91ZCAzMHMgbGluZWFyIGluZmluaXRlO1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC41KTtcblx0XHRvcGFjaXR5OiAwLjM7XG5cdH1cblx0XG5cdC5jbG91ZC00IHtcblx0XHRhbmltYXRpb246IGFuaW1hdGVDbG91ZCAxOHMgbGluZWFyIGluZmluaXRlO1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC40KTtcblx0XHRvcGFjaXR5OiAwLjI1O1xuXHR9XG5cdFxuXHQuY2xvdWQtNSB7XG5cdFx0YW5pbWF0aW9uOiBhbmltYXRlQ2xvdWQgMjVzIGxpbmVhciBpbmZpbml0ZTtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuNTUpO1xuXHRcdG9wYWNpdHk6IDAuNjU7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBhbmltYXRlQ2xvdWQge1xuICAgIDAlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICAgIH1cbn1cblxuI2NvbnRlbnQge1xuXHRwYWRkaW5nOiAzMHB4IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMjtcbn1cblxuI25hdi1iYXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW46IDAgMCAzMHB4O1xuXHRhIHtcblx0XHRwYWRkaW5nOiA1cHggMjBweDtcblx0XHRjb2xvcjogIzIyMjtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRsaW5lLWhlaWdodDogMS4xO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Jjpob3Zlcixcblx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRjb2xvcjogIzY1ZDJjMTtcblx0XHR9XG5cdH1cbn1cblxuI2Zvb3RlciB7XG5cdHBhZGRpbmc6IDAgMCA1MHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0LmhlYXJ0IHtcblx0XHRjb2xvcjogcmVkO1xuXHR9XG59IiwiI2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzliZTFkNjtcbiAgcGFkZGluZzogMTAwcHggMCAyNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAyLjJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuI2hlYWRlciBoMSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2hlYWRlciAubWFpbi1jbG91ZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNjBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDE7XG59XG4jaGVhZGVyIC5jbG91ZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuI2hlYWRlciAuY2xvdWQ6YWZ0ZXIsICNoZWFkZXIgLmNsb3VkOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRlWDogLTE7XG59XG4jaGVhZGVyIC5jbG91ZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICByaWdodDogNTBweDtcbiAgdG9wOiAtOTBweDtcbn1cbiNoZWFkZXIgLmNsb3VkOmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxlZnQ6IDUwcHg7XG4gIHRvcDogLTUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbiNoZWFkZXIgLmJnLWNsb3VkcyAuY2xvdWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbiNoZWFkZXIgLmJnLWNsb3VkcyAuY2xvdWQ6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuI2hlYWRlciAuY2xvdWQtMSB7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZUNsb3VkIDM1cyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiNoZWFkZXIgLmNsb3VkLTIge1xuICBhbmltYXRpb246IGFuaW1hdGVDbG91ZCAyMHMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbiNoZWFkZXIgLmNsb3VkLTMge1xuICBhbmltYXRpb246IGFuaW1hdGVDbG91ZCAzMHMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIG9wYWNpdHk6IDAuMztcbn1cbiNoZWFkZXIgLmNsb3VkLTQge1xuICBhbmltYXRpb246IGFuaW1hdGVDbG91ZCAxOHMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG4gIG9wYWNpdHk6IDAuMjU7XG59XG4jaGVhZGVyIC5jbG91ZC01IHtcbiAgYW5pbWF0aW9uOiBhbmltYXRlQ2xvdWQgMjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjU1KTtcbiAgb3BhY2l0eTogMC42NTtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlQ2xvdWQge1xuICAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgfVxufVxuI2NvbnRlbnQge1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuI25hdi1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgMCAzMHB4O1xufVxuI25hdi1iYXIgYSB7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuI25hdi1iYXIgYTpob3ZlciwgI25hdi1iYXIgYS5hY3RpdmUge1xuICBjb2xvcjogIzY1ZDJjMTtcbn1cblxuI2Zvb3RlciB7XG4gIHBhZGRpbmc6IDAgMCA1MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNmb290ZXIgLmhlYXJ0IHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'list4baby';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/item/item.component */ "./src/app/components/item/item.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/components/add/add.component.ts");
/* harmony import */ var _components_catlist_catlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/catlist/catlist.component */ "./src/app/components/catlist/catlist.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");



 // <-- NgModel lives here















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
            _components_item_item_component__WEBPACK_IMPORTED_MODULE_9__["ItemComponent"],
            _components_add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"],
            _components_catlist_catlist_component__WEBPACK_IMPORTED_MODULE_11__["CatlistComponent"],
            _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"],
            _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesComponent"],
            _components_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
            _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__["PaginationComponent"],
            _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_15__["ColorPickerModule"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add/add.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/add/add.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#add-item {\n  margin: 30px 0;\n}\n#add-item .form-group {\n  padding-right: 120px;\n  position: relative;\n}\n#add-item .form-group .form-row textarea {\n  max-width: 100%;\n}\n#add-item .form-group .submit .btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n#add-item .form-group .submit .more-link {\n  position: absolute;\n  top: 60px;\n  right: 20px;\n  background: none;\n  border: none;\n  color: #222;\n  padding: 0;\n  font-size: 12px;\n}\n.form-more {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9saXN0NGJhYnkvc3JjL2FwcC9jb21wb25lbnRzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUNDRDtBREFDO0VBQ0Msb0JBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEQUc7RUFDQyxlQUFBO0FDRUo7QURFRztFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUNBSjtBREVHO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0FKO0FETUE7RUFDQyxnQkFBQTtBQ0hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FkZC1pdGVtIHtcblx0bWFyZ2luOiAzMHB4IDA7XG5cdC5mb3JtLWdyb3VwIHtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxMjBweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0LmZvcm0tcm93IHtcblx0XHRcdHRleHRhcmVhIHtcblx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuc3VibWl0IHtcblx0XHRcdC5idG4ge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR9XG5cdFx0XHQubW9yZS1saW5rIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDYwcHg7XG5cdFx0XHRcdHJpZ2h0OiAyMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdGNvbG9yOiAjMjIyO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5mb3JtLW1vcmUge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufSIsIiNhZGQtaXRlbSB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuI2FkZC1pdGVtIC5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZy1yaWdodDogMTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNhZGQtaXRlbSAuZm9ybS1ncm91cCAuZm9ybS1yb3cgdGV4dGFyZWEge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4jYWRkLWl0ZW0gLmZvcm0tZ3JvdXAgLnN1Ym1pdCAuYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuI2FkZC1pdGVtIC5mb3JtLWdyb3VwIC5zdWJtaXQgLm1vcmUtbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzIyMjtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9ybS1tb3JlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/add/add.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/add/add.component.ts ***!
  \*************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");





let AddComponent = class AddComponent {
    constructor(itemService, categoryService) {
        this.itemService = itemService;
        this.categoryService = categoryService;
        this.moreStatus = false;
    }
    ngOnInit() {
        this.categories = this.categoryService.getCategories();
    }
    onAdd() {
        if (!this.name) {
            return; //TODO messages!
        }
        const item = {
            id: 0,
            name: this.name,
            completed: false,
        };
        if (this.cat) {
            item.cat = this.cat;
        }
        this.itemService.addItem(item);
    }
    showMore() {
        this.moreStatus = !this.moreStatus;
    }
    onCatSelect(value) {
        this.cat = +value;
    }
};
AddComponent.ctorParameters = () => [
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddComponent.prototype, "selectedCat", void 0);
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add/add.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    height: '*',
                    opacity: 1,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    height: '0',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.35s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.35s')
                ]),
            ]),
        ],
        styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/components/add/add.component.scss")]
    })
], AddComponent);



/***/ }),

/***/ "./src/app/components/categories/categories.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#categories {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 -10px;\n}\n#categories .categories-box,\n#categories #edit-category {\n  width: 50%;\n  padding: 0 10px;\n}\n@media (max-width: 767px) {\n  #categories {\n    display: block;\n  }\n  #categories .categories-box,\n#categories #edit-category {\n    width: 100%;\n  }\n}\n#categories #edit-category {\n  border: 5px solid #f6f6f6;\n  padding: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  border-radius: 15px;\n}\n#categories #edit-category .select {\n  color: #e9e9e9;\n}\n#categories .categories-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n#categories .categories-list li {\n  cursor: pointer;\n  margin: 15px 0;\n  padding: 30px;\n  background: #f6f6f6;\n  border-radius: 15px;\n  display: block;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#categories .categories-list li:hover {\n  background: #e9e9e9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9saXN0NGJhYnkvc3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0Q7QURBQzs7RUFFQyxVQUFBO0VBQ0EsZUFBQTtBQ0VGO0FEQUM7RUFSRDtJQVNFLGNBQUE7RUNHQTtFREZBOztJQUVDLFdBQUE7RUNJRDtBQUNGO0FERkM7RUFDQyx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNJRjtBREhFO0VBQ0MsY0FBQTtBQ0tIO0FERkM7RUFDQyxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSUY7QURIRTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBQ0tIO0FESkc7RUFDQyxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2F0ZWdvcmllcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1hcmdpbjogMCAtMTBweDtcblx0LmNhdGVnb3JpZXMtYm94LFxuXHQjZWRpdC1jYXRlZ29yeSB7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRwYWRkaW5nOiAwIDEwcHg7XG5cdH1cblx0QG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0LmNhdGVnb3JpZXMtYm94LFxuXHRcdCNlZGl0LWNhdGVnb3J5IHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0fVxuXHQjZWRpdC1jYXRlZ29yeSB7XG5cdFx0Ym9yZGVyOiA1cHggc29saWQgI2Y2ZjZmNjtcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdG1hcmdpbi10b3A6MTVweDtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cdFx0LnNlbGVjdCB7XG5cdFx0XHRjb2xvcjogZGFya2VuKCNmNmY2ZjYsIDUlKTtcblx0XHR9XG5cdH1cblx0LmNhdGVnb3JpZXMtbGlzdCB7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0XHRsaSB7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRtYXJnaW46IDE1cHggMDtcblx0XHRcdHBhZGRpbmc6IDMwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBkYXJrZW4oI2Y2ZjZmNiwgNSUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIiNjYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIC0xMHB4O1xufVxuI2NhdGVnb3JpZXMgLmNhdGVnb3JpZXMtYm94LFxuI2NhdGVnb3JpZXMgI2VkaXQtY2F0ZWdvcnkge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgI2NhdGVnb3JpZXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICNjYXRlZ29yaWVzIC5jYXRlZ29yaWVzLWJveCxcbiNjYXRlZ29yaWVzICNlZGl0LWNhdGVnb3J5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuI2NhdGVnb3JpZXMgI2VkaXQtY2F0ZWdvcnkge1xuICBib3JkZXI6IDVweCBzb2xpZCAjZjZmNmY2O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuI2NhdGVnb3JpZXMgI2VkaXQtY2F0ZWdvcnkgLnNlbGVjdCB7XG4gIGNvbG9yOiAjZTllOWU5O1xufVxuI2NhdGVnb3JpZXMgLmNhdGVnb3JpZXMtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiNjYXRlZ29yaWVzIC5jYXRlZ29yaWVzLWxpc3QgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTVweCAwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbiNjYXRlZ29yaWVzIC5jYXRlZ29yaWVzLWxpc3QgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");





let CategoriesComponent = class CategoriesComponent {
    constructor(location, differs, categoryService, messagesService) {
        this.location = location;
        this.differs = differs;
        this.categoryService = categoryService;
        this.messagesService = messagesService;
    }
    ngOnInit() {
        this.getCategories();
        this.catDiffer = this.differs.find(this.categories).create();
        if (this.categories.length === 0) {
            this.messagesService.send('No categories', 'notice');
        }
    }
    ngDoCheck() {
        const changes = this.catDiffer.diff(this.categories);
        if (changes) {
            /* If you want to see details then use
            changes.forEachRemovedItem((record) => ...);
            changes.forEachAddedItem((record) => ...);
            changes.forEachChangedItem((record) => ...);
            */
            //console.log(this.categories);
            this.messagesService.clear(); // clear messages when items changed
            if (this.categories.length === 0) {
                this.messagesService.send('No categories', 'notice');
            }
        }
    }
    getCategories() {
        this.categories = this.categoryService.getCategories();
    }
    onAdd() {
        if (!this.name) {
            return; //TODO messages!
        }
        const category = {
            id: 0,
            name: this.name,
        };
        this.categoryService.addCategory(category);
    }
    onSelect(category) {
        this.selectedCategory = category;
    }
    onEdit(category) {
        this.categoryService.editCategory(category);
        this.selectedCategory = null;
    }
    onRemove(category) {
        this.categoryService.removeCategory(category); // remove from data
        this.getCategories(); // update categories
        this.selectedCategory = null;
    }
    goBack() {
        this.selectedCategory = null;
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }
];
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html"),
        styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/components/categories/categories.component.scss")]
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/components/catlist/catlist.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/catlist/catlist.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filters {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 0 10px;\n}\n.filters .cat-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.filters .cat-list .cat-item {\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1;\n  border: 1px solid transparent;\n  color: #222;\n  background: #f6f6f6;\n  padding: 5px 10px;\n  margin: 2px;\n  border-radius: 3px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.filters .cat-list .active .cat-item {\n  border: 1px solid #222;\n}\n.filters .total {\n  font-size: 12px;\n  line-height: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9saXN0NGJhYnkvc3JjL2FwcC9jb21wb25lbnRzL2NhdGxpc3QvY2F0bGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXRsaXN0L2NhdGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7QURBQztFQUNDLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDRUY7QURERTtFQUNDLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDR0g7QURERTtFQUNDLHNCQUFBO0FDR0g7QURBQztFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGxpc3QvY2F0bGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJzIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW46IDAgMCAxMHB4O1xuXHQuY2F0LWxpc3Qge1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0LmNhdC1pdGVtIHtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRjb2xvcjogIzIyMjtcblx0XHRcdGJhY2tncm91bmQ6ICNmNmY2ZjY7XG5cdFx0XHRwYWRkaW5nOiA1cHggMTBweDtcblx0XHRcdG1hcmdpbjogMnB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0XHR9XG5cdFx0LmFjdGl2ZSAuY2F0LWl0ZW0ge1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzIyMjtcblx0XHR9XG5cdH1cblx0LnRvdGFsIHtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogMjBweDtcblx0fVxufVxuIiwiLmZpbHRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG4uZmlsdGVycyAuY2F0LWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5maWx0ZXJzIC5jYXQtbGlzdCAuY2F0LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzIyMjtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uZmlsdGVycyAuY2F0LWxpc3QgLmFjdGl2ZSAuY2F0LWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1xufVxuLmZpbHRlcnMgLnRvdGFsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/catlist/catlist.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/catlist/catlist.component.ts ***!
  \*********************************************************/
/*! exports provided: CatlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatlistComponent", function() { return CatlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");



let CatlistComponent = class CatlistComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.filterList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.categories = this.categoryService.getCategories();
    }
    onSelect(category) {
        if (!category) {
            category = true;
            this.selected = null;
        }
        else {
            this.selected = category.id;
        }
        this.filterList.emit(category);
    }
};
CatlistComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CatlistComponent.prototype, "filterList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CatlistComponent.prototype, "total", void 0);
CatlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catlist',
        template: __webpack_require__(/*! raw-loader!./catlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/catlist/catlist.component.html"),
        styles: [__webpack_require__(/*! ./catlist.component.scss */ "./src/app/components/catlist/catlist.component.scss")]
    })
], CatlistComponent);



/***/ }),

/***/ "./src/app/components/item/item.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/item/item.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#item {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9saXN0NGJhYnkvc3JjL2FwcC9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaXRlbSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIjaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/item/item.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/item/item.component.ts ***!
  \***************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");






let ItemComponent = class ItemComponent {
    constructor(route, router, location, itemService, categoryService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.itemService = itemService;
        this.categoryService = categoryService;
        this.toggleForm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.categories = this.categoryService.getCategories(); // get categories
        this.route.paramMap.subscribe(params => {
            const id = +params.get('id');
            this.item = this.itemService.getItem(id);
        });
    }
    onEdit() {
        this.itemService.editItem(this.item); // save data in service
        this.router.navigate(['/items']);
    }
    goBack() {
        this.location.back();
    }
};
ItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ItemComponent.prototype, "toggleForm", void 0);
ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item',
        template: __webpack_require__(/*! raw-loader!./item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/item/item.component.html"),
        styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/components/item/item.component.scss")]
    })
], ItemComponent);



/***/ }),

/***/ "./src/app/components/list/list.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n}\n.items .item {\n  position: relative;\n  margin: 15px 0;\n  padding: 30px;\n  background: #f6f6f6;\n  border-radius: 15px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.items .item .title {\n  color: #222;\n  font-size: 20px;\n  font-weight: 400;\n}\n.items .item .title:hover {\n  color: #497061;\n}\n.items .item .btn {\n  margin-left: 20px;\n}\n.items .item .price {\n  margin-left: 20px;\n}\n.items .item .category {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  font-size: 9px;\n  line-height: 1.1;\n  text-transform: uppercase;\n  border-radius: 3px;\n  padding: 2px 5px 1px;\n}\n.items .item .remove-item {\n  cursor: pointer;\n  border: none;\n  background: none;\n  font-size: 14px;\n  line-height: 1;\n  padding: 2px 5px;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  color: #222;\n}\n.items .item.is-completed {\n  opacity: 0.4;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n@media (max-width: 480px) {\n  .items .item {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .items .item .title,\n.items .item .btn,\n.items .item .price,\n.items .item .category {\n    margin: 20px 0 0;\n  }\n  .items .item .toggler-wrapper {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9saXN0NGJhYnkvc3JjL2FwcC9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQ0NEO0FEQUM7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBQ0VGO0FEREU7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR0g7QURGRztFQUNDLGNBQUE7QUNJSjtBRERFO0VBQ0MsaUJBQUE7QUNHSDtBRERFO0VBQ0MsaUJBQUE7QUNHSDtBRERFO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0dIO0FEREU7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDR0g7QURBRTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRUg7QURBRTtFQXBERDtJQXFERSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNHRDtFREZDOzs7O0lBSUMsZ0JBQUE7RUNJRjtFREZDO0lBQ0MsU0FBQTtFQ0lGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtcyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0dHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZTtcblx0Lml0ZW0ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRtYXJnaW46IDE1cHggMDtcblx0XHRwYWRkaW5nOiAzMHB4O1xuXHRcdGJhY2tncm91bmQ6ICNmNmY2ZjY7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdFx0LnRpdGxlIHtcblx0XHRcdGNvbG9yOiAjMjIyO1xuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRjb2xvcjogIzQ5NzA2MTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LmJ0biB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMjBweDtcblx0XHR9XG5cdFx0LnByaWNlIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRcdH1cblx0XHQuY2F0ZWdvcnkge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0Ym90dG9tOiAxMHB4O1xuXHRcdFx0cmlnaHQ6IDEwcHg7XG5cdFx0XHRmb250LXNpemU6IDlweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjE7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0cGFkZGluZzogMnB4IDVweCAxcHg7XG5cdFx0fVxuXHRcdC5yZW1vdmUtaXRlbSB7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRwYWRkaW5nOiAycHggNXB4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiA1cHg7XG5cdFx0XHRyaWdodDogNXB4O1xuXHRcdFx0Y29sb3I6ICMyMjI7XG5cdFx0fVxuXG5cdFx0Ji5pcy1jb21wbGV0ZWQge1xuXHRcdFx0b3BhY2l0eTogMC40O1xuXHRcdFx0cGFkZGluZy10b3A6IDEwcHg7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdFx0QG1lZGlhKG1heC13aWR0aDogNDgwcHgpIHtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHQudGl0bGUsXG5cdFx0XHQuYnRuLFxuXHRcdFx0LnByaWNlLFxuXHRcdFx0LmNhdGVnb3J5IHtcblx0XHRcdFx0bWFyZ2luOiAyMHB4IDAgMDtcblx0XHRcdH1cblx0XHRcdC50b2dnbGVyLXdyYXBwZXIge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiLml0ZW1zIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xufVxuLml0ZW1zIC5pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDE1cHggMDtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLml0ZW1zIC5pdGVtIC50aXRsZSB7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uaXRlbXMgLml0ZW0gLnRpdGxlOmhvdmVyIHtcbiAgY29sb3I6ICM0OTcwNjE7XG59XG4uaXRlbXMgLml0ZW0gLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLml0ZW1zIC5pdGVtIC5wcmljZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLml0ZW1zIC5pdGVtIC5jYXRlZ29yeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMnB4IDVweCAxcHg7XG59XG4uaXRlbXMgLml0ZW0gLnJlbW92ZS1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjMjIyO1xufVxuLml0ZW1zIC5pdGVtLmlzLWNvbXBsZXRlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5pdGVtcyAuaXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaXRlbXMgLml0ZW0gLnRpdGxlLFxuLml0ZW1zIC5pdGVtIC5idG4sXG4uaXRlbXMgLml0ZW0gLnByaWNlLFxuLml0ZW1zIC5pdGVtIC5jYXRlZ29yeSB7XG4gICAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgfVxuICAuaXRlbXMgLml0ZW0gLnRvZ2dsZXItd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");







let ListComponent = class ListComponent {
    constructor(location, router, differs, itemService, categoryService, messagesService) {
        this.location = location;
        this.router = router;
        this.differs = differs;
        this.itemService = itemService;
        this.categoryService = categoryService;
        this.messagesService = messagesService;
    }
    ngOnInit() {
        this.getItems();
        this.itemsDiffer = this.differs.find(this.items).create();
        if (this.items.length === 0) {
            this.messagesService.send('No items', 'notice');
        }
    }
    ngDoCheck() {
        const changes = this.itemsDiffer.diff(this.items);
        if (changes) {
            /* If you want to see details then use
            changes.forEachRemovedItem((record) => ...);
            changes.forEachAddedItem((record) => ...);
            changes.forEachChangedItem((record) => ...);
            */
            //console.log(this.items);
            this.messagesService.clear(); // clear messages when items changed
            if (this.items.length === 0) {
                this.messagesService.send('No items', 'notice');
            }
        }
    }
    getItems() {
        this.itemService.getItems()
            .subscribe(items => {
            this.items = items;
            this.totalPrice = this.itemService.getTotalPrice();
        });
    }
    onSelect(item) {
        this.selectedItem = item;
    }
    onFilter(category) {
        this.getItems();
        this.filter = null;
        this.messagesService.clear();
        if (typeof category === 'object') {
            this.filter = category.id;
            this.items = this.items.filter(i => i.cat === category.id);
            this.totalPrice = this.itemService.getTotalPrice(this.items);
            if (this.items.length === 0) {
                this.messagesService.send('No items', 'notice');
            }
        }
    }
    onComplete(item) {
        item.completed = !item.completed;
        this.itemService.editItem(item); // save data
        this.totalPrice = this.itemService.getTotalPrice();
    }
    onRemove(item) {
        this.itemService.removeItem(item); // remove from data
        this.getItems(); // update items //? why is it needed?
        this.totalPrice = this.itemService.getTotalPrice();
        this.selectedItem = null;
    }
    onSearch(name) {
        this.router.navigate([`products/${name}`]);
    }
    getName(id) {
        return this.categoryService.getName(id);
    }
    getColor(id) {
        return this.categoryService.getColor(id);
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: _services_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/list/list.component.html"),
        styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/components/list/list.component.scss")]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/components/messages/messages.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  margin: 15px 0;\n  padding: 30px;\n  background: #fcfbe3;\n  color: #a49a23;\n  border-radius: 15px;\n}\n.alert.error {\n  background: #f4dcdc;\n  color: #b81e1e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9saXN0NGJhYnkvc3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NEO0FEQUM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQge1xuXHRtYXJnaW46IDE1cHggMDtcblx0cGFkZGluZzogMzBweDtcblx0YmFja2dyb3VuZDogI2ZjZmJlMztcblx0Y29sb3I6ICNhNDlhMjM7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cdCYuZXJyb3Ige1xuXHRcdGJhY2tncm91bmQ6ICNmNGRjZGM7XG5cdFx0Y29sb3I6ICNiODFlMWU7XG5cdH1cbn0iLCIuYWxlcnQge1xuICBtYXJnaW46IDE1cHggMDtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZjZmJlMztcbiAgY29sb3I6ICNhNDlhMjM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uYWxlcnQuZXJyb3Ige1xuICBiYWNrZ3JvdW5kOiAjZjRkY2RjO1xuICBjb2xvcjogI2I4MWUxZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");



let MessagesComponent = class MessagesComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    ngOnInit() {
        this.messagesService.currentMessage.subscribe(message => this.message = message);
    }
    ngOnDestroy() {
        this.messagesService.clear(); // clear messages when component loaded
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/messages/messages.component.html"),
        styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/components/messages/messages.component.scss")]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination {\n  list-style: none;\n  margin: 10px 0;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n}\n.pagination li {\n  margin: 3px;\n}\n.pagination li a {\n  display: block;\n  background: #f6f6f6;\n  color: #222;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 50%;\n  text-align: center;\n}\n.pagination li a:hover {\n  background: #dddddd;\n}\n.pagination li.first a, .pagination li.last a {\n  border-radius: 6px;\n  width: auto;\n  padding: 0 10px;\n}\n.pagination li.current a {\n  background: #65d2c1;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9saXN0NGJhYnkvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQ0Q7QURBQztFQUNDLFdBQUE7QUNFRjtBRERFO0VBQ0MsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0g7QURGRztFQUNDLG1CQUFBO0FDSUo7QURDRztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjtBREdHO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0bWFyZ2luOiAxMHB4IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGxpIHtcblx0XHRtYXJnaW46IDNweDtcblx0XHRhIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0YmFja2dyb3VuZDogI2Y2ZjZmNjtcblx0XHRcdGNvbG9yOiAjMjIyO1xuXHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMzBweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBkYXJrZW4oI2Y2ZjZmNiwgMTAlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ji5maXJzdCxcblx0XHQmLmxhc3Qge1xuXHRcdFx0YSB7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdHBhZGRpbmc6IDAgMTBweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ji5jdXJyZW50IHtcblx0XHRcdGEge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjNjVkMmMxO1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCIucGFnaW5hdGlvbiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBhZ2luYXRpb24gbGkge1xuICBtYXJnaW46IDNweDtcbn1cbi5wYWdpbmF0aW9uIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgY29sb3I6ICMyMjI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWdpbmF0aW9uIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xufVxuLnBhZ2luYXRpb24gbGkuZmlyc3QgYSwgLnBhZ2luYXRpb24gbGkubGFzdCBhIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLnBhZ2luYXRpb24gbGkuY3VycmVudCBhIHtcbiAgYmFja2dyb3VuZDogIzY1ZDJjMTtcbiAgY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "cPages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "cPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "cQuery", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pagination/pagination.component.html"),
        styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/components/pagination/pagination.component.scss")]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#products #query {\n  margin: 0 0 20px;\n}\n#products .products-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n#products .products-list .item {\n  margin: 15px 0;\n  padding: 30px;\n  background: #f6f6f6;\n  border-radius: 15px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#products .products-list .item h2 {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.1;\n  margin: 0 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9saXN0NGJhYnkvc3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsZ0JBQUE7QUNBRjtBREVDO0VBQ0MsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0FGO0FEQ0U7RUFDQyxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDQ0g7QURBRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9kdWN0cyB7XG5cdCNxdWVyeSB7XG5cdFx0bWFyZ2luOiAwIDAgMjBweDtcblx0fVxuXHQucHJvZHVjdHMtbGlzdCB7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0XHQuaXRlbSB7XG5cdFx0XHRtYXJnaW46IDE1cHggMDtcblx0XHRcdHBhZGRpbmc6IDMwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdFx0XHRoMiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMTtcblx0XHRcdFx0bWFyZ2luOiAwIDAgNXB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIiNwcm9kdWN0cyAjcXVlcnkge1xuICBtYXJnaW46IDAgMCAyMHB4O1xufVxuI3Byb2R1Y3RzIC5wcm9kdWN0cy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuI3Byb2R1Y3RzIC5wcm9kdWN0cy1saXN0IC5pdGVtIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4jcHJvZHVjdHMgLnByb2R1Y3RzLWxpc3QgLml0ZW0gaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIG1hcmdpbjogMCAwIDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");





let ProductsComponent = class ProductsComponent {
    constructor(route, router, productsService, messagesService) {
        this.route = route;
        this.router = router;
        this.productsService = productsService;
        this.messagesService = messagesService;
        this.loader = true;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const page = (params.get('page')) ? +params.get('page') : null;
            const query = (params.get('query')) ? decodeURI(params.get('query')) : null;
            this.getProducts(query, page);
        });
    }
    getProducts(query, page) {
        this.loader = true;
        this.page = (page) ? page : 1;
        this.query = (query) ? query : 'for babies'; // default search query
        this.queryInput = this.query;
        this.queryURI = encodeURI(this.query);
        this.start = (this.page > 1) ? ((this.page - 1) * 10) + 1 : this.page;
        // clear previous results
        //this.pages = null;
        this.products = null;
        this.messagesService.clear();
        this.productsService.getProducts(this.query, this.start).subscribe((data) => {
            this.setData(data);
        }, (err) => {
            if (err.status == 403) {
                this.messagesService.send('API requests daily limit exceeded! ' + err.error.error.message, 'error');
            }
            else {
                this.messagesService.send(err.message, 'error');
            }
        });
    }
    setData(data) {
        this.loader = false;
        if (data.searchInformation.totalResults > 0) {
            this.products = data.items;
            this.total = data.searchInformation.formattedTotalResults;
            this.pages = (data.searchInformation.totalResults > 100) ? 10 : data.searchInformation.totalResults / 10; // free API limits
        }
        else {
            this.total = 0;
            this.pages = null;
            this.products = null; // hide previous results
            this.messagesService.send('No results, sorry !');
        }
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
    { type: _services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/components/settings/settings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#settings {\n  text-align: center;\n}\n#settings .field {\n  margin: 0 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9saXN0NGJhYnkvc3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7QUNDRDtBREFDO0VBQ0MsZ0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2V0dGluZ3Mge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC5maWVsZCB7XG5cdFx0bWFyZ2luOiAwIDAgMjBweDtcblx0fVxufSIsIiNzZXR0aW5ncyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNzZXR0aW5ncyAuZmllbGQge1xuICBtYXJnaW46IDAgMCAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/services/messages.service.ts");




let SettingsComponent = class SettingsComponent {
    constructor(cookieService, messagesService) {
        this.cookieService = cookieService;
        this.messagesService = messagesService;
    }
    ngOnInit() {
        if (this.cookieService.get('list4baby') === '0') {
            this.useSample = false;
        }
        else {
            this.useSample = true;
        }
    }
    useSampleData() {
        this.useSample = !this.useSample;
        if (this.useSample) { // use sample data
            this.cookieService.set('list4baby', '1');
        }
        else { // no sample data
            this.cookieService.set('list4baby', '0');
        }
    }
    removeData() {
        //TODO confirmation :)
        localStorage.removeItem('items');
        localStorage.removeItem('categories');
        this.messagesService.send('All data removed', 'notice');
    }
};
SettingsComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/settings/settings.component.scss")]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.service */ "./src/app/services/item.service.ts");




let CategoryService = class CategoryService {
    constructor(cookieService, itemService) {
        this.cookieService = cookieService;
        this.itemService = itemService;
    }
    getCategories() {
        this.categories = JSON.parse(localStorage.getItem('categories')) || [];
        if (this.categories.length === 0
            && this.cookieService.get('list4baby') !== '0') {
            this.addSampleData();
        }
        return this.categories;
    }
    addSampleData() {
        if (this.categories.length === 0) { // add sample data !
            this.addCategory({
                id: 0,
                name: 'Category',
                color: '#b8f0e7'
            });
            this.addCategory({
                id: 1,
                name: 'Another ',
                color: '#ecdada'
            });
            this.addCategory({
                id: 2,
                name: 'Example',
            });
        }
    }
    addCategory(category) {
        category.id = this.getNewID(); // update ID
        this.categories.push(category);
        this.saveCategories();
    }
    removeCategory(category) {
        this.categories = this.categories.filter(i => i.id !== category.id);
        this.saveCategories();
        // TODO remove categorires from items
        // this.itemService.getItems()
        // .subscribe(items => {
        // TODO remove cat from item
        // });
    }
    editCategory(category) {
        const id = this.findIndex(category.id);
        this.categories[id] = category;
        this.saveCategories();
    }
    saveCategories() {
        localStorage.setItem('categories', JSON.stringify(this.categories));
    }
    findIndex(id) {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                return i;
            }
        }
        throw new Error(`Category with id ${id} was not found!`);
    }
    getNewID() {
        return (this.categories.length) ? this.categories[this.categories.length - 1].id + 1 : 0;
    }
    getName(id) {
        for (const cat of this.categories) {
            if (cat.id === id) {
                return cat.name;
            }
        }
    }
    getColor(id) {
        for (const cat of this.categories) {
            if (cat.id === id) {
                return cat.color || null;
            }
        }
    }
};
CategoryService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let ItemService = class ItemService {
    constructor(cookieService) {
        this.cookieService = cookieService;
        //this.getItems(); //? is it needed?
    }
    getItems() {
        this.items = JSON.parse(localStorage.getItem('items')) || [];
        if (this.items.length === 0
            && this.cookieService.get('list4baby') !== '0') {
            this.addSampleData();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.items);
    }
    getItem(id) {
        id = this.findIndex(id); // make sure that ID is correct
        return this.items[id];
    }
    addItem(item) {
        item.id = this.getNewID(); // update ID
        this.items.unshift(item); // add at the top
        //this.items.push(item); // add at the end
        this.saveItems();
    }
    addSampleData() {
        if (this.items.length === 0) { // add sample data
            this.addItem({
                id: 0,
                name: 'Aliquam maximus',
                cat: 1,
                price: 60,
                quantity: 2,
                completed: true
            });
            this.addItem({
                id: 1,
                name: 'Sed facilisis blandit',
                cat: 0,
                price: 28,
                quantity: 1,
                completed: false
            });
            this.addItem({
                id: 2,
                name: 'Dolor sit amet',
                cat: 0,
                price: 52,
                quantity: 1,
                completed: true
            });
            this.addItem({
                id: 3,
                name: 'Lorem ipsum',
                cat: 0,
                price: 5,
                quantity: 1,
                completed: true
            });
            this.addItem({
                id: 4,
                name: 'Another item',
                cat: 1,
                price: 31,
                quantity: 4,
                completed: false
            });
            this.addItem({
                id: 5,
                cat: 0,
                name: 'Example item',
                completed: false
            });
        }
    }
    removeItem(item) {
        this.items = this.items.filter(i => i.id !== item.id);
        this.saveItems();
    }
    editItem(item) {
        const id = this.findIndex(item.id);
        this.items[id] = item; // ? testing
        this.saveItems();
    }
    saveItems() {
        localStorage.setItem('items', JSON.stringify(this.items));
    }
    findIndex(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                return i;
            }
        }
        throw new Error(`Item with id ${id} was not found!`);
    }
    getNewID() {
        //return ( this.items.length ) ? this.items[this.items.length - 1].id + 1 : 0; // if regular push
        return (this.items.length) ? this.items[0].id + 1 : 0; // if unshift, because the order is different
    }
    getTotalPrice(items) {
        if (!items) {
            items = this.items;
        }
        let total = 0;
        for (const item of items) {
            if (item.price && !item.completed) {
                const q = (item.quantity) ? item.quantity : 1;
                total += q * +item.price;
            }
        }
        return total;
    }
};
ItemService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ItemService);



/***/ }),

/***/ "./src/app/services/messages.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MessagesService = class MessagesService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.currentMessage = this.messageSource.asObservable();
    }
    send(message, type, time) {
        const msg = {
            name: message
        };
        if (type) {
            msg.type = type;
        }
        if (time) {
            msg.time = time;
        }
        this.messageSource.next(msg);
        if (time) {
            setTimeout(() => {
                this.clear(); // clear message
            }, time * 1000 // time in seconds to miliseconds :)
            );
        }
    }
    clear() {
        this.messageSource.next({}); // clear message
    }
};
MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessagesService);



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
        this.api = 'https://www.googleapis.com/customsearch/v1?cx=011032761026597099722:iq28kyyzbes'; // URL to web api
        this.key = 'AIzaSyD3nqOo_Dpvc-tCxrilCNN7dckdcZCSaFs';
    }
    getProducts(query, page) {
        let url = this.api;
        url += `&key=${this.key}`;
        url += `&q=${encodeURI(query)}`;
        if (page > 1) {
            url += `&start=${page}`;
        }
        // console.log(url);
        return this.http.get(url);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/art/list4baby/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map