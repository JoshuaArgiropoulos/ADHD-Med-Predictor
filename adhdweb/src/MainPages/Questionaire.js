import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import QuestionWrap from '../Components/Question';
import '../Styles/Questionaire.css';
import styles from '../Styles/HomePage.module.css';

const Questionaire = () => {
  // State to store responses
  const [responses, setResponses] = useState({
    test: '',
    eyeColor: '',
    sleepDeprivation: '',

    //Add more for each question
  });

  // Function to update state based on question and selected value
  const handleResponseChange = (question, value) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [question]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    let score = 0;
    let recommendation = "Consult a doctor for a personal evaluation.";
  
    // Decision Tree and Scoring Logic
    if (responses.heartCondition === 'Yes') {
      recommendation = "Non-Stimulant Medications Recommended due to heart condition.";
    } else {
      // ADHD Severity Scoring
      const severityScores = { Mild: 1, Moderate: 2, Severe: 3 };
      score += severityScores[responses.adhdSeverity] || 0;
  
      // Symptom Disruption Weighting
      const disruptionScores = { 'Not at all': 0, 'Somewhat': 1, 'Very': 2 };
      score += disruptionScores[responses.symptomDisruption] * 1; // Weight factor of 1
  
      // Medication Duration Weighting
      const durationScores = { 'Less than 4 hours': 1, '4–8 hours': 2, 'More than 8 hours': 3 };
      score += durationScores[responses.medicationDuration] * 1.5; // Weight factor of 1.5
  
      // Rule-Based Logic
      if (parseInt(responses.age, 10) < 6 || responses.onMAOInhibitors === 'Yes') {
        recommendation = "Consult a doctor due to age or MAO inhibitors.";
      } else if (score >= 5) { // Threshold is arbitrary; adjust based on your analysis
        recommendation = "Stimulant Medications Recommended.";
      } else {
        recommendation = "Non-Stimulant Medications Recommended.";
      }
    }
  
    setResponses(prevResponses => ({ ...prevResponses, recommendation }));
  };

  return (
    <div>
      <Header/>
      <Navigation />
      <div className={styles.container}>
        <h3 id="head">
          Please answer the following questionnaire. Using your responses, we will match you with the ADHD medication that best suits your needs.
        </h3>
        
        <form onSubmit={handleSubmit}>
          <QuestionWrap 
            question="Test" 
            all={["Hello", "Check"]} 
            onChange={(value) => handleResponseChange('test', value)}
          />
          <QuestionWrap 
            question="What color are your eyes?" 
            all={["Blue", "Brown", "Gray"]} 
            onChange={(value) => handleResponseChange('eyeColor', value)}
          />
          <QuestionWrap 
            question="Do you struggle with sleep deprivation" 
            all={["Yes", "No"]} 
            onChange={(value) => handleResponseChange('sleepDeprivation', value)}
          />























          <div style={{ textAlign: 'center'}}>
            <input className="sub" type="submit" value="Submit"></input>
          </div>
          {responses.recommendation && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2>Recommendation:</h2>
            <p>{responses.recommendation}</p>
            </div>
            )}
        </form>
      </div>
    </div>
  );
}

export default Questionaire;
