exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "123456ddd90qwertyw",
          make: "Chevy",
          model: "Malibu",
          mileage: "29754"
        },
        {
          vin: "1234567890qwertyy",
          make: "Ram",
          model: "1500",
          mileage: "24000"
        }
      ]);
    });
};
