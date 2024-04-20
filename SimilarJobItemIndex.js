import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'

import {MdLocationOn} from 'react-icons/md'

const SimilarJobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = jobDetails
  return (
    <li className="similar-job-item">
      <div className="logo-title-location-container">
        <div className="logo-title-container">
          <img
            className="company-logo"
            src={companyLogoUrl}
            alt="similar job company logo"
          />
        </div>
        <div>
          <h1 className="title-heading">{title}</h1>
          <div className="rating-container">
            <BsStarFill className="rating-icon" />
            <p>{rating}</p>
          </div>
        </div>
      </div>
      <h1>Description</h1>
      <p>{jobDescription}</p>
      <div className="location-employee-container">
        <div className="location-container">
          <MdLocationOn className="location-icon" />
          <p>{location}</p>
        </div>
        <div className="employee-type-container">
          <BsFillBriefcaseFill className="brief-case-icon" />
          <p>{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobItem
