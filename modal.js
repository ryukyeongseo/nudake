/////////////////modal1
const modal = document.querySelector('.first');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function (e) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/////////////////modal2
const modal2 = document.querySelector('.second');
const overlay2 = document.querySelector('.overlay');
const btnCloseModal2 = document.querySelector('.btn--close-modal2');
const btnsOpenModal2 = document.querySelectorAll('.show-modal2');
const btnsOpenModal12 = document.querySelectorAll('.show-modal12');


const openModal2 = function (e) {
    e.preventDefault();
    modal2.classList.remove('hidden');
    overlay2.classList.remove('hidden');
};

const closeModal2 = function (e) {
    modal2.classList.add('hidden');
    overlay2.classList.add('hidden');
};

btnsOpenModal2.forEach(btn => btn.addEventListener('click', openModal2));
btnsOpenModal12.forEach(btn => btn.addEventListener('click', openModal2));

btnCloseModal2.addEventListener('click', closeModal2);
overlay2.addEventListener('click', closeModal2);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal2.classList.contains('hidden')) {
        closeModal2();
    }
});
/////////////////modal3
const modal3 = document.querySelector('.third');
const overlay3 = document.querySelector('.overlay');
const btnCloseModal3 = document.querySelector('.btn--close-modal3');
const btnsOpenModal3 = document.querySelectorAll('.show-modal3');


const openModal3 = function (e) {
    e.preventDefault();
    modal3.classList.remove('hidden');
    overlay3.classList.remove('hidden');
};

const closeModal3 = function (e) {
    modal3.classList.add('hidden');
    overlay3.classList.add('hidden');
};

btnsOpenModal3.forEach(btn => btn.addEventListener('click', openModal3));

btnCloseModal3.addEventListener('click', closeModal3);
overlay3.addEventListener('click', closeModal3);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal3.classList.contains('hidden')) {
        closeModal3();
    }
});
/////////////////modal4
const modal4 = document.querySelector('.fourth');
const overlay4 = document.querySelector('.overlay');
const btnCloseModal4 = document.querySelector('.btn--close-modal4');
const btnsOpenModal4 = document.querySelectorAll('.show-modal4');


const openModal4 = function (e) {
    e.preventDefault();
    modal4.classList.remove('hidden');
    overlay4.classList.remove('hidden');
};

const closeModal4 = function (e) {
    modal4.classList.add('hidden');
    overlay4.classList.add('hidden');
};

btnsOpenModal4.forEach(btn => btn.addEventListener('click', openModal4));

btnCloseModal4.addEventListener('click', closeModal4);
overlay4.addEventListener('click', closeModal4);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal4.classList.contains('hidden')) {
        closeModal4();
    }
});
/////////////////modal5
const modal5 = document.querySelector('.fifth');
const overlay5 = document.querySelector('.overlay');
const btnCloseModal5 = document.querySelector('.btn--close-modal5');
const btnsOpenModal5 = document.querySelectorAll('.show-modal5');
const btnsOpenModal9 = document.querySelectorAll('.show-modal9');


const openModal5 = function (e) {
    e.preventDefault();
    modal5.classList.remove('hidden');
    overlay5.classList.remove('hidden');
};

const closeModal5 = function (e) {
    modal5.classList.add('hidden');
    overlay5.classList.add('hidden');
};

btnsOpenModal5.forEach(btn => btn.addEventListener('click', openModal5));
btnsOpenModal9.forEach(btn => btn.addEventListener('click', openModal5));

btnCloseModal5.addEventListener('click', closeModal5);
overlay5.addEventListener('click', closeModal5);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal5.classList.contains('hidden')) {
        closeModal5();
    }
});
/////////////////modal6
const modal6 = document.querySelector('.sixth');
const overlay6 = document.querySelector('.overlay');
const btnCloseModal6 = document.querySelector('.btn--close-modal6');
const btnsOpenModal6 = document.querySelectorAll('.show-modal6');


const openModal6 = function (e) {
    e.preventDefault();
    modal6.classList.remove('hidden');
    overlay6.classList.remove('hidden');
};

const closeModal6 = function (e) {
    modal6.classList.add('hidden');
    overlay6.classList.add('hidden');
};

btnsOpenModal6.forEach(btn => btn.addEventListener('click', openModal6));

btnCloseModal6.addEventListener('click', closeModal6);
overlay6.addEventListener('click', closeModal6);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal6.classList.contains('hidden')) {
        closeModal6();
    }
});
/////////////////modal7
const modal7 = document.querySelector('.seventh');
const overlay7 = document.querySelector('.overlay');
const btnCloseModal7 = document.querySelector('.btn--close-modal7');
const btnsOpenModal7 = document.querySelectorAll('.show-modal7');


