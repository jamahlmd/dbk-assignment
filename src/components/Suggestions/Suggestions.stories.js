import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../StoryContainer';
import Suggestions from './index';

const suggestions = [
    {
        "searchterm": "heren truien",
        "nrResults": 1100
    },
    {
        "searchterm": "dames truien",
        "nrResults": 1501
    },
    {
        "searchterm": "kenzo trui",
        "nrResults": 62
    }
];

storiesOf('Suggestions', module)
    .add('Not showing if no suggestions', () =>
        <StoryContainer><Suggestions query="trui" suggestions={[]} handlePickSuggestion={action('picked suggestion')} /></StoryContainer>)
    .add('Showing suggestions query=trui', () =>
        <StoryContainer><Suggestions query="trui" suggestions={suggestions} handlePickSuggestion={action('picked suggestion')} /></StoryContainer>)
    .add('Showing suggestions query=heren', () =>
        <StoryContainer><Suggestions query="heren" suggestions={suggestions} handlePickSuggestion={action('picked suggestion')} /></StoryContainer>)
    ;