var React = require("react");

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is an app created in React</p>
      <h4>Core components used:</h4>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>React Route</li>
        <li>React Link</li>
        <li>Axios</li>
        <li>Foundation (dont like it)</li>
      </ul>
    </div>
  )
};

module.exports = About;