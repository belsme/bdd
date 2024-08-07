// hello-prisma/insert-user.js

const { prismaClient } = require('@prisma/client')

const prisma = new prismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'Hello, Prisma!'
        }
    });
}

main();