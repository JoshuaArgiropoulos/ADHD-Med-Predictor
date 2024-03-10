import React from 'react';
import '../Styles/Question.css';

class QuestionWrap extends React.Component {

  handleChange = (value, isMultiple) => {
    if (isMultiple) {
      // For multiple selections, toggle values in an array
      this.setState(prevState => {
        const currentSelections = new Set(prevState.selectedOptions);
        if (currentSelections.has(value)) {
          currentSelections.delete(value);
        } else {
          currentSelections.add(value);
        }
        return {selectedOptions: [...currentSelections]};
      });
    } else {
      // For single selection, just set the value
      this.setState({selectedOption: value});
    }
  };

  renderQuests = (labels) => {
    const inputType = this.props.isMultiple ? "checkbox" : "radio";
    return labels.map((label, index) => (
      <div className="questForm" key={index}>
        <label>
          <input
            type={inputType}
            name={this.props.question} 
            value={label}
            onChange={() => this.handleChange(label)}
          />
          {label}
        </label>
      </div>
    ));
  };

  render() {
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