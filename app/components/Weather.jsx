var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var ErrorModal = require("ErrorModal");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
  getInitialState: function() {
    return({
      isLoading: false
    })
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(
      function(temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      },
      function(error) {
        that.setState({
          isLoading: false,
          errorMessage: error.message
        });
      });
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = "#/";
    }
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = "#/";
    }
  },
  render: function() {
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    function renderError() {
      if (typeof errorMessage === "string") {
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;