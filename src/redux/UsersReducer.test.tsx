
import {setCurrentPageAC, setTotalCountAC, UsersReducer, UsersType} from "./UsersReducer";

test('totalCount should be added', () => {


    const startState: UsersType = {
        items: [],
        pageSize: 3,
        totalCount: 0,
        currentPage: 1
    }


    const endState = UsersReducer(startState, setTotalCountAC(10))

    expect(endState.totalCount).toBe(10)
})

test('currentPage should be changed', () => {


    const startState: UsersType = {
        items: [],
        pageSize: 3,
        totalCount: 0,
        currentPage: 1
    }


    const endState = UsersReducer(startState, setCurrentPageAC(2))

    expect(endState.currentPage).toBe(2)
})