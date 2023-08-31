import React from 'react';

const Navbar=(props)=>
{
  return (
   <div className="flex flex-row space-x-5">
              <a id="menu-home" href="">
                Home
              </a>
              <a id="menu-community" href="">
                Community
              </a>
              <a id="menu-blog" href="">
                Blog
              </a>
              <a id="menu-events" href="">
                Events
              </a>
      </div>
  );
}
 
export default Navbar;