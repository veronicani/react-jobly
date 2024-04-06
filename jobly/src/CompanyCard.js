import { Link } from "react-router-dom";
import "./CompanyCard.scss";

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
  const { handle, name, description, logoUrl } = company;

  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`} >
        <div className="CompanyCard-header">
          <h3 className="CompanyCard-name">{name}</h3>
          {logoUrl && 
          <img className="CompanyCard-logo" 
               src={`..${logoUrl}`}
               alt={`${name} logo`}/>
          }
        </div>
        <p>{description}</p>
      </Link>
    </div>
  )
}


export default CompanyCard;