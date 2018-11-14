## Sean Rankin's Coding Exercise

### My thought process

This challenge was a little unique as I needed to stay under the 4 hour time limit. With that in mind, the first decision I made was to bootstrap the project with Create React App (rather than spending half the time configuring all the tooling).

Next I pulled out a sheet of paper and sketched out a quick workflow of the app and it's basic requirements. This allowed me to wireframe out the components I'd need, and the associated interactions. This allowed me to pretty quickly come up with the actions (and associated reducers) I'd need to build.

After that, I stubbed out the files with stateless components, and SASS files. I find it's easier to think about components when they have a red border and the name of the component on displayed on the screen.

Next I stubbed out the tests and expectations for the components, along with the reducer. I don't typically test Redux actions explicitly as that's covered pretty well in the reducer test.

Once the app and test were stubbed out, I began working the the components. I started with the App and worked my way inward. Some of my test expectations changed along the way, but I basically filled out a test expectation for each element on the page, then added the element to the component. I ran Jest in watch mode as I built so I could see the test progress on my second monitor.

Finally, I wrote the actions and passed them around to the components that needed them. For a product (or feature) of this size, I've found that it ends up being a little easier to do this last.

I seeded the app with a few to-dos, just for the heck of it, but feel free to delete them and create your own!

### Remaining Items

I bunch of stuff would need to be done before this little app was ready for prime time.

##### Data
Right now, I'm just storing the app data in Redux, and that wouldn't be very helpful in the real world, so I'd need to hook it up to an API and database. I usually add the API endpoints in an /api folder and call them from the actions. Typically I use Axios to make manage the API endpoints.

##### UI
The UI needs some finesse. I thought it would be fun to pay tribute to the iOS reminder list, but in the time allotted, I didn't nail it. It's not ready for prime time. I had to substitute fonts and grab a freebie paper background.

##### CSS
The CSS is kinda messy. It could use some optimization. I like to group properties in that relate to each other (size/shape/color). Also, I typically define UI constants like a color palette, border radius, etc in SASS or LESS variables, and import them into other SASS files, but didn't get around to that in the time I had.

##### UI Testing
I would throughly test the UI on many different platforms and browsers. BrowserStack is my go to tool for this. I only tested the app in the latest versions Safari and Chrome. Additionally, the site would need to be tested for accessibility.

##### Tests
I got the code coverage % pretty high, but there are some edge cases that could use some tests.

If you want to check out the coverage report:
```
yarn run coverage
```
Then view the report here:
todo/coverage/lcov-report/src/components/index.html
