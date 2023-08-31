import React from 'react'
import { ReactComponent as Coding } from "../image/coding.svg";
import { ReactComponent as Discussion } from "../image/discussion.svg";
import { ReactComponent as Lan } from "../image/lan-cable.svg";

export default function WhyJoinUs() {
  return (
    <div
          id="id1"
          className="flex flex-row lg:space-x-16 max-xl:flex-col w-full px-32 h-auto mx-auto md-xl:space-x-16 max-xl:mb-20"
        >
          <div
            id="id2"
            className="w-2/4 max-xl:w-full py-32 flex flex-col top-52"
          >
            <p
              id="sf-btn-netbbok"
              className="text-[#217BF4] font-normal text-sm text-start"
            >
              Whats netbooks?
            </p>
            <div
              id="sf-tite"
              className="font-sans normal font-bold text-5xl leading-10 text-[#0A093D] mt-5 text-start"
            >
              Why Join to Notebook Social Network?
            </div>
            <div
              id="sf-desc"
              className="font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start"
            >
              Recent surveys have indicated that small businesses recognise the
              need they have to connect with consumer.
            </div>
            <div className="mt-11 mr-auto">
              <li id="sf-groups" className="flex items-center">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="#217BF4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Groups
              </li>
              <li id="sf-messages" className="flex items-center">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="#217BF4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Messages
              </li>
              <li id="sf-share" className="flex items-center">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="#217BF4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Share
              </li>
            </div>
          </div>
          <div className="w-3/4 max-xl:w-full sm:space-x-5 flex flex-row max-sm:flex-col ml-auto mr-auto sm:ml-0 max-[400px]:-ml-20 max-[500px]:-ml-14 max-xl:-mx-auto max-sm:space-y-2">
            <Discussion className="xl:mr-10 mt-10 max-[500px]: w-64" />
            <div className="flex flex-col space-y-5 ">
              <Coding className="md:ml-auto mr-auto sm:ml-0 max-[500px]:w-64" />
              <Lan className="md:ml-auto mr-auto sm:ml-0 max-[500px]:w-64" />
            </div>
          </div>
        </div>
  )
}
