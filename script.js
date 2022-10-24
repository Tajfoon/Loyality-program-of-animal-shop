const login = document.querySelector('.type-login');
const password = document.querySelector('.type-password');

// ALL-BUTTONS //

const loginBtn = document.querySelector('.login-button');
const transferPoints = document.querySelector('.transfer__points_btn');
const changeModeBtn = document.querySelector('.reward__charitbale_btn');

//SECTIONS
const header = document.querySelector('.grid-item-header');
const exchangeHistory = document.querySelector('.grid-item-sidebar');
const chooseSection = document.querySelector('.grid-item-choose');

const inputPoints = document.querySelector('.input__points_text');

// ShetlerChoose
const shetlerChoose = document.querySelector('.shetler')

const dogPhotos = document.querySelector('.fundation__donate_photos');

const petShopProducts ={

};

const account1 = 
{
name: 'Erica Johnsons',
points: [50, 100, 25, 10, 15, 35],
status: '',
login: 'erica',
password: 'erica123',
}

const account2 = 
{
name: 'Mark Sullivan',
points: [50, 100, 25, 10, 15, 35],
status: '',
login: 'mark',
password: 'mark123',
}

const account3 = 
{
name: 'Olivier Kowalski',
points: [50, 100, 25, 10, 15, 35],
status: '',
login: 'olivier',
password: 'olivier123',
}

const accounts = [account1, account2, account3];
let currentUser;

loginBtn.addEventListener('click', function(event){
    event.preventDefault();
    currentUser = accounts.find(acc => acc.login === login.value);
    if(currentUser.password === password.value)
    {
        console.log('poprawne')
    }
    });