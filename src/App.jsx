import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import LineChart from "./components/LineChart";
import { ThemeProvider } from "@emotion/react";
import { Line } from "@nivo/line";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div>
          <LineChart />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
