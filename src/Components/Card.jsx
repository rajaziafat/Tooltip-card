

function Card({ name, imageUrl, role, location }) {
    return (
        <div className="relative max-w-xs  mt-5  backdrop-blur-lg bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-20">

            <div className="flex gap-4 px-4  py-4 mt-1">

                <div className="font-[400] leading-[16px]">
                    <h1 className="text-white text-[1.2rem] md:text-[1.2rem] font-medium">{name}</h1>
                    <p className="text-[0.7rem] leading-5  text-gray-400 mt-4">
                        {location}
                    </p>
                    <p className="text-[0.9rem] text-[#22c55e] mt-4 font-medium">
                        {role}
                    </p>
                </div>
            </div>
        </div>

    );
}

function App() {
    // Array of data
    const data = [
        {
            name: 'Dark Mode',
            location: ' Change screen mode based on your preference by toggling the switch below. Enabling dark mode will allow you to save more power while light mode helps brighten screen and make contents more legible.',
            role: 'Learn more',

        }

    ];

    return (
        <div>
            {data.map((item, index) => (
                <Card
                    key={index}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    role={item.role}
                    location={item.location}
                />
            ))}
        </div>
    );
}

export default App;
