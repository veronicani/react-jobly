import { useEffect, useState } from "react";

import JobCardList from "src/features/jobs/JobCardList/JobCardList";
import SearchBar from "src/components/common/SearchBar/SearchBar";

import JoblyApi from "src/api";
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
  //searchedTerm here is set as an object, so that everytime it is submitted,
  //even if it's the same term as before, useEffect will run
  const [searchedTerm, setSearchedTerm] = useState({term: ""});
  const [jobList, setJobList] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  // Makes a request to JoblyApi for a list of jobs data, everytime a
  // new search term is submitted from search bar. Sets the jobList
  // state to be the status of the data.
  useEffect(function fetchFilteredJobsOnSearch() {
    async function fetchJobs() {
      try {
        const jobsData = await JoblyApi.getJobs(searchedTerm.term);
        setJobList({
          data: jobsData,
          isLoading: false,
          errors: null
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
  }, [searchedTerm]);

  /** search: When user submits a search term for a job name,
   * it will update the states of jobList and searchTerm.
   * On update, useEffect will run again with the updated search term.
   */
  function search(job) {
    setJobList({data: null, isLoading: true, errors: null});
    setSearchedTerm({term: job});
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
    <div className="JobList mb-5 mx-auto col-lg-8">
      <SearchBar search={search} searchTerm={searchedTerm.term}/>
      {jobList.data.length === 0 &&
      <div className="JobList-none">
        <i>No jobs found for '{searchedTerm.term}'.</i>
      </div>}
      {jobList.data.length > 0 && <JobCardList filteredJobs={jobList.data} />}
    </div>
  )
}

export default JobList;