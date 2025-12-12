import { useQuery, gql } from '@apollo/client';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 12) {
      nodes {
        id
        name
        slug
        shortDescription
        image {
          sourceUrl
          altText
        }
        ... on SimpleProduct {
          price
        }
        ... on VariableProduct {
          price
        }
        ... on ExternalProduct {
          price
        }
      }
    }
  }
`;

export default function Shop() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    if (loading) return <div className="container mx-auto px-4 py-20">Loading products...</div>;
    if (error) return <div className="container mx-auto px-4 py-20">Error loading products.</div>;

    const products = data?.products?.nodes || [];

    return (
        <div className="pb-20 pt-10">
            <Helmet>
                <title>Shop | Chris Slater</title>
                <meta name="description" content="Digital products and consultation services." />
            </Helmet>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-display font-bold text-slate-900">Shop</h1>
                    <div className="text-sm text-slate-500">Showing {products.length} products</div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product: any) => (
                        <Card key={product.id} className="h-full group flex flex-col">
                            <div className={`h-48 w-full bg-slate-100 flex items-center justify-center mb-4 rounded-lg overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-300 relative`}>
                                {product.image ? (
                                    <img
                                        src={product.image.sourceUrl}
                                        alt={product.image.altText || product.name}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="text-slate-300 font-bold text-4xl">CS</div>
                                )}
                            </div>

                            <h2 className="text-xl font-bold font-display text-slate-900 mb-2">
                                {product.name}
                            </h2>
                            <div
                                className="text-slate-600 text-sm mb-4 line-clamp-2"
                                dangerouslySetInnerHTML={{ __html: product.shortDescription }}
                            />

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                <span className="text-lg font-bold text-slate-900">{product.price}</span>
                                <Button size="sm">Add to Cart</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
