import { Table, TableCell, TableHead, Typography } from "@mui/material";
import React from "react";
import { ResultRow, SearchResultProps } from "./ResultRow";

interface Props {
  visible: Boolean;
}

export const SearchResults: React.FC<Props> = ({ visible }) => {
  const visibleStyle = visible ? {} : { display: "none" };
  return (
    <>
      <Table sx={visibleStyle}>
        <TableHead>
          <TableCell>Item</TableCell>
          <TableCell>Units of Alc.</TableCell>
          <TableCell>Size (pints)</TableCell>
          <TableCell>Price</TableCell>
        </TableHead>
        {results.map((res) => (
          <ResultRow {...res} />
        ))}
      </Table>
    </>
  );
};

const results: SearchResultProps[] = [
  {
    item: "Shipyard",
    units: 3,
    price: 2.65,
    size: 1,
  },
];
