
class Customer {

	name;
	age;
	country;
	horsePower;

	constructor (name, age, country, horsePower){
		this.name = name;
		this.age = age;
		this.country = country;
		this.horsePower = horsePower;
	}


}

function calculateInsurance() {
	var name = document.getElementById("inputName").value;
	var age = parseInt(document.getElementById("inputAge").value, 10);
	var country = parseInt(document.getElementById("select").value, 10);
	var horse = parseInt(document.getElementById("inputHorse").value, 10);

	var customer = new Customer (name,age,country,horse);
	switch(customer.country) {
  		case 100:
  			var insurance = horse * 100/age + 50;
  			console.log(insurance);
  			document.getElementById("result").innerHTML = name + " your insurance costs: " + Math.trunc(insurance) + ",- EUR";    		
    		break;
  		case 120:
  			var insurance = horse * 120/age + 100;
  			console.log(insurance);
  			document.getElementById("result").innerHTML = name + " your insurance costs: " + Math.trunc(insurance) + ",- EUR";
  			break;    		// code block
    	case 150:
  			var insurance = horse * 150/(age+3) + 50;
  			console.log(insurance);
  			document.getElementById("result").innerHTML = name + " your insurance costs: " + Math.trunc(insurance) + ",- EUR";
  			break;	
  		case 0:
    		document.getElementById("result").innerHTML = "Please Enter ALL Data";
    		break;	}
    
    
             
 

		}	
var elementNode = document.getElementById('submit');		
elementNode.addEventListener('click',calculateInsurance, false);
