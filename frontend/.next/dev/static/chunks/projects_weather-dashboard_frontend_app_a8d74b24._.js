(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/projects/weather-dashboard/frontend/app/styles/components/Headers.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderWrapper",
    ()=>HeaderWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const HeaderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Headers$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/Headers.styles.ts [app-client] (ecmascript)");
;
;
;
const Header = ({ darkMode, setDarkMode })=>{
    const toggleDarkMode = ()=>{
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", JSON.stringify(newMode));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Headers$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderWrapper"], {
            $darkmode: darkMode,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Weather"
                        }, void 0, false, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Header.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleDarkMode,
                    "aria-label": "Toggle dark mode",
                    children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSun"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/projects/weather-dashboard/frontend/app/components/Header.tsx",
                        lineNumber: 19,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMoon"], {
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
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/services/weatherService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getForecastData",
    ()=>getForecastData,
    "getLocationSuggestions",
    ()=>getLocationSuggestions,
    "getWeatherData",
    ()=>getWeatherData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const baseUrl = ("TURBOPACK compile-time value", "http://localhost:3000");
const getLocationSuggestions = async (query)=>{
    const params = {
        q: query
    };
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${baseUrl}/api/locations/autocomplete`, {
        params
    });
    return response.data;
};
const getWeatherData = async (location)=>{
    const params = {
        q: location.name
    };
    const weather = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${baseUrl}/api/weather/current`, {
        params
    });
    return weather.data;
};
const getForecastData = async (location)=>{
    const forecastParams = {
        q: location.name,
        days: 5
    };
    const forecastResult = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${baseUrl}/api/weather/forecast`, {
        params: forecastParams
    });
    return forecastResult.data.forecast;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/Search.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoSuggestion",
    ()=>AutoSuggestion,
    "SearchAutoSuggestionWrapper",
    ()=>SearchAutoSuggestionWrapper,
    "SearchWrapper",
    ()=>SearchWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const SearchAutoSuggestionWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  postion: relative;
  margin-bottom: 2rem;
`;
const SearchWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
const AutoSuggestion = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/components/Search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$services$2f$weatherService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/services/weatherService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Search$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/Search.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const Search = (props)=>{
    _s();
    const { darkMode, searchQuery, setSearchQuery, handleSearch } = props;
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleInputChange = async (e)=>{
        const value = e.target.value;
        setSearchQuery(value);
        if (value.length > 2) {
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$services$2f$weatherService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocationSuggestions"])(searchQuery);
                setSuggestions(result);
                setShowSuggestions(true);
            } catch (err) {
                console.log(err);
            }
        } else {
            setShowSuggestions(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Search$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchAutoSuggestionWrapper"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Search$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchWrapper"], {
                    $darkmode: darkMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosSearch"], {}, void 0, false, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Search.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                showSuggestions && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Search$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoSuggestion"], {
                    $darkmode: darkMode,
                    children: suggestions.map((sug)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSearchQuery(sug.name);
                                handleSearch(sug);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {}, void 0, false, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/Search.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(Search, "yrslfTcQiLiRX2tDEGrXRTuJN1o=");
_c = Search;
const __TURBOPACK__default__export__ = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/RecentSearches.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wrapper",
    ()=>Wrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/components/RecentSearches.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$RecentSearches$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/RecentSearches.styles.ts [app-client] (ecmascript)");
;
;
const RecentSearches = ({ darkMode, recentSearches, handleSearch })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$RecentSearches$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wrapper"], {
            $darkmode: darkMode,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Recent Searches"
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/components/RecentSearches.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: recentSearches.map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = RecentSearches;
const __TURBOPACK__default__export__ = RecentSearches;
var _c;
__turbopack_context__.k.register(_c, "RecentSearches");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/Loader.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoaderWrapper",
    ()=>LoaderWrapper,
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const LoaderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  text-align: center;
  padding: 3rem 0;
`;
const spin = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const Spinner = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 4px solid #60a5fa;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/components/Loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Loader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/Loader.styles.ts [app-client] (ecmascript)");
;
;
const Loader = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Loader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoaderWrapper"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Loader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
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
_c = Loader;
const __TURBOPACK__default__export__ = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/styles/components/Error.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBox",
    ()=>ErrorBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const ErrorBox = __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  background-color: ${({ $darkMode })=>$darkMode ? "rgba(127, 29, 29, 0.3)" : "#fef2f2"};
  border: ${({ $darkMode })=>$darkMode ? "1px solid #991b1b" : "1px solid #e5e7eb"};
  color: ${({ $darkMode })=>$darkMode ? "#fca5a5" : "#b91c1c"};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/components/Error.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Error$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/styles/components/Error.styles.ts [app-client] (ecmascript)");
;
;
const Error = ({ error, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$styles$2f$components$2f$Error$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBox"], {
            $darkMode: darkMode,
            children: error
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/components/Error.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_c = Error;
const __TURBOPACK__default__export__ = Error;
var _c;
__turbopack_context__.k.register(_c, "Error");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/projects/weather-dashboard/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/ri/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/Search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$RecentSearches$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/RecentSearches.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/components/Error.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$services$2f$weatherService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projects/weather-dashboard/frontend/app/services/weatherService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const Page = ()=>{
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recentSearches, setRecentSearches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentWeather, setCurrentWeather] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forecast, setForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const saved = localStorage.getItem("recentSearches");
            if (saved) {
                setRecentSearches(JSON.parse(saved));
            }
            const savedTheme = localStorage.getItem("darkMode");
            if (savedTheme) {
                setDarkMode(JSON.parse(savedTheme));
            }
        }
    }["Page.useEffect"], []);
    const toggleDarkMode = ()=>{
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", JSON.stringify(newMode));
    };
    const getWeatherIcon = (condition)=>{
        const code = condition?.toLowerCase() || "";
        if (code.includes("rain")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCloudRain"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 221,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
        if (code.includes("snow")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsCloudSnow"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 222,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0));
        if (code.includes("drizzle")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiDrizzleLine"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 223,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0));
        if (code.includes("thunder")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineThunderbolt"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 224,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0));
        if (code.includes("partlycloudy")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiCloud"], {
            size: 26
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 225,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineSun"], {
            size: 46
        }, void 0, false, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 226,
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
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${baseUrl}/api/locations/autocomplete`, {
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
            const weatherData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$services$2f$weatherService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeatherData"])(location);
            const forecastData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$services$2f$weatherService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getForecastData"])(location);
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
    // Helper to get day name from date
    const getDayName = (dateStr)=>{
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            weekday: "short"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "56rem",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    darkMode: darkMode,
                    setDarkMode: setDarkMode
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    darkMode: darkMode,
                    searchQuery: searchQuery,
                    setSearchQuery: setSearchQuery,
                    handleSearch: handleSearch
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                recentSearches.length > 0 && !currentWeather && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$RecentSearches$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    darkMode: darkMode,
                    handleSearch: handleSearch,
                    recentSearches: recentSearches
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 298,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 305,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$app$2f$components$2f$Error$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    error: error,
                    darkMode: darkMode
                }, void 0, false, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 307,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0)),
                currentWeather && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderRadius: "1rem",
                                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                                padding: "2rem",
                                backgroundColor: darkMode ? "#1f2937" : "white"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: "1.5rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontSize: "1.5rem",
                                                        fontWeight: 300,
                                                        marginBottom: "0.25rem",
                                                        color: darkMode ? "white" : "#1f2937",
                                                        margin: "0 0 0.25rem 0"
                                                    },
                                                    children: currentWeather.location.name
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.875rem",
                                                        color: darkMode ? "#9ca3af" : "#6b7280",
                                                        margin: 0
                                                    },
                                                    children: currentWeather.current.condition.text
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: darkMode ? "#60a5fa" : "#3b82f6"
                                            },
                                            children: getWeatherIcon(currentWeather.current.condition.text)
                                        }, void 0, false, {
                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "2rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "3.75rem",
                                                fontWeight: 300,
                                                color: darkMode ? "white" : "#1f2937",
                                                lineHeight: 1
                                            },
                                            children: [
                                                currentWeather.current.temp_c,
                                                "°"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "0.875rem",
                                                marginTop: "0.25rem",
                                                color: darkMode ? "#9ca3af" : "#6b7280",
                                                margin: "0.25rem 0 0 0"
                                            },
                                            children: [
                                                "Feels like ",
                                                currentWeather.current.feelslike_c,
                                                "°"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                                        gap: "1rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.75rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWind"], {
                                                    style: {
                                                        width: "1.25rem",
                                                        height: "1.25rem",
                                                        color: darkMode ? "#6b7280" : "#9ca3af"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.75rem",
                                                                color: darkMode ? "#6b7280" : "#6b7280",
                                                                margin: 0
                                                            },
                                                            children: "Wind"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.875rem",
                                                                fontWeight: 500,
                                                                color: darkMode ? "#e5e7eb" : "#1f2937",
                                                                margin: 0
                                                            },
                                                            children: [
                                                                currentWeather.current.wind_kph,
                                                                " km/h"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.75rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiDroplet"], {
                                                    style: {
                                                        width: "1.25rem",
                                                        height: "1.25rem",
                                                        color: darkMode ? "#6b7280" : "#9ca3af"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.75rem",
                                                                color: darkMode ? "#6b7280" : "#6b7280",
                                                                margin: 0
                                                            },
                                                            children: "Humidity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.875rem",
                                                                fontWeight: 500,
                                                                color: darkMode ? "#e5e7eb" : "#1f2937",
                                                                margin: 0
                                                            },
                                                            children: [
                                                                currentWeather.current.humidity,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.75rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEye"], {
                                                    style: {
                                                        width: "1.25rem",
                                                        height: "1.25rem",
                                                        color: darkMode ? "#6b7280" : "#9ca3af"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.75rem",
                                                                color: darkMode ? "#6b7280" : "#6b7280",
                                                                margin: 0
                                                            },
                                                            children: "Visibility"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.875rem",
                                                                fontWeight: 500,
                                                                color: darkMode ? "#e5e7eb" : "#1f2937",
                                                                margin: 0
                                                            },
                                                            children: [
                                                                currentWeather.current.vis_km,
                                                                " km"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.75rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGaugeSimple"], {
                                                    style: {
                                                        width: "1.25rem",
                                                        height: "1.25rem",
                                                        color: darkMode ? "#6b7280" : "#9ca3af"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.75rem",
                                                                color: darkMode ? "#6b7280" : "#6b7280",
                                                                margin: 0
                                                            },
                                                            children: "Pressure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.875rem",
                                                                fontWeight: 500,
                                                                color: darkMode ? "#e5e7eb" : "#1f2937",
                                                                margin: 0
                                                            },
                                                            children: [
                                                                currentWeather.current.pressure_mb,
                                                                " mb"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderRadius: "1rem",
                                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                                padding: "1.5rem",
                                backgroundColor: darkMode ? "#1f2937" : "white"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "1.125rem",
                                        fontWeight: 300,
                                        marginBottom: "1rem",
                                        color: darkMode ? "white" : "#1f2937",
                                        margin: "0 0 1rem 0"
                                    },
                                    children: "5-Day Forecast"
                                }, void 0, false, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(5, 1fr)",
                                        gap: "1rem"
                                    },
                                    children: forecast.forecastday.map((day, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.875rem",
                                                        marginBottom: "0.75rem",
                                                        color: darkMode ? "#9ca3af" : "#4b5563",
                                                        margin: "0 0 0.75rem 0"
                                                    },
                                                    children: getDayName(day.date)
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        marginBottom: "0.75rem",
                                                        color: darkMode ? "#60a5fa" : "#3b82f6"
                                                    },
                                                    children: getWeatherIcon(day.day.condition.text)
                                                }, void 0, false, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "0.25rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.875rem",
                                                                fontWeight: 500,
                                                                color: darkMode ? "#e5e7eb" : "#1f2937",
                                                                margin: 0
                                                            },
                                                            children: [
                                                                day.day.maxtemp_c,
                                                                "°"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                            lineNumber: 592,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projects$2f$weather$2d$dashboard$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.75rem",
                                                                color: darkMode ? "#6b7280" : "#6b7280",
                                                                margin: 0
                                                            },
                                                            children: [
                                                                day.day.mintemp_c,
                                                                "°"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                            lineNumber: 602,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                            lineNumber: 564,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                                    lineNumber: 556,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                            lineNumber: 537,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
                    lineNumber: 311,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
            lineNumber: 287,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/projects/weather-dashboard/frontend/app/page.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Page, "q022QCJ6uZm0cigpissxiTVvzr4=");
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=projects_weather-dashboard_frontend_app_a8d74b24._.js.map