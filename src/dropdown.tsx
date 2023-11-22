
import React, { useEffect } from "react";
import { useState } from "react";
import "./dropdown.css";


export interface DropdownProps {
  title: string;
  children: {
    name: string;
    keys: string;
  }[];
  onChange: (selectedOption: string) => void;
  size?:string;
  color?:string;
  backgroundColor?:string;
  borderColor?:string;
  borderRadius?:string;
  backgroundColorItem?:string;
  colorItem?:string;
  backgroundColorItemHover?:string;
}


export const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const [current_option, setCurrentOption] = useState(
    props.children.length > 0 ? props.children[0].name : ""
  );

  const dropdownStyle = {
    color: props.color || "white", 
    fontSize: props.size || "16px",
    backgroundColor: props.backgroundColor || "white",
    borderColor: props.borderColor || "#0056b3",
    borderRadius: props.borderRadius || "5px", 
  };

  const dropdownItemStyle = {
    color: props.colorItem || "white", 
    backgroundColor: props.backgroundColorItem || "#3f8cde",
    backgroundColorItemHover: props.backgroundColorItemHover || "#b95959",
  };


  const toggle = () => setOpen(!open);

  const handleOptionSelect = (optionName: string) => {
    setCurrentOption(optionName);
    setOpen(false);
    props.onChange(optionName); // Appel de la fonction de rappel du parent
  };

  return (
    <div className="dropdown">
      <style>
      </style>
      <div style={
        dropdownStyle
      }  onClick={toggle}>
        {current_option}
      </div>
      {open && (
        <div className="options-wrapper">
            {props.children.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  handleOptionSelect(option.name);
                }}
                style={
                  dropdownItemStyle
                }
              >
                {option.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};


