// settings
let settings = document.querySelector(".settings");
let settings_icon = document.querySelector(".settings .icon-settings");

settings_icon.addEventListener("click", () => {
  settings.classList.toggle("setactive");
  document.querySelector(".settings .icon-settings i").classList.toggle("fa-spin");
});

// cheching local storage for colors
let colors_list = document.querySelectorAll(".settings .option-box .color-list li");
let mainColorStorage = localStorage.getItem("color");

if (mainColorStorage != null) {
  document.documentElement.style.setProperty("--main-color", mainColorStorage);
  colors_list.forEach((item) => {
  item.classList.remove("active");
  if (item.dataset.color === mainColorStorage) {
      item.classList.add("active");
    }
  });
}

// change colors
colors_list.forEach((item) => {
  item.addEventListener("click", (eo) => {

    handleActive(colors_list)

    //add active class
    eo.target.classList.add("active");

    //setting color
    document.documentElement.style.setProperty("--main-color",eo.target.dataset.color);

    //put the color value in local storage
    localStorage.setItem("color", eo.target.dataset.color);
  });
});

// random backgrounds generator
let landing = document.querySelector(".landing");
let back_array = [
  "url(img/fig1.jpg)",
  "url(img/fig2.jpg)",
  "url(img/fig3.jpg)",
  "url(img/fig4.jpg)",
];
let i = true;

// bachground option

let backrandomlist = document.querySelectorAll(".settings .back-options span");
let yes_btn = document.querySelector(".settings .back-options .yes");
let no_btn = document.querySelector(".settings .back-options .no");

// checking local storage for background image and option
let background_op = localStorage.getItem("btn");

if (background_op != null) {
  handleActive(backrandomlist)
  if (background_op === "yes") {
    yes_btn.classList.add("active");
    i = true;
    change_back();
  } else {
    no_btn.classList.add("active");
    i = false;
    change_back();
  }
}

let stored_back = localStorage.getItem("background")
if (stored_back != null) {
    landing.style.background = back_array[stored_back];
    landing.style.backgroundSize = "cover";
    landing.style.backgroundposition = "center";
}

// random backgrounds
yes_btn.addEventListener("click", (eo) => {
  i = true;
  change_back();
});
no_btn.addEventListener("click", (eo) => {
  i = false;
  change_back();
});

// adding active class to background option buttons

backrandomlist.forEach((ele) => {
  ele.addEventListener("click", (eo) => {
    handleActive(backrandomlist)

    // add active class
    eo.target.classList.add("active");

    // add it to lacal storage
    localStorage.setItem("btn", eo.target.dataset.btn);
  });
});


/* ========= Start Animation Scroll =========== */
let header = document.querySelector(".landing header")
let skills = document.querySelector(".skills")
let range = document.querySelectorAll(".skills .skill-box .skill-progress span")
let skill_name = document.querySelectorAll(".skills .skill-box .skill-name")
let gallery = document.querySelector(".gallery")
let imgs = document.querySelectorAll(".gallery .image-box img")
let about = document.querySelector(".about-us")
let bullets = document.querySelectorAll(".nav-bullets .bullet")
let features = document.querySelector(".features")
let featBox = document.querySelectorAll(".features .feat-box")
let testemonials = document.querySelector(".testemonials")
let tesBox = document.querySelectorAll(".testemonials .test-container .tes-box")
let timeline = document.querySelector(".timeline")
let leftTime = document.querySelectorAll(".timeline .timeline-content .left")
let rightTime = document.querySelectorAll(".timeline .timeline-content .right")
let contact = document.querySelector(".contact-us")
let contactInput = document.querySelectorAll(`.contact-us form .left input[type="text"]`)
let textArea = document.querySelector(".contact-us form .right")
let aboutText = document.querySelector(".about-us .about-box h2")
let aboutText2 = document.querySelector(".about-us .about-box p")
let aboutImg = document.querySelector(".about-us .about-image img")
let landText =  document.querySelector(".landing .text-landing")
let arrayAbout = [aboutText,aboutText2]


window.onload = (eo) => {
  header.style.opacity ="1"
  header.style.transform = "translateY(0)"

  settings_icon.style.right = "-38px"

  document.querySelector(".nav-bullets").style.right = "5px"

  landText.style.opacity ="1"
  landText.style.transform = "translateY(0)"
}




window.onscroll = (eo) => {

  // filling range on scroll
  if (window.scrollY >= skills.offsetTop - 270) {
    range.forEach((ele) => {
      ele.style.width = `${ele.dataset.range}%`
    })
    skill_name.forEach((ele) => {
      ele.style.transform = "translateY(0)"
      ele.style.opacity = "1"
    })
  }

  // changing color on scroll
  if(window.scrollY >= about.offsetTop - 400){
    settings_icon.style.backgroundColor = `var(--main-color)`
    document.querySelector(".settings .icon-settings i").style.color = "white"

    arrayAbout.forEach(ele => {
      ele.style.transform = "translateX(0)"
      ele.style.opacity = "1"
    });
    
    aboutImg.style.transform = "translateX(0)"
    aboutImg.style.opacity = "1"

  }else{
    settings_icon.style.backgroundColor = `white`
    document.querySelector(".settings .icon-settings i").style.color = "black"
  }

  // animation on scroll img
  if (window.scrollY >= gallery.offsetTop - 350) {
    imgs.forEach((ele) => {
      ele.style.transform = "translateY(0)"
      ele.style.opacity = "1"
    })
   }

  //  features anim
  if (window.scrollY >= features.offsetTop - 350) {
    featBox.forEach((ele) => {
      ele.style.transform = "translateY(0)"
      ele.style.opacity = "1"
    })
   }

    //  testemonials anim
  if (window.scrollY >= testemonials.offsetTop -350) {
    tesBox.forEach((ele) => {
      ele.style.transform = "translateY(0)"
      ele.style.opacity = "1"
    })
   }

      //  timeline anim
  if (window.scrollY >= timeline.offsetTop -300) {
   leftTime.forEach((ele) => {
    ele.style.transform = "translateX(0)"
    ele.style.opacity = "1"
   })

   rightTime.forEach((ele) => {
    ele.style.transform = "translateX(0)"
    ele.style.opacity = "1"
  })
   }

      //  contact anim
  if (window.scrollY >= contact.offsetTop -300) {
    contactInput.forEach((ele) => {
      ele.style.transform = "translateX(0)"
      ele.style.opacity = "1"
    })
    textArea.style.transform = "translateX(0)"
    textArea.style.opacity = "1"
   }
}

