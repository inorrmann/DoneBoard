module.exports = function(sequelize, DataTypes) {
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
  Project.associate = function(models) {
    // project has many tasks
    Project.hasMany(models.Task, {
      foreignKey: {
        allowNull: true
      }
    });
    // one project belongsTo one realtionship
    Project.belongsTo(models.User_Project_Relationship, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Project;
};
