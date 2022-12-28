const login = document.querySelector(".type-login");
const password = document.querySelector(".type-password");

// ALL-BUTTONS //

const loginBtn = document.querySelector(".login-button");
const transferPointsBtn = document.querySelector(".transfer__points_btn");
const changeModeBtn = document.querySelector(".reward__charitbale_btn");
const logOut = document.querySelector(".logOut--button");
const arrow__left = document.querySelector(".arrow__left");
const arrow__right = document.querySelector(".arrow__right");
const arrow__down = document.querySelector('.arrow__down');

//SECTIONS
const container = document.querySelector(".grid-container");
const header = document.querySelector(".grid-item-header");
const exchangeHistory = document.querySelector(".grid-item-sidebar");
const chooseSection = document.querySelector(".grid-item-choose");
const footerSection = document.querySelector(".grid-item-footer");
const inputPoints = document.querySelector(".input__points_text");
const accStatus = document.querySelector(".acc-status");
const howManySpend = document.querySelector(".howManySpend");
const loginWindow = document.querySelector(".loginWindow");
const slider = document.querySelector(".slider");
const footer = document.querySelector(".footer");
const main = document.querySelector('main');
const article = document.querySelector('article');
const sectionFirst = document.querySelector(".section-first");
const sectionSec = document.querySelector(".section-sec");
const section__about = document.querySelector(".section__about");
const allSections = document.querySelectorAll('.section');
// ShetlerChoose
const shetlerChoose = document.querySelectorAll(".shetler");
const dogPhotos = document.querySelector(".fundation__donate_photos");
const greetings = document.querySelector(".greetings");
const currentPoints = document.querySelector(".current-points");
const shetlerImg = document.querySelector("#shetlerimg");
const petShopProducts = {};

const slide = document.querySelectorAll(".slide");

const account1 = {
  name: "Ricky Johnsons",
  points: [50, 100, 25, 50, 23, 56, 50, 100],
  product: [
    "Wild-animal CARE 5kg",
    'Kaganiec size. "M"',
    "Przysmaki jagnięcina",
    "Saszetka BEEF",
    "Wild-Animal CARE 2.5kg",
    "Wild-animal CARE 5kg",
    'Kaganiec size. "M"',
    "Przysmaki jagnięcina",
  ],
  charityPoints: [37, 23, 15, 100, 20, 23],
  status: "",
  login: "ricky",
  password: "ricky123",
};

const account2 = {
  name: "Mark Sullivan",
  product: [
    "Wild-animal CARE 5kg",
    'Kaganiec size. "M"',
    "Przysmaki jagnięcina",
    "Saszetka BEEF",
    "Wild-Animal CARE 2.5kg",
    "Wild-animal CARE 5kg",
    'Kaganiec size. "M"',
    "Przysmaki jagnięcina",
  ],
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
    loginWindow.classList.add("hidden");
    slider.classList.add("hidden");
    footer.classList.add("hidden");
    sectionFirst.classList.add("hidden");
    sectionSec.classList.add("hidden");
    article.classList.add('hidden');
    main.classList.remove('absolute');
    container.style.zIndex = "2";
    
    footer.classList.remove("flex-center");

    const pointsSum = function (acc) {
      // Get sum of points
      const points = acc.points.reduce((acm, points) => acm + points, 0);
      const charityPoints = acc.charityPoints.reduce(
        (acm, points) => acm + points,
        0
      );
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

    //***

    shetlerChoose.forEach(function (shetler, i) {
      shetler.addEventListener("click", function (e) {
        const currentImg = shetler.value;
        // console.log(currentImg);
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
        header.style = "background-color: gold;";
      } else if (currentUser.sumCharity > 300) {
        currentUser.status = "Status konta SILVER 🥈";
        header.style = "background-color: silver;";
      } else if (currentUser.sumCharity > 150) {
        currentUser.status = "Status konta BRONZE 🥉";
      }
     
    displayPoints();
    });

    //Log out
    logOut.addEventListener("click", function () {
      login.value = "";
      password.value = "";
      currentUser = "";
      container.style.opacity = 0;
      loginWindow.classList.remove("hidden");
      slider.classList.remove("hidden");
    footer.classList.remove("hidden");
    sectionFirst.classList.remove("hidden");
    sectionSec.classList.remove("hidden");
    article.classList.remove('hidden');
    main.classList.add('absolute');
    main.style.position = 'static';
    });

     //*    Display points
     const displayPoints = function()
     {
     currentPoints.innerHTML = `<p>Przekazałeś już: ${String(currentUser.sumCharity)[0]}kg karmy.</p>`;
     howManySpend.innerHTML = `<h3>Punkty do wydania: ${currentUser.sumPoints}</h3>`;
     accStatus.innerHTML = currentUser.status;
     header.scrollIntoView();
   }

    const displayHistory = function (acc) {
      acc.points.forEach(function (val, i) {
        const addExchange = `
    <div class="bought-history-row">
    <p class="bought__date"> ${i + 1} </p>
    <p class="bought__product"> ${acc.product[i]} </p>
    <p class="bought__points"> ${val} points </p>
    </div>`;
        exchangeHistory.insertAdjacentHTML("beforeend", addExchange);
      });
    };


    getName(currentUser);
    pointsSum(currentUser);
    displayHistory(currentUser);

    greetings.innerHTML = `Witaj: ${currentUser.userName}🐶`;
    currentPoints.innerHTML = `<p>Przekazałeś już: ${String(currentUser.sumCharity)[0]}kg karmy</p>`;
    accStatus.innerHTML = currentUser.status;
    howManySpend.innerHTML = `<h3>Punkty do wydania: ${currentUser.sumPoints}</h3>`;
    container.classList.toggle("active");
  }
});



