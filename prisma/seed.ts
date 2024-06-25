const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

interface Game {
    name: string;
    api_id: number;
    image_url: string;
}

interface Platform {
    name: string;
    api_id: number;
    image_url: string;
}

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

async function checkAndCreateGame(game: Game) {
    const existingGame = await prisma.game_Tag.findUnique({
        where: { api_id: game.api_id },
    });
    if (existingGame) {
        console.log(`Game '${game.name}' already exists`);
    } else {
        const newGame = await prisma.game_Tag.create({
            data: game,
        });
        console.log(`Game '${newGame.name}' created successfully`);
    }
}

async function checkAndCreatePlatform(platform: Platform): Promise<void> {
    const existingPlatform = await prisma.platform_Tag.findUnique({
        where: { api_id: platform.api_id },
    });
    if (existingPlatform) {
        console.log(`Platform '${platform.name}' already exists`);
    } else {
        const newPlatform = await prisma.platform_Tag.create({
            data: platform,
        });
        console.log(`Platform '${newPlatform.name}' created successfully`);
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
        const games: Game[] = [
            { name: 'Road Doom', api_id: 108308, image_url: 'https://images.igdb.com/igdb/image/upload/t_thumb/co1ma0.jpg' },
            { name: 'The Lost Valley', api_id: 35429, image_url: 'https://images.igdb.com/igdb/image/upload/t_thumb/hguwdwyrob7smtfiv9so.jpg' },
            { name: 'Hidden Secrets: The Nightmare', api_id: 209901, image_url: 'https://images.igdb.com/igdb/image/upload/t_thumb/co4zmz.jpg' },
            { name: 'Space station - build your own ISS', api_id: 104748, image_url: '' },
            { name: 'Bubble Whirl Shooter', api_id: 89616, image_url: 'https://images.igdb.com/igdb/image/upload/t_thumb/co448a.jpg' },
            { name: 'Railroad Tycoon 2: Platinum Edition', api_id: 124961, image_url: '' },
            { name: 'Zhed', api_id: 122801, image_url: 'https://images.igdb.com/igdb/image/upload/t_thumb/co229d.jpg' },
        ];

        const platforms: Platform[] = [
            { name: 'PC (Microsoft Windows)', api_id: 6, image_url: 'https://www.kindpng.com/imgv/JxmmiT_pc-logo-png-transparent-png/' },
            { name: 'PlayStation 4', api_id: 48, image_url: 'https://www.kindpng.com/imgv/ThhxJR_playstation-icons-computer-axe-logo-free-download-png/' },
            { name: 'Nintendo Switch', api_id: 130, image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Nintendo_switch_logo.png' },
        ];

        // Check and create roles
        for (let roleName of roles) {
            await checkAndCreateRole(roleName);
        }
        // Check and create link types
        for (let linkTypeName of linkTypes) {
            await checkAndCreateLinkType(linkTypeName);
        }

        // Check and create games
        for (let game of games) {
            await checkAndCreateGame(game);
        }

        // Check and create platforms
        for (let platform of platforms) {
            await checkAndCreatePlatform(platform);
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