const openModal7 = function (e) {
    e.preventDefault();
    modal7.classList.remove('hidden');
    overlay7.classList.remove('hidden');
};

const closeModal7 = function (e) {
    modal7.classList.add('hidden');
    overlay7.classList.add('hidden');
};

btnsOpenModal7.forEach(btn => btn.addEventListener('click', openModal7));

btnCloseModal7.addEventListener('click', closeModal7);
overlay7.addEventListener('click', closeModal7);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal7.classList.contains('hidden')) {
        closeModal7();
    }
});
/////////////////modal8
const modal8 = document.querySelector('.eighth');
const overlay8 = document.querySelector('.overlay');
const btnCloseModal8 = document.querySelector('.btn--close-modal8');
const btnsOpenModal8 = document.querySelectorAll('.show-modal8');


const openModal8 = function (e) {
    e.preventDefault();
    modal8.classList.remove('hidden');
    overlay8.classList.remove('hidden');
};

const closeModal8 = function (e) {
    modal8.classList.add('hidden');
    overlay8.classList.add('hidden');
};

btnsOpenModal8.forEach(btn => btn.addEventListener('click', openModal8));

btnCloseModal8.addEventListener('click', closeModal8);
overlay8.addEventListener('click', closeModal8);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal8.classList.contains('hidden')) {
        closeModal8();
    }
});
/////////////////modal10
const modal10 = document.querySelector('.tenth');
const overlay10 = document.querySelector('.overlay');
const btnCloseModal10 = document.querySelector('.btn--close-modal10');
const btnsOpenModal10 = document.querySelectorAll('.show-modal10');


const openModal10 = function (e) {
    e.preventDefault();
    modal10.classList.remove('hidden');
    overlay10.classList.remove('hidden');
};

const closeModal10 = function (e) {
    modal10.classList.add('hidden');
    overlay10.classList.add('hidden');
};

btnsOpenModal10.forEach(btn => btn.addEventListener('click', openModal10));

btnCloseModal10.addEventListener('click', closeModal10);
overlay10.addEventListener('click', closeModal10);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal10.classList.contains('hidden')) {
        closeModal10();
    }
});
/////////////////modal11
const modal11 = document.querySelector('.eleven');
const overlay11 = document.querySelector('.overlay');
const btnCloseModal11 = document.querySelector('.btn--close-modal11');
const btnsOpenModal11 = document.querySelectorAll('.show-modal11');


const openModal11 = function (e) {
    e.preventDefault();
    modal11.classList.remove('hidden');
    overlay11.classList.remove('hidden');
};

const closeModal11 = function (e) {
    modal11.classList.add('hidden');
    overlay11.classList.add('hidden');
};

btnsOpenModal11.forEach(btn => btn.addEventListener('click', openModal11));

btnCloseModal11.addEventListener('click', closeModal11);
overlay11.addEventListener('click', closeModal11);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal11.classList.contains('hidden')) {
        closeModal11();
    }
});
/////////////////modal13
const modal13 = document.querySelector('.ten_2th');
const overlay13 = document.querySelector('.overlay');
const btnCloseModal13 = document.querySelector('.btn--close-modal13');
const btnsOpenModal13 = document.querySelectorAll('.show-modal13');


const openModal13 = function (e) {
    e.preventDefault();
    modal13.classList.remove('hidden');
    overlay13.classList.remove('hidden');
};

const closeModal13 = function (e) {
    modal13.classList.add('hidden');
    overlay13.classList.add('hidden');
};

btnsOpenModal13.forEach(btn => btn.addEventListener('click', openModal13));

btnCloseModal13.addEventListener('click', closeModal13);
overlay13.addEventListener('click', closeModal13);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal13.classList.contains('hidden')) {
        closeModal13();
    }
});
/////////////////modal14
const modal14 = document.querySelector('.ten_3th');
const overlay14 = document.querySelector('.overlay');
const btnCloseModal14 = document.querySelector('.btn--close-modal14');
const btnsOpenModal14 = document.querySelectorAll('.show-modal14');


const openModal14 = function (e) {
    e.preventDefault();
    modal14.classList.remove('hidden');
    overlay14.classList.remove('hidden');
};

const closeModal14 = function (e) {
    modal14.classList.add('hidden');
    overlay14.classList.add('hidden');
};

btnsOpenModal14.forEach(btn => btn.addEventListener('click', openModal14));

btnCloseModal14.addEventListener('click', closeModal14);
overlay14.addEventListener('click', closeModal14);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal14.classList.contains('hidden')) {
        closeModal14();
    }
});
