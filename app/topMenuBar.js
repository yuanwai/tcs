export function Logo() {
    return (
        <div className="h-16 w-16">
            <img src="https://www.luxiangdong.com/images/m2-rmbg.png" />
        </div>
    )
}

export function SearchBar() {
    return (
            <input
                type="text"
                placeholder="Search..."
                className="outline outline-offset-0 outline-gray-300 ml-4 p-2 rounded-md w-4/5 shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            />
    )
}

export function RightTopMenu() {
    return (
        <div className="flex items-center">
            {/* Three menu items */}
            <div className="mr-4">
                <button className="px-2 py-1 rounded-md text-gray">
                    文档
                </button>
            </div>
            <div className="mr-4">
                <button className="px-2 py-1 rounded-md text-gray">
                    联系
                </button>
            </div>
            <div className="relative mr-4">
                <button
                    className="px-2 py-1 rounded-md text-gray">
                    用户中心
                </button>
            </div>
        </div>
    )
}