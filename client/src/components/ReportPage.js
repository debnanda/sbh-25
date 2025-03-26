import React from 'react';
import './ReportPage.css';

const ReportPage = () => {
  // Placeholder data for demonstration
  const reportData = {
    accuracy: '85%',
    confidence: '90%',
    engagement: '80%',
    clarity: '88%',
  };

  return (
    <div className="report-page">
      <h2>Viva Report</h2>
      <div className="statistics">
        <div className="statistic">
          <h3>Content Accuracy</h3>
          <p>{reportData.accuracy}</p>
        </div>
        <div className="statistic">
          <h3>Confidence</h3>
          <p>{reportData.confidence}</p>
        </div>
        <div className="statistic">
          <h3>Engagement</h3>
          <p>{reportData.engagement}</p>
        </div>
        <div className="statistic">
          <h3>Communication Clarity</h3>
          <p>{reportData.clarity}</p>
        </div>
      </div>
      <p>Thank you for participating in the viva simulation!</p>
    </div>
  );
};

export default ReportPage; 