



class UserService {
    /**
     * createUser, takes the parameters username, email and password
     * adds the user to the database and returns it when created
     * @param {string} username 
     * @param {string} email 
     * @param {string} password 
     * @returns A new user, that was created in the database
     */
    async createUser(username, email, password) {
        // Create user in mySQL
        // Get user
        return `New user created: ${username} ${email} ${password}`;
    }
    /**
     * getUser takes the ID of a user and returns it. 
     * If empty input, it returns all users.
     * 
     * @param {number} ID 
     * @returns 
     */
    async getUser(ID = null) {
        if (ID === null) {
            // Get all users
            return "Here is all the users";
        }
        // validate ID
        // Get User by ID
        return `Here is the user with the ID: ${ID}`;
    }
    async getFriends(ID) {
        // validate ID
        // Get all friends with user
        return `Here is all the friends of user with ID: ${ID}`
    }
    /**
     * 
     * @param {number} ID 
     * @param {string} new_username 
     * @returns 
     */
    async changeUsername(ID, new_username) {
        // Change username in MySQL
        // Get user
        return `Username for ${ID} changed to ${new_username}`;
    }
}


export function makeUserService() {
    return new UserService();
}