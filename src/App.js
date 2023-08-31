import "./App.css";
import React, { useState } from "react";
import { ReactComponent as Logo } from "./image/logo.svg";
import { ReactComponent as EmailForm } from "./image/email-form.svg";
import { ReactComponent as FavIcon } from "./image/fav-icon.svg";
import Search from "./components/search";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import MobileNavbar from "./components/mobile-navbar";
import MainBanner from "./components/main-banner";
import WhyJoinUs from "./components/why-join-us";
import Recognition from "./components/recognition";
import BottomNavbar from "./components/bottom-navbar";

function App() {
  //const [key, setKey] = useState("");
  const [matches, setMatches] = useState([]);
  const [keywords, setkeyWords] = useState([
    { id: "menu-home", value: "Home" },
    { id: "menu-community", value: "Community" },
    { id: "menu-blog", value: "Blog" },
    { id: "menu-events", value: "Events" },
    { id: "menu-login", value: "Log in" },

    { id: "mf-btn-netbbok", value: "Netbook community" },
    { id: "mf-tite", value: "Your Solutions For Community!" },
    {
      id: "mf-desc",
      value:
        "More than 2 billion people in over countries use socibook to stay in touch with friends & family.",
    },
    { id: "mf-btn-about", value: "About More" },
    { id: "mf-btn-invite", value: "Invite Friend" },

    { id: "sf-btn-netbbok", value: "Whats Netboks?" },
    { id: "sf-tite", value: "Why Join to Netbook Social Network?" },
    {
      id: "sf-desc",
      value:
        "Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.",
    },
    { id: "sf-li-groups", value: "Groups" },
    { id: "sf-li-Messages", value: "Messages" },
    { id: "sf-li-groups", value: "Share" },

    { id: "tf-init-title", value: "4.8 rating" },
    { id: "tf-tite", value: "+836k Members" },
    {
      id: "tf-desc",
      value:
        "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
    },
    { id: "tf-link", value: "Join Our Community" },

    { id: "tfs-init-title", value: "Awwwards" },
    { id: "tfs-tite", value: "Best of 2021 on Github" },
    {
      id: "tfs-desc",
      value:
        "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
    },
    { id: "tfs-link", value: "Go To Awards" },

    { id: "tft-init-title", value: "Our Achievement" },
    { id: "tft-tite", value: "We are Connecting You The Digital Life." },
    {
      id: "tft-desc",
      value:
        "The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.",
    },
    { id: "tft-btn", value: "Discover me" },
  ]);

  function handleSearch(e, key) {
    e.preventDefault();
    clearHighlight();
    var tempArr = [];
    console.log(key);
    if (!key) return false;
    keywords.forEach((o) => {
      //making the search case in sensitive
      if (o.value.toLowerCase().includes(key.toLowerCase())) {
        tempArr.push(o.id);
      }
    });
    setMatches(tempArr);
    tempArr.length > 0 && keywordHighlight(tempArr);
  }
  function keywordHighlight(result) {
    result.forEach((res) => {
      document.getElementById(res).style.background = "yellow";
    });
    document.getElementById(result[0]).scrollIntoView();
  }
  function clearHighlight() {
    matches.forEach((res) => {
      document.getElementById(res).style.background = "white";
    });
  }

  /*handling burger menu action*/
  function handleOpen() {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");
    if (burger.length && menu.length) {
      menu[0].classList.toggle("hidden");
    }
  }
  function handleClose() {
    const menu = document.querySelectorAll(".navbar-menu");
    const close = document.querySelectorAll(".navbar-close");
    if (close.length) {
      menu[0].classList.toggle("hidden");
    }
  }
  /*handling burger menu action*/
  return (
    <div className="App w-full" id="main">
      <div className="flex flex-col w-full h-auto bg-gradient-to-r from-white to-blue-100 ">
        <div className="flex min-[860px]:hidden">
          <button
            className="navbar-burger items-center text-blue-600 p-3"
            onClick={handleOpen}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden min-[860px]:flex flex-row justify-between p-4">
          <div className="flex flex-row lg:space-x-20 md:space-x-10 sm:space-x-5 leading-7">
            <div>
              <Logo />
            </div>
            <Navbar />
          </div>
          <div className="flex-row-reverse text-center space-x-2 ">
            <Search handleSubmit={handleSearch} handleClear={clearHighlight} />
          </div>
        </div>
        <div className="navbar-menu relative z-50 hidden">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
              <a class="mr-auto text-3xl font-bold leading-none" href="#">
                <FavIcon />
              </a>
              <button class="navbar-close" onClick={handleClose}>
                <svg
                  class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <MobileNavbar />
            <div class="mt-auto">
              <div class="pt-6">
                <Search handleSubmit={handleSearch} handleClear={clearHighlight} />
                <button
                  className="login-button h-12 w-24 px-6 font-semibold text-sm rounded-2xl drop-shadow-lg bg-[#217BF4] text-white"
                  type="button"
                >
                  Log in
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div className="w-full h-0 opacity-10 border border-solid my-3 border-[#217BF4]"></div>
        <div className="flex flex-row max-lg:flex-col w-full lg:px-20 md:px-10 sm:px-5 min-[320px]:px-5 h-auto mx-auto md-xl:space-x-16">
          <MainBanner />
        </div>
      </div>
      <div className="flex flex-col w-full bg-gradient-to-r bg-white mb-28 max-xl:mt-0 xl:mt-28">
        <WhyJoinUs />
        <Recognition/>
      </div>
      <div className="flex flex-row max-lg:flex-col sm:h-auto max-[640px]:h-auto w-full h-96 bg-[#2B2B39] px-10 py-10">
        <BottomNavbar/>
        <div className="flex flex-col w-1/3 mb-10 text-white space-y-5 sm:ml-5 max-lg:w-full">
          <div
            id="mf-btn-netbbok"
            className="font-sans normal font-semibold text-lg leading-7 text-white mt-5 text-start max-lg:text-center"
          >
            Subscribe Cirkle Newsletter
          </div>
          <div
            id="mf-btn-netbbok"
            className="font-sans normal font-normal text-lg leading-7 text-white mt-5 text-start max-lg:text-center"
          >
            Subscribe to be the first one to know about updates. Enter your
            email
          </div>
          <EmailForm className="max-lg:ml-auto mr-auto" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;