# negotiator
## Project description

#### Sources:
1. `main.js` is the Vue application entrypoint and `App.js` is the main component.
1. components - includes Vue components for different part of the UI.
2. plugins - contains only one plugin `vuetify` as a UI library.
3. store - used to simplify state management and to reduce amount of props and emitted events. For this simple use case the store is being created using `Vue.observable`. 

#### Tests:
1. Written using Vue test utils and Jest.
2. Their main purpose is to test functionalities (behavior).
3. All tests placed in `/tests`
4. There are component based tests `SalaryForm` & `Tabs` as well as integration test `StoreCheck`.

#### Linting:
1. ESLint with typescript

#### Tooling:
1. npm
2. Babel
3. Typescript

#### CSS preprocessor:
1. Stylus

#### UI:
1. `Vuetify` is the core ui library used in this project.
2. Almost all the ui components are the default ones from `vuetify`.

## Requirements
- NodeJS must be installed on your machine.
- https://openweathermap.org/api app id (you can register and get a key without any cost).

## Project setup and run
- Clone the project: `git clone https://github.com/nowshad-sust/negotiator.git`
- Go to the directory: `cd negotiator`
- Install dependencies: `npm install`
- Add your https://openweathermap.org/api `APP ID` to your `.env` file
```
VUE_APP_WEATHER_API_KEY=YOUR_SECRET_KEY
```
- Run the application: `npm run serve`

### Lints and fixes files
`npm run lint`

### Testing
- All tests are inside `/tests` directory
- Run tests: `npm run test`
- Run and watch: `npm run test:watch`

### Production Build
- Create a production build `npm run build`
