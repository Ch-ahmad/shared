const CollectionProfile = () => {
  return (
    <div className="flex w-full gap-[5px] flex-wrap mt-[30px]">
      {[...Array(10).keys()].map((i) => (
        <img
          key={i}
          src="https://source.unsplash.com/closeup-photography-of-woman-smiling-mEZ3PoFGs_k"
          alt="Profile"
          className="w-[31%] h-[300px] object-cover rounded"
        />
      ))}
    </div>
  );
};

export default CollectionProfile;
