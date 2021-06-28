import Image from 'next/image'
import { useClientWidth, useClientHeight } from './hooks'

export default function ContentHeader({image}) {
    const width = useClientWidth();
    const height = useClientHeight();
    return (
        <div className='position-relative'>
            {
                image !== null && <Image src={image} width={width} height={(height * .75)} layout='responsive'/>
            }
        </div>
    )
}