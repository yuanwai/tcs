
export function PromptBar(){
    return(
        <div className="flex items-center mb-4">
            <div className="font-semibold mr-4">Prompt</div>
            <textarea className="flex-1 border p-2"></textarea>
            <div className="ml-4 flex-col">
              <button className="px-2 py-1 rounded-md bg-blue-500 text-white mb-2 mr-2">
                Copy
              </button>
              <button className="px-2 py-1 rounded-md bg-blue-500 text-white">
                Save
              </button>
            </div>
          </div>
    )
}


export function FilterArea(){
  return(

      <div className="flex items-center mb-4">
      {/* Filter inputs */}
      <div className="flex">
        {/* First Input */}
        <div className="flex mr-2">
          <label htmlFor="inputA" className="block mr-3">
            条件一:
          </label>
          <input
            type="text"
            id="inputA"
            className="border rounded-md p-2"
          />
        </div>

        {/* Second Input */}
        <div className='flex mr-2'>
          <label htmlFor="inputB" className="block mr-3">
            条件二:
          </label>
          <input
            type="text"
            id="inputB"
            className="border rounded-md p-2"
          />
        </div>
      </div>
      <button className="ml-4 px-2 py-1 rounded-md bg-blue-500 text-white">
        过滤
      </button>
    </div>

  )
}