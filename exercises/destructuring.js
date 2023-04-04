                /* JAVASCRIPT DESTRUCTURING METHOD
                ES6 PRACTICE #EXERCISES */
const text = document.getElementById('text'),
    input = document.querySelector('input'),
    Age = document.getElementById('age')
    button = document.getElementById('btn'),
    body = document.querySelector('body');
    // BTN = document.querySelector('#btn');
                body.style.backgroundColor = 'black';
    const userinfo = {
        name: text.value,
        age: parseInt(Age.value),
    
    }
    
    const {name:fullname, age } = userinfo;
    
    console.log(fullname)
    console.log(age)
    button.addEventListener('click', data);
    
    function data() {
        let userData = `NAME:  ${input.value}\n &  AGE: ${Age.value}`;
        const mData = document.querySelector('#mData');
        //CREATE DATACARD AND CARD BUTTON
        const card = document.createElement('section');
        const cardbtn = document.createElement('button');
        cardbtn.textContent='ok';
        // FUNCTION cardbtn OK to delete card
        cardbtn.addEventListener('click',Delete);
        function Delete() {
            mData.style.display = 'none';
        };
        card.textContent = userData;
        mData.append(card,cardbtn);
        mData.style.backgroundColor ='white';
        console.log(userData)
        console.info(`got data as " ${userData}"`);
        text.value = null;
        Age.value = null;
        // userName = document.createElement("div");
        // userName.style.backgroundColor = 'black';
        // userName.textContent;
    };


