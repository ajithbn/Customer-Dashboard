import React from "react";

const Search = (props) => {
  const { term, handleChange } = props;

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search by Name or Phone"
      value={term}
      onChange={handleChange}
    />
  );
};

export default Search;
