import React from 'react';

/*
let x = {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "FullStack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  }
*/


const JobBoard = ({job, handleTagClick}) => {

    const tags = [job.role, job.level] 
    if (job.languages) {
        tags.push(...job.languages);
    }
    if (job.tools) {
        tags.push(...job.tools);
    }

    return (
    <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 
    rounded ${job.featured && 'border-l-4 border-solid border-green-500' } lg:flex-row lg:m-6`}>
        <div>
            <img className="-mt-16 mb-4 w-20 h-20 
            lg:h-24 lg:w-24 lg:my-0" src={job.logo} alt={job.company}/>
        </div>

        <div className="flex flex-col justify-between ml-4">
            <h3 className="font-bold text-green-500">
                {job.company}
                {job.isNew && (
                    <span className="bg-green-500 text-xs text-green-50 
                    font-bold ml-3 py-1 px-2 rounded-full uppercase">New</span>
                )}
                {job.featured && (
                    <span className="bg-gray-900 text-xs text-white 
                    font-bold m-1 py-1 px-2 rounded-full uppercase">Featured</span>
                )}
            </h3>
            <h2 className="font-bold text-xl my-2">{job.position}</h2>
            <p className="text-gray-500">{job.postedAt} · {job.contract} · {job.location}</p>
        </div>

        <div className="flex flex-wrap 
        items-center mt-4 mx-4 pt-4 border-t 
        border-gray-200 border-solid lg:ml-auto 
        lg:border-0 lg:mt-0 lg:pt-0">
            { tags 
                ? (tags.map((tag) => <span 
                                    onClick= {() => handleTagClick(tag)}
                                    className="text-green-500
                                    bg-green-50 font-bold mr-4 mb-3 p-2
                                    rounded lg:mb-0 cursor-pointer">{tag}</span>)) : ''}
        </div>
        
    </div>
    )
}

export default JobBoard;
