import CompanyCard from "./CompanyCard";
import JoblyApi from "../../api";

/** CompanyList: logical, makes API request to Jobly API
 *
 *  Props:
 *  - None
 *
 *  State:
 *  - searchTerm: the search term submitted from the search bar.
 *  - filteredCompanies: [{handle, name, description, numEmployees, logoUrl}, ...]
 *
 *  RoutesList -> CompanyList -> { CompanyCard, SearchBar }
*/

function CompanyList({ filteredCompanies }) {

  // function search(company) {
  //   const companies = JoblyApi.getCompanies(searchTerm)
  // }

  return (
    <div className="CompanyList">
      <h3>Search Bar!</h3>
      <SearchBar search={search} />
      <CompanyCard />
    </div>
  );
}


export default CompanyList;