
export const CardProfile = (): JSX.Element => {
  return (
    <div className="py-8 pr-8 pl-10">
      <div className="flex flex-row">
        <img
          src="https://github.com/yamakenji24.png"
          alt="yamakenji24"
          className="w-20 h-20 rounded-full"
        />
        <div className="m-0">
          <p className="text-3xl ml-10 mb-2 font-bold text-white">yamakenji24</p>
          <div className="mt-0 mr-0 mb-1 ml-4 text-gray-300 flex">
            <div className="h-4 w-4 mt-1 mr-2">
              <img src="/github.svg" alt="" />
            </div>
            yamakenji24
          </div>
        </div>
      </div>
    </div>
  );
};