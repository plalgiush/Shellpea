class Project {
    constructor(li) {
        this.li = li;
        this.button = this.li.getElementsByClassName('alt')[0];
        this.button.addEventListener('click',this.showInfo); 
    };

    showInfo(e) { 
        let p = e.path[1].id;
        if (p === "p1") {
            let j = 1;
            const showLi = document.getElementById(`p${j}`);
            let div = document.createElement('div');
            div.innerHTML = showLi.dataset.extraInfo; 
            div.setAttribute('class', 'card');
            showLi.append(div);
            div.addEventListener('click', () => {
                div.parentNode.removeChild(div);
            })
            div.style.marginTop = "10px";
            div.style.padding = "10px";
        } else if (p === "p2") {
            let j = 2;
            const showLi = document.getElementById(`p${j}`);
            let div = document.createElement('div');
            div.innerHTML = showLi.dataset.extraInfo; 
            div.setAttribute('class', 'card');
            showLi.append(div);
            div.addEventListener('click', () => {
                div.parentNode.removeChild(div);
            })
            div.style.marginTop = "10px";
            div.style.padding = "10px"; 
        } else if (p === "p3") {
            let j = 3; 
            const showLi = document.getElementById(`p${j}`);
            let div = document.createElement('div');
            div.innerHTML = showLi.dataset.extraInfo; 
            div.setAttribute('class', 'card');
            showLi.append(div);
            div.addEventListener('click', () => {
                div.parentNode.removeChild(div);
            })
            div.style.marginTop = "10px";
            div.style.padding = "10px";    
        }
        
    }

};

class ActivateProject extends Project {
    constructor(li) {
        super(li);
        this.li = li;
        this.activeBtn();
    };

    activeBtn() {this.li.querySelector('button:last-of-type').onclick = () => {
        this.li.remove();
        document.querySelector('#finished-projects ul').append(this.li);
        this.li.querySelector('button:last-of-type').innerHTML = "Activate";
        this.li.querySelector('button:last-of-type').classList.add('activate-btn');
        new ProjectList('finished');      
        };        

    };

};

class FinishProject extends Project {
    constructor(li) {
        super(li);
        this.li = li;
        this.finishBtn();
    };

    finishBtn() {this.li.querySelector('button:last-of-type').onclick = () => {
        this.li.remove();
        document.querySelector('#active-projects ul').append(this.li);
        this.li.querySelector('button:last-of-type').innerHTML = "Finish";
        this.li.querySelector('button:last-of-type').classList.add('finish-btn');
        new ProjectList('active');
        };        
    };
};

class ProjectList {
    constructor(type) {
        for (const li of document.querySelectorAll(`#${type}-projects li`)) {
            new Project(li);
            if(`${type}` === 'active'){
                new ActivateProject(li);
            }else{
                new FinishProject(li);
            };
        };
    };
};

class App {
    static init() {
        new ProjectList('active');
        new ProjectList('finished'); 
    }
};

App.init();






// const dragAndDrop = () => {

//     const li = document.querySelectorAll('li');
//     const ul = document.querySelectorAll('ul');

//     li.forEach(dragItem => {
//         dragItem.addEventListener('dragstart', handlerDragstart)
//         dragItem.addEventListener('dragend', handlerDragend)
//         dragItem.addEventListener('drag', handlerDrag)
//     })

//     function handlerDragstart(event) {
//         console.log(event);
//         setTimeout(() => {
//             this.classList.add('hide');
//         },0);
//         event.dataTransfer.setData("dragItem", this.dataset.extraInfo);
//         console.log('dragstart', this);
//     }

//     function handlerDragend(event) {
//         console.log('dragend', this);
//         this.classList.remove('hide');
//     }

//     function handlerDrag(event) {
//         console.log('drag');
//     }



    
//     ul.forEach(dropZone => {
//         dropZone.addEventListener('dragenter', handlerDragenter)
//         dropZone.addEventListener('dragleave', handlerDragleave)
//         dropZone.addEventListener('dragover', handlerDragover)
//         dropZone.addEventListener('drop', handlerDrop)
//     })

//     function handlerDragenter(event) {
//         console.log('dragenter', this);
//         this.classList.add('hovered');
//         event.preventDefault();
//     }

//     function handlerDragleave(event) {
//         console.log('dragleave', this);
//         this.classList.remove('hovered');
//     }

//     function handlerDragover(event) {
//         // console.log('dragover', this);
//         event.preventDefault();
//     }

//     function handlerDrop(event) {
//         let dragItem = event.dataTransfer.getData("dragItem");
//         console.log(event.dataTransfer.getData("dragItem"));
//         // console.log('drop', this);
//         this.append(dragItem);
//         this.classList.remove('hovered');
//     }

// }

// dragAndDrop();