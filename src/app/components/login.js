"use client";

import React, { useState } from "react";
import { uploadImage } from "@/hooks/uploadImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
// import "./test.css";
import imageOne from "../../../public/img/log.svg";
import imageTwo from "../../../public/img/register.svg";
import { AuthContext } from "@/provider/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import toast from "react-hot-toast";
import "./login.css";

function LoginPage() {
  const { createUser, googleSigning, updateUserProfile, signIngUser } =
    useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.files[0];
    // console.log({ image, email });
    uploadImage(image)
      .then((data) => {
        // console.log(data);
        const photo = data.data.display_url;
        console.log(photo);
        createUser(email, password)
          .then((result) => {
            updateUserProfile(name, photo)
              .then(() => {
                toast.success("sign in successful");
                router.push("/dashboard/product");
                // replace(from);
              })
              .catch((error) => {
                toast.error(error.message);
                console.log(error.message);
              });
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIngUser(email, password)
      .then(() => {
        toast.success("login successful");
        router.push("/dashboard/product");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`loginContainer  ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            onSubmit={handleLogin}
            action="#"
            className="sign-in-form loginForm"
          >
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
              <input
                type="email"
                name="email"
                id="email"
                required
                className="LoginInput"
                placeholder="Enter Your Email Here"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                name="password"
                id="password"
                required
                placeholder="*****"
              />
            </div>
            <button type="submit" className="btn">
              Sign In
            </button>

            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>
            </div>
          </form>
          <form
            onSubmit={handleSignUp}
            action="#"
            className="sign-up-form loginForm"
          >
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
              />
            </div>
            <div className="w-full max-w-[380px]">
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="file-input file-input-bordered file-input-info w-full bg-[#f0f0f0] my-[10px] h-[55px] rounded-[55px]"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                name="password"
                id="password"
                required
                placeholder="*****"
              />
            </div>
            <button type="submit" className="btn">
              Sign Up
            </button>
            <p className="social-text loginp">
              Or Sign up with social platforms
            </p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3">New here?</h3>
            <p className="loginp">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <Image src={imageOne} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">One of us ?</h3>
            <p className="loginp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              onClick={handleSignInClick}
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <Image src={imageTwo} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
