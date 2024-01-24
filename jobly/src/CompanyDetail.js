import { useParams } from "react";

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

  return (
    <div className="CompanyDetail">
      <h3>This is company detail.</h3>
    </div>
  );
}


export default CompanyDetail;