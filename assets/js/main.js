// Menú móvil (sustituye al JS de WordPress)
document.addEventListener('click', function (e) {
  var open = e.target.closest('.wp-block-navigation__responsive-container-open');
  var close = e.target.closest('.wp-block-navigation__responsive-container-close');
  if (!open && !close) return;
  var nav = (open || close).closest('.wp-block-navigation') || document;
  var c = nav.querySelector('.wp-block-navigation__responsive-container');
  if (!c) return;
  var isOpen = !!open;
  c.classList.toggle('is-menu-open', isOpen);
  c.classList.toggle('has-modal-open', isOpen);
  document.documentElement.classList.toggle('has-modal-open', isOpen);
  c.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
});
document.addEventListener('click', function (e) {
  var a = e.target.closest('.wp-block-navigation__responsive-container.is-menu-open a');
  if (a) { var c = a.closest('.wp-block-navigation__responsive-container'); c.classList.remove('is-menu-open','has-modal-open'); document.documentElement.classList.remove('has-modal-open'); }
});
document.querySelectorAll('.wp-block-navigation-submenu__toggle').forEach(function (b) {
  b.addEventListener('click', function () { b.setAttribute('aria-expanded', b.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'); });
});
