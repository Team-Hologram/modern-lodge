import { Lodge, Experience, Testimonial } from "@/types";

export const lodges: Lodge[] = [
  {
    id: "1",
    name: "Mountain Peak Retreat",
    description:
      "Nestled high in the mountains, this luxury lodge offers breathtaking panoramic views and ultimate privacy. Perfect for those seeking tranquility and natural beauty.",
    shortDescription: "Luxury mountain retreat with stunning views",
    location: "Rocky Mountains, Colorado",
    price: 450,
    rating: 4.9,
    reviews: 127,
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    ],
    amenities: [
      "Hot Tub",
      "Fireplace",
      "Mountain View",
      "Hiking Trails",
      "WiFi",
      "Kitchen",
    ],
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    featured: true,
    category: "luxury",
    coordinates: { lat: 39.7392, lng: -104.9903 },
  },
  {
    id: "2",
    name: "Lakeside Haven",
    description:
      "A serene lakeside escape offering water activities and peaceful surroundings. Watch the sunset from your private dock.",
    shortDescription: "Peaceful lakeside cabin with private dock",
    location: "Lake Tahoe, California",
    price: 380,
    rating: 4.8,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800",
    ],
    amenities: [
      "Private Dock",
      "Kayaks",
      "Fire Pit",
      "BBQ Grill",
      "Lake View",
      "WiFi",
    ],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    featured: true,
    category: "romantic",
    coordinates: { lat: 39.0968, lng: -120.0324 },
  },
  {
    id: "3",
    name: "Forest Sanctuary",
    description:
      "Surrounded by ancient forests, this eco-friendly lodge provides the perfect base for nature lovers and adventure seekers.",
    shortDescription: "Eco-friendly forest lodge for nature lovers",
    location: "Olympic National Park, Washington",
    price: 320,
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
    ],
    amenities: [
      "Hiking Access",
      "Wildlife Viewing",
      "Solar Power",
      "Fireplace",
      "Kitchen",
      "Pet Friendly",
    ],
    capacity: 8,
    bedrooms: 4,
    bathrooms: 3,
    featured: false,
    category: "family",
    coordinates: { lat: 47.8021, lng: -123.6044 },
  },
  {
    id: "4",
    name: "Alpine Chalet",
    description:
      "Traditional alpine architecture meets modern luxury. Ski-in, ski-out access in winter, hiking paradise in summer.",
    shortDescription: "Ski-in/ski-out alpine luxury",
    location: "Aspen, Colorado",
    price: 650,
    rating: 5.0,
    reviews: 94,
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800",
    ],
    amenities: [
      "Ski Access",
      "Hot Tub",
      "Sauna",
      "Mountain View",
      "Fireplace",
      "Gourmet Kitchen",
    ],
    capacity: 10,
    bedrooms: 5,
    bathrooms: 4,
    featured: true,
    category: "luxury",
    coordinates: { lat: 39.1911, lng: -106.8175 },
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Guided Mountain Hiking",
    description:
      "Explore pristine mountain trails with experienced guides. Discover hidden waterfalls and wildlife.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
    duration: "4-6 hours",
    difficulty: "moderate",
    price: 120,
  },
  {
    id: "2",
    title: "Sunset Kayaking",
    description:
      "Paddle across calm waters as the sun sets behind the mountains. Perfect for all skill levels.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    duration: "2-3 hours",
    difficulty: "easy",
    price: 75,
  },
  {
    id: "3",
    title: "Rock Climbing Adventure",
    description:
      "Challenge yourself on natural rock formations with certified instructors and premium equipment.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800",
    duration: "Full day",
    difficulty: "challenging",
    price: 200,
  },
  {
    id: "4",
    title: "Wildlife Photography Tour",
    description:
      "Capture stunning wildlife moments with professional photography guidance in their natural habitat.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
    duration: "3-4 hours",
    difficulty: "easy",
    price: 95,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    comment:
      "Absolutely breathtaking experience! The lodge exceeded all expectations. The views, amenities, and service were impeccable.",
    date: "2024-01-15",
    lodgeName: "Mountain Peak Retreat",
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    comment:
      "Perfect getaway for our family. The kids loved exploring nature, and we loved the peace and quiet. Will definitely return!",
    date: "2024-01-10",
    lodgeName: "Forest Sanctuary",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    comment:
      "Romantic and serene. The sunset views from the dock were magical. Great for couples looking to reconnect with nature.",
    date: "2024-01-05",
    lodgeName: "Lakeside Haven",
  },
];