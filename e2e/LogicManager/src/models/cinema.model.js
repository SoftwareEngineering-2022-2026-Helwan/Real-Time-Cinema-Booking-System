class Cinema {
  #ID;
  #name;
  #totalHall;
  #location;
  #vendorID;
  #movies;

  constructor(vendorID, name, totalHall, location) {
    this.#vendorID = vendorID;
    this.#name = name;
    this.#totalHall = totalHall;
    this.#location = location;
  }
  getID() {
    return this.#ID;
  }
  getMovies() {
    return this.#movies;
  }

  // Getter for totalHall
  getTotalHall() {
    return this.#totalHall;
  }

  // Getter for location
  getLocation() {
    return this.#location;
  }

  // Setter for location
  setLocation(location) {
    if (typeof location === "object" && location !== null) {
      this.#location = location;
    } else {
      throw new Error("Location must be a valid object.");
    }
  }
}
