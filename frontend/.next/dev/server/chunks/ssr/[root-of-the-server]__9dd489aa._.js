module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/Headers.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderWrapper",
    ()=>HeaderWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const HeaderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  > div {
    flex: 1;
    text-align: center;
  }

  > h1 {
    font-size: 1.875rem;
    font-weight: 300;
    margin: 0 0 0.5rem 0;
    color: ${({ $darkmode })=>$darkmode ? "white" : "#1f2937"};
  }

  > p {
    font-size: 0.875rem;
    color: ${({ $darkmode })=>$darkmode ? "#9ca3af" : "#4b5563"};
    margin: 0;
  }

  > button {
    padding: 0.75rem;
    border-radius: 9999px;
    transition: background-color 300ms;
    background-color: ${({ $darkmode })=>$darkmode ? "#374151" : "white"};
    color: ${({ $darkmode })=>$darkmode ? "#facc15" : "#374151"};
    border: none;
    cursor: pointer;
    box-shadow: ${({ $darkmode })=>$darkmode ? "none" : "0 1px 2px rgba(0, 0, 0, 0.05)"};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
}),
"[project]/projects/weather-dashboard/frontend/app/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Headers$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/Headers.styles.ts [app-ssr] (ecmascript)");
;
;
;
const Header = ({ darkMode, setDarkMode })=>{
    const toggleDarkMode = ()=>{
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", JSON.stringify(newMode));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Headers$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderWrapper"], {
            $darkmode: darkMode,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Weather"
                        }, void 0, false, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Header.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Search for a city to view current conditions"
                        }, void 0, false, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Header.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/Header.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleDarkMode,
                    "aria-label": "Toggle dark mode",
                    children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSun"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/Header.tsx",
                        lineNumber: 19,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMoon"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/Header.tsx",
                        lineNumber: 19,
                        columnNumber: 45
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/Header.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Header.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/projects/weather-dashboard/frontend/app/services/weatherService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getForecastData",
    ()=>getForecastData,
    "getLocationSuggestions",
    ()=>getLocationSuggestions,
    "getWeatherData",
    ()=>getWeatherData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const baseUrl = ("TURBOPACK compile-time value", "http://localhost:3000");
const getLocationSuggestions = async (query)=>{
    const params = {
        q: query
    };
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${baseUrl}/api/locations/autocomplete`, {
        params
    });
    return response.data;
};
const getWeatherData = async (location)=>{
    const params = {
        q: location.name
    };
    const weather = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${baseUrl}/api/weather/current`, {
        params
    });
    return weather.data;
};
const getForecastData = async (location)=>{
    const forecastParams = {
        q: location.name,
        days: 5
    };
    const forecastResult = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${baseUrl}/api/weather/forecast`, {
        params: forecastParams
    });
    return forecastResult.data.forecast;
};
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/Search.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoSuggestion",
    ()=>AutoSuggestion,
    "SearchAutoSuggestionWrapper",
    ()=>SearchAutoSuggestionWrapper,
    "SearchWrapper",
    ()=>SearchWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const SearchAutoSuggestionWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  postion: relative;
  margin-bottom: 2rem;
`;
const SearchWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  position: relative;

  > svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ $darkmode })=>$darkmode ? "#6b7280" : "#9ca3af"};
  }

  > input {
    width: 100%;
    padding-left: 3rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    border: ${({ $darkmode })=>$darkmode ? "1px solid #374151" : "1px solid #e5e7eb"};
    outline: none;
    background-color: ${({ $darkmode })=>$darkmode ? "#1f2937" : "white"};
    color: ${({ $darkmode })=>$darkmode ? "white" : "#1f2937"};
    box-sizing: border-box;
  }
