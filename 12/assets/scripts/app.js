class Project {
    constructor() {
        this.showInfo();
    };

    showInfo() {
        let elements = document.querySelectorAll('.alt');
        for (let i = 0; i < elements.length; i++) {
            elements[i].onclick = function(){
                console.log('show info');
            };
        };  
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
