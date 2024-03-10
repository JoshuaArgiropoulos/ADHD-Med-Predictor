import React from 'react';
import '../Styles/Question.css';

class QuestionWrap extends React.Component {
  handleChange = (value) => {
    // Directly call the onChange prop passed from the parent component
    // No need to manage the state here or check for multiple selections; handle it in the parent
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  renderQuests = (labels) => {
    const inputType = this.props.isMultiple ? "checkbox" : "radio";
    // Use a unique name for radio buttons to ensure only one can be selected at a time
    const inputName = this.props.isMultiple ? undefined : this.props.question;

    return (
      <div className="questOptionsContainer"> {/* Wrap options in a scrollable container */}
        {labels.map((label, index) => (
          <div className="questForm" key={index}>
            <label>
              <input
                type={inputType}
                name={inputName} // Group radio buttons by the same name
                value={label}
                onChange={() => this.handleChange(label)}
              />
              {label}
            </label>
          </div>
        ))}
      </div>
    );
  };

  render() {
    // Render the questions within a scrollable container
    const divElems = this.renderQuests(this.props.all);
    return (
      <div className="questionWrap">
        <h3 className="quest">{this.props.question}</h3>
        {divElems}
      </div>
    );
  }
}

export default QuestionWrap;