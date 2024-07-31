// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  const result = array.map(({director}) => (director));
  
  return result;

}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 
  const result = array.filter(ar => ar.director == director);

  return result;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const dirAr = getMoviesFromDirector(array, director);
  
  const total = dirAr.reduce((sum, value) => sum + value.score, 0);
  const result = Number((total / dirAr.length).toFixed(2));

  return result;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const result = array.map(({title}) => (title)) // array of only titles
    .sort() // order alphabetically
    .splice(0, 20); // only top 20

  return result;
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const result = array.toSorted((a, b) => {

    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    // equal years
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }

  });

  return result;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
