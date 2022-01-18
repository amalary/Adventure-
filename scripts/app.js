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
        "question":"So you dared to be part of Slytherin ? Are you brace enough to face Draco Malfoy in a wizard match ?",
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
        "question":"You choose to be a part of the school of Gryffindor and your mates want to go out tonight. Do you...?",
        "answers":{
            "i": "Stay in and prepare for classes tomorrow",
            "j": "Join them on their excursion",
            "k": "Convince them to stay in as well",
            "l": "Tell the professors what is about happen"
        }
    },
        '2_i': {
            "question": "You got a goodnights rest and arrived early for class"
        },
    
        '2_j':{
            "question": "You guys found the lost prisnoner of Azkaban"
        },
    
        '2_k': {
            'question': "Turns out they did not listen and got into really bad trouble with the school teachers"
        }, 
    
        '2_l': {
            "question": 'You tell the professor and they tell you not to tatle tale'
        },
    // Hufflepuff Path
    "1_d": {
        "question":"You choose to be a part of the school of Gryffindor and your mates want to go out tonight. Do you...?",
        "answers":{
            "m": "Stay in and prepare for classes tomorrow",
            "n": "Join them on their excursion",
            "o": "Convince them to stay in as well",
            "p": "Tell the professors what is about happen"
        }
    },
        '2_m': {
            "question": "You got a goodnights rest and arrived early for class"
        },
    
        '2_n':{
            "question": "You guys found the lost prisnoner of Azkaban"
        },
    
        '2_o': {
            'question': "Turns out they did not listen and got into really bad trouble with the school teachers"
        }, 
    
        '2_p': {
            "question": 'You tell the professor and they tell you not to tatle tale'
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



