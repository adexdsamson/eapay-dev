/* eslint-disable react/jsx-no-target-blank */
import "./style.css";

const FloatingInput = () => {
  return (
    <div className="sp-form-outer sp-force-hide">
      <div
        id="sp-form-183373"
        sp-id="183373"
        sp-hash="671250253971194beefe14eda3cdd1513371a7a80bf0aba0d7192e46da45f30d"
        sp-lang="en"
        className="sp-form sp-form-regular sp-form-embed m-0 p-0"
        sp-show-options="%7B%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22condition%22%3A%22onEnter%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A10%2C%22repeat%22%3A3%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22animation%22%3A%22%22%2C%22hideOnMobile%22%3Afalse%2C%22urlFilter%22%3Afalse%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22hide%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22%22%7D%5D%2C%22analytics%22%3A%7B%22ga%22%3A%7B%22eventLabel%22%3Anull%2C%22send%22%3Afalse%7D%2C%22ym%22%3A%7B%22counterId%22%3Anull%2C%22eventLabel%22%3Anull%2C%22targetId%22%3Anull%2C%22send%22%3Afalse%7D%7D%2C%22utmEnable%22%3Afalse%7D"
      >
        <div className="sp-form-fields-wrapper">
          <div className="sp-message">
            <div></div>
          </div>
          <form
            noValidate=""
            className="sp-element-container sp-lg sp-field-nolabel "
          >
            <div
              className="sp-field "
              sp-id="sp-ca610ba0-257d-4442-8a67-5ff5ced02a5e"
            >
              <label className="sp-control-label">
                <span>Email</span>
                <strong>*</strong>
              </label>
              <input
                type="email"
                sp-type="email"
                name="sform[email]"
                className="form-control form-control-lg sp-form-control"
                placeholder="username@gmail.com"
                sp-tips="%7B%22required%22%3A%22Required%20field%22%2C%22wrong%22%3A%22Wrong%20email%22%7D"
                required="required"
              />
            </div>
            <div
              className="sp-field sp-button-container "
              sp-id="sp-155bdf1b-4c58-40f9-a928-64f9975cd50d"
            >
              <button
                id="sp-155bdf1b-4c58-40f9-a928-64f9975cd50d"
                className="sp-button"
              >
                Get Notified When We Launch{" "}
              </button>
            </div>
          </form>
          <div className="sp-link-wrapper sp-brandname__left">
            <a
              className="sp-link "
              target="_blank"
              href="https://sendpulse.com/forms-powered-by-sendpulse?from=7643491"
            >
              <span className="sp-link-img">&nbsp;</span>
              <span translate="FORM.PROVIDED_BY">Provided by SendPulse</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingInput;
