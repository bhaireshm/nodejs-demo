import { Sequelize } from 'sequelize';

// * Object Relational Mapping (ORM)
(async function initDatabase() {

  // * Initialize Sequelize
  const sequelize = new Sequelize({
    logging: console.log,

    // * MySQL (Local Database)
    // dialect: "mysql",
    // port: 3306,
    // host: "localhost",
    // username: "root",
    // password: "root",
    // database: "procure_flow",

    // * PostgreSQL (https://rnacentral.org/help/public-database)
    dialect: "postgres",
    host: "hh-pgsql-public.ebi.ac.uk",
    port: 5432,
    username: "reader",
    password: "NWDMCE5xdipIjRrp",
    schema: "public",
    database: "pfmegrnargs",
  });

  try {
    // * Define a model
    // const User = sequelize.define('users', {
    //   firstName: {
    //     type: Sequelize.STRING
    //   },
    //   lastName: {
    //     type: Sequelize.STRING
    //   }
    // });
    // const roles = await sequelize.model("roles", {});

    // Sync model with database
    await sequelize.sync({
      // force: true,
      sync: true
    });
    console.log(`Database ( ${sequelize.getDatabaseName()} ) connected!`);

    // * Raw Querying
    // roles.findAll({ where: { name: "Requisitioner" } })
    //   .then(console.log)
    //   .catch(console.error)

    // const query = "select * from roles where role_name = 'Requisitioner'";
    // const { "0": res } = await sequelize.query(query);

    // console.table(res);

    // * Create a new user
    // User
    //   .create({
    //     firstName: 'Severus',
    //     lastName: 'Snape'
    //   })
    //   .then(console.log)
    //   .catch(console.error)

    // * Fetch users
    // User
    //   .findAll()
    //   .then(data => console.log("User data:", data))
    //   .catch(console.error);

  } catch (error) {
    console.error('Error:', error);
    sequelize.close().then(() => console.log("Connection closed"));
  }
})(); // IIFE