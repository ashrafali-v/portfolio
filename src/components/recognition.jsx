import React from 'react'
import { ReactComponent as People } from "../image/people.svg";
import { ReactComponent as Trophy } from "../image/trophy.svg";
import { ReactComponent as RedEllipse } from "../image/red-ellipse.svg";
import { ReactComponent as Star } from "../image/star.svg";

export default function Recognition() {
  return (
     <div class="w-full flex flex-row max-lg:flex-col max-lg:space-y-20 px-32 max-sm:px-5 lg:space-x-10">
          <div class="w-1/3 max-xl:w-full">
            <div class="w-full text-start bg-white border border-gray-200 rounded-lg shadow">
              <div class="p-5 space-y-5">
                <div className="flex flex-row">
                  <Star />
                  <a href="#" id="tf-init-title">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 ml-2">
                      4.8 Rating
                    </h5>
                  </a>
                </div>
                <div id="tf-title" className="flex flex-row space-x-1">
                  <People />
                  <div className="inline-flex items-center text-base font-semibold text-[#217BF4]">
                    +836K
                  </div>
                  <div className="inline-flex items-center text-base">
                    Members
                  </div>
                </div>
                <div id="tf-desc" className="flex">
                  More than 2 billion we people over countries use socibooks we
                  to stay in touch with friends.
                </div>
                <div class="flex items-center justify-between">
                  <a
                    id="tf-link"
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#217BF4]"
                  >
                    Join Our Community
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/3 max-xl:w-full">
            <div class="w-full text-start bg-white border border-gray-200 rounded-lg shadow">
              <div class="p-5 space-y-5">
                <div id="tfs-init-title" className="flex flex-row">
                  <Trophy />
                  <div className="inline-flex items-center text-base ml-2">
                    Awwwards
                  </div>
                </div>
                <div id="tfs-title" className="flex flex-row space-x-1">
                  <RedEllipse />
                  <div className="items-center text-base">
                    Best of <span className="inline-flex items-center text-base font-semibold text-[#217BF4]">2021</span> on Github
                  </div>
                </div>
                <div id="tfs-desc" className="flex">
                  More than 2 billion we people over countries use socibooks we
                  to stay in touch with friends.
                </div>
                <div id="tfs-link" class="flex items-center justify-between">
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#4A4A56]"
                  >
                    Go to Awards
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-2/3 max-xl:w-full">
            <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
              <div class="p-5 space-y-5 text-start">
                <a
                  id="tft-init-title"
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#217BF4]"
                >
                  Our Achievement
                </a>
                <div
                  id="tft-title"
                  className="font-sans normal break-words font-bold text-4xl leading-10 text-[#0A093D] mt-5 text-start"
                >
                  We are Connecting You The Digital Life.
                </div>
                <div
                  id="tft-desc"
                  className="font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start"
                >
                  The scope the Social Media becomes crucial Is helps the
                  business to directly engage with their needs and wants
                </div>
                <div id="tft-btn" class="flex items-center justify-between">
                  <button class="inline-flex h-14 drop-shadow-md items-center px-3 py-2 text-sm rounded-xl font-medium text-center text-white bg-[#217BF4]">
                    Discover me
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
