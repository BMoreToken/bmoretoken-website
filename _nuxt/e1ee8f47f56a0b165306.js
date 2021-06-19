(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{332:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.STANDARD_ERROR_MAP=r.SERVER_ERROR_CODE_RANGE=r.RESERVED_ERROR_CODES=r.SERVER_ERROR=r.INTERNAL_ERROR=r.INVALID_PARAMS=r.METHOD_NOT_FOUND=r.INVALID_REQUEST=r.PARSE_ERROR=void 0,r.PARSE_ERROR="PARSE_ERROR",r.INVALID_REQUEST="INVALID_REQUEST",r.METHOD_NOT_FOUND="METHOD_NOT_FOUND",r.INVALID_PARAMS="INVALID_PARAMS",r.INTERNAL_ERROR="INTERNAL_ERROR",r.SERVER_ERROR="SERVER_ERROR",r.RESERVED_ERROR_CODES=[-32700,-32600,-32601,-32602,-32603],r.SERVER_ERROR_CODE_RANGE=[-32e3,-32099],r.STANDARD_ERROR_MAP={[r.PARSE_ERROR]:{code:-32700,message:"Parse error"},[r.INVALID_REQUEST]:{code:-32600,message:"Invalid Request"},[r.METHOD_NOT_FOUND]:{code:-32601,message:"Method not found"},[r.INVALID_PARAMS]:{code:-32602,message:"Invalid params"},[r.INTERNAL_ERROR]:{code:-32603,message:"Internal error"},[r.SERVER_ERROR]:{code:-32e3,message:"Server error"}}},333:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.IEvents=void 0;r.IEvents=class{}},334:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.IJsonRpcProvider=r.IBaseJsonRpcProvider=r.IJsonRpcConnection=void 0;const t=o(333);class n extends t.IEvents{constructor(e){super()}}r.IJsonRpcConnection=n;class R extends t.IEvents{constructor(){super()}}r.IBaseJsonRpcProvider=R;r.IJsonRpcProvider=class extends R{constructor(e){super()}}},565:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.validateJsonRpcError=r.getErrorByCode=r.getError=r.isValidErrorCode=r.isReservedErrorCode=r.isServerErrorCode=void 0;const t=o(332);function n(code){return code<=t.SERVER_ERROR_CODE_RANGE[0]&&code>=t.SERVER_ERROR_CODE_RANGE[1]}function R(code){return t.RESERVED_ERROR_CODES.includes(code)}function c(code){return n(code)||R(code)}function d(code){const e=Object.values(t.STANDARD_ERROR_MAP).find(e=>e.code===code);return e||t.STANDARD_ERROR_MAP[t.INTERNAL_ERROR]}r.isServerErrorCode=n,r.isReservedErrorCode=R,r.isValidErrorCode=c,r.getError=function(e){return Object.keys(t.STANDARD_ERROR_MAP).includes(e)?t.STANDARD_ERROR_MAP[e]:t.STANDARD_ERROR_MAP[t.INTERNAL_ERROR]},r.getErrorByCode=d,r.validateJsonRpcError=function(e){if(void 0===e.error.code)return{valid:!1,error:"Missing code for JSON-RPC error"};if(void 0===e.error.message)return{valid:!1,error:"Missing message for JSON-RPC error"};if(!c(e.error.code))return{valid:!1,error:`Invalid error code for JSON-RPC error code: ${e.error.code}`};if(R(e.error.code)){const r=d(e.error.code);if(r.message!==t.STANDARD_ERROR_MAP[t.INTERNAL_ERROR].message&&e.error.message===r.message)return{valid:!1,error:`Invalid error message for JSON-RPC error code: ${e.error.code}`}}return{valid:!0}}},987:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const t=o(2);t.__exportStar(o(332),r),t.__exportStar(o(565),r),t.__exportStar(o(988),r),t.__exportStar(o(989),r),t.__exportStar(o(990),r),t.__exportStar(o(998),r)},988:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.formatErrorMessage=r.formatJsonRpcError=r.formatJsonRpcResult=r.formatJsonRpcRequest=r.payloadId=void 0;const t=o(565),n=o(332);function R(){return Date.now()*Math.pow(10,3)+Math.floor(Math.random()*Math.pow(10,3))}function c(e){if(void 0===e)return t.getError(n.INTERNAL_ERROR);if("string"==typeof e&&(e=Object.assign(Object.assign({},t.getError(n.SERVER_ERROR)),{message:e})),t.isReservedErrorCode(e.code)&&(e=t.getErrorByCode(e.code)),!t.isServerErrorCode(e.code))throw new Error("Error code is not in server code range");return e}r.payloadId=R,r.formatJsonRpcRequest=function(e,r,o){return{id:o||R(),jsonrpc:"2.0",method:e,params:r}},r.formatJsonRpcResult=function(e,r){return{id:e,jsonrpc:"2.0",result:r}},r.formatJsonRpcError=function(e,r){return{id:e,jsonrpc:"2.0",error:c(r)}},r.formatErrorMessage=c},989:function(e,r,o){"use strict";function t(e){return"*"===e}function n(e){return!!t(e)||!!e.includes("*")&&(2===e.split("*").length&&1===e.split("*").filter(e=>""===e.trim()).length)}Object.defineProperty(r,"__esModule",{value:!0}),r.isValidTrailingWildcardRoute=r.isValidLeadingWildcardRoute=r.isValidWildcardRoute=r.isValidDefaultRoute=r.isValidRoute=void 0,r.isValidRoute=function(e){return e.includes("*")?n(e):!/\W/g.test(e)},r.isValidDefaultRoute=t,r.isValidWildcardRoute=n,r.isValidLeadingWildcardRoute=function(e){return!t(e)&&n(e)&&!e.split("*")[0].trim()},r.isValidTrailingWildcardRoute=function(e){return!t(e)&&n(e)&&!e.split("*")[1].trim()}},990:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),o(2).__exportStar(o(991),r)},991:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const t=o(2);t.__exportStar(o(992),r),t.__exportStar(o(993),r),t.__exportStar(o(333),r),t.__exportStar(o(994),r),t.__exportStar(o(334),r),t.__exportStar(o(995),r),t.__exportStar(o(996),r),t.__exportStar(o(997),r)},992:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.IBlockchainProvider=r.IBlockchainAuthenticator=r.IPendingRequests=void 0;const t=o(333),n=o(334);r.IPendingRequests=class{constructor(e){this.storage=e}};class R extends t.IEvents{constructor(e){super(),this.config=e}}r.IBlockchainAuthenticator=R;class c extends n.IJsonRpcProvider{constructor(e,r){super(e)}}r.IBlockchainProvider=c},993:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0})},994:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.IMultiServiceProvider=void 0;const t=o(334);class n extends t.IBaseJsonRpcProvider{constructor(e){super(),this.config=e}}r.IMultiServiceProvider=n},995:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.IJsonRpcRouter=void 0;r.IJsonRpcRouter=class{constructor(e){this.routes=e}}},996:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0})},997:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.IJsonRpcValidator=void 0;r.IJsonRpcValidator=class{constructor(e){this.schemas=e}}},998:function(e,r,o){"use strict";function t(e){return"id"in e&&"jsonrpc"in e&&"2.0"===e.jsonrpc}Object.defineProperty(r,"__esModule",{value:!0}),r.isJsonRpcValidationInvalid=r.isJsonRpcError=r.isJsonRpcResult=r.isJsonRpcResponse=r.isJsonRpcRequest=r.isJsonRpcPayload=void 0,r.isJsonRpcPayload=t,r.isJsonRpcRequest=function(e){return t(e)&&"method"in e},r.isJsonRpcResponse=function(e){return t(e)&&("result"in e||"error"in e)},r.isJsonRpcResult=function(e){return"result"in e},r.isJsonRpcError=function(e){return"error"in e},r.isJsonRpcValidationInvalid=function(e){return"error"in e&&!1===e.valid}}}]);