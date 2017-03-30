funtion gradeTest() {
	//global variables
	var totalQuestions = 5;
	var correctAnswers = 0;
	var alertText;
	var i;
	
	//get text inq1 box; drop to lower-case to make string comparison
	var a1 = document.getElementById('q1').value,toLowerCase();
	if(a1 == 'douglas hyde') {
		correctAnswers++;
	}

	//iterate through all options in radio button list 
	//if checked value is true, answer is correct 
	var a2 = document.getElementsByName('q2');
	for(i = 0; i < a2.lenght; i++){
		if(a2[i].checked) {
			if(a2[i].value =='true') {
				correctAnswers++;
				break;
			}	
		}
	}


	//iterate through all options in radio button list 
	//if checked value is tallinn, answer is correct
	var a3 = document.getElementsByName('q');
	for(i = 0; i < a3.lenght; i++){
		if(a3[i].checked) {
			if(a3)[i].value == 'tallinn') {
				correctAnswers++;
				break
			}
		}
	}	
	
	
	//put correct answers in new array
	//iterate through all options in check box list 
	//add selected item to new array 
	//if both lists have same lenght and items at same data at same indexes 
	//then we have all the correct answers for question must finish
