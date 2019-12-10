module.exports = function (sequelize, DataTypes) {

  const UserProject = sequelize.define(
    "UserProject",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      UserId: DataTypes.INTEGER,
      ProjectId: DataTypes.INTEGER
      // timestamps removed option for seeding db
      // remove when ready for createdAt columns
    },
    { timestamps: false }
  );

  // association
  UserProject.associate = function (models) {
    // one relationship has many users
    UserProject.belongsTo(models.User, {
      foreignKey:
      {
        name: 'ProjectId',
        allowNull: false,
        unique: false
      },
    });
    // one relationship has many projects
    UserProject.belongsTo(models.Project, {
      foreignKey:
      {
        name: 'UserId',
        unique: false
      }
    });
  };

  return UserProject;
};
