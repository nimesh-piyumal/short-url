import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(request) {
  const { originalUrl } = await request.json();
  const shortened = Math.random().toString(36).substring(2, 8); // Random string for the shortened URL

  try {
    await client.connect();
    const database = client.db();
    const collection = database.collection('urls');
    
    await collection.insertOne({ originalUrl, shortened });

    return new Response(JSON.stringify({ shortened }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
