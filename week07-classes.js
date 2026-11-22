/*
  Week 7 — Class Design
  Submission by Philip Selasi

  Project: Trotro Transport Management System
*/

// PARENT CLASS
class Trotro {
  constructor(route, fare, capacity) {
    this.route = route;
    this.fare = fare;
    this.capacity = capacity;
    this.passengers = 0;
  }

  // Method 1: Board passengers
  boardPassenger(number = 1) {
    if (number <= 0) {
      console.log("Enter a valid number of passengers.");
      return;
    }

    if (this.passengers + number <= this.capacity) {
      this.passengers += number;
      console.log(`${number} passenger(s) boarded.`);
    } else {
      console.log("Sorry, the trotro is full!");
    }
  }

  // Method 2: Drop passengers
  dropPassenger(number = 1) {
    if (number <= 0 || number > this.passengers) {
      console.log("Invalid number of passengers.");
      return;
    }

    this.passengers -= number;
    console.log(`${number} passenger(s) dropped.`);
  }

  // Method 3: Display a summary
  summary() {
    return `
Route: ${this.route}
Fare: GH₵${this.getFare()}
Capacity: ${this.capacity}
Passengers: ${this.passengers}
Available seats: ${this.capacity - this.passengers}
`;
  }

  // Method 4: Get fare
  getFare() {
    return this.fare;
  }
}

// CHILD CLASS
class ExpressTrotro extends Trotro {
  constructor(route, fare, capacity, expressFee) {
    super(route, fare, capacity);
    this.expressFee = expressFee;
  }

  // Override the parent's getFare method
  getFare() {
    return this.fare + this.expressFee;
  }
}

// CREATING THREE INSTANCES

const trotro1 = new Trotro("Accra - Madina", 15, 14);

const trotro2 = new Trotro("Accra - Kasoa", 12, 18);

const trotro3 = new ExpressTrotro(
  "Accra - Tema",
  15,
  14,
  5
);

// USING OUR INSTANCES

trotro1.boardPassenger(5);
trotro1.boardPassenger(3);
trotro1.dropPassenger(2);

trotro2.boardPassenger(10);

trotro3.boardPassenger(8);

// PRINTING SUMMARIES

console.log("===== TROTRO 1 =====");
console.log(trotro1.summary());

console.log("===== TROTRO 2 =====");
console.log(trotro2.summary());

console.log("===== EXPRESS TROTRO =====");
console.log(trotro3.summary()); 
