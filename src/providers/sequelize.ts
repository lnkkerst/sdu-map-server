import { resolve } from "path";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: resolve(__dirname, "../../db/db.sqlite"),
});

export default sequelize;
