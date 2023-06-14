import { Component } from 'react';

export default class IndexApp extends Component {
  routes = [
    "/hello-world",
    "/calculator",
    "/todos",
    "/props-inherit",
    "/events-handle",
    "/render-list",
    "/use-asset/image",
    "/use-asset/video",
    "/use-context",
    "/use-hooks",
    "/hoc-technique",
    "/render-prop",
  ]
  routesStyle = {
    fontSize: "24px",
  }
  render() {
    var links = [];
    for (const [index, route] of this.routes.entries()) {
      if (index % 2 === 0) {
        const secondRoute = this.routes[index+1];
        links.push((
          <div key={index} className="row w-100">
            <div className="col p-2"><a href={route}>{route}</a></div>
            <div className="col p-2"><a href={secondRoute}>{secondRoute}</a></div>
          </div>   
        ))
      }
    }
    return (
      <div>
        <h1 className="text-center">Where are you going to go?</h1>
        <div style={this.routesStyle} className="routes text-center mw-100 d-grid p-4">
          {links}
        </div>
      </div>
    )
  }
}