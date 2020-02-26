#!/bin/env node
const cliSelect = require('cli-select');

const innerSearch = require('../lib/findAndCd')

const args = process.argv.slice(2)
const folderToFind = args[0]
const folderToSearch = args[1] || process.cwd()

const values = innerSearch(folderToFind, folderToSearch)
if (values.length >= 2) {
    cliSelect({values}).then(({value}) => {
        console.log(value)
    }).catch(() => { })
} else if (values.length === 1) {
    console.log(values[0])
}
