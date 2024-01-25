import { useState, useEffect } from "react";

import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";

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
  const [searchTerm, setSearchTerm ] = useState("");
  const [companyList, setCompanyList] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  console.log('CompanyList companyList state: ', companyList);
  console.log('CompanyList searchTerm state: ', searchTerm);

  // Makes a request to JoblyApi for a list of company data, everytime a
  // new search term is submitted from search bar. Sets the companyList
  // state to be the status of the data.
  useEffect(function fetchFilteredCompaniesOnSearch() {
    console.log("CompanyList useEffect");
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

  // FIXME: switch str type state to obj state so searchTerm can still fire
  // off request even w/ same previous searchTerm

  /** search: When user submits a search term for a company name,
   * it will update the states of CompanyList and searchTerm.
   * On update, useEffect will run again with the updated search term.
   **/
  function search(companyName) {
    console.log("searching for: ", companyName);
    console.log(companyList);

    if (companyName === searchTerm) {
      setCompanyList(cList => ({...cList, isLoading: false, errors: null}));
    } else {
      setCompanyList({data: null, isLoading: true, errors: null});
    }
    setSearchTerm(companyName);
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
    <div className="CompanyList">
      <SearchBar search={search} searchTerm={searchTerm}/>
      {companyList.data.length === 0 &&
        <div className="CompanyList-none">
          <i>No companies found for '{searchTerm}'.</i>
        </div>}
      {companyList.data.length > 0 &&
        companyList.data.map(company =>
          <CompanyCard key={company.handle} company={company} />)}
    </div>
  );
}


export default CompanyList;



// FIXME:
// - how to search for the same thing twice? Use a new obj!
// - add CSS fun stuff We definitely did! And will continue doing so!
// - fix our TODO:s