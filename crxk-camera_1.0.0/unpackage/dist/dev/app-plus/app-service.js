(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*********************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/main.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 13));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/pages.json ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/camera/camera', function () {return Vue.extend(__webpack_require__(/*! pages/camera/camera.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!*************************************************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/pages/camera/camera.vue?mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _camera_vue_vue_type_template_id_07c59e76_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera.vue?vue&type=template&id=07c59e76&mpType=page */ 3);\n/* harmony import */ var _camera_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera.vue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _camera_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _camera_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _camera_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _camera_vue_vue_type_template_id_07c59e76_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _camera_vue_vue_type_template_id_07c59e76_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _camera_vue_vue_type_template_id_07c59e76_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/camera/camera.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ3FNO0FBQ3JNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2FtZXJhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2M1OWU3NiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2FtZXJhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYW1lcmEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4yLjYuMTEuMjAyMDA0MDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NhbWVyYS9jYW1lcmEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/pages/camera/camera.vue?vue&type=template&id=07c59e76&mpType=page ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_template_id_07c59e76_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./camera.vue?vue&type=template&id=07c59e76&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_template_id_07c59e76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_template_id_07c59e76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_template_id_07c59e76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_template_id_07c59e76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/pages/camera/camera.vue?vue&type=template&id=07c59e76&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "photo"), attrs: { _i: 0 } },
    [
      _c(
        "camera",
        {
          staticClass: _vm._$s(1, "sc", "bg"),
          attrs: { _i: 1 },
          on: { error: _vm.error }
        },
        [
          _c(
            "cover-view",
            { staticClass: _vm._$s(2, "sc", "p-list"), attrs: { _i: 2 } },
            _vm._l(_vm._$s(3, "f", { forItems: _vm.photoArr }), function(
              item,
              index,
              $20,
              $30
            ) {
              return _c(
                "cover-view",
                {
                  key: _vm._$s(3, "f", { forIndex: $20, key: index }),
                  staticClass: _vm._$s("3-" + $30, "sc", "l-item"),
                  attrs: { _i: "3-" + $30 }
                },
                [
                  _c("cover-image", {
                    staticClass: _vm._$s("4-" + $30, "sc", "i-img"),
                    attrs: {
                      src: _vm._$s("4-" + $30, "a-src", item),
                      _i: "4-" + $30
                    }
                  }),
                  _c("cover-image", {
                    staticClass: _vm._$s("5-" + $30, "sc", "i-icon"),
                    attrs: {
                      src: _vm._$s(
                        "5-" + $30,
                        "a-src",
                        __webpack_require__(/*! ../../static/camera/delete.png */ 5)
                      ),
                      _i: "5-" + $30
                    },
                    on: {
                      click: function($event) {
                        return _vm.deletePhoto(index)
                      }
                    }
                  })
                ]
              )
            }),
            0
          )
        ]
      ),
      _c("view", { staticClass: _vm._$s(6, "sc", "btns"), attrs: { _i: 6 } }, [
        _c(
          "view",
          {
            staticClass: _vm._$s(7, "sc", "close"),
            attrs: { _i: 7 },
            on: { click: _vm.back }
          },
          [
            _c("image", {
              attrs: {
                src: _vm._$s(
                  8,
                  "a-src",
                  __webpack_require__(/*! ../../static/camera/back.png */ 6)
                ),
                _i: 8
              }
            })
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(9, "sc", "camera"), attrs: { _i: 9 } },
          [
            _c("image", {
              attrs: {
                src: _vm._$s(
                  10,
                  "a-src",
                  __webpack_require__(/*! ../../static/camera/camera.png */ 7)
                ),
                _i: 10
              },
              on: { click: _vm.takePhoto }
            }),
            _c("view", {
              staticClass: _vm._$s(11, "sc", "upload"),
              attrs: { _i: 11 }
            }),
            _c("view", {
              staticClass: _vm._$s(12, "sc", "blank"),
              attrs: { _i: 12 }
            })
          ]
        ),
        _c("view", {
          staticClass: _vm._$s(13, "sc", "album"),
          attrs: { _i: 13 },
          on: { click: _vm.uploadFoodImg }
        }),
        _c(
          "view",
          {
            staticClass: _vm._$s(14, "sc", "finished"),
            attrs: { _i: 14 },
            on: { click: _vm.finish }
          },
          [
            _c("image", {
              attrs: {
                src: _vm._$s(
                  15,
                  "a-src",
                  __webpack_require__(/*! ../../static/camera/finish.png */ 8)
                ),
                _i: 15
              }
            })
          ]
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**************************************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/static/camera/delete.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/camera/delete.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9jYW1lcmEvZGVsZXRlLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!************************************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/static/camera/back.png ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/camera/back.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9jYW1lcmEvYmFjay5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**************************************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/static/camera/camera.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/camera/camera.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9jYW1lcmEvY2FtZXJhLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**************************************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/static/camera/finish.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/camera/finish.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9jYW1lcmEvZmluaXNoLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/pages/camera/camera.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./camera.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony import */ var _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_camera_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFyQixDQUFnQixtc0JBQUcsRUFBQyIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi42LjExLjIwMjAwNDA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi42LjExLjIwMjAwNDA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi42LjExLjIwMjAwNDA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNi4xMS4yMDIwMDQwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhbWVyYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi42LjExLjIwMjAwNDA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi42LjExLjIwMjAwNDA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi42LjExLjIwMjAwNDA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNi4xMS4yMDIwMDQwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhbWVyYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/pages/camera/camera.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar that = null;\nvar camera = null;var _default =\n{\n  data: function data() {\n    return {\n      photoArr: [],\n      photoArrCapacity: 6 };\n\n  },\n  onLoad: function onLoad(parameters) {\n    that = this;\n    uni.showLoading({\n      mask: true,\n      title: '相机加载中……' });\n\n  },\n  onShow: function onShow() {},\n  onReady: function onReady() {\n    camera = uni.createCameraContext();\n    // 等待相机加载，处理白屏\n    setTimeout(function () {\n      uni.hideLoading();\n    }, 1000);\n  },\n  methods: {\n    uploadImg: function uploadImg(filePath) {\n      uni.showLoading({\n        mask: true,\n        title: '正在上传' });\n\n      var header = {\n        'Content-Type': 'application/json;charset=UTF-8',\n        token: uni.getStorageSync('token') };\n\n\n      return new Promise(function (resolve, reject) {\n        uni.uploadFile({\n          url: '后台图片上传API地址',\n          filePath: filePath,\n          header: header,\n          name: 'file',\n          success: function success(res) {\n            uni.hideLoading();\n            resolve(JSON.parse(res.data));\n          },\n          fail: function fail(err) {\n            reject(err);\n          } });\n\n      });\n    },\n    tips: function tips(title) {\n      uni.showToast({\n        icon: 'none',\n        title: title });\n\n    },\n    finish: function finish() {\n      if (that.photoArr.length < 1) {\n        return 0;\n      }\n      uni.navigateTo({\n        url: '自定义跳转地址?photoArr=' + encodeURIComponent(JSON.stringify(that.photoArr)) });\n\n    },\n    // 拍照\n    takePhoto: function takePhoto() {\n      camera.takePhoto({\n        success: function success(res) {\n          if (that.photoArr.length < that.photoArrCapacity) {\n            __f__(\"log\", ' ==>', res, \" at pages/camera/camera.vue:97\");\n            // 正式环境下调用此方法上传图片\n            // that.uploadImg(res.tempImagePath).then(result => {\n            // \tthat.photoArr.push(result.data);\n            // });\n            that.photoArr.push(res.tempImagePath);\n          } else {\n            that.tips('超出限制~');\n          }\n        },\n        fail: function fail(res) {\n          __f__(\"log\", 'fail ==>', res, \" at pages/camera/camera.vue:108\");\n          that.tips('拍照出现故障，请重试~');\n        } });\n\n    },\n    deletePhoto: function deletePhoto(index) {\n      that.photoArr.splice(index, 1);\n    },\n    back: function back() {\n      uni.navigateBack({\n        delta: 0 });\n\n    },\n    // 相册上传\n    uploadFoodImg: function uploadFoodImg() {\n      if (that.photoArr.length > that.photoArrCapacity) {\n        that.tips('超出限制咯~');\n        return 0;\n      }\n      uni.chooseImage({\n        count: that.photoArrCapacity - that.photoArr.length,\n        success: function success(res) {\n          __f__(\"log\", 'res ==>', res, \" at pages/camera/camera.vue:130\");\n          res.tempFilePaths.forEach(function (item) {\n            // 正式环境下调用此方法上传图片\n            // that.uploadImg(item).then(result => {\n            // \tthat.photoArr.push(result.data);\n            // });\n            that.photoArr.push(item);\n          });\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 11)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2FtZXJhL2NhbWVyYS52dWUiXSwibmFtZXMiOlsidGhhdCIsImNhbWVyYSIsImRhdGEiLCJwaG90b0FyciIsInBob3RvQXJyQ2FwYWNpdHkiLCJvbkxvYWQiLCJwYXJhbWV0ZXJzIiwidW5pIiwic2hvd0xvYWRpbmciLCJtYXNrIiwidGl0bGUiLCJvblNob3ciLCJvblJlYWR5IiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInNldFRpbWVvdXQiLCJoaWRlTG9hZGluZyIsIm1ldGhvZHMiLCJ1cGxvYWRJbWciLCJmaWxlUGF0aCIsImhlYWRlciIsInRva2VuIiwiZ2V0U3RvcmFnZVN5bmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVwbG9hZEZpbGUiLCJ1cmwiLCJuYW1lIiwic3VjY2VzcyIsInJlcyIsIkpTT04iLCJwYXJzZSIsImZhaWwiLCJlcnIiLCJ0aXBzIiwic2hvd1RvYXN0IiwiaWNvbiIsImZpbmlzaCIsImxlbmd0aCIsIm5hdmlnYXRlVG8iLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnkiLCJ0YWtlUGhvdG8iLCJwdXNoIiwidGVtcEltYWdlUGF0aCIsImRlbGV0ZVBob3RvIiwiaW5kZXgiLCJzcGxpY2UiLCJiYWNrIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJ1cGxvYWRGb29kSW1nIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInRlbXBGaWxlUGF0aHMiLCJmb3JFYWNoIiwiaXRlbSJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLElBQUksR0FBRyxJQUFYO0FBQ0EsSUFBSUMsTUFBTSxHQUFHLElBQWIsQztBQUNlO0FBQ2RDLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ05DLGNBQVEsRUFBRSxFQURKO0FBRU5DLHNCQUFnQixFQUFFLENBRlosRUFBUDs7QUFJQSxHQU5hO0FBT2RDLFFBUGMsa0JBT1BDLFVBUE8sRUFPSztBQUNsQk4sUUFBSSxHQUFHLElBQVA7QUFDQU8sT0FBRyxDQUFDQyxXQUFKLENBQWdCO0FBQ2ZDLFVBQUksRUFBRSxJQURTO0FBRWZDLFdBQUssRUFBRSxTQUZRLEVBQWhCOztBQUlBLEdBYmE7QUFjZEMsUUFkYyxvQkFjTCxDQUFFLENBZEc7QUFlZEMsU0FmYyxxQkFlSjtBQUNUWCxVQUFNLEdBQUdNLEdBQUcsQ0FBQ00sbUJBQUosRUFBVDtBQUNBO0FBQ0FDLGNBQVUsQ0FBQyxZQUFNO0FBQ2hCUCxTQUFHLENBQUNRLFdBQUo7QUFDQSxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0EsR0FyQmE7QUFzQmRDLFNBQU8sRUFBRTtBQUNSQyxhQURRLHFCQUNFQyxRQURGLEVBQ1k7QUFDbkJYLFNBQUcsQ0FBQ0MsV0FBSixDQUFnQjtBQUNmQyxZQUFJLEVBQUUsSUFEUztBQUVmQyxhQUFLLEVBQUUsTUFGUSxFQUFoQjs7QUFJQSxVQUFNUyxNQUFNLEdBQUc7QUFDZCx3QkFBZ0IsZ0NBREY7QUFFZEMsYUFBSyxFQUFFYixHQUFHLENBQUNjLGNBQUosQ0FBbUIsT0FBbkIsQ0FGTyxFQUFmOzs7QUFLQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkNqQixXQUFHLENBQUNrQixVQUFKLENBQWU7QUFDZEMsYUFBRyxFQUFFLGFBRFM7QUFFZFIsa0JBQVEsRUFBUkEsUUFGYztBQUdkQyxnQkFBTSxFQUFOQSxNQUhjO0FBSWRRLGNBQUksRUFBRSxNQUpRO0FBS2RDLGlCQUxjLG1CQUtOQyxHQUxNLEVBS0Q7QUFDWnRCLGVBQUcsQ0FBQ1EsV0FBSjtBQUNBUSxtQkFBTyxDQUFDTyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsR0FBRyxDQUFDM0IsSUFBZixDQUFELENBQVA7QUFDQSxXQVJhO0FBU2Q4QixjQVRjLGdCQVNUQyxHQVRTLEVBU0o7QUFDVFQsa0JBQU0sQ0FBQ1MsR0FBRCxDQUFOO0FBQ0EsV0FYYSxFQUFmOztBQWFBLE9BZE0sQ0FBUDtBQWVBLEtBMUJPO0FBMkJSQyxRQTNCUSxnQkEyQkh4QixLQTNCRyxFQTJCSTtBQUNYSCxTQUFHLENBQUM0QixTQUFKLENBQWM7QUFDYkMsWUFBSSxFQUFFLE1BRE87QUFFYjFCLGFBQUssRUFBTEEsS0FGYSxFQUFkOztBQUlBLEtBaENPO0FBaUNSMkIsVUFqQ1Esb0JBaUNDO0FBQ1IsVUFBSXJDLElBQUksQ0FBQ0csUUFBTCxDQUFjbUMsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUM3QixlQUFPLENBQVA7QUFDQTtBQUNEL0IsU0FBRyxDQUFDZ0MsVUFBSixDQUFlO0FBQ2RiLFdBQUcsRUFBRSxzQkFBc0JjLGtCQUFrQixDQUFDVixJQUFJLENBQUNXLFNBQUwsQ0FBZXpDLElBQUksQ0FBQ0csUUFBcEIsQ0FBRCxDQUQvQixFQUFmOztBQUdBLEtBeENPO0FBeUNSO0FBQ0F1QyxhQTFDUSx1QkEwQ0k7QUFDWHpDLFlBQU0sQ0FBQ3lDLFNBQVAsQ0FBaUI7QUFDaEJkLGVBRGdCLG1CQUNSQyxHQURRLEVBQ0g7QUFDWixjQUFJN0IsSUFBSSxDQUFDRyxRQUFMLENBQWNtQyxNQUFkLEdBQXVCdEMsSUFBSSxDQUFDSSxnQkFBaEMsRUFBa0Q7QUFDakQseUJBQVksTUFBWixFQUFvQnlCLEdBQXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTdCLGdCQUFJLENBQUNHLFFBQUwsQ0FBY3dDLElBQWQsQ0FBbUJkLEdBQUcsQ0FBQ2UsYUFBdkI7QUFDQSxXQVBELE1BT087QUFDTjVDLGdCQUFJLENBQUNrQyxJQUFMLENBQVUsT0FBVjtBQUNBO0FBQ0QsU0FaZTtBQWFoQkYsWUFiZ0IsZ0JBYVhILEdBYlcsRUFhTjtBQUNULHVCQUFZLFVBQVosRUFBd0JBLEdBQXhCO0FBQ0E3QixjQUFJLENBQUNrQyxJQUFMLENBQVUsYUFBVjtBQUNBLFNBaEJlLEVBQWpCOztBQWtCQSxLQTdETztBQThEUlcsZUE5RFEsdUJBOERJQyxLQTlESixFQThEVztBQUNsQjlDLFVBQUksQ0FBQ0csUUFBTCxDQUFjNEMsTUFBZCxDQUFxQkQsS0FBckIsRUFBNEIsQ0FBNUI7QUFDQSxLQWhFTztBQWlFUkUsUUFqRVEsa0JBaUVEO0FBQ056QyxTQUFHLENBQUMwQyxZQUFKLENBQWlCO0FBQ2hCQyxhQUFLLEVBQUUsQ0FEUyxFQUFqQjs7QUFHQSxLQXJFTztBQXNFUjtBQUNBQyxpQkF2RVEsMkJBdUVRO0FBQ2YsVUFBSW5ELElBQUksQ0FBQ0csUUFBTCxDQUFjbUMsTUFBZCxHQUF1QnRDLElBQUksQ0FBQ0ksZ0JBQWhDLEVBQWtEO0FBQ2pESixZQUFJLENBQUNrQyxJQUFMLENBQVUsUUFBVjtBQUNBLGVBQU8sQ0FBUDtBQUNBO0FBQ0QzQixTQUFHLENBQUM2QyxXQUFKLENBQWdCO0FBQ2ZDLGFBQUssRUFBRXJELElBQUksQ0FBQ0ksZ0JBQUwsR0FBd0JKLElBQUksQ0FBQ0csUUFBTCxDQUFjbUMsTUFEOUI7QUFFZlYsZUFGZSxtQkFFUEMsR0FGTyxFQUVGO0FBQ1osdUJBQVksU0FBWixFQUF1QkEsR0FBdkI7QUFDQUEsYUFBRyxDQUFDeUIsYUFBSixDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQUMsSUFBSSxFQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0F4RCxnQkFBSSxDQUFDRyxRQUFMLENBQWN3QyxJQUFkLENBQW1CYSxJQUFuQjtBQUNBLFdBTkQ7QUFPQSxTQVhjLEVBQWhCOztBQWFBLEtBekZPLEVBdEJLLEUiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG5cclxudmFyIHRoYXQgPSBudWxsO1xyXG52YXIgY2FtZXJhID0gbnVsbDtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwaG90b0FycjogW10sXHJcblx0XHRcdHBob3RvQXJyQ2FwYWNpdHk6IDZcclxuXHRcdH07XHJcblx0fSxcclxuXHRvbkxvYWQocGFyYW1ldGVycykge1xyXG5cdFx0dGhhdCA9IHRoaXM7XHJcblx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHR0aXRsZTogJ+ebuOacuuWKoOi9veS4reKApuKApidcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0b25TaG93KCkge30sXHJcblx0b25SZWFkeSgpIHtcclxuXHRcdGNhbWVyYSA9IHVuaS5jcmVhdGVDYW1lcmFDb250ZXh0KCk7XHJcblx0XHQvLyDnrYnlvoXnm7jmnLrliqDovb3vvIzlpITnkIbnmb3lsY9cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdH0sIDEwMDApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0dXBsb2FkSW1nKGZpbGVQYXRoKSB7XHJcblx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHR0aXRsZTogJ+ato+WcqOS4iuS8oCdcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXHJcblx0XHRcdFx0dG9rZW46IHVuaS5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHR1cmw6ICflkI7lj7Dlm77niYfkuIrkvKBBUEnlnLDlnYAnLFxyXG5cdFx0XHRcdFx0ZmlsZVBhdGgsXHJcblx0XHRcdFx0XHRoZWFkZXIsXHJcblx0XHRcdFx0XHRuYW1lOiAnZmlsZScsXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShKU09OLnBhcnNlKHJlcy5kYXRhKSk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbChlcnIpIHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdHRpcHModGl0bGUpIHtcclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdHRpdGxlXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGZpbmlzaCgpIHtcclxuXHRcdFx0aWYgKHRoYXQucGhvdG9BcnIubGVuZ3RoIDwgMSkge1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICfoh6rlrprkuYnot7PovazlnLDlnYA/cGhvdG9BcnI9JyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0aGF0LnBob3RvQXJyKSlcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5ouN54WnXHJcblx0XHR0YWtlUGhvdG8oKSB7XHJcblx0XHRcdGNhbWVyYS50YWtlUGhvdG8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRpZiAodGhhdC5waG90b0Fyci5sZW5ndGggPCB0aGF0LnBob3RvQXJyQ2FwYWNpdHkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJyA9PT4nLCByZXMpO1xyXG5cdFx0XHRcdFx0XHQvLyDmraPlvI/njq/looPkuIvosIPnlKjmraTmlrnms5XkuIrkvKDlm77niYdcclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC51cGxvYWRJbWcocmVzLnRlbXBJbWFnZVBhdGgpLnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gXHR0aGF0LnBob3RvQXJyLnB1c2gocmVzdWx0LmRhdGEpO1xyXG5cdFx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdFx0dGhhdC5waG90b0Fyci5wdXNoKHJlcy50ZW1wSW1hZ2VQYXRoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoYXQudGlwcygn6LaF5Ye66ZmQ5Yi2ficpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbChyZXMpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsID09PicsIHJlcyk7XHJcblx0XHRcdFx0XHR0aGF0LnRpcHMoJ+aLjeeFp+WHuueOsOaVhemanO+8jOivt+mHjeivlX4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGRlbGV0ZVBob3RvKGluZGV4KSB7XHJcblx0XHRcdHRoYXQucGhvdG9BcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdH0sXHJcblx0XHRiYWNrKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRkZWx0YTogMFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvLyDnm7jlhozkuIrkvKBcclxuXHRcdHVwbG9hZEZvb2RJbWcoKSB7XHJcblx0XHRcdGlmICh0aGF0LnBob3RvQXJyLmxlbmd0aCA+IHRoYXQucGhvdG9BcnJDYXBhY2l0eSkge1xyXG5cdFx0XHRcdHRoYXQudGlwcygn6LaF5Ye66ZmQ5Yi25ZKvficpO1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVuaS5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdFx0Y291bnQ6IHRoYXQucGhvdG9BcnJDYXBhY2l0eSAtIHRoYXQucGhvdG9BcnIubGVuZ3RoLFxyXG5cdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygncmVzID09PicsIHJlcyk7XHJcblx0XHRcdFx0XHRyZXMudGVtcEZpbGVQYXRocy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyDmraPlvI/njq/looPkuIvosIPnlKjmraTmlrnms5XkuIrkvKDlm77niYdcclxuXHRcdFx0XHRcdFx0Ly8gdGhhdC51cGxvYWRJbWcoaXRlbSkudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBcdHRoYXQucGhvdG9BcnIucHVzaChyZXN1bHQuZGF0YSk7XHJcblx0XHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnBob3RvQXJyLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 14 */
/*!*********************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/App.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDK0w7QUFDL0wsZ0JBQWdCLDRNQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNi4xMS4yMDIwMDQwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************************!*\
  !*** C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../HBuilderX.2.6.11.20200409.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_2_6_11_20200409_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStvQixDQUFnQixxckJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNi4xMS4yMDIwMDQwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNi4xMS4yMDIwMDQwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNi4xMS4yMDIwMDQwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL0hCdWlsZGVyWC4yLjYuMTEuMjAyMDA0MDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0hCdWlsZGVyWC4yLjYuMTEuMjAyMDA0MDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL0hCdWlsZGVyWC4yLjYuMTEuMjAyMDA0MDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL0hCdWlsZGVyWC4yLjYuMTEuMjAyMDA0MDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi9IQnVpbGRlclguMi42LjExLjIwMjAwNDA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/fanqi/Documents/GitHub/SLL/crxk-camera_1.0.0/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 11)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ })
],[[0,"app-config"]]]);