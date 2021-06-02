import "../../styles/section.css";

const Section = (props) => (
  <div className={"section " + props.color}>{props.children}</div>
);

export default Section;
