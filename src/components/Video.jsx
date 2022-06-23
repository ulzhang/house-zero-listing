export default function Video() {
    return (
        <div className="py-2.5">
            <div className="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/c4X_tT5syCA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}