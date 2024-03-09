import React from 'react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import styles from '../Styles/AboutUs.module.css'; // Make sure the path matches your file structure

const AboutUs = () => {
  return (
    <div>
        <Header />
        <Navigation />
        <div className={styles.container}>
      
      <section className={styles.section}>
        <h2 className={styles.title}>Background Information About Our Team Members</h2>
        
        <p className={styles.text}>
        Josh Argiropoulos is a 4th-year computer engineering student with a strong background in hardware and software integration. Josh brings to the team a keen understanding of system architecture and a passion for developing user-centric solutions.

        </p>
        <p className={styles.text}>
        Josh Keys is a 3rd-year economics student whose expertise in economic theory and data analysis enriches our project with insights into market trends and user engagement strategies. His analytical skills ensure our resources are utilized efficiently, keeping us sustainable and impactful.
        </p>
        <p className={styles.text}>
        Zach is a 3rd-year computer science student with a flair for coding and algorithm development. Specializing in back-end systems, Zach's work is crucial in creating the robust, secure foundation that our service relies on.

        </p>
        <p className={styles.text}>
        Jon is a 4th-year computer science student with a specialization in software development and user experience design. Jon's expertise ensures our platform is not only functional but also intuitive and accessible to all users.
        </p>
        
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Inspiration Behind ADHD MedFinder</h2>
        <p className={styles.text}>
          The idea for ADHD MedFinder was born from our collective desire to make a tangible difference in the lives of individuals dealing with ADHD. In our academic journey and personal lives, we've seen friends and family members struggle to find the right medication and treatment plans for ADHD. This challenge, combined with the overwhelming amount of generic information available online, highlighted a clear need for a personalized, user-focused solution. ADHD MedFinder is our answer to this challenge, designed to demystify the process of finding the right ADHD medication through a tailored approach that considers the unique circumstances of each individual.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Mission of ADHD MedFinder</h2>
        <p className={styles.text}>
        ADHD MedFinder's mission is to revolutionize the way individuals with ADHD and their caregivers approach treatment options. We envision a world where anyone can easily access the information and support they need to make informed decisions about ADHD medication. Our platform aims to bridge the gap between generic advice and personalized care, ensuring that everyone's journey toward managing ADHD is as informed and supportive as possible.
        </p>
      </section>
      <section className={styles.section}>
  <h2 className={styles.title}>Principles Guiding Our Work</h2>
  <p className={styles.text}>
    At ADHD MedFinder, our work is guided by the following core values:
    <ul>
      <li><strong>Empathy and Understanding:</strong> Recognizing the unique challenges faced by individuals with ADHD and approaching all we do with compassion.</li>
      <li><strong>Innovation:</strong> Continuously seeking innovative solutions to improve the treatment discovery process for ADHD.</li>
      <li><strong>Integrity:</strong> Ensuring that our recommendations are unbiased, based on the latest research, and always in the best interest of our users.</li>
      <li><strong>Accessibility:</strong> Making our platform and information as accessible and user-friendly as possible, to empower as many individuals as we can.</li>
      <li><strong>Collaboration:</strong> Working closely with medical professionals, researchers, and the ADHD community to ensure our service meets high standards of accuracy and relevance.</li>
    </ul>
  </p>
</section>

<section className={styles.section}>
  <h2 className={styles.title}>Objectives</h2>
  <p className={styles.text}>
    Our primary goal is to simplify the process of finding suitable ADHD medication through a personalized, data-driven approach. We aim to:
    <ul>
      <li>Provide accurate, personalized medication recommendations based on individual profiles.</li>
      <li>Increase awareness and understanding of different ADHD medications and their effects.</li>
      <li>Reduce the trial-and-error period often associated with finding the right ADHD medication.</li>
      <li>Empower individuals with ADHD with knowledge and options to discuss with healthcare providers.</li>
    </ul>
  </p>
</section>



     
    </div>



    </div>
    
  );
}

export default AboutUs;