const User = require('../../models/User')

const user = async (obj, { id }) => {
  const userreturn = await User.query().findOne('id', id)
  return userreturn
}

const resolver = {
  Query: {
    user,
  },
}

module.exports = resolver
