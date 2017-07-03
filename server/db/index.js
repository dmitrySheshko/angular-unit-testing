function DB() {
    const users = require('./users.json');

    function getUsers() {
        return users;
    }
    return {
        getUsers: getUsers
    }
}

module.exports = new DB();