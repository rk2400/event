"use strict";
(() => {
var exports = {};
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 8960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ signin),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(6153);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
;// CONCATENATED MODULE: ./src/utils/setAdminToken.js

const cookies = new (external_universal_cookie_default())();
const setAdminToken = (admin_id)=>{
    console.log("admin id state value ", admin_id);
    cookies.set("admin_token", admin_id, {
        expires: new Date(Date.now() + 86400000)
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/pages/admin/auth.jsx






async function getServerSideProps(context) {
    const cookies = new (external_universal_cookie_default())(context.req.headers.cookie);
    const adminId = cookies.get("admin_token");
    if (!adminId) {
        return {
            props: {
                adminIdCookie: null
            }
        };
    }
    return {
        props: {
            adminIdCookie: adminId
        }
    };
}
function signin({ adminIdCookie  }) {
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [step, setStep] = (0,external_react_.useState)(1);
    const [message, setMessage] = (0,external_react_.useState)({
        errorMsg: "",
        successMsg: ""
    });
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        // If cookie found, Redirect to dashboard
        if (adminIdCookie) {
            setStep(2); // Skip auth steps
            setTimeout(()=>{
                // Set success message
                setMessage({
                    errorMsg: "",
                    successMsg: "Redirecting you ..."
                });
            }, 500);
            // Redirect to dashboard
            setTimeout(()=>{
                router.push("/admin/dashboard");
            }, 800);
        }
    }, []);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await fetch(`${"https://event-oabu.onrender.com/"}/admin/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
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
            setAdminToken(data.admin_token); // set cookie when signed up
        } else {
            console.error(`Failed with status code ${response.status}`);
            setMessage({
                errorMsg: data.msg,
                successMsg: ""
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "m-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiArrowLeft, {
                onClick: ()=>router.push("/"),
                size: 24,
                className: "cursor-pointer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center text-3xl font-bold",
                children: "Admin Authentication Page"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-3xl mx-auto mt-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `w-full h-24 lg:h-fit ${step === 1 ? `font-medium` : ``}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `h-full border-2 rounded-l-lg px-5 py-2 ${step >= 1 ? `text-white bg-[color:var(--darker-secondary-color)] border-r-white border-[color:var(--darker-secondary-color)]` : `border-[color:var(--darker-secondary-color)] border-dashed`}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "01"
                                        }),
                                        "Verify Credentials"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `w-full h-24 lg:h-fit ${step === 2 ? `font-medium` : ``}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `h-full border-2 border-l-0 rounded-r-lg px-5 py-2 ${step >= 2 ? `text-white bg-[color:var(--darker-secondary-color)] border-[color:var(--darker-secondary-color)]` : `border-[color:var(--darker-secondary-color)] border-dashed`}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "02"
                                        }),
                                        "Go to Dashboard!"
                                    ]
                                })
                            })
                        ]
                    }),
                    message.errorMsg && /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "rounded p-3 my-2 bg-red-200 text-red-600 font-medium",
                        children: message.errorMsg
                    }),
                    message.successMsg && /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "rounded p-3 my-2 bg-green-200 text-green-600 font-medium",
                        children: message.successMsg
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-white p-5 rounded-lg mt-2",
                        children: [
                            /* Step 1 Content*/ step === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "block mb-2 text-sm font-medium text-gray-700",
                                        children: "Enter your Registered Email address"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        value: email,
                                        className: "bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-full",
                                        onChange: (e)=>setEmail(e.target.value)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "block mb-2 text-sm font-medium text-gray-700",
                                        children: "Enter your Password"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "password",
                                        id: "password",
                                        name: "password",
                                        value: password,
                                        className: "bg-gray-100 p-2 mx-2 mb-4 focus:outline-none rounded-lg w-full",
                                        onChange: (e)=>setPassword(e.target.value)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-sm text-gray-700 mt-6",
                                        children: [
                                            "*You have the option to designate yourself as an admin for testing purposes by following this",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://invite-developers.vercel.app/",
                                                target: "_blank",
                                                className: "text-[color:var(--darker-secondary-color)]",
                                                children: "link."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        className: "btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mt-4 mb-4 sm:w-auto sm:mb-0",
                                        children: "Verify"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        onClick: ()=>{
                                            setEmail("invite.testing@gmail.com");
                                            setPassword("invite123");
                                        },
                                        className: "btn text-white bg-gray-700 hover:bg-gray-800 mt-4 w-full sm:w-auto sm:ml-4",
                                        children: "Use Test Credentials"
                                    })
                                ]
                            }),
                            /* Step 2 Content */ step === 2 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "bg-green-50 border-b border-green-400 text-green-800 text-sm p-4 flex justify-between",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "font-bold",
                                                            children: [
                                                                "Hey there!",
                                                                " "
                                                            ]
                                                        }),
                                                        "Welcome back, you're successfully signed in!"
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>router.push("/admin/dashboard"),
                                        className: "mt-4 bg-[color:var(--darker-secondary-color)] text-white py-2 px-4 rounded hover:bg-[color:var(--secondary-color)] transition ease-in-out",
                                        children: "Go to your dashboard"
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
var __webpack_exports__ = (__webpack_exec__(8960));
module.exports = __webpack_exports__;

})();