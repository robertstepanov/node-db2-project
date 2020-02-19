exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries

      const cars = [
        {
          VIN: "Y1234",
          Make: "Ford",
          Model: "F150",
          Mileage: "12345",
          Transmission: true,
          Title: false
        }
      ];
      return knex("cars").insert(cars);
    });
};
