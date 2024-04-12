

function getName(){

    firstNameElem = document.querySelector('.first-name');
    firstName = firstNameElem.value;
    lastNameElem = document.querySelector('.last-name');
    lastName = lastNameElem.value;

    localStorage.setItem('nameOne', JSON.parse(firstName));
    localStorage.setItem('nameTwo', JSON.parse(lastName));


    // html = `
    // <div class="container">
    //     <i class="icon-cupcake logo"></i>
    //     <h1 class="site-title">${localStorage.getItem("nameOne", JSON.stringify(firstName))} ${localStorage.getItem("nameTwo", JSON.stringify(lastName))}</h1>
    //     <small class="site-description">Student</small>
    // </div>
    // `

    // display = document.querySelector('.hero');
    // display.innerHTML = html;
    
}



