import StoreCard from "./StoreCard";

export type Store = {
  name: string;
  address: string;
  phone: string;
  sinceYear: number;
  location: string;
};

const StoresGrid = ({ stores }: { stores: Store[] }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-7">
      {stores.map(store => (
        <StoreCard key={store.name} store={store} />
      ))}
    </div>
  );
};

export default StoresGrid;
