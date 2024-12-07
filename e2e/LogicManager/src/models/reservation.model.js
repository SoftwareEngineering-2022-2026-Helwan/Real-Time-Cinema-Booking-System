class Ticket {
  #ID;
  #cinemaID;
  #movieID;
  #showtimeID;
  #customerID;
  #seatNumber;
  #price;
  #expired;

  constructor(cinemaID, movieID, showtimeID, customerID, seatNumber, price) {
    this.#cinemaID = cinemaID;
    this.#movieID = movieID;
    this.#showtimeID = showtimeID;
    this.#customerID = customerID;
    this.#seatNumber = seatNumber;
    this.#price = price;
  }

  // Getter for ID
  getID() {
    return this.#ID;
  }

  // Getter for cinemaID
  getCinemaID() {
    return this.#cinemaID;
  }

  // Getter for movieID
  getMovieID() {
    return this.#movieID;
  }

  // Getter for showtimeID
  getShowtimeID() {
    return this.#showtimeID;
  }

  // Getter for customerID
  getCustomerID() {
    return this.#customerID;
  }

  // Getter for seatNumber
  getSeatNumber() {
    return this.#seatNumber;
  }

  // Getter for price
  getPrice() {
    return this.#price;
  }
}
