import '../styles/callout.css';

const CallOut = () => {
  return (
    <div className="callout">
      <div className="callout_text">
        <h3>Contact us today</h3>
        <h3 className="callout_text-primary">Start your Free Trial</h3>
      </div>
      <a className="callout-btn" href="https://creativedesignsguru.com/category/nextjs/">
        Get Started
      </a>
    </div>
  );
};

export default CallOut;
