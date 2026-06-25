const NAVBAR_HEIGHT = 120;

export function scrollToHash(hash) {
  if (!hash || hash === '#') return;

  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  if (!el) {
    setTimeout(() => {
      const retry = document.getElementById(id);
      if (retry) {
        retry.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -NAVBAR_HEIGHT);
      }
    }, 300);
    return;
  }

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.scrollBy(0, -NAVBAR_HEIGHT);
}

export function handleNavClick(path) {
  const [base, hash] = path.split('#');
  if (hash) {
    window.location.hash = base;
    setTimeout(() => scrollToHash('#' + hash), 100);
  } else {
    window.location.hash = base;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
