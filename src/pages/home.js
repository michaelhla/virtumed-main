import React from 'react';
import '../App.css';
import Searchbar from "../components/searchbar/searchbar"
import ScreenClassList from '../components/screenclasslist/screenclasslist'

export default class Home extends React.Component {
render(){ 
    return (
        <div>
     <Searchbar
     placeholder = "Search doctors, hospitals, and appointments"
     onChange={(e) => this.searchData(e.target.value)}
     />
     <ScreenClassList/>
        </div>
   
    )
}
} 
