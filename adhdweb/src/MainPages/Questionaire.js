import React from 'react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import QuestionWrap from '../Components/Question';
import '../Styles/Questionaire.css'
import styles from '../Styles/HomePage.module.css'
const Questionaire = () => {
  let all = ["Hello", "CHeck"];
  let colors = ["Blue", "brown", "gray"];
  return (
    <div>
        <Header/>

      <Navigation />
      <div className={styles.container}>
        <form>
          <QuestionWrap question="Piss" all={all} />
          <QuestionWrap question="What color are your eyes?" all={colors}></QuestionWrap>
          <div style={{ textAlign: 'center'}}>
            <input className="sub" type="submit"></input>
          </div>
      
        </form>
      </div>
      
      
    </div>
  );
}

export default Questionaire;