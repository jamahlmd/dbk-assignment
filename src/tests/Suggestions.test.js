import React from 'react';
import { shallow } from 'enzyme';
import Suggestions from '../components/Suggestions';

const shortQuery = 'tr';
const longQuery = 'trui';
const suggestions = [
    {
        "searchterm": "heren truien",
        "nrResults": 1100
    },
    {
        "searchterm": "dames truien",
        "nrResults": 1501
    }
];

const handlePickSuggestion = () => {};

it('Render no suggestions when query.length < 2', () => {
    const wrapper = shallow(<Suggestions
        query={shortQuery}
        suggestions={suggestions}
        handlePickSuggestion={handlePickSuggestion}
    />);
    expect(wrapper.find('ul').children().length).toBe(0);
    expect(wrapper).toMatchSnapshot();
});

it('Render suggestions when query.length > 2', () => {
    const wrapper = shallow(<Suggestions
        query={longQuery}
        suggestions={suggestions}
        handlePickSuggestion={handlePickSuggestion}
    />);
    expect(wrapper.find('ul').children().length).toBe(2);
    expect(wrapper).toMatchSnapshot();
});