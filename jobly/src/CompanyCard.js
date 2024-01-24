import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** CompanyCard: presentational component, shows name of company, company logo,
 *  and description.
 *
 *  Props: company { handle, name, description, numEmployees, logoUrl }
 *
 *  State: none
 *
 *  CompanyList -> CompanyCard 
 */

function CompanyCard({ company }) {
  // console.log("CompanyCard input: ", company);
  const { handle, name, description, numEmployees, logoUrl } = company;

  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`} >
        <div className="CompanyCard-header">
          <h3>{name}</h3>
          {logoUrl && 
          <img src={`../${logoUrl}`} alt={`${name} logo`} width="50px"/>}
        </div>
        <p>{description}</p>
      </Link>
    </div>
  )
}


export default CompanyCard;