/* ========= End Animation Scroll =========== */


//  create overlay 
imgs.forEach( ele => {
  ele.addEventListener("click",(eo) => {
    
  // create overlay
  let overlay = document.createElement("div")
  overlay.className = "overlay"

  // create popup box
  let popupBox = document.createElement("div")
  popupBox.className = "popup-box"
  overlay.appendChild(popupBox)

  // create headings
  if (eo.target.alt !== "") {
  let imgHeading = document.createElement("h2")
  let imgText = document.createTextNode(ele.alt)
  imgHeading.appendChild(imgText)
  popupBox.appendChild(imgHeading)
}

  //create img popup
  let popupImg = document.createElement("img")
  popupImg.src = ele.src
  popupImg.className = "popup-img"
  popupBox.appendChild(popupImg)

  // create span element
  let closeButton = document.createElement("span")
  closeButton.className ="close-button"
  closeButton.innerHTML = `X`
  popupBox.appendChild(closeButton)

  // add overlay to body
  document.body.appendChild(overlay)

  })
});

// close the image
  document.addEventListener("click",(eo) => {
  if(eo.target.className === "close-button"){
     eo.target.parentElement.parentElement.remove()
  }else if(eo.target.className === "overlay"){
     eo.target.remove()
  }
})


// nav bullets
scrollToSection(bullets)

// header links
let links = document.querySelectorAll(".landing header .links li a")
scrollToSection(links)

// bullets option 
let btnBullets = document.querySelectorAll(".settings .bull-options span")
let bullYes = document.querySelector(".settings .bull-options .yes")
let bullNo = document.querySelector(".settings .bull-options .no")
let bulletsSection = document.querySelector(".nav-bullets")


// checking local storage

let bullStorage =  localStorage.getItem("bullets")

if (bullStorage !== null) {
  bulletsSection.style.display = bullStorage
  if(bullStorage === "block"){
   handleActive(btnBullets)
   bullYes.classList.add("active")
  }else{
    handleActive(btnBullets)
    bullNo.classList.add("active")
  }
}

// adding active class to bullets options buttons
btnBullets.forEach((ele) => {
  ele.addEventListener("click",(eo) => {

    handleActive(btnBullets)

    // add active class
    eo.target.classList.add("active");

  })
})

bullYes.addEventListener("click",(eo) => {
  bulletsSection.style.display ="block"

  // add it to local storage
  localStorage.setItem("bullets","block")
})

bullNo.addEventListener("click",(eo) => {
  bulletsSection.style.display="none"

  // add it to local storage
  localStorage.setItem("bullets","none")
})

// reset button
let resetBtn = document.querySelector(".settings .reset-btn")
resetBtn.addEventListener("click",(eo) => {
  localStorage.clear()
  window.location.reload()
})

// toggle menu 
let menuIcon = document.querySelector(".menu-icon")
let linkContainer = document.querySelector(".landing header .links")

menuIcon.addEventListener("click",function (eo) {
  menuIcon.classList.toggle("active")

  eo.stopPropagation()

  this.classList.toggle("active-menu")

  linkContainer.classList.toggle("open")
})

document.addEventListener("click",(eo) => {
  if(eo.target !== menuIcon && eo.target !== linkContainer ){
  if (linkContainer.classList.contains("open")) {

    menuIcon.classList.toggle("active-menu")
    
    menuIcon.classList.toggle("active")

    linkContainer.classList.toggle("open")
  }
  }
})

linkContainer.addEventListener("click",function(eo){
  eo.stopPropagation()
})

















/* =============== functions ================  */

// scroll to section function
function scrollToSection(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click",(eo) => {
      eo.preventDefault()
      document.querySelector(eo.target.dataset.bull).scrollIntoView({
      behavior:"smooth"
      })
    })
  })
}

// handle active class function
function handleActive(elements){
  elements.forEach((ele) => {
    ele.classList.remove("active");
  });
}

// random background function
function change_back() {
  let inter = setInterval(() => {
    if (i === true) {
      let random_num = Math.round(Math.random() * back_array.length);
      landing.style.background = back_array[random_num];
      landing.style.backgroundSize = "cover";
      landing.style.backgroundposition = "center";
    
      //   add random num to local storage
    localStorage.setItem("background",random_num)
    } else {
      clearInterval(inter);
    }
  }, 10000);
}
