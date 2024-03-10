import React from 'react';
import '../Styles/Question.css';

class QuestionWrap extends React.Component {

  handleChange = (value) => {
    // Call the onChange prop with the selected value
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    // Pass handleChange to renderQuests
    const divElems = renderQuests(this.props.all, this.handleChange, this.props.question);
    return (
      <div className="questionWrap">
        <h3 className="quest">{this.props.question}</h3>
        {divElems}
      </div>
    );
  }
}

// Modify renderQuests to accept and use an onChange function
function renderQuests(labels, onChange, question) {
  return labels.map((label, index) => (
    <div className="questForm" key={index}>
      <label>
        <input
          name={question} // Use question text as name to ensure uniqueness
          type="radio"
          value={label}
          onChange={() => onChange(label)} // Use arrow function to pass value
        />
        {label}
      </label>
    </div>
  ));
}

export default QuestionWrap;