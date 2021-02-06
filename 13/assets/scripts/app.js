class Project {
    constructor() {
        this.info();
    }

    info() {
        for (var ul of document.querySelectorAll('ul')) {
            for (var li of ul.querySelectorAll('li')) {
                li.querySelector('button').id = 'info';
                li.querySelector('button').addEventListener('click', this.showInfo);
            }
        }
    }

    showInfo() {
        
        
        document.querySelector('li').insertAdjacentHTML('afterend', '<div id="wrapper" style="display: block;  position: fixed; top: 0;    right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, 0.7);"></div>');
        document.querySelector('li').insertAdjacentHTML('afterbegin', '<div id="modal" style="display: block; position: fixed; left: 50%; transform: translate(-50%); z-index: 99; padding: 15px; background-color: white;"></div>');
        

        let findBtn = document.getElementById('info');
        let findModal = document.getElementById('modal');
        let findWrapper = document.getElementById('wrapper');
        let info = findModal.innerHTML = this.parentNode.getAttribute('data-extra-info');



        findBtn.addEventListener('click', function () {
            findModal.style.display = 'none';
            findWrapper.style.display = 'none';
        } );

        findWrapper.addEventListener('click', function () {
            findModal.style.display = 'none';
            findWrapper.style.display = 'none';
            document.getElementById('wrapper').remove();
            document.getElementById('modal').remove();
        } );
        
    }

}

class ActiveProject extends Project {
    constructor() {
        super();
        this.completeProject()
    }

    completeProject() {
        for (var variable of document.getElementById('active-projects').querySelector('ul').querySelectorAll('li')) {
            variable.querySelector('button:last-child').addEventListener('click', this.moveProject);
        }
    }

    moveProject() {
        document.getElementById('finished-projects').querySelector('ul').append(this.parentNode);
        let newButtom = document.createElement('button')
        newButtom.innerHTML = 'Activate';
        this.parentNode.append(newButtom);
        this.remove();
        Lists.update();
    }
}

class FinishedProject extends Project {
    constructor() {
        super();
        this.activateProject()
    }

    activateProject() {
        for (var variable of document.getElementById('finished-projects').querySelector('ul').querySelectorAll('li')) {
            variable.querySelector('button:last-child').addEventListener('click', this.moveProject);
        }
    }

    moveProject() {
        document.getElementById('active-projects').querySelector('ul').append(this.parentNode);
        let newButtom = document.createElement('button')
        newButtom.innerHTML = 'Finish';
        this.parentNode.append(newButtom);
        this.remove();
        Lists.update();
    }
}

class Lists {
    static update() {
        const ActiveProjectsList = new ActiveProject();
        const FinishedProjectsList = new FinishedProject();
    }
}

class App {
    static init() {
        const ProjectsList = new Project();
        Lists.update();
    }
}

App.init();