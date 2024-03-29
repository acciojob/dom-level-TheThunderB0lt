//your JS code here. If required.
var element = document.getElementById('level');
var parent = element.parentNode;
var counter = 0;
while (element != null) {
    counter++;
    element = element.parentNode;
}
alert('The level of the element is: ' + counter);