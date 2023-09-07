import { Component } from 'react';
import './App.css';
import stickers from '../src/components/stickers.json';
// import {Sticker} from './components/Stickers/Sticker';
import StickerList from './components/Stickers/StickerList';

class App extends Component() {
  state = {
    stickerLabel: null
  };

  labelHandler= () => {

  }
    render(){
        <>
        {this.state.stickerLabel && <h1>{this.state.stickerLabel}</h1>}
      <StickerList stickers ={stickers}/>
      </>
    }
};

export default App;
