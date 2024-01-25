import { MongoClient } from 'mongodb';

const uri: string | undefined = process.env.MONGODB_URI;
if (!uri) throw new Error('Add Mongo URI to .env.local');

const options: any = {}; // You may want to define a more specific type for options

let clientPromise: Promise<MongoClient> | undefined;

declare const global: {
  _mongoClientPromise?: Promise<MongoClient>;
};

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect() as Promise<MongoClient>;
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri, options);
  clientPromise = client.connect() as Promise<MongoClient>;
}

export default clientPromise;