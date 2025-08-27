import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleLoginBtn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // Sign In User.......
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-black rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Login Now!
      </h2>
      <form onSubmit={handleLoginBtn}>
        {/* Email address */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        {/* password */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <Link className="cursor-pointer underline">Forgot Password</Link>
        </div>
        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
        >
          Log In
        </button>
      </form>

      {/* Toggle login and register */}
      <p>
        Create an Account, Please{" "}
        <NavLink to="/register" className="underline cursor-pointer ml-5">
          Register
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
