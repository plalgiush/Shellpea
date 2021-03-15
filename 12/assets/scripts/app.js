class Project {
    constructor(li) {
        this.li = li;
        this.button = this.li.getElementsByClassName('alt')[0];
        this.button.addEventListener('click',this.showInfo); 
        this.dragAndDrop();
    };

    showInfo(event) { 
        let p = event.path[1].id;
        if (p === "p1" || p === "p2" || p === "p3") {
            const showLi = document.getElementById(`${p}`);
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

    dragAndDrop() {

        const li = document.querySelectorAll('li');
        const ul = document.querySelectorAll('ul');
    
        li.forEach(dragItem => {
            dragItem.addEventListener('dragstart', handlerDragstart)
            dragItem.addEventListener('dragend', handlerDragend)
        })
    
        function handlerDragstart(event) {
            setTimeout(() => {
                this.classList.add('hide');
            },0);
            event.dataTransfer.setData("dragItem", this.id);
        }
    
        function handlerDragend(event) {
            this.classList.remove('hide');
        }   
    
        ul.forEach(dropZone => {
            dropZone.addEventListener('dragenter', handlerDragenter)
            dropZone.addEventListener('dragleave', handlerDragleave)
            dropZone.addEventListener('dragover', handlerDragover)
            dropZone.addEventListener('drop', handlerDrop)
        })
    
        function handlerDragenter(event) {
            this.classList.add('hovered');
            event.preventDefault();
        }
    
        function handlerDragleave(event) {
            this.classList.remove('hovered');
        }
    
        function handlerDragover(event) {
            event.preventDefault();
        }
    
        function handlerDrop(event) {
            const dragItem = event.dataTransfer.getData("dragItem");
            event.target.append(document.getElementById(dragItem));
            this.classList.remove('hovered');
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