export default function initReservationModel(sequelize, DataTypes) {
  return sequelize.define(
    'reservation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      drummer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drummers',
          key: 'id',
        },
      },
      date: {
        type: DataTypes.DATE,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}
