document.addEventListener("DOMContentLoaded", function () {

  // MOBILE NAVIGATION

  const toggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  if (toggle && navigation) {

    toggle.addEventListener("click", function () {

      const isOpen = navigation.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(isOpen));

    });

    navigation.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        navigation.classList.remove("open");

        toggle.setAttribute("aria-expanded", "false");

      });

    });

  }

  // MENU CATEGORY FILTERS

  const filters = document.querySelectorAll(".filter");
  const items = document.querySelectorAll(".menu-item");

  filters.forEach(function (button) {

    button.addEventListener("click", function () {

      const selected = button.dataset.filter;

      filters.forEach(function (filter) {
        filter.classList.remove("active");
      });

      button.classList.add("active");

      items.forEach(function (item) {

        const category = item.dataset.category;

        if (selected === "all" || category === selected) {

          item.style.display = "";

        } else {

          item.style.display = "none";

        }

      });

    });

  });

});
