import React, {Component, PropTypes} from 'react';
import SignOutLink from './common/sign-out';
import CancelLink from './common/cancel';
import VerifyButton from './common/reverify';

class Home extends Component {
  renderNotice () {
    const {billingDetails, whoami} = this.props;

    let notice = null;

    if (!billingDetails) {
      const trialEndDateString = (new Date(whoami.trialEnd * 1000)).toDateString();
      notice = (
        <p className="notice info">
          Your free trial ends on <strong>{trialEndDateString}</strong>
          <br/>
          <br/>
          <a href="/app/subscribe/" className="button button--compact">
            Choose Plan
          </a>
        </p>
      )
    } else if (billingDetails.subTrialing) {
      const trialEndDateString = (new Date(billingDetails.subTrialEnd * 1000)).toDateString();
      notice = (
        <p className="notice info">
          Your free trial ends on <strong>{trialEndDateString}</strong>
        </p>
      )
    } else if (billingDetails.subCancelled) {
      const dateString = (new Date(billingDetails.subPeriodEnd * 1000)).toDateString();
      notice = (
        <p className="notice info">
          Your subscription will be <strong>Cancelled</strong> on <strong>{dateString}</strong>
          <br/>
          <br/>
          <a href="/app/subscribe/" className="button button--compact">
            Resubscribe
          </a>
        </p>
      )
    } else if (billingDetails.isPaymentRequired) {
      notice = (
        <p className="notice info">
          <strong>Payment Required</strong>. Please subscribe to a plan to continue
          using Insomnia.
        </p>
      )
    }

    return <div>{notice}<br/></div>;
  }

  renderVerifiedNotice () {
    if (this.props.whoami.isVerified) {
      return null;
    }

    return (
      <p className="notice warn">
        Your email address <code>{this.props.whoami.email}</code> is not yet verified
        <br/>
        <br/>
        <VerifyButton className="button button--compact"/>
      </p>
    )
  }

  render () {
    const {whoami, billingDetails} = this.props;
    const description = billingDetails && billingDetails.description;

    const total = billingDetails && billingDetails.subTotal;
    const discountAmount = billingDetails ? total * (billingDetails.subPercentOff / 100) : 0;
    const totalAfterDiscount = total - discountAmount;
    const periodEnd = billingDetails && new Date(billingDetails.subPeriodEnd * 1000).toDateString();

    return (
      <div>
        {this.renderVerifiedNotice()}
        {this.renderNotice()}
        <p className="bold text-lg">Hi {whoami.firstName},</p>
        {description ? <p>You are subscribed to <strong>{description}</strong>!</p> : null}
        {(billingDetails && !billingDetails.subCancelled) ? (
            <p>
              Your next invoice is scheduled for <strong>{periodEnd}</strong> and will be
              {" "}
              <strong>${(totalAfterDiscount / 100).toFixed(2)} USD</strong>
              {billingDetails.subPercentOff ? (
                  <span className="success bold">
                {" "}
                    (after {billingDetails.subPercentOff}% discount)
              </span>
                ) : null}
              .
            </p>
          ) : null}
        <p>Here are some things you might want to do.</p>
        <ul>
          <li>
            <a href="/app/teams/">Manage Teams</a>
          </li>
          <li>
            <a href="/app/change-password/">Change Password</a>
          </li>
          <li>
            <a href="/app/subscribe/">Update Subscription</a>
          </li>
          <li>
            <CancelLink/>
          </li>
          <li>
            <SignOutLink/>
          </li>
        </ul>
      </div>
    )
  }
}

Home.propTypes = {
  whoami: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    planName: PropTypes.string.isRequired,
    trialEnd: PropTypes.number.isRequired,
    isTrialing: PropTypes.bool.isRequired,
    isPaymentRequired: PropTypes.bool.isRequired,
    canManageTeams: PropTypes.bool.isRequired,
    isVerified: PropTypes.bool.isRequired,
  }).isRequired,
  billingDetails: PropTypes.shape({
    description: PropTypes.string.isRequired,
    isPaymentRequired: PropTypes.bool.isRequired,
    subTrialing: PropTypes.bool.isRequired,
    subTrialEnd: PropTypes.number.isRequired,
    subCancelled: PropTypes.bool.isRequired,
    subPeriodEnd: PropTypes.number.isRequired,
    subPercentOff: PropTypes.number.isRequired,
    subTotal: PropTypes.number.isRequired,
  }),
};

export default Home;
