import JobCardList from "./JobCardList";

/** JobList: Renders a list of jobs and search bar.
 *
 * Props:
 * - none
 *
 * State:
 * - searchedTerm: the search term submitted from the seach bar.
 * - filteredJobs: [{ id, salary, equity, title, companyHandle, companyName }, ...]
 *
 * RoutesList -> JobList -> { JobCardList, SearchBar }
*/

function JobList({ filteredJobs }) {
  return (
    <div>
      <h3>Search Bar!</h3>
      <JobCardList />
    </div>
  )
}

export default JobList;