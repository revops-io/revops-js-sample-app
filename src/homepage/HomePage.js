import React, { useState } from "react";

import { Container, Button, Form } from "semantic-ui-react";

import { Link } from "react-router-dom";

export const HomePage = () => {

  const [text, setText] = useState("");

  return (
    <div className="home">
      <Container text>
        <h1 className="home__header">
          {process.env.COMPANY_NAME}
        </h1>
        <p>
          Increase velocity and transparency for every market segment with
          real-time pricing, flexible approvals, and automated billing.
        </p>
        <Form>
          <Form.Input
            label="Please enter your email"
            placeholder="joe@schmoe.com"
            onChange={(_, { value }) => setText(value)}
          />
          <Button
            // really simple check for an email address
            disabled={text?.includes("@") === false}
            className="home__btn"
            primary
            small="small"
            as={Link}
            to="/terms"
            content="Next"
            tabIndex="1"
          />
        </Form>
      </Container>
    </div>
  );
};

export default HomePage;
