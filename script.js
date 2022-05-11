// Javascript untuk pagination
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function goPage(page) {
  document.cookie = "page=${page}";

  var url = "index.html#footer";
  switch (page) {
    case 1:
      url = "index.html#footer";
    case 2:
      url = "tentang.html#footer";
    case 3:
      url = "kontak.html#footer";
    case 4:
      url = "login.html#footer";
  }

  window.location.href = url;
}

// Efek parallax

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // Jumbotron
  $(".jumbotron .gambar-komputer img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 8 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 3 + "%)",
  });

  // Playlist Video
  if (wScroll > $("#playlist-video").offset().top - 300) {
    $("#playlist-video .card").each(function (i) {
      setTimeout(function () {
        $("#playlist-video .card").eq(i).addClass("muncul");
      }, 200 * i);
    });
  }

  // Berita Tailwind
  if (wScroll > $("#berita-tailwind").offset().top - 200) {
    $(".sisi-kiri").each(function (i) {
      setTimeout(function () {
        $(".sisi-kiri").eq(i).addClass("sisi-muncul");
      }, 100);
    });
    $(".sisi-kanan").each(function (i) {
      setTimeout(function () {
        $(".sisi-kanan").eq(i).addClass("sisi-muncul");
      }, 50);
    });
  }
});
