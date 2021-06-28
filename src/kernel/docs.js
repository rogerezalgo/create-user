const docs = {
    _documentType: ['passport', 'certificateOfBirth', 'driverID'],
    _docName: ['Паспорт', 'Свидетельство о рождении', 'Водительское удостоверение'],
    _labels: ['Серия', 'Номер', 'Кем выдан', 'Дата выдачи'],
    _type: ['text', 'text', 'text', 'datetime'],
    _required: [false, false, false, true],
    _name: 'documentType',

    get docType() {
        const dataArr = [] //Возвращаемый из геттера массив данных

        for (let i in this._documentType) {
            dataArr.push({
                doctype: this._documentType[i],
                docName: this._docName[i]
            })
        }

        return dataArr
    },

    get inputs() {
        const dataArr = [] //Возвращаемый из геттера массив данных

        for (let i in this._labels) {
            dataArr.push({
                label: this._labels[i],
                type: this._type[i],
                name: this._name,
                required: this._required[i],
            })
        }

        return dataArr
    }
}
console.log(docs.docType)
export default docs