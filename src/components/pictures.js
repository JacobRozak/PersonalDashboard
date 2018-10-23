import React, {Component} from 'react';
import {storage} from '../firebase';
import plus from '../assets/Plus_button.png'

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: [],
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function 
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error 
        console.log(error);
      }, 
    () => {
        
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            var joined = this.state.url.concat(url);
            this.setState({url:joined});
        })
    });
  }
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
        <div>
           {this.props.transform1?
           (
              <div>
                  <div>
        <h1 id='logout'>Photos</h1>
        <div class="grid-container">
            <div className="grid-item1">
               <input id="file" type="file"  onChange={this.handleChange} accept="image/x-png,image/gif,image/jpeg" />
               <label for="file"><img src={plus}/></label>
               <button onClick={this.handleUpload}>add</button>
               </div>
                 <div className="grid-item1">{this.state.url.length>0?(<div><img className='picture' src={this.state.url[0]} alt="Uploaded images" height="300" width="400"/></div>):(<div></div>)}</div>
                 <div className="grid-item1">{this.state.url.length>1?(<div><img className='picture' src={this.state.url[1]} alt="Uploaded images" height="300" width="400"/></div>):(<div></div>)}</div>
                 <div className="grid-item1">{this.state.url.length>2?(<div><img className='picture' src={this.state.url[2]} alt="Uploaded images" height="300" width="400"/></div>):(<div></div>)}</div>
                 <div className="grid-item1">{this.state.url.length>3?(<div><img className='picture' src={this.state.url[3]} alt="Uploaded images" height="300" width="400"/></div>):(<div></div>)}</div>
                 <div className="grid-item1">{this.state.url.length>4?(<div><img className='picture' src={this.state.url[4]} alt="Uploaded images" height="300" width="400"/></div>):(<div></div>)}</div>
               </div>
            </div>
              </div>
               
            ):(
                <div class="grid-container2">
                <div className="grid-item2">{this.state.url.length>0?(<div><img className='picture' src={this.state.url[0]} alt="Uploaded images" height="15" width="20"/></div>):(<div></div>)}</div>
                <div className="grid-item2">{this.state.url.length>1?(<div><img className='picture' src={this.state.url[0]} alt="Uploaded images" height="15" width="20"/></div>):(<div></div>)}</div>
                <div className="grid-item2">{this.state.url.length>2?(<div><img className='picture' src={this.state.url[0]} alt="Uploaded images" height="15" width="20"/></div>):(<div></div>)}</div>
                <div className="grid-item2">{this.state.url.length>3?(<div><img className='picture' src={this.state.url[0]} alt="Uploaded images" height="15" width="20"/></div>):(<div></div>)}</div>
                </div>
            )
        }
    </div>
    )
  }
}

export default ImageUpload;