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
const loginWindow = document.querySelector('.loginWindow');

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
  points: [50, 100, 25, 50, 23, 56, 50, 100 ],
  product: ['Wild-animal CARE 5kg', 'Kaganiec size. "M"', 'Przysmaki jagnięcina', 'Saszetka BEEF', 'Wild-Animal CARE 2.5kg',
  'Wild-animal CARE 5kg', 'Kaganiec size. "M"', 'Przysmaki jagnięcina'],
  charityPoints: [37, 23, 15, 100, 20, 23],
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

loginBtn.addEventListener('click', function (event) {
  event.preventDefault();
  currentUser = accounts.find((acc) => acc.login === login.value);

  if (currentUser.password === password.value) {
    loginWindow.classList.add('hidden');
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

    transferPointsBtn.addEventListener("click", function (e) {
      const points = inputPoints.value;
      const correctPoints = currentUser.sumPoints - points;
      const correctCharity = Number(currentUser.sumCharity) + Number(points);

      //*     Transfering points is possible ???

      if (points > 0 && correctPoints >= 0) {
        currentUser.sumPoints = correctPoints;
        currentUser.sumCharity = correctCharity;
      }

      //*     Change status of account
      if (currentUser.sumCharity > 500) {
        currentUser.status = "Status konta GOLD 🏅";
        header.style = "background-color: gold;"
      } else if (currentUser.sumCharity > 300) {
        currentUser.status = "Status konta SILVER 🥈";
        header.style = "background-color: silver;"
      } else if (currentUser.sumCharity > 150) {
        currentUser.status = "Status konta BRONZE 🥉";
      }
      //*    Display points
      currentPoints.innerHTML = `<p>Przekazałeś już: ${currentUser.sumCharity} = ${String(currentUser.sumCharity)[0]}kg karmy.</p>`;
      howManySpend.innerHTML = `<h3>Punkty do wydania: ${currentUser.sumPoints}</h3>`;
      accStatus.innerHTML = currentUser.status;
      console.log(
        `${
          currentUser.choosenShetler
            ? `Przelałeś punkty na ${currentUser.choosenShetler}`
            : `Wybierz schronisko!`
        }`
      );
      
      header.scrollIntoView();
    });
    
    const displayHistory = function(acc){
      acc.points.forEach(function(val, i){
        const addExchange = `
    <div class="bought-history-row">
    <p class="bought__date"> ${i +1} </p>
    <p class="bought__product"> ${acc.product[i]} </p>
    <p class="bought__points"> ${val} points </p>
    </div>`;
    exchangeHistory.insertAdjacentHTML('beforeend', addExchange);
      })
    
    }
    displayHistory(currentUser);

    greetings.innerHTML = `Witaj: ${currentUser.userName}🐶`;
    currentPoints.innerHTML = `<p>Przekazałeś już: ${currentUser.sumCharity} = ${String(currentUser.sumCharity)[0]}kg karmy.</p>`;
    accStatus.innerHTML = currentUser.status;
    howManySpend.innerHTML = `<h3>Punkty do wydania: ${currentUser.sumPoints}</h3>`;
    container.classList.toggle("active");
    welcome.classList.toggle("hidden");
  }
});

const dogList = document.querySelector('.dog__list');

const renderList = function(mov, id){
const html = `<option value="${id}">${mov.name}</option>`;
dogList.insertAdjacentHTML('afterbegin', html)
}

const promise = fetch('https://api.thedogapi.com/v1/breeds/').
then(response => response.json()).
then(function(result){
  result.forEach((mov, id) => renderList(mov, id));
  dogList.addEventListener('click', function(){
    if(dogList.value == 0){
      
    }
  })

}).then(function(res){
});