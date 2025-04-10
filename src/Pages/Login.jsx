import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const BASE_URL = "https://third-assign-signup-login-backend.vercel.app";
  const navigate = useNavigate();

  const formSubmitHua = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);

      const email = formData.get("email");
      const password = formData.get("password");

      const response = await axios.post(
        `${BASE_URL}/api/v1/login`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      const { token, user } = response?.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success('You have Successfully Logged in.')
      navigate('/')
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <div className="flex justify-center items-center mx-4 md:mx-16 xl:mx-[92px]  center h-[calc(100vh-105px)] sm:h-[calc(100vh-133px)]">
      <form
        onSubmit={formSubmitHua}
        className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full"
      >
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Login
        </h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-[#ff4949] hover:duration-300 rounded text-lg">
          Login
        </button>
        <p className="text-xs text-gray-500 mt-3">
          {/* Alread have an account?  */}
          Not have an account? <Link to="/signup" className="hover:text-primary duration-200">Signup</Link>
        </p>
      </form>
    </div>
  );
}
