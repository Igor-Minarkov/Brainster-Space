// Boostrap additionals

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// General code

$(function () {
  $(".showCompanies").hide();
  $(".button-zaKompanii").on({
    click: function () {
      $(".showCompanies").show();
      $(".showEducation").hide();
    },
  });

  $(".button-Akademii").on({
    click: function () {
      $(".showEducation").show();
      $(".showCompanies").hide();
    },
  });
  $(".sold-out-heading").hide();
  $(".book-button").click(function () {
    $(".sold-out-heading").toggle();
  });
  $(".blog-toogler").click(function () {
    $(".blog-ul-list").toggle();
  });
  $(".navUl li").on("click", function () {
    $(this).parent().find("li.active").removeClass("active");
    $(this).addClass("active");
  });
  $('[data-toggle="popover"]').popover();
  $(".button-toogler").click(function () {
    if ($(window).width() < 500) {
      $(".navUl-for-tablet-static").hide();
    } else {
      $(".navUl-for-tablet-static").toggle();
      $('secondNavUl li').on('click', function(){
        console.log('clicked');
      })
    }
  });
});

// Filtering cards

$(document).ready(function () {
  $(".filter-button").click(function () {
    $(this).addClass("active");
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000")
        .removeClass("filtered");
      $(".filter")
        .filter("." + value)
        .show("3000")
        .addClass("filtered");
    }
  });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

$(".carousel").carousel({
  interval: 7000,
});
