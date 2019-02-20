import { fetchSuggestions } from '../api/suggestions';

it('fetchSuggestions returns an object', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
        json: () => new Promise((resolve, reject) => {
            resolve({
                suggestions: [],
            });
        }),
    }));

    expect(fetchSuggestions()).resolves.toEqual({ suggestions: [] });
});