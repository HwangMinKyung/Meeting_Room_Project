import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

function CreateRoom( {setModalOpen} ) {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    let inputRef = useRef()
    const [files, setFiles] = useState([])

    const timeSelect = (el) => {
        let htmlStr = el === 60 ? '<option disabled selected>분</option>' :'<option disabled selected>시</option>' ;
        const time = []

        for(let i=0; i<el; i++) {
            if(i < 10) {
                time.push("0"+i)
                htmlStr += '<option value='+time[i]+' key='+time[i]+'>'+time[i]+'</option>'
            } else {
                time.push(i)
                htmlStr += '<option value='+time[i]+' key='+time[i]+'>'+time[i]+'</option>'
            }
        }

        return {__html : htmlStr}
    }

    const uploadFiles = (e) => {
        let nowFileList = [...files]
        for(var i of e) {
            nowFileList.push(i)
        }
        setFiles(nowFileList)
    }

    const deleteFiles = (index) => {
        let nowFileList = [...files]
        nowFileList.splice(index, 1)
        setFiles(nowFileList)
    }

    const checkRoom = (event) => {
        // 인터뷰 항목 전체 입력 후 등록하기 버튼 클릭 시 동작
        event.preventDefault();
    }

    return (
        <div>
            <h4>평가 인터뷰 신규 등록</h4>
            <button onClick={()=>{setModalOpen(false)}}>닫기</button>
            <form onSubmit={checkRoom}>
                <label>인터뷰명</label>
                <input type="text" placeholder="제목을 입력해 주세요."/>

                <label>인터뷰 대상자</label>
                <input type="text" placeholder="대상자의 이메일을 입력해 주세요."/>

                <label>인터뷰 시작시간</label>
                <DatePicker dateFormat="yyyy-MM-dd" minDate={new Date()}  onChange={date => setStartDate(date)} selected={startDate}/>
                <select dangerouslySetInnerHTML={timeSelect(24)}></select>
                <select dangerouslySetInnerHTML={timeSelect(60)}></select>

                <label>인터뷰 종료시간</label>
                <DatePicker dateFormat="yyyy-MM-dd" minDate={startDate} onChange={date => setEndDate(date)} selected={endDate}/>
                <select dangerouslySetInnerHTML={timeSelect(24)}></select>
                <select dangerouslySetInnerHTML={timeSelect(60)}></select>

                <label>인터뷰 질문지</label>
                <select>
                    <option>질문지 1</option>
                    <option>질문지 2</option>
                    <option>질문지 3</option>
                </select>

                <label>첨부파일</label>
                <input type="file" multiple ref={(el)=>{inputRef.current=el}} onChange={(e)=>{uploadFiles(e.target.files)}} style={{'display':'none'}}/>
                <button onClick={() => {inputRef.current.click()}}>자료 업로드</button>
                <div>
                    {
                        files !== 0 &&
                        files.map(function(a,i) {
                            return (
                                <div key={i}>
                                    <span>{a.name}</span>
                                    <button onClick={() => {deleteFiles(i)}}>삭제</button>
                                </div>
                            )
                        }) 
                    }
                </div>

                <button type="submit">등록하기</button>
            </form>
        </div>
    )
}

export default CreateRoom;


