export const formatShortDate = date => {
    return date.toString().slice(8, 10) + '/' + date.toString().slice(5, 7);
};
