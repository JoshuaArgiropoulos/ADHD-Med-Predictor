import React from 'react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/HomePage.module.css'; 

function HomePage() {
  const navigate = useNavigate();
  const navigateToQuestionnaire = () => {
    navigate('/Questionaire');
  };

  return (
    <div>
        <Header/>
      <Navigation />
        <div className={styles.container}>
      
      <section className={styles.section}>
        <p className={styles.text}>At ADHD MedFinder, our mission is to empower individuals with ADHD and those seeking better understanding. We're here to provide clarity and guidance on treatment options, specifically tailored to each individual's unique needs.</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>What Sets Us Apart?</h2>
        <p className={styles.text}>While there are many resources available for ADHD treatment, we stand out by offering personalized recommendations based on comprehensive questionnaires. Our approach is centered around understanding each individual's personality and symptoms to recommend the most suitable medication options.</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Get Started Today</h2>
        <p className={styles.text}>Ready to take control of your ADHD treatment journey? Start the questionnaire now to receive personalized medication recommendations tailored to your needs.</p>
        <button className={styles.button} onClick={navigateToQuestionnaire}>Start Questionnaire</button>
      </section>
    </div>
        
        
        
        </div>
  );
}

export default HomePage;