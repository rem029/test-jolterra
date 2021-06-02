import Section from './Section';

import '../../styles/section.footer.css';

const SectionFooter = (props) => (
  <Section color="blue">
    <div className="section__footer">{props.children}</div>
  </Section>
);

export default SectionFooter;
