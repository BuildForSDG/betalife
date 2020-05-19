'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "announcement", deps: []
 * createTable "messages", deps: []
 * createTable "organizers", deps: []
 * createTable "subscriptions", deps: []
 * createTable "super_admins", deps: []
 * createTable "trainees", deps: []
 * createTable "admins", deps: []
 * createTable "permissions", deps: []
 * createTable "admin_permisions", deps: []
 * createTable "audiences", deps: []
 * createTable "interests", deps: []
 * createTable "likes", deps: []
 * createTable "locations", deps: []
 * createTable "skill_categories", deps: []
 * createTable "skill_sponsors", deps: []
 * createTable "skills", deps: []
 * createTable "sponsors", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "email-fixes",
    "created": "2020-05-19T16:48:34.289Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "announcement",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "messages",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "organizers",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "subscriptions",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "super_admins",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "trainees",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "admins",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "permissions",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "admin_permisions",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "audiences",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "interests",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "likes",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "locations",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "skill_categories",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "skill_sponsors",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "skills",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "sponsors",
            {

            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