const dogList = document.querySelector(".dog__list");
const dogInfo = document.querySelector(".dog-info");

const renderList = function (mov, id) {
  const html = `<option value="${id}">${mov.name}</option>`;
  dogList.insertAdjacentHTML("afterbegin", html);
};

const renderInfo = function (mov, id) {
  const html = `<li>Rasa: ${mov.name}</li>
  <li>Waga: ${mov.weight.metric}kg</li>
  <li>Wzrost: ${mov.height.metric}cm</li>
  <li>Długość życia: ${mov.life_span.slice(0, -5)} lat</li>`;

  dogInfo.insertAdjacentHTML("afterbegin", html);
};

const promise = fetch("https://api.thedogapi.com/v1/breeds/")
  .then((response) => response.json())
  .then(function (result) {
    result.forEach((mov, id) => renderList(mov, id));
    return result;
  })
  .then(function (res) {
    // console.log(res);
    dogList.addEventListener("click", function (e) {
      dogInfo.innerHTML = "";
      const finded = res.find(
        (finded) => finded.id === Number(e.target.value) + 1
      );
      renderInfo(finded);
    });
  }).catch(err => console.log(`Something went wrong! ${err}`));


// SLIDER ------------------------>

let currentSlide = 0;
let MaxSlides = slide.length;

const moveSlide = function (slide) {
  slide.forEach((mov, i) => {
    mov.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
};

const moveRight = () => {
  if (currentSlide < MaxSlides) {
    moveSlide(slide, currentSlide);
    currentSlide++;
  } else {
    currentSlide = 0;
    moveSlide(slide, currentSlide);
  }
};

const moveLeft = () => {
  if (currentSlide === 0) {
    currentSlide = MaxSlides - 1;
    moveSlide(slide, currentSlide);
  } else {
    currentSlide--;
    moveSlide(slide, currentSlide);
  }
};

moveSlide(slide);

setInterval(moveRight, 8000);
const myTimeout = setTimeout(moveRight, 2000);
// Move slide

arrow__right.addEventListener("click", moveRight);

arrow__left.addEventListener("click", moveLeft);

// SLIDER --------------END------>

//Slide into ABOUT US!

arrow__down.addEventListener('click', function(){
  sectionFirst.scrollIntoView({behavior:"smooth"});
})

let callBack = (entries) =>{
  const [entry] = entries;
  // console.log(entry);
  entry.isIntersecting && entry.target.classList.remove('section--unvisible');

}

let loadContent = new IntersectionObserver(callBack, {
  root: null,
  rootMargin:'0px',
  threshold: 0.2,
});


allSections.forEach(function(section){
  loadContent.observe(section);
  section.classList.add('section--unvisible');

})