"use client";
import { useState } from "react";
const Kategori = ({ data }) => {
  const [kategori, setkategori] = useState(false);
  return (
    <div>
      <p onClick={() => setkategori(!kategori)}>Kategories</p>
      {kategori === true ? (
        <ul>
          {data.map((cat) => {
            return <li key={cat.slug}>{cat.name}</li>;
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Kategori;
