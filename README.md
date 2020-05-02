# negotiator

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

### Production Build
- Create a production build `npm run build`
