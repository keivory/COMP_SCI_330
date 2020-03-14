const formCheck = (ev) => {
    mood = document.querySelector('#mood').value;
    if (mood == "placeholder")
    {
        document.querySelector('#remind').classList.remove('hidden');
    }
    else
    {
        alert("Journal saved!");
        window.location.href = 'february.html';
    }
};

const homepagefromjournal = (ev) => {
    window.location.href = 'february.html';
};

const closeform = (ev) => {
    document.querySelector('#hidden-panel').classList.add('hidden');
}

const submitForm = (ev) => {
    const eventText = document.querySelector('#subject').value;
    document.querySelector('#hidden-panel').classList.add('hidden');
    document.querySelector('#new-event').classList.remove('hidden');
    document.querySelector('#new-event span').innerHTML = eventText;
    document.querySelector('#eventExists').classList.remove('hiddenText');
    document.querySelector('#eventExists').innerHTML = "";
    ev.preventDefault();
 };

 const hideEvent = (ev) => {
    if (document.querySelector('#subject').value == ""){
        alert("No event to delete!");
    }
    else{
    document.querySelector('#new-event').classList.add('hidden');
    alert('Event Deleted!');
    document.querySelector('#hidden-panel').classList.add('hidden');
    }
 }