xport interface Product {
    id: string
    name: string
    price: number
    priceRange?: string
    coverage: string
    useCase: string
    description: string
    rewards?: string
    lifespan?: string
    featured?: boolean
export interface Product {
    id: string
    name: string
    price: number
    priceRange?: string
    coverage: string
    useCase: string
    description: string
    rewards?: string
    lifespan?: string
    featured?: boolean
    available?: boolean
}
  
  export const products: Product[] = [
  {
      id: 'spark',
            name: 'Spark AirNode',
            price: 59,
            priceRange: '$55-66',
            coverage: '150m radius',
            useCase: 'Homes & small businesses',
            description: 'The entry-level AirNode perfect for residential deployment. Earn passive income by providing wireless coverage in your area.',
            rewards: '~$1.70/month fixed rewards',
            lifespan: '14-year projected lifespan',
            featured: true,
        },
      {
            id: 'portal-180',
            name: 'Portal 180',
            price: 10000,
            priceRange: '$10,000+',
            coverage: 'Extended range',
            useCase: 'Neighborhoods & communities',
            description: 'Extended range AirNode for covering larger residential areas and small communities.',
            available: false,
      },
      {
            id: 'portal-360',
            name: 'Portal 360',
            price: 20000,
            priceRange: '$20,000+',
            coverage: 'Wide area coverage',
            useCase: 'Large areas & campuses',
            description: 'High-capacity AirNode for wide area coverage, ideal for campuses and large commercial areas.',
            available: false,
      },
      {
            id: 'apex-90',
            name: 'Apex 90',
            price: 50000,
            priceRange: '$50,000+',
            coverage: 'Up to 250 Links',
            useCase: 'High-density urban areas',
            description: 'High-density deployment solution supporting up to 250 simultaneous Link connections.',
      },
      {
            id: 'apex-180',
            name: 'Apex 180',
            price: 80000,
            priceRange: '$80,000+',
            coverage: 'Up to 500 Links',
            useCase: 'Very high density deployments',
            description: 'Maximum capacity AirNode for very high density urban environments and events.',
      },
      {
            id: 'titan',
            name: 'Titan',
            price: 101500,
            priceRange: '$101,500',
            coverage: 'Long-range backbone',
            useCase: 'Enterprise & backbone infrastructure',
            description: 'The flagship enterprise-grade backbone node for large-scale network infrastructure deployment.',
            featured: true,
      },
        ]
        
        export function getProduct(id: string): Product | undefined {
            return products.find(p => p.id === id)
        }available?: boolean
}

export const products: Product[] = [
  {
        id: 'spark',
        name: 'Spark AirNode',
        price: 59,
        priceRange: '$55-66',
        coverage: '150m radius',
        useCase: 'Homes & small businesses',
        description: 'The entry-level AirNode perfect for residential deployment. Earn passive income by providing wireless coverage in your area.',
        rewards: '~$1.70/month fixed rewards',
        lifespan: '14-year projected lifespan',
        featured: true,
  },
  {
        id: 'portal-180',
        name: 'Portal 180',
        price: 10000,
        priceRange: '$10,000+',
        coverage: 'Extended range',
        useCase: 'Neighborhoods & communities',
        description: 'Extended range AirNode for covering larger residential areas and small communities.',
        available: false,
  },
  {
        id: 'portal-360',
        name: 'Portal 360',
        price: 20000,
        priceRange: '$20,000+',
        coverage: 'Wide area coverage',
        useCase: 'Large areas & campuses',
        description: 'High-capacity AirNode for wide area coverage, ideal for campuses and large commercial areas.',
        available: false,
  },
  {
        id: 'apex-90',
        name: 'Apex 90',
        price: 50000,
        priceRange: '$50,000+',
        coverage: 'Up to 250 Links',
        useCase: 'High-density urban areas',
        description: 'High-density deployment solution supporting up to 250 simultaneous Link connections.',
  },
  {
        id: 'apex-180',
        name: 'Apex 180',
        price: 80000,
        priceRange: '$80,000+',
        coverage: 'Up to 500 Links',
        useCase: 'Very high density deployments',
        description: 'Maximum capacity AirNode for very high density urban environments and events.',
  },
  {
        id: 'titan',
        name: 'Titan',
        price: 101500,
        priceRange: '$101,500',
        coverage: 'Long-range backbone',
        useCase: 'Enterprise & backbone infrastructure',
        description: 'The flagship enterprise-grade backbone node for large-scale network infrastructure deployment.',
        featured: true,
  },
  ]
  
export function getProduct(id: string): Product | undefined {
    return products.find(p => p.id === id)
}export interface Product {
  id: string
  name: string
  price: number
  priceRange?: string
  coverage: string
  useCase: string
  description: string
  rewards?: string
  lifespan?: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 'spark',
    name: 'Spark AirNode',
    price: 59,
    priceRange: '$55-66',
    coverage: '150m radius',
    useCase: 'Homes & small businesses',
    description: 'The entry-level AirNode perfect for residential deployment. Earn passive income by providing wireless coverage in your area.',
    rewards: '~$1.70/month fixed rewards',
    lifespan: '14-year projected lifespan',
    featured: true,
  },
  {
    id: 'link',
    name: 'Link',
    price: 0,
    priceRange: 'Variable',
    coverage: 'Endpoint device',
    useCase: 'Customer premises equipment',
    description: 'Customer premises equipment that connects end users to the World Mobile network through AirNodes.',
  },
  {
    id: 'portal-180',
    name: 'Portal 180',
    price: 10000,
    priceRange: '$10,000+',
    coverage: 'Extended range',
    useCase: 'Neighborhoods & communities',
    description: 'Extended range AirNode for covering larger residential areas and small communities.',
  },
  {
    id: 'portal-360',
    name: 'Portal 360',
    price: 20000,
    priceRange: '$20,000+',
    coverage: 'Wide area coverage',
    useCase: 'Large areas & campuses',
    description: 'High-capacity AirNode for wide area coverage, ideal for campuses and large commercial areas.',
  },
  {
    id: 'apex-90',
    name: 'Apex 90',
    price: 50000,
    priceRange: '$50,000+',
    coverage: 'Up to 250 Links',
    useCase: 'High-density urban areas',
    description: 'High-density deployment solution supporting up to 250 simultaneous Link connections.',
  },
  {
    id: 'apex-180',
    name: 'Apex 180',
    price: 80000,
    priceRange: '$80,000+',
    coverage: 'Up to 500 Links',
    useCase: 'Very high density deployments',
    description: 'Maximum capacity AirNode for very high density urban environments and events.',
  },
  {
    id: 'titan',
    name: 'Titan',
    price: 101500,
    priceRange: '$101,500',
    coverage: 'Long-range backbone',
    useCase: 'Enterprise & backbone infrastructure',
    description: 'The flagship enterprise-grade backbone node for large-scale network infrastructure deployment.',
    featured: true,
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id)
}
