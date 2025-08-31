import { getProperties } from "@/actions/property";
import Properties from "@/components/property/properties";


export const revalidate = 0;


const Rent = async ({
  searchParams,
}: {
  searchParams: Promise<{ city: string; propertyType: string; type: string }>;
}) => {
  const params = await searchParams;
  let res = await getProperties({
    ...(params.city && { city: params.city }),
    ...(params.propertyType && {
      propertyType: params.propertyType,
    }),
    type: "rent",
  });

  const properties = JSON.parse(JSON.stringify(res.data));

  console.log("properties rent page", properties);

    return <Properties properties={properties} type="rent" />
};

export default Rent;
