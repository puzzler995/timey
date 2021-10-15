import { Box, Heading, Button, Nav, Select } from "grommet";
import { Clock, DocumentTime, Home, Services, Logout,Play, Pause } from "grommet-icons";
import React, { useState } from "react";

export default function NavBar() {
  const [project, setProject] = useState('first');
  const [timerRunning, setTimer] = useState(false);
  function handleTimer() {
    if (timerRunning) {
      //TODO: Create Stop Timer API Call
      setTimer(false);
    } else {
      //TODO: Create Start Timer API Call
      setTimer(true);
    }

  }

  return (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad='small'
      elevation='medium'
    >
      <Box direction="row">
        <Heading level="3"><DocumentTime /> Timey</Heading>
        <Nav pad="small" justify="center">
          <Button icon={<Home />}  label="Dashboard" href="/" />
        </Nav>
        <Nav pad="small" justify="center">
          <Button icon={<Clock />}  label="Log History" href="/history" />
        </Nav>
        <Nav pad="small" justify="center">
          <Button icon={<Services />}  label="Settings" href="/settings" />
        </Nav>
        <Nav pad="small" justify="center">
          <Button icon={<Logout />}  label="Logout" href="/logout" />
        </Nav>
      </Box>
      <Box direction="row">
        <Button 
          icon={timerRunning ? <Pause /> : <Play/>}
          onClick={handleTimer}
        />
        <Select
          options={['first', 'second', 'third']}
          value={project}
          onChange={({ option }) => setProject(option)}
        />
      </Box>
    </Box>
  );

}