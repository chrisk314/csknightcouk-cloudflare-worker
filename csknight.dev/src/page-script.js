/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

// This script is injected into the Notion page and runs on every page load.
window.onload = function () {
  setInterval(() => {
    // Remove all Notion tooltips on images
    document
      .querySelectorAll('div[style*="position: absolute; top: 4px;"]')
      ?.forEach((el) => (el.style.display = 'none'))

    // Remove hidden properties dropdown
    const propertiesDropdown = document.querySelector('div[aria-label="Page properties"]')?.nextElementSibling

    if (propertiesDropdown) {
      propertiesDropdown.style.display = 'none'
    }
  }, 1000)
}

var nav = document.getElementById('nav');
var mytopnav = document.getElementById('myTopnav');
var myicon = document.getElementById('myIcon');
var mydropdown = document.getElementById('myDropdown');

mytopnav.menuIsOpen = false;
mytopnav.subMenuIsOpen = false;

function toggleDropdownMainMenu() {
    mytopnav.menuIsOpen = !mytopnav.menuIsOpen;
    if (mytopnav.menuIsOpen) {
        if (mytopnav.subMenuIsOpen) {
            toggleDropdownSubMenu();
        }
        mytopnav.classList.add("menu-open");
        myicon.classList.add("menu-open");
    } else {
        mytopnav.classList.remove("menu-open");
        myicon.classList.remove("menu-open");
    }
};

function toggleDropdownSubMenu() {
    if (mytopnav.menuIsOpen) {
        mytopnav.subMenuIsOpen = !mytopnav.subMenuIsOpen;
        if (mytopnav.subMenuIsOpen) {
            mydropdown.classList.add("submenu-open");
        } else {
            mydropdown.classList.remove("submenu-open");
        }
    };
};
