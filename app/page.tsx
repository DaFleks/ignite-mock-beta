import ProductHeader from "@/components/ProductHeader";
import { Button } from "@/components/ui/button";

import toasterImage from "@/public/images/toaster.jpg";

export default function Home() {
  return (
    <div className="px-4 lg:w-2/3 lg:mx-auto">
      <ProductHeader title="Cuisinart Compact 2-Slice Toaster" sku="CPT-122" image={toasterImage.src} />
      {/* <Button className="w-full my-4" style={{ backgroundColor: "#231139" }}>
        Catalog
      </Button>
      <Button className="w-full mb-4" style={{ backgroundColor: "#231139" }}>
        See Logs
      </Button> */}
    </div>
  );
}
