class Project {
    constructor(li) {
        
        const finishBtn = li.querySelector('button:last-of-type').onclick = () => {
            console.log("finish");
            li.remove();
            document.querySelector('#finished-projects ul').append(li);
            li.querySelector('button:last-of-type').innerHTML = "Activate";
        }    

        const activeBtn = li.querySelector('button:last-of-type').onclick = () => {
            li.remove();
            document.querySelector('#active-projects ul').append(li);
            li.querySelector('button:last-of-type').innerHTML = "Finish";
        }
    
        // const showInfo = infoBtn.getElementsByClassName('alt').onclick = () => {
        //     console.log("show info");
        // }
       
    }
}

class ProjectList {
    constructor(type) {
        for (const li of document.querySelectorAll(`#${type}-projects li`)) {
            console.log(`${type}`);
            new Project(li);
        }
    }
}

// class ProjectInfo {
//     constructor(infoBtn) {
//         for (const info of document.getElementsByClassName('alt')) {
//             console.log(`${infoBtn}`);
//             new Project(info);
//         }
//     }
// }

class App {
    static init() {
        new ProjectList('active');
        new ProjectList('finished');
        // new ProjectInfo('more info');
    }
}

App.init();

