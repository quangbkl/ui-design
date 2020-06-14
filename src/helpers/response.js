export const getErrorMessage = e => {
    if (e.response && e.response.data && e.response.data.message) return e.response.data.message;
    if (e.response && e.response.data) return e.response.data;

    return e.message || e;
};

export default {
    getErrorMessage
};
