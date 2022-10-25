const login = document.querySelector(".type-login");
const password = document.querySelector(".type-password");

// ALL-BUTTONS //

const loginBtn = document.querySelector(".login-button");
const transferPointsBtn = document.querySelector(".transfer__points_btn");
const changeModeBtn = document.querySelector(".reward__charitbale_btn");

//SECTIONS
const container = document.querySelector(".grid-container");
const header = document.querySelector(".grid-item-header");
const exchangeHistory = document.querySelector(".grid-item-sidebar");
const chooseSection = document.querySelector(".grid-item-choose");
const footerSection = document.querySelector(".grid-item-footer");
const inputPoints = document.querySelector(".input__points_text");
const accStatus = document.querySelector(".acc-status");
const howManySpend = document.querySelector(".howManySpend");
// ShetlerChoose
const shetlerChoose = document.querySelectorAll(".shetler");
const dogPhotos = document.querySelector(".fundation__donate_photos");
const greetings = document.querySelector(".greetings");
const currentPoints = document.querySelector(".current-points");
const shetlerImg = document.querySelector("#shetlerimg");
const petShopProducts = {};

const welcome = document.querySelector(".welcome");

const account1 = {
  name: "Erica Johnsons",
  points: [50, 100, 25, 105, 15, 35],
  charityPoints: [37, 23, 15, 100, 20],
  status: "",
  login: "erica",
  password: "erica123",
};

const account2 = {
  name: "Mark Sullivan",
  points: [50, 100, 250, 10, 15, 35],
  charityPoints: [37, 23, 15, 100, 20],
  status: "",
  login: "mark",
  password: "mark123",
};

const account3 = {
  name: "Olivier Kowalski",
  points: [50, 100, 300, 10, 15, 35],
  charityPoints: [37, 23, 15, 100, 20],
  status: "",
  login: "olivier",
  password: "olivier123",
};

const accounts = [account1, account2, account3];

let currentUser;

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  currentUser = accounts.find((acc) => acc.login === login.value);

  if (currentUser.password === password.value) {
    const pointsSum = function (acc) {
      // Get sum of points
      const points = acc.points.reduce((acm, points) => acm + points, 0);
      const charityPoints = acc.charityPoints.reduce(
        (acm, points) => acm + points,
        0
      );
      console.log(points);
      console.log(acc.status);
      // Check status of user
      if (charityPoints > 500) {
        acc.status = "Status konta GOLD 🏅";
      } else if (charityPoints > 300) {
        acc.status = "Status konta SILVER 🥈";
      } else if (charityPoints > 150) {
        acc.status = "Status konta BRONZE 🥉";
      }
      acc.sumPoints = points;
      acc.sumCharity = charityPoints;
    };

    // Display userName
    const getName = function (acc) {
      const userName = acc.name.split(" ")[0];
      acc.userName = userName;
      return userName;
    };
    getName(currentUser);
    pointsSum(currentUser);

    //***

    shetlerChoose.forEach(function (shetler, i) {
      shetler.addEventListener("click", function (e) {
        const currentImg = shetler.value;
        console.log(currentImg);
        shetlerImg.src = `img/${currentImg}.jpg`;
        currentUser.choosenShetler = shetler.value;
      });
    });

    //***      Click handler to send points for shelter

    transferPointsBtn.addEventListener("click", function () {
      const points = inputPoints.value;
      const correctPoints = currentUser.sumPoints - points;
      const correctCharity = Number(currentUser.sumCharity) + Number(points);
      console.log(`SUMA PUNKTÓW CHAR: ${correctCharity}`);

      //*     Transfering points is possible ???

      if (points > 0 && correctPoints >= 0) {
        currentUser.sumPoints = correctPoints;
        currentUser.sumCharity = correctCharity;
      }

      //*     Change status of account
      if (currentUser.sumCharity > 500) {
        currentUser.status = "Status konta GOLD 🏅";
      } else if (currentUser.sumCharity > 300) {
        currentUser.status = "Status konta SILVER 🥈";
      } else if (currentUser.sumCharity > 150) {
        currentUser.status = "Status konta BRONZE 🥉";
      }
      //*    Display points
      currentPoints.innerHTML = `Twoje punkty: ${currentUser.sumPoints}`;
      howManySpend.innerHTML = `Suma przelanych punktów: ${currentUser.sumCharity}`;
      accStatus.innerHTML = currentUser.status;
      console.log(
        `${
          currentUser.choosenShetler
            ? `Przelałeś punkty na ${currentUser.choosenShetler}`
            : `Wybierz schronisko!`
        }`
      );
    });

    greetings.innerHTML = `Witaj: ${currentUser.userName}🐶`;
    currentPoints.innerHTML = `Twoje punkty: ${currentUser.sumPoints}`;
    accStatus.innerHTML = currentUser.status;
    howManySpend.innerHTML = `Suma przelanych punktów: ${currentUser.sumCharity}`;
    container.classList.toggle("active");
    welcome.classList.toggle("hidden");
  }
});



