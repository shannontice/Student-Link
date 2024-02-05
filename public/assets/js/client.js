const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const userProfileBtn = document.querySelector('#user-profile-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const profileMenu = document.querySelector('#profile-menu');
const logOutBtn = document.querySelector('#log-out-btn');
const logoutModal = document.querySelector('#logout-modal');

function toggle(menu) {
    menu.classList.toggle('hidden');
}

function setupClickListeners() {
    mobileMenuBtn.addEventListener('click', () => toggle(mobileMenu));

    if(userProfileBtn) {    
        userProfileBtn.addEventListener('click', () => toggle(profileMenu));
        logOutBtn.addEventListener('click', () => toggle(logoutModal));
        logoutModal.addEventListener('click', () => toggle(logoutModal));
    }
}

setupClickListeners();