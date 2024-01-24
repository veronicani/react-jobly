import JobCard from "./JobCard";

/** JobCardList: Renders a list of job cards from filtered jobs.
 *
 * Props:
 * - filteredJobs: [{ id, salary, equity, title, companyHandle, companyName }, ...]
 *
 * State:
 * none
 *
 * JobList -> JobCardList -> JobCard
*/

function JobCardList({ filteredJobs }) {
  return (
    <div>
      <p>JOB CARD LIST</p>
      {/* <JobCard />  */}
    </div>
  )
}

export default JobCardList;