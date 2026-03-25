// закрытие баннера при нажатии на крестик

(function () {
    function ClosedInit(event) {
        const cancelButton = event.target.closest('.banner_cancel');
        
        if (cancelButton) {
            const closedBanner = document.querySelector('.banner');
            closedBanner.classList.add("banner-closed");
        }
    };
    
    document.addEventListener("click", ClosedInit);
})();

// бургер меню

(function () {
  function burgerInit(event) {
    const burgerIcon = event.target.closest(".burger-icons");
    const burgerNavLink = event.target.closest(".headerMenu_link");

    if (!burgerIcon && !burgerNavLink) {
      return;
    }
    if (document.body.classList.contains("body--burger-menu")) {
      document.body.classList.remove("body--burger-menu");
    } else {
      document.body.classList.add("body--burger-menu");
    }
  }

  document.addEventListener("click", burgerInit);
})();