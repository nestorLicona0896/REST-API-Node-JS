import {getConnection} from "./../database/database";

// GET:
const getUsers = async (request, response) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, username, email_address  FROM user");
        //console.log(result);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

// POST:
const postUser = async (request, response) => {
    try {

        const {username, email_address} = request.body;
        const user = { username, email_address};

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO user SET ?", user);
        response.json(result);

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

export const methods = {
    
    getUsers,
    postUser
};