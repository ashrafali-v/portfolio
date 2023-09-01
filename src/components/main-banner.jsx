import React from 'react'
import { ReactComponent as Boyblue } from "../image/boy-blue.svg";
import { ReactComponent as BoyYellow } from "../image/boy-yellow.svg";
import { ReactComponent as Girl } from "../image/girl.svg";
import { ReactComponent as ChatYellow } from "../image/chat-yellow.svg";
export default function MainBanner() {
  return (
    <>
    <div className="w-2/4 max-lg:w-full max-lg:py-10 lg:py-32 flex flex-col top-52">
            <button
              id="mf-btn-netbbok"
              className="h-9 w-44 font-normal text-sm rounded-md border bg-[#eaeff8] text-[#217BF4]"
              type="button"
            >
              Netbook community
            </button>
            <div
              id="mf-tite"
              className="font-sans normal font-bold text-5xl leading-10 text-[#0A093D] mt-5 text-start"
            >
              Hi, This is Your Solutions For Community!
            </div>
            <div
              id="mf-desc"
              className="font-sans normal font-normal text-lg leading-7 text-[#656464] mt-5 text-start"
            >
              More than 2 billion people in over countries use socibook to stay
              in touch with friends & family.
            </div>
            <div className="space-x-[18px] flex flex-row max-sm:flex-col max-sm:space-y-3 mt-11 mr-auto">
              <button
                id="mf-btn-about"
                className="h-16 w-40 px-6 ml-auto font-normal text-sm rounded-xl border border-[#217BF4] bg-[#217BF4] text-white"
                type="button"
              >
                Aboout More
              </button>
              <button
                id="mf-btn-invite"
                className="h-16 w-40 px-6 ml-auto font-normal text-sm rounded-xl border border-[#217BF4] text-[#217BF4]"
                type="button"
              >
                Invite Friend
              </button>
            </div>
          </div>
          <div className="w-3/4 max-lg:w-full flex-col top-40 bg-[url('./image/vector-triangle.svg')] bg-no-repeat bg-center">
            <div className="flex flex-row">
              <Girl className="ml-auto mr-auto max-md:-ml-12 max-md:-mt-11" />
              <ChatYellow className="sm:mt-16 max-sm:mt-12 ml-auto mr-auto" />
              <BoyYellow className="md:mt-10 ml-auto mr-auto max-xl:mr-20 lg:mr-20 max-md:mr-0 max-[500px]:-mr-5 max-sm:-mt-3" />
            </div>
            <div className="flex flex-row ">
              <Boyblue className="ml-auto mr-auto" />
            </div>
          </div>
    </>
  )
}
