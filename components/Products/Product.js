import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function Product({ product, category }) {
    const [isVisible, setIsVisible] = useState(false);
    const showText = (visible) => {
        if (visible) {
            setIsVisible(visible)
        } else {
            setIsVisible(visible)
        }
    }
    return (
        <div className='mx-3 my-1' style={{ width: 350 }}
            onMouseOver={() => showText(true)}
            onMouseOut={() => showText(false)}
        >
            <Link href={`/${category}/${product.handle}`}>
                <a>
                    <Image key={product.id} src={product.images[0].src} width={350} height={300} />
                </a>
            </Link>
            {
                isVisible ? <p className='text-center text-wrap visible' >{product.title}</p> :
                    <p className='text-center text-wrap invisible' >{product.title}</p>
            }
        </div>

    )
}