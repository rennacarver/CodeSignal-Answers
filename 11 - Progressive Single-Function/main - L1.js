let container = []

function solution(queries) {
    let isExist = []
    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] === "ADD") {
            container.push(queries[i][1])
            isExist.push("")
        }
        if (queries[i][0] === "EXISTS") {
            if (container.find((element) => element === queries[i][1]))
                isExist.push("true")
            else
                isExist.push("false")
        }
    }
    return isExist
}
