exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl.string("VIN", 120).notNullable();

    tbl.string("Make", 120).notNullable();

    tbl.string("Model", 120).notNullable();

    tbl.integer("Mileage", 120).notNullable();

    tbl.string("Transmission", 120);

    tbl.boolean("Title").defaultTo(true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
