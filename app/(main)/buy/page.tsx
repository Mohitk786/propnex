import Properties from "@/components/property/properties";
import { getProperties } from "@/actions/property";

export const revalidate = 0;

const Buy = async ({
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
    type: "buy",
  });
  const properties = JSON.parse(JSON.stringify(res.data));
  console.log("properties buy page", properties);
  return <Properties properties={properties} type="buy" />;
};

export default Buy;
