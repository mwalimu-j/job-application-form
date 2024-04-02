import React, { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [error, setError] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [workHistory, setWorkHistory] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleAuthentication = () => {
    if (fullName.trim() !== '') {
      setIsAuthenticated(true);
      setError('');
      setCurrentPage(2);
    } else {
      setError('Please enter a valid full name.');
    }
  };

  const handleSubmitDetails = () => {
    const details = {
      education,
      skills,
      workHistory,
      additionalInfo,
      fullName,
    };
    console.log('Job Application Details:', details);
    setShowPopup(true);
    setPopupMessage(`Details submitted successfully for ${fullName}`);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleGoBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleGoAhead = () => {
    if (currentPage === 1 && isAuthenticated) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 2) {
      handleSubmitDetails();
    }
  };

  const handleClose = () => {
    window.close();
  };

  if (showPopup) {
    return (
      <div className="container">
        <h1>Job Application</h1>
        <div className="popup">
          <p>{popupMessage}</p>
          <button onClick={handlePopupClose}>Close</button>
          <div className="exit-button">
            <button onClick={handleClose}>Exit</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ backgroundImage: 'linear-gradient(to bottom right, #4682B4, #63B8FF)' }}>
      <h1>Job Application</h1>
      <div className="content">
        {currentPage === 1 && (
          <>
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <button onClick={handleAuthentication}>Authenticate</button>
            {error && <p className="error">{error}</p>}
          </>
        )}

        {currentPage === 2 && isAuthenticated && (
          <>
            <div>
              <label htmlFor="mobilePhone">Mobile Phone:</label>
              <input
                type="text"
                id="mobilePhone"
                value={mobilePhone}
                onChange={(e) => setMobilePhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="nationalId">National ID:</label>
              <input
                type="text"
                id="nationalId"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="education">Qualifications of Education:</label>
              <textarea
                id="education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                rows={4}
              ></textarea>
            </div>
            <div>
              <label htmlFor="skills">Skills Required:</label>
              <textarea
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                rows={4}
              ></textarea>
            </div>
            <div>
              <label htmlFor="workHistory">History of Places You Have Worked Before:</label>
              <textarea
                id="workHistory"
                value={workHistory}
                onChange={(e) => setWorkHistory(e.target.value)}
                rows={4}
              ></textarea>
            </div>
            <div>
              <label htmlFor="additionalInfo">Additional Information:</label>
              <textarea
                id="additionalInfo"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                rows={4}
              ></textarea>
            </div>
          </>
        )}
      </div>

      {currentPage === 2 && isAuthenticated && (
        <div className="navigation">
          <button onClick={handleGoBack}>&#8592; Go Back</button>
          <button onClick={handleGoAhead}>Submit &#8594;</button>
        </div>
      )}
    </div>
  );
}

export default App;
