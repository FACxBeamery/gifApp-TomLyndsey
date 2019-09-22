# Week 2 Project Lyndsey and Tom 


![](https://i.imgur.com/bqyAeIJ.png)
![](https://i.imgur.com/Gy9l8c1.png)

## User story
    As a developer I want our form submissions to trigger one or more API calls so that I can demonstrate the use of a fetch request.
    - [ ] code includes at least one fetch request
    - [ ] form submission triggers a fetch request
    - [ ] event listener in javascript listens for form submission

* **result is displayed on the page**
    As a user I want to input data so I can interact with the page
    - [ ] when I submit my input, I can see something displayed on the page
    - [ ] the result displayed on the page must change depending on my input


* **if the API call fails, I can see an error message on the page**
    As a user I want to be notified of an error so I understand why something might not be working as I expected.
    - [ ] I can see why there was an error
    - [ ] I can see a plain english description of what happened
    - [ ] I know what to do to correct the error

* **if my input is not valid, I can see an error message on the page**
    As a user I want to know that I'm providing the correct information in the correct way so that I can complete the form successfully
    - [ ] If my input is in the correct format, I can see positive feedback
    - [ ] I can see an example of correct input in the placeholder text
    - [ ] If my input is not valid, I can see a plain english description of how to correct it


### Code Quality
As a developer...
* I need my code to be legible and understandable **so that** any developer who looks at the code now or in the future can understand what it does
  - [ ] code is self documenting
  - [ ] code is in our agreed style
  - [ ] camelCase is used in Javascript
  - [ ] CSS uses kebab-case or BEM
  - [ ] there are no linter errors
  - [ ] no extraneous code (e.g. console.logs)

### Testing

As a developer, I need to have unit tests in place for my logic functions, so that I can be sure they work correctly
- [ ] each logic function has a related test
- [ ] all tests are passing

As a developer, I need to use pure functions for my logic, so that I do not mutate any state in my application
- [ ] logic functions are pure
- [ ] state is not mutated


### Deployment

As a developer, I need to run my web app from a local HTTP server, so that I can make changes and understand how they will affect my app
- [ ] My app runs from a Docker container


## Improvements and Problems
- The initial plan of using the Spotify API had to be abandoned due to its use of user authorization. This meant our timeframe for the GIPHY API project was significantly shortened.
- Testing proved to be a problem for this project due to our functions not being pure. Future projects could benefit from considering a TDD mindset more. 
- Security could have been thought about more. Twice we uploaded to GitHub with private client ID's and API keys which could be accessed and used. 

