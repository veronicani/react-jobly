import { useEffect, useState } from "react";

import JobCardList from "./JobCardList";
import SearchBar from "./SearchBar";

import JoblyApi from "./api";
import "./JobList.css";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [jobList, setJobList] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  console.log('JobList jobList state: ', jobList);
  console.log('JobList searchTerm state: ', searchTerm);

  //TODO: comment!
  useEffect(function fetchFilteredJobsOnSearch() {
    async function fetchJobs() {
      try {
        const jobsData = await JoblyApi.getJobs(searchTerm);
        setJobList({
          data: jobsData,
          isLoading: false
        });
      } catch (err) {
        setJobList({
          data: null,
          isLoading: false,
          errors: err,
        });
      }
    }
    fetchJobs();
  }, [searchTerm]);

  //TODO: DOCSTRING!
  function search(job) {
    setJobList({data: null, isLoading: true, errors: null});
    setSearchTerm(job);
  }

  if (jobList.isLoading) {
    return (
      <div className="JobList-loader">
        <div id="html-spinner"></div>
        <i>Loading...</i>
      </div>
    );
  }
  else if (jobList.errors) return <i>Server error. Please try again.</i>

  //NOTE: if no results for search, and click on link to JobList, should
  //it show the same state? or load all jobs?

  return (
    <div>
      <SearchBar search={search} />
      {jobList.data.length === 0 &&
      <div className="JobList-none">
        <i>No jobs found for '{searchTerm}'.</i>
      </div>}
      {jobList.data.length > 0 && <JobCardList filteredJobs={jobList.data} />}
    </div>
  )
}

export default JobList;