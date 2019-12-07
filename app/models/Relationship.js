module.exports = function(sequelize, DataTypes) {
  const User_Project_Relationship = sequelize.define(
    "User_Project_Relationship",
    {
      // timestamps removed option for seeding db
      // remove when ready fro createdAt columns
    },
    { timestamps: false }
  );

  // association
  User_Project_Relationship.associate = function(models) {
    // one realtionship has many users
    User_Project_Relationship.hasMany(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
    // one relationship has many projects
    User_Project_Relationship.hasMany(models.Project, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User_Project_Relationship;
};
