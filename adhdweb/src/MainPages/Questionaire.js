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
//Results Strattera, Wellbutrin, Intuniv XR, Ritalin, Concerta, Dexedrine, Vyvanse, 
    const drugSentences = {
        Strattera: "Strattera, or atomoxetine, diverges from typical ADHD medications by focusing on norepinephrine rather than stimulants like Adderall. It acts as a brain gardener, nurturing neurotransmitters for improved focus without a stimulant effect. By enhancing norepinephrine levels, Strattera strengthens attention and self-control signals in the brain, aiding in ADHD symptom management. Its non-stimulant nature reduces abuse potential and provides steady, round-the-clock support. Strattera offers a less buzzy alternative for improving focus and attention, making it a valuable tool in ADHD treatment.",
        Wellbutrin: "Wellbutrin, or bupropion, serves as a versatile tool for both depression and ADHD. Unlike stimulant medications, it focuses on dopamine and norepinephrine, enhancing mood and attention. By improving neurotransmitter delivery, Wellbutrin aids in task adherence and resistance to distractions. Its non-stimulant nature makes it appealing for those seeking alternatives or experiencing side effects with traditional stimulants. Wellbutrin offers a unique route for managing ADHD symptoms, making it a valuable option for individuals with diverse needs.",
        IntunivXR: "Intuniv XR takes a non-stimulant approach as a calm coach for ADHD. By targeting alpha-2A adrenergic receptors, it enhances signal quality in the brain, particularly in attention and impulse control areas. This calms overactivity and improves focus without stimulant side effects. With its once-a-day dosing, Intuniv XR offers steady support for managing ADHD symptoms, without the risk of abuse or addiction. It provides a smooth, guiding presence for navigating the day with increased focus and less chaos.",
        Ritalin: "Ritalin functions as a pivotal tool in managing ADHD and narcolepsy, acting as a catalyst for heightened focus and diminished impulsivity. It operates as a conductor within the intricate network of brain activity, fine-tuning neural pathways to facilitate improved concentration and organizational skills. By elevating levels of dopamine and norepinephrine, pivotal neurotransmitters associated with attention and behavior, Ritalin enhances the brain's innate capacity to sustain focus and task engagement. This amplification effectively augments the brain's natural mechanisms for attention regulation, rendering tasks requiring prolonged concentration more manageable. Thus, Ritalin emerges as an invaluable asset in navigating the challenges posed by ADHD, ultimately enriching the overall quality of life for those grappling with these conditions.",
        Concerta: "Concerta acts as a steady rhythm for the brain, aiding in attention and focus for those with ADHD. It utilizes methylphenidate, delivered through an OROS system, providing an initial dose followed by gradual release throughout the day. By elevating neurotransmitter levels like dopamine and norepinephrine, Concerta enhances focus, impulse control, and organization. Its once-a-day dosing eliminates midday slumps, offering continuous symptom relief. Essentially, Concerta serves as a reliable, day-long support for improved focus and control in individuals with ADHD.",
        Dexedrine: "Dexedrine acts as a turbo boost for ADHD and narcolepsy, enhancing focus, attention, and behavior control. It increases dopamine and norepinephrine levels, facilitating better communication between brain cells. This helps reduce distractions and impulsiveness, making tasks more manageable. Dexedrine provides the chemical support needed for improved function, aiding individuals in leading more focused and productive lives.",
        Vyvanse: "Vyvanse is like a marathon runner for the brain, providing lasting support for managing ADHD. It contains lisdexamfetamine, which gradually activates after ingestion, offering a steady release of medication throughout the day. By increasing dopamine and norepinephrine levels, Vyvanse improves attention, impulse control, and focus, reducing distractions. Its smooth, consistent effect minimizes peaks and crashes, and its once-a-day dosing ensures reliable support from morning to night. Essentially, Vyvanse is a dependable ally for enhancing focus, attention, and daily functioning in individuals with ADHD.",
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
            <p>{drugSentences[responses.recommendation]}</p>

            </div>
            )}
        </form>
      </div>
    </div>
  );

}
export default Questionaire;
