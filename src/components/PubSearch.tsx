import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";

interface Props {
  onSelectHandler: () => void;
}

export const PubSearch: React.FC<Props> = ({ onSelectHandler }) => {
  return (
    <Autocomplete
      id="pub-search"
      options={pubs}
      renderInput={(params) => <TextField {...params} label="Choose a pub" />}
      onChange={onSelectHandler}
    />
  );
};

interface Pub {
  label: string;
  postcode: string;
}

const pubs: Pub[] = [
  { label: "The William Morris", postcode: "N19JP" },
  { label: "JD Wetherspoons (Liverpool Street)", postcode: "E18CP" },
];
