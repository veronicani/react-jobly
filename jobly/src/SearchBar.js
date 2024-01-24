

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

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm("");
  }

  return (
    <form className="SearchBar" onSubmit={handleSubmit}>
      <input value={term} onChange={handleChange} />
      <button>Search!</button>
    </form>
  )
}


export default SearchBar;