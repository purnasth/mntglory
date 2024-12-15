const FactsUI = () => {
  return (
    <>
      <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-6 shadow-sm outline outline-1 outline-dark/20">
        <h4 className="flex flex-col items-center text-3xl">
          42+
          <span className="text-sm">Total Staffs</span>
        </h4>
        <h4 className="flex flex-col items-center text-3xl">
          24+
          <span className="text-sm">Years of Experience</span>
        </h4>
        <h4 className="flex flex-col items-center text-3xl">
          100%
          <span className="text-sm">Happy Students</span>
        </h4>
        <h4 className="flex flex-col items-center text-3xl">
          97
          <span className="text-sm">Awards Won</span>
        </h4>
        <h4 className="flex flex-col items-center text-3xl">
          13000+
          <span className="text-sm">Students</span>
        </h4>
      </div>
    </>
  );
};

export default FactsUI;
