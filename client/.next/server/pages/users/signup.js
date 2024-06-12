"use strict";
(() => {
var exports = {};
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 4052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ signup),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_setUserToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6706);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6153);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_5__);






async function getServerSideProps(context) {
    const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_5___default())(context.req.headers.cookie);
    const userId = cookies.get("user_token");
    if (!userId) {
        return {
            props: {
                userIdCookie: null
            }
        };
    }
    return {
        props: {
            userIdCookie: userId
        }
    };
}
function signup({ userIdCookie  }) {
    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        errorMsg: "",
        successMsg: ""
    });
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [contactNumber, setContactNumber] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [regNumber, setRegNumber] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // If cookie found, Redirect to dashboard
        if (userIdCookie) {
            setStep(3); // Skip login steps
            setTimeout(()=>{
                // Set success message
                setMessage({
                    errorMsg: "",
                    successMsg: "Redirecting you ..."
                });
            }, 500);
            // Redirect to dashboard
            setTimeout(()=>{
                router.push("/users/dashboard");
            }, 800);
        }
    }, []);
    // Take Email, give OTP
    const handleVerifyEmail = async (event)=>{
        event.preventDefault();
        const response = await fetch(`${"https://event-oabu.onrender.com/"}/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        });
        const data = await response.json();
        if (response.status === 200) {
            setMessage({
                errorMsg: "",
                successMsg: data.msg
            });
            console.log(data);
            setStep(2); // Move to next step on the same page
        } else {
            console.error(`Failed with status code ${response.status}`);
            setMessage({
                errorMsg: data.msg,
                successMsg: ""
            });
            // Redirecting to singin if shown "This Email ID is already registered. Try Signing In instead!"
            setTimeout(()=>{
                // Set success message
                setMessage({
                    errorMsg: "Redirecting you to SignIn ...",
                    successMsg: ""
                });
            }, 1700);
            // Redirect to dashboard
            setTimeout(()=>{
                router.push("/users/signin");
            }, 2500);
        }
    };
    // Take all info, return account creating
    const handleSubmit = async (event)=>{
        event.preventDefault();
        // test to check that registration number is in correct format
        const regExp = /^\d{2}[A-Za-z]{3}\d{5}$/; // regular expression pattern for nntttnnnnn format
        if (regExp.test(regNumber)) {
            const response = await fetch(`${"https://event-oabu.onrender.com/"}/user/signup/verify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contactNumber: contactNumber,
                    otp: otp,
                    email: email,
                    regNumber: regNumber.toUpperCase(),
                    username: username
                })
            });
            const data = await response.json();
            if (response.status === 200) {
                setMessage({
                    errorMsg: "",
                    successMsg: data.msg
                });
                console.log(data);
                setStep(3); // Move to next step on the same page
                (0,_utils_setUserToken__WEBPACK_IMPORTED_MODULE_1__/* .setUserToken */ .d)(data.user_id); // set cookie when signed up
            } else {
                console.error(`Failed with status code ${response.status}`);
                setMessage({
                    errorMsg: data.msg,
                    successMsg: ""
                });
            }
        } else {
            setMessage({
                errorMsg: "Registeration Number is not valid",
                successMsg: ""
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "m-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiArrowLeft, {
                onClick: ()=>router.push("/"),
                size: 24,
                className: "cursor-pointer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center text-3xl font-bold",
                children: "Signup Page"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-3xl mx-auto mt-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-full h-24 lg:h-fit ${step === 1 ? `font-medium` : ``}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `h-full border-2 rounded-l-lg px-5 py-2 ${step >= 1 ? `text-white bg-[color:var(--darker-secondary-color)] border-r-white border-[color:var(--darker-secondary-color)]` : `border-[color:var(--darker-secondary-color)] opacity-10 border-dashed`}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "01"
                                        }),
                                        "Verify Email"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-full h-24 lg:h-fit ${step === 2 ? `font-medium` : ``}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `h-full border-2 border-l-0 px-5 py-2 ${step >= 2 ? `text-white bg-[color:var(--darker-secondary-color)] border-r-white border-[color:var(--darker-secondary-color)]` : `border-[color:var(--darker-secondary-color)] border-dashed`}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "02"
                                        }),
                                        "Complete Signup"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `w-full h-24 lg:h-fit ${step === 3 ? `font-medium` : ``}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `h-full border-2 border-l-0 rounded-r-lg px-5 py-2 ${step >= 3 ? `text-white bg-[color:var(--darker-secondary-color)] border-[color:var(--darker-secondary-color)]` : `border-[color:var(--darker-secondary-color)] border-dashed`}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "03"
                                        }),
                                        "Go to Dashboard!"
                                    ]
                                })
                            })
                        ]
                    }),
                    message.errorMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "rounded p-3 my-2 bg-red-200 text-red-600 font-medium",
                        children: message.errorMsg
                    }),
                    message.successMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "rounded p-3 my-2 bg-green-200 text-green-600 font-medium",
                        children: message.successMsg
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white p-5 rounded-lg mt-2",
                        children: [
                            /* Step 1 Content */ step === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleVerifyEmail,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block mb-2 text-sm font-medium text-gray-700",
                                        children: "Enter your email address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        value: email,
                                        className: "bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-full",
                                        onChange: (e)=>setEmail(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)]",
                                        children: "Verify"
                                    })
                                ]
                            }),
                            /* Step 2 Content */ step === 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "block mb-2 text-sm font-medium text-gray-700",
                                                children: "Your email address"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                defaultValue: email,
                                                disabled: true,
                                                className: "bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "block mb-2 text-sm font-medium text-gray-700",
                                                children: "Enter Verification Code"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "number",
                                                id: "otp",
                                                name: "otp",
                                                autoComplete: "none",
                                                required: true,
                                                value: otp,
                                                className: "bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12",
                                                onChange: (e)=>setOtp(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "block mb-2 text-sm font-medium text-gray-700",
                                                children: "Full Name"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                id: "username",
                                                name: "username",
                                                value: username,
                                                autoComplete: "none",
                                                required: true,
                                                className: "bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12",
                                                onChange: (e)=>setUsername(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "block mb-2 text-sm font-medium text-gray-700",
                                                children: "Enter VIT Registration Number"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                id: "regNumber",
                                                name: "regNumber",
                                                value: regNumber,
                                                autoComplete: "none",
                                                required: true,
                                                className: "bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12",
                                                onChange: (e)=>setRegNumber(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "block mb-2 text-sm font-medium text-gray-700",
                                                children: "Enter Contact Number"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "number",
                                                id: "contactNumber",
                                                name: "contactNumber",
                                                value: contactNumber,
                                                autoComplete: "none",
                                                required: true,
                                                className: "bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-10/12",
                                                onChange: (e)=>setContactNumber(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)]",
                                        children: "Complete Signup"
                                    })
                                ]
                            }),
                            /* Step 3 Content */ step === 3 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-green-50 border-b border-green-400 text-green-800 text-sm p-4 flex justify-between",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "font-bold",
                                                            children: [
                                                                "Success :",
                                                                " "
                                                            ]
                                                        }),
                                                        "Your account has been created!"
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>router.push("/users/dashboard"),
                                        className: "mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)]",
                                        children: "Go to Dashboard"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ setUserToken)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6153);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
const setUserToken = (user_id)=>{
    console.log("user id state value ", user_id);
    cookies.set("user_token", user_id, {
        expires: new Date(Date.now() + 86400000),
        path: "/"
    });
};


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6153:
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4052));
module.exports = __webpack_exports__;

})();