import Image from 'next/image'

const CardImg = ({ src, alt, width, height }) => {
    return (
        <div className="card-img">
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
    )
}

export default CardImg 