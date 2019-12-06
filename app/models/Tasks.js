module.exports = function(sequelize, DataTypes) {
    const Task = sequelize.define("Task", {
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
            len: [0,2]
        }
      }
    });
  
    return Task;
  };
  