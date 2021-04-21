(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-vote-vote-module"],{

/***/ "1pjf":
/*!************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/vote.module.ts ***!
  \************************************************************************************/
/*! exports provided: httpLoaderFactory, VoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function() { return httpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteModule", function() { return VoteModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_extensions_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-extensions/elements */ "mmRk");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "1wCh");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "5CIr");
/* harmony import */ var _voter_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./voter.state */ "sSZs");
/* harmony import */ var _vote_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vote-routing.module */ "Dy6l");
/* harmony import */ var _components_vote_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/vote.component */ "Hy2C");
/* harmony import */ var _vote_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vote.effects */ "yqcl");
/* harmony import */ var _vote_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vote.reducer */ "gQ6t");
/* harmony import */ var _components_steps_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/steps/authenticate/authenticate.component */ "lURj");
/* harmony import */ var _components_steps_display_ballot_display_ballot_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/steps/display-ballot/display-ballot.component */ "24LG");
/* harmony import */ var _components_steps_review_ballot_review_ballot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/steps/review-ballot/review-ballot.component */ "6Z+T");
/* harmony import */ var _components_steps_acknowledgement_acknowledgement_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/steps/acknowledgement/acknowledgement.component */ "TqPz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");





















function httpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].i18nPrefix}/assets/i18n/examples/`, '.json');
}
class VoteModule {
    constructor() { }
}
VoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: VoteModule });
VoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function VoteModule_Factory(t) { return new (t || VoteModule)(); }, providers: [], imports: [[
            _angular_extensions_elements__WEBPACK_IMPORTED_MODULE_1__["LazyElementsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _vote_routing_module__WEBPACK_IMPORTED_MODULE_9__["VoteRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_voter_state__WEBPACK_IMPORTED_MODULE_8__["FEATURE_NAME"], _vote_reducer__WEBPACK_IMPORTED_MODULE_12__["voteReducer"]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    useFactory: httpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
                },
                isolate: true
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_vote_effects__WEBPACK_IMPORTED_MODULE_11__["VoteEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](VoteModule, { declarations: [_components_vote_component__WEBPACK_IMPORTED_MODULE_10__["VoteComponent"],
        _components_steps_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_13__["AuthenticateComponent"],
        _components_steps_display_ballot_display_ballot_component__WEBPACK_IMPORTED_MODULE_14__["DisplayBallotComponent"],
        _components_steps_review_ballot_review_ballot_component__WEBPACK_IMPORTED_MODULE_15__["ReviewBallotComponent"],
        _components_steps_acknowledgement_acknowledgement_component__WEBPACK_IMPORTED_MODULE_16__["AcknowledgementComponent"]], imports: [_angular_extensions_elements__WEBPACK_IMPORTED_MODULE_1__["LazyElementsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _vote_routing_module__WEBPACK_IMPORTED_MODULE_9__["VoteRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"]] }); })();


/***/ }),

/***/ "24LG":
/*!*********************************************************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/components/steps/display-ballot/display-ballot.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: DisplayBallotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayBallotComponent", function() { return DisplayBallotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");






function DisplayBallotComponent_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const candidate_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", candidate_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", candidate_r1, " ");
} }
class DisplayBallotComponent {
    constructor() {
        this.candidates = ['Manohar', 'Vamsi'];
    }
    ngOnInit() { }
    next() { }
}
DisplayBallotComponent.ɵfac = function DisplayBallotComponent_Factory(t) { return new (t || DisplayBallotComponent)(); };
DisplayBallotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayBallotComponent, selectors: [["bvs-display-ballot"]], decls: 9, vars: 2, consts: [["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "matStepperPrevious", "", "type", "button"], ["mat-button", "", "matStepperNext", "", "type", "button", 3, "click"], [1, "example-radio-button", 3, "value"]], template: function DisplayBallotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pick your favorite candidate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisplayBallotComponent_Template_mat_radio_group_ngModelChange_2_listener($event) { return ctx.favoriteCandidate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DisplayBallotComponent_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayBallotComponent_Template_button_click_7_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.favoriteCandidate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.candidates);
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_1__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__["MatRadioButton"]], styles: [".example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Rpc3BsYXktYmFsbG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImRpc3BsYXktYmFsbG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "4CKl":
/*!*************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/vote.actions.ts ***!
  \*************************************************************************************/
/*! exports provided: actionVoteAuthenticate, actionVoteRetrieveBallot, updateBallotVote, resetBallotVote, voteSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionVoteAuthenticate", function() { return actionVoteAuthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionVoteRetrieveBallot", function() { return actionVoteRetrieveBallot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBallotVote", function() { return updateBallotVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetBallotVote", function() { return resetBallotVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteSubmit", function() { return voteSubmit; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const actionVoteAuthenticate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Voter] Authenticate', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const actionVoteRetrieveBallot = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Voter] RetrieveBallot');
const updateBallotVote = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Voter] UpdateBallotVote', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetBallotVote = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Voter] ResetBallotVote');
const voteSubmit = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Voter] Submit');


/***/ }),

/***/ "6Z+T":
/*!*******************************************************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/components/steps/review-ballot/review-ballot.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ReviewBallotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewBallotComponent", function() { return ReviewBallotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");



class ReviewBallotComponent {
    constructor() { }
    ngOnInit() { }
    next() { }
}
ReviewBallotComponent.ɵfac = function ReviewBallotComponent_Factory(t) { return new (t || ReviewBallotComponent)(); };
ReviewBallotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewBallotComponent, selectors: [["bvs-review-ballot"]], decls: 9, vars: 0, consts: [["mat-button", "", "matStepperPrevious", "", "type", "button"], ["mat-button", ""], ["mat-button", "", "matStepperNext", "", "type", "button", 3, "click"]], template: function ReviewBallotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "review-ballot works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewBallotComponent_Template_button_click_7_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperNext"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXctYmFsbG90LmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ "Dy6l":
/*!********************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/vote-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: VoteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteRoutingModule", function() { return VoteRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_vote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/vote.component */ "Hy2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_vote_component__WEBPACK_IMPORTED_MODULE_1__["VoteComponent"]
    }
];
class VoteRoutingModule {
}
VoteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: VoteRoutingModule });
VoteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function VoteRoutingModule_Factory(t) { return new (t || VoteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VoteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Hy2C":
/*!**************************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/components/vote.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: VoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteComponent", function() { return VoteComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/core.module */ "v0KV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/rtl-support/rtl-support.directive */ "u6lD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _steps_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./steps/authenticate/authenticate.component */ "lURj");
/* harmony import */ var _steps_display_ballot_display_ballot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./steps/display-ballot/display-ballot.component */ "24LG");
/* harmony import */ var _steps_review_ballot_review_ballot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./steps/review-ballot/review-ballot.component */ "6Z+T");
/* harmony import */ var _steps_acknowledgement_acknowledgement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./steps/acknowledgement/acknowledgement.component */ "TqPz");

















function VoteComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Authenticate");
} }
function VoteComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Display Ballot");
} }
function VoteComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Review Ballot");
} }
function VoteComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Acknowledgement");
} }
class VoteComponent {
    constructor(fb, store, translate, notificationService) {
        this.fb = fb;
        this.store = store;
        this.translate = translate;
        this.notificationService = notificationService;
        this.routeAnimationsElements = _core_core_module__WEBPACK_IMPORTED_MODULE_3__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.isEditable = true;
        this.isAuthenticateComplete = true;
        this.isBallotSelectionComplete = true;
        this.isBallotReviewComplete = true;
        this.isAcknowledgementComplete = true;
    }
    ngOnInit() { }
    reset() { }
    stepSelectionChanged($event) {
        if ($event.selectedStep.label === 'Acknowledgement') {
            this.isEditable = false;
        }
    }
}
VoteComponent.ɵfac = function VoteComponent_Factory(t) { return new (t || VoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
VoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VoteComponent, selectors: [["bvs-form"]], decls: 23, vars: 16, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], ["rtl", "", 1, "main-heading"], ["rtl", "", 1, "row", 3, "ngClass"], [1, "col-md-12", "col-lg-12"], ["labelPosition", "bottom", "linear", "", 1, "col-md-12", "col-lg-12", 3, "selectionChange"], ["stepper", ""], [3, "completed", "editable", "label"], ["matStepLabel", ""]], template: function VoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-horizontal-stepper", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function VoteComponent_Template_mat_horizontal_stepper_selectionChange_9_listener($event) { return ctx.stepSelectionChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, VoteComponent_ng_template_12_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "bvs-authenticate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, VoteComponent_ng_template_15_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "bvs-display-ballot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, VoteComponent_ng_template_18_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "bvs-review-ballot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, VoteComponent_ng_template_21_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "bvs-acknowledgement");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 14, "bvs.vote.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.routeAnimationsElements);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("completed", ctx.isAuthenticateComplete)("editable", ctx.isEditable)("label", "Authenticate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("completed", ctx.isBallotSelectionComplete)("editable", ctx.isEditable)("label", "Display Ballot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("completed", ctx.isBallotReviewComplete)("editable", ctx.isEditable)("label", "Review Ballot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("completed", ctx.isAcknowledgementComplete)("editable", ctx.isEditable)("label", "Acknowledgement");
    } }, directives: [_shared_rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_5__["RtlSupportDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepLabel"], _steps_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticateComponent"], _steps_display_ballot_display_ballot_component__WEBPACK_IMPORTED_MODULE_10__["DisplayBallotComponent"], _steps_review_ballot_review_ballot_component__WEBPACK_IMPORTED_MODULE_11__["ReviewBallotComponent"], _steps_acknowledgement_acknowledgement_component__WEBPACK_IMPORTED_MODULE_12__["AcknowledgementComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".main-heading[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 0 0 20px 0;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  display: flex;\n}\n\nmat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\nform[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 20px 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ZvdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDRTtFQUNFLGNBQUE7QUFDSjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFFRTtFQUNFLFdBQUE7QUFBSjs7QUFHRTtFQUNFLHFCQUFBO0FBREoiLCJmaWxlIjoidm90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWhlYWRpbmcge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIG1hdC1jYXJkLWhlYWRlciB7XG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbn1cblxuZm9ybSB7XG4gIG1hcmdpbjogMjBweCAwO1xuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHggMCAwO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "TqPz":
/*!***********************************************************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/components/steps/acknowledgement/acknowledgement.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: AcknowledgementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcknowledgementComponent", function() { return AcknowledgementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AcknowledgementComponent {
    constructor() { }
    ngOnInit() { }
}
AcknowledgementComponent.ɵfac = function AcknowledgementComponent_Factory(t) { return new (t || AcknowledgementComponent)(); };
AcknowledgementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcknowledgementComponent, selectors: [["bvs-acknowledgement"]], decls: 2, vars: 0, template: function AcknowledgementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "acknowledgement works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2tub3dsZWRnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ "gQ6t":
/*!*************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/vote.reducer.ts ***!
  \*************************************************************************************/
/*! exports provided: initialState, voteReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteReducer", function() { return voteReducer; });
/* harmony import */ var _vote_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vote.actions */ "4CKl");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const initialState = {
    voter: {},
    authenticated: false,
    ballot: {},
    raceVotes: []
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_vote_actions__WEBPACK_IMPORTED_MODULE_0__["updateBallotVote"], (state, { raceVotes }) => (Object.assign(Object.assign({}, state), { raceVotes }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_vote_actions__WEBPACK_IMPORTED_MODULE_0__["resetBallotVote"], () => initialState));
function voteReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "lURj":
/*!*****************************************************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/components/steps/authenticate/authenticate.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AuthenticateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateComponent", function() { return AuthenticateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-file-drop */ "gfTr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");






function AuthenticateComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Upload received certificate. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticateComponent_ng_template_1_Template_button_click_1_listener() { const openFileSelector_r2 = ctx.openFileSelector; return openFileSelector_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Browse Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthenticateComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.relativePath);
} }
class AuthenticateComponent {
    constructor() {
        this.files = [];
    }
    ngOnInit() { }
    dropped(files) {
        this.files = files;
        for (const droppedFile of files) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry;
                fileEntry.file((file) => {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    /**
                     // You could upload it like this:
                     const formData = new FormData()
                     formData.append('logo', file, relativePath)
          
                     // Headers
                     const headers = new HttpHeaders({
                      'security-token': 'mytoken'
                    })
          
                     this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
                     .subscribe(data => {
                      // Sanitized logo returned from backend
                    })
                     **/
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        }
    }
    fileOver(event) {
        console.log(event);
    }
    fileLeave(event) {
        console.log(event);
    }
    next() { }
}
AuthenticateComponent.ɵfac = function AuthenticateComponent_Factory(t) { return new (t || AuthenticateComponent)(); };
AuthenticateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticateComponent, selectors: [["bvs-authenticate"]], decls: 13, vars: 1, consts: [["dropZoneLabel", "Drop files here", 3, "onFileDrop", "onFileOver", "onFileLeave"], ["ngx-file-drop-content-tmp", ""], [1, "upload-table"], [1, "table"], [1, "upload-name-style"], [4, "ngFor", "ngForOf"], ["mat-button", "", "cdkTrapFocus", "", "matStepperNext", "", "type", "button", 3, "click"], ["type", "button", 3, "click"]], template: function AuthenticateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-file-drop", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFileDrop", function AuthenticateComponent_Template_ngx_file_drop_onFileDrop_0_listener($event) { return ctx.dropped($event); })("onFileOver", function AuthenticateComponent_Template_ngx_file_drop_onFileOver_0_listener($event) { return ctx.fileOver($event); })("onFileLeave", function AuthenticateComponent_Template_ngx_file_drop_onFileLeave_0_listener($event) { return ctx.fileLeave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthenticateComponent_ng_template_1_Template, 3, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AuthenticateComponent_tr_9_Template, 4, 1, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticateComponent_Template_button_click_11_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
    } }, directives: [ngx_file_drop__WEBPACK_IMPORTED_MODULE_1__["NgxFileDropComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_1__["NgxFileDropContentTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperNext"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["CdkTrapFocus"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoZW50aWNhdGUuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ "mmRk":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@angular-extensions/elements/__ivy_ngcc__/fesm2015/angular-extensions-elements.js ***!
  \********************************************************************************************************/
/*! exports provided: LAZY_ELEMENTS_REGISTRY, LAZY_ELEMENT_CONFIGS, LAZY_ELEMENT_ROOT_GUARD, LAZY_ELEMENT_ROOT_OPTIONS, LazyElementDirective, LazyElementDynamicDirective, LazyElementsLoaderService, LazyElementsModule, createLazyElementRootGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_ELEMENTS_REGISTRY", function() { return LAZY_ELEMENTS_REGISTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_ELEMENT_CONFIGS", function() { return LAZY_ELEMENT_CONFIGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_ELEMENT_ROOT_GUARD", function() { return LAZY_ELEMENT_ROOT_GUARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_ELEMENT_ROOT_OPTIONS", function() { return LAZY_ELEMENT_ROOT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyElementDirective", function() { return LazyElementDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyElementDynamicDirective", function() { return LazyElementDynamicDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyElementsLoaderService", function() { return LazyElementsLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyElementsModule", function() { return LazyElementsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLazyElementRootGuard", function() { return createLazyElementRootGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "mrSG");




/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazy-elements/lazy-elements.tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */

const LAZY_ELEMENT_CONFIGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('LAZY_ELEMENT_CONFIGS');
/** @type {?} */
const LAZY_ELEMENT_ROOT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('LAZY_ELEMENT_ROOT_OPTIONS');
/** @type {?} */
const LAZY_ELEMENT_ROOT_GUARD = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('LAZY_ELEMENT_ROOT_GUARD');
/** @type {?} */
const LAZY_ELEMENTS_REGISTRY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('LAZY_ELEMENTS_REGISTRY', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => new Map()),
});
/**
 * @record
 */
function LazyElementsRegistry() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazy-elements/lazy-elements-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOG_PREFIX = '@angular-extensions/elements';
/**
 * @record
 */
function HooksConfig() { }
if (false) {}
/**
 * @record
 */
function ElementConfig() { }
if (false) {}
class LazyElementsLoaderService {
    /**
     * @param {?} registry
     * @param {?} options
     */
    constructor(registry, options) {
        this.registry = registry;
        this.options = options;
        this.configs = [];
        if (!options) {
            this.options = {};
        }
    }
    /**
     * @param {?} newConfigs
     * @return {?}
     */
    addConfigs(newConfigs) {
        newConfigs.forEach((/**
         * @param {?} newConfig
         * @return {?}
         */
        (newConfig) => {
            /** @type {?} */
            const existingConfig = this.getElementConfig(newConfig.tag);
            if (existingConfig) {
                console.warn(`${LOG_PREFIX} - ElementConfig for tag '${newConfig.tag}' was previously added, it will not be added multiple times, continue...`);
            }
            else {
                newConfig.isAdded = true;
                this.configs.push(newConfig);
                /** @type {?} */
                const shouldPreload = newConfig.preload !== undefined
                    ? newConfig.preload
                    : this.options.preload;
                if (shouldPreload) {
                    this.loadElement(newConfig.url, newConfig.tag, newConfig.isModule, newConfig.importMap, newConfig.hooks);
                }
            }
        }));
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    getElementConfig(tag) {
        return this.configs.find((/**
         * @param {?} config
         * @return {?}
         */
        (config) => config.tag === tag));
    }
    /**
     * @param {?=} tags
     * @return {?}
     */
    preload(tags) {
        /** @type {?} */
        let configs = this.configs;
        if (tags) {
            configs = this.configs.filter((/**
             * @param {?} config
             * @return {?}
             */
            (config) => tags.includes(config.tag)));
        }
        configs.forEach((/**
         * @param {?} config
         * @return {?}
         */
        (config) => this.loadElement(config.url, config.tag, config.isModule, config.importMap, config.hooks)));
    }
    /**
     * @param {?} url
     * @param {?} tag
     * @param {?=} isModule
     * @param {?=} importMap
     * @param {?=} hooksConfig
     * @return {?}
     */
    loadElement(url, tag, isModule, importMap, hooksConfig) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            const config = this.getElementConfig(tag);
            isModule !== null && isModule !== void 0 ? isModule : (isModule = (_a = config === null || config === void 0 ? void 0 : config.isModule) !== null && _a !== void 0 ? _a : this.options.isModule);
            importMap !== null && importMap !== void 0 ? importMap : (importMap = (_b = config === null || config === void 0 ? void 0 : config.importMap) !== null && _b !== void 0 ? _b : this.options.importMap);
            if (!tag) {
                throw new Error(`${LOG_PREFIX} - tag for '${url}' not found, the *axLazyElement has to be used on HTML element`);
            }
            if (!url) {
                if (!(config === null || config === void 0 ? void 0 : config.url) && !importMap) {
                    throw new Error(`${LOG_PREFIX} - url for <${tag}> not found`);
                }
                else if (importMap) {
                    url = tag;
                }
                else {
                    url = config.url;
                }
            }
            if (!this.hasElement(url)) {
                /** @type {?} */
                const notifier = this.addElement(url);
                /** @type {?} */
                const beforeLoadHook = (_e = (_c = hooksConfig === null || hooksConfig === void 0 ? void 0 : hooksConfig.beforeLoad) !== null && _c !== void 0 ? _c : (_d = config === null || config === void 0 ? void 0 : config.hooks) === null || _d === void 0 ? void 0 : _d.beforeLoad) !== null && _e !== void 0 ? _e : (_g = (_f = this.options) === null || _f === void 0 ? void 0 : _f.hooks) === null || _g === void 0 ? void 0 : _g.beforeLoad;
                /** @type {?} */
                const afterLoadHook = (_k = (_h = hooksConfig === null || hooksConfig === void 0 ? void 0 : hooksConfig.afterLoad) !== null && _h !== void 0 ? _h : (_j = config === null || config === void 0 ? void 0 : config.hooks) === null || _j === void 0 ? void 0 : _j.afterLoad) !== null && _k !== void 0 ? _k : (_m = (_l = this.options) === null || _l === void 0 ? void 0 : _l.hooks) === null || _m === void 0 ? void 0 : _m.afterLoad;
                if (importMap) {
                    url = yield this.resolveImportMap(url);
                }
                /** @type {?} */
                const script = (/** @type {?} */ (document.createElement('script')));
                if (isModule) {
                    script.type = 'module';
                }
                script.src = url;
                script.onload = (/**
                 * @return {?}
                 */
                () => {
                    if (afterLoadHook) {
                        this.handleHook(afterLoadHook, tag)
                            .then(notifier.resolve)
                            .catch(notifier.reject);
                    }
                    else {
                        notifier.resolve();
                    }
                });
                script.onerror = notifier.reject;
                if (beforeLoadHook) {
                    this.handleHook(beforeLoadHook, tag)
                        .then((/**
                     * @return {?}
                     */
                    () => document.body.appendChild(script)))
                        .catch(notifier.reject);
                }
                else {
                    document.body.appendChild(script);
                }
            }
            return this.registry.get(this.stripUrlProtocol(url));
        });
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    addElement(url) {
        /** @type {?} */
        let notifier;
        this.registry.set(this.stripUrlProtocol(url), new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => (notifier = { resolve, reject }))));
        return notifier;
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    hasElement(url) {
        return this.registry.has(this.stripUrlProtocol(url));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    stripUrlProtocol(url) {
        return url.replace(/https?:\/\//, '');
    }
    /**
     * @private
     * @param {?} hook
     * @param {?} tag
     * @return {?}
     */
    handleHook(hook, tag) {
        try {
            return Promise.resolve(hook(tag));
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    resolveImportMap(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            const System = ((/** @type {?} */ (window))).System;
            if (System) {
                yield System.prepareImport();
                url = System.resolve(url);
            }
            else {
                throw new Error(`${LOG_PREFIX} - importMap feature depends on SystemJS library to be globally loaded but none was found, thus '${url}' can't be resolved. You should either load SystemJS or remove the importMap flag.`);
            }
            return url;
        });
    }
}
LazyElementsLoaderService.ɵfac = function LazyElementsLoaderService_Factory(t) { return new (t || LazyElementsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAZY_ELEMENTS_REGISTRY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAZY_ELEMENT_ROOT_OPTIONS, 8)); };
/** @nocollapse */
LazyElementsLoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAZY_ELEMENTS_REGISTRY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAZY_ELEMENT_ROOT_OPTIONS,] }] }
];
/** @nocollapse */ LazyElementsLoaderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LazyElementsLoaderService_Factory() { return new LazyElementsLoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAZY_ELEMENTS_REGISTRY), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAZY_ELEMENT_ROOT_OPTIONS, 8)); }, token: LazyElementsLoaderService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyElementsLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LAZY_ELEMENTS_REGISTRY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LAZY_ELEMENT_ROOT_OPTIONS]
            }] }]; }, null); })();
