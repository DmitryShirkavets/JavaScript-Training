// TASK 1

function isTimeValid(a, b){
	if(a >= 0 && a <= 23){
		if (b >= 0 && b <=59) {
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

// TASK 2

function addMinutes(a, b, c){
	if(a >= 0 && a <= 23){
		if (b >= 0 && b <=59) {
			if((b + c) > 59){
				++a;
				b = (b + c) - 60;
				if (a > 23) {
					a = 0;
					return a, b;
				}else{
					return a, b;
				}
			}else{
				return a, b+c;
			}
		}else{
			return false;
		}
	}else{
		return false;
	}
}

// TASK 3

function getSeason(a){
	if (a >= 1 && a <= 12) {
		switch(a) {
			case 1:  
			    return 'Зима';
			    break;
		  	case 2:  
			    return 'Зима';
			    break;
			case 3:  
			    return 'Весна';
			    break;
			case 4:  
			    return 'Весна';
			    break;
			case 5:  
			    return 'Весна';
			    break;
			case 6:  
			    return 'Лето';
			    break;
			case 7:  
			    return 'Лето';
			    break;
			case 8:  
			    return 'Лето';
			    break;
			case 9:  
			    return 'Осень';
			    break;
			case 10:  
			    return 'Осень';
			    break;
			case 11:  
			    return 'Осень';
			    break;
			case 12:  
			    return 'Зима';
			    break;
		  	default:
		     	return 'Введите пору года';
		    	break;
		}
	}else{
		return false;
	}
}

// TASK 4

function getDayDeclension(a){
	if (a == 1) {
		return 'День';
	}
	if (a >= 2 && a <= 4) {
		return 'Дня';
	}
	if (a >= 5) {
		return 'Дней';
	}		
}

// TASK 5

function getSumm(a){
	var s = 0;
	var i;
	if (a > 0) {
		for (i = 1; i < (a + 1); i++) {
			s = s + i;	
		}
		return s;
	}
	else{
		return false;
	}
}

// TASK 6

function getMultiplicationTable(a){
	for (var i = 1; i < 11; i++) {
		return a + ' * ' + i + ' = ' + a*i;
	}
}

// TASK 7

function isPointInCircle(x,y){
	const xCircle = 3, yCircle = 5, r = 4;
	if (Math.sqrt(Math.pow((x - xCircle), 2) + Math.pow((y - yCircle), 2)) <= r) {
		return true;
	} else {
		return false;
	}
}

function isPointInRenctagle(x,y){
	var s1 = -0.6 * x + 3,
    s2 = 0.4 * x - 2,
    s3 = -1.5 * x - 12,
	s4 = 4 / 7 * x + 4;
	  if (y <= s1 && y >= s2 && y >= s3 && y <= s4) {
	    return true;
	  } else {
	    return false;
	  }
	}

