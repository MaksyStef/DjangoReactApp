import Child from "./components/FunctionsInheretingPropsChild.js";

export default function Parent (props) {
  return (
    <div className="d-flex flex-column flex-justify-center p-4 gap-4">
      <h1 className="text-center text-white bg-primary p-1">{props.greetings}</h1>
      <Child {...props} />
    </div>
  )
}