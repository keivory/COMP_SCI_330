const dateCheck = (ev) => {
    window.location.href = 'index.html';
};

const homepage = (ev) => {
    window.location.href = 'calendar.html';
};

document.querySelector('.past_date').onclick = (ev) => {
    console.log("onclick worked")
    dateCheck();
};

const dateCheckF = (ev) => {
    window.location.href = 'NewEvent.html';
};

document.querySelector('.future_date').onclick = (ev) => {
    dateCheckF();
}

