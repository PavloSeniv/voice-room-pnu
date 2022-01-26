window.onload = function () {
  setTimeout(() => {
    // similar behavior as clicking on a link
    // window.location.href = "rooms.html";

    // similar behavior as an HTTP redirect
    window.location.replace("rooms.html");
  }, 3000);
};
