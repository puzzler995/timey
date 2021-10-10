import React from 'react';
import { Button, Icon } from "semantic-ui-react";

export default class TimerStartButton extends React.Component {
  render() {
    return(
      <Button icon>
        <Icon name="play circle outline" />
      </Button>
    )
  }
}