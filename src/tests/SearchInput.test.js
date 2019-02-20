import React from 'react';
import { mount } from 'enzyme';
import SearchInput from '../components/SearchInput';
import App from '../App';

const value = 'New Query String!';
const onSubmit = () => {};
const onChange = () => {};

it('Render SearchInput correctly', () => {
    const wrapper = mount(
        <SearchInput
            value={value}
            onSubmit={onSubmit}
            onChange={onChange}
        >
            <SearchInput.Input />
            <SearchInput.SearchButton />
            <SearchInput.RemoveButton />
        </SearchInput>
    );
    expect(wrapper).toMatchSnapshot();
});

it('Should change state.query on input change', () => {
    const name = 'query';
    const wrapper = mount(<App />);
    wrapper.find('.search-form--input').simulate('change', {
        target: {
            name,
            value,
        }
    });
    expect(wrapper.state('query')).toBe(value);
});