import React from 'react';
import styles from '../Styles/Navigation.module.css'; // Ensure the path is correct based on your file structure

function Navigation() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles['nav-link']}>Home</a>
      <a href="/about" className={styles['nav-link']}>About Us</a>
      <a href="/Questionaire" className={styles['nav-link']}>Questionnaire</a> {/* Note the spelling correction */}
    </nav>
  );
}

export default Navigation;