const db = require('../../data/dbConfig')

const get = () => {
    return db('users')
}

const getBy = (filter) => {
    return db('users').where(filter)
}

const getById = (id) => {
    return db('users').where({ id }).first()
}

const add = async (user) => {
    const [id] = await db('users').insert(user)
    return getById(id)
}

module.exports = {
    get,
    getBy,
    getById,
    add
}