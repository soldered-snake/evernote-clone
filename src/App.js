import React from 'react';
import './App.css';

const firebase = require('firebase');

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      selectedNoteIntex: null,
      selectedNote: null,
      notes: null
    }
  }

  render(){
    return(
        <div> Hello world!</div>
    )
  }

  //Upon successful loading of component
  componentDidMount = () => {
    //On snapshot (update) of the notes collection... do x function
    firebase.firestore().collection('notes').onSnapshot(serverUpdate => {
      //Notes array populated with map,
      const notes = serverUpdate.docs.map(doc => {
        //data is the data for each doc in the collection
        const data = doc.data();
        //Creating a new field on 'data' called 'id' and assigning it the doc id.
        data['id'] = doc.id;
        return data;
      });
      console.log(notes);
      this.setState({notes: notes})
    });
  }

}

export default App;
