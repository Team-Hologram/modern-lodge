export interface Lodge {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  amenities: string[];
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  featured: boolean;
  category: "luxury" | "family" | "romantic" | "adventure";
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Booking {
  id: string;
  lodgeId: string;
  guestName: string;
  guestEmail: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled";
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  difficulty: "easy" | "moderate" | "challenging";
  price: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  lodgeName: string;
}