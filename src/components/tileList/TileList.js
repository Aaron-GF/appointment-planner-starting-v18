import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({ data }) => {
  const list = Object.values(data || {})
  return (
    <div>
      {list.map((e, i) =>
        <Tile
          key={i}
          name={e.title}
          description={{ contact: e.contact, date: e.date, time: e.time }}
        />
      )}
    </div>
  );
};
