import Section from './Section';

import '../../styles/section.services.css';

const SectionServices = (props) => (
  <Section color="white">
    <div className="section__services">{props.children}</div>
  </Section>
);

export default SectionServices;
