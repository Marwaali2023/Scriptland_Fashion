const couples = [
  { male: "John", female: "Jane", malePoints: 0, femalePoints: 0, totalPoints: 0 },
  { male: "Michael", female: "Rachel", malePoints: 0, femalePoints: 0, totalPoints: 0 },
  { male: "William", female: "Sophia", malePoints: 0, femalePoints: 0, totalPoints: 0 },
  { male: "David", female: "Emily", malePoints: 0, femalePoints: 0, totalPoints: 0 },
  { male: "James", female: "Olivia", malePoints: 0, femalePoints: 0, totalPoints: 0 }
];

function updatePoints(coupleIndex, gender, points) {
  const couple = couples[coupleIndex];
  couple[gender + "Points"] = parseInt(points);
  couple.totalPoints = couple.malePoints + couple.femalePoints;
}

function calculateResults() {
  const highestScoreCouple = couples.reduce(function (prev, current) {
    return (prev.totalPoints > current.totalPoints) ? prev : current;
  });

  const highestMaleScore = Math.max.apply(null, couples.map(function (couple) {
    return couple.malePoints;
  }));

  const highestFemaleScore = Math.max.apply(null, couples.map(function (couple) {
    return couple.femalePoints;
  }));

  const alertMessage =
    "The winning couple is " + highestScoreCouple.male + " and " + highestScoreCouple.female + " with " + highestScoreCouple.totalPoints + " points!\n" +
    "The highest male score is: " + highestMaleScore + "\n" +
    "The highest female score is: " + highestFemaleScore;

  alert(alertMessage);
}

function renderCouples() {
  const couplesList = document.querySelector(".couple-list");
  couplesList.innerHTML = "";

  couples.forEach(function (couple, index) {
    couplesList.innerHTML += '<div class="couple" data-index="' + index + '">' +
      '<span class="male">' + couple.male + '</span>' +
      '<input type="number" class="male-points" onchange="updatePoints(' + index + ', \'male\', this.value)" placeholder="Points (1-10)" value="' + couple.malePoints + '">' +
      '<span class="female">' + couple.female + '</span>' +
      '<input type="number" class="female-points" onchange="updatePoints(' + index + ', \'female\', this.value)" placeholder="Points (1-10)" value="' + couple.femalePoints + '">' +
      '</div>';
  });
}

// Initial rendering
renderCouples();
