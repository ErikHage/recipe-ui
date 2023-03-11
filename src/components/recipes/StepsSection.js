import React, { Component } from 'react';

function compareByStepId(a, b) {
  if (a.id < b.id)
    return -1;
  if (a.id > b.id)
    return 1;
  return 0;
}

class StepsSection extends Component {
  render() {
    const sortedSteps = this.props.steps.sort(compareByStepId);

    return (
      <div className={'recipe-section steps-section'}>
        <h3 className={'recipe-section-header'}>Steps</h3>
        <ol>
          {sortedSteps.map((step, index) =>
            <li key={index}>{step.text}</li>
          )}
        </ol>
      </div>
    );
  }
}

export default StepsSection;
