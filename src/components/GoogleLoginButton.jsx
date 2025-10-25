import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router";

const GoogleLoginButton = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Google user:", user);

        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error("Google login error:", err);
      });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 rounded-lg transition"
    >
      <FcGoogle size={24} />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
