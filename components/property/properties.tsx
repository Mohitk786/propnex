import PropertyCard from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { Property } from "@/types/property";
import SearchProperties from "@/components/search-properties";
import { Suspense } from "react";

const Properties = async ({properties, type}: {properties: Property[], type: 'rent' | 'buy'}) => {
  

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Properties for {type}
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover {type} properties that fit your lifestyle
        </p>
      </div>

      <Suspense fallback={
        <div className="mb-8 p-6 bg-white/90 backdrop-blur-xl border-2 border-white/50 shadow-2xl rounded-3xl text-center">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="h-12 bg-gray-200 rounded-xl"></div>
              <div className="h-12 bg-gray-200 rounded-xl"></div>
              <div className="h-12 bg-gray-200 rounded-xl"></div>
              <div className="h-12 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      }>
        <SearchProperties />
      </Suspense>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <span className="text-sm font-medium text-muted-foreground">
          Popular searches:
        </span>
        <Button variant="outline" size="sm">
          1BHK under ₹20k {type}
        </Button>
        <Button variant="outline" size="sm">
          2BHK Furnished
        </Button>
        <Button variant="outline" size="sm">
          Near Metro
        </Button>
        <Button variant="outline" size="sm">
          Pet Friendly
        </Button>
      </div>

      {/* Results Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">
            {properties.length} Properties Found
          </h2>
          <p className="text-muted-foreground">Showing {type} properties</p>
        </div>

     
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {properties.map((property: Property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Properties
        </Button>
      </div>
    </main>
  );
};

export default Properties;
