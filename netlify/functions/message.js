const handler = async (event) => {
    try {
      const name = event.queryStringParameters.name ?? 'World'
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: "彼女こそがこのアプリの開発のきっかけである..."
          }
        ),
      }
    } catch (error) {
      return { statusCode: 500, body: error.toString() }
    }
  }
  
  module.exports = { handler }