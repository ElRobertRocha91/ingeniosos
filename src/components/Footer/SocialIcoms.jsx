export default function SocialIcons({ Icons }) {
    return (
        <div className="text-rose-200">
            {Icons.map((icon) => (
                <span key={icon.name}
                className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-500 mx-1.5 text-4xl hover:text-gray-100 hover:bg-rose-800 duration-300"
                >
                    <ion-icon name={icon.name}></ion-icon>
                </span>
            ))}
        </div>
    )
}