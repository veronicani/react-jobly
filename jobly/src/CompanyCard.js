

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
      <p>COMPANY CARD</p>
    </div>
  )
}


export default CompanyCard;