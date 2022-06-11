import _ from 'lodash'
import numRef from './ref.json'

export function numToWord(num){
    return _.reduce(num, (accum, ref) => {
        return ref.num === num ? ref.word : accum
    }, '')
}

export function wordToNum(word) {
    return _.reduce(word, (accum, ref) => {
        return ref.word === word && word.toLowerCase() ? ref.num : accum
    }, -1)
}