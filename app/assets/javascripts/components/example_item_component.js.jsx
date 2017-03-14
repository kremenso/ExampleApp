var ExampleItemComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
});
