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
 *  - filteredCompanies: [{handle, name, description, numEmployees, logoUrl}, ...]
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

  useEffect(function getFilteredCompanies() {
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


  function search(companyName) {
    console.log("CompanyList search");
    setCompanyList({data: null, isLoading: true, errors: null})
    setSearchTerm(companyName);
  }

  // return based on if it's loading, if there are errors, etc (like Company
  // Detail pattern).
  if (companyList.isLoading) return <i>Loading...</i>
  else if (companyList.errors) return <i>No companies found.</i>
  
  console.log("companyList: ", companyList);
  //TODO: handle [] by returning no companies found.

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