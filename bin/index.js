#!/bin/env node
const args = process.argv.slice(2)
const folderToFind = args[0]
const folderToSearch = args[1] || process.cwd()
const innerSearch = require('../lib/findAndCd')


const result = innerSearch(folderToFind, folderToSearch)
if (result) console.log(result)