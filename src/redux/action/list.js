export const getFilms = (films) => {
    return {
        type: "GET_FILM",
        payload: films
    }
}