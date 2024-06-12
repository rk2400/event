"use strict";
exports.id = 456;
exports.ids = [456];
exports.modules = {

/***/ 2456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(6153);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
;// CONCATENATED MODULE: ./src/utils/removeUserToken.js

const cookies = new (external_universal_cookie_default())();
const removeUserToken = ()=>{
    cookies.remove("user_token", {
        path: "/"
    });
};

;// CONCATENATED MODULE: ./src/components/UserDropdown.js





function Dropdown({ userData  }) {
    const router = (0,router_.useRouter)();
    const [showDropdown, setShowDropdown] = (0,external_react_.useState)(false);
    const dropdownRef = (0,external_react_.useRef)(null);
    // function to handle dropdown toggle
    const toggleDropdown = ()=>{
        setShowDropdown(!showDropdown);
    };
    // function to handle logout button click
    const handleLogout = ()=>{
        removeUserToken();
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
                        children: "Profile"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaAngleDown, {
                        className: `h-4 w-4 ${showDropdown ? "transform rotate-180" : ""}`
                    })
                ]
            }),
            showDropdown && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute right-0 bg-white rounded-md overflow-hidden shadow-lg z-10",
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
                                        children: userData.username
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
                                        children: userData.email
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-4 pb-2 cursor-default hover:bg-[color:var(--primary-color)]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-gray-800 font-medium pt-2",
                                        children: "Registration No."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-gray-600",
                                        children: userData.reg_number
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-4 pb-2 cursor-default hover:bg-[color:var(--primary-color)]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-gray-800 font-medium pt-2",
                                        children: "Member since"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-gray-600",
                                        children: [
                                            new Date(userData.createdAt).getDate(),
                                            "-",
                                            new Date(userData.createdAt).getUTCMonth() + 1,
                                            "-",
                                            new Date(userData.createdAt).getFullYear()
                                        ]
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

// EXTERNAL MODULE: ./src/utils/getUserToken.js
var getUserToken = __webpack_require__(933);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/UserNavBar.js






function NavBar() {
    const router = (0,router_.useRouter)();
    const userIdCookie = (0,getUserToken/* getUserToken */.N)();
    const [userData, setUserData] = (0,external_react_.useState)({});
    // fetch the user data as soon as the page loads
    const fetchUserData = async ()=>{
        // If cookie was manually removed from browser
        if (!userIdCookie) {
            console.error("No cookie found! Please signin");
            // redirect to signin
            router.push("/users/signin");
        }
        const response = await fetch(`${"https://event-oabu.onrender.com/"}/user/details`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_token: userIdCookie
            })
        });
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        // User Details fetched from API `/user/details`
        try {
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error("Invalid JSON string:", error.message);
        }
    };
    (0,external_react_.useEffect)(()=>{
        fetchUserData();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mb-[8vh]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "bg-[color:var(--white-color)] fixed top-0 z-50 w-full shadow-md text-[color:var(--darker-secondary-color)]",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex items-center flex-col lg:flex-row justify-between p-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: ()=>router.push("/users/dashboard"),
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
                                    onClick: ()=>router.push("/users/dashboard"),
                                    className: "mr-4 cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Dashboard"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>router.push("/users/past_events"),
                                    className: "mr-4 cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Past Events"
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
                                    userData: userData
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

/***/ 933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getUserToken)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6153);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
const getUserToken = ()=>{
    return cookies.get("user_token");
};


/***/ })

};
;