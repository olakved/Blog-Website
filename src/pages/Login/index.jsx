import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import bgImg from "../../assets/signupBg.jpg";
import { dbUsersData, loginMutation } from "../../utils/hooks/dbUsersData";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { postingUrl } from "../../utils/url";
import { toastObject } from "../../utils/helper";

function LoginPage() {
  // const patternCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { isLoading, error, data } = dbUsersData();
  // console.log(data);

  const { newUserData, mutate, newUserLoading } = loginMutation("allUsers");

  const formSubmit = (formData) => {
    if (formData.email === "" || formData.password === "") {
      toast.warning("Form field cannot be empty", toastObject());
      return;
    }

    const findObject = data.some(
      (objectData) =>
        objectData.email === formData.email &&
        objectData.password === formData.password
    );

    if (findObject === true) {
      toast.success("login successful", toastObject());
      navigate("/profile");
      return;
    }
    if (findObject === false) {
      toast.error("enter correct email / password", toastObject());
      return;
    }

    mutate();
  };

  return (
    <div className="flex justify-center items-center w-full sm:h-screen">
      <div className="w-full max-h-screen relative blur-sm overflow-hidden">
        <img src={bgImg} alt="" className="relative sm:h-screen" />
        <div className="bg-black/40 w-full h-full absolute top-0"></div>
      </div>
      <div className="bg-green-200/20  w-[400px] mt-[50px] flex items-center flex-col absolute">
        <h1 className="text-neutral-50 mt-[30px] text-2xl font-bold">
          LOGIN HERE
        </h1>
        <div>
          <form className="p-5 mt-5 " onSubmit={handleSubmit(formSubmit)}>
            <input
              className="p-2 w-[100%] rounded-md outline-none"
              type="text"
              placeholder="Email"
              name="email"
              {...register("email")}
              autoComplete="off"
            />
            <input
              className="p-2 mt-4 w-[100%] rounded-md outline-none"
              type="password"
              placeholder="Password"
              name="password"
              {...register("password")}
              autoComplete="off"
            />
            <div className="flex items-center mt-4">
              <input className="mr-2" type="checkbox" />
              <p className="text-white">Remember Me</p>
            </div>
            <button
              className="mt-4 bg-[#1a7b42] text-white w-[100%] p-2 rounded-md text-sm"
              type="submit"
            >
              LOGIN
            </button>
            <i className="mt-6 text-white text-sm">
              <Link to="/">forgot password</Link>
            </i>

            <p className="mt-6 text-white text-sm">
              Don't have an Account? Signup now
            </p>
            <Link to={"/signup"}>
              <button
                className="mt-2 bg-white text-dark-green hover:bg-light-green hover:text-white w-full p-2 rounded-md text-sm"
                type="submit"
              >
                Signup
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
