import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function GET(req, context) {
  // Await the params before destructuring
  const params = await context.params;
  const { shortened } = params; // Now you can safely destructure the 'shortened' property

  try {
    await client.connect();
    const database = client.db();
    const collection = database.collection('urls');

    const url = await collection.findOne({ shortened });

    if (url) {
      return new Response(null, {
        status: 301,
        headers: {
          Location: url.originalUrl, // Redirect to the original URL
        },
      });
    } else {
      return new Response(JSON.stringify({ error: 'URL not found' }), {
        status: 404,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
