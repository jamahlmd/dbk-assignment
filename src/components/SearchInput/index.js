import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './style.css';

/* Created a compound component to give the user of this component control over the render order    * making the component more flexible 
 */

 // Declare a context used to pass values down to child components
const SearchInputContext = React.createContext();

const SearchInput = ({ value, onChange, onSubmit, children }) => {

    // Declare state variable using react Hooks
    const [isFocused, setFocus] = useState(false);

    return (
        <SearchInputContext.Provider value={{ setFocus, value, onChange, onSubmit }}>
            <form className={classnames('search-form', {
                'search-form__active': isFocused,
            })}>
                { children }
            </form>
        </SearchInputContext.Provider>
    )
};

const Input = () => {
    const { value, onChange, setFocus } = useContext(SearchInputContext);
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className="search-form--input"
            placeholder="Zoeken"
            name="query"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
        />
    )
};

SearchInput.Input = Input;

const SearchButton = () => {
    const { onSubmit } = useContext(SearchInputContext);
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                onSubmit();
            }}
            className="search-form--button">
            <FontAwesomeIcon icon={faSearch} />
        </button>
    );
};

SearchInput.SearchButton = SearchButton;

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default SearchInput;