# Employee Generator
This assignment is to create an employee profile display through commandline interface and generate a corresponding HTML output. My instructor provided a starter file that contained the initial file structure and tests. I created an output folder to contain generated documents, an `Employee` constructor and its children that extend it, and added functionality to `app.js`. `Inquirer`, `jest`, and `fs` Node packages/modules were used to test, prompt, and write files for the application.   

In order to get started with this project, clone this repo to your desired location then type `npm install` in the terminal. Ensure your terminal's path is pointing towards the root of the cloned repo when installing. All packages and dependancies that I used will be downloaded to begin interacting from the command line or writing files. Enter `node app.js` in the terminal and you'll start the application.  

==NOTE: for this application, multiple managers can be added when you add another employee.== 

## Demo
![demo](./team-DEMO.gif)

## Challenges
<!-- this is mostly a note to myself as to what made this project difficult -->
When provided the starter code, I initially had no clue what was going on and what was needed (aside from the constructors). I slowly got the hand of what was provided to build out `app.js`. For the employee constructor I wanted to return the value using data from the prompts but after failing the test(s), I dialed back my approach to pass them. From there I extended the employee class to include: managers, engineers, and interns. By this point I had a ~~very~~ loose understanding of the htmlRenderer file. I started off with an array of questions to pass as an argument to inquirer but quickly learned that wasn't going how I planned. Then I refactored the array to be a callback function that goes through the questions and conditionally loops. Well, there begins obstacle two. I was calling the prompt, `onboardingQs()`, inside `buildTeam()` and tried to have the next then statement evaluate if the user wanted to add another team member and return the prompt. This caused my prompt to stop working and not push the desired information to the `teamArray`. I moved my then statement inside of `onboardingQs()` to successfully evaluate and conditionally loop. From there, I wanted to have the new employee objects pushed to the `teamArray`. To do so, I made a function that takes in data to evaluate the created employee's role to create (and push) new employees based on their role. Placement of this is where I struggled. Before it was in the `buildTeam()` until I realized that didn't work. This function was moved to the then statement in `onboardingQs()` as well. This made it so that after each prompt was completed, a new employee was pushed and after the loop condition will evaluate. Lastly, writing the file was the most daunting part because this was the first time I was introduced to `__dirname`. When I saw it, I struggled to understand what it did and how to use it with `render()`. After some research, I decided to wing it. I reviewed a project I did in Module 9 because it did something similar to what I needed to do. Essentially, I was passing information that I gathered from the prompt to a template (found/created) by `render()`. Then the data and template are combined and written to a new file. I went with the Module 9 version opposed to `fs.writeFileSync()` due to familiarity and expected outcome. Based on my current understanding, the way I chose to write the file will compile all the information, then write it, and when its resolved, will move on to the next then statement. 

## Deployments
https://github.com/njacques47/employee-generator    
[Extended Demo Video Link](https://drive.google.com/file/d/1nwwayvmPoFZ-PszdxQ_T2ey0AXkrcw_f/view?usp=sharing)     <br>
[Demo Output Link](https://github.com/njacques47/employee-generator/blob/main/DEMO-team.html)   
