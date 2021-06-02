import Section from "./Section";

import "../../styles/section.main.css";

const SectionMain = (props) => (
  <Section color="blue">
    <div className="section__main">{props.children}</div>
  </Section>
);

export default SectionMain;
