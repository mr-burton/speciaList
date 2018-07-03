import React, {
  Component
} from 'react';

class ListSpecialist extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleYelp = (e) => {
    const url = `https://www.yelp.com/search?find_desc=${e}`;
    window.location.href = url;
  }

  render() { 
    console.log('this props', this.props.specialists);
    return (
      <div className="container">
        {this.props.specialists ?         
          this.props.specialists.map(specialist => 
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title"> {specialist.OnetTitle} </h5>
              <ul className="list-group">
                <li className="list-group-item"> Description: {specialist.OccupationDescription}</li>
              </ul>
              <button 
                onClick={() => this.handleYelp(specialist.OnetTitle)}
                className="btn btn-outline-danger mt-2" 
                type="button" >
                Search on Yelp
              </button>
              <button
                // onClick={() => this.handleYelp(event)}
                className="btn btn-outline-info mt-2 ml-2" 
                type="button" >
                Find in Google Maps
              </button>
            </div>
          </div> 
        ) : null}  
      </div> 
    )
  }
}

export default ListSpecialist;