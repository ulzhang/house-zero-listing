export default function AboutIcon() {
    return (
        <div className="font-roboto py-2.5 text-stone-900 text-md">
            <div>
                <h3 className="text-stone-500 font-bold pb-1 text-xl">About ICON</h3>
                <p className="pb-1.5">{text.aboutIcon1}</p>
                <p className="pb-1.5">{text.aboutIcon2}</p>
                <p className="pb-1.5">{text.aboutIcon3}</p>
            </div>
        </div>
    )
}

const text = {
    aboutIcon1: "In 2018, ICON was the first company in America to secure a building permit for and build a 3D printed home. The house in Austin, TX was a proof of concept that brought our team, investors, and customers together to drive towards the future.",
    aboutIcon2: "We’ve used that support to develop robotics, software, and materials as our core technology for our partners and home buyers. The strength of these products has been proven further through a number of projects since that first house, with more to come soon.",
    aboutIcon3: "The audacious mission of ICON is to revolutionize homebuilding, and our team’s expertise and determination have already made this dream a reality. Our team has a passion for design, engineering, and elegant software. We have decades of experience in sustainable technology and construction innovation.",
}