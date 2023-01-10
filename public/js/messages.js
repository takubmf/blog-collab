module.exports = function (sequelize, DataTypes) {
    var message = sequelize.define("message", {
      // eslint-disable-next-line camelcase
      chat_message: DataTypes.STRING,
      username: DataTypes.STRING,
      room: DataTypes.STRING,
    });
    return message;
  };