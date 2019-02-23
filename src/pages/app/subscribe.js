import React from 'react';
import PropTypes from 'prop-types';
import * as session from '../../lib/session';
import App from '../../lib/app-wrapper';
import { site } from '../../config';
import Link from '../../components/link';

const planTypeTeam = 'team';
const planTypePlus = 'plus';
const planCycleMonthly = 'monthly';
const planCycleYearly = 'yearly';
const minTeamSize = 2;
const pricePerMember = 8;

const planIdMap = {
  'plus-monthly-1': [planTypePlus, planCycleMonthly, 1],
  'plus-yearly-1': [planTypePlus, planCycleYearly, 1],
  'team-monthly-1': [planTypeTeam, planCycleMonthly, 5],
  'team-yearly-1': [planTypeTeam, planCycleYearly, 5]
};

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    const { billingDetails, whoami } = props;

    const quantity = Math.max(
      minTeamSize,
      billingDetails ? billingDetails.subQuantity : 5
    );

    let planDescription;
    if (window.location.hash === '#teams') {
      planDescription = planIdMap['team-monthly-1'];
    } else if (window.location.hash === '#plus') {
      planDescription = planIdMap['plus-monthly-1'];
    } else {
      planDescription = planIdMap[whoami.planId];
    }

    const fullName = `${whoami.firstName} ${whoami.lastName}`.trim();

    this.state = {
      loading: false,
      planType: planDescription ? planDescription[0] : planTypePlus,
      planCycle: planDescription ? planDescription[1] : planCycleMonthly,
      quantity: quantity || 5,
      useExistingBilling: billingDetails && billingDetails.hasCard,
      fullName: fullName,
      cardNumber: '',
      expireMonth: '01',
      expireYear: '2018',
      cvc: '',
      zip: '',
      error: ''
    };
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.src = 'https://js.stripe.com/v2/';
    document.body.appendChild(s);
    s.addEventListener('load', () => {
      let key;
      if (window.location.hostname === 'staging.insomnia.rest') {
        key = 'pk_test_MbOhGu5jCPvr7Jt4VC6oySdH';
      } else if (window.location.hostname === 'localhost') {
        key = 'pk_test_MbOhGu5jCPvr7Jt4VC6oySdH'
      } else {
        key = 'pk_live_lntbVSXY3v1RAytACIQJ5BBH'
      }

      window.Stripe.setPublishableKey(key);
    });
  }

  _handleCardNumberChange(e) {
    // Using timeout or else target.value will not have been updated yet
    const value = e.target.value.trim();
    if (!value) {
      return;
    }

    const cardType = Stripe.card.cardType(value);
    const lastChar = value[e.target.value.length - 1];
    const num = value.replace(/[^0-9]*/g, '');
    let newNum = '';

    if (cardType.match(/american express/i)) {
      // 1111 222222 33333
      const g1 = num.slice(0, 4);
      const g2 = num.slice(4, 10);
      const g3 = num.slice(10, 15);

      newNum = g1;
      newNum += g2 ? ` ${g2}` : '';
      newNum += g3 ? ` ${g3}` : '';
    } else if (cardType.match(/diners club/i)) {
      // 1111 2222 3333 44
      const g1 = num.slice(0, 4);
      const g2 = num.slice(4, 8);
      const g3 = num.slice(8, 12);
      const g4 = num.slice(12, 14);

      newNum = g1;
      newNum += g2 ? ` ${g2}` : '';
      newNum += g3 ? ` ${g3}` : '';
      newNum += g4 ? ` ${g4}` : '';
    } else {
      // 1111 2222 3333 4444
      const g1 = num.slice(0, 4);
      const g2 = num.slice(4, 8);
      const g3 = num.slice(8, 12);
      const g4 = num.slice(12, 16);

      newNum = g1;
      newNum += g2 ? ` ${g2}` : '';
      newNum += g3 ? ` ${g3}` : '';
      newNum += g4 ? ` ${g4}` : '';
    }

    // Handle trailing dash so we can add and delete dashes properly
    if (lastChar === ' ') {
      newNum += ' ';
    }

    // this.setState({cardType: cardType === 'Unknown' ? '' : cardType});
    if (cardType.toLowerCase() !== 'unknown') {
      this.setState({ cardType });
    } else {
      this.setState({ cardType: '' });
    }

    // Only update number if it changed from the user's original to prevent cursor jump
    if (newNum !== value) {
      e.target.value = newNum;
    }

    if (Stripe.card.validateCardNumber(newNum)) {
      e.target.setCustomValidity('');
    } else {
      e.target.setCustomValidity('Invalid card number');
    }

    this._handleUpdateInput(e);
  }

  _handleUpdateInput(e) {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [e.target.name]: value, error: '' });
  }

  async _handleSubmit(e) {
    e.preventDefault();

    this.setState({ loading: true });

    const params = {
      name: this.state.fullName,
      number: this.state.cardNumber.replace(/ /g, ''),
      cvc: this.state.cvc,
      exp_month: parseInt(this.state.expireMonth, 10),
      exp_year: parseInt(this.state.expireYear, 10),
      address_zip: this.state.zip,
    };

    const teamSize = Math.max(minTeamSize, this.state.quantity);
    const quantity = this.state.planType === planTypePlus ? 1 : teamSize;
    const planId = `${this.state.planType}-${this.state.planCycle}-1`;

    const finishBilling = async tokenId => {
      try {
        await session.subscribe(tokenId, planId, quantity);
        window.location = '/app/account/';
      } catch (err) {
        this.setState({ error: err.message, loading: false });
      }
    };

    if (this.state.useExistingBilling) {
      await finishBilling();
    } else {
      window.Stripe.card.createToken(params, async (status, response) => {
        if (status === 200) {
          await finishBilling(response.id);
        } else {
          const msg = response.error
            ? response.error.message
            : 'Unknown error (112)';
          this.setState({ error: `Card Error: ${msg}` });
        }

        this.setState({ loading: false });
      });
    }
  }

  _calculatePrice(planType, planCycle, quantity) {
    quantity = Math.max(quantity, minTeamSize);
    const priceIndex = planCycle === planCycleMonthly ? 0 : 1;
    const price =
      planType === planTypePlus
        ? [5, 50]
        : [pricePerMember * quantity, pricePerMember * 10 * quantity];

    return price[priceIndex];
  }

  _getPlanDescription(planType, planCycle, quantity) {
    const cycle = planCycle === planCycleMonthly ? 'month' : 'year';
    const price = this._calculatePrice(planType, planCycle, quantity);

    return `$${price} / ${cycle}`;
  }

  renderBillingNotice() {
    const { whoami, billingDetails } = this.props;

    const trialEndDate = new Date(whoami.trialEnd * 1000);
    const trialEndMillis = trialEndDate.getTime() - Date.now();
    const trialDays = Math.ceil(trialEndMillis / 1000 / 60 / 60 / 24);

    if (billingDetails && !billingDetails.isBillingAdmin) {
      return (
        <p className="notice warn">
          Since you are part of a paying team, you don't need to pay
        </p>
      );
    }

    if (!billingDetails && trialDays > 0) {
      return (
        <p className="notice info">
          You still have <strong>{trialDays}</strong> day{trialDays === 1
            ? ''
            : 's'}{' '}
          left on your free trial
        </p>
      );
    }

    return null;
  }

  render() {
    const {
      loading,
      error,
      cardType,
      planType,
      planCycle,
      expireMonth,
      expireYear,
      quantity,
      useExistingBilling,
      fullName
    } = this.state;

    const { billingDetails } = this.props;

    if (billingDetails && !billingDetails.isBillingAdmin) {
      return this.renderBillingNotice();
    }

    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        {this.renderBillingNotice()}
        <div className="form-control">
          <label>
            Plan Type
            <select
              className="wide"
              name="planType"
              defaultValue={planType}
              autoFocus
              onChange={this._handleUpdateInput.bind(this)}>
              <option value={planTypePlus}>Plus (Individual)</option>
              <option value={planTypeTeam}>Teams</option>
            </select>
          </label>
        </div>
        {planType === planTypeTeam ? (
          <div className="form-control">
            <label>
              Team Size{' '}
              {quantity < minTeamSize ? (
                <small>
                  &#40;billed for a minimum of {minTeamSize} members&#41;
                </small>
              ) : null}
              <input
                type="number"
                defaultValue={quantity}
                onChange={this._handleUpdateInput.bind(this)}
                min="1"
                max="500"
                title="Number of Team Members"
                name="quantity"
              />
            </label>
          </div>
        ) : null}
        <div className="form-row center">
          <div className="form-control">
            <label>
              <input
                type="radio"
                name="planCycle"
                checked={planCycle === planCycleMonthly}
                onChange={this._handleUpdateInput.bind(this)}
                value={planCycleMonthly}
              />
              {this._getPlanDescription(planType, planCycleMonthly, quantity)}
            </label>
          </div>
          <div className="form-control">
            <label>
              <input
                type="radio"
                name="planCycle"
                checked={planCycle === planCycleYearly}
                onChange={this._handleUpdateInput.bind(this)}
                value={planCycleYearly}
              />
              {this._getPlanDescription(planType, planCycleYearly, quantity)}
            </label>
          </div>
        </div>
        <hr className="hr--skinny" />
        <h2 className="text-lg">Billing Information</h2>
        {billingDetails && billingDetails.hasCard ? (
          <div className="form-control">
            <label>
              <input
                type="checkbox"
                name="useExistingBilling"
                onChange={this._handleUpdateInput.bind(this)}
                defaultChecked={useExistingBilling}
              />
              Use card ending in <code>{billingDetails.lastFour}</code>
            </label>
          </div>
        ) : null}

        {useExistingBilling ? (
          <div />
        ) : (
          <div>
            <div className="form-control">
              <label>
                Full Name
                <input
                  type="text"
                  name="fullName"
                  placeholder="Maria Garcia"
                  defaultValue={fullName}
                  onChange={this._handleUpdateInput.bind(this)}
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label>
                Card Number {cardType ? `(${cardType})` : null}
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="XXXX XXXX XXXX XXXX"
                  onChange={this._handleCardNumberChange.bind(this)}
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <div className="form-control">
                <label>Expiration Date</label>
                <br />
                <select
                  name="expireMonth"
                  title="expire month"
                  defaultValue={expireMonth}
                  onChange={this._handleUpdateInput.bind(this)}>
                  <option value="01">01 – January</option>
                  <option value="02">02 – February</option>
                  <option value="03">03 – March</option>
                  <option value="04">04 – April</option>
                  <option value="05">05 – May</option>
                  <option value="06">06 – June</option>
                  <option value="07">07 – July</option>
                  <option value="08">08 – August</option>
                  <option value="09">09 – September</option>
                  <option value="10">10 – October</option>
                  <option value="11">11 – November</option>
                  <option value="12">12 – December</option>
                </select>{' '}
                <select
                  name="expireYear"
                  title="expire year"
                  defaultValue={expireYear}
                  onChange={this._handleUpdateInput.bind(this)}>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                  <option value="2033">2033</option>
                  <option value="2034">2034</option>
                  <option value="2035">2035</option>
                  <option value="2036">2036</option>
                  <option value="2037">2037</option>
                  <option value="2038">2038</option>
                  <option value="2039">2039</option>
                </select>
              </div>
              <div className="form-control">
                <label>
                  Security Code (CVC)
                  <input
                    type="text"
                    name="cvc"
                    onChange={this._handleUpdateInput.bind(this)}
                    required
                  />
                </label>
              </div>
            </div>

            <div className="form-control">
              <label>
                Zip/Postal Code
                <input
                  required
                  type="text"
                  name="zip"
                  onChange={this._handleUpdateInput.bind(this)}
                />
              </label>
            </div>
          </div>
        )}

        {error ? (
          <small className="form-control error">** {error}</small>
        ) : null}

        <div className="form-control right padding-top-sm">
          {loading ? (
            <button type="button" disabled className="button">
              Subscribing...
            </button>
          ) : (
            <button type="submit" className="button">
              Subscribe for{' '}
              {this._getPlanDescription(planType, planCycle, quantity)}
            </button>
          )}
        </div>

        <hr className="hr--skinny" />
        <p className="small subtle center">
          Payments secured by{' '}
          <Link to="https://stripe.com" target="_blank">
            Stripe
          </Link>
        </p>
      </form>
    );
  }
}

Subscribe.propTypes = {
  whoami: PropTypes.shape({
    planId: PropTypes.string.isRequired
  }).isRequired,
  billingDetails: PropTypes.shape({
    subQuantity: PropTypes.number.isRequired,
    hasCard: PropTypes.bool.isRequired,
    lastFour: PropTypes.string.isRequired,
    isBillingAdmin: PropTypes.string.isRequired
  })
};

export default () => (
  <App
    title="Subscribe to Plan"
    subTitle="Visa, MasterCard, or American Express">
    {props => <Subscribe {...props} />}
  </App>
);
