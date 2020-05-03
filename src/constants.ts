export default {
  title: 'Salary Negotiator',
  tabs: [
    {
      title: 'Employer',
      icon: 'mdi-account-box',
      placeholder: 'Enter maximum offer',
      hint: 'Type your maximum offer'
    },
    {
      title: 'Employee',
      icon: 'mdi-account-box-outline',
      placeholder: 'Enter minimum offer',
      hint: 'Type your minimum offer'
    }
  ],
  resultButton: 'Show Result',
  feelsLike: 'Feels like',
  windUnit: 'meter/sec',
  url:
    'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric',
  weatherError: 'Failed to fetch London weather data!',
  employerOffer: "Employer's offer",
  employeeOffer: "Employee's expectation",
  salaryRequired: 'Salary is required',
  salaryZero: 'Salary must be greater than zero',
  yourOffer: 'Your offer'
};
