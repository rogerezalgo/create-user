const common = {
    _inputTextType: {
        for_name_id: ['secondName', 'firstName', 'pathronym'],
        required: [true, true, false],
        labels: ['Фамилия', 'Имя', 'Отчество'], //атрибуты for, name и id 
    },
    _anotherTypes: {
        types: ['datetime', 'tel'],
        required: [true, false],
        for_name_id: ['birthday', 'phone'], //атрибуты for, name и id 
        labels: ['Дата рождения', 'Номер телефона'],
    },
    _sex: {
        sexLabel: ['Мужской', 'Женский'],
        for_id: ['male', 'female'],
        name: 'sex'
    },
    _selectors: {
        clientGroup: {
            options: ['VIP', 'Проблемные', 'ОМС'],
            multiple: true,
            name_id: 'group' //атрибуты name,  id
        },
        doctor: {
            options: ['Иванов', 'Захаров', 'Чернышёва'],
            name_id: 'doctor',
        }
    },

    get dataTextType() {
        const dataArr = [], //Возвращаемый из геттера массив данных
            data = this._inputTextType.for_name_id
        
        for (let i in data) {
            dataArr.push({
                for: data[i],
                name: data[i],
                id: data[i],
                label: this._inputTextType.labels[i],
                required: this._inputTextType.required[i]
            })
        }

        return dataArr
    },
    get dataAnotherType() {
        const dataArr = [], //Возвращаемый из геттера массив данных
            data = this._anotherTypes.for_name_id

        for (let i in data) {
            dataArr.push({
                type: this._anotherTypes.types[i],
                for: data[i],
                name: data[i],
                id: data[i],
                label: this._anotherTypes.labels[i],
                required: this._anotherTypes.required[i]
            })
        }

        return dataArr
    },
    get sex() {
        const dataArr = [], //Возвращаемый из геттера массив данных
            data = this._sex.for_id

        for (let i in data) {
            dataArr.push({
                name: this._sex.name,
                id: data[i],
                for: data[i],
                label: this._sex.sexLabel[i]
            })
        }

        return dataArr
    },
    get clientGroup() {
        return this._selectors.clientGroup
    },
    get doctors() {
        return this._selectors.doctor
    }
} 

export default common