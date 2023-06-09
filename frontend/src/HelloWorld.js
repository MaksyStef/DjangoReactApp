import { Component, Fragment } from "react"
import { ModalHeader, CardHeader, ModalFooter } from "reactstrap"

export default class HelloWorld extends Component {
  render() {
    return (
      <div className="wrapper d-flex flex-column h-100">
        <Fragment>
            <ModalHeader className="text-center justify-content-center flex-shrink-1">Header</ModalHeader>  
            <main className="main flex-grow-1">
              <CardHeader className="text-center justify-content-center flex-grow-1">Card header</CardHeader>
              <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur pariatur magnam ipsum id dolorem, distinctio deserunt provident laborum fugiat doloribus error vero, reiciendis necessitatibus amet veniam. Sunt perferendis perspiciatis debitis!</p>
            </main>
            <ModalFooter className="text-center justify-content-center flex-shrink-1">Footer</ModalFooter>
        </Fragment>
      </div>
    )
  }
}