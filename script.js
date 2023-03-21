let states = document.getElementById('states');
states.onchange = function() {
    console.log('state index: ' + states.selectedIndex);
        // Joining a string "state index:" and adding it to the index of the selected dropdown number
    console.log('state name: ' + states.options[states.selectedIndex].text);
        // Joining a string "state name:" and adding it to the text value of the selected dropdown
    console.log('img/' + states.value + '@2x.jpg');
        // Joining a string "img/" and the state number with "@2xjpg"

    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';
}