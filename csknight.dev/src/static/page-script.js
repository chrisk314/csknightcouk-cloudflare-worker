/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

const NAV_BAR = '__NAV_BAR__';
const FOOTER = '__FOOTER__';

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = FOOTER;

function replaceNavBar() {
  var nav = document.querySelector('.notion-topbar');
  nav = nav ? nav : document.querySelector('.notion-topbar-mobile');
  if (!nav) {
    return false;
  }
  nav.outerHTML = NAV_BAR;
  var mytopnav = document.getElementById('myTopnav');
  mytopnav.menuIsOpen = false;
  mytopnav.subMenuIsOpen = false;
  return true;
}

function insertFooter() {
  notionMain = document.querySelector('main[class="notion-frame"]');
  if (!notionMain) {
    return false;
  }
  notionMain.insertAdjacentElement('beforeend', footerTemplate.content.firstChild);
  return true;
}

function tryN(fn, delay, tries) {
  // Retries the function fn until it returns true or tries reaches 0
  console.log("trying", fn.name, delay, tries);
  if(tries && !fn()){
    setTimeout(tryN.bind(this, fn, delay, tries-1), delay);
  }
}

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
  tryN(replaceNavBar, 200, 50);
  tryN(insertFooter, 200, 50);
}

function toggleDropdownMainMenu() {
    var menuIcon = document.getElementById('myIcon');
    if (window.getComputedStyle(menuIcon).display === "none") {
      return;
    }
    var mytopnav = document.getElementById('myTopnav');
    mytopnav.classList.toggle("menu-open");
    myIcon.classList.toggle("menu-open");
    var mydropdown = document.getElementById('myDropdown');
    if (mydropdown.classList.contains("submenu-open")) {
        toggleDropdownSubMenu();
    }
};

function toggleDropdownSubMenu() {
    var menuIcon = document.getElementById('myIcon');
    if (window.getComputedStyle(menuIcon).display === "none") {
      return;
    }
    var mydropdown = document.getElementById('myDropdown');
    mydropdown.classList.toggle("submenu-open");
};
