"use client";

import { IconButton, Tooltip } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <Tooltip title="Cambiar de Tema" placement="bottom">
      <IconButton
        onClick={() => {
          setMode(mode === "dark" ? "light" : "dark");
        }}
        className="hover:scale-125 font-bold transition-transform ease-in-out duration-300"
        size="large"
      >
        {mode === "dark" ? (
          <LightModeRoundedIcon fontSize="large" />
        ) : (
          <NightsStayRoundedIcon
            fontSize="large"
            className="font-bold text-[#F2884B] dark:text-white"
          />
        )}
      </IconButton>
    </Tooltip>
  );
}
