export const getUserData = async (id: number) => {
    return fetch(`http://localhost:3001/users/${id}`, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));
};

export const postUserData = async (userData: []) => {
    return fetch(`http://localhost:3001/users`, 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export const putUserData = async (id: number, userData: []) => {
    return fetch(`http://localhost:3001/users/${id}`, 
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));
}

export const deleteUserData = async (id: number) => {
    return fetch(`http://localhost:3001/users/${id}`, 
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err));
}