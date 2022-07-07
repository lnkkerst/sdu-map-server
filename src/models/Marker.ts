import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../providers/sequelize";
import MarkerInterface from "../interfaces/Marker";

interface MarkerInstance extends MarkerInterface, Model {}

const MarkerModel = sequelize.define<MarkerInstance>("Marker", {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  englishName: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.NUMBER,
  },
  position: {
    type: DataTypes.STRING,
  },
  belongTo: {
    type: DataTypes.NUMBER,
  },
  openTime: {
    type: DataTypes.STRING,
  },
  extraInfo: {
    type: DataTypes.CHAR(10240),
  },
});

export default MarkerModel;
