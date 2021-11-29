function getProperDate(date){
	var d = new Date(date);
  	var day = d.getDay();
  	switch(day){
  		case 1: 
  			day = 'Monday';
  			break;
  		case 2:
  			day = 'Tuesday';
  			break;
  		case 3:
  			day = 'Wednesday';
  			break;
  		case 4:
  			day = 'Thursday';
  			break;
  		case 5:
  			day = 'Friday';
  			break;
  		case 6:
  			day = 'Saturday';
  			break;
  		case 0:
  			day = 'Sunday';
  	}
  	var date = d.getDate()
  	var month = d.getMonth()
    month = getProperMonth(month)  	
  	var year = d.getFullYear()

  	return [day, (date+"-"+month+"-"+year)];
}

function getProperMonth(month){
  while(month > 11){
    month = month -12
  }
  switch(month){
    case 0:
      month = 'January';
      break;
    case 1: 
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7: 
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
  }
  return month;
}

function addDaysToDate(date, addedDays){
  var d = new Date(date)
  d.setDate(d.getDate() + addedDays);
  return d;
}

function differenceInDates(date1, date2){
	var firstDate = new Date(date1)
	var secondDate = new Date(date2)
	var timeDifference  = firstDate.getTime() - secondDate.getTime()
	var daysDifference = timeDifference / (1000 * 3600 * 24)
	return daysDifference;
}

function capitalize(string){
 	var splitStr = string.split(" ")
 	var capitalzeStr = ""
 	for (var i=0; i<splitStr.length; i++){
 		var wordSplit = splitStr[i].split("")
 		for (var j=0; j<wordSplit.length; j++){
 			if(j==0){
 				capitalzeStr = capitalzeStr + wordSplit[j].toUpperCase()
 			}else{
 				capitalzeStr = capitalzeStr + wordSplit[j].toLowerCase()
 			}
 		}
 		capitalzeStr = capitalzeStr + " "
 	}

 	return capitalzeStr;
}







function setBookGenre(genre){
    switch(genre) {
      case "adultFiction":
        return "Adult Fiction";
      case "nonFiction":
        return "Non-Fiction";
      case "scienceFiction":
        return "Science Fiction";
      case "children":
        return "Children";
      case "youngAdult":
        return "Young Adult";
      case "selfHelp":
        return "Self Help";
      case "healthCare":
        return "Health Care";
      case "horror":
        return "Horror";
      case "anime":
        return "Anime";
      case "mystery":
        return "Mystery";       
      case "magazine":
        return "Magazine";
      case "mandarin":
        return "Mandarin";
      case "english":
        return "English";
      case "bahasaMelayu":
        return "Bahasa Melayu";
      case "fantasy":
        return "Fantasy";
    }
  }