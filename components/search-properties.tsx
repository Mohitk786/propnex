"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchProperties = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchLocation = searchParams.get("location") || "";
  const propertyType = searchParams.get("type") || "";
  const bedrooms = searchParams.get("bedrooms") || "";
  const rentMin = Number(searchParams.get("rentMin") || 0);
  const rentMax = Number(searchParams.get("rentMax") || 100000);
  const showFilters = searchParams.get("filters") === "true";

  const updateQuery = (params: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });

    router.replace(`${pathname}?${newParams.toString()}`);
  };

  const handleReset = () => {
    updateQuery({
      location: null,
      type: null,
      bedrooms: null,
      rentMin: null,
      rentMax: null,
      filters: null,
    });
  };

  return (
    <Card className="mb-8 shadow-search">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-end">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search location..."
                value={searchLocation}
                onChange={(e) => updateQuery({ location: e.target.value })}
                className="pl-10"
              />
            </div>

            <Select
              value={propertyType}
              onValueChange={(val) => updateQuery({ type: val })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="pg">PG/Hostel</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={bedrooms}
              onValueChange={(val) => updateQuery({ bedrooms: val })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => updateQuery({ filters: showFilters ? null : "true" })}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              More Filters
            </Button>
          </div>

          <Button
            variant="default"
            size="lg"
            className="lg:w-auto w-full"
            onClick={() => router.push(`${pathname}?${searchParams.toString()}`)}
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        {showFilters && (
          <div className="mt-6 pt-6 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Monthly Rent: ₹{(rentMin / 1000).toFixed(0)}k - ₹
                  {(rentMax / 1000).toFixed(0)}k
                </label>
                <Slider
                  value={[rentMin, rentMax]}
                  onValueChange={(val) =>
                    updateQuery({
                      rentMin: val[0].toString(),
                      rentMax: val[1].toString(),
                    })
                  }
                  max={100000}
                  step={5000}
                  className="w-full"
                />
              </div>
              <div className="flex items-end">
                <Button variant="outline" className="w-full" onClick={handleReset}>
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchProperties;
