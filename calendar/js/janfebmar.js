// jan-feb script
const nextMonth = (ev) => {
    window.location.href = 'march.html';
};

document.querySelector('.next').onclick = (ev) => {
    console.log("onclick worked")
    nextMonth();
};

const prevMonth = (ev) => {
    window.location.href = 'january.html';
};

document.querySelector('.prev').onclick = (ev) => {
    console.log("onclick worked")
    prevMonth();
}
