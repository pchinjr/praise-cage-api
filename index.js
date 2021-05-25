const arc = require('@architect/functions')

exports.handler = arc.http.async(route)

async function route(req) {
  return {
    statusCode: 200,
    json:
      { image: `${process.env.BEGIN_STATIC_ORIGIN}/1.jpeg` }


  }
}