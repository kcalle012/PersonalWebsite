import './index.scss';
import Sidebar from '../Sidebar'

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tag top-tags'>&lt;body&gt;</span>

        </div>
    </div>
    
    )
}

export default Layout