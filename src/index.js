class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
        {`Hello, world`}
      </div>
    );
  }
}

ReactDOM.render(<TodoApp/>, document.getElementById('app'));