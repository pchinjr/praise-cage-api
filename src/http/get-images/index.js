const arc = require('@architect/functions')

exports.handler = arc.http.async(route)

let image = arc.static('1.jpeg')
console.log(process.env.ARC_STATIC_BUCKET)
async function route (req) {
  return {
    statusCode: 200,
    json: { data: { image } }
  }
}