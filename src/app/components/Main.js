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
        <div className="flex flex-row">
          <svg
            width="28"
            height="28"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="me-2"
          >
            <path
              d="M14.3889 14.974L3.35809 26.0047L14.7424 37.389L25.7732 26.3583L14.3889 14.974Z"
              fill="#feb019"
            ></path>
            <path
              opacity="0.8"
              d="M14.8 37.4L13.4 36L23 26.4L11.6 15L2.00001 24.6L0.600006 23.2L14.9 8.9C16 7.8 18 7.8 19.1 8.9L21.8 11.6C23.4 9.5 27.4 4.4 28.5 3.3C29.4 2.5 30.5 2 31.6 2C32.8 2 33.9 2.5 34.7 3.3C35.5 4.1 36 5.2 36 6.4C36 7.6 35.5 8.7 34.7 9.5C33.6 10.6 28.5 14.6 26.4 16.2L29.1 18.9C29.7 19.5 30 20.2 30 21C30 21.8 29.7 22.6 29.1 23.1L14.8 37.4ZM13 13.6L24.4 25L27.7 21.7C28.1 21.3 28.1 20.7 27.7 20.3L23.4 16L24.3 15.3C26.5 13.6 32.3 9.1 33.3 8C33.8 7.6 34 7 34 6.4C34 5.8 33.8 5.2 33.3 4.7C32.4 3.8 30.9 3.8 30 4.7C29 5.7 24.4 11.6 22.7 13.7L22 14.6L17.7 10.3C17.3 9.9 16.7 9.9 16.3 10.3L13 13.6ZM12 34.6L10.6 33.2L16.6 27.2L18 28.6L12 34.6ZM6.40001 29L5.00001 27.6L11 21.6L12.4 23L6.40001 29Z"
              fill="#555"
            ></path>
          </svg>

          Created 4
        </div>
        <div className="flex flex-row">
          <svg
            width="28"
            height="28"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="me-2"
          >
            <path
              d="M34.81 12L29.66 24H9.61L9.94 23.01L5.81 12H34.81Z"
              fill="#feb019"
            ></path>
            <path
              opacity="0.8"
              d="M29.66 24L36.52 8H8.5L9.26 10H33.48L28.34 22H11.69L5.69 6H0V8H4.31L9.94 23.01L9.61 24L8.05 28.68C7.95 28.99 8 29.32 8.19 29.58C8.38 29.85 8.68 30 9 30H12C12 32.21 13.79 34 16 34C18.21 34 20 32.21 20 30H24C24 32.21 25.79 34 28 34C30.21 34 32 32.21 32 30C32 27.79 30.21 26 28 26C26.52 26 25.23 26.8 24.54 28H19.46C18.77 26.8 17.48 26 16 26C14.52 26 13.23 26.8 12.54 28H10.39L11.72 24H29.66ZM28 28C29.1 28 30 28.9 30 30C30 31.1 29.1 32 28 32C26.9 32 26 31.1 26 30C26 28.9 26.9 28 28 28ZM16 28C17.1 28 18 28.9 18 30C18 31.1 17.1 32 16 32C14.9 32 14 31.1 14 30C14 28.9 14.9 28 16 28Z"
              fill="#555"
            ></path>
          </svg>

          Collected
        </div>
        <div className="flex flex-row">
          <svg
            width="28"
            height="28"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="me-2"
          >
            <path
              d="M18.2 23.2C20.9 21.2 24.9 18 27 18C29.1 18 32.5 20.9 34 22.3C34.3 22.6 35.1 23.3 36 24.2V14H12C12 15.1 11.1 16 10 16C8.9 16 8 15.1 8 14H6V28C10 28 13.8 26.6 17.6 23.6L18.2 23.2Z"
              fill="#feb019"
            ></path>
            <path
              opacity="0.8"
              d="M10 10C7.8 10 6 11.8 6 14C6 16.2 7.8 18 10 18C12.2 18 14 16.2 14 14C14 11.8 12.2 10 10 10ZM10 16C8.9 16 8 15.1 8 14C8 12.9 8.9 12 10 12C11.1 12 12 12.9 12 14C12 15.1 11.1 16 10 16ZM34 8H22.3C20.5 8 20.1 7.6 18.5 6C17.2 4.6 16 4 14.1 4H4C2.9 4 2 4.9 2 6V28H6C10 28 13.8 26.6 17.6 23.6L18.2 23.2C20.9 21.2 24.9 18 27 18C29.1 18 32.5 20.9 34 22.3V30H2C2 31.1 2.9 32 4 32H34C35.1 32 36 31.1 36 30V10C36 8.9 35.1 8 34 8ZM34 19.6C32.2 18.1 29.3 16 27 16C24.2 16 20.2 19.1 17 21.6L16.4 22C12.9 24.7 9.5 26 6 26H4V6C4 6 13.2 6 14.2 6C15.3 6 16.1 6.2 17.1 7.3C18.7 9.1 19.7 10 22.3 10C24.5 10 24.2 10 34 10V19.6Z"
              fill="#555"
            ></path>
          </svg>

          Collections 4
        </div>
        <div className="flex flex-row">
          <svg
            width="28"
            height="28"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="me-2"
          >
            <path
              d="M19 30C25.0751 30 30 25.0751 30 19C30 12.9249 25.0751 8 19 8C12.9249 8 8 12.9249 8 19C8 25.0751 12.9249 30 19 30Z"
              fill="#feb019"
            ></path>
            <path
              opacity="0.8"
              d="M2 19C2 9.626 9.626 2 19 2H20V20.657L24.177 16.48L25.591 17.894L19 24.485L12.409 17.894L13.823 16.48L18 20.657V4.033C10.194 4.55 4 11.064 4 19C4 27.271 10.729 34 19 34C27.271 34 34 27.271 34 19C34 11.797 28.871 5.715 22 4.316V2.275C29.989 3.7 36 10.696 36 19C36 28.374 28.374 36 19 36C9.626 36 2 28.374 2 19Z"
              fill="#555"
            ></path>
          </svg>

          Offers Received
        </div>
        <div className="flex flex-row">
          <svg
            width="28"
            height="28"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="me-2"
          >
            <path
              d="M19 30C25.0751 30 30 25.0751 30 19C30 12.9249 25.0751 8 19 8C12.9249 8 8 12.9249 8 19C8 25.0751 12.9249 30 19 30Z"
              fill="#feb019"
            ></path>
            <path
              opacity="0.8"
              d="M19 2C28.374 2 36 9.626 36 19C36 27.304 29.989 34.3 22 35.725V33.684C28.871 32.286 34 26.204 34 19C34 10.729 27.271 4 19 4C10.729 4 4 10.729 4 19C4 26.936 10.194 33.45 18 33.967V17.343L13.823 21.52L12.409 20.106L19 13.515L25.591 20.106L24.177 21.52L20 17.343V36H19C9.626 36 2 28.374 2 19C2 9.626 9.626 2 19 2Z"
              fill="#555"
            ></path>
          </svg>

          Offers Made
        </div>
      </div >

      <Card />
    </div>
  );
}

export default Main;
