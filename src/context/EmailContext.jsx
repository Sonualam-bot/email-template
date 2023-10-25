import { createContext, useState } from "react";
import { emailData } from "../Utils/Utils";

export const EmailContext = createContext();

export const EmailContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState("");
  const [dropdownValue, setDropDownValue] = useState("");

  const handleDropDownValue = (e) => {
    setDropDownValue(e.target.value);
  };

  const handleSeachInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckBoxValue = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedCheckboxes(value);
    } else {
      setSelectedCheckboxes("");
    }
  };

  const filterByCheckbox =
    selectedCheckboxes === ""
      ? [...emailData]
      : [...emailData].filter((template) =>
          template.type.toLowerCase().includes(selectedCheckboxes.toLowerCase())
        );

  let sortedData = [...filterByCheckbox];

  if (dropdownValue === "popular") {
    sortedData = sortedData?.filter((template) => template.premium === true);
  } else if (dropdownValue === "categories") {
    sortedData?.sort((a, b) => b.title.localeCompare(a.title));
  }

  const filterBySearch = [...sortedData].filter((templates) =>
    templates.title.toLowerCase().includes(search.toLowerCase())
  );

  const announcement = [...filterBySearch]?.filter(
    (email) => email.type === "announce"
  );

  const educateInformTemplate = [...filterBySearch]?.filter(
    (email) => email.type === "educateInform"
  );

  const invitationsTemplate = [...filterBySearch]?.filter(
    (email) => email.type === "invitations"
  );

  const occasionsTemplate = [...filterBySearch]?.filter(
    (email) => email.type === "occassions"
  );

  const value = {
    announcement,
    educateInformTemplate,
    invitationsTemplate,
    occasionsTemplate,
    handleSeachInput,
    handleCheckBoxValue,
    handleDropDownValue,
  };

  return (
    <>
      <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
    </>
  );
};
