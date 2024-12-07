class Movie {
  MAX_SEAT = 47;
  #TICKET_PRICE;
  #fullyBooked;
  #ID;
  #image;
  #description;
  #rating;
  #title;
  #showtime;
  #cinemaID;
  #hallNumber;
  #seats;

  constructor(
    image,
    description,
    rating,
    title,
    showtime,
    cinemaID,
    hallNumber,
    TICKET_PRICE
  ) {
    this.#image = image;
    this.#description = description;
    this.#rating = rating;
    this.#title = title;
    this.#showtime = showtime;
    this.#cinemaID = cinemaID;
    this.#TICKET_PRICE = TICKET_PRICE;
    this.#hallNumber = hallNumber;
  }

  // Getter and Setter for image
  getImage() {
    return this.#image;
  }

  setImage(image) {
    this.#image = image;
  }

  // Getter and Setter for description
  getDescription() {
    return this.#description;
  }

  setDescription(description) {
    this.#description = description;
  }

  // Getter and Setter for rating
  getRating() {
    return this.#rating;
  }

  setRating(rating) {
    this.#rating = rating;
  }

  // Getter and Setter for title
  getTitle() {
    return this.#title;
  }

  setTitle(title) {
    this.#title = title;
  }

  // Getter and Setter for showtime
  getShowtime() {
    return this.#showtime;
  }

  setShowtime(showtime) {
    this.#showtime = showtime;
  }

  // Getter and Setter for cinemaID
  getCinemaID() {
    return this.#cinemaID;
  }

  setCinemaID(cinemaID) {
    this.#cinemaID = cinemaID;
  }

  // Getter for seats
  getSeats() {
    return this.#seats;
  }

  setSeats(seats) {
    this.#seats = seats;
  }

  // Getter and Setter for hallNumber
  getHallNumber() {
    return this.#hallNumber;
  }

  setHallNumber(hallNumber) {
    this.#hallNumber = hallNumber;
  }
}
