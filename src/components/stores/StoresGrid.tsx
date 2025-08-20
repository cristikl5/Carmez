import StoreCard from "./StoreCard";

export type Store = {
  name: string;
  address: string;
  phone: string;
  sinceYear: number;
  location: string;
  workingHours: string[];
};

const StoresGrid = ({ stores }: { stores: Store[] }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-7">
      {stores.map(store => (
        <StoreCard key={store.address} store={store} />
      ))}
    </div>
  );
};

export default StoresGrid;
