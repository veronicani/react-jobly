import { useParams, Navigate } from "react-router-dom";

/** CompanyDetail: logical component for single company. Makes a request to
 * Jobly API for data about a company.
 *  Renders company name, description, and list of jobs from the company.
 *
 *  Props: none
 *
 *  State: none
 *
 *  RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const { handle } = useParams();
  console.log('CompanyDetail handle:', handle);



  if (!handle) return <Navigate to="/companies" />

  return (
    <div className="CompanyDetail">
      <h3>This is company detail.</h3>
    </div>
  );
}


export default CompanyDetail;