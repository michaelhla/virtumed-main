import React from 'react';
import './classlist.css';
import ClassCard from '../classcard/classcard';


class Cards extends React.Component{
  constructor(props) {
    super(props);
    this.state = {classes: []};
  }
  
  static getDerivedStateFromProps(nextProps, prevState){
    return {
       classes: nextProps.classes
   };
 }

  str2arr(string) { 
    if(string !== null) 
    {
      var arr = string.split(',')
    return arr; 
  } 
    return [];
  }

  render(){
  return (
    <div className='cards'>
      {this.state.classes.length>0 ? (
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
          {this.state.classes.map((post,i) => (
            <ClassCard
            text={post.title}
            path = {`/article/${post.id}`}
            key = {i}
            instructor = {post.instructor_id}
          />
          ))}
          </ul>
        </div>
      </div>) : (<></>)}
    </div>
  );
  }
}

export default Cards;