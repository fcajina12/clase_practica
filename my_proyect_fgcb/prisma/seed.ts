import { PrismaClient } from '../generated/prisma/client';
import * as bcrypt from 'bcryptjs';
const main = async () => {
  const client = new PrismaClient();
  console.log('Seeding...');
  await client.user.create({
    data: {
      email: 'prueba@email.com',
      name: 'Sam',
      password: bcrypt.hashSync('123456', 10),
      telephone: '123456789',
    },
  });
};
main();
