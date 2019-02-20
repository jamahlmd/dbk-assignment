export const fetchSuggestions = async (query) => {
    const response = await fetch(`http://localhost:3000/search?q=${query}`);
    return await response.json();
};