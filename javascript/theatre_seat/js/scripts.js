let seatArr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

function bookSeat(row, col) {
  alert(`Booking seat at Row ${row + 1}, Column ${col + 1}`);

  if (seatArr[row][col] === 1) {
    alert("Seat already booked!");
    return;
  } else {
    seatArr[row][col] = 1;
    updateBookingUI(row, col);
  }
}

function updateBookingUI(row, col) {
  let seats = document.getElementsByClassName("seat");
  let index = row * 3 + col;
  seats[index].classList.remove('available')
  seats[index].classList.add('booked')
}

function bookRandomSeat() {
  const availableSeats = [];

  for (let i = 0; i < seatArr.length; i++) {
    for (let j = 0; j < seatArr[i].length; j++) {
      if (seatArr[i][j] === 0) {
        availableSeats.push([i, j]);
      }
    }
  }

  if (availableSeats.length === 0) {
    alert("No available seats!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * availableSeats.length);
  const [row, col] = availableSeats[randomIndex];
  bookSeat(row, col);
}
