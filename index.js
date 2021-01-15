const gotNotif = document.getElementById('notification-panel');
const gotButton = document.querySelector('.btn-got');

const visible = () => {
	gotNotif.className = 'visible';
};

gotButton.addEventListener('click', visible);
