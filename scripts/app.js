let story = 0; 
let form = document.getElementById('Adventure'); 
let submit = document.getElementById('continueButton'); 
let reset = document.getElementById('resetButton'); 
let answer = ''; 

// console.log(form); 

let storyTime = {
    "start":{
        "question": "You just arrived to Hogwarts School of magic, which school would you like to join ?",
        "answers": {
            "a": "Gryffindor",
            "b": "Slytherin",
            "c": "Ravenclaw",
            "d": "Hufflepuff"
        }
    },
    // Gryffindor Path
    "1_a": {
    "question":"You choose to be a part of the school of Gryffindor and your mates want to go out tonight. Do you...?",
    "answers":{
        "a": "Stay in and prepare for classes tomorrow",
        "b": "Join them on their excursion",
        "c": "Convince them to stay in as well",
        "d": "Tell the professors what is about happen"
    }
},
    '2_a': {
        "question": "You got a goodnights rest and arrived early for class"
    },

    '2_b':{
        "question": "You guys found the lost prisnoner of Azkaban"
    },

    '2_c': {
        'question': "Turns out they did not listen and got into really bad trouble with the school teachers"
    }, 

    '2_d': {
        "question": 'You tell the professor and they tell you not to tatle tale'
    },
    // Slytherin Path 
    "1_b": {
        "question":"So you dared to be part of Slytherin ? Are you brave enough to face Draco Malfoy in a wizard match ?",
        "answers":{
            "e": "Run and hide!",
            "f": "Of course I am !!!",
            "g": "Can I call Harry ?",
            "h": "Tell the teachers!",
        }
    },
        '2_e': {
            "question": "You managed to get away safely without anyone noticing"
        },
    
        '2_f':{
            "question": "You actually win against him !!!"
        },
    
        '2_g': {
            'question': "Turns out Harry is away for the day so you're on your own :("
        }, 
    
        '2_h': {
            "question": 'They are surprised someone ratted on another student so early (smh)'
        },
    // Ravenclaw Path
    "1_c": {
        "question":"Welcome to Ravenclaw what shall we do today ?",
        "answers":{
            "i": "Practice flying on our brooms",
            "j": "Mix and Master potions",
            "k": "Play Quidditch",
            "l": "Explore the woods for monsters "
        }
    },
        '2_i': {
            "question": "You happend to crash into a tree"
        },
    
        '2_j':{
            "question": "Turns out you set the class on fire"
        },
    
        '2_k': {
            'question': "You won the game by catching the golden snitch"
        }, 
    
        '2_l': {
            "question": 'Your soul was snatched by a Dementor'
        },
    // Hufflepuff Path
    "1_d": {
        "question":" Greetings to Hufflepuff we seem to be lost in Hogwarts choose a door you think will lead us to our quarters?",
        "answers":{
            "m": "Door 1",
            "n": "Door 2",
            "o": "Door 3",
            "p": "Door 4"
        }
    },
        '2_m': {
            "question": "Leads to everyone to the dinning area"
        },
    
        '2_n':{
            "question": "Broom closet :("
        },
    
        '2_o': {
            'question': "Successfully leads to the quarters and everyone can go to bed now !"
        }, 
    
        '2_p': {
            "question": 'You and everyone find themselves in the Chamber of Secrets'
        },
};

// Continue Link 

submit.addEventListener('mouseup', function() {

    answer = form.querySelectorAll('input[type=radio]:checked')[0].value;
    if(answer) {
        story++; 
        populateForm(story + '_' + answer); 
        console.log('story time !');
    }
});

// Reset Buttom 

function resetForm(){
    document.getElementById('Adventure').reset(); 
    window.location.replace("./index.html");
    return false;
}

// Creating answers from the story itself

function populateForm(story){
    let currentStory = storyTime[story]; 
    let text = ''; 
    for (let prop in currentStory['answers']){
        if(currentStory['answers'].hasOwnProperty(prop)){
            text += '<label><input type ="radio" name = "answers" value="' + prop + '"/><span>'+currentStory['answers'][prop] + '</span><label>';
        }

    }
    form.querySelector('p').innerHTML = currentStory.question;
    form.querySelector('fieldset').innerHTML = text; 

}

populateForm('start');



