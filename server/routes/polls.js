const express = require('express'),
      Poll = require('../models/poll'),
      router = express.Router(),
      shortid = require('shortid');

module.exports = (() => {
  'use strict';

  router.post('/:id/:option', (req, res) => {
    let id = req.params.id
    let option = req.params.option

    console.log('option: ',option);

    Poll.findByIdAndUpdate(id, {$inc: { votes: 1 }}, (err, poll) => {
      if(err) throw err
      res.redirect('/')
    })
  })

  router.get('/:id', (req, res) => {
    let id = req.params.id

    Poll.findById(id, (err, result) => {
      if(err) {
        res.json({
          confirmation: 'fail',
          message: err
        })
      }
      res.json({
        confirmation: 'success',
        result
      })
    })
  })

  router.get('/', (req, res) => {
    Poll.find({}, (err, polls) => {
      if(err) throw err
      if(!polls.length) {
        const init = new Poll({
          _id: shortid.generate(),
          name: 'Who\'s your super hero',
          options: [{value: 'Tess', votes: 10}, {value: 'Suzanne', votes: 3}],
          votes: 13
        })
        init.save((err) => {
          if(err) throw err
        })
        res.send([init])
      } else {
        res.send(polls)
      }
    })
  })

  return router
})()
