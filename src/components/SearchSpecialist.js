import React, {
  Component
} from 'react';
import axios from 'axios';
import header from './header';
import ListSpecialist from './ListSpecialist';


class SearchSpecialist extends Component {
  constructor(props) {
    super(props);
    this.state = {    
      search: '',
      specialists: []
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
  }  
  
  handleChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    //componentDidMount() {
      //console.log('this state search', this.state.search);
      const searchTerm = this.state.search;
      // const bodyParameters = {
      //   key: "value"
      // };
      axios
        .get(`https://api.careeronestop.org/v1/occupation/${header.userId}/${searchTerm}/Y/0/8`, header.config)
        .then(response => {
          //console.log('response', response)
          this.setState({ specialists: response.data.OccupationList });
        })
        // .then(() => 
        //   console.log('state', this.state.specialists)
        // )
        .catch(err => console.log(err));
  }

  render() { 
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="container">
            <div className="col">
              <input type="text" name="search" className="form-control" placeholder="keywords" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div className="col">
              <button className="btn btn-primary px-4 mt-2 float-left" type="submit"> Search </button>
            </div>
          </div>
        </form>
        <ListSpecialist specialists={this.state.specialists}/>
      </div>
    )
  }
}

export default SearchSpecialist;