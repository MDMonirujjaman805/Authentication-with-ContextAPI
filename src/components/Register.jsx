import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegisterBtn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.number.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, phone, email, password);

    // crateUser........
    createUser(email, password,name,phone)
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
        Register Now!
      </h2>
      <form onSubmit={handleRegisterBtn}>
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        {/* Phone number */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Phone Number
          </label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Phone Number"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Email Address */}
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
            placeholder="Email"
            required
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
            placeholder="password"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
        >
          Register
        </button>
      </form>

      {/* Toggle login and register */}
      <p>
        Alreday have an Account, Please{" "}
        <NavLink to="/login" className="underline cursor-pointer ml-5">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