if (false) {}
/**
 * @record
 */
function Notifier() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazy-elements/lazy-element/lazy-element.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOG_PREFIX$1 = '@angular-extensions/elements';
class LazyElementDirective {
    /**
     * @param {?} vcr
     * @param {?} template
     * @param {?} elementsLoaderService
     * @param {?} cfr
     * @param {?} cdr
     */
    constructor(vcr, template, elementsLoaderService, cfr, cdr) {
        this.vcr = vcr;
        this.template = template;
        this.elementsLoaderService = elementsLoaderService;
        this.cfr = cfr;
        this.cdr = cdr;
        // tslint:disable-line:no-input-rename
        this.viewRef = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const tpl = (/** @type {?} */ (this.template));
        /** @type {?} */
        const elementTag = tpl._declarationTContainer
            ? tpl._declarationTContainer.tagName
            : tpl._def.element.template.nodes[0].element.name;
        /** @type {?} */
        const elementConfig = this.elementsLoaderService.getElementConfig(elementTag) ||
            ((/** @type {?} */ ({})));
        /** @type {?} */
        const options = this.elementsLoaderService.options;
        /** @type {?} */
        const loadingComponent = elementConfig.loadingComponent || options.loadingComponent;
        if (this.loadingTemplateRef) {
            this.vcr.createEmbeddedView(this.loadingTemplateRef);
        }
        else if (loadingComponent) {
            /** @type {?} */
            const factory = this.cfr.resolveComponentFactory(loadingComponent);
            this.vcr.createComponent(factory);
        }
        this.elementsLoaderService
            .loadElement(this.url, elementTag, this.isModule, this.importMap, elementConfig === null || elementConfig === void 0 ? void 0 : elementConfig.hooks)
            .then((/**
         * @return {?}
         */
        () => customElements.whenDefined(elementTag)))
            .then((/**
         * @return {?}
         */
        () => {
            this.vcr.clear();
            this.viewRef = this.vcr.createEmbeddedView(this.template);
            this.cdr.markForCheck();
        }))
            .catch((/**
         * @return {?}
         */
        () => {
            this.vcr.clear();
            /** @type {?} */
            const errorComponent = elementConfig.errorComponent || options.errorComponent;
            if (this.errorTemplateRef) {
                this.vcr.createEmbeddedView(this.errorTemplateRef);
                this.cdr.markForCheck();
            }
            else if (errorComponent) {
                /** @type {?} */
                const factory = this.cfr.resolveComponentFactory(errorComponent);
                this.vcr.createComponent(factory);
                this.cdr.markForCheck();
            }
            else {
                console.error(`${LOG_PREFIX$1} - Loading of element <${elementTag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element`);
            }
        }));
    }
    /**
     * @return {?}
     */
    destroyEmbeddedView() {
        if (this.viewRef && !this.viewRef.destroyed) {
            this.viewRef.detach();
            this.viewRef.destroy();
            this.viewRef = null;
        }
    }
}
LazyElementDirective.ɵfac = function LazyElementDirective_Factory(t) { return new (t || LazyElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LazyElementsLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
LazyElementDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazyElementDirective, selectors: [["", "axLazyElement", ""]], inputs: { url: ["axLazyElement", "url"], loadingTemplateRef: ["axLazyElementLoadingTemplate", "loadingTemplateRef"], errorTemplateRef: ["axLazyElementErrorTemplate", "errorTemplateRef"], isModule: ["axLazyElementModule", "isModule"], importMap: ["axLazyElementImportMap", "importMap"] } });
/** @nocollapse */
LazyElementDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
    { type: LazyElementsLoaderService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
LazyElementDirective.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElement',] }],
    loadingTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElementLoadingTemplate',] }],
    errorTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElementErrorTemplate',] }],
    isModule: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElementModule',] }],
    importMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElementImportMap',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyElementDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[axLazyElement]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: LazyElementsLoaderService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElement']
        }], loadingTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElementLoadingTemplate']
        }], errorTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElementErrorTemplate']
        }], isModule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElementModule']
        }], importMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElementImportMap']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazy-elements/lazy-element-dynamic/lazy-element-dynamic.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LOG_PREFIX$2 = '@angular-extensions/elements';
