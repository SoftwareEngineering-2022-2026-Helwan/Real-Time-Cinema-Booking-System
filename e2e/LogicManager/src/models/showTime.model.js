class ShowTime {
  #ID;
  #time;
  #date;
  #cinemaID;
  #movieID;
  #fullyBooked;

  constructor(ID, time, date, cinemaID, movieID) {
    this.#ID = ID;
    this.#time = time;
    this.#date = date;
    this.#cinemaID = cinemaID;
    this.#movieID = movieID;
  }

  // Getter and Setter for ID
  getID() {
    return this.#ID;
  }

  // Getter and Setter for time
  getTime() {
    return this.#time;
  }

  setTime(time) {
    this.#time = time;
  }

  // Getter and Setter for date
  getDate() {
    return this.#date;
  }

  setDate(date) {
    this.#date = date;
  }

  // Getter and Setter for cinemaID
  getCinemaID() {
    return this.#cinemaID;
  }

  setCinemaID(cinemaID) {
    this.#cinemaID = cinemaID;
  }

  // Getter and Setter for movieID
  getMovieID() {
    return this.#movieID;
  }

  setMovieID(movieID) {
    this.#movieID = movieID;
  }

  
}
