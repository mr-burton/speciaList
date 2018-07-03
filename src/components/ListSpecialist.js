import React, {
  Component
} from 'react';


class ListSpecialist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specialists: [],
    }
  }

  render() { 
    console.log('this props', this.props.specialists);
    return (
      <div className="container">
        {this..map(specialist =>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title"> Title: {specialist.OnetTitle} </h5>
              <ul className="list-group">
                <li className="list-group-item"> Description: {specialist.OccupationDescription}</li>
              </ul>
              <button 
                className="btn btn-outline-success mt-2" 
                type="button" >
                Search on Yelp
              </button>
              <button 
                className="btn btn-outline-info mt-2 ml-2" 
                type="button" >
                Find in Google Maps
              </button>
            </div>
          </div>
        )}
      </div> 
    )
  }
}

export default ListSpecialist;