/**
 * \@dynamic
 */
class LazyElementDynamicDirective {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} vcr
     * @param {?} cfr
     * @param {?} cdr
     * @param {?} template
     * @param {?} elementsLoaderService
     */
    constructor(document, renderer, vcr, cfr, cdr, template, elementsLoaderService) {
        this.document = document;
        this.renderer = renderer;
        this.vcr = vcr;
        this.cfr = cfr;
        this.cdr = cdr;
        this.template = template;
        this.elementsLoaderService = elementsLoaderService;
        // tslint:disable-line:no-input-rename
        this.viewRef = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.tag || this.tag.length === 0 || !this.tag.includes('-')) {
            throw new Error(`${LOG_PREFIX$2} - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="'some-tag'"), got: "${this.tag}"`);
        }
        /** @type {?} */
        const elementConfig = this.elementsLoaderService.getElementConfig(this.tag) ||
            ((/** @type {?} */ ({})));
        /** @type {?} */
        const options = this.elementsLoaderService.options;
        /** @type {?} */
        const loadingComponent = elementConfig.loadingComponent || options.loadingComponent;
        if (this.loadingTemplateRef) {
            this.vcr.createEmbeddedView(this.loadingTemplateRef);
        }
        else if (loadingComponent) {
            /** @type {?} */
            const factory = this.cfr.resolveComponentFactory(loadingComponent);
            this.vcr.createComponent(factory);
        }
        this.elementsLoaderService
            .loadElement(this.url, this.tag, this.isModule, this.importMap, elementConfig === null || elementConfig === void 0 ? void 0 : elementConfig.hooks)
            .then((/**
         * @return {?}
         */
        () => customElements.whenDefined(this.tag)))
            .then((/**
         * @return {?}
         */
        () => {
            this.vcr.clear();
            /** @type {?} */
            const originalCreateElement = this.renderer.createElement;
            this.renderer.createElement = (/**
             * @param {?} name
             * @param {?} namespace
             * @return {?}
             */
            (name, namespace) => {
                if (name === 'ax-lazy-element') {
                    name = this.tag;
                }
                return this.document.createElement(name);
            });
            this.viewRef = this.vcr.createEmbeddedView(this.template);
            this.renderer.createElement = originalCreateElement;
            this.cdr.markForCheck();
        }))
            .catch((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            /** @type {?} */
            const errorComponent = elementConfig.errorComponent || options.errorComponent;
            this.vcr.clear();
            if (this.errorTemplateRef) {
                this.vcr.createEmbeddedView(this.errorTemplateRef);
                this.cdr.markForCheck();
            }
            else if (errorComponent) {
                /** @type {?} */
                const factory = this.cfr.resolveComponentFactory(errorComponent);
                this.vcr.createComponent(factory);
                this.cdr.markForCheck();
            }
            else {
                console.error(`${LOG_PREFIX$2} - Loading of element <${this.tag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElementDynamic="errorTemplate: error" to display customized error message in place of element\n\n`, error);
            }
        }));
    }
    /**
     * @return {?}
     */
    destroyEmbeddedView() {
        if (this.viewRef && !this.viewRef.destroyed) {
            this.viewRef.detach();
            this.viewRef.destroy();
            this.viewRef = null;
        }
    }
}
LazyElementDynamicDirective.ɵfac = function LazyElementDynamicDirective_Factory(t) { return new (t || LazyElementDynamicDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LazyElementsLoaderService)); };
LazyElementDynamicDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazyElementDynamicDirective, selectors: [["", "axLazyElementDynamic", ""]], inputs: { tag: ["axLazyElementDynamic", "tag"], url: ["axLazyElementDynamicUrl", "url"], loadingTemplateRef: ["axLazyElementDynamicLoadingTemplate", "loadingTemplateRef"], errorTemplateRef: ["axLazyElementDynamicErrorTemplate", "errorTemplateRef"], isModule: ["axLazyElementDynamicModule", "isModule"], importMap: ["axLazyElementDynamicImportMap", "importMap"] } });
/** @nocollapse */
LazyElementDynamicDirective.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
    { type: LazyElementsLoaderService }
];
LazyElementDynamicDirective.propDecorators = {
    tag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElementDynamic',] }],
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElementDynamicUrl',] }],
    loadingTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElementDynamicLoadingTemplate',] }],
    errorTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElementDynamicErrorTemplate',] }],
    isModule: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElementDynamicModule',] }],
    importMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['axLazyElementDynamicImportMap',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyElementDynamicDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[axLazyElementDynamic]'
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: LazyElementsLoaderService }]; }, { tag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElementDynamic']
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElementDynamicUrl']
        }], loadingTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElementDynamicLoadingTemplate']
        }], errorTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElementDynamicErrorTemplate']
        }], isModule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElementDynamicModule']
        }], importMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['axLazyElementDynamicImportMap']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/lazy-elements/lazy-elements.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} rootOptions
 * @return {?}
 */
function createLazyElementRootGuard(rootOptions) {
    if (rootOptions) {
        throw new TypeError(`LazyElementsModule.forRoot() called twice. Feature modules should use LazyElementsModule.forFeature() instead.`);
    }
    return 'LazyElementsModule.forRoot() multiple execution guard';
}
class LazyElementsModule {
    /**
     * @param {?} lazyElementsLoaderService
     * @param {?} elementConfigsMultiProvider
     * @param {?} guard
     */
    constructor(lazyElementsLoaderService, elementConfigsMultiProvider, guard) {
        if (elementConfigsMultiProvider && elementConfigsMultiProvider.length) {
            elementConfigsMultiProvider
                .filter((/**
             * @param {?} configs
             * @return {?}
             */
            (configs) => configs.some((/**
             * @param {?} config
             * @return {?}
             */
            (config) => !config.isAdded))))
                .forEach((/**
             * @param {?} configs
             * @return {?}
             */
            (configs) => lazyElementsLoaderService.addConfigs(configs)));
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: LazyElementsModule,
            providers: [
                {
                    provide: LAZY_ELEMENT_CONFIGS,
                    useValue: options && options.elementConfigs ? options.elementConfigs : [],
                    multi: true,
                },
                {
                    provide: LAZY_ELEMENT_ROOT_OPTIONS,
                    useValue: options.rootOptions ? options.rootOptions : {},
                },
                {
                    provide: LAZY_ELEMENT_ROOT_GUARD,
                    useFactory: createLazyElementRootGuard,
                    deps: [[LAZY_ELEMENT_ROOT_OPTIONS, new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]()]],
                },
            ],
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    static forFeature(options) {
        return {
            ngModule: LazyElementsModule,
            providers: [
                {
                    provide: LAZY_ELEMENT_CONFIGS,
                    useValue: options && options.elementConfigs ? options.elementConfigs : [],
                    multi: true,
                },
            ],
        };
    }
}
LazyElementsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LazyElementsModule });
LazyElementsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LazyElementsModule_Factory(t) { return new (t || LazyElementsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LazyElementsLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAZY_ELEMENT_CONFIGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAZY_ELEMENT_ROOT_GUARD, 8)); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
/** @nocollapse */
LazyElementsModule.ctorParameters = () => [
    { type: LazyElementsLoaderService },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAZY_ELEMENT_CONFIGS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAZY_ELEMENT_ROOT_GUARD,] }] }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LazyElementsModule, { declarations: function () { return [LazyElementDirective, LazyElementDynamicDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [LazyElementDirective, LazyElementDynamicDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyElementsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [LazyElementDirective, LazyElementDynamicDirective],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [LazyElementDirective, LazyElementDynamicDirective],
                providers: []
            }]
    }], function () { return [{ type: LazyElementsLoaderService }, { type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LAZY_ELEMENT_CONFIGS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LAZY_ELEMENT_ROOT_GUARD]
            }] }]; }, null); })();
/**
 * @record
 */
function LazyElementModuleOptions() { }
if (false) {}
/**
 * @record
 */
function LazyElementModuleRootOptions() { }
if (false) {}
/**
 * @record
 */
function LazyElementRootOptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-extensions-elements.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-extensions-elements.js.map

/***/ }),

/***/ "mrSG":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "sSZs":
/*!************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/voter.state.ts ***!
  \************************************************************************************/
/*! exports provided: FEATURE_NAME, selectVoterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_NAME", function() { return FEATURE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectVoterState", function() { return selectVoterState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const FEATURE_NAME = 'voter';
const selectVoterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(FEATURE_NAME);


/***/ }),

/***/ "yqcl":
/*!*************************************************************************************!*\
  !*** ./projects/blockchain-voting-system-app/src/app/features/vote/vote.effects.ts ***!
  \*************************************************************************************/
/*! exports provided: VoteEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteEffects", function() { return VoteEffects; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/core.module */ "v0KV");
/* harmony import */ var _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/settings/settings.actions */ "D7a2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");














class VoteEffects {
    constructor(actions$, store, translateService, router, titleService) {
        this.actions$ = actions$;
        this.store = store;
        this.translateService = translateService;
        this.router = router;
        this.titleService = titleService;
        this.setTranslateServiceLanguage = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => () => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_core_core_module__WEBPACK_IMPORTED_MODULE_6__["selectSettingsLanguage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((language) => this.translateService.use(language))), { dispatch: false });
        this.setTitle = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_7__["actionSettingsChangeLanguage"])), this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivationEnd"]))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.titleService.setTitle(this.router.routerState.snapshot.root, this.translateService);
        })), { dispatch: false });
    }
}
VoteEffects.ɵfac = function VoteEffects_Factory(t) { return new (t || VoteEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_core_core_module__WEBPACK_IMPORTED_MODULE_6__["TitleService"])); };
VoteEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: VoteEffects, factory: VoteEffects.ɵfac });


/***/ })

}]);
//# sourceMappingURL=features-vote-vote-module-es2015.js.map