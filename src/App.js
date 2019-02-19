import React, { Component } from 'react';
import SearchInput from './components/SearchInput';
import Header from './components/Header';

class App extends Component {
  state = {
    query: '',
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = () => console.log('Submit button clicked');

  render() {
    return (
      <div>
        <Header>
          <SearchInput
            value={this.state.query}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          >
            <SearchInput.Input />
            <SearchInput.SearchButton />
          </SearchInput>
        </Header>
      </div>
    );
  }
}

export default App;
