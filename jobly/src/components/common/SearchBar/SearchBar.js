import { useState } from "react";
import "./SearchBar.css";
import Button from "src/components/common/Button/Button";

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
    <form 
      className="SearchBar d-flex py-4"
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        class="form-control me-2"
        type="search"
        placeholder="Enter search term"
        aria-label="Search"
        value={term}
        onChange={handleChange} 
      />
      <Button classes="SearchBar-btn" label="Search!" />
    </form>
  )
}


export default SearchBar;