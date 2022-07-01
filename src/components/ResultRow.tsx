import { TableCell, TableRow } from "@mui/material";
import React from "react";

export interface SearchResultProps {
  item: string;
  units: number;
  price: number;
  size: number;
}

export const ResultRow: React.FC<SearchResultProps> = ({
  item,
  units,
  price,
  size,
}) => {
  return (
    <TableRow>
      <TableCell>{item}</TableCell>
      <TableCell>{units}</TableCell>
      <TableCell>{size}</TableCell>
      <TableCell>{price}</TableCell>
    </TableRow>
  );
};