`;
const AutoSuggestion = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  position: absolute;
  z-index: 10;
  width: 100%;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: ${({ $darkmode })=>$darkmode ? "1px solid #374151" : "1px solid #e5e7eb"};
  overflow: hidden;
  background-color: ${({ $darkmode })=>$darkmode ? "#1f2937" : "white"};

  > button {
    width: 100%;
    padding: 0.75rem 1rem;
    text-align: left;
    transition: background-color 300ms;
    border: none;
    border-bottom: ${({ $darkmode })=>$darkmode ? "1px solid #374151" : "1px solid #f3f4f6"};
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background-color: ${({ $darkmode })=>$darkmode ? "#374151" : "#f3f4f6"};
    }
  }

  > svg {
    width: 1rem;
    height: 1rem;
    color: ${({ $darkmode })=>$darkmode ? "#6b7280" : "#9ca3af"};
  }

  > span {
    color: ${({ $darkmode })=>$darkmode ? "#e5e7eb" : "#1f2937"};
  }
`;
}),
"[project]/projects/weather-dashboard/frontend/app/components/Search.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$services$2f$weatherService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/services/weatherService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Search$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/Search.styles.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const Search = (props)=>{
    const { darkMode, searchQuery, setSearchQuery, handleSearch } = props;
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleInputChange = async (e)=>{
        const value = e.target.value;
        setSearchQuery(value);
        if (value.length > 2) {
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$services$2f$weatherService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocationSuggestions"])(searchQuery);
                setSuggestions(result);
                setShowSuggestions(true);
            } catch (err) {
                console.log(err);
            }
        } else {
            setShowSuggestions(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Search$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchAutoSuggestionWrapper"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Search$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchWrapper"], {
                    $darkmode: darkMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosSearch"], {}, void 0, false, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Search.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: searchQuery,
                            onChange: handleInputChange,
                            placeholder: "Search for a location..."
                        }, void 0, false, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Search.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/Search.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                showSuggestions && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Search$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoSuggestion"], {
                    $darkmode: darkMode,
                    children: suggestions.map((sug)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSearchQuery(sug.name);
                                handleSearch(sug);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMapPin"], {}, void 0, false, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/Search.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: sug.name
                                }, void 0, false, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/Search.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, sug.id, true, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Search.tsx",
                            lineNumber: 49,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/Search.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Search.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Search;
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/RecentSearches.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wrapper",
    ()=>Wrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  margin-bottom: 2rem;

  > h3 {
    font-size: 0.875rem; /* 14px */
    margin: 0 0 0.75rem 0;
    color: ${({ $darkmode })=>$darkmode ? "#9ca3af" : "#4b5563"};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    > button {
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      transition: background-color 300ms;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      background-color: ${({ $darkmode })=>$darkmode ? "#1f2937" : "white"};
      color: ${({ $darkmode })=>$darkmode ? "#d1d5db" : "#374151"};
      border: none;
      cursor: pointer;
    }
  }
`;
}),
"[project]/projects/weather-dashboard/frontend/app/components/RecentSearches.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$RecentSearches$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/RecentSearches.styles.ts [app-ssr] (ecmascript)");
;
;
const RecentSearches = ({ darkMode, recentSearches, handleSearch })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$RecentSearches$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Wrapper"], {
            $darkmode: darkMode,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Recent Searches"
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/RecentSearches.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: recentSearches.map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleSearch(loc),
                            children: loc.name
                        }, idx, false, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/components/RecentSearches.tsx",
                            lineNumber: 10,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/RecentSearches.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/components/RecentSearches.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = RecentSearches;
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/Loader.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoaderWrapper",
    ()=>LoaderWrapper,
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const LoaderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  text-align: center;
  padding: 3rem 0;
`;
const spin = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const Spinner = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 4px solid #60a5fa;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
}),
"[project]/projects/weather-dashboard/frontend/app/components/Loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Loader$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/Loader.styles.ts [app-ssr] (ecmascript)");
;
;
const Loader = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Loader$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoaderWrapper"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Loader$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                fileName: "[project]/projects/weather-dashboard/frontend/app/components/Loader.tsx",
                lineNumber: 6,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Loader.tsx",
            lineNumber: 5,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Loader;
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/Error.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBox",
    ()=>ErrorBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const ErrorBox = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  background-color: ${({ $darkMode })=>$darkMode ? "rgba(127, 29, 29, 0.3)" : "#fef2f2"};
  border: ${({ $darkMode })=>$darkMode ? "1px solid #991b1b" : "1px solid #e5e7eb"};
  color: ${({ $darkMode })=>$darkMode ? "#fca5a5" : "#b91c1c"};
