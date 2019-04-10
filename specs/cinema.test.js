const Cinema = require('../cinema.js');
const Film = require('../film.js');

describe('Cinema', () => {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach( () => {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  test('should have a collection of films', function () {
    expect(cinema.films).toEqual(films);
  });

  test('should be able to get a list of film titles', () => {
    // write your code here
    expect(cinema.listTitles()).toEqual(['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'])

  });
  test('should be able to find a film by title', () => {
    // write your code here
    expect(cinema.findFilmByTitle('Dunkirk')).toEqual([{ 'title': 'Dunkirk', 'genre': 'history', 'year': 2017, 'length': 96 }]);
  });
  test('should be able to filter films by genre', () => {
    // write your code here
    expect(cinema.findFilmsByGenre('drama').length).toBe(2);
  });
  test('should be able to check whether there are some films from a particular year', () => {
    // write your code here
    expect(cinema.findFilmsByYear(2017)).toBe(true);
  });
  test('should be able to check whether there are no films from a particular year', () => {
    // write your code here
    expect(cinema.findFilmsByYear(2014)).toBe(false);
  });
  test('should be able to check whether all films are over a particular length', () => {
    // write your code here
    expect(cinema.overMaxLength(120)).toBe(true);
  });
  test('should be able to calculate total running time of all films', () => {
    // write your code here
    expect(cinema.totalRuntime()).toBe(622);
  });
  test('should be able to filter films by property', () => {
    expect(cinema.findFilmByProperty('genre', 'drama').length).toBe(2);
    expect(cinema.findFilmByProperty('year', 2017).length).toBe(3);

  });

});
