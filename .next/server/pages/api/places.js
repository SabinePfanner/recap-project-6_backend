"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/places";
exports.ids = ["pages/api/places"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/connect.js":
/*!***********************!*\
  !*** ./db/connect.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9jb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxJQUFJRjtBQUVoQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUNSO0FBRUo7QUFFQTs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT047QUFFcEIsSUFBSSxDQUFDSyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9OLFdBQVc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLE1BQU07UUFDZixPQUFPRixPQUFPRTtJQUNoQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csU0FBUztRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQjtRQUNsQjtRQUVBTixPQUFPRyxVQUFVUix1REFBZ0JZLENBQUNYLGFBQWFTLE1BQU1HLEtBQUssQ0FBQ2I7WUFDekQsT0FBT0E7UUFDVDtJQUNGO0lBRUEsSUFBSTtRQUNGSyxPQUFPRSxPQUFPLE1BQU1GLE9BQU9HO0lBQzdCLEVBQUUsT0FBT00sR0FBRztRQUNWVCxPQUFPRyxVQUFVO1FBQ2pCLE1BQU1NO0lBQ1I7SUFFQSxPQUFPVCxPQUFPRTtBQUNoQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjYXAtcHJvamVjdC02X3RvdXJpby1hcHAvLi9kYi9jb25uZWN0LmpzP2M3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsXCJcbiAgKTtcbn1cblxuLyoqXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWFsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXG4gKi9cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2U7XG4gICAgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/connect.js\n");

/***/ }),

/***/ "(api)/./db/models/Place.js":
/*!****************************!*\
  !*** ./db/models/Place.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Place */ \"(api)/./db/models/Place.js\");\n\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst placeSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    image: {\n        type: String,\n        required: true\n    },\n    location: {\n        type: String,\n        required: true\n    },\n    mapURL: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    }\n});\nconst Place = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Place || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Place\", placeSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Place);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUGxhY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNmO0FBQ2pCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdELGlEQUFRQTtBQUUzQixNQUFNRSxjQUFjLElBQUlELE9BQU87SUFDN0JFLE1BQU07UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3JDQyxPQUFPO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0UsVUFBVTtRQUFFSixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNHLFFBQVE7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3ZDSSxhQUFhO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztBQUM5QztBQUVBLE1BQU1LLFFBQVFYLHdEQUFlWSxDQUFDRCxTQUFTWCxxREFBY2EsQ0FBQyxTQUFTWDtBQUUvRCxpRUFBZVMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2FwLXByb2plY3QtNl90b3VyaW8tYXBwLy4vZGIvbW9kZWxzL1BsYWNlLmpzP2ZjNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IFwiLi9QbGFjZVwiO1xuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xuXG5jb25zdCBwbGFjZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgaW1hZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBsb2NhdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIG1hcFVSTDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuXG5jb25zdCBQbGFjZSA9IG1vbmdvb3NlLm1vZGVscy5QbGFjZSB8fCBtb25nb29zZS5tb2RlbChcIlBsYWNlXCIsIHBsYWNlU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhY2U7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJwbGFjZVNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJpbWFnZSIsImxvY2F0aW9uIiwibWFwVVJMIiwiZGVzY3JpcHRpb24iLCJQbGFjZSIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/models/Place.js\n");

/***/ }),

/***/ "(api)/./pages/api/places/index.js":
/*!***********************************!*\
  !*** ./pages/api/places/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/connect */ \"(api)/./db/connect.js\");\n/* harmony import */ var _db_models_Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/models/Place */ \"(api)/./db/models/Place.js\");\n\n\nasync function handler(request, response) {\n    await (0,_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (request.method === \"GET\") {\n        const place = await _db_models_Place__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        return response.status(200).json(place);\n    }\n    if (request.method === \"POST\") {\n        try {\n            const placeData = request.body;\n            await _db_models_Place__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(placeData);\n            response.status(201).json({\n                message: \"Place successfully created\"\n            });\n        } catch (error) {\n            console.log(error);\n            response.status(400).json({\n                error: error.message\n            });\n        }\n    } else {\n        return response.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxhY2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUNDO0FBRXZCLGVBQWVFLFFBQVFDLE9BQU8sRUFBRUMsUUFBUTtJQUNyRCxNQUFNSix1REFBU0E7SUFDZixJQUFJRyxRQUFRRSxXQUFXLE9BQU87UUFDNUIsTUFBTUMsUUFBUSxNQUFNTCw2REFBVU07UUFDOUIsT0FBT0gsU0FBU0ksT0FBTyxLQUFLQyxLQUFLSDtJQUNuQztJQUNBLElBQUlILFFBQVFFLFdBQVcsUUFBUTtRQUM3QixJQUFJO1lBQ0YsTUFBTUssWUFBWVAsUUFBUVE7WUFDMUIsTUFBTVYsK0RBQVlXLENBQUNGO1lBQ25CTixTQUFTSSxPQUFPLEtBQUtDLEtBQUs7Z0JBQUVJLFNBQVM7WUFBNkI7UUFDcEUsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFDLElBQUlGO1lBQ1pWLFNBQVNJLE9BQU8sS0FBS0MsS0FBSztnQkFBRUssT0FBT0EsTUFBTUQ7WUFBUTtRQUNuRDtJQUNGLE9BQU87UUFDTCxPQUFPVCxTQUFTSSxPQUFPLEtBQUtDLEtBQUs7WUFBRUksU0FBUztRQUFxQjtJQUNuRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjYXAtcHJvamVjdC02X3RvdXJpby1hcHAvLi9wYWdlcy9hcGkvcGxhY2VzL2luZGV4LmpzPzgwNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9kYi9jb25uZWN0XCI7XG5pbXBvcnQgUGxhY2UgZnJvbSBcIkAvZGIvbW9kZWxzL1BsYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IHBsYWNlID0gYXdhaXQgUGxhY2UuZmluZCgpO1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHBsYWNlKTtcbiAgfVxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBsYWNlRGF0YSA9IHJlcXVlc3QuYm9keTtcbiAgICAgIGF3YWl0IFBsYWNlLmNyZWF0ZShwbGFjZURhdGEpO1xuICAgICAgcmVzcG9uc2Uuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiUGxhY2Ugc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmVzcG9uc2Uuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJQbGFjZSIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJtZXRob2QiLCJwbGFjZSIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwicGxhY2VEYXRhIiwiYm9keSIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/places/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/places/index.js"));
module.exports = __webpack_exports__;

})();