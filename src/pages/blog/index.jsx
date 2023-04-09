import React from "react";
import blogImg from "../../assets/profileImg.jpg";
import arrowUp from "../../assets/arrowUp.png";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function BlogPage() {
  const { isLoading, error, data } = useQuery(["blopposts"], () =>
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=982bb4f800184deab23f0a93423b0aea"
      )
      .then((res) => res.data)
  );
  console.log(data);

  return (
    <div className="p-20 md:px-5">
      <h1 className="border-b-2 py-3 mb-3">Welcome to our Blog Page</h1>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Error while fetching data</p>
      ) : data ? (
        <div className="grid grid-cols-3 gap-5 lg:grid-cols-2 lg:gap-2 lg:gap-y-6 md:grid-cols-2 md:gap-2 md:gap-y-6 sm:grid-cols-1">
          {data?.articles?.map((item) => (
            <div key={item?.id} className="">
              <div className=" w-[350px] md:w-full">
                <div className="h-[220px]">
                  <img
                    src={item?.urlToImage || blogImg}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-3 mb-2">
                  <span className="mr-2 text-sm font-bold">
                    {item?.author || `News Source: ${item?.source?.name}`}
                  </span>
                  <span className="mr-2 font-bold ">.</span>
                  <span className="text-sm font-bold">{item?.publishedAt}</span>
                </p>

                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-lg">{item?.title}</p>
                  <img src={arrowUp} alt="" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className="mt-3 flex gap-x-2">
                  <p className="border-2 border-gray-800 rounded-lg px-2 text-[12px] font-bold">
                    Product
                  </p>
                  <p className="border-2 border-gray-800 rounded-lg px-2 text-[12px] font-bold">
                    Research
                  </p>
                  <p className="border-2 border-gray-800 rounded-lg px-2 text-[12px] font-bold">
                    Frameworks
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default BlogPage;
