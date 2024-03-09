import React from 'react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import QuestionWrap from '../Components/Question';
import '../Styles/Questionaire.css'
import styles from '../Styles/HomePage.module.css'
const Questionaire = () => {
  let all = ["Hello", "CHeck"];
  let colors = ["Blue", "brown", "gray"];
  let yn = ["Yes", "No"];
  return (
    <div>
        <Header/>

      <Navigation />
      <div className={styles.container}>
        <h3 id="head">
        Please answer the following questionnaire. Using your responses, we will match you with the ADHD medication that best suits your needs.
        </h3>
        
        <form>
          <QuestionWrap question="Test" all={all} />
          <QuestionWrap question="What color are your eyes?" all={colors}></QuestionWrap>
          <QuestionWrap question="Do you struggle with sleep deprivation" all={yn}></QuestionWrap>
          <div style={{ textAlign: 'center'}}>
            <input className="sub" type="submit"></input>
          </div>
      
        </form>
      </div>
      
      
    </div>
  );
}

export default Questionaire;