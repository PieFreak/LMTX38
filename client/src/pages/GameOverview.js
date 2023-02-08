export default function GameOverview() {

    return (
      <div className="h-screen flex justify-center items-center flex-col bg-[#6b8db9]">
  
          <div className="mt-8 text-white text-2xl max-md:text-sm">
              <button className=" p-4 border-2 hover:bg-blue-700 rounded">Start new game
              </button>
          </div>
  
          <div className="h-full w-full flex justify-center mt-8">
              <div className=" h-3/4 w-full lg:w-3/5 flex justify-center items-center">
  
                  <div className="bg-blue-600 flex-col h-full w-1/2 border-2 border-yellow-50 rounded mr-1">
  
                      <h1 className="flex items-center justify-center mt-4 text-white text-xl max-md:text-sm">Invites</h1>
                      <div className="h-auto border-2 m-2">
                          <p className="text-white text-lg max-md:text-sm">©user1</p>
                          <p className="text-white text-lg max-md:text-sm">©user2</p>
                      </div>
                  </div>
                  <div className="bg-blue-600 flex-col h-full w-1/2 border-2 border-yellow-50 rounded ml-1">
                      <h1 className="flex items-center justify-center mt-4 text-white text-xl max-md:text-sm">Results</h1>
                      <div className="h-auto border-2 m-2">
                          <p className="text-white text-lg max-md:text-sm">©user1</p>
                          <p className="text-white text-lg max-md:text-sm">©user2</p>
                      </div>
                  </div>
  
              </div>
          </div>
          
      </div>
    );
  }