function initYear() {
  const year = document.getElementById("year");
  if (year) {
    year.innerText = new Date().getFullYear();
  }
}

function bootstrap() {
  initYear();
}

bootstrap();
