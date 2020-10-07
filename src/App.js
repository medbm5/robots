import React,{Component} from 'react';
import './App.css';
import {CardList} from './component/Card-list/Card-list.component'
import {Search} from './component/Searchbox/Searchbox.component'

class App extends Component{
  

  constructor(){
    super();

    this.state={
      'monsters':[],
      'SearchField':''
    };

    }

    componentDidMount(){
      const ApiUrl='https://jsonplaceholder.typicode.com/users';
      fetch(ApiUrl)
      .then(resp=>resp.json())
      .then(users=>this.setState({'monsters':users}))
    }

    render(){
      const {monsters,SearchField}=this.state;
      const FiltredMonster=monsters.filter(monster=> monster.name.toLowerCase().includes(SearchField.toLowerCase()))

      return (
        <div className="App">
         <h1>Monsters</h1>
          <Search
          placeholder="search monster"
          handleChange={e=>this.setState({'SearchField':e.target.value})}
          />
          <CardList monsters={FiltredMonster}/>
        </div>
      );
    }
  }
  

export default App;
