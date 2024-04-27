/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

// const NAV_BAR = '__NAV_BAR__';
// const FOOTER = '__FOOTER__;
const NAV_BAR = '<nav id="nav"><div id="myTopnav" class="container topnav"></div></nav>';
const FOOTER = '<footer id="footer"></footer>';

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
  tryN(replaceNavBar, 1000, 10);
  tryN(insertFooter, 1000, 10);
}

function toggleDropdownMainMenu() {
    var mytopnav = document.getElementById('myTopnav');
    var myicon = document.getElementById('myIcon');
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
    var mytopnav = document.getElementById('myTopnav');
    var mydropdown = document.getElementById('myDropdown');
    if (mytopnav.menuIsOpen) {
        mytopnav.subMenuIsOpen = !mytopnav.subMenuIsOpen;
        if (mytopnav.subMenuIsOpen) {
            mydropdown.classList.add("submenu-open");
        } else {
            mydropdown.classList.remove("submenu-open");
        }
    };
};
