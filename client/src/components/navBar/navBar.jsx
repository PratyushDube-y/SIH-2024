import React, { useState, useEffect } from "react";
import "./navBar.css";
import ContactButton from "./contactButton";
import { FaBars } from 'react-icons/fa'; 
import { SlArrowDown } from "react-icons/sl";

const ResoursesOptions = [
  { title: "Option 1", description: "Here is the description" },
  { title: "Option 2", description: "Another description" },
  { title: "Option 1", description: "Here is the description" },
  { title: "Option 2", description: "Another description" },
  // Add more options as needed
];
const GuideOptions = [
  { title: "Guide 1", description: "Guide description" },
  { title: "Guide 2", description: "Another guide description" },
  // Add more options as needed
];

const NavBar = () => {
  const [dropDown, setDropDown] = useState('dropDownMenuHide');
  const [navClass, setNavClass] = useState('navZero');
  const [dropdownType, setDropdownType] = useState('');

  const handleMouseEnter = (type) => {
    setDropdownType(type);
    setDropDown('dropDownMenu');
  };

  const handleMouseLeave = () => {
    setDropDown('dropDownMenuHide');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavClass('navZero');
      } else {
        setNavClass('nav');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <nav>
        <div className={navClass}>
          {/* logo */}
          <div className="navLogo">CarbonTrack</div>

          {/* navOptions */}
          <div className="navOptions">
            <ul>
              <li>Home</li>
              <li 
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                Resources <SlArrowDown className="DownArrow" />
              </li>
              <li 
                onMouseEnter={() => handleMouseEnter('guide')}
                onMouseLeave={handleMouseLeave}
              >
                Guide <SlArrowDown className="DownArrow" />
              </li>
              <li>About Us</li>
            </ul>
          </div>

          {/* navContainer */}
          <div className="NavContactBtn">
            <div className="ContactButton">
              <ContactButton />
            </div>
          </div>
        </div>

        {/* nav Hamburger */}
        <nav className="NavhamBurger">
          <FaBars size={24} />
        </nav>

        {/* drop down */}
        <div 
          className={dropDown}
          onMouseEnter={() => handleMouseEnter(dropdownType)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropSection1">
            
          </div>
          <div className="dropSection2">
              <ul>
                {(dropdownType === 'resources' ? ResoursesOptions : GuideOptions).map((option, index) => (
                  <li key={index}>
                    <a href="#">{option.title}</a>
                  </li>
                ))}
              </ul>
          </div>
          <div className="dropSection3">
            
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
