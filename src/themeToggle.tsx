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
        sx={{
          color: (theme) =>
            theme.palette.mode === "dark" ? "white" : "#F2884B",
          fontWeight: "bold",
          ":hover": {
            transform: "scale(1.2)",
            transition: "transform 0.25s ease-out",
          },
        }}
      >
        {mode === "dark" ? (
          <LightModeRoundedIcon />
        ) : (
          <NightsStayRoundedIcon
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "white" : "#F2884B",
              fontWeight: "bold",
            }}
          />
        )}
      </IconButton>
    </Tooltip>
  );
}
