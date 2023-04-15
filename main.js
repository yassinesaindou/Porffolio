const collapsible = document.querySelector('.collapse');
collapsible.addEventListener('click', () => {
    document.querySelector('.list').classList.toggle('collapsed');
})