import { getAllCountries } from "@/actions/countries";

import { Title } from "@/components/ui";
import { AddressForm } from "@/components/checkout/address";

export default async function CheckoutAddressPage() {
  const countries = await getAllCountries();

  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <AddressForm countries={countries} />
      </div>
    </div>
  );
}