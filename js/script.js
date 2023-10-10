searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

const isValidEmail = (email) => {
  // Implement your email validation logic here (regex, etc.)
  // For example, a basic regex pattern for email validation:
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const signUpError = document.getElementById("#sign-up-error");
const displaySignUpError = (message) => {
  signUpError.textContent = message;
  signUpError.style.display = "block";
};

function clearSignUpErrorMessages() {
  signUpError.textContent = "";
  signUpError.style.display = "none";
}

//login section
const loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.add("active");
};

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};

const signUpFrom = document.querySelector(".sign-up-form-container");

document.querySelector("#sign-up-btn").onclick = () => {
  console.log(loginForm.classList);
  loginForm.classList.remove("active");
  signUpFrom.classList.add("active");

};

document.querySelector("#close-sign-up-btn").onclick = () => {
  signUpFrom.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#sign-up-to-login-btn").onclick = () => {
  signUpFrom.classList.remove("active");
  loginForm.classList.add("active");
};

signUpFrom.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("sign-up-email").value;
  const password = document.getElementById("sign-up-password").value;
  const confirmPassword = document.getElementById("sign-up-confirm-password").value;

  clearSignUpErrorMessages();

  if (!isValidEmail(email)) {
    displaySignUpError("Invalid email format");
    return;
  }

  if (password.length < 6) {
    displaySignUpError("Password must be at least 6 characters long");
    return;
  }

  if (password !== confirmPassword) {
    // Handle password mismatch error
    displaySignUpError("Passwords do not match. Please try again.");
    return;
  }

  try {

  } catch (error) {
    console.log(error);
  }

});

window.onscroll = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

//home swiper function
var books_slider_swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#.swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var feature_swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
