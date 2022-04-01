let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://coderwhy/org/prod'
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:4000/'
} else {
  BASE_URL = 'https://coderwhy/org/test'
}

export { BASE_URL, TIME_OUT }