`;
}),
"[project]/projects/weather-dashboard/frontend/app/components/Error.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Error$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/Error.styles.ts [app-ssr] (ecmascript)");
;
;
const Error = ({ error, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Error$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBox"], {
            $darkMode: darkMode,
            children: error
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Error.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Error;
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/common.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageWrapper",
    ()=>PageWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const PageWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  min-height: 100vh;
  transition: background-color 300ms;
  padding: 2rem;
  font-family: sans-serif;
  background: ${({ $darkMode })=>$darkMode ? "linear-gradient(to bottom right, #111827, #1f2937)" : "linear-gradient(to bottom right, #eff6ff, #dbeafe)"};

  > div {
    max-width: 56rem;
    margin: 0 auto;
  }
`;
}),
"[project]/projects/weather-dashboard/frontend/app/utils/weatherIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWeatherIcon",
    ()=>getWeatherIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/bs/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/ri/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/ci/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const getWeatherIcon = (condition)=>{
    const code = condition?.toLowerCase() || "";
    if (code.includes("rain")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsCloudRain"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/projects/weather-dashboard/frontend/app/utils/weatherIcons.tsx",
        lineNumber: 8,
        columnNumber: 37
    }, ("TURBOPACK compile-time value", void 0));
    if (code.includes("snow")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsCloudSnow"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/projects/weather-dashboard/frontend/app/utils/weatherIcons.tsx",
        lineNumber: 9,
        columnNumber: 37
    }, ("TURBOPACK compile-time value", void 0));
    if (code.includes("drizzle")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiDrizzleLine"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/projects/weather-dashboard/frontend/app/utils/weatherIcons.tsx",
        lineNumber: 10,
        columnNumber: 40
    }, ("TURBOPACK compile-time value", void 0));
    if (code.includes("thunder")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineThunderbolt"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/projects/weather-dashboard/frontend/app/utils/weatherIcons.tsx",
        lineNumber: 11,
        columnNumber: 40
    }, ("TURBOPACK compile-time value", void 0));
    if (code.includes("partlycloudy")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiCloud"], {
        size: 26
    }, void 0, false, {
        fileName: "[project]/projects/weather-dashboard/frontend/app/utils/weatherIcons.tsx",
        lineNumber: 12,
        columnNumber: 45
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineSun"], {
        size: 46
    }, void 0, false, {
        fileName: "[project]/projects/weather-dashboard/frontend/app/utils/weatherIcons.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/WeatherCard.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "Condition",
    ()=>Condition,
    "DetailItem",
    ()=>DetailItem,
    "DetailText",
    ()=>DetailText,
    "DetailsGrid",
    ()=>DetailsGrid,
    "FeelsLike",
    ()=>FeelsLike,
    "Header",
    ()=>Header,
    "IconWrapper",
    ()=>IconWrapper,
    "Location",
    ()=>Location,
    "Temp",
    ()=>Temp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 2rem;
  background-color: ${({ darkMode })=>darkMode ? "#1f2937" : "white"};
`;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
const Location = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0 0 0.25rem 0;
  color: ${({ darkMode })=>darkMode ? "white" : "#1f2937"};
`;
const Condition = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-size: 0.875rem;
  margin: 0;
  color: ${({ darkMode })=>darkMode ? "#9ca3af" : "#6b7280"};
`;
const Temp = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 1;
  color: ${({ darkMode })=>darkMode ? "white" : "#1f2937"};
`;
const FeelsLike = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-size: 0.875rem;
  margin: 0.25rem 0 0 0;
  color: ${({ darkMode })=>darkMode ? "#9ca3af" : "#6b7280"};
`;
const DetailsGrid = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
`;
const DetailItem = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
const DetailText = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  p:first-child {
    font-size: 0.75rem;
    margin: 0;
    color: ${({ darkMode })=>darkMode ? "#6b7280" : "#6b7280"};
  }

  p:last-child {
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0;
    color: ${({ darkMode })=>darkMode ? "#e5e7eb" : "#1f2937"};
  }
`;
const IconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ color })=>color};
`;
}),
"[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/ci/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$utils$2f$weatherIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/utils/weatherIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/WeatherCard.styles.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const WeatherCard = ({ darkMode, currentWeather })=>{
    const weatherIconColor = darkMode ? "#60a5fa" : "#3b82f6";
    const detailIconColor = darkMode ? "#6b7280" : "#9ca3af";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Location"], {
                                darkMode: darkMode,
                                children: currentWeather.location.name
                            }, void 0, false, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Condition"], {
                                darkMode: darkMode,
                                children: currentWeather.current.condition.text
                            }, void 0, false, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: weatherIconColor
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$utils$2f$weatherIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeatherIcon"])(currentWeather.current.condition.text)
                    }, void 0, false, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Temp"], {
                        darkMode: darkMode,
                        children: [
                            currentWeather.current.temp_c,
                            "°"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeelsLike"], {
                        darkMode: darkMode,
                        children: [
                            "Feels like ",
                            currentWeather.current.feelslike_c,
                            "°"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailsGrid"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailItem"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconWrapper"], {
                                color: detailIconColor,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWind"], {}, void 0, false, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailText"], {
                                darkMode: darkMode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Wind"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            currentWeather.current.wind_kph,
                                            " km/h"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailItem"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconWrapper"], {
                                color: detailIconColor,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiDroplet"], {}, void 0, false, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailText"], {
                                darkMode: darkMode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Humidity"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            currentWeather.current.humidity,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailItem"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconWrapper"], {
                                color: detailIconColor,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiEye"], {}, void 0, false, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailText"], {
                                darkMode: darkMode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Visibility"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            currentWeather.current.vis_km,
                                            " km"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailItem"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconWrapper"], {
                                color: detailIconColor,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGaugeSimple"], {}, void 0, false, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$WeatherCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailText"], {
                                darkMode: darkMode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Pressure"
                                    }, void 0, false, {
                                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            currentWeather.current.pressure_mb,
                                            " mb"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WeatherCard;
}),
"[project]/projects/weather-dashboard/frontend/app/utils/getDayName.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const getDayName = (dateStr)=>{
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
        weekday: "short"
    });
};
const __TURBOPACK__default__export__ = getDayName;
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/ForecastCard.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "DayName",
    ()=>DayName,
    "ForecastGrid",
    ()=>ForecastGrid,
    "ForecastItem",
    ()=>ForecastItem,
    "MaxTemp",
    ()=>MaxTemp,
    "MinTemp",
    ()=>MinTemp,
    "TempWrapper",
    ()=>TempWrapper,
    "Title",
    ()=>Title,
    "WeatherIconWrapper",
    ()=>WeatherIconWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  background-color: ${({ darkMode })=>darkMode ? "#1f2937" : "white"};
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3`
  font-size: 1.125rem;
  font-weight: 300;
  margin: 0 0 1rem 0;
  color: ${({ darkMode })=>darkMode ? "white" : "#1f2937"};
`;
const ForecastGrid = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;
const ForecastItem = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  text-align: center;
`;
const DayName = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-size: 0.875rem;
  margin: 0 0 0.75rem 0;
  color: ${({ darkMode })=>darkMode ? "#9ca3af" : "#4b5563"};
`;
const WeatherIconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
  color: ${({ darkMode })=>darkMode ? "#60a5fa" : "#3b82f6"};
`;
const TempWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const MaxTemp = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  color: ${({ darkMode })=>darkMode ? "#e5e7eb" : "#1f2937"};
`;
const MinTemp = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-size: 0.75rem;
  margin: 0;
  color: ${({ darkMode })=>darkMode ? "#6b7280" : "#6b7280"};
`;
}),
"[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$utils$2f$getDayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/utils/getDayName.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$utils$2f$weatherIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/utils/weatherIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$ForecastCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/ForecastCard.styles.ts [app-ssr] (ecmascript)");
;
;
;
;
const ForecastCard = ({ darkMode, forecast })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$ForecastCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$ForecastCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
                darkMode: darkMode,
                children: "5-Day Forecast"
            }, void 0, false, {
                fileName: "[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$ForecastCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ForecastGrid"], {
                children: forecast.forecastday.map((day, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$ForecastCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ForecastItem"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$ForecastCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DayName"], {
                                darkMode: darkMode,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$utils$2f$getDayName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(day.date)
                            }, void 0, false, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$ForecastCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeatherIconWrapper"], {
                                darkMode: darkMode,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$utils$2f$weatherIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeatherIcon"])(day.day.condition.text)
                            }, void 0, false, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$ForecastCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TempWrapper"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$ForecastCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaxTemp"], {
                                        darkMode: darkMode,
                                        children: [
                                            day.day.maxtemp_c,
                                            "°"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$ForecastCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MinTemp"], {
                                        darkMode: darkMode,
                                        children: [
                                            day.day.mintemp_c,
                                            "°"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ForecastCard;
}),
"[project]/projects/weather-dashboard/frontend/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/bs/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/ri/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/ci/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/Search.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$RecentSearches$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/RecentSearches.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/Loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Error$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/Error.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$services$2f$weatherService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/services/weatherService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$common$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/common.styles.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$WeatherCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/WeatherCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$ForecastCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/ForecastCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Page = ()=>{
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recentSearches, setRecentSearches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentWeather, setCurrentWeather] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forecast, setForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem("recentSearches");
        if (saved) {
            setRecentSearches(JSON.parse(saved));
        }
        const savedTheme = localStorage.getItem("darkMode");
        if (savedTheme) {
            setDarkMode(JSON.parse(savedTheme));
        }
    }, []);
    const toggleDarkMode = ()=>{
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", JSON.stringify(newMode));
    };
    const getWeatherIcon = (condition)=>{
        const code = condition?.toLowerCase() || "";
        if (code.includes("rain")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsCloudRain"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 224,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
        if (code.includes("snow")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsCloudSnow"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 225,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
        if (code.includes("drizzle")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiDrizzleLine"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 226,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0));
        if (code.includes("thunder")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineThunderbolt"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 227,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0));
        if (code.includes("partlycloudy")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiCloud"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 228,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineSun"], {
            size: 46
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 229,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    };
    const handleInputChange = async (e)=>{
        const value = e.target.value;
        setSearchQuery(value);
        if (value.length > 2) {
            try {
                const baseUrl = ("TURBOPACK compile-time value", "http://localhost:3000");
                const params = {
                    q: searchQuery
                };
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${baseUrl}/api/locations/autocomplete`, {
                    params
                });
                setSuggestions(res.data);
                setShowSuggestions(true);
            } catch (err) {
                console.log(err);
            }
        } else {
            setShowSuggestions(false);
        }
    };
    const handleSearch = async (location)=>{
        setShowSuggestions(false);
        setLoading(true);
        setError(null);
        try {
            const weatherData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$services$2f$weatherService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeatherData"])(location);
            const forecastData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$services$2f$weatherService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getForecastData"])(location);
            setCurrentWeather(weatherData);
            setForecast(forecastData);
            const updated = [
                location,
                ...recentSearches.filter((s)=>s.name !== location.name)
            ];
            setRecentSearches(updated);
            localStorage.setItem("recentSearches", JSON.stringify(updated));
        } catch (err) {
            setError("Failed to fetch weather data");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$common$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageWrapper"], {
        $darkMode: darkMode,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    darkMode: darkMode,
                    setDarkMode: setDarkMode
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    darkMode: darkMode,
                    searchQuery: searchQuery,
                    setSearchQuery: setSearchQuery,
                    handleSearch: handleSearch
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                recentSearches.length > 0 && !currentWeather && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$RecentSearches$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    darkMode: darkMode,
                    handleSearch: handleSearch,
                    recentSearches: recentSearches
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 295,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 302,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Error$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    error: error,
                    darkMode: darkMode
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 304,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)),
                currentWeather && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$WeatherCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            darkMode: darkMode,
                            currentWeather: currentWeather
                        }, void 0, false, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$ForecastCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            darkMode: darkMode,
                            forecast: forecast
                        }, void 0, false, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 307,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 284,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
        lineNumber: 283,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Page;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9dd489aa._.js.map