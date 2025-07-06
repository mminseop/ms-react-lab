import { useParams } from 'react-router';
import { data } from '../assets/data/data'

function AnimalDetail() {
    const {id} = useParams();
    
    const detailData = data.find((row) => row.id === Number(id));
    
    return (
        <div className='detail-wrap'>
            <img src={detailData.img} alt={detailData.name} />
            <div className='title'>{detailData.name}</div>
            <div className='description'>{detailData.description}</div>
        </div>
    )
}
export default AnimalDetail;
