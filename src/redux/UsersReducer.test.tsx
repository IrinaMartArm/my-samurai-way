
import {setCurrentPage, setLoading, setTotalCount, UsersReducer, UsersType} from "./UsersReducer";

let startState: UsersType
beforeEach(()=> {
     startState = {
        items: [],
        pageSize: 3,
        totalCount: 0,
        currentPage: 1,
        isLoading: false
    }
})

test('totalCount should be added', () => {

    const endState = UsersReducer(startState, setTotalCount(10))

    expect(endState.totalCount).toBe(10)
})

test('currentPage should be changed', () => {

    const endState = UsersReducer(startState, setCurrentPage(2))

    expect(endState.currentPage).toBe(2)
})
test('isLoading should be changed', () => {

    const endState = UsersReducer(startState, setLoading(true))

    expect(endState.isLoading).toBe(true)
})

