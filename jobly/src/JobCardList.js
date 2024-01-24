import JobCard from "./JobCard";

/** JobCardList: Renders a list of job cards from filtered jobs.
 *
 * Props:
 * - filteredJobs from searchbar:
 *    [{ id, salary, equity, title, companyHandle, companyName }, ...]
 *
 * - filteredJobs from clicking on company detail:
 *    [{ id, salary, equity, title}, ...]
 *
 *
 * State:
 * none
 *
 * JobList -> JobCardList -> JobCard
*/

// FIXME: update props for this docstring^^^^^

function JobCardList({ filteredJobs }) {

  return (
    <div>
      {filteredJobs.map(j => (
        <JobCard key={j.id} job={j} />
      ))}

      {/* old ref: */}
      {/* <p>JOB CARD LIST</p>
      <JobCard />
      <JobCard />
      <JobCard /> */}
    </div>
  )
}

export default JobCardList;