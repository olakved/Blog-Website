import React from "react";
import {
  dbUsersData,
  deleteMutation,
  postMutation,
} from "../../utils/hooks/dbUsersData";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { postingUrl } from "../../utils/url";
import { DELETE_USER_URL } from "../../utils/apiUrl";
import { toast } from "react-toastify";
import { toastObject } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

function Schedule() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const { userData, mutate, userLoading } = postMutation("allUsers");
  const { mutate: deleteMutate, deleteLoading } = deleteMutation("allUsers");

  const { isLoading, error, data } = dbUsersData();

  const handleDelete = () => {
    deleteMutate({ url: DELETE_USER_URL(data[0].id) });
  };

  const formSubmit = (formData) => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.phone === ""
    ) {
      toast.warning("Form cannot be empty", toastObject());
      return;
    }

    const findObject = data.some(
      (objectData) => objectData.email === formData.email
    );

    if (findObject === true) {
      toast.error("User already exist", toastObject());
      return;
    }

    const userObject = {
      id: uuidv4(),
      ...formData,
    };
    mutate({ url: postingUrl, data: userObject });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error Fetching data</p>
      ) : data ? (
        <div className="p-10">
          <div className="w-[450px]">
            <form action="" onSubmit={handleSubmit(formSubmit)}>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="name"
                  className=" p-2 rounded-lg outline-none border-2"
                />
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="email"
                  className=" p-2 rounded-lg outline-none border-2 mt-3"
                />
                <input
                  type="text"
                  name="phone"
                  {...register("phone")}
                  placeholder="phone"
                  className=" p-2 rounded-lg outline-none border-2 mt-3"
                />
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                  placeholder="password"
                  className=" p-2 rounded-lg outline-none border-2 mt-3"
                />
              </div>
              <button className=" mt-4 py-2 px-4 bg-light-green text-white text-lg rounded-lg">
                Save
              </button>
            </form>
            <button
              type="submit"
              onClick={handleDelete}
              className=" mt-4 py-2 px-4 bg-[red] text-white text-lg rounded-lg"
            >
              Delete
            </button>
          </div>
          <div>
            {data?.map((people, index) => (
              <div key={index} className="mt-5">
                <p className="mb-3">{people?.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Schedule;
