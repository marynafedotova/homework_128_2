const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  const scrollDistance = window.scrollY;
  const threshold = 30;

  if (scrollDistance > threshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.getElementById('hamb-btn').addEventListener('click', function () {
  document.body.classList.toggle('open-mobile-menu')
})

document.getElementById('hamb-btn-mobile').addEventListener('click', function () {
  document.body.classList.toggle('open-mobile-menu')
})


var lazyLoadInstance = new LazyLoad({});

$(function() {
  $("#slider1").lightSlider({
    item: 3,
    slideMargin: 30,
    controls: true,
    loop: true,
    // auto: true,
    slideMove: 1
  });
});
$(function() {
  $("#slider2").lightSlider({
    item: 3,
    slideMargin: 30,
    controls: true,
    loop: true,
    // auto: true,
    slideMove: 1
  });
});



new WOW().init();


lightGallery(document.getElementById('animated-thumbnails'), {
    allowMediaOverlap: true,
    toggleThumb: true
});


//form
$(document).ready(function () {
  $('.form-control').focus(function () {
    if ($(this).hasClass('is-invalid')) {
      $(this).removeClass('is-invalid');
    }
  });

  $('#feedback_form').submit(function (e) {
    e.preventDefault();

    const errors = [];
    const nameFld = $('#exampleInputName');
    const emailFld = $('#exampleInputEmail1');

    const name = nameFld.val().trim();
    const email = emailFld.val().trim();

    if (name === '') {
      errors.push('Enter your name, please');
      nameFld.addClass('is-invalid');
    } else if (name.length < 2) {
      errors.push('Your name is too short');
      nameFld.addClass('is-invalid');
    }

    if (email === '') {
      errors.push('Enter your email, please');
      emailFld.addClass('is-invalid');
    } else if (!isValidEmail(email)) {
      errors.push('Incorrect email format, please');
      emailFld.addClass('is-invalid');
    }

    if (errors.length) {
      toast.error(errors.join('. '));
      return;
    }

    const CHAT_ID = '-1002005768837';
    const BOT_TOKEN = '6752195686:AAEk2PgvXP44n-Tv5IJcvCZCkkHOrzeH7pQ';
    const message = `<b>Name: </b> ${name}\r\n<b>Email: </b>${email}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=HTML`;

    console.log(url);

    $.post(url, function (resp) {
      if (resp.ok) {
        nameFld.val('');
        emailFld.val('');
        toast.success('Your message successfully sent.');
      } else {
        toast.error('Some error occurred.');
      }
    });
  });

  function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
});
