import chefService from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <div className="mt-16">
            <div>
                <img src={chefService} alt="" />
                <div className='text-center w-[850px] h-[300] bg-white bg-opacity-10 text-black -mt-60 ml-40'>
                    <h2 className='text-4xl'>Bistro Boss</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;