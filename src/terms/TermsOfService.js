import React, { useState } from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

import { Container, Checkbox, Button } from "semantic-ui-react";

import { TERMS_OF_SEVICE } from "../constants/TermsOfService";
import "./TermsOfService.css";

export const TermsOfService = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Container className="terms">
      <Markdown
        className="terms__md-editor"
        source={TERMS_OF_SEVICE}
        escapeHtml={false}
      />
      <Checkbox
        className="terms__checkbox"
        label="I agree to the terms and conditions"
        onClick={() => setIsChecked(!isChecked)}
      />
      <div className="terms__buttons">
        <Button size="small" as={Link} to="/">
          Last
        </Button>
        <Button primary small="small" as={Link} to="/payment" disabled={!isChecked}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default React.memo(TermsOfService);
