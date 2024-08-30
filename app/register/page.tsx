"use client";
import { useFormik } from "formik";
import { LoginValidation } from "../login/LoginValidation";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../_firebase/config";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomLoadingSpinner from "../components/CustomLoading";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const formik = useFormik({
        validationSchema: LoginValidation,
        initialValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
        onSubmit: async (values) => {
            setLoading(true);
            await createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((res) => {
                    if (res) {
                        toast.success("Register success");
                        router.push("/login");
                    }
                })
                .catch((err) => {
                    toast.error(err.message);
                });
            setLoading(false);
        },
    });

    return (
        <div className="h-screen flex items-center justify-center bg-gray-200">
            <Toaster />
            <div className="lg:flex items-center space-x-16">
                <div className="w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">Sign Up</h2>
                    <p className="text-center text-sm text-gray-600 mt-2">
                        Already have an account? 
                        <span
                            onClick={() => toast("Sign in option will be available soon")}
                            className="text-blue-600 cursor-pointer hover:text-blue-700 hover:underline"
                            title="Sign In"
                        >
                            Sign in here
                        </span>
                    </p>
                    <form
                        onSubmit={(e) => {
                            formik.handleSubmit(e);
                        }}
                        className="my-8 text-sm"
                    >
                        <div className="flex flex-col my-4">
                            <label htmlFor="name" className="text-gray-700">
                                Name
                            </label>
                            <input
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                className="mt-2 p-2 border border-gray-300  rounded text-sm text-gray-900"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                            {formik.errors.name && formik.touched.name ? (
                                <div className="text-red-600 text-xs mt-2">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="email" className="">
                                Email Address
                            </label>
                            <input
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className="mt-2 p-2 border border-gray-300  rounded text-sm text-gray-900"
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                            />
                            {formik.errors.email && formik.touched.email ? (
                                <div className="text-red-600 text-xs mt-2">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="password" className="text-gray-700">
                                Password
                            </label>
                            <input
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                className="mt-2 p-2 border  rounded text-sm "
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                            />
                            {formik.errors.password && formik.touched.password ? (
                                <div className="text-red-600 text-xs mt-2">{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="password_confirmation" className="text-gray-700">
                                Password Confirmation
                            </label>
                            <input
                                value={formik.values.password_confirmation}
                                onChange={formik.handleChange}
                                className="mt-2 p-2 border  focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                type="password"
                                name="password_confirmation"
                                placeholder="Enter your password again"
                            />
                            {formik.errors.password_confirmation && formik.touched.password_confirmation ? (
                                <div className="text-red-600 text-xs mt-2">{formik.errors.password_confirmation}</div>
                            ) : null}
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="remember_me"
                                id="remember_me"
                                className="mr-2 focus:ring-0 rounded"
                            />
                            <label
                                htmlFor="remember_me"
                                className="text-gray-700"
                                onClick={() => toast("Terms and Privacy Policy will be available soon")}
                            >
                                I accept the{" "}
                                <span className="text-blue-600 cursor-pointer hover:text-blue-700 hover:underline">
                                    terms
                                </span>{" "}
                                and{" "}
                                <span className="text-blue-600 cursor-pointer hover:text-blue-700 hover:underline">
                                    privacy policy
                                </span>
                            </label>
                        </div>
                        <div className="my-4 flex items-center justify-end space-x-4">
                            <button
                                type="submit"
                                className="bg-gray-300 hover:bg-gray-500 text-black rounded-lg px-8 py-2  hover:shadow-xl transition duration-150 uppercase"
                            >
                                {loading ? <CustomLoadingSpinner /> : "Sign Up"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="relative overflow-hidden flex w-1/2 justify-around items-center md:flex">
                    <div className="">
                        <img
                            className="w-[400px] animate-slide-in-with-shadow opacity-0"
                            src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/logo.svg"
                            alt=""
                        />
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-96 h-96 rounded-full opacity-50 animate-pulse-slow"></div>
                    <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-cream-100 rounded-full opacity-50 animate-zoom-in-out"></div>
                    <div className="absolute -top-40 -right-0 w-96 h-96 rounded-full opacity-50 animate-pulse-slow"></div>
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-cream-100 rounded-full opacity-50 animate-zoom-in-out"></div>
                </div>
            </div>
        </div>
    );
}
