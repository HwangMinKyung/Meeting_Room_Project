import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Pagination from './Pagination';
// import styled from "styled-components";

function Student() {
    let who = useSelector((state) => state.loginUser)

    let roomList = useSelector((state => state.room))
    let roomInfo = roomList.filter(function(a) {
        return a.targetUser === who.name
    })
    let inputRef = useRef([])
    let [fileList, setFile] = useState(new Array(roomInfo.length));
    let [fileName, setFileName] = useState(new Array(roomInfo.length));

    // 페이지네이션에 필요한 데이터
    let [page, setPage] = useState(1)
    let offset = (page-1)*10

    function deleteFile(index) {
        // 파일 삭제
        let copyFile = [...fileList]
        copyFile[index] = null
        setFile(copyFile)
        // 파일 이름 삭제
        let copyFileName = [...fileName]
        copyFileName[index] = ''
        setFileName(copyFileName)
    }

    function UploadFile(el, index) {
        // 파일 저장
        let copyFile = [...fileList]
        copyFile[index] = el
        setFile(copyFile)
        // 파일 이름 저장
        let copyFileName = [...fileName]
        copyFileName[index] = el[0].name
        setFileName(copyFileName)
    }

    return (
        <>
            <div className="page-heading">
                <Link className="page-heading__logo" to="#">
                    <Header />
                </Link>
            </div>
            <div className="page-content-wrap">
                <div className="page-content__heading">
                    <h4>{who.name}님, 반갑습니다.😀</h4>
                    <h5>필요 시 자료 업르드 확인 후 인터뷰 장으로 입장해 주세요.</h5>
                </div>
                <div className="page-content__list">
                    {
                        roomInfo.length === 0
                        ? <div className="no-session-list"><p>진행 중인 인터뷰가 없습니다.</p></div>
                        : <ul className="content-session-list">
                            {
                                roomInfo.slice(offset, offset+10).map(function(a,i) {
                                    return (
                                        <li className="start-session-list-form" key={i}>
                                            <div className="session-list-left">
                                                <p className="start-time">{a.startTime}</p>
                                                {a.progress === 1 ? <h4 className="room-name end">{a.roomName}</h4> : <h4 className="room-name">{a.roomName}</h4>}
                                                <button className="download-button">공유파일 다운로드</button>
                                            </div>
                                            <div className="session-list-right">
                                                {
                                                    a.progress === 1 
                                                    ? <div className="session-list-right"><p>이미 종료된 회의입니다.</p></div>
                                                    : <><input id="upload-input" type="file" ref={(el) => (inputRef.current[i]= el)} onChange={ (e) => { UploadFile(e.target.files, i) } } style={{'display' : 'none'}} />
                                                        {fileName[i] === undefined || fileName[i] === '' ? '' : <div className="file-preview"><p>{fileName[i]}</p><button className="fa-solid fa-xmark" onClick={()=>{ deleteFile(i) }}></button></div> }
                                                        <button className="upload-button" onClick={ () => { inputRef.current[i].click(); } }>자료 업로드</button>
                                                        <button className="start-button">시작하기</button>
                                                    </>
                                                }
                                                
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
            </div>
            {/* Pagination 영역 */}
            <div className="page-content__pagination">
                <Pagination total={roomInfo.length} page={page} setPage={setPage} />
            </div>
            {/* <div class="success-message">
                <p>자료 업로드를 완료했습니다.</p>
            </div>

            <div class="fail-message">
                <p>자료 업로드를 실패했습니다.</p>
            </div> */}
        </>
    )
}



export default Student;