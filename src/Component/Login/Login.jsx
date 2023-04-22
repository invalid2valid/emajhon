import React, { useContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");
  const { creatUser, sginIn, setUser, googleLogIn } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const password2 = form.password2.value;
    console.log(email, password, password2);
    setError("");
    if (password !== password2) {
      setError("Password Have to Same");
    } else if (password.length < 6) {
      setError("password Cat't less then 6 charecter ");
    }

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);

        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    sginIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="min-h-[85vh] max-w-[1440px] mx-auto relative  items-center  py-12">
      {login ? (
        <form
          onSubmit={handleLogin}
          className="relative w-[500px] h-[600px] mx-auto"
        >
          <div className="w-[500px] h-[600px]  bg-[#FFE0B3] m-auto rounded-md"></div>
          <div className="w-[500px] h-[600px]  bg-white border-2 border-gray-200 m-auto absolute -top-3 -right-3 rounded-md">
            <div className="p-10">
              <h3 className="text-center text-4xl">Login</h3>
              <div className="my-5">
                <p>Email</p>
                <input
                  className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="my-5">
                <p>Password</p>
                <input
                  className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="my-8">
                <button className="w-full font-semibold text-center  bg-[#FFE0B3] rounded-lg h-[55px]">
                  Login
                </button>
                <p className="my-2 text-center">
                  New to Ema-john?
                  <button
                    onClick={() => setLogin(!login)}
                    className="text-[#FF9900] mx-2"
                  >
                    Create New Account
                  </button>
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="h-[2px] rounded-lg bg-slate-200 w-2/5"></div>
                <p className="text-center">or</p>
                <div className="h-[2px] rounded-lg bg-slate-200 w-2/5"></div>
              </div>
              <div className="my-8">
                <button
                  onClick={googleLogIn}
                  className="w-full font-semibold text-center  bg-white border-2 border-gray-200 rounded-lg h-[55px]"
                >
                  Login with Gmail
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSignUp}
          className="relative w-[500px] h-[700px] mx-auto"
        >
          <div className="w-[500px] h-[700px]  bg-[#FFE0B3] m-auto rounded-md"></div>
          <div className="w-[500px] h-[700px]  bg-white border-2 border-gray-200 m-auto absolute -top-3 -right-3 rounded-md">
            <div className="p-10">
              <h3 className="text-center text-4xl">Sign Up</h3>
              <div className="my-5">
                <p>Email</p>
                <input
                  className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="my-5">
                <p>Password</p>
                <input
                  className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
                  name="password"
                  type="Password"
                  required
                />
              </div>
              <div className="my-5">
                <p>Confirm Password</p>
                <input
                  className="border-2 border-gray-200 h-[55px] w-full rounded-md my-2"
                  type="Password"
                  name="password2"
                  required
                />
              </div>
              <div className="my-8">
                <button className="w-full font-semibold text-center  bg-[#FFE0B3] rounded-lg h-[55px]">
                  Sign Up
                </button>
                <p className="my-2 text-center">
                  New to Ema-john?
                  <button
                    onClick={() => setLogin(!login)}
                    className="text-[#FF9900] mx-2"
                  >
                    Already Have A Account
                  </button>
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="h-[2px] rounded-lg bg-slate-200 w-2/5"></div>
                <p className="text-center">or</p>
                <div className="h-[2px] rounded-lg bg-slate-200 w-2/5"></div>
              </div>
              <div className="my-8">
                <button
                  className="w-full font-semibold text-center  bg-white border-2 border-gray-200 rounded-lg h-[55px]"
                  onClick={googleLogIn}
                >
                  Sign Up with Gmail
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      {error && (
        <p className="md:w-1/2 mx-auto text-center mt-2 text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Login;
