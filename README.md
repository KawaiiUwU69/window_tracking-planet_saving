# window_tracking-planet_saving
💙 Working out optimal window ventilation for heat saving and in-room carbon dioxide reduction. 

💛 Will shout at you to close the window in time, so you save the heat => save the planet resources.

We have analyzed the CO2 data to see how the general ventilation frequently and duration can be adjusted. This is for the app to fit our building better. Data analysis can be found in *graph ppm vs time.pptx*.

For the demonstration purposes, however, we've set the timer to be short (20 seconds). 

Also, the Open / Close sensor we are using is placed on the door on level 2 (sensor 3). But that does not affect our approach logically.


Current functionality:
- if the window (=door) is open while the html page is running, the page will notify you about the opening action and start a countdown.
  - getting data from the sensor using an API! (wow, learned so much @_@)
  - little to no delay (max delay = a few minutes).
- the countdow, once started will be displayed on the page.
  - set to 20s for dev purposes.
- the time runs out - the page complains, telling you not to waste heat.


In future updates, the web app will be able to detect when the window *closes*, which shall trigger another timer. This timer is to make sure you ventilate the later on. Want for our users to not suffocate :)

The events described above are then to be put in a singe infinite loop. It will run for as long as the web page is open.

.
.
.

*In case of our university*, the CO2 sensors can be used together with the Open / Close sensor. So, current CO2 values will be used as guidance for when to open the windows, instead of the approximate timer guide. This will improve accuracy of our web advisor :)

Waterstons task (and help):
https://dev.azure.com/OscarOtter/Durhack%20-%20Waterstons%20Sensor%20Project/_wiki/wikis/Durhack---Waterstons-Sensor-Project.wiki/1/Getting-Started

CO2 data:
https://dev.azure.com/OscarOtter/Durhack%20-%20Waterstons%20Sensor%20Project/_wiki/wikis/Durhack---Waterstons-Sensor-Project.wiki/1/Getting-Started
