let container = []

function solution(queries) {

    let isExist = []

    for (let i = 0; i < queries.length; i++) {

        //ADD
        if (queries[i][0] === "ADD") {
            container.push(queries[i][1])
            isExist.push("")
        }
        //EXISTS
        else if (queries[i][0] === "EXISTS") {
            if (container.find((element) => element === queries[i][1]))
                isExist.push("true")
            else
                isExist.push("false")
        }
        //REMOVE
        else if (queries[i][0] === "REMOVE") {
            const index = container.findIndex((element) => element === queries[i][1])
            if (index > -1) {
                container.splice(index, 1);
                isExist.push("true")
            } else
                isExist.push("false")
        }
    }
    return isExist
}
