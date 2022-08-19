// helper function to parse elasticsearch response
const { client } = require('../../esClient');

const parseElasticResponse = (elasticResponse) => {
  const responseHits = elasticResponse.hits.hits;
  const result = responseHits.map((hit) => hit._source);
  return result;
};

async function getUsers(req, res) {
  try {
    const { text = '' } = req.query;
    const response = await client.search(
      {
        index: 'users',
        from: 0,
        body: {
          query: {
            multi_match: {
              query: text,
              fields: ['username', 'message'],
              type: 'phrase_prefix',
            },
          },
        },
      },
      {
        ignore: [404],
        maxRetries: 3,
      }
    );
    console.log(response);
    return res.send({
      data: parseElasticResponse(response),
    });
  } catch (error) {
    console.log(error);
    return res.send({
      error: 'Something went wrong',
    });
  }
}

module.exports = {
  getUsers,
};
