const products = [
  {
    id: 1,
    name: 'Urban Explorer Tee',
    category: 'men',
    newPrice: 19.99,
    oldPrice: 29.99,
    image: 'https://images.pexels.com/photos/27045945/pexels-photo-27045945/free-photo-of-muscular-man-wearing-tank-top-sitting-on-staircase-railing-outdoors.png?auto=compress&cs=tinysrgb&w=600',
    reviews: 150,
    description: 'A versatile tee designed for the modern urban adventurer. Crafted from breathable fabric for all-day comfort and durability.'
  },
  {
    id: 2,
    name: 'Classic Blue Denim',
    category: 'men',
    newPrice: 49.99,
    oldPrice: 59.99,
    image: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 200,
    description: 'Timeless blue denim jeans with a perfect fit for everyday wear. Features sturdy stitching and a classic design that pairs well with any top.'
  },
  {
    id: 3,
    name: 'Retro Leather Jacket',
    category: 'men',
    newPrice: 79.99,
    oldPrice: 99.99,
    image: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 120,
    description: 'A retro-inspired leather jacket that combines style and durability. Made from premium leather to ensure a sophisticated and lasting look.'
  },
  {
    id: 4,
    name: 'Adventure Cargo Shorts',
    category: 'men',
    newPrice: 24.99,
    oldPrice: 34.99,
    image: 'https://images.pexels.com/photos/2701585/pexels-photo-2701585.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 80,
    description: 'Ideal for outdoor activities, these cargo shorts come with multiple pockets and a relaxed fit. Made from durable fabric for long-lasting comfort.'
  },
  {
    id: 5,
    name: 'Cozy Fleece Hoodie',
    category: 'men',
    newPrice: 39.99,
    oldPrice: 49.99,
    image: 'https://images.pexels.com/photos/6311687/pexels-photo-6311687.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 170,
    description: 'A snug fleece hoodie perfect for chilly weather. Designed with a soft interior for maximum warmth and comfort during your casual outings.'
  },
  {
    id: 6,
    name: 'Refined Tailored Suit',
    category: 'men',
    newPrice: 199.99,
    oldPrice: 249.99,
    image: 'https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 60,
    description: 'An exquisite tailored suit ideal for formal occasions. Crafted with precision to offer a sharp and polished look, along with exceptional comfort.'
  },
  {
    id: 7,
    name: 'Sleek Baseball Cap',
    category: 'men',
    newPrice: 14.99,
    oldPrice: 19.99,
    image: 'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 90,
    description: 'A sleek and stylish baseball cap to complete your casual look. Made from high-quality materials with adjustable sizing for a perfect fit.'
  },
  {
    id: 8,
    name: 'Dynamic Sports Sneakers',
    category: 'men',
    newPrice: 89.99,
    oldPrice: 119.99,
    image: 'https://images.pexels.com/photos/8350403/pexels-photo-8350403.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 200,
    description: 'High-performance sneakers designed for active individuals. Features advanced cushioning and support for optimal comfort during workouts and daily activities.'
  },
  {
    id: 82,
    name: 'Sophisticated Trousers',
    category: 'men',
    newPrice: 89.99,
    oldPrice: 119.99,
    image: 'https://images.pexels.com/photos/13912032/pexels-photo-13912032.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 110,
    description: 'Elegant trousers that provide a polished look for any occasion. Made with premium fabric for comfort and durability, suitable for both business and casual wear.'
  },
  {
    id: 9,
    name: 'Charming Floral Dress',
    category: 'women',
    newPrice: 39.99,
    oldPrice: 49.99,
    image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 130,
    description: 'A charming floral dress perfect for summer outings. Crafted from lightweight material with a flattering cut for a feminine and elegant look.'
  },
  {
    id: 10,
    name: 'Elegant Women\'s Blouse',
    category: 'women',
    newPrice: 24.99,
    oldPrice: 34.99,
    image: 'https://images.pexels.com/photos/27176718/pexels-photo-27176718/free-photo-of-woman-sitting-with-cat-and-tablet-on-bed.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 50,
    description: 'A versatile blouse that combines style with comfort. Perfect for office wear or casual outings, featuring a classic design and soft fabric.'
  },
  {
    id: 11,
    name: 'Chic A-Line Skirt',
    category: 'women',
    newPrice: 29.99,
    oldPrice: 39.99,
    image: 'https://images.pexels.com/photos/26989568/pexels-photo-26989568/free-photo-of-woman-in-miniskirt-posing-with-ball.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 70,
    description: 'A chic A-line skirt that enhances your silhouette. Made with comfortable fabric and a stylish cut, perfect for various occasions.'
  },
  {
    id: 12,
    name: 'Stylish Women\'s Jacket',
    category: 'women',
    newPrice: 79.99,
    oldPrice: 99.99,
    image: 'https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 85,
    description: 'A fashionable jacket for a trendy look. Designed with quality materials to keep you warm and stylish throughout the seasons.'
  },
  {
    id: 13,
    name: 'Classy Women\'s Pants',
    category: 'women',
    newPrice: 49.99,
    oldPrice: 59.99,
    image: 'https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 60,
    description: 'Elegant pants that offer a sophisticated look. Perfect for work or social events, made with high-quality fabric for a comfortable fit.'
  },
  {
    id: 14,
    name: 'Soft Knit Scarf',
    category: 'women',
    newPrice: 19.99,
    oldPrice: 24.99,
    image: 'https://images.pexels.com/photos/3781538/pexels-photo-3781538.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 45,
    description: 'A soft knit scarf designed to keep you warm and cozy. Made from gentle fabric with a stylish design, perfect for any winter outfit.'
  },
  {
    id: 15,
    name: 'Chic Women\'s Handbag',
    category: 'women',
    newPrice: 99.99,
    oldPrice: 129.99,
    image: 'https://images.pexels.com/photos/10669652/pexels-photo-10669652.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 95,
    description: 'A chic handbag that adds a touch of elegance to any outfit. Features ample space and a stylish design, perfect for everyday use.'
  },
  {
    id: 16,
    name: 'Fashionable Women\'s Boots',
    category: 'women',
    newPrice: 119.99,
    oldPrice: 149.99,
    image: 'https://images.pexels.com/photos/4866042/pexels-photo-4866042.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 100,
    description: 'Fashionable boots that combine style and functionality. Crafted with premium materials for durability and a comfortable fit.'
  },
  {
    id: 162,
    name: 'Daily Women\'s Regular Fit',
    category: 'women',
    newPrice: 119.99,
    oldPrice: 149.99,
    image: 'https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 50,
    description: 'Regular fit for everyday wear. Designed with comfort and style in mind, suitable for both casual and professional settings.'
  },
  {
    id: 17,
    name: 'Playful Kids T-Shirt',
    category: 'kids',
    newPrice: 14.99,
    oldPrice: 19.99,
    image: 'https://images.pexels.com/photos/783941/pexels-photo-783941.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 85,
    description: 'A fun and colorful T-shirt designed for active kids. Made from soft cotton for all-day comfort and easy care, perfect for everyday adventures.'
  },
  {
    id: 18,
    name: 'Durable Kids Jeans',
    category: 'kids',
    newPrice: 29.99,
    oldPrice: 39.99,
    image: 'https://images.pexels.com/photos/1139613/pexels-photo-1139613.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 90,
    description: 'Sturdy jeans that can keep up with your child’s energetic lifestyle. Featuring reinforced stitching and a classic fit for versatile wear.'
  },
  {
    id: 19,
    name: 'Cozy Kids Jacket',
    category: 'kids',
    newPrice: 49.99,
    oldPrice: 59.99,
    image: 'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 75,
    description: 'A warm and stylish jacket that provides excellent protection from the elements. Made with soft, insulating material for maximum comfort.'
  },
  {
    id: 20,
    name: 'Sunny Kids Shorts',
    category: 'kids',
    newPrice: 19.99,
    oldPrice: 24.99,
    image: 'https://images.pexels.com/photos/573259/pexels-photo-573259.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 65,
    description: 'Perfect for summer days, these shorts are lightweight and breathable. Designed with an adjustable waistband for a comfortable fit.'
  },
  {
    id: 21,
    name: 'Warm Kids Hoodie',
    category: 'kids',
    newPrice: 29.99,
    oldPrice: 39.99,
    image: 'https://images.pexels.com/photos/1196338/pexels-photo-1196338.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 100,
    description: 'A cozy hoodie that provides warmth and style. Made from plush fleece, it’s perfect for layering during cooler weather and casual outings.'
  },
  {
    id: 22,
    name: 'Charming Kids Dress',
    category: 'kids',
    newPrice: 34.99,
    oldPrice: 44.99,
    image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 80,
    description: 'A delightful dress that combines fun patterns with a comfortable fit. Ideal for both playtime and special occasions, made with easy-care fabric.'
  },
  {
    id: 23,
    name: 'Active Kids Sneakers',
    category: 'kids',
    newPrice: 39.99,
    oldPrice: 49.99,
    image: 'https://images.pexels.com/photos/3457273/pexels-photo-3457273.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 95,
    description: 'Sporty sneakers designed for active kids. Equipped with cushioned soles and durable materials to withstand all their energetic activities.'
  },
  {
    id: 24,
    name: 'Trendy Kids Cap',
    category: 'kids',
    newPrice: 9.99,
    oldPrice: 14.99,
    image: 'https://images.pexels.com/photos/1549974/pexels-photo-1549974.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 55,
    description: 'A stylish cap to complete any outfit. Features a comfortable fit and adjustable strap, made with lightweight fabric for sunny days.'
  },
  {
    id: 25,
    name: 'Classic Kids Regular Fit',
    category: 'kids',
    newPrice: 9.99,
    oldPrice: 14.99,
    image: 'https://images.pexels.com/photos/220455/pexels-photo-220455.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: 65,
    description: 'Essential regular fit that pairs well with any wardrobe. Made from soft, durable material, perfect for everyday wear and easy maintenance.'
  },

];

export default products;