if (process.env.NODE_ENV === 'development') {
    module.exports = 'http://192.168.1.101:8001'
} else if (process.env.NODE_ENV === 'test') {
    module.exports = 'http://192.168.1.102:8001'
} else {
    module.exports = 'https://192.168.1.103:8001'
}
