

/** JobCard: presentational component, shows title of job, name of company,
 *  salary, and equity.
 *
 *  Props: job -> {id, salary, equity, title, name of company}
 *
 *  State: none
 *
 *  JobCardList -> JobCard
 */

function JobCard({job}) {
  console.log("JobCard renders: ", job);

  return (
    <div className="JobCard">
      <p>{job.title}</p>
      <p>{job.companyName}</p>
      <p>{job.salary}</p>
      <p>{job.equity}</p>
    </div>
  )
}


export default JobCard;