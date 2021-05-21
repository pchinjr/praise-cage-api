const arc = require('@architect/functions')

exports.handler = arc.http.async(route)

let image = `<img src=${arc.static('1.jpeg')}>`

async function route (req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
<body>
<h1>Praise Cage</h1>
${image}
${process.env.BEGIN_STATIC_ORIGIN}
</body>
</html>
`
  }
}