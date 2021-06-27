const destination = {
    _labels: ['Индекс', 'Страна', 'Область', 'Город', 'Улица', 'Дом'],
    _for_mane: ['index', 'country', 'oblast', 'city', 'street', 'house'],
    _inputType: 'text',
    _required: [false, false, false, true, false, false],

    get getDestination() {
        const dataArr = [] //Возвращаемый из геттера массив данных

        for (let i in this._labels) {
            dataArr.push({
                label: this._labels[i],
                for: this._for_mane[i],
                name: this._for_mane[i],
                type: this._inputType,
                required: this._required[i],
            })
        }

        return dataArr
    }
}

export default destination