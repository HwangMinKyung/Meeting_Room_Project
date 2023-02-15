import { useSelector } from 'react-redux';

function Admin() {
    let who = useSelector((state) => state.loginUser)

    return (
        <div>
            <div> {/* LOGO 영역 */} </div>
            <div>
                <h4>{who.name} 님, 반갑습니다.</h4>
            </div>
        </div>
    )
}

export default Admin;