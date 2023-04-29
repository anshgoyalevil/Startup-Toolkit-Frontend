import React from "react";
import WhiteBGLogo from "./StartupKro Tools.png";
import BlackBGLogo from "./StartupKro Tools B.png";
import { useMantineTheme } from "@mantine/core";

function Logo() {
  const { colorScheme } = useMantineTheme();
  return (
    <div>
      <img src={colorScheme === "dark" ? BlackBGLogo : WhiteBGLogo} alt="" width={200} />
    </div>
  );
}

export default Logo;
