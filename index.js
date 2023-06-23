const fastify = require('fastify')({ logger: true });
const crypto = require('crypto');
require('dotenv').config()

  function constructAndSortParam(reqParams) {
    const sortedParams = {};
    const sortedKeys = Object.keys(reqParams).sort();
  
    for (const key of sortedKeys) {
      sortedParams[key] = reqParams[key];
    }
  
    const queryString = new URLSearchParams(sortedParams).toString();
    return queryString;
  }

  function token (httpMethod,protocol,requestURI,parameters) {
    try {
        const combinedString = `${httpMethod}&${protocol}://singapore.greehill.services/api/rtms-server/v1${requestURI}?${parameters}`;
        const signingKey = Buffer.from(process.env.SECRET_KEY, 'utf8');
        const hmac = crypto.createHmac('sha256', signingKey);
        hmac.update(combinedString);
        const authString = hmac.digest('base64');
        return {
            stringForToken: combinedString,
            token: authString
        }
    } catch (error) {
        return error
    }
  } 

  const schema = {
    description: 'Returns the requested group.',
    tags: ['api'],
    summary: 'get group by id',
    security: [{ apiKey: [] }],
    params: {
      accountid: {
        type: 'string',
        description: 'Acount ID'
      },
      nonce: {
        type: 'number',
        description: 'Nonce'
      },
      ts: {
        type: 'number',
        description: 'Time Stamp in milliseconds'
      }
    }
}

fastify.route({
    method: 'POST',
    url: '/groups/info',
    schema: schema,
    handler: async function (request, reply) {

        const httpMethod = request.method.toUpperCase();
        const requestURI = request.context.config.url.toLowerCase();
        
        const accid = (request.query.accountid) ? request.query.accountid : undefined
        const nonce = (request.query.nonce) ? request.query.nonce : undefined
        const ts = (request.query.ts) ? request.query.ts : undefined
        const protocol = request.protocol.toLowerCase();

        if (!!accid & !!nonce & !!ts) {
            const params = constructAndSortParam({accountid: accid, nonce: nonce, ts: ts})
            await reply.send(token(httpMethod,protocol,requestURI,params))
        } else {
            return new Error('something is wrong')
        }
    }
})

fastify.route({
    method: 'POST',
    url: '/groups/findbycriteria',
    schema: schema,
    handler: async function (request, reply) {
        const httpMethod = request.method.toUpperCase();
        const requestURI = request.context.config.url.toLowerCase();
        
        const accid = (request.query.accountid) ? request.query.accountid : undefined
        const nonce = (request.query.nonce) ? request.query.nonce : undefined
        const ts = (request.query.ts) ? request.query.ts : undefined
        const protocol = request.protocol.toLowerCase();

        if (!!accid & !!nonce & !!ts) {
            const params = constructAndSortParam({accountid: accid, nonce: nonce, ts: ts})
            await reply.send(token(httpMethod,protocol,requestURI,params))
        } else {
            return new Error('something is wrong')
        }
    }
})
  
fastify.route({
    method: 'POST',
    url: '/groups/update',
    schema: schema,
    handler: async function (request, reply) {
        const accid = (request.query.accountid) ? request.query.accountid : undefined
        const nonce = (request.query.nonce) ? request.query.nonce : undefined
        const ts = (request.query.ts) ? request.query.ts : undefined
        
        const kk = !!nonce
        const ll = !!accid
        const mm = !!ts

        if (!!accid & !!nonce & !!ts) {
            await reply.send('att')
        } else {
            return new Error('something is wrong')
        }
    }
})

fastify.route({
    method: 'POST',
    url: '/groups/remove',
    schema: schema,
    handler: async function (request, reply) {
        const httpMethod = request.method.toUpperCase();
        const requestURI = request.context.config.url.toLowerCase();
        
        const accid = (request.query.accountid) ? request.query.accountid : undefined
        const nonce = (request.query.nonce) ? request.query.nonce : undefined
        const ts = (request.query.ts) ? request.query.ts : undefined
        const protocol = request.protocol.toLowerCase();

        if (!!accid & !!nonce & !!ts) {
            const params = constructAndSortParam({accountid: accid, nonce: nonce, ts: ts})
            await reply.send(token(httpMethod,protocol,requestURI,params))
        } else {
            return new Error('something is wrong')
        }
    }
})

fastify.route({
    method: 'POST',
    url: '/users/info',
    schema: schema,
    handler: async function (request, reply) {
        const httpMethod = request.method.toUpperCase();
        const requestURI = request.context.config.url.toLowerCase();
        
        const accid = (request.query.accountid) ? request.query.accountid : undefined
        const nonce = (request.query.nonce) ? request.query.nonce : undefined
        const ts = (request.query.ts) ? request.query.ts : undefined
        const protocol = request.protocol.toLowerCase();

        if (!!accid & !!nonce & !!ts) {
            const params = constructAndSortParam({accountid: accid, nonce: nonce, ts: ts})
            await reply.send(token(httpMethod,protocol,requestURI,params))
        } else {
            return new Error('something is wrong')
        }
    }
})

fastify.route({
    method: 'POST',
    url: '/users/findbycriteria',
    schema: schema,
    handler: async function (request, reply) {
        const httpMethod = request.method.toUpperCase();
        const requestURI = request.context.config.url.toLowerCase();
        
        const accid = (request.query.accountid) ? request.query.accountid : undefined
        const nonce = (request.query.nonce) ? request.query.nonce : undefined
        const ts = (request.query.ts) ? request.query.ts : undefined
        const protocol = request.protocol.toLowerCase();

        if (!!accid & !!nonce & !!ts) {
            const params = constructAndSortParam({accountid: accid, nonce: nonce, ts: ts})
            await reply.send(token(httpMethod,protocol,requestURI,params))
        } else {
            return new Error('something is wrong')
        }
    }
})

fastify.route({
    method: 'POST',
    url: '/users/update',
    schema: schema,
    handler: async function (request, reply) {
        const httpMethod = request.method.toUpperCase();
        const requestURI = request.context.config.url.toLowerCase();
        
        const accid = (request.query.accountid) ? request.query.accountid : undefined
        const nonce = (request.query.nonce) ? request.query.nonce : undefined
        const ts = (request.query.ts) ? request.query.ts : undefined
        const protocol = request.protocol.toLowerCase();

        if (!!accid & !!nonce & !!ts) {
            const params = constructAndSortParam({accountid: accid, nonce: nonce, ts: ts})
            await reply.send(token(httpMethod,protocol,requestURI,params))
        } else {
            return new Error('something is wrong')
        }
    }
})

fastify.route({
    method: 'POST',
    url: '/users/remove',
    schema: schema,
    handler: async function (request, reply) {
        const httpMethod = request.method.toUpperCase();
        const requestURI = request.context.config.url.toLowerCase();
        
        const accid = (request.query.accountid) ? request.query.accountid : undefined
        const nonce = (request.query.nonce) ? request.query.nonce : undefined
        const ts = (request.query.ts) ? request.query.ts : undefined
        const protocol = request.protocol.toLowerCase();

        if (!!accid & !!nonce & !!ts) {
            const params = constructAndSortParam({accountid: accid, nonce: nonce, ts: ts})
            await reply.send(token(httpMethod,protocol,requestURI,params))
        } else {
            return new Error('something is wrong')
        }
    }
})

  // Start the server
  fastify.listen(1234);
  