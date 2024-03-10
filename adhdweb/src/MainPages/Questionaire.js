import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import QuestionWrap from '../Components/Question';
import '../Styles/Questionaire.css';
import styles from '../Styles/HomePage.module.css';

const Questionaire = () => {
  // State to store responses
  const [responses, setResponses] = useState({
    medSwitch: '',//If sleep related = short release. Emotional dysregulation = non stim. Gastrontestinal related = non stim.
    insomnia: '',//If yes = short release. cannot be extended long realese 
    hasGlaucoma: '',//If yes = non stim
    hasHyperThyroidism: '',//if yes = non stim
    hasHighBloodPressure: '',//If yes = Wellbutrin
    haveParanoia: '', //If yes = no meds
    medActivityLength: '', //if Short Acting = 
    hasBingeEatingDisorder: '',// IF yes = long acting 
    meds: '',// IF != none then = non meds
    age:'',//if age != "18-65" then kid else adult
    drugabuse:'',//if yes = non stim
    anxiety:'',// if yes = non stim
    pregnant:'',// if yes = no meds
    bipolar:'',// if bipolar = no meds
    heart:'',// if yes = no meds
    stimulants:'', //"Strongly", "Mid strong", "Neutral", "Weak", "None". If "Strongly", "Mid strong", = ignore 
    ADHDMeds: [],
    recommendation: null, // Added to store the final recommendation
    NoMeds: false,
    Wellbutrin: false,
    NonStimulant: false,
    ShortReleaseStimulant: false,
    LongActingStimulant: false,
    CustomRecommendation: false,
  
  
  /** "
   * 
    "Adderall XR", (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Vyvanse", if (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Dexedrine", if (yes then non stim)
  "Dexedrine Spansule", if (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Adzenys XR", if (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Dynavel XR",if (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Biphentin",if (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Concerta",if (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Foquest",if (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Ritalin SR",if (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Ritalin",if (yes then non stim)
  "Focalin XR",if (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Aptensio-XR",if (yes  + sleep issues = dexrerime) if yes + != sleep issues = non stim)
  "Strattera (Atomoxetine)",if yes = willburtin but if yes willburtin and stratturn then intuniv XR
  "Intuniv XR (Guanfacine XR)",if yes then no meds
  "Wellbutrin (bupropion)" if yes then Strattera


*/

    //Add more for each question
    });

    const decideMedication = (responses) => {
        // Step 1: Determine the primary category
        let primaryCategory = '';
        
        if (responses.haveParanoia || responses.pregnant || responses.bipolar || responses.heart) {
            primaryCategory = 'NoMeds';
        } else if (responses.hasGlaucoma || responses.hasHyperThyroidism || responses.anxiety || responses.drugabuse || responses.medSwitch !== 'Sleep related' || responses.hasHighBloodPressure) {
            primaryCategory = 'NonStimulant';
        } else if (responses.stimulants === 'Strongly' || responses.stimulants === 'Mid strong' || responses.stimulants === 'Neutral' || responses.medSwitch === 'Sleep related' || responses.insomnia === 'Yes') {
            primaryCategory = 'ShortRelease';
        } else if (responses.hasBingeEatingDisorder) {
            primaryCategory = 'LongActing';
        } else {
            primaryCategory = 'NoMeds';
        }
      let result = null 


      while (!result) {
        switch (primaryCategory) {
          case 'NoMeds':
            result = 'NoMeds';
            break;
    
          case 'NonStimulant':
            if (responses.age === "18-65") {
              if (!responses.ADHDMeds.includes("Strattera (Atomoxetine)")) {
                result = 'Strattera';
              } else if (!responses.ADHDMeds.includes("Wellbutrin (bupropion)")) {
                result = 'Wellbutrin';
              } else if (!responses.ADHDMeds.includes("Intuniv XR (Guanfacine XR)")) {
                result = 'Intuniv XR';
              }
            }
            // Adjust accordingly for other age groups or fallback to the next category
            if (!result) {
              primaryCategory = 'ShortRelease'; // Move to the next logical category
            }
            break;
    
          case 'ShortRelease':
            if (!responses.ADHDMeds.includes("Dexedrine")) {
              result = 'Dexedrine';
            } else if (!responses.ADHDMeds.includes("Ritalin")) {
              result = 'Ritalin';
            }
            // Fallback to the next category if preferred Short Release options are exhausted
            if (!result) {
              primaryCategory = 'LongActing';
            }
            break;
    
          case 'LongActing':
            if (!responses.ADHDMeds.includes("Vyvanse")) {
              result = 'Vyvanse';
            } else if (!responses.ADHDMeds.includes("Concerta")) {
              result = 'Concerta';
            }
            // Fallback to the next category if preferred Long Acting options are exhausted
            if (!result) {
              primaryCategory = 'NonStimulant'; // Consider if you want to loop back or proceed differently
            }
            break;
          
          // Add more cases if necessary
    
          default:
            // If no category fits or all options are exhausted
            result = 'CustomRecommendation';
            break;
        }
    
        // Break the loop if a result is determined or if a fallback mechanism isn't applicable
        if (result) break;
      }
    
      return result;
    };


        
   
    useEffect(() => {
        const medicationRecommendation = decideMedication(responses);
        setResponses(prevResponses => ({ ...prevResponses, medicationRecommendation }));
      }, [responses]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const medicationRecommendation = decideMedication(responses);
    setResponses(prevResponses => ({
      ...prevResponses,
      recommendation: medicationRecommendation,
    }));
  };
  const handleResponseChange = (question, value) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [question]: value,
    }));
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
              question="If you have ever switched ADHD meds, why?" 
              all={["Sleep related", "Gastrointestinal related", "Emotional dysregulation", "Did not switch"]} 
              onChange={(value) => handleResponseChange('medSwitch', value)}
            />

          <QuestionWrap 
            question="Have you been diagnosed with insomnia?" 
            all={["Yes", "No"]} 
            onChange={(value) => handleResponseChange('insomnia', value)}
          />

          <QuestionWrap 
            question="Have you been diagnosed with Binge Eating Disorder?" 
            all={["Yes", "No"]} 
            onChange={(value) => handleResponseChange('hasBingeEatingDisorder', value)}
          />

          <QuestionWrap 
            question="Would you rather a medicine that is short acting(lasts around 4-6 hours) or long acting(8-12 hours)?" 
            all={["Short Acting", "Long Acting"]} 
            onChange={(value) => handleResponseChange('medActivityLength', value)}
          />

          <QuestionWrap 
            question="Have  you been diagnosed paranoia?" 
            all={["Yes", "No"]} 
            onChange={(value) => handleResponseChange('haveParanoia', value)}
          />

          <QuestionWrap 
            question="Have  you been diagnosed with high blood pressure?" 
            all={["Yes", "No"]} 
            onChange={(value) => handleResponseChange('hasHighBloodPressure', value)}
          />

          <QuestionWrap 
            question="Have you been diagnosed with hyperthyroidism?" 
            all={["Yes", "No"]} 
            onChange={(value) => handleResponseChange('hasHyperThyroidism', value)}
          />

          <QuestionWrap 
            question="Have  you been diagnosed with Glaucoma?" 
            all={["Yes", "No"]} 
            onChange={(value) => handleResponseChange('hasGlaucoma', value)}
          />

          <QuestionWrap 
            question="Generally speaking how do you react to stimulants (coffee, energy drinks, caffeine pills, etc.)?" 
            all={["Strongly", "Mid strong", "Neutral", "Weak", "None"]} 
            onChange={(value) => handleResponseChange('stimulants', value)}
          />

        <QuestionWrap
          question="Do you have any instances of heart disease and / or heart defects or a family history of heart disease or defects?"
          all={["Yes","No"]}
          onChange={(value) => handleResponseChange('heart', value)}
        />

        <QuestionWrap
          question="Are you bipolar or does being bipolar run in your family?"
          all={["Yes","No"]}
          onChange={(value) => handleResponseChange('bipolar', value)}
        />

        <QuestionWrap
          question="Are you pregnant?"
          all={["Yes","No"]}
          onChange={(value) => handleResponseChange('pregnant', value)}
        />

        <QuestionWrap
          question="Have you been dignosed with or have high levels of anxiety?"
          all={["Yes","No"]}
          onChange={(value) => handleResponseChange('anxiety', value)}
        />
        <QuestionWrap
          question="Do you have a history of drug abuse?"
          all={["Yes","No"]}
          onChange={(value) => handleResponseChange('drugabuse', value)}
        />

        <QuestionWrap
          question="Are you taking any other medicines?"
          all={["MAO Inhibitors","Stimulants", "None"]}
          onChange={(value) => handleResponseChange('meds', value)}
        />

        <QuestionWrap
          question="What is your age range?"
          all={["6-12","13-17", "18-65"]}
          onChange={(value) => handleResponseChange('age', value)}
        />

        <QuestionWrap 
                question="Which ADHD Medicines have you taken?" 
                all={[
                    "Adderall XR", 
                    "Vyvanse", 
                    "Dexedrine",
                    "Dexedrine Spansule",
                    "Adzenys XR",
                    "Dynavel XR",
                    "Biphentin",
                    "Concerta",
                    "Foquest",
                    "Ritalin SR",
                    "Ritalin",
                    "Focalin XR",
                    "Aptensio-XR",
                    "Strattera (Atomoxetine)",
                    "Intuniv XR (Guanfacine XR)",
                    "Wellbutrin (bupropion)"
                ]} 
                onChange={(value) => handleResponseChange('ADHDMeds', value, true)} 
                isMultiple={true} 
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
