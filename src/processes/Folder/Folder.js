import React from "react";

export default class Folder{
    constructor(name){
        this.type = "folder";
        this.name = name;
        this.body = [];
    }
}