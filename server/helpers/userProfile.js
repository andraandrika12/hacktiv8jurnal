let userId = ''

const setUserId = (data) => {
    userId = data
};

const getUserId = () => {
    return userId
};

module.exports = {
    setUserId,
    getUserId
}


