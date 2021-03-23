import React, {useState, useEffect} from "react";
import data from "./assets/data.json";
import JobBoard from "./components/JobBoard";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFunction = (job) => {

    if(filters.length === 0) {
      return true;
    }

// Variables with all tags
    const tags = [job.role, job.level] 
    if (job.languages) {
        tags.push(...job.languages);
    }
    if (job.tools) {
        tags.push(...job.tools);
    }

    return tags.some(tag => filters.includes(tag));
  }


//Handlers of clicks

  const handleTagClick = (tag) => {
  // avoid reading the tag
  
    if (filters.includes(tag)) return;
   setFilters([...filters, tag]); 
  };


  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

// Filtered array of jobs
  const filteredJobs = jobs.filter(filterFunction);

  return (
    <div className="App">
        <header style={{backgroundColor: "#5ea3a5"}} className="mb-12">
          <img className="w-full" src="/images/bg-header-desktop.svg" alt="bg"/>
        </header>
        <div className="container m-auto">
        {filters.length > 0 && (
          <div className="{`flex bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded relative z-20`}">
              {filters.map((filter) => (
                <span 
                  className="flex-wrap cursor-pointer mr-4 mb-3 rounded lg:mb-0">
                      <span 
                        className="text-green-500
                        bg-green-50 font-bold p-2"
                        onClick= {() => handleFilterClick(filter)}>
                          {filter}
                      </span>
                      <span className="bg-green-500 text-green-100 
                        font-bold p-2" onClick= {() => handleFilterClick(filter)}>
                          ×
                      </span>
                </span>
              ))}
              <button onClick={clearFilters} className="flex font-bold 
              text-gray-500 mt-3 ml-1 sm:mt-0 sm:ml-auto sm:-mt-6">Clear</button>
          </div>
      )}

      { jobs.length === 0 ? (
        <p>Jobs are being fetched...</p>
      ) : (
          filteredJobs.map( job => (
            <JobBoard 
              job={job} 
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
        </div>
    </div>
  );
}

export default App;



/*
TODO:
1. Study the design and JSON
2. Create the Job Board Component
3. Get the data from the JSON
4. Pass down the date to the JBS
5. Style desktop/mobile
6. Filter  component
7. Filter the data 
*/
