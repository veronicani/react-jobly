import { Link } from "react-router-dom";

/** CompanyCard: presentational component, shows name of company, company logo,
 *  and description.
 *
 *  Props: company -> { handle, name, description, numEmployees, logoUrl }
 *
 *  State: none
 *
 *  CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  // console.log("CompanyCard input: ", company);

  return (
    <div className="CompanyCard">
      {/* <Link to={`/companies/${company.handle}`} > */}
        <p>COMPANY CARD</p>
      {/* </Link> */}
    </div>
  )
}


export default CompanyCard;