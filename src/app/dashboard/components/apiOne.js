import api from '../../API/axiosApi';

export default getServerSideProps = async()=>{
    const data = api.get('/test');
    return { props: { data } }
}