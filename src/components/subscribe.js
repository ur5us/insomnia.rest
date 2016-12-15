import React, {Component, PropTypes} from 'react';

import * as session from '../session';

class Subscribe extends Component {
  state = {
    loading: false,
    planId: 'plus-monthly-1',
    fullName: '',
    cardNumber: '',
    expireMonth: '01',
    expireYear: '2018',
    cvc: '',
    zip: '',
    error: '',
  };

  _handleCardNumberChange = e => {
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
      this.setState({cardType});
    } else {
      this.setState({cardType: ''});
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
  };

  _handleUpdateInput = e => {
    this.setState({[e.target.name]: e.target.value, error: ''});
  };

  _handleSubmit = async e => {
    e.preventDefault();

    this.setState({loading: true});

    const params = {
      name: this.state.fullName,
      number: this.state.cardNumber.replace(/ /g, ''),
      cvc: this.state.cvc,
      exp_month: parseInt(this.state.expireMonth, 10),
      exp_year: parseInt(this.state.expireYear, 10),
    };

    if (this.state.zip) {
      params['address_zip'] = this.state.zip
    }

    Stripe.setPublishableKey(process.env.STRIPE_PUB_KEY);
    Stripe.card.createToken(params, async (status, response) => {
      if (status === 200) {
        try {
          await session.subscribe(response.id, this.state.planId);
          window.location = '/app/';
          return;
        } catch (err) {
          this.setState({error: err.message});
        }
      } else {
        this.setState({error: 'Payment failed unexpectedly. Please try again.'});
      }

      this.setState({loading: false});
    });
  };

  render () {
    const {
      loading,
      error,
      cardType,
      planId,
      expireMonth,
      expireYear,
    } = this.state;

    return (
      <form style={{margin: 'auto', maxWidth: '28rem'}} onSubmit={this._handleSubmit}>
        <div className="form-row center">
          <div className="form-control">
            <label>
              <input type="radio"
                     name="planId"
                     checked={planId === 'plus-monthly-1'}
                     onChange={this._handleUpdateInput}
                     value="plus-monthly-1"/>
              Per Month ($5/mo)
            </label>
          </div>
          <div className="form-control">
            <label>
              <input type="radio"
                     name="planId"
                     onChange={this._handleUpdateInput}
                     value="plus-yearly-1"/>
              Per Year ($50/yr)
            </label>
          </div>
        </div>
        <br/>
        <div className="form-control">
          <label>Full Name
            <input type="text"
                   name="fullName"
                   placeholder="Maria Garcia"
                   autoFocus
                   onChange={this._handleUpdateInput}
                   required/>
          </label>
        </div>
        <div className="form-control">
          <label>Card Number {cardType ? `(${cardType})` : null}
            <input type="text"
                   name="cardNumber"
                   placeholder="4012 0000 8888 1881"
                   onChange={this._handleCardNumberChange}
                   required/>
          </label>
        </div>
        <div className="form-row">
          <div className="form-control">
            <label>Expiration Date</label>
            <br/>
            <select name="expireMonth"
                    title="expire month"
                    defaultValue={expireMonth}
                    onChange={this._handleUpdateInput}>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            {" "}
            <select name="expireYear"
                    title="expire year"
                    defaultValue={expireYear}
                    onChange={this._handleUpdateInput}>
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
            <label>Security Code (CVC)
              <input type="text"
                     name="cvc"
                     placeholder="013"
                     onChange={this._handleUpdateInput}
                     required/>
            </label>
          </div>
        </div>

        <div className="form-control">
          <label>Zip/Postal Code <span className="faint">(Optional)</span>
            <input type="text"
                   name="zip"
                   placeholder="94301"
                   onChange={this._handleUpdateInput}
            />
          </label>
        </div>

        {error ? <small className="form-control error">** {error}</small> : null}

        <div className="form-row">
          <a href="/app/">&lt; Manage Account</a>
          <div className="form-control right">
            {loading ?
              <button type="button" disabled className="button">Loading</button> :
              <button type="submit" className="button">Subscribe</button>
            }
          </div>
        </div>

        <hr className="hr--skinny"/>
        <p className="small subtle center">
          Payments secured by <a href="https://stripe.com" target="_blank">Stripe</a>
        </p>
      </form>
    )
  }
}

Subscribe.propTypes = {};

export default Subscribe;
