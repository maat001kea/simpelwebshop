"use client";

const Kategori = ({ data }) => {
  return (
    <form action="/products">
      <p>Kategories</p>
      <select name="category" id="category-select">
        <option key="" value="">
          alle
        </option>
        {data.map((cat) => {
          return (
            <option key={cat.slug} value={cat.slug}>
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
