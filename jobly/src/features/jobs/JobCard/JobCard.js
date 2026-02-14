import "./JobCard.css";

/** JobCard: presentational component, shows title of job, name of company,
 *  salary, and equity.
 *
 *  Props:
 *  job -> { title, salary, equity, companyName (optional) }
 *
 *  State: none
 *
 *  JobCardList -> JobCard
 */

function JobCard({ job }) {
  console.log("JobCard input: ", job);

  const { title, companyName, salary, equity } = job;

  return (
    <div className="JobCard">
      <h3 className="JobCard-title">{title}</h3>
      {companyName &&
        <p>Company: {companyName}</p>}
      {salary &&  <p>Salary: {salary}</p>}
      {equity && <p>Equity: {equity}</p>}
    </div>
  )
}


export default JobCard;