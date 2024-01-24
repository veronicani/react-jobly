import { useEffect } from "react";

import JobCardList from "./JobCardList";
import SearchBar from "./SearchBar";

/** JobList: Renders a list of jobs and the search bar. Makes API request to
 * get all job data based on search terms.
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

function JobList() {
  //TODO: useEffect!
  
  function search(job) {
    console.log("JobList search");
  }
  
  return (
    <div>
      <SearchBar search={search} />
      <JobCardList />
    </div>
  )
}

export default JobList;