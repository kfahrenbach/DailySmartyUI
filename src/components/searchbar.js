import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {

    handleFormSubmit = function(query){
        console.log('Submitquery',query);
    }

    renderInput(field) {
      return <input type="text" placeholder="Search DailySmarty"/>
    }
  
    render() {
  
      const { handleSubmit } = this.props;
  
      return (
        <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <input placeholder="Search DailySmarty"/>
        </form>
      )
    }
  }
  
  SearchBar = reduxForm({
    form: 'searchBar'
  })(SearchBar);
  
  export default SearchBar;