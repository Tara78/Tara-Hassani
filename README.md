# KonskapKontrol-2-Tara-Hassani
 WeatherApp
In this weatherApp I used a fetch request. 

First create an API key in “home.openweathermap.org ” website.  

Then declare the button to the Java-Script. And made en eventlistener. Declare the value in the variable which I made by the name of the city.   

 Declare input information to JS and printing the (CityName ) variable, by doing console.log to print the result. we need to have value + input. In this case value is the city name.  

Next step is using Function method and making a variable for our URL address. In the our URL I added the city name and APIKey to became specific.   

After that I used Fetch method.Fech Method helping us to access to all data which we need. Such as value, temp, humidity and so on.
Fetch method is such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

Then I declared all variable in spesefic name in javascript I connected all variables to HTML variable which I created them already.Files can be uploaded using an HTML elements. Variable in JS can uploaded by using an HTML elements. 

 

 Using Icon API img icon website. Adding the cityName and the weather condition to make it spesefic when it uploadig a file (which we found all info from API). Because weather has array and not strinng , I used [0]. 


Using catch method with a different explanation incase if they put wrong name of the city or if the type error.  
A fetch() promise always will reject with a TypeError when a network error is encountered or if it is misconfigured on the server-side, although this usually means permission issues or similar — a 404 does not constitute a network error. Then I wrote an message to the user not spesefic with 404, the user can see the different message, like Some thing wrong! 