import React from 'react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';

function HomePage() {
   
    const navigate = useNavigate();
  const navigateToQuestionnaire = () => {
    navigate('/Questionaire');
  };


  return (
    
      <div className="HomePage">
        <Header/>
        <Navigation />
        <section>
        <p>At ADHD MedFinder, our mission is to empower individuals with ADHD and those seeking better understanding. We're here to provide clarity and guidance on treatment options, specifically tailored to each individual's unique needs.</p>
      </section>
      <section>
        <h2>What Sets Us Apart?</h2>
        <p>While there are many resources available for ADHD treatment, we stand out by offering personalized recommendations based on comprehensive questionnaires. Our approach is centered around understanding each individual's personality and symptoms to recommend the most suitable medication options.</p>
      </section>
      <section>
        <h2>Get Started Today</h2>
        <p>Ready to take control of your ADHD treatment journey? Start the questionnaire now to receive personalized medication recommendations tailored to your needs.</p>
        <button onClick={navigateToQuestionnaire}>Start Questionnaire</button>
      </section>
        
      </div>
    
  );
}

export default HomePage;