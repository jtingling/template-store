import Image from 'next/image'
import { useClientWidth, useClientHeight } from './hooks'
import TitleCard from '../components/TitleCard'
import productDescription from '../data/productDescription.json'
export default function ContentHeader({image, productType }) {
    const width = useClientWidth();
    const height = useClientHeight();
    return (
        <div className='position-relative mt-5'>
            {
                image !== null && <Image src={image} width={width} height={(height * .50)} layout='responsive'/> // mutiplier to adjust height
            }
            <TitleCard title={productType} description={productDescription.data}/>
        </div>
    )
}