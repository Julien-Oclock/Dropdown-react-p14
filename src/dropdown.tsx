
import React from "react";
import { useState } from "react";
import "./dropdown.css";


export interface DropdownProps {
  title: string;
  children: {
    name: string;
    keys: string;
  }[];
}


export const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const [current_option, setCurrentOption] = useState(props.children[0].name);

  const toggle = () => setOpen(!open);

  return (
    <div className="dropdown">
      <style>
      </style>
      <div className="dropdown__toggle" onClick={toggle}>
        {current_option}
      </div>
      {open && (
        <div>
            {props.children.map((option, index) => (
              <div
                key={index}
                className="dropdown__menu__item"
                onClick={() => {
                  setCurrentOption(option.name);
                  setOpen(false);
                }}
              >
                {option.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};


