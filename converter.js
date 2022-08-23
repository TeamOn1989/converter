(function() {
    function createAppTitle(title) { /*====================================СОЗДАНИЕ ЗАГОЛОВКА ПРИЛОЖЕНИЯ=========================================*/
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle
    }

    function createConverterForm() { /*================================СОЗДАНИЕ ФОРМЫ ПРИЛОЖЕНИЯ========================================*/
        let appForm = document.createElement('form');
        let inputItem = document.createElement('input');
        let units = document.createElement('select');
        let convertationTarget = document.createElement('p')
        let unitsTarget = document.createElement('select')
        let button = document.createElement('button');
        let output = document.createElement('div');
        let mm = document.createElement('option');
        let sm = document.createElement('option');
        let m = document.createElement('option');
        let targetMM = document.createElement('option')
        let targetSM = document.createElement('option');
        let targetM = document.createElement('option');
        
        mm.textContent = 'Миллиметры';
        sm.textContent = 'Сантиметры';
        m.textContent = 'Метры';
        targetMM.textContent = 'Миллиметры';
        targetSM.textContent = 'Сантиметры';
        targetM.textContent = 'Метры';
        convertationTarget.textContent = 'Конвертировать в'

        

        appForm.classList.add('flex', 'flex-column', 'width');
        inputItem.classList.add('mb-10', 'hei');
        units.classList.add('mb-10', 'hei');
        unitsTarget.classList.add('mb-10', 'hei')
        button.classList.add('btn')
        output.classList.add('out')
        


        inputItem.placeholder = 'Введите число';
        units.placeholder = 'Выберите ед. измерения';
        button.textContent = 'Рассичтать'


        appForm.append(inputItem);
        appForm.append(units);
        appForm.append(convertationTarget)
        appForm.append(unitsTarget)
        appForm.append(button)
        appForm.append(output)        
        units.append(mm);
        units.append(sm);
        units.append(m);
        unitsTarget.append(targetMM);
        unitsTarget.append(targetSM);
        unitsTarget.append(targetM);

        button.addEventListener('click', function(e) {            
            e.preventDefault();

            let res = parseInt(inputItem.value);

            if (units.value === 'Миллиметры' && unitsTarget.value === 'Миллиметры') {
                res = inputItem.value
            } else if (units.value === 'Миллиметры' && unitsTarget.value === 'Сантиметры' && inputItem.value < 10) {
                res = 0
            } else if (units.value === 'Миллиметры' && unitsTarget.value === 'Сантиметры' && inputItem.value >= 10) {
                res = res / 10
            } else if (units.value === 'Миллиметры' && unitsTarget.value === 'Метры' && inputItem.value < 1000) {
                res = 0;
            } else if (units.value === 'Миллиметры' && unitsTarget.value === 'Метры' && inputItem.value >= 1000) {
                res = res / 1000
            } else if (units.value === 'Сантиметры' && unitsTarget.value === 'Миллиметры') {
                res = res * 10
            } else if (units.value === 'Сантиметры' && unitsTarget.value === 'Метры' && inputItem.value < 100) {
                res = 0
            } else if (units.value === 'Сантиметры' && unitsTarget.value === 'Метры' && inputItem.value >= 100) {
                res = res / 100; 
            } else if (units.value === 'Метры' && unitsTarget.value === 'Миллиметры') {
                res = res * 1000;
            } else if (units.value === 'Метры' && unitsTarget.value === 'Сантиметры') {
                res = res * 100
            } else if (units.value === 'Метры' && unitsTarget.value === 'Метры') {
                res = inputItem.value
            }
           
    
            output.textContent = res;
            
        });

        return appForm
        
    }

    document.addEventListener('DOMContentLoaded', function() {
        let container = document.getElementById('converter-app');
        let converterTitle = createAppTitle('Конвертер единиц измерения');
        let converterApp = createConverterForm();

        container.append(converterTitle);
        container.append(converterApp);
    });

    

})();