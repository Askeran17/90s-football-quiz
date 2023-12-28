# The 90´s Football Quiz

The quiz is dedicated to football fans of the 90s. In the last era of the century there were many glorious events, many football stars, there was a different football atmosphere than today, and therefore I would like football fans to refresh their memory and go back a little to the past and feel the emotions that filled them when they watched football in the 90s. This quiz consisting of 10 questions will help them plunge into that atmosphere.

You can check out the website [here](https://askeran17.github.io/90s-football-quiz/)!

## Adaptability on a variety of screen sizes

![The 90´s Football Quiz shown on a variety of screen sizes](assets/images/adaptive-size.png)

## Design

### Colour Scheme

As the pages of the site have a background image, I wanted to keep the colour scheme used on the site quite small so as to not overwhelm users. 

In my css file I have used variables to declare colours, and then used these throughout the css file. 

* I have used `gold` as the background-color for the start-button 
* I have used `whitesmoke` as the color for heading 1.
* I have used `green` for the color to display the correct answers.
* I have used `red` for the color to display the wrong answers.
* I have used `#8e44ad` as the background-color for the answer-button and `#732d91` as the hover.

### Wireframes

I used program "Balsamiq Wireframes" to draw a page layout.

![Start screen](assets/images/wireframe-start-screen.png)
![Questions](assets/images/wireframe-questions-list.png)
![Final result](assets/images/wireframe-final-result.png)

## Features

### Existing Features

__Start screen__

- At the start screen you see a football field with a ball, as well as a greeting - this all indicates that we will be talking about football. There is also a start button at the start, which will introduce the user to the quiz.

![Start screen](assets/images/start-screen-desktop.png)

__Game Quiz__

- After the user presses the start button, he is taken to a screen that shows the quiz. There are 10 questions waiting for him, each of which offers 4 possible answers. Here the user also has the opportunity to see how many questions are left and how many correct answers he guessed and how many incorrect ones. 

![Quiz area display](assets/images/quiz-area.png)

If the option is correct, then it goes into the green column; 

![Correct answer](assets/images/correct-answer.png)


if it is incorrect, it goes into the red column and he receives a message that it was a wrong answer.

![Wrong answer](assets/images/wrong-answer.png)
![Alert](assets/images/alert-wrong-answer.png)

The score is also displayed at the top of the quiz itself. If the user guesses the correct answer, he gets 5 points.

![Score](assets/images/score-table.png)

The question counter also shows how many questions are left.

![Questions counter](assets/images/question-counter.png)

__Final result__

- After answering all questions, the user receives the result and the final message.
![Final message](assets/images/final-result.png)

## Testing

Throughout the development of the site, I used Google's developer tools to identify and fix any problems along the way.

If something didn't work correctly, I also used Google's developer tools to tweak and fix the problem.

I've thoroughly tested each page using Google Chrome's developer tools to ensure each page is responsive on a variety of screen sizes and devices.

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

### Desktop Results

The quiz showed good scores.

![Index.html](assets/images/desktop-index.png)

### Mobile Results

The quiz showed good scores.

![Index.html](assets/images/mobile-index.png)

### Manual Testing

__Visitors__

| Goal | Has the goal been achieved? |
| :--- | :--- |
I want to take part in a 90´s Football Quiz online and remember that football past time. I want to be able to play at any time, anywhere. | The quiz collects questions related to football of the 90´s on a wide range of topics. The site is available for use whenever is convenient to the user.
| The site must be responsive. | The site is adaptive and works correctly on all devices.
| I want the site to be easy to navigate. | The site is fully responsive and works correctly on all screen sizes.


| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Play Button | Directs the user to the game page | Clicked on button | Game page opens to quiz area | Pass |
| Correct answer | When a correct answer is clicked the the lower left heading "correct" should display green | Clicked on a correct answer | Column "green" displayed green | Pass |
| Incorrect answer | When an incorrect answer is clicked the lower right heading "wrong" should display red | Clicked incorrect answer | Column "red" displayed red | Pass |
| Score Counter | The score counter should begin at 0. Each time a correct answer is selected the score should increase by 5. If an incorrect answer is selected the score should remain the same | Clicked a correct answer to check if the score increased. Clicked an incorrect answer to check the score stayed the same| When a correct answer was selected the score increased by 5. When an incorrect score was selected the score stayed the same | Pass |
| Question counter | The Question counter should start at 1 and increase by 1 time the next button is selected. | answered questions and clicked next button | Each time the answer button is clicked the question counter increases by 1. | Pass |
| Answer button | After selecting an answer option, pressing the answer button should move the participant to the next question | The answer button displayed | Pass |
| Play again? button | Takes the user to the beginning of the start screen game | Clicked the button | Taken to the beginning of the start screen game | Pass |
| Displayed score | If your score is 10 out of 10, you are congratulated and your score is displayed | If your result is less, then you also receive a message which displays your result | Pass |

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Faskeran17.github.io%2F90s-football-quiz%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Faskeran17.github.io%2F90s-football-quiz%2F&usermedium=all&vextwarning=&warning=1)

- JAVASCRIPT
  - No errors were returned when passing through the official [JSHint validator](https://jshint.com/)

### Unfixed Bugs

I wanted to add an interactive function for entering a name in the start display so that when the final result occurs, the person’s name is saved in a separate list of points scored and the result is recorded under his name. But I still haven’t figured out how to do it, so I don’t have this function.

  ## Technologies Used

### Workspace

I did all the work in Codeanywhere, and at the same time I used VSCode as a draft and sometimes wrote the code there, and then copied it from there and pasted it into Codeanywhere.

### Languages Used

HTML, CSS, Javascript

### Frameworks, Libraries & Programs Used

* [Github](https://github.com/) - To save and store the files for the website.

* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

* [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [IloveImg](https://www.iloveimg.com/) - To resize images.

* [Convertio](https://convertio.co/) - To convert images to webp format.

* [Favicon.io](https://favicon.io/) - To create favicon.

* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

* [Am I Responsive?](http://ami.responsivedesign.is/) - To show the website image on a range of devices.

* [Emojipedia](https://emojipedia.org/) - Emoji for quiz.

## Deployment

The site was deployed to GitHub - [The 90´s Football Quiz](https://askeran17.github.io/90s-football-quiz/)

The steps to deploy are as follows:

1. Login (or signup) to Github.
2. Go to the repository for this project, [90s-football-quiz](https://github.com/Askeran17/90s-football-quiz.git)
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed.

## Credits 

I was inspired by this video (https://www.youtube.com/watch?v=p-2G-7vLuV4), these tutorial: (https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/), (https://arhaanali.medium.com/quiz-app-with-html-css-and-javascript-24ccc4e0ce27). So I partially took the code from each project.

### Content 

- All content for the site was written by myself.

### Media

- The background image in site I took from open source, i.e. google.
