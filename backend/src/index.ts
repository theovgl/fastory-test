import Hapi from '@hapi/hapi';
import { SWAPIResponse } from './types/response';

const init = async () => {
  const server = Hapi.server({
    port: 3001,
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

            const data = (await response.json()) as Partial<SWAPIResponse>;

            data.category = category;

            return data;
          }),
        );

        return h.response(results).code(200);
      } catch (error) {
        console.error(error);
        return h.response({ error: 'An error occurred' }).code(500);
      }
    },
  });

  server.route({
    method: 'GET',
    path: '/{category}/{id}',
    handler: async (request, h) => {
      const { category, id } = request.params;

      try {
        const response = await fetch(
          `https://swapi.dev/api/${category}/${id}/`,
        );

        return await response.json();
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
