import { Component, createRef, ForwardRef } from 'react';
import {Button, CardHeader, ListGroup, ListGroupItem, InputGroup, Input } from 'reactstrap';

export default class Calculator extends Component {
  state = {
    firstNumber: 1,
    secondNumber: 1,
    output: '',
    previousOutput: '',
  }

  cardStyle = {
    width: "18em",
  }
  subheaderStyle = {
    fontSize: "16px",
    top: "0.5em",
    right: "0.5em",
  }
  buttonStyle = {
    flexBasis: "calc(50% - 4px)",
  }

  constructor(props) {
    super(props);
    this.outputRef = createRef();
    this.previousOutputRef = createRef();

    this.plus.bind(this);
    this.minus.bind(this);
    this.multiply.bind(this);
    this.divide.bind(this);
    this.updateOutput.bind(this);
  }

  handleChange = (event) => {
    const ref = event.target.name;
    const value = event.target.value;
    this.setState({ [ref]: value });
  };

  plus = e => {
    e.preventDefault();
    const { firstNumber, secondNumber } = this.state;
    let result = +firstNumber + +secondNumber;
    this.state.previousOutput = this.state.output;
    this.state.output = result;
    this.updateOutput()
  }
  minus = e => {
    e.preventDefault();
    const { firstNumber, secondNumber } = this.state;
    let result = +firstNumber - +secondNumber;
    this.state.previousOutput = this.state.output;
    this.state.output = result;
    this.updateOutput()
  }
  multiply = e => {
    e.preventDefault();
    const { firstNumber, secondNumber } = this.state;
    let result = +firstNumber * +secondNumber;
    this.state.previousOutput = this.state.output;
    this.state.output = result.toFixed(2);
    this.updateOutput()
  }
  divide = e => {
    e.preventDefault();
    const { firstNumber, secondNumber } = this.state;
    let result = +firstNumber / +secondNumber;
    this.state.previousOutput = this.state.output;
    this.state.output = result.toFixed(2);
    this.updateOutput()
  }

  updateOutput = () => {
    const output = this.outputRef.current;
    const previousOutput = this.previousOutputRef.current;
    output.innerText = this.state.output;
    previousOutput.innerText = this.state.previousOutput;
  }

  render() {
    return (
      <div className="wrapper w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4">
        <div className="card" style={this.cardStyle}>
          <CardHeader className="position-relative" >
            <span ref={this.outputRef}></span>
            <div className="mb-2 text-muted position-absolute" style={this.subheaderStyle} ref={this.previousOutputRef}></div>
          </CardHeader>
          <div className="card-body w-100 flex-wrap">
            <ListGroup>
              <ListGroupItem>
                <InputGroup>
                  <Input type={'number'} placeholder={1} defaultValue={1} name="firstNumber" onChange={this.handleChange} />
                  <Input type={'number'} placeholder={1} defaultValue={1} name="secondNumber" onChange={this.handleChange} />
                </InputGroup>
              </ListGroupItem>
              <ListGroupItem className='d-flex flex-wrap' style={{gap: "4px"}}>
                <Button style={this.buttonStyle} onClick={this.plus}>Plus</Button>
                <Button style={this.buttonStyle} onClick={this.minus}>Minus</Button>
                <Button style={this.buttonStyle} onClick={this.multiply}>Multiply</Button>
                <Button style={this.buttonStyle} onClick={this.divide}>Divide</Button>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </div>
    )
  }
}