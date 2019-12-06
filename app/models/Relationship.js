module.exports = function(sequelize, DataTypes) {
  const Relationship = sequelize.define("Relationship", {
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Relationship.associate = function(models) {
    Relationship.hasMany(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Relationship.hasMany(models.Project, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Relationship;
};
