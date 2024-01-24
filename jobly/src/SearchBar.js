import { useState } from "react";


/** SearchBar component
 *
 *  Props:
 *  - handleSubmit
 *
 *  State:
 *  - formData,
 *
 *  CompanyList -> SearchBar
 */

function SearchBar({ search }) {
  const [term, setTerm] = useState("")

  //TODO: DOCSTRING
  function handleChange(evt) {
    setTerm(evt.target.value); //TODO: use as cb pattern
  }
  //TODO: DOCSTRING
  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm(""); //TODO: nice to have the term stay in the search
  }

  return (
    <form className="SearchBar" onSubmit={handleSubmit}>
      <input value={term} onChange={handleChange} />
      <button>Search!</button>
    </form>
  )
}


export default SearchBar;