import "./JobCard.css";

/** JobCard: presentational component, shows title of job, name of company,
 *  salary, and equity.
 *
 *  Props:
 *  job - one of the following:
 *  //TODO: list what it NEEDS, to render (companyName is optional)
 *   - from JobCardList: {id, salary, equity, title, companyHandle, companyName}
 *   - from CompanyDetail: {id, salary, equity, title}
 *
 *  State: none
 *
 *  JobCardList -> JobCard
 */
//TODO: some jobs don't have salary/equity, use &&
function JobCard({ job }) {
  console.log("JobCard input: ", job);
  //TODO: destructure job

  const { title, companyName, salary, equity } = job;

  return (
    <div className="JobCard">
      <h3 className="JobCard-title">{job.title}</h3>
      {companyName &&
        <p>Company: {companyName}</p>}
      {salary &&  <p>Salary: {salary}</p>}
      {equity && <p>Equity: {equity}</p>}
    </div>
  )
}


export default JobCard;