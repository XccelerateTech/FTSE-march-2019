const AuthChallenger = (users) => {
    
    return (username, password) => {
        console.log('Logging in')
        return typeof users[username] !== 'undefined' && users[username] === password;
    }
}

module.exports = AuthChallenger;

