module.exports = function(sequelize, DataTypes) {
    const Project = sequelize.define("Project", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
  
    return Project;
  };
  // NEEDS ASSOCIATION