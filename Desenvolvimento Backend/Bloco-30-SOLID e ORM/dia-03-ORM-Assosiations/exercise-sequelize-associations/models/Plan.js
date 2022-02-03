module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
    'Plan',
    {
      planId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      coverage: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'Plans',
    }
  );
  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, {
      foreignKey: 'patient_id',
      as: 'patients',
    });
  };
  return Plan;
};
