import { useState, useEffect } from "react";

import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";

/** CompanyList: logical, makes API request to Jobly API. Renders the search
 * bar and list of CompanyCards.
 *
 *  Props:
 *  - None
 *
 *  State:
 *  - searchTerm: the search term submitted from the search bar.
 *  - TODO: update! filteredCompanies: [{handle, name, description, numEmployees, logoUrl}, ...]
 *
 *  RoutesList -> CompanyList -> { CompanyCard, SearchBar }
*/

function CompanyList() {
  const [searchTerm, setSearchTerm ] = useState("");
  const [companyList, setCompanyList] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  console.log('CompanyList companyList state: ', companyList);
  console.log('CompanyList searchTerm state: ', searchTerm);

  //TODO: Good to comment what this is for
  useEffect(function fetchFilteredCompaniesOnSearch() {
    async function fetchCompanies() {
      try {
        const companiesData = await JoblyApi.getCompanies(searchTerm);
        setCompanyList({
          data: companiesData,
          isLoading: false
        });
      } catch (err) {
        setCompanyList({
          data: null,
          isLoading: false,
          errors: err,
        });
      }
    }
    fetchCompanies();
  }, [searchTerm]);

  //TODO: Docstring!
  function search(companyName) {
    setCompanyList({data: null, isLoading: true, errors: null})
    setSearchTerm(companyName);
  }

  if (companyList.isLoading) return <i>Loading...</i>
  else if (companyList.errors) return <i>Server error. Please try again.</i>

  return (
    <div className="CompanyList">
      <SearchBar search={search} searchTerm={searchTerm}/>
      {companyList.data.length === 0 &&
        <i>No companies found for '{searchTerm}'.</i>}
      {companyList.data.length > 0 &&
        companyList.data.map(company =>
          <CompanyCard key={company.handle} company={company} />)}
    </div>
  );
}


export default CompanyList;