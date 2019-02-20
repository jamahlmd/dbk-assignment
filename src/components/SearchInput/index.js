import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './style.css';

/* Created a compound component to give the user of this component control over the render order    * making the component more flexible 
 */

// Declare a context used to pass values down to child components
const SearchInputContext = React.createContext();

// Declare let variable to store the input ref which is used to focus the input
let SearchInputRef;

const SearchInput = ({ value, onChange, handleRemove, onSubmit, onKeyUp, children }) => {

    // Declare state variable using react Hooks
    const [isFocused, setFocus] = useState(false);

    return (
        <SearchInputContext.Provider value={{ setFocus, value, onChange, onKeyUp, handleRemove, onSubmit }}>
            <form className={classnames('search-form', {
                'search-form__active': isFocused,
            })}>
                {children}
            </form>
        </SearchInputContext.Provider>
    );
};

const Input = () => {
    const { value, onChange, setFocus, onKeyUp } = useContext(SearchInputContext);
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyUp={() => {
                // Only add onKeyUp function if one is provided
                if (value.length > 2 && onKeyUp) onKeyUp();
            }}
            className="search-form--input"
            placeholder="Zoeken"
            name="query"
            ref={input => SearchInputRef = input}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
        />
    );
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

const RemoveButton = () => {
    const { handleRemove, value } = useContext(SearchInputContext);
    // If handleRemove is not defined then the remove button won't show up
    if (value.length > 0 && handleRemove) {
        return (
            <button
                onClick={(e) => {
                    if (e.target.keyCode !== 13) {
                        e.preventDefault();
                        handleRemove();
                        SearchInputRef.focus();
                    }
                }}
                type="button"
                className="search-form--button">
                <FontAwesomeIcon icon={faTimes} />
            </button>
        );
    }
    return null;
};

SearchInput.RemoveButton = RemoveButton;

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleRemove: PropTypes.func,
    onKeyUp: PropTypes.func,
};

export default SearchInput;