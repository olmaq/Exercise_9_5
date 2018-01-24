var getButton = document.getElementsByClassName('button');

console.log(getButton.length);

for(a = 0 ; a < getButton.length ; a++) {
	var text = getButton[a].innerText;
	alert(text);
};

