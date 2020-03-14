
const nextMonth = (ev) => {
    window.location.href = 'june.html';
};

document.querySelector('.next').onclick = (ev) => {
    console.log("onclick worked")
    nextMonth();
};

const prevMonth = (ev) => {
    window.location.href = 'april.html';
};

document.querySelector('.prev').onclick = (ev) => {
    console.log("onclick worked")
    prevMonth();
}
