# COMP_SCI_330 Final Report for Mental Health App WebAware

## Problem and Motivation ## 

Our project tackles the issue of mental health among college students which has recently been a growing concern. Our project aims to help students maintain positive mental health, which includes helping them to realize their full potential, cope with stress and work productively. Numerous attempts have been made to approach the issue of mental health, ranging from the expansion of on-campus counseling services to mental health mobile applications. Counseling resources on campus are limited and students do not find them accessible enough. One prevalent app that tackles mental health is Talkspace which offers services ranging from individual counseling to couple’s therapy and the users can access licensed therapists. However, the aspect of accessing licensed therapists makes the app expensive. Other apps include Breathe2Relax and Tactical Breather which provide breathing exercises as a way of managing stress. While these apps are helpful for people suffering from anxiety, they are not tailored specifically for college students. 


One of the ideas we built upon was journaling; journaling helps to control overwhelming emotions and improve mood by helping one prioritize fears and concerns. We would like to allow our users to express themselves through this tool. The other idea we will be implementing is the use of emojis to represent the user’s mood for the day. The series of these moods will be summarized in a line graph so that the user can analyze how their mood has been the entire week and month. Additionally, we will provide users with a calendar that will allow them to view their journal entries and their moods for each day. We want to give the user a chance to add events related to mental health in the calendar provided in the app. 


## High-Fidelity Prototyping (P5, P6, & P7) ##
- Task #1: We implemented the task of checking a mental health reflection entry from a past date. In particular, if the user has a past entry on his emotional state (this is separate from the generic event input) then he can find an entry on that date, and if he clicks on it the mental health reflection (mood, reflections, journal tag, etc) will pop up. 
![Screen Shot 2020-03-14 at 7 08 20 PM](https://user-images.githubusercontent.com/32556569/76692840-05315480-662a-11ea-9df9-65401c606ec9.png)

- Component #1: We have implemented the custom calendar to support this task. The idea is that users can record their mood and journal on each day, and check those entries from the past. 
 
- Task #2: For the user to be able to add a current mood and journal entry to the current date (at the time of writing the code, this was 23 February, so our prototype supports journal entry for that date). The app features, for the current date, two buttons: “Mood” and “Journal.” The former gives a simple popup list of many moods to choose from (represented by emojis), and the latter lets the user write a more detailed journal to summarize the day. We decided to separate these two because we don’t expect the user to write a journal every single day; sometimes all the user simply wants to record his mood for the day. 

![Screen Shot 2020-03-14 at 7 10 09 PM](https://user-images.githubusercontent.com/32556569/76692929-a8369e00-662b-11ea-8add-fd3a18ae11f0.png)
![Screen Shot 2020-03-14 at 7 10 16 PM](https://user-images.githubusercontent.com/32556569/76692926-a4a31700-662b-11ea-951f-8ef3f6ccc150.png)

- Component #2: We decided to implement a data entry form to support the mood and journaling entry task above. The user enters “data” (mood/journal entry) by picking a mood from a popup or answering specific questions (eg: what’s something that went well today? Mood? etc...) so that the journalling is not overly open-ended.   

- Task #3: The task we decided to implement is for the user to access the data visualization bar chart that shows the trends of emotions the user experienced over the past week. We rank the emotions from 1 to 5, 1 being the most negative (sad) and 5 being the most positive (happy). Of course, emotions can’t exactly be ranked one dimensionally (eg: sad or angry are not necessarily “worse” than the other), but the point of this visualization chart is to simply give the user a general idea of any improvement of emotion. 

![Screen Shot 2020-03-14 at 7 13 49 PM](https://user-images.githubusercontent.com/32556569/76692948-dddb8700-662b-11ea-9d91-1dec6a5d7c52.png)

- Component #3: For this component, we decided to implement a data visualization bar chart. This chart graphs the number of days that the user has experienced a particular mood. Everyday the user inputs his mood, the chart updates, and the user can use this chart to find out, for example, that he has spent numerous days feeling angry. 


## Reflection ##
### What you managed to accomplish in the time you had ###
We created a mental health app which supports the above three tasks, three components, applies Norman’s user interface design principles and graphic design principles. In particular, we managed to finish a working calendar (includes all months in 2020) that allows the user to input mood of the day, journal (the user is asked a short list of questions to summarize his day), check past journal entries/mood, add a future event, and check the data summary for trends in the user’s emotion recorded in the past.
We ran through multiple iterations of our interface via our user testing process. One of the many insights we gained from user testing is the intuition of the interface. Our goal is to make it easy for the user to understand how the app worked, without needing to read a manual of instructions. We went through many variations of emojis to best represent emotion, many versions of ways for the user to input data for the current day, and paid attention to detail such as adding hover effects to make the whole interface more intuitive. 
### What the next steps of your app would be if you had more time ###
With the time we had, we mainly focused on developing a user-friendly interface as a start, but apart from the mood analysis graphs, we didn’t have many features that directly help with the user’s mental health problems. With more time, we would add more features to aid the user with improving his mental health. For example, one of our earlier ideas was to let the user input his specific college-related mental health issue, and receive motivational quotes that correspond to that issue. For example, if the user is suffering from coursework stress, the app will return a quote such as “however difficult life may seem there is always something you can do and succeed at.” Ideas like this will further help the user ameliorate his mental health issues. 


## Links ##
### A link to your team’s repository ###
https://github.com/HCI-330/HCI_330/tree/project_7
### A link to a working version of your prototype (or a video of it) ###
https://keivory.github.io/COMP_SCI_330/index.html
### Instructions for running your app (including how your prototype is best viewed). ###
To access the prototype by downloading from team’s repository: go into the calendar folder → february.html
To access the prototype from Github pages, simply click on the link


