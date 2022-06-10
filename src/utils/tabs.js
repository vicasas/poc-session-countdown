export const createTab = () => {
  let tabs = window.localStorage.getItem('change_tabs');

  if(!tabs || tabs === 'null') {
      tabs = {};
  } else {
      tabs = JSON.parse(tabs);
  }

  const tabId = new Date().getTime();

  tabs[tabId] = false;
  window.localStorage.setItem('change_tabs', JSON.stringify(tabs));

  return tabId;
}


export const removeTab = () => {
  let tabs = window.localStorage.getItem('change_tabs');
  tabs = JSON.parse(tabs);

  if(window && tabs){
      delete tabs[window.tabId];
  }

  window.localStorage.setItem('change_tabs', JSON.stringify(tabs));
}

export const updateTabChange = () => {
  let tabs = window.localStorage.getItem('change_tabs');
  tabs = JSON.parse(tabs);

  if(window && tabs && (tabs[window.tabId] === true)){
      tabs[window.tabId] = false;

      window.localStorage.setItem('change_tabs', JSON.stringify(tabs));
      window.location.reload();
  }
}