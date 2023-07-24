
export function ThirdMenu() {

    const thirdMenuItems = [
        {
            label: '美食',
            thirdItems: ['牛排', '中餐', '日料', '法餐'],
        },
        {
            label: '时装',
            thirdItems: ['MILAN 2024', 'HOMOLOG 2024', 'SHANGHAI 2025'],
        },
    ]

    return (
        <div>
            { 
                thirdMenuItems.forEach(element => {
                    // if (element.label === item) {
                        if (true){
                        (<div className="absolute ml-5 cursor-pointer font-semibold bg-white border p-1 rounded-md flex">
                            {element.thirdItems}
                        </div>)
                        return;
                    }
                })
            }
        </div>
    )



}