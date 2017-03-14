var ExampleComponent = React.createClass({
  propTypes: {
    someProps: React.PropTypes.string
  },

  getInitialState() {
    return {
      tickets: []
    };
  },

  componentDidMount() {
    this.loadApiData();
  },

  loadApiData() {
    this.setState({
      tickets: [
        { id: 1, name: 'Test1' },
        { id: 2, name: 'Test2' }
      ]
    });
  },

  alertMe: function() {
    alert('And we have React action');
  },

  render: function() {
    return (
      <div>
        <div>Sample Props: {this.props.sampleProps}</div>
        <h3>Collection</h3>
          {this.state.tickets.map(function(ticket) {
            return <ExampleItemComponent key={ticket.id} name={ticket.name} />;
          })}
        <button onClick={this.alertMe}>Cick Me</button>
      </div>
    );
  }
});
