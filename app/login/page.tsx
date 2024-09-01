"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { LoginValidation } from "./LoginValidation";
import CustomLoadingSpinner from "../components/CustomLoading";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../_firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "../register/page";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: LoginValidation,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log("Firebase signIn response:", res);

        if (res?.operationType === "signIn" && res?.user?.getIdToken) {
          const token = await res.user.getIdToken();

          if (typeof window !== "undefined") {
            localStorage.setItem("userToken", JSON.stringify(token));
            localStorage.setItem("userEmail", values.email);
            localStorage.setItem("accountType", "Standard Account");
          }
          toast.success("Login successful!");
          router.push("/home");
        } else {
          throw new Error("Login failed: Token not found");
        }
      } catch (err) {
        toast.error(err?.message || "An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    },
  });

  if (showRegister) {
    return <Register />;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ToastContainer />
      <div className="w-full md:w-1/2 bg-gray-200 flex flex-col justify-center items-center text-white p-8">
        <img
          className="w-[200px] md:w-[300px] lg:w-[400px] mb-8 md:mb-16 animate-slide-in-with-shadow"
          src="https://wpriverthemes.com/synck/wp-content/uploads/2024/02/logo.svg"
          alt="Synck Logo"
        />
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-center text-black animate-slide-in-with-shadow">
          Seamless IT for your business, boosting your growth.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-4 md:p-8">
        <div className="w-full max-w-md">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-center">
            Log in
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col mb-3 md:mb-4">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="name@example.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col mb-3 md:mb-4">
              <label htmlFor="password" className="text-sm font-medium">
                Password *
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="flex items-center mb-3 md:mb-4">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                onChange={formik.handleChange}
                checked={formik.values.rememberMe}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-sm text-gray-700"
              >
                Keep me logged in
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-500"
            >
              {isLoading ? <CustomLoadingSpinner /> : "Log in now"}
            </button>
          </form>

          <div className="mt-4 md:mt-6 text-center">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <button
                onClick={() => setShowRegister(true)}
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
            <p className="text-gray-500 mt-2">
              <button className="text-blue-600 hover:underline">
                Forgot password?
              </button>
            </p>
          </div>

          <div className="mt-4 md:mt-6 text-center">
            <p className="text-gray-500">Or sign in with</p>
            <div className="flex justify-center mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
