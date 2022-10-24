const login = document.querySelector(".type-login");
const password = document.querySelector(".type-password");

// ALL-BUTTONS //

const loginBtn = document.querySelector(".login-button");
const transferPoints = document.querySelector(".transfer__points_btn");
const changeModeBtn = document.querySelector(".reward__charitbale_btn");

//SECTIONS
const container = document.querySelector(".grid-container");
const header = document.querySelector(".grid-item-header");
const exchangeHistory = document.querySelector(".grid-item-sidebar");
const chooseSection = document.querySelector(".grid-item-choose");
const footerSection = document.querySelector(".grid-item-footer");
const inputPoints = document.querySelector(".input__points_text");
const accStatus = document.querySelector(".acc-status")
// ShetlerChoose
const shetlerChoose = document.querySelectorAll(".shetler");
const dogPhotos = document.querySelector(".fundation__donate_photos");
const greetings = document.querySelector(".greetings");
const currentPoints = document.querySelector(".current-points");
const shetlerImg = document.querySelector('#shetlerimg');
const petShopProducts = {};

const welcome = document.querySelector('.welcome');

const account1 = {
  name: "Erica Johnsons",
  points: [50, 100, 25, 105, 15, 35],
  status: "",
  login: "erica",
  password: "erica123",
};

const account2 = {
  name: "Mark Sullivan",
  points: [50, 100, 250, 10, 15, 35],
  status: "",
  login: "mark",
  password: "mark123",
};

const account3 = {
  name: "Olivier Kowalski",
  points: [50, 100, 300, 10, 15, 35],
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
      // Get sum of points, and check status of current user.

      const points = acc.points.reduce((acm, points) => acm + points, 0);
      console.log(points);
      console.log(acc.status);
      if (points > 500) {
        acc.status = "Status GOLD";
      } else if (points > 300) {
        acc.status = "Status SILVER";
      } else if (points > 150) {
        acc.status = "Status BRONZE";
      }
      acc.sumPoints = points;
    };
    // Display userName

    const getName = function (acc) {
      const userName = acc.name.split(" ")[0];
      acc.userName = userName;
      return userName;
    };
    getName(currentUser);
    pointsSum(currentUser);
    greetings.innerHTML = `Witaj: ${currentUser.userName}🐶`;
    currentPoints.innerHTML = `Twoje punkty: ${currentUser.sumPoints}`;
    accStatus.innerHTML = currentUser.status;
    container.classList.toggle('active');
    welcome.classList.toggle('hidden');
  }
});

// Add points of current user.

// const pointsSum = function(acc)
// {
//     const points = acc.points.reduce((acm, points) => acm + points, 0);
//     console.log(points);
//     console.log(acc.status);
//     if(points > 500)
//     {
//         acc.status = 'Status GOLD'
//     }
//     else if(points > 300)
//     {
//         acc.status = 'Status SILVER';
//     }
//     else if(points > 150)
//     {
//         acc.status = 'Status BRONZE';
//     }
//     return points;
// }
// pointsSum(account1);
// console.log(account1)


shetlerChoose.forEach(function(shetler, i){
  shetler.addEventListener('click', function()
  {
    const currentImg = shetler.value;
    console.log(currentImg);
    shetlerImg.src=`img/${currentImg}.jpg`
  })
});