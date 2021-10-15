import React, { useState } from 'react';
import {Button, Form, FormField, Heading, TextInput} from 'grommet';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  //TODO: Need to Hash Passwords before sending to API in plaintext
  return "yayy"; //TODO: Build an actual login API request here
}

export default function Login({ setToken }) {
  const [form, setFormValue] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser(form);
    setToken(token);
  }

  return (

    <Form 
      value={form}
      onSubmit={handleSubmit}
      onChange={nextValue => setFormValue(nextValue)}
    >
      <Heading level="1">Welcome to Timey</Heading>
      <Heading level="2">Please Login:</Heading>
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
      <Button type="submit" primary label="Login" />
    </Form>

  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}