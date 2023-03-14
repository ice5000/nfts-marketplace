import React from "react";
import Card from "./Card";

function Main() {
  return (
    <div className="flex space-y-14 flex-col">
      <div className="border flex items-center justify-between border-yellow-400 dark:bg-[#041824] dark:border-yellow-400 p-4 rounded-md max-w-[1200px] ">
        <div className="flex flex-row space-x-10">
          <div className=" ">
            <img
              className="  ring-1 ring-slate-900 w-20  cursor-pointer  rounded-full mb-5 h-20"
              src="https://api.dicebear.com/5.x/avataaars/svg?seed=NellieMaxwell"
              alt="avatar"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-black dark:text-neutral-400 text-3xl font-bold">
              Nellie Maxwell
            </div>
            <div className="text-[#8c9db5] text-opacity-1">@NellieMaxwell</div>

            <div>
              An artist, a son, brother, writer, poet, a street photographer, a
              student, a teacher, and much more to be.
            </div>
            <div className="flex flex-row space-x-2 ">
              <div className="ring-1 ring-slate-900 w-10 h-510 rounded-full text-center ">
                I
              </div>
              <div className="ring-1 ring-slate-900 w-10 h-10 rounded-full text-center">
                T
              </div>
              <div className="ring-1 ring-slate-900 w-10 h-10 rounded-full text-center">
                F
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-24">
            <div>
              16
              <p className="font-bold">Followers</p>
            </div>
            <div>
              09 <p className="font-bold">Followers</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="border btn btn-outline  border-yellow-400 hover:bg-[#feb019] w-60 h-10 rounded-3xl">
              Share
            </button>
          </div>
          <div className="flex row justify-between">
            <img
              className="  ring-1 ring-slate-900 w-10 h-10 cursor-pointer  rounded-full mb-5 "
              src="https://api.dicebear.com/5.x/avataaars/svg?seed=FeliEnvisionArtNft"
              alt="avatar"
            />
            <div>Invited by @EnvisionArtNft</div>
          </div>
        </div>
      </div>
      <div className="border  space-x-16 justify-center font-extralight text-xl font- flex items-center   border-yellow-400 dark:bg-[#041824] dark:border-yellow-400 p-4 rounded-md max-w-[1200px]">
        <div>Created 4</div>
        <div>Collected</div>
        <div>Collections 4</div>
        <div>Offers Received</div>
        <div>Offers Made</div>
      </div>

      <Card />
    </div>
  );
}

export default Main;
