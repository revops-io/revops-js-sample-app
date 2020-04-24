import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./Navigation.css";

export const Navigation = ({
  next = false,
  last = false,
  nextDisabled = false,
}) => {
  return (
    <div className="nav__buttons">
      {last && (
        <Button size="small" as={Link} to={last}>
          Last
        </Button>
      )}
      {next && (
        <Button
          primary
          small="small"
          as={Link}
          to={next}
          disabled={nextDisabled}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default React.memo(Navigation);
