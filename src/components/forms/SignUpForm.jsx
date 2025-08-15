import { useState } from "react";
import { useNavigate } from "react-router";


const SignUpForm = () => {

//   const dispatch = useDispatch();
    const navigate = useNavigate();

  const [data, setData] = useState({ name: "", email: "", password: ""});

  const handleSubmit = async(e) => {
    e.preventDefault();
    // try {
    //   const response = await dispatch(userRegistered(data)).unwrap();
    //   console.log(response);
    //   if(response.success) {
    //     navigate("/auth/login");
    //   };
    // } catch (error) {
    //   console.log(error);
    // };
  };

  return (
    <form className="pt-4" autoComplete="off">
      <h2 className="text-4xl font-bold mb-4 text-purple-700 dark:text-purple-400">
        Register
      </h2>
      <div>
        <label
          htmlFor="name"
          className="block mb-2 font-medium text-sm text-gray-900 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="enter your name"
          autoComplete="name"
          name="name"
          required
          value={data.name}
          onChange={(e) => setData(prev => ({...prev, name: e.target.value}))}
          className="block mb-2 font-medium text-sm w-full rounded-lg p-2.5 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-700"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 font-medium text-sm text-gray-900 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          name="email"
          required
          value={data.email}
          onChange={(e) => setData(prev => ({...prev, email: e.target.value}))}
          placeholder=" enter your email"
          className="block mb-2 font-medium text-sm w-full rounded-lg p-2.5 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-700"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 font-medium text-sm text-gray-900 dark:text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          autoComplete="password"
          name="password"
          required
          value={data.password}
          onChange={(e) => setData(prev => ({...prev, password: e.target.value}))}
          placeholder="your password"
          className="block mb-2 font-medium text-sm w-full rounded-lg p-2.5 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-700"
        />
      </div>
      <button onClick={handleSubmit} type="button" className="my-2 text-white font-semibold px-3 py-2 rounded-lg bg-purple-600 cursor-pointer">Sign Up</button>
      <p className="my-2 font-medium text-gray-900 dark:text-gray-300">Already Registered ? <span onClick={() => navigate("/auth/login")} className="text-blue-600 dark:text-blue-300 font-semibold underline underline-offset-6 decoration-wavy decoration-1 cursor-pointer">Sign In</span></p>
    </form>
  )
};

export default SignUpForm;