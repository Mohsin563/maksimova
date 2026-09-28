document.getElementById('yr').textContent = new Date().getFullYear();

// Lightbox
var dlg = document.getElementById('lb');
var big = document.getElementById('lbimg');
document.querySelectorAll('#gallery img').forEach(function (img) {
  img.parentElement.addEventListener('click', function () {
    big.src = img.src;
    big.alt = img.alt;
    dlg.showModal();
  });
});
dlg.querySelector('.close').addEventListener('click', function () { dlg.close(); });
dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

// Booking request: copy the message, then open Instagram to paste it into a DM
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  var f = function (id) { return document.getElementById(id).value; };
  var text = 'Hi Maksimova Photo! Booking request\n' +
    'Name: ' + f('name') + '\nShoot: ' + f('type') + '\nCity: ' + f('city') +
    '\nDate: ' + (f('date') || 'flexible') + '\nIdea: ' + f('msg');
  var status = document.getElementById('status');
  function open() { window.open('https://www.instagram.com/maksimova_photo/', '_blank', 'noopener'); }
  function ok() { status.textContent = 'Request copied. Paste it into a DM on Instagram.'; open(); }
  function fail() { status.textContent = 'Could not copy. Please describe your shoot in an Instagram DM.'; open(); }
  try { navigator.clipboard.writeText(text).then(ok, fail); } catch (err) { fail(); }
});
