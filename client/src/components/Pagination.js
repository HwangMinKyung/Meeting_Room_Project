import { useState } from "react"
import { Link } from 'react-router-dom';

function Pagination({total, page, setPage}) {
    const createArr = (num) => {
        const iArr = new Array(num)
        for (let i=0;i<num;i++) iArr[i]=i+1
        return iArr
    }

    const [blockNum, setBlokNum] = useState(0)  // 한 페이지에 보여줄 페이지네이션을 블럭넘버로 지정
    const pageLimit = 5;  // 한 페이지 블럭에 보여줄 페이지 번호 개수
    const limit = 10;     // 한 페이지 안에 보여줄 데이터 리스트의 개수
    const totalPage = Math.ceil(total/limit)   // 총 필요한 페이지 수

    const blockArea = blockNum*pageLimit  // 화면 전환 시 보여질 페이지네이션 블럭넘버를 지정
    const nArr = createArr(totalPage)  // 전체 페이지의 번호를 배열에 저장
    let pArr = nArr.slice(blockArea, pageLimit+blockArea)  // 블럭넘버에 따라서 전체 페이지번호의 배열에서 잘라 필요한 페이지 번호만 저장

    const firstPage = () => {
        setPage(1)
        setBlokNum(0)
    }

    const lastPage = () => {
        setPage(totalPage)
        setBlokNum(Math.ceil(totalPage/pageLimit)-1)
    }

    const prevPage = () => {
        if(page <= 1) return
        if(page-1 <= pageLimit*blockNum) setBlokNum(blockNum-1)
        setPage(page-1)
    }

    const nextPage = () => {
        if(page >= totalPage) return
        if(pageLimit*(blockNum+1) < page+1) setBlokNum(blockNum+1)
        setPage(page+1)
    }
    console.log("현재 페이지 : "+page)
    return (
        <>
            {/* <nav> */}
                <Link className="first-page arrow" onClick={()=>firstPage()} disabled={page===1} to="#"></Link>
                <Link className="prev arrow" onClick={()=>prevPage()} disabled={page===1} to="#"></Link>
                {
                    pArr.map(function(a,i) {
                        return (
                            <Link className="page-number" key={a} onClick={()=>setPage(a)}  to="#">
                                { page === a ? <span>{a}</span> : <span>{a}</span> }
                            </Link>
                        )
                    })
                }
                <Link className="next arrow" onClick={()=>nextPage()} disabled={page===totalPage} to="#"></Link>
                <Link className="end-page arrow" onClick={()=>lastPage()} disabled={page===totalPage} to="#"></Link>
            {/* </nav> */}
        </>
    )
}

export default Pagination;