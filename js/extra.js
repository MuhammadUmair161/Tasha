// -------------slick
$('.image').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// -------------------------------

function op() {
  document.getElementById('cart').style.display = 'block'
};
function cl() {
  document.getElementById('cart').style.display = 'none'
};
function opTip() {
  document.getElementById('tips').style.display = 'block'
  document.getElementById('sideNav').style.display = 'none'

};
function clTips() {
  document.getElementById('tips').style.display = 'none'
};

function opNav() {
  document.getElementById('sideNav').style.display = 'block'
};
function clNav() {
  document.getElementById('sideNav').style.display = 'none'
};

function opLogin() {
  document.getElementById('form').style.display = 'block'
  document.getElementById('register').style.display = 'none'
};
function clLogin() {
  document.getElementById('form').style.display = 'none'
};

function opForm() {
  document.getElementById('register').style.display = 'block'
  document.getElementById('form').style.display = 'none'
};
function clForm() {
  document.getElementById('register').style.display = 'none'
};

function opBuy() {
  document.getElementById('buy').style.display = 'block'
};
function clBuy() {
  document.getElementById('buy').style.display = 'none'
};

// -----------------------------

$('document').ready(() => {
  $('#reviews').hide();

  $('#moreInfoBtn').click(() => {
    $('#reviews').hide();
    $('#moreInfo').show();
    $('#reviewsBtn').css('color', 'black');
    $('#moreInfoBtn').css('color', 'rgb(237, 147, 29)');

  })
});

$('document').ready(() => {
  $('#moreInfo').hide();

  $('#reviewsBtn').click(() => {
    $('#moreInfo').hide();
    $('#reviews').show();
    $('#moreInfoBtn').css('color', 'black');
    $('#reviewsBtn').css('color', 'rgb(237, 147, 29)');
  })
});

// -------------------------------------

$('document').ready(() => {
  // -------------------------------
  $('#qtyP').click(() => {
    var d = $('#qty').val();
    // $('#qty').val=parsenInt(d)+1;
    d++;
    var c = $('#qty').val(d)
    // alert(c);
  });

  $('#qtyS').click(() => {
    var d = $('#qty').val();
    if (d > 1) {
      d--;
      var c = $('#qty').val(d)
   
      // $('#qty').parsenInt(d);
      // alert(c);

    }
  });

  //-----------------------------------------

  // ()=>{
  //     $('.show').hide();
  // }

});

// -----------------contant-----------------

$('document').ready(
  () => {
    $('#cookwareBtn').click(() => {
      $('#appliances').hide()
      $('#cookware').show()

      $('#applianceBtn')
        .css('background-color', 'rgb(237, 147, 29)')
        .css('color', '#ffff')

      $('#cookwareBtn')
        .css('background-color', '#ffff')
        .css('color', 'black')

    })
  });

$('document').ready(
  () => {
    $('#applianceBtn').click(() => {
      $('#cookware').hide()
      $('#appliances').show()

      $('#cookwareBtn')
        .css('background-color', 'rgb(237, 147, 29)')
        .css('color', '#ffff')

      $('#applianceBtn')
        .css('background-color', '#ffff')
        .css('color', 'black')

    })
  });

  // ---------------------------------------------------

  $(function () {
    $.scrollUp({
      scrollSpeed: 900,
      scrollImg: true,
    });
});