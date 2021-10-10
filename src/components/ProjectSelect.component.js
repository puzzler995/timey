import React from 'react';
import { Select } from 'semantic-ui-react';

const exampleOptions = [
  { key: 'acd', value: 'acd', text: "On Phones" },
  { key: 'men', value: 'men', text: "Mentor"},
  { key: 'esc', value: 'esc', text: "Escalation"},
  
]

export default class ProjectSelect extends React.Component {
  render() {
    return(
      <Select placeholder="Select your Project" options={exampleOptions} />
    );
  }
}