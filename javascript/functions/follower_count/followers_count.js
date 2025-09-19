let followerCount = 0;

function increaseCount() {
  followerCount++;
  console.log(`Follower count increased to: ${followerCount}`);
  displayCount();
  checkCountValue();
}

function displayCount() {
  document.getElementById("countDisplay").innerText = followerCount;
}

function checkCountValue() {
  if (followerCount === 10) {
    alert("Congratulations! You've reached 10 followers!");
  } else if (followerCount === 20) {
    alert("Congratulations! You've reached 20 followers!");
  }
}

function resetFollowersCount() {
  followerCount = 0;
  displayCount();
}