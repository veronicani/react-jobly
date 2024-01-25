import { useState } from "react";
import "./SearchBar.css"

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

function SearchBar({ search, searchTerm }) {
  const [term, setTerm] = useState(searchTerm)

  console.log('SearchBar searchTerm: ', term);


  /** Update form input */
  function handleChange(evt) {
    const field = evt.target;
    setTerm(t => t = field.value);
  }


  /** Call parent function and clear form? Don't clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
  }

  return (
    <form className="SearchBar" onSubmit={handleSubmit}>
      <input value={term} onChange={handleChange} />
      <button>Search!</button>
    </form>
  )
}


export default SearchBar;