const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
	const newEntry = await prisma.bookings.create({
		data: {
			name: 'Sebastian Fritsch',
			email: 'sfritsch09@gmail.com',
			price: 20,
		},
	});
	console.log('Created new entry: ', newEntry);

	const allEntries = await prisma.bookins.findMany();
	console.log('All entries: ');
	console.dir(allEntries, { depth: null });
}

main()
	.catch((e) => console.error(e))
	.finally(async () => await prisma.$disconnect());
