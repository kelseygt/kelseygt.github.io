const collection = document.getElementsByClassName("project-text-box")
// console.log(collection)

// let minHeight = collection[0].clientHeight
// for (var project = 1; project < collection.length; project++) {
//     let height = collection[project].clientHeight
//     if (minHeight > height) {
//         minHeight = height
//     }
// }
// console.log(minHeight)

for (var project = 0; project < collection.length; project++) {
    let height = collection[project].clientHeight
    if (height < 300) {
        collection[project].style.fontSize = "17px"
    } else if (height >= 300 && height < 350) {
        collection[project].style.fontSize = "20px"
    } else {
        collection[project].style.fontSize = "24px"
    }
};

window.addEventListener("resize", function (event) {
    for (var project = 0; project < collection.length; project++) {
        let height = collection[project].clientHeight
        if (height < 300) {
            collection[project].style.fontSize = "17px"
        } else if (height >= 300 && height < 350) {
            collection[project].style.fontSize = "20px"
        } else {
            collection[project].style.fontSize = "24px"
        }
    };
})
