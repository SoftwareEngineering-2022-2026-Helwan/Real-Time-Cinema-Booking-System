class Seat {
  #ID;
  #occupied;
  #customerID;
  #cinemaID;

  constructor(ID, cinemaID) {
    this.#ID = ID;
    this.#cinemaID = cinemaID;
  }

  // Getter and Setter for ID
  getID() {
    return this.#ID;
  }

  // Getter and Setter for customerID
  getCustomerID() {
    return this.#customerID;
  }

  setCustomerID(customerID) {
    this.#customerID = customerID;
  }

  // Getter and Setter for cinemaID
  getCinemaID() {
    return this.#cinemaID;
  }

  setCinemaID(cinemaID) {
    this.#cinemaID = cinemaID;
  }
}
