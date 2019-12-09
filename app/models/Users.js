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
      password: {
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
    // // one user belongsTo one realtionship
    // User.belongsTo(models.User_Project_Relationship, {
    //   foreignKey: {
    //     allowNull: true,
    //     defaultValue: null
    //   }
    // });
    // user has many tasks
    User.hasMany(models.Task, {
      foreignKey: {
        allowNull: true
      }
      // onDelete: 'CASCADE'
    });

    User.belongsToMany(models.Project, {
      through: 'UserProject',
      foreignKey: 'ProjectId',
      onDelete: 'CASCADE'
    });
  };

  return User;
};
