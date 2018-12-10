
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        { id: 1, name: 'Popcorn', type: 'salty'},
        { id: 2, name: 'Candy Corn', type: 'sweet'},
        { id: 3, name: 'Chocolate Bar', type: 'chocolate'}
      ]);
    });
};
