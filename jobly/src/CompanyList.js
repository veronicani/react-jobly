import CompanyCard from "./CompanyCard";
import JoblyApi from "./api";
import SearchBar from "./SearchBar";

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

  function search(company) {
    console.log("CompanyList search");
    // const companies = JoblyApi.getCompanies(searchTerm)
  }

  return (
    <div className="CompanyList">
      <SearchBar search={search} />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </div>
  );
}


export default CompanyList;