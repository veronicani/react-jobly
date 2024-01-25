import JobCard from "./JobCard";

/** JobCardList: Renders a list of job cards from filtered jobs.
 *
 * Props:
 *  filteredJobs -> [{title, salary, equity, companyName (optional)} ...]
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