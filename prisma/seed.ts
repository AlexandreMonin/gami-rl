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
            name: "phone-number"
        }
    });

    await prisma.link_Type.create({
        data: {
            name: "website"
        }
    });

    await prisma.link_Type.create({
        data: {
            name: "facebook"
        }
    });

    await prisma.link_Type.create({
        data: {
            name: "instagram"
        }
    });

    await prisma.link_Type.create({
        data: {
            name: "twitter"
        }
    });

    await prisma.link_Type.create({
        data: {
            name: "youtube"
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
