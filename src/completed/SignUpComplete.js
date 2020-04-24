import React from "react";
import { Header, Container } from "semantic-ui-react";

import { SuccessConfetti } from "../shared";

import "./SignUpComplete.css"
import { Link } from "react-router-dom";

export const SignUpComplete = () => {
  return (
    <Container className="success" textAlign="center" text>
      <Header>Thank you for signing up!</Header>
      <p>We will be in contact in the next few days. </p>
      <SuccessConfetti delay={200} />
      <Link to="/" >Back to start</Link>
    </Container>
  );
};

export default SignUpComplete;
