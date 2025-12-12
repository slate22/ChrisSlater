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

      <div className="absolute top-0 left-0 -z-10 opacity-30">
        <div className="w-[500px] h-[500px] bg-primary-500/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Digital Services</h1>
          <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs text-slate-400">
            {products.length} Available
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <Card key={product.id} className="h-full group flex flex-col border-white/5 hover:border-primary-500/30 transition-colors">
              <div className="h-48 w-full bg-slate-900/50 flex items-center justify-center mb-6 rounded-lg overflow-hidden border border-white/5 relative group-hover:bg-slate-800/50 transition-colors">
                {product.image ? (
                  <img
                    src={product.image.sourceUrl}
                    alt={product.image.altText || product.name}
                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="grid place-items-center opacity-30">
                    <svg className="w-16 h-16 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                )}
              </div>

              <h2 className="text-xl font-bold font-display text-white mb-2 leading-tight min-h-[56px]">
                {product.name}
              </h2>
              <div
                className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow"
                dangerouslySetInnerHTML={{ __html: product.shortDescription }}
              />

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <span className="text-xl font-bold text-primary-400">{product.price}</span>
                <Button size="sm" className="bg-white text-slate-900 hover:bg-white/90 font-bold border-none shadow-lg">
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
