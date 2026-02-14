import { useState, useEffect } from "react";

import JoblyApi from "src/api";
import CompanyCard from "src/features/companies/CompanyCard/CompanyCard";
import SearchBar from "src/components/common/SearchBar/SearchBar";

import "./CompanyList.css";

/** CompanyList: logical, makes API request to Jobly API. Renders the search
 * bar and list of CompanyCards.
 *
 *  Props:
 *  - None
 *
 *  State:
 *  - searchTerm: the search term submitted from the search bar.
 *  - companyList: [{handle, name, description, numEmployees, logoUrl}, ...]
 *
 *  RoutesList -> CompanyList -> { CompanyCard, SearchBar }
*/

function CompanyList() {
  //searchedTerm here is set as an object, so that everytime it is submitted,
  //even if it's the same term as before, useEffect will run
  const [searchedTerm, setSearchedTerm ] = useState({term: ""});
  const [companyList, setCompanyList] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  // Makes a request to JoblyApi for a list of company data, everytime a
  // new search term is submitted from search bar. Sets the companyList
  // state to be the status of the data.
  useEffect(function fetchFilteredCompaniesOnSearch() {
    // console.log("CompanyList useEffect");
    async function fetchCompanies() {
      try {
        const companiesData = await JoblyApi.getCompanies(searchedTerm.term);
        setCompanyList({
          data: companiesData,
          isLoading: false,
          errors: null
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
  }, [searchedTerm]);

  /** search: When user submits a search term for a company name,
   * it will update the states of companyList and searchTerm.
   * On update, useEffect will run again with the updated search term.
   */
  function search(companyName) {
    setCompanyList({data: null, isLoading: true, errors: null});
    setSearchedTerm({term: companyName});
  }

  if (companyList.isLoading && companyList.data === null) {
    return (
      <div className="CompanyList-loader">
        <div id="html-spinner"></div>
        <i>Loading...</i>
      </div>
    );
  }
  else if (companyList.errors) return <i>Server error. Please try again.</i>

  return (
    <div className="CompanyList mb-5 mx-auto col-lg-8">
      <SearchBar search={search} searchTerm={searchedTerm.term}/>
      {companyList.data.length === 0 &&
        <div className="CompanyList-none">
          <i>No companies found for '{searchedTerm.term}'.</i>
        </div>}
      {companyList.data.length > 0 &&
        companyList.data.map(company =>
          <CompanyCard key={company.handle} company={company} />)}
    </div>
  );
}


export default CompanyList;