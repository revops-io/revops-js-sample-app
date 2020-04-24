import React, { Component } from "react";
import { withRouter } from "react-router";
import { PaymentMethod } from "revops-js";
import "dotenv/config";

import { Button, Loader, Dimmer, Segment, Message } from "semantic-ui-react";

import "revops-js/themes/defaultStyles.css";
import "./Payment.css";
import { Link } from "react-router-dom";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonMessage: "Save",
      isButtonDisabled: false,
      loaded: false,
    };
    this.saveRef = React.createRef();
    this.timeOut = null;
  }

  componentWillMount() {
    // clean up the timer in the rare case it is still
    clearTimeout(this.timeOut);
  }

  submitSecure = () => {
    // tell the revops form to submit itself
    if (!!this.saveRef === true) {
      this.setState({ buttonMessage: "Saving", isButtonDisabled: true });
      this.saveRef.current.onSubmit();
    }
  };

  handleValidationError = () => {
    this.timeOut = setTimeout(() => {
      this.setState({ buttonMessage: "Save", isButtonDisabled: false });
    }, 250);
  };

  handleError = () => {
    this.setState({ buttonMessage: "Save", isButtonDisabled: false });
  };

  handleComplete = () => {
    const { history } = this.props;
    this.setState({
      buttonMessage: "Success",
      isButtonDisabled: true,
      complete: true,
    });
    history.push("/complete");
  };

  handleLoading = () => {
    this.setState({ loaded: true });
  };

  render() {
    const {
      /*
       * RevOps API Sandbox Key
       * find me at https://<your_instance>.revops.io/integrations/api/key
       */
      publicKey = "pk_sandbox_5f6b5b57b4a14934bd7f979588739420",

      /*
       * Your Customer's Account ID,
       * can be a string up to 255 characters long.
       */
      accountId = "your-acct-id" + Date.now(), // append date to make unique

      /* Your Customer's email address. */
      email = "example@email.com",
    } = this.props;

    const { loaded, buttonMessage, isButtonDisabled } = this.state;

    return (
      <div id="revops-example">
        {!!publicKey === false && (
          <Message negative className="payment__message">
            <Message.Header>No API KEY</Message.Header>
            <p>{"Add your API key to the Payment component."}</p>
          </Message>
        )}
        <PaymentMethod
          loadingState={
            // customize the loading message
            <Segment placeholder basic>
              <Dimmer active inverted>
                <Loader inverted>Establishing a secure connection.</Loader>
              </Dimmer>
            </Segment>
          }
          apiOptions={{
            loggingLevel: "error", // "warning" // "log"
          }}
          publicKey={publicKey} // revops also provides JWT authentication
          account={{
            accountId,
            email,
          }}
          methods={["credit-card", "ach"]}
          instrument={{
            // seed the form with test values
            account_number: "000123456789",
            card_number: "4111111111111111",
            card_expdate: {
              month: "01",
              year: "2035",
            },
            routing_number: "110000000",
            postal_code: "12345",
            card_cvv: "264",
          }}
          saveRef={this.saveRef}
          onValidationError={this.handleValidationError}
          onComplete={this.handleComplete}
          onError={(error) => console.log(error)}
          onLoad={this.handleLoading}
        />
        {loaded && (
          <Message className="payment__message">
            <a href="https://stripe.com/docs/testing">
              Find more test cards and accounts.
            </a>
          </Message>
        )}
        <div className="payment__btn--wrapper">
          {loaded && (
            <>
              <Button
                as={Link}
                to="/terms"
                small="small"
                className="payment__btn"
                disabled={isButtonDisabled}
                content="Previous"
              />
              <Button
                primary
                className="payment__btn"
                onClick={this.submitSecure}
                content={buttonMessage}
                disabled={isButtonDisabled}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Payment);
