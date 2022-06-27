if (!window.site) window.site = {};

// One time after page loading
window.site.initPage = () => {

};

// Every time after creating new elements. For example: after ajax loading
window.site.initElements = () => {

};

window.addEventListener('load', () => {
  window.site.initPage();
  window.site.initElements();
});
