var React = require("react");
var {Link} = require("react-router");

// var Examples = (props) => <h3>Examples Page</h3>;
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=Monterrey">Monterrey</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;