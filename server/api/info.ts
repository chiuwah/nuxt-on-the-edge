export default defineEventHandler(event => {
  const countryHeader = getHeader(event, 'x-vercel-ip-country')
  const cityHeader = getHeader(event, 'x-vercel-ip-city')
  const city = cityHeader ? decodeURIComponent(cityHeader) : '-'
  const country = countryHeader ? decodeURIComponent(countryHeader) : '-'
  const ipHeader = getHeader(event, 'x-forwarded-for')
  const ip = ipHeader ? ipHeader.split(',')[0] : '-'

  return {
    city,
    ip,
    country
  }
})
