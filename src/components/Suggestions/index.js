import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Suggestions = ({ query, suggestions, handlePickSuggestion }) => {
    if (query.length > 2 && suggestions.length > 0) {
        return (
            <ul className="suggestions">
                {
                    suggestions.map((suggestion, i) => {
                        const indexOfQuery = suggestion.searchterm.search(query);
                        if (indexOfQuery !== -1) {
                            const splittedSearchTerm = suggestion.searchterm.split(query);
                            suggestion.adjustedSearchTerm = <span>
                                {splittedSearchTerm[0]}
                                <span className="suggestions--li--button--span">{query}</span>
                                {splittedSearchTerm[1]}</span>;
                        } else {
                            suggestion.adjustedSearchTerm = suggestion.searchterm;
                        }
                        return (
                            <li
                                key={i}
                                className="suggestions--li"
                            >
                                <button
                                    className="suggestions--li--button"
                                    onClick={() => handlePickSuggestion(suggestion.searchterm)}
                                >
                                    {suggestion.adjustedSearchTerm}{' '}
                                    <span className="suggestions--li--button--span">
                                    ({suggestion.nrResults})</span>
                                </button>
                            </li>
                        );

                    })
                }
            </ul>
        )
    }
    return null;
};

Suggestions.propTypes = {
    query: PropTypes.string.isRequired,
    suggestions: PropTypes.arrayOf(PropTypes.shape({
        searchterm: PropTypes.string.isRequired,
        nrResults: PropTypes.number.isRequired,
    })).isRequired,
    handlePickSuggestion: PropTypes.func.isRequired,
};

export default Suggestions;