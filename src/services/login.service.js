const { User } = require('../database/models');
const statusError = require('../utils/error.utils');

const authUser = async (email, password) => {
  const user = await User.findOne({ where: { email } }); 
  if (!user || user.password !== password) throw statusError(400, 'Invalid fields');

  return user.id;
};

module.exports = authUser;
