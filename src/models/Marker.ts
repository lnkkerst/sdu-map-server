import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../providers/sequelize";
import MarkerInterface from "../interfaces/Marker";

interface MarkerInstance extends MarkerInterface, Model {}

const MarkerModel = sequelize.define<MarkerInstance>("Marker", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "没写",
  },
  englishName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "none",
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
    defaultValue: "未知",
  },
  extraInfo: {
    type: DataTypes.CHAR(10240),
    allowNull: false,
    defaultValue: "{}",
  },
});

export default MarkerModel;
