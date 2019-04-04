const onChangeListeners = [];

window.onpopstate = (event, state) => {
  const { pathname } = document.location;

  onChangeListeners.forEach(callback => callback(pathname));
};

function push(pathname) {
  window.history.pushState({}, "", pathname);

  onChangeListeners.forEach(callback => callback(pathname));
}

export default {
  push,
  onChange: cb => onChangeListeners.push(cb)
};
