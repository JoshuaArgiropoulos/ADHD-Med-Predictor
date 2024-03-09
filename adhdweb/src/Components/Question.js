import React from 'react';
import '../Styles/Question.css'


class QuestionWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [],
        };
    }

    
  render() {
    
        const divElems = renderQuests(this.props.all);
        return (
    <div className="questionWrap">
      <h3 className="quest">{this.props.question}</h3>
      {divElems}
      
    </div>)
  }

}

function renderQuests(labels) {
    let x = []
    for (let i = 0; i < labels.length; i++) {
        x.push(<div class="questForm">
            <input name={labels[0]} type="radio"></input>
            {labels[i]}
            
            </div>
            );
    }
    return x;
};

export default QuestionWrap;