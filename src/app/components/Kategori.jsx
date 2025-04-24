"use client";

const Kategori = ({ data }) => {
  return (
    <div>
      <p>Kategories</p>
      <select name="products" id="kategori-select">
        {data.map((cat) => {
          return (
            <option key={cat.slug} value={cat.name}>
              {cat.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Kategori;
