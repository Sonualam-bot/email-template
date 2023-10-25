import "../Css/Homepage.css";

import { AiOutlineSearch } from "react-icons/ai";
import { Announcement } from "../components/Announcement";
import { EducateNInform } from "../components/EducateNInform";
import { Invitation } from "../components/Invitation";
import { Occassions } from "../components/Occasions";
import { useContext } from "react";
import { EmailContext } from "../context/EmailContext";

export const Homepage = () => {
  const { handleSeachInput, handleCheckBoxValue, handleDropDownValue } =
    useContext(EmailContext);
  return (
    <>
      <div className="workflow-homepage">
        <div className="filters">
          <div className="categories">
            <p className="typography">Categories</p>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox1"
                value="announce"
                onChange={handleCheckBoxValue}
              />{" "}
              <label htmlFor="checkbox1">Announcement</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox2"
                value="educateInform"
                onChange={handleCheckBoxValue}
              />{" "}
              <label htmlFor="checkbox2">Educate & Inform</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox3"
                value="invitations"
                onChange={handleCheckBoxValue}
              />{" "}
              <label htmlFor="checkbox3">Invitation</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox4"
                value="occassions"
                onChange={handleCheckBoxValue}
              />{" "}
              <label htmlFor="checkbox4">Ocassions</label>
            </div>
          </div>
        </div>

        <div className="workflows">
          <div className="top-Actions">
            <div className="search-bar">
              <div className="input-frame">
                <input
                  placeholder="search email templates"
                  onChange={handleSeachInput}
                />
                <AiOutlineSearch />
              </div>
            </div>

            <div className="dropdownfilter">
              <div className="sortFrame">
                <p className="sortTextHeader">Sort By:</p>
                <select
                  className="sortTextAction"
                  onChange={handleDropDownValue}
                >
                  <option value="recent">Recent</option>
                  <option value="popular">Popular</option>
                  <option value="categories">Categories (&darr;) </option>
                </select>
              </div>
            </div>
          </div>

          <Announcement />
          <EducateNInform />
          <Invitation />
          <Occassions />
        </div>
      </div>
    </>
  );
};
