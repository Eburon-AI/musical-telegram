import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create a demo user
  const hashedPassword = await bcrypt.hash('demo123', 12)
  
  const user = await prisma.user.upsert({
    where: { email: 'demo@eburon.ai' },
    update: {},
    create: {
      email: 'demo@eburon.ai',
      name: 'Demo User',
      password: hashedPassword,
      emailVerified: new Date(),
    },
  })

  console.log('✅ Created demo user:', user.email)

  // Real Brussels/Belgium Properties
  const properties = [
    {
      title: 'Charming Villa in Uccle with Garden',
      description: 'Historical villa with period charm and stunning landscaped garden. Features original architectural details, high ceilings, and modern amenities. Located in prestigious Uccle neighborhood.',
      imageSrc: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      category: 'Villas',
      roomCount: 3,
      bathroomCount: 2,
      guestCount: 6,
      price: 450,
      country: 'Belgium',
      region: 'Brussels-Capital',
      latlng: [50.8027, 4.3450],
    },
    {
      title: 'Modern Apartment near Grand Place',
      description: 'Bright and spacious apartment in the heart of Brussels, just minutes from the iconic Grand Place. Completely renovated with top-tier finishes and unobstructed city views.',
      imageSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      category: 'Modern',
      roomCount: 2,
      bathroomCount: 2,
      guestCount: 4,
      price: 280,
      country: 'Belgium',
      region: 'Brussels City Center',
      latlng: [50.8466, 4.3528],
    },
    {
      title: 'Elegant Maison de Maître in Ixelles',
      description: '1910 townhouse facing a beautiful square near European institutions. South-facing garden, period features, fully equipped kitchen, and elevator. Perfect for families or corporate housing.',
      imageSrc: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      category: 'Luxury',
      roomCount: 6,
      bathroomCount: 3,
      guestCount: 12,
      price: 650,
      country: 'Belgium',
      region: 'Ixelles',
      latlng: [50.8340, 4.3675],
    },
    {
      title: 'Contemporary Loft in European Quarter',
      description: 'Stunning industrial-style loft near Berlaymont and Cinquantenaire. Open-plan living with exposed brick, high ceilings, and modern finishes. Terrace with south-east views.',
      imageSrc: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      category: 'Loft',
      roomCount: 2,
      bathroomCount: 1,
      guestCount: 4,
      price: 320,
      country: 'Belgium',
      region: 'European Quarter',
      latlng: [50.8414, 4.3812],
    },
    {
      title: 'Beaux-Arts Mansion near Laeken',
      description: 'Historic 1926 mansion by architect Adrien Blomme. Majestic entrance hall, 44m² reception rooms, spacious garage, and beautiful garden. Close to European School of Laeken.',
      imageSrc: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800',
      category: 'Luxury',
      roomCount: 4,
      bathroomCount: 2,
      guestCount: 8,
      price: 580,
      country: 'Belgium',
      region: 'Laeken',
      latlng: [50.8850, 4.3550],
    },
    {
      title: 'Penthouse with Views of Bois de la Cambre',
      description: 'Exceptional duplex penthouse with stunning park views. Three en-suite bedrooms, modern kitchen, and expansive terraces. Premium finishes throughout.',
      imageSrc: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800',
      category: 'Beachfront',
      roomCount: 3,
      bathroomCount: 3,
      guestCount: 6,
      price: 520,
      country: 'Belgium',
      region: 'Uccle',
      latlng: [50.8036, 4.3771],
    },
    {
      title: 'Cozy Studio in Châtelain District',
      description: 'Perfect pied-à-terre in the trendy Châtelain neighborhood. Walking distance to boutiques, cafes, and restaurants. Fully furnished and ready to move in.',
      imageSrc: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
      category: 'Tiny homes',
      roomCount: 1,
      bathroomCount: 1,
      guestCount: 2,
      price: 150,
      country: 'Belgium',
      region: 'Ixelles',
      latlng: [50.8280, 4.3620],
    },
    {
      title: 'Family Home with Pool in Watermael-Boitsfort',
      description: 'Beautiful house with heated swimming pool and extensive gardens. Five bedrooms, modern kitchen, and excellent transportation links. Ideal for families.',
      imageSrc: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      category: 'Amazing pools',
      roomCount: 5,
      bathroomCount: 3,
      guestCount: 10,
      price: 480,
      country: 'Belgium',
      region: 'Watermael-Boitsfort',
      latlng: [50.7968, 4.4139],
    },
    {
      title: 'Luxury Duplex near Halles Saint Géry',
      description: 'Elegantly renovated duplex just 50m from Grand Place in UNESCO-classified building. Renovated in traditional Brussels style with all modern comforts. Located in the vibrant Halles Saint Géry area.',
      imageSrc: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      category: 'Luxury',
      roomCount: 3,
      bathroomCount: 2,
      guestCount: 6,
      price: 495,
      country: 'Belgium',
      region: 'Brussels City Center',
      latlng: [50.8503, 4.3488],
    },
    {
      title: 'Art Deco Loft in Saint-Gilles',
      description: 'Beautiful 105 sqm modern loft in historical art deco building. High ceilings, original features preserved. Located in lively Saint-Gilles neighborhood with restaurants and nightlife.',
      imageSrc: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800',
      category: 'Design',
      roomCount: 2,
      bathroomCount: 2,
      guestCount: 4,
      price: 310,
      country: 'Belgium',
      region: 'Saint-Gilles',
      latlng: [50.8267, 4.3439],
    },
    {
      title: 'Spacious Terrace Apartment in Ixelles',
      description: 'Bright four-room apartment with full sunny terrace in vibrant Ixelles. Surrounded by cafés, shops, and weekly markets. Perfect for longer stays in authentic Brussels neighborhood.',
      imageSrc: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800',
      category: 'Trending',
      roomCount: 4,
      bathroomCount: 2,
      guestCount: 8,
      price: 380,
      country: 'Belgium',
      region: 'Ixelles',
      latlng: [50.8250, 4.3725],
    },
    {
      title: 'Designer Studio in European District',
      description: 'Professionally decorated one-bedroom in renovated luxury building. Walking distance to EU institutions and Cinquantenaire Park. High-end finishes and rooftop terrace access.',
      imageSrc: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
      category: 'Modern',
      roomCount: 1,
      bathroomCount: 1,
      guestCount: 2,
      price: 220,
      country: 'Belgium',
      region: 'European Quarter',
      latlng: [50.8400, 4.3900],
    },
    {
      title: 'Townhouse with Garden in Etterbeek',
      description: 'Traditional Brussels townhouse fully modernized while preserving original charm. Private garden, perfect for families. Close to European School and metro stations.',
      imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      category: 'Countryside',
      roomCount: 5,
      bathroomCount: 3,
      guestCount: 10,
      price: 550,
      country: 'Belgium',
      region: 'Etterbeek',
      latlng: [50.8333, 4.3833],
    },
  ]

  console.log('🏠 Creating property listings...')

  for (const property of properties) {
    const listing = await prisma.listing.create({
      data: {
        ...property,
        userId: user.id,
      },
    })
    console.log(`✅ Created: ${listing.title}`)
  }

  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
