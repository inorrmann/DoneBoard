module.exports = function (sequelize, DataTypes) {
  const Project = sequelize.define(
    "Project",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    // timestamps removed option for seeding db
    // remove when ready fro createdAt columns
    { timestamps: false }
  );

  // association
  Project.associate = function (models) {
    // project has many tasks
    Project.hasMany(models.Task, {
      onDelete: "cascade"
    });

    Project.belongsToMany(models.User, {
      through: 'UserProject',
      unique: false,
      foreignKey: 'ProjectId'
    });

  };

  return Project;
};
