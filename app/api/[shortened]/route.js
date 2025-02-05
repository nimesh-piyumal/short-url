import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function GET(request, { params }) {
  const { shortened } = params;

  try {
    await client.connect();
    const database = client.db();
    const collection = database.collection('urls');

    const url = await collection.findOne({ shortened });

    if (url) {
      return new Response(null, {
        status: 301,
        headers: {
          Location: url.originalUrl,
        },
      });
    } else {
      return new Response(JSON.stringify({ error: 'URL not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    await client.close();
  }
}