#!/bin/env node
const innerSearch = require('../lib/findAndCd')

const args = process.argv.slice(2)
const folderToFind = args[0]
const folderToSearch = args[1] || process.cwd()

const values = innerSearch(folderToFind, folderToSearch)
if (values.length != 0)
    console.log(values.join(" "))
