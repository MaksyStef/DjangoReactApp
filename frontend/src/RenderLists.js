import React, { Component, createRef } from 'react';
import { ListGroupItem, Badge, Button } from 'reactstrap';


export default class RenderList extends Component {
  constructor(props) {
    super(props);
    this.list = createRef();
  }

  shuffleListItems = e => {
    const list = this.list.current;
    const last = Array.from(list.children).slice(-1)[0];
    const children = Array.from(list.childNodes);
    const reversedChildren = children.slice(0, -1).reverse();
    reversedChildren.push(last);
    
    while (list.firstChild&&list.length > 1) {
      list.removeChild(list.firstChild);
    }
    reversedChildren.forEach(child => {
      list.appendChild(child);
    });
  };

  render() {
    const data = [
      {
        id: 1,
        title: 'Showing Up',
        rating: '5',
      },
      {
        id: 2,
        title: 'How to Blow Up a Pipeline',
        rating: '4.4',
      },
      {
        id: 3,
        title: 'Saint Omer',
        rating: '4.2',
      },
    ];
    const listItems = data.map(
      item => {
        return (
          <ListGroupItem key={item.id} style={{gap: '4px'}} className='d-flex flex-row align-items-center'>
            <span>{item.title}</span>
            <Badge>{item.rating}</Badge>
          </ListGroupItem>
        )
      }
    )
    return (
      <div className="wrapper w-100 h-100 d-flex justify-content-center align-items-center">
        <ul className="list-group" ref={this.list} >
          {listItems}
          <ListGroupItem data-shuffle={false} key='button'>
            <Button className='w-100' onClick={this.shuffleListItems}>Reverse</Button>
          </ListGroupItem>
        </ul>
      </div>
    )
  }
}