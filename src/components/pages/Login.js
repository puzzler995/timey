import React, { useState } from 'react';
import {Box, Button, Card, CardBody, CardFooter, CardHeader, Form, FormField, Heading, TextInput} from 'grommet';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  //TODO: Need to Hash Passwords before sending to API in plaintext
  return {"token":"test"}; //TODO: Build an actual login API request here
}

export default function Login({ setToken }) {
  const [form, setFormValue] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser(form);
    setToken(token);
  }

  return (
    <Box fill justify="center" align="center" margin={{vertical:"xlarge"}}>
    <Card height="fill" width="medium" justify="center" pad="medium">

      <Form 
        value={form}
        onSubmit={handleSubmit}
        onChange={nextValue => setFormValue(nextValue)}
      >
          <Heading level="3">Welcome to Timey</Heading>
          <Heading level="3">Please Login:</Heading>
        <CardBody>
          <FormField
            name="username"
            label="Username"
            htmlFor='username-input-id'
          >
            <TextInput id="username-input-id" name="username"/>
          </FormField>
          <FormField
            name="password"
            label="Password"
            htmlFor="password-input-id"
          >
            <TextInput id="password-input-id" name="password" type="password" />
          </FormField>
        </CardBody>
        <CardFooter>
        <Button type="submit" primary label="Login" />
        </CardFooter>
      </Form>
    </Card>
    </Box>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}