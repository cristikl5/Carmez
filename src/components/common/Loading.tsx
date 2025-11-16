const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="text-gray-500">Se încarcă...</p>
    </div>
  );
};

export default Loading;

