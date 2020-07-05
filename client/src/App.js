import React from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap/'
import AddLog from './components/AddLog';
import DisplayLogs from './components/DisplayLogs';


function getFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  data.timeline = new Date();
  return data;
}

export default class App extends React.Component {
  state = {
    res: [],
    showModal: false
  }

  componentDidMount = async () => {
    try {
      const response = await fetch('http://localhost:5000/api');
      const data = await response.json();
      console.log(data);
      this.setState({res: data})
    }
    catch(error) {
      console.log(error);
    }
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    const newData = [...this.state.res];
    const data = new FormData(event.target);
    newData.push(getFormData(data));
    this.setState({
      res: newData
    });
    event.target.reset();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getFormData(data))
    }
    await fetch('http://localhost:5000/add', options);
    this.setState({showModal: true})
  }

  hideModal = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <Jumbotron>
        <Router>
          <Link to="/">
            <h1 align="center">Food Logger</h1>
          </Link>
          <center className="mb-5">
            <Link className="btn btn-primary mr-3" to="/form">Add Log</Link>
            <Link className="btn btn-primary" to="/logs">Show Logs</Link>
          </center>
          <Route exact path="/" component={() => <DisplayLogs logs={this.state.res} />}/>
          <Route path="/form" component={() => <AddLog hideModal={this.hideModal} showModal={this.state.showModal} submitForm = {this.handleSubmit}/>} />
          <Route path="/logs" component={() => <DisplayLogs logs={this.state.res} />}/>
        </Router>
      </Jumbotron>
    );
  }
}