class Person {
  #ID;
  #role;
  #firstName
  #lastName
  #email
  #password
  #phone
  
  constructor(firstName, lastName, email, password, phone) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
    this.#password = password;
    this.#phone = phone;
  }

  // Getter and Setter for ID
  getID() {
    return this.#ID;
  }

  setID(ID) {
    this.#ID = ID;
  }

  // Getter and Setter for firstName
  getFirstName() {
    return this.#firstName;
  }

  setFirstName(firstName) {
    this.#firstName = firstName;
  }

  // Getter and Setter for lastName
  getLastName() {
    return this.#lastName;
  }

  setLastName(lastName) {
    this.#lastName = lastName;
  }

  // Getter and Setter for email
  getEmail() {
    return this.#email;
  }

  setEmail(email) {
    this.#email = email;
  }

  // Getter and Setter for password
  getPassword() {
    return this.#password;
  }

  setPassword(password) {
    this.#password = password;
  }

  // Getter and Setter for phone
  getPhone() {
    return this.#phone;
  }

  setPhone(phone) {
    this.#phone = phone;
  }

  // Getter and Setter for role
  getRole() {
    return this.#role;
  }

  setRole(role) {
    this.#role = role;
  }
}
