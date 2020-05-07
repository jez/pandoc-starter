const useDarkTheme = () => {
  const stored = window.localStorage.getItem('useDarkTheme');
  if (stored == null) {
    return false;
  } else {
    return JSON.parse(stored);
  }
}

// First load
if (useDarkTheme()) {
  document.querySelector('html').classList.toggle('solarized-dark');
}

document.querySelector('.reveal .title').addEventListener('click', (ev) => {
  ev.preventDefault();
  const current = useDarkTheme();
  window.localStorage.setItem('useDarkTheme', !current);
  document.querySelector('html').classList.toggle('solarized-dark');
});
