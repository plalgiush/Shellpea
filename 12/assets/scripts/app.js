class Project {
    constructor(li) {
        this.li = li;
        this.button = this.li.getElementsByClassName('alt')[0];
        this.button.addEventListener('click',this.showInfo); 
    };

    showInfo() {
        const li = document.querySelectorAll('li');
        li.forEach(li => {
            let div = document.createElement('div');
            div.innerHTML = li.dataset.extraInfo; 
            div.setAttribute('class', 'card');
            li.append(div);
            console.log(div);
            div.addEventListener('click', () => {
                div.parentNode.removeChild(div);
            })
            div.style.marginTop = "10px";
            div.style.padding = "10px";
        })
           
    };

};

class ActivateProject extends Project {
    constructor(li) {
        super(li);
        this.li = li;
        this.activeBtn();
    };

    activeBtn() {this.li.querySelector('button:last-of-type').onclick = () => {
        console.log('activ');
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
        console.log('finish');
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
            console.log(`${type}`);
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
