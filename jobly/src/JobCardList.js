import JobCard from "./JobCard";

/** JobCardList: Renders a list of job cards from filtered jobs.
 *
 * Props:
 *   One of the following:
 *    - filteredJobs from JobList:
 *      [{ id, salary, equity, title, companyHandle, companyName }, ...]
 *
 *    - filteredJobs from CompanyDetail:
 *      [{ id, salary, equity, title}, ...]
 *
 * State:
 * - none
 *
 * JobList -> JobCardList -> JobCard
*/

function JobCardList({ filteredJobs }) {

  console.log('JobCardList render: ', filteredJobs);

  return (
    <div>
      {filteredJobs.map(j => (
        <JobCard key={j.id} job={j} />
      ))}
    </div>
  )
}

export default JobCardList;