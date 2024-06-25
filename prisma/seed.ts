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

    await prisma.link_Type.create({
        data: {
            name: "Téléphone"
        }
    });

    await prisma.link_Type.create({
        data: {
            name: "Site Internet"
        }
    });

    await prisma.link_Type.create({
        data: {
            name: "Facebook"
        }
    });

    await prisma.link_Type.create({
        data: {
            name: "Instagram"
        }
    });

    await prisma.link_Type.create({
        data: {
            name: "Twitter"
        }
    });

    await prisma.link_Type.create({
        data: {
            name: "Youtube"
        }
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
