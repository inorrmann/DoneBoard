module.exports = function(sequelize, DataTypes) {
  const Task = sequelize.define(
    "Task",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      progress_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
<<<<<<< HEAD
          len: [0, 3]
=======
            len: [0,2]
>>>>>>> fa3989f9d3fc6d873e441eec0d920c73f87894d7
        }
      }
    },
    // timestamps removed option for seeding db
    // remove when ready fro createdAt columns
    { timestamps: false }
  );
  // association
  Task.associate = function(models) {
    // task belongsTo one project
    Task.belongsTo(models.Project, {
      foreignKey: {
        allowNull: false
      }
    });
    // one task belongsTo one user
    Task.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Task;
};
// NEEDS ASSOCIATION
