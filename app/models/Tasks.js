module.exports = function (sequelize, DataTypes) {
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
          len: [0, 2]
        }
      }
    },
    // timestamps removed option for seeding db
    // remove when ready fro createdAt columns
    { timestamps: false }
  );
  // association
  Task.associate = function (models) {
    // task belongsTo one project
    Task.belongsTo(models.Project, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
    // one task belongsTo one user
    Task.belongsTo(models.User, {
      foreignKey: {
<<<<<<< HEAD
        allowNull: false
      },
      onDelete: "cascade"
=======
        allowNull: true
      },
>>>>>>> master
    });
  };

  return Task;
};

