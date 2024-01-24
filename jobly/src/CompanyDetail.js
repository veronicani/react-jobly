import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";

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

  useEffect(function fetchCompanyDataOnMount() {
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
  }, []);

  if (companyDetail.isLoading) return <i>Loading...</i>
  else if (companyDetail.errors) return <Navigate to="/companies" />

  const { name, description, jobs } = companyDetail.data;

  return (
    <div className="CompanyDetail">
      <h3>Company Name: {name}</h3>
      <p>Company description: {description}</p>
      <JobCardList filteredJobs={jobs} />
    </div>
  );
}


export default CompanyDetail;