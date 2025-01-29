import Hapi from '@hapi/hapi';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Hello World!';
    },
  });

  server.route({
    method: 'GET',
    path: '/search',
    handler: async (request, h) => {
      const { query } = request.query;
      if (!query) {
        return h.response({ error: 'Query parameter is required' }).code(400);
      }

      const categories = [
        'people',
        'planets',
        'films',
        'species',
        'vehicles',
        'starships',
      ];

      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(
              `https://swapi.dev/api/${category}/?search=${query}`,
            );
            return response.json();
          }),
        );

        return h.response(results).code(200);
      } catch (error) {
        console.error(error);
        return h.response({ error: 'An error occurred' }).code(500);
      }
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
