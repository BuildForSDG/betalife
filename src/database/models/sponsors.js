/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Sponsor = sequelize.define('sponsors', {
    sponsor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(sponsors_sponsor_id_seq::regclass)',
      primaryKey: true
    },
    badge: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_no: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enabled: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    organisation: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'sponsors'
  });

  Sponsor.associate = (models) => {
    Sponsor.hasMany(models.likes, {
      foreignKey: 'sponsor_id',
      as: 'likes',
      onDelete: 'CASCADE'
    });
  };

  return Sponsor;
};
