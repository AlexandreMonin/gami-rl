const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkAndCreateRole(roleName:string) {
    const existingRole = await prisma.role.findUnique({
        where: {
            name: roleName,
        },
    });
    if (existingRole) {
        console.log(`Role '${roleName}' already exists`);
    } else {
        const newRole = await prisma.role.create({
            data: {
                name: roleName,
            },
        });
        console.log(`Role '${newRole.name}' created successfully`);
    }
}

async function checkAndCreateLinkType(linkTypeName:string) {
    const existingLinkType = await prisma.link_Type.findFirst({
        where: {
            name: linkTypeName,
        },
    });
    if (existingLinkType) {
        console.log(`Link Type '${linkTypeName}' already exists`);
    } else {
        const newLinkType = await prisma.link_Type.create({
            data: {
                name: linkTypeName,
            },
        });
        console.log(`Link Type '${newLinkType.name}' created successfully`);
    }
}

async function main() {
    try {
        // Define roles and link types
        const roles = ['admin', 'player', 'association'];
        const linkTypes = [
            "Téléphone",
            "Site Internet",
            "Facebook",
            "Instagram",
            "Twitter",
            "Youtube",
        ];

        // Check and create roles
        for (let roleName of roles) {
            await checkAndCreateRole(roleName);
        }

        // Check and create link types
        for (let linkTypeName of linkTypes) {
            await checkAndCreateLinkType(linkTypeName);
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch((error) => {
        console.error('Error in main function:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
