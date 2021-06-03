import { useEffect, useState } from "react";
import { HiOutlineChartBar } from "react-icons/hi";

import "../styles/hello.jolterra.css";

const HelloJolterra = ({ onClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const style = loaded
    ? "hello_jolterra_text text-show"
    : "hello_jolterra_text";

  return (
    <div className="hello_jolterra">
      <div className="hello_jolterra_logo">
        <HiOutlineChartBar />
      </div>
      <h1 className={style}>Hello from Jolterra</h1>
      <button
        className="hello_jolterra_btn-callout"
        onClick={(e) => onClick(e)}
      >
        Visit our page
      </button>
    </div>
  );
};

export default HelloJolterra;
