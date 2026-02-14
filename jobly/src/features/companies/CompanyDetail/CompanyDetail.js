import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import JoblyApi from "src/api";
import JobCardList from "src/features/jobs/JobCardList/JobCardList";
import "./CompanyDetail.css";

/** CompanyDetail: logical component for single company. Makes a request to
 * Jobly API for data about a company.
 *  Renders company name, description, and list of jobs from the company.
 *
 *  Props: none
 *
 *  State:
 *  - companyDetail: { data: companyData, isLoading: boolean, errors: err obj }
 *
 *  RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const { handle } = useParams();
  console.log('CompanyDetail handle:', handle);
  const [companyDetail, setCompanyDetail] = useState({
    data: null,
    isLoading: true,
    errors: null
  });
  console.log("CompanyDetail state: ", companyDetail);

  // Makes a request to JoblyApi for single company data, everytime the company
  // handle changes when entering route. Sets the companyDetail state to be the
  // status of the received data from JoblyApi.
  useEffect(function fetchCompanyDataOnHandle() {
    console.log("CompanyDetail useEffect");
    async function fetchCompanyData() {
      try {
        const companyData = await JoblyApi.getCompany(handle);
        setCompanyDetail({
          data: companyData,
          isLoading: false
        });
      } catch (err) {
        setCompanyDetail({
          data: null,
          isLoading: false,
          errors: err
        });
      }
    }
    fetchCompanyData();
  }, [handle]); //if there's a var in the cb fn, put in dependency list

  if (companyDetail.isLoading) {
    return (
      <div className="CompanyDetail-loader">
        <div id="html-spinner"></div>
        <i>Loading...</i>
      </div>
    );
  }
  else if (companyDetail.errors) return <Navigate to="/companies" />

  const { name, description, jobs } = companyDetail.data;

  return (
    <div className="CompanyDetail">
      <div className="CompanyDetail-header">
        <h2>Company Name: {name} ({handle})</h2>
        <p>Company description: {description}</p>
      </div>
      <JobCardList filteredJobs={jobs} />
    </div>
  );
}


export default CompanyDetail;