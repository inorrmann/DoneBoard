module.exports = function (sequelize, DataTypes) {
  // const User_Project_Relationship = sequelize.define(
  //   "User_Project_Relationship",
  //   {
  //     // timestamps removed option for seeding db
  //     // remove when ready fro createdAt columns
  //   },
  //   { timestamps: false }
  // );

  // // association
  // User_Project_Relationship.associate = function(models) {
  //   // one realtionship has many users
  //   User_Project_Relationship.hasMany(models.User, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  //   // one relationship has many projects
  //   User_Project_Relationship.hasMany(models.Project, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  const UserProject = sequelize.define(
    "UserProject",
    {
      UserId: DataTypes.INTEGER,
      ProjectId: DataTypes.INTEGER
      // timestamps removed option for seeding db
      // remove when ready fro createdAt columns
    },
    { timestamps: false }
  );

  // association
  UserProject.associate = function (models) {
    // one realtionship has many users
    UserProject.belongsTo(models.User, {
      foreignKey:
      {
        name: 'UserId',
        // allowNull: false
      }
    });
    // one relationship has many projects
    UserProject.belongsTo(models.Project, {
      foreignKey: 'ProjectId'
    });
  };

  return UserProject;

  // return User_Project_Relationship;
};
