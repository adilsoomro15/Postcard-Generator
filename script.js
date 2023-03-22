let states = document.getElementById('states');
states.onchange = function() {
    console.log('state index: ' + states.selectedIndex);
        // Joining a string "state index:" and adding it to the index of the selected dropdown number
    console.log('state name: ' + states.options[states.selectedIndex].text);
        // Joining a string "state name:" and adding it to the text value of the selected dropdown
    console.log('img/' + states.value + '@2x.jpg');
        // Joining a string "img/" and the state number with "@2xjpg"
    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';
        // Selects the background image of the postcard ID and sets it to a link by adding 2 strings and the state abbreviation
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text;
        // Selects the innerHTML of the element with the ID of 'state-heading' and assign it the value of the selected state from the dropdown menu
    document.getElementById('greeting').innerHTML = 'Greetings from:';
        // Changes the innerHTML of the greeting ID to a simple string
}