var ReactDOM = require('react-dom');
var React = require('react');
var request = require('superagent');

var OverwatchCharacter = React.createClass({
  render: function() {
    var message =
      'Pharah Reporting...';

    // goofing around with superagent
    request
        .get('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=A%20Tribe%20Called%20Quest')
        .end(function(err, res){
            console.log(res);
        });

    return <p>{message}</p>;
  }
});

ReactDOM.render(
    <OverwatchCharacter />,
    document.getElementById('container')
);