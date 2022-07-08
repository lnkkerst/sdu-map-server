import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../providers/sequelize";
import MarkerInterface from "../interfaces/Marker";

interface MarkerInstance extends MarkerInterface, Model {}

const MarkerModel = sequelize.define<MarkerInstance>("Marker", {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  englishName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  belongTo: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  openTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  extraInfo: {
    type: DataTypes.CHAR(10240),
    allowNull: false,
  },
});

export default MarkerModel;
