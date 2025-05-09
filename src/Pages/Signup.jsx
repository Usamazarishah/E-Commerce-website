import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();
  const BASE_URL = 'https://third-assign-signup-login-backend.vercel.app'

  const formSubmitHua = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await axios.post(
        `${BASE_URL}/api/v1/signup`,
        {
          name: name,
          email: email,
          password: password,
        },
        { withCredentials: true },
      );
      toast.success("You have successfully registered.")
      navigate('/login')
    } catch (error) {
      console.log("error ", error);
      toast.error(error.response?.data?.message || "unknown error")
    }
  };

  return (
    <div className="flex justify-center items-center mx-4 md:mx-16 xl:mx-[92px]  center h-[calc(100vh-105px)] sm:h-[calc(100vh-133px)]">
      <form
        onSubmit={formSubmitHua}
        className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full"
      >
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Signup / Create account
        </h2>

        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

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
          Signup
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Literally you probably haven't heard of them jean shorts.
        </p>
      </form>
    </div>
  );
}