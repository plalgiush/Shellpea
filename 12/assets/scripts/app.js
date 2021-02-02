const nodeList  =  document.getElementsByClassName('alt');

Array.prototype.forEach.call (nodeList, function () {
    console.log('more info');
} );


class Project {
    constructor(li) {
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
        console.log('finished to active');
        this.li.remove();
        document.querySelector('#active-projects ul').append(this.li);
        this.li.querySelector('button:last-of-type').innerHTML = "Finish";
        this.li.querySelector('button:last-of-type').classList.add('finish-btn');
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
        console.log('active to finished');
        this.li.remove();
        document.querySelector('#finished-projects ul').append(this.li);
        this.li.querySelector('button:last-of-type').innerHTML = "Activate";
        this.li.querySelector('button:last-of-type').classList.add('activate-btn');
        };        

    };
};

class ProjectList {
    constructor(type) {
        for (const li of document.querySelectorAll(`#${type}-projects li`)) {
            console.log(`${type}`);
            new Project(li);
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