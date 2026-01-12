"use client";
import React, { useEffect, useState } from "react";
import "./JobListing.css";
import SanityClient from "../../../sanity/sanity";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("");

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "job"]{
            title,
            rating,
            location,
            type,
            level,
            mode,
            salary,
        }`
    )
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data); // Initialize filtered jobs with all jobs
      })
      .catch(console.error);
  }, []);

  // Function to handle search and filtering
  const handleSearchAndFilter = () => {
    let filtered = jobs.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesLocation = job.location
        .toLowerCase()
        .includes(locationQuery.toLowerCase());
      const matchesExperience =
        !experienceFilter ||
        job.level.toLowerCase().includes(experienceFilter.toLowerCase());

      return matchesSearch && matchesLocation && matchesExperience;
    });

    // Apply sorting
    if (sortFilter === "Urgently Hiring") {
      filtered.sort((a, b) => b.rating - a.rating); // Sort by rating (highest first)
    }

    setFilteredJobs(filtered);
  };

  // Update filtered jobs whenever search or filter changes
  useEffect(() => {
    handleSearchAndFilter();
  }, [searchQuery, locationQuery, experienceFilter, sortFilter]);

  return (
    <div className="job-listing">
      <header className="header">
        <h1>Find Your Dream Job Here</h1>
        <div className="search-bar">
          <img src="./icons/search.svg" alt="" />
          <img src="./icons/location.svg" alt="" />
          <input
            type="text"
            placeholder="Search Job Title or Keyword"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input
            type="text"
            placeholder="Country or Time Zone"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
          />
          <select
            value={experienceFilter}
            onChange={(e) => setExperienceFilter(e.target.value)}
          >
            <option value="">Select Experience</option>
            <option value="Entry">Fresher</option>
            <option value="Experienced">Experienced</option>
            <option value="Senior">Senior</option>
          </select>
          <button onClick={handleSearchAndFilter}>Find Jobs</button>
        </div>
      </header>
      <main>
        <div className="job-info">
          <p>
            Total Jobs: <span>{filteredJobs.length} Found</span>
          </p>
          <p>
            Sort By:{" "}
            <select
              value={sortFilter}
              onChange={(e) => setSortFilter(e.target.value)}
            >
              <option value="">None</option>
              <option value="Urgently Hiring">Urgently Hiring</option>
            </select>
          </p>
        </div>
        <div className="job-cards">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div className="job-card" key={index}>
                <div className="job-content">
                  <h2>{job.title}</h2>
                  <p className="rating">
                    <span>
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src={
                            i < Math.floor(job.rating)
                              ? "./icons/coloredstar.svg"
                              : "./icons/emptystar.svg"
                          }
                          alt=""
                        />
                      ))}
                    </span>
                    {job.rating} Reviews
                  </p>
                  <p className="location">
                    <img src="./icons/location.svg" alt="" />
                    {job.location}
                  </p>
                  <div className="tags">
                    <span>{job.type}</span>
                    <span>{job.level}</span>
                    <span>{job.mode}</span>
                  </div>
                </div>
                <div className="footer">
                  <p className="salary">${job.salary}/month</p>
                  <button>See Details</button>
                </div>
              </div>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
        <button className="view-all">View All</button>
      </main>
    </div>
  );
};

export default JobListing;
