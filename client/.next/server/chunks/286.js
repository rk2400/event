exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 9506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1817);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2950);
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function Dashboard_Filter({ filterOptions ={
    keyword: "",
    category: "",
    dateRange: "",
    price: [
        10,
        3000
    ]
} , setFilterOptions , handleFilterClear  }) {
    // function to handle filter values
    const handleInputChange = (e)=>{
        const { name , value  } = e.target;
        switch(name){
            case "keyword":
                setFilterOptions({
                    ...filterOptions,
                    keyword: value
                });
                break;
            case "category":
                setFilterOptions({
                    ...filterOptions,
                    category: value
                });
                break;
            case "dateRange":
                setFilterOptions({
                    ...filterOptions,
                    dateRange: value
                });
                break;
            default:
                break;
        }
    };
    // function to handle price change in filters
    const handlePriceChange = (value)=>{
        setFilterOptions({
            ...filterOptions,
            price: [
                ...value
            ]
        });
    };
    return(// Add filter options to the DOM element
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-lg font-medium mb-2",
                children: "Filter Options"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "flex flex-col gap-y-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "keyword",
                                className: "font-medium block mb-1",
                                children: "Keyword"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                id: "keyword",
                                name: "keyword",
                                value: filterOptions.keyword,
                                onChange: handleInputChange,
                                className: "filterInput",
                                placeholder: "Search by keyword..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "category",
                                className: "font-medium block mb-1",
                                children: "Category"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                id: "category",
                                name: "category",
                                value: filterOptions.category,
                                onChange: handleInputChange,
                                className: "filterInput",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        children: "Select a category..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "category1",
                                        children: "Technical"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "category2",
                                        children: "Comic"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "category3",
                                        children: "Personalized"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "dateRange",
                                className: "font-medium block mb-1",
                                children: "Date Range"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "date",
                                id: "dateRange",
                                name: "dateRange",
                                value: filterOptions.dateRange,
                                onChange: handleInputChange,
                                className: "filterInput"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Price"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rc_slider__WEBPACK_IMPORTED_MODULE_1___default()), {
                                range: true,
                                min: 0,
                                max: 3000,
                                step: 10,
                                defaultValue: [
                                    10,
                                    100
                                ],
                                value: filterOptions.price,
                                onChange: handlePriceChange
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "₹",
                                    filterOptions.price[0],
                                    " - ₹",
                                    filterOptions.price[1]
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handleFilterClear,
                className: "w-full mt-2 text-white py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-800",
                children: "Clear Filters"
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard_Filter);


/***/ }),

/***/ 6247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1817);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2950);
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__);





function Popup_Filter({ filterOptions ={
    keyword: "",
    category: "",
    dateRange: "",
    price: [
        10,
        3000
    ]
} , setFilterOptions , handleClose , handleFilterClear  }) {
    // function to handle filter values
    const handleInputChange = (e)=>{
        const { name , value  } = e.target;
        switch(name){
            case "keyword":
                setFilterOptions({
                    ...filterOptions,
                    keyword: value
                });
                break;
            case "category":
                setFilterOptions({
                    ...filterOptions,
                    category: value
                });
                break;
            case "dateRange":
                setFilterOptions({
                    ...filterOptions,
                    dateRange: value
                });
                break;
            default:
                break;
        }
    };
    // Handle input change for the status filter
    const handlePriceChange = (value)=>{
        setFilterOptions({
            ...filterOptions,
            price: [
                ...value
            ]
        });
    };
    return(// Add filter options to the DOM element
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fixed top-0 left-0 right-0 bottom-0 z-50 mt-[8rem] bg-white p-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-lg font-medium",
                        children: "Filter Options"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "text-gray-500 hover:text-gray-700",
                        onClick: handleClose,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrFormClose, {
                            className: "h-6 w-6"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "flex flex-col gap-y-3",
                onSubmit: handleClose,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "keyword",
                                className: "font-medium block mb-1",
                                children: "Keyword"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                id: "keyword",
                                name: "keyword",
                                value: filterOptions.keyword,
                                onChange: handleInputChange,
                                className: "filterInput",
                                placeholder: "Search by keyword..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "category",
                                className: "font-medium block mb-1",
                                children: "Category"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                id: "category",
                                name: "category",
                                value: filterOptions.category,
                                onChange: handleInputChange,
                                className: "filterInput",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        children: "Select a category..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "category1",
                                        children: "Category 1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "category2",
                                        children: "Category 2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "category3",
                                        children: "Category 3"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "dateRange",
                                className: "font-medium block mb-1",
                                children: "Date Range"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "date",
                                id: "dateRange",
                                name: "dateRange",
                                value: filterOptions.dateRange,
                                onChange: handleInputChange,
                                className: "filterInput"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Price"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rc_slider__WEBPACK_IMPORTED_MODULE_1___default()), {
                                range: true,
                                min: 0,
                                max: 3000,
                                step: 10,
                                defaultValue: [
                                    10,
                                    100
                                ],
                                value: filterOptions.price,
                                onChange: handlePriceChange
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "₹",
                                    filterOptions.price[0],
                                    " - ₹",
                                    filterOptions.price[1]
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded-lg hover:bg-[color:var(--secondary-color)]",
                        children: "Apply Filters"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handleFilterClear,
                className: "w-full mt-2 text-white py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-800",
                children: "Clear Filters"
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup_Filter);


/***/ }),

/***/ 2950:
/***/ (() => {



/***/ })

};
;