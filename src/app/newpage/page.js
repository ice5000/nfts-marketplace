import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div>
      <div className="border border-yellow-400 max-w-[1200px] rounded-md p-4 flex flex-row space-x-10">
        <div className=" flex flex-col space-y-5">
          <img className="rounded-lg	w-96 h-96" src="/Human art.jpg" alt="art" />
          <div className="text-2xl text-yellow-500 font-semibold">History</div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col">
            <div className="text-3xl font-bold ">Human Art</div>
            <div className=" flex flex-row">
              Super_color{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-5 fill-green-600 ml-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <div className="text-xl">Current Price</div>
              <div className="flex flex-row space-x-2">
                <CurrencyDollarIcon className="w-6" />
                <h4 className="font-semibold text-2xl text-[#0ecb81]">
                  0.008 ETH ≈$26.69
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="text-xl">Auction ending in</div>
            <div className="text-4xl text-red-500">2:18:37</div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex justify-center ">
              <div className="border items-center space-x-2 justify-center  border-yellow-400 hover:bg-[#feb019] w-40 h-12 rounded-3xl flex-row flex">
                <svg
                  className="mt-2"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.6"
                    d="M5.5 27.5V26C5.503 25.752 5.588 24.5 7 24.5H21C21.248 24.503 22.5 24.589 22.5 26V27.5H5.5ZM16.937 22.257L21.187 18.007C22.181 17.013 21.36 16.07 21.187 15.894L18.653 13.36C18.653 13.36 24.853 8.68099 25.427 8.10699C26.012 7.52199 26.267 6.85799 26.184 6.13499C26.119 5.56599 25.835 4.98199 25.428 4.57599C25.173 4.34199 24.484 3.79999 23.6 3.79999C23.174 3.79999 22.534 3.93399 21.894 4.57399C20.689 5.77899 16.631 11.339 16.631 11.339L14.107 8.81399C13.788 8.49499 13.458 8.33999 13.1 8.33999C12.486 8.33999 11.996 8.81099 11.994 8.81399L7.744 13.064C6.749 14.06 7.572 15.01 7.744 15.187L14.81 22.253C15.145 22.581 15.479 22.74 15.831 22.74C16.435 22.74 16.934 22.26 16.937 22.257Z"
                    fill="#feb019"
                  ></path>
                  <path
                    opacity="0.2"
                    d="M7.756 15.193C7.1 14.496 7.1 13.702 7.746 13.056L11.976 8.82599C12.046 8.76199 12.526 8.33899 13.1 8.33899C13.229 8.33899 13.622 8.33899 14.108 8.80999L15.165 9.88099L8.811 16.247L7.756 15.193ZM16.943 22.254L21.183 18.014C21.829 17.368 21.829 16.574 21.17 15.874L20.117 14.836L13.751 21.19L14.815 22.253C15.142 22.58 15.474 22.739 15.829 22.739C16.292 22.74 16.704 22.455 16.943 22.254Z"
                    fill="var#555"
                  ></path>
                  <path
                    d="M25.78 4.21999C25.68 4.12999 24.82 3.29999 23.6 3.29999C23.08 3.29999 22.3 3.45999 21.54 4.21999C20.2 5.55999 17.17 9.73999 16.57 10.57L14.46 8.45999C13.99 7.98999 13.52 7.83999 13.1 7.83999C12.26 7.83999 11.64 8.45999 11.64 8.45999L7.39 12.71C5.98 14.12 7.39 15.54 7.39 15.54L14.46 22.61C14.94 23.08 15.41 23.24 15.83 23.24C16.66 23.24 17.29 22.61 17.29 22.61L21.54 18.36C22.95 16.95 21.54 15.54 21.54 15.54L19.42 13.42C20.22 12.84 24.43 9.80999 25.78 8.45999C27.33 6.90999 26.63 5.06999 25.78 4.21999ZM8.11 14.84C7.79 14.5 7.53 13.98 8.1 13.41L12.33 9.17999C12.44 9.07999 12.77 8.83999 13.1 8.83999C13.18 8.83999 13.42 8.83999 13.76 9.16999L14.46 9.87999L8.81 15.54L8.11 14.84ZM13.76 20.49L9.51 16.24L15.17 10.59L19.41 14.83L13.76 20.49ZM20.12 15.54L20.82 16.23C21.139 16.57 21.4 17.09 20.83 17.66L16.59 21.9C16.53 21.95 16.18 22.24 15.83 22.24C15.75 22.24 15.51 22.24 15.17 21.9L14.46 21.19L20.12 15.54ZM25.07 7.75999C23.66 9.16999 18.71 12.71 18.71 12.71L17.29 11.29C17.29 11.29 20.83 6.33999 22.24 4.92999C22.71 4.45999 23.19 4.29999 23.6 4.29999C24.441 4.29999 25.071 4.92999 25.071 4.92999C25.071 4.92999 26.49 6.33999 25.07 7.75999ZM21 24H7C5 24 5 26 5 26V28H23V26C23 24 21 24 21 24ZM22 27H6V26.01C6.01 25.55 6.19 25 7 25H20.99C21.45 25.01 22 25.2 22 26V27V27Z"
                    fill="#555"
                  ></path>
                </svg>
                <div> PLACE BID</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="border space-x-2 flex flex-row justify-center items-center border-yellow-400 hover:bg-[#feb019] w-40 h-12 rounded-3xl">
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

                <div>BUY NOW</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row text-center">
            <img
              className="  ring-1 ring-slate-900 w-10 h-10 cursor-pointer  rounded-full mb-5 "
              src="https://api.dicebear.com/5.x/avataaars/svg?seed=FreakypencilArtNft"
              alt="avatar"
            />
            <div className=" ">
              <div>Creator</div>
              <div className="font-bold  ">Freakypencil</div>
            </div>
          </div>
          <div>
            <img
              className="  ring-1 ring-slate-900 w-10 h-10 cursor-pointer  rounded-full mb-5 "
              src="https://api.dicebear.com/5.x/avataaars/svg?seed=FreakypencilArtNft"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
