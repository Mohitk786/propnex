
import PropertyCard from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { getProperties } from "@/actions/property";
import { Property } from "@/types/property";
import SearchProperties from "@/components/search-properties";

const Rent = async ({
  searchParams,
}: {
  searchParams: { city: string; propertyType: string; type: string };
}) => {
  let res = await getProperties({
    city: searchParams.city,
    propertyType: searchParams.propertyType,
    type: searchParams.type,
  });

  const properties = JSON.parse(JSON.stringify(res.data));

  return (
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Properties for Rent
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover rental properties that fit your lifestyle
          </p>
        </div>

        {/* Search and Filters */}
        <SearchProperties />

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="text-sm font-medium text-muted-foreground">
            Popular searches:
          </span>
          <Button variant="outline" size="sm">
            1BHK under ₹20k
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
            <p className="text-muted-foreground">Showing rental properties</p>
          </div>

          {/* <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="rent-low">Rent: Low to High</SelectItem>
              <SelectItem value="rent-high">Rent: High to Low</SelectItem>
              <SelectItem value="area">Area</SelectItem>
            </SelectContent>
          </Select> */}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property:Property) => (
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

export default Rent;
