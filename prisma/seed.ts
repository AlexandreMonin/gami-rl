const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    await prisma.role.create({
        data: {
            name: 'admin',
        },
    });

    await prisma.role.create({
        data: {
            name: 'player',
        },
    });

    await prisma.role.create({
        data: {
            name: 'association',
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
