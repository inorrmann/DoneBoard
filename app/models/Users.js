module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    // timestamps removed option for seeding db
    // remove when ready fro createdAt columns
    { timestamps: false }
  );
  // association
  User.associate = function (models) {
 
    // user has many tasks
    User.hasMany(models.Task, {
      foreignKey: {
        allowNull: true
      }
    });

    // users belong to many projects
    User.belongsToMany(models.Project, {
      through: 'UserProject',
      unique: false,
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    });
  };

  return User;
};
