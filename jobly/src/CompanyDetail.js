


/** ComponyDetail component: presentational component for single company
 *
 *  Props: company obj -> {handle, name, description, numEmployees, logoUrl}
 *
 *  State: none
 *
 *  RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail({ company }) {

  console.log('CompanyDetail input:', company);

  return (
    <div className="CompanyDetail">
      <h3>This is company detail.</h3>
    </div>
  );
}


export default CompanyDetail;