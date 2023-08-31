import React from 'react'

export default function BottomNavbar() {
  return (
     <div className="flex flex-row w-2/3 max-lg:w-full">
          <div
            id="mf-btn-netbbok"
            className="flex flex-col w-1/4 text-white space-y-5 text-start"
          >
            <h2 className="font-medium text-lg text-white">Home</h2>
            <a href="#" className="font-medium text-md text-[#E7E7E7]">
              Home
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Community
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Events
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Contact
            </a>
          </div>
          <div
            id="mf-btn-netbbok"
            className="flex flex-col w-1/4 text-white space-y-5 text-start"
          >
            <h2 className="font-medium text-lg text-white">Resources</h2>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Blog
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              News
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Guides
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Help Center
            </a>
          </div>
          <div
            id="mf-btn-netbbok"
            className="flex flex-col w-1/4 text-white space-y-5 text-start"
          >
            <h2 className="font-medium text-lg text-white">Community</h2>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              NewsFeed
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Profile
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Friends
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Forums
            </a>
          </div>
          <div
            id="mf-btn-netbbok"
            className="flex flex-col w-1/4 text-white space-y-5 text-start"
          >
            <h2 className="font-medium text-lg text-white">Main links</h2>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Members
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Activity
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Groups
            </a>
            <a href="#" className="font-small text-md text-[#E7E7E7]">
              Private Group
            </a>
          </div>
        </div>
  )
}
