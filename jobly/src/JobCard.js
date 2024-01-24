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
  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      {job.companyName &&
        <p>Company: {job.companyName}</p>}
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  )
}


export default JobCard;