"use strict";
exports.id = 259;
exports.ids = [259];
exports.modules = {

/***/ 3259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/utils/getAdminToken.js
var getAdminToken = __webpack_require__(7671);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(6153);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
;// CONCATENATED MODULE: ./src/utils/removeAdminToken.js

const cookies = new (external_universal_cookie_default())();
const removeAdminToken = ()=>{
    cookies.remove("admin_token", {
        path: "/"
    });
};

;// CONCATENATED MODULE: ./src/components/AdminDropdown.js





function Dropdown({ adminData  }) {
    const router = (0,router_.useRouter)();
    const [showDropdown, setShowDropdown] = (0,external_react_.useState)(false);
    const dropdownRef = (0,external_react_.useRef)(null);
    // function to handle dropdown toggle
    const toggleDropdown = ()=>{
        setShowDropdown(!showDropdown);
    };
    // function to handle logout button click
    const handleLogout = ()=>{
        removeAdminToken();
        router.push("/");
    };
    // Attaches an event listener for the 'mousedown' event to detect a click outside the dropdown
    (0,external_react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        dropdownRef
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "mr-4 cursor-pointer relative",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                onClick: toggleDropdown,
                className: "flex items-center justify-center bg-[color:var(--darker-secondary-color)] text-white text-sm font-medium rounded-md w-28 h-10 focus:outline-none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "mr-2",
                        children: "Admin"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaAngleDown, {
                        className: `h-4 w-4 ${showDropdown ? "transform rotate-180" : ""}`
                    })
                ]
            }),
            showDropdown && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute min-w-[231px] right-0 bg-white rounded-md overflow-hidden shadow-lg z-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-4 py-2 cursor-default hover:bg-[color:var(--primary-color)]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-gray-800 font-medium",
                                        children: "Full Name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-gray-600",
                                        children: adminData.name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-4 pb-2 cursor-default hover:bg-[color:var(--primary-color)]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-gray-800 font-medium pt-2",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-gray-600",
                                        children: adminData.email
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: handleLogout,
                        className: "py-4 group hover:bg-[color:var(--darker-secondary-color)] transition-all ease-in-out",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "text-left w-full px-4 text-gray-800 group-hover:text-white transition-all ease-in-out",
                            children: "Logout"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/AdminNavBar.js






function NavBar() {
    const router = (0,router_.useRouter)();
    const adminIdCookie = (0,getAdminToken/* getAdminToken */.K)();
    // console.log(adminIdCookie);
    const [adminData, setAdminData] = (0,external_react_.useState)({});
    // fetch the admin data as soon as the page loads
    const fetchAdminData = async ()=>{
        // If cookie was manually removed from browser
        if (!adminIdCookie) {
            console.error("No cookie found! Please authenticate");
            // redirect to signin
            router.push("/admin/auth");
        }
        const response = await fetch(`${"https://event-oabu.onrender.com/"}/admin/details`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                admin_id: adminIdCookie
            })
        });
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        // Admin Details fetched from API `/admin/details`
        try {
            const data = await response.json();
            // console.log(data);
            setAdminData(data);
        } catch (error) {
            console.error("Invalid JSON string:", error.message);
        }
    };
    (0,external_react_.useEffect)(()=>{
        fetchAdminData();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mb-[8vh]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "bg-[color:var(--white-color)] fixed top-0 z-50 w-full shadow-md text-[color:var(--darker-secondary-color)]",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex items-center flex-col lg:flex-row justify-between p-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: ()=>router.push("/admin/dashboard"),
                        className: "flex items-center gap-x-3 cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/favicon_io/android-chrome-192x192.png",
                                width: 500,
                                height: 500,
                                alt: "Logo",
                                className: "h-8 w-8"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: "m-2 text-black font-bold text-4xl",
                                children: [
                                    "<In",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-[color:var(--darker-secondary-color)]",
                                        children: "VIT"
                                    }),
                                    "e />"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "text-sm",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>router.push("/admin/dashboard"),
                                    className: "mr-4 cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Dashboard"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>router.push("/"),
                                    className: "mr-4 cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "About us"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Dropdown, {
                                    adminData: adminData
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 7671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getAdminToken)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6153);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
const getAdminToken = ()=>{
    return cookies.get("admin_token");
};


/***/ })

};
;