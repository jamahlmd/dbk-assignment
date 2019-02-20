import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../StoryContainer';
import SearchInput from './index';


storiesOf('SearchInput', module)
    .add('SearchInput without remove button', () => {
        return (
            <StoryContainer>
                <SearchInput
                    value='value'
                    onChange={action('Input')}
                    onSubmit={action('Submitted')}
                >
                    <SearchInput.Input />
                    <SearchInput.RemoveButton />
                    <SearchInput.SearchButton />
                </SearchInput>
            </StoryContainer>
        )
    })
    .add('SearchInput with remove button', () => {
        return (
            <StoryContainer>
                <SearchInput
                    value='value'
                    onChange={action('Input')}
                    onSubmit={action('Submitted')}
                    handleRemove={action('Remove')}
                >
                    <SearchInput.Input />
                    <SearchInput.RemoveButton />
                    <SearchInput.SearchButton />
                </SearchInput>
            </StoryContainer>
        )
    })
    .add('SearchInput with searchbutton on the left', () => {
        return (
            <StoryContainer>
                <SearchInput
                    value='value'
                    onChange={action('Input')}
                    onSubmit={action('Submitted')}
                    handleRemove={action('Remove')}
                >
                    <SearchInput.SearchButton />
                    <SearchInput.Input />
                    <SearchInput.RemoveButton />
                </SearchInput>
            </StoryContainer>
        )
    })
    ;