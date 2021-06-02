import Section from './Section';

import '../../styles/section.callout.css';

const SectionCallOut = (props) => (
  <Section color="white">
    <div className="section__callout">{props.children}</div>
  </Section>
);

export default SectionCallOut;
