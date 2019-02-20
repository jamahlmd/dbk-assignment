import React, { Component, Fragment } from 'react';
import SearchInput from './components/SearchInput';
import Header from './components/Header';
import Suggestions from './components/Suggestions';

import { fetchSuggestions } from './api/suggestions';

class App extends Component {
  state = {
    query: '',
    suggestions: [],
    error: {},
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = () => console.log('Submit button clicked');

  handleRemove = () => this.setState({ query: '', suggestions: [], });

  handlePickSuggestion = (suggestion) =>
    this.setState({ query: suggestion }, () => this.onSubmit());

  fetchSuggestions = async () => {
    try {
      const data = await fetchSuggestions(this.state.query);
      this.setState({
        suggestions: data.suggestions.slice(0, 4),
      });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    return (
      <Fragment>
        <Header>
          <SearchInput
            value={this.state.query}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            onKeyUp={this.fetchSuggestions}
            handleRemove={this.handleRemove}
          >
            <SearchInput.Input />
            <SearchInput.RemoveButton />
            <SearchInput.SearchButton />
          </SearchInput>
          <Suggestions
            handlePickSuggestion={this.handlePickSuggestion}
            query={this.state.query}
            suggestions={this.state.suggestions}
          />
        </Header>
      </Fragment>
    );
  }
}

export default App;
