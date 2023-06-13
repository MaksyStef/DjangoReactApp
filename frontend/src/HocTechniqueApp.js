import { useState } from "react";
import { Button, Card, CardBody, CardFooter } from "reactstrap";


function withMouseOver(WrappedComponent) {
  return (props) => {
    var timeout;
    const onMouseOverHandler = (e) => {
      let counter = 0;
      timeout = setInterval(() => {
        props.setparentstate({ time: counter, timeout: timeout });
        counter++;
      }, 1000);
    };

    const onMouseOutHandler = (e) => {
      clearTimeout(props.timeout);
      props.setparentstate({ time: '0', timeout: null });
    };

    return (
      <WrappedComponent
        {...props}
        onMouseEnter={onMouseOverHandler}
        onMouseLeave={onMouseOutHandler}
      >{props.children}</WrappedComponent>
    );
  };
}

const CountTimeButtonWithMouseOver = withMouseOver(Button);

function CountTime(props) {
  const [state, setState] = useState({time: 0, timeout: null});

  return (
    <Card>
      <CardBody>{state.time} seconds hovered</CardBody>
      <CardFooter>
        <CountTimeButtonWithMouseOver className="w-100" setparentstate={setState} timeout={state.timeout}>Hover</CountTimeButtonWithMouseOver>
      </CardFooter>
    </Card>
  )
}

export default function HocTechniqueApp(params) {
  return (
    <div className={"p-4 w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center"}>
      <CountTime />
    </div>
  )
}