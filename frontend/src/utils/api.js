const BASE_URL = 'https://localhost:8000';


const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    };

    return Promise.reject(`Error ${res.status}`);
};

const checkSuccess = (res) => {
    if (res?.result) {
        return res.result;
    };

    return Promise.reject(`Unsuccessful: ${res}`);
};

const request = (endpoint, options) => {
    return fetch(`${BASE_URL}`, options)
        .then(res => checkResponse(res))
        .then(res => checkSuccess(res));
};

export const login = (email, password) => request('/', {
    method: 'POST',
    body: JSON.stringify({
        email: email,
        password: password
    })
});