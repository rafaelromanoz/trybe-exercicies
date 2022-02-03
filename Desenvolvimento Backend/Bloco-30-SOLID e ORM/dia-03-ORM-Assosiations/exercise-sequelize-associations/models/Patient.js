module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'Patient',
    {
      patientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
      },
      fullname: DataTypes.STRING,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'Patients',
    }
  );
  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      foreignKey: 'plan_id',
      as: 'plans',
    });
  };
  return Patient;
};
