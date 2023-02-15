import { configureStore, createSlice } from '@reduxjs/toolkit'

// DB 연결 전 임시 데이터 //
let user = createSlice({
    name : 'user',
    initialState : [
        {
            name : '학생11',
            email : 'stu11@codinghub.co.kr',
            role : '/stud'
        },
        { 
            name : '학생22', 
            email : 'stud22@codinghub.co.kr', 
            role : '/stud'
        },
        {
            name : '학생33', 
            email : 'stud33@codinghub.co.kr', 
            role : '/stud'
        },
        {
            name : '평가자11',
            email : 'teach11@codinghub.co.kr',
            role : '/teach'
        },
        { 
            name : '평가자22', 
            email : 'teach22@codinghub.co.kr', 
            role : '/teach'
        },
        {
            name : '평가자33', 
            email : 'teach33@codinghub.co.kr', 
            role : '/teach'
        },
        {
            name : '관리자1',
            email : 'admin11@codinghub.co.kr',
            role : '/admin'
        },
        { 
            name : '관리자2', 
            email : 'admin22@codinghub.co.kr', 
            role : '/admin'
        },
        {
            name : '관리자3', 
            email : 'admin33@codinghub.co.kr', 
            role : '/admin'
        }
    ]
})

let loginUser = createSlice({
    name : 'loginUser',
    initialState : { name : '', email : '', role : '' },
    reducers : {
        saveUserInfo(state, action) {
            for(var key in action.payload){
                state[key] = action.payload[key]
            }
        }
    }
})

let room = createSlice({
    name : 'room',
    initialState : [
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 3,
            roomName : 'stud22 님 중간 역량 평가',
            targetUser : 'stud22',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : 1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : 1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        }
    ]
})

let teachRoom = createSlice({
    name : 'teachRoom',
    initialState : [
        {
            uuid : 1,
            roomName : '학생11 님 사전 역량 평가',
            targetUser : '학생11',
            teacher : '평가자11',
            startTime : '2023/02/04 14:00',
            endTime : '2023/02/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 2,
            roomName : '학생11 님 중간 역량 평가',
            targetUser : '학생11',
            teacher : 'teach22',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        },
        {
            uuid : 3,
            roomName : '학생22 님 중간 역량 평가',
            targetUser : '학생22',
            teacher : '평가자11',
            startTime : '2023/03/04 14:00',
            endTime : '2023/03/04 15:00',
            createdAt : '2023/02/01 10:30',
            progress : -1
        }
    ]
})

export let { saveUserInfo } = loginUser.actions

export default configureStore( {
    reducer : {
        user : user.reducer,
        loginUser : loginUser.reducer,
        room : room.reducer,
        teachRoom : teachRoom.reducer
    }
} )


