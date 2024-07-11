import React from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";
import { useContext } from "react";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeButton() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={toggle}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        outline: "none",
        marginLeft: 10,
        padding: 5,
      }}
    >
      {!dark ? <NightsStayIcon /> : <LightModeIcon />}
    </button>
  );
}
