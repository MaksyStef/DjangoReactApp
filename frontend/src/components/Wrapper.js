export default function Wrapper(props) {
  return (
    <div {...props} className="wrapper w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
      {props.children}
    </div>
  )
}