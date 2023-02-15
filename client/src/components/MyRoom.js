import { useState } from 'react';
import { useSelector } from 'react-redux';
import CreateRoom from './CreateRoom';
import Pagination from './Pagination';

function MyRoom({user}) {
    const [modalOpen, setModalOpen] = useState(false)
    let myRoomList = useSelector((state => state.teachRoom))
    let myRoomInfo = myRoomList.filter(function(a) {
        return a.teacher === user
    })
    // 페이지네이션에 필요한 데이터
    let [page, setPage] = useState(1)
    let offset = (page-1)*10

    return (
        <div>
            <h5>평가 인터뷰 목록 페이지 입니다.</h5>
            <div>
                <div>
                    <button>전체</button>
                    <button>진행 예정</button>
                    <button>진행 중</button>
                    <button>진행 완료</button>
                    <button onClick={() => {setModalOpen(true)}}> + </button>
                </div>
                <hr></hr>
                <div>
                    {
                        myRoomInfo.length === 0
                        ? <p>인터뷰가 없습니다.</p>
                        : <ul>
                            {
                                myRoomInfo.slice(offset, offset+10).map(function(a,i) {
                                    return (
                                        <li key={i}>
                                            <div>
                                                { a.progress === -1 && <p>진행 예정</p> }
                                                { a.progress === 0 && <p>진행 중</p> }
                                                { a.progress === 1 && <p>진행 완료</p> }
                                                <p>{a.startTime}</p>
                                                <h4>{a.roomName}</h4>
                                            </div>
                                            <div>
                                                <button>Excel Download</button>
                                                <button>시작하기</button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
                {/* Pagination 영역 */}
                <div>
                    <Pagination total={myRoomInfo.length} page={page} setPage={setPage} />
                </div>
            </div>
            {modalOpen ? <CreateRoom setModalOpen={setModalOpen} /> : ''}
        </div>
    )
}

export default MyRoom;