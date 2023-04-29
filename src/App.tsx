import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Home from "./components/Screens/Home";
import GSTCalculator from "./components/Screens/GSTCalculator";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Fragments/Navbar/Navbar";
import { Footer } from "./components/Fragments/Footer/Footer";
import links from "./components/data/links";

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: "Verdana, sans-serif",
          fontFamilyMonospace: "Monaco, Courier, monospace",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Navbar links={links.links} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="gst-calculator" element={<GSTCalculator />} />
        </Routes>
        <Footer />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
