var express = require('express');
var mongoose =require('mongoose');
exports.get=function(req,res){
    res.render('register');
};

exports.post= function(req,res,next)
{
var US = require('../model/US');
    console.log('Connect');

    US.create ({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,


    }),function (err, win) {
        if (err) return next(err)
        console.log(err)

    }


    next();
}
