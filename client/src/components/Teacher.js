import { useSelector } from 'react-redux';
import { Link, /*Outlet, */useLocation } from 'react-router-dom';
import Header from './Header';
import MyRoom from './MyRoom';
import Document from './Document';

function Teacher() {
    let who = useSelector((state) => state.loginUser)
    let location = useLocation();
    let pathName = location.pathname.slice(location.pathname.lastIndexOf('/'), location.pathname.length)

    return (
        <>
            <div>
                <Link to="#">
                    <Header />
                </Link>
            </div>
            <div>
                <h4>{who.name} 님, 반갑습니다.</h4>
                <div>
                    <ul>
                        <li><Link to="/teach/room">평가 인터뷰 목록</Link></li>
                        <li><Link to="/teach/document">질문지 관리</Link></li>
                    </ul>
                </div>
                {
                    pathName === '/room' ? <MyRoom user={who.name}/> : <Document />
                }
            </div>
        </>
    )
}

export default Teacher;