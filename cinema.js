class Cinema {

  constructor(films) {
    this.films = films;
  };





  listTitles() {
    return this.films.map(film => film.title);
  };

  findFilmByTitle(title) {
    return this.films.filter(function(film) {
      return film.title.includes(title);
    });
  };

  findFilmsByGenre(genre) {
    return this.films.filter(function(film) {
      return film.genre.includes(genre);
    });
  };


  findFilmsByYear(year) {
    let result = this.films.filter(function(film) {
      return film.year === year;
    });
    if (result.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  overMaxLength(length) {
    let result = this.films.filter(function(film) {
      return film.length >= length;
    });
    if (result.length > 0) {
      return true;
    } else {
      return false;
    };
  };

  totalRuntime() {
    return this.films.reduce(function(total, time) {
      return total + time.length;
    }, 0);
  };

  findFilmByProperty(property, value) {
    return this.films.filter(function(film) {

      return film[property] === value;
    });
  }

};
module.exports = Cinema;
