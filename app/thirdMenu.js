
export function ThirdMenu({ secondLabel }) {

    const thirdMenuItems = [
        {
            label: '美食',
            thirdItems: [
                {
                    id: '101',
                    name: '牛排'
                },
                {
                    id: '102',
                    name: '中餐'
                },
                {
                    id: '103',
                    name: '日料'
                },
                {
                    id: '104',
                    name: '法餐'
                }
            ],
        },
        {
            label: '时装',
            thirdItems: [
                {
                    id: '401',
                    name: 'MILAN 2024'
                },
                {
                    id: '402',
                    name: 'HOMOLOG 2024'
                },
                {
                    id: '403',
                    name: 'SHANGHAI 2025'
                }
            ],
        },
    ]


    let thirdMenuJSX = null;

    if (secondLabel.secondLabel == '') {

    } else {
        const matchingItem = thirdMenuItems.find(
            (element) => element.label === secondLabel
        );

        if (matchingItem) {
            thirdMenuJSX = (
                <div className="flex ml-5 cursor-pointer font-semibold bg-white rounded-md">
                    {matchingItem.thirdItems.map((item) => (
                        <div key={item.id} className="mr-2">
                            <a href={item.id}>{item.name}</a>
                        </div>
                    ))}
                </div>
            );
        }
    }
    return thirdMenuJSX;

}