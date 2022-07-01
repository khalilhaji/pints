import React, { useReducer, useState } from "react";
import { PubSearch } from "./components/PubSearch";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { SearchResults } from "./components/SearchResults";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

function App() {
  const [resultsVisible, setResultsVisible] = useReducer(() => true, false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h1">Pints</Typography>
        <PubSearch onSelectHandler={() => setResultsVisible()} />
        <SearchResults visible={resultsVisible} />
      </div>
    </ThemeProvider>
  );
}

export default App;
