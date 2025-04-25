"use client";

const Kategori = ({ data }) => {
  return (
    <form action="/products">
      <p>Kategories</p>
      <select name="category" id="category-select">
        {data.map((cat) => {
          return (
            <option key={cat.slug} value={cat.name}>
              {cat.name}
            </option>
          );
        })}
      </select>
      <button type="submit">submit</button>
    </form>
  );
};

export default Kategori;
