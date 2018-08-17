const machineCtrl = require('./controllers/machine.ctrl');
const reportCtrl = require('./controllers/report.ctrl');
const balanceCtrl = require('./controllers/balance.ctrl');
const alertCtrl = require('./controllers/alert.ctrl');

module.exports = (router) => {

  router.route('/').get(function(req, res) {
    res.send('Hooyaa!');
  });

  router.route('/machine/:id/credit').get(function(req, res) {
    machineCtrl.credit(req.params.id).then((credit) => {
      res.json({ credit });
    }, (err) => {
      res.send(err);
    })
  });

  router.route('/machine/:id/status').post(function(req, res) {
    machineCtrl.updateStatus(req.params.id, req.body.status).then((result) => {
      res.json(result)
    }, (err) => {
      res.send(err);
    });
  });

  router.route('/machine/:id/heartbeat').post(function(req, res) {
    machineCtrl.heartbeat(req.params.id).then((machineStatus) => {
      res.json(machineStatus);
    }, (err) => {
      res.send(err);
    });
  });

  router.route('/machine/:id/sell').post((req, res) => {
    machineCtrl.sell(req.params.id).then((result) => {
      res.json(result)
    }, (err) => {
      res.send(err);
    })
  });

  router.route('/machine/list').get(function(req, res) {
    machineCtrl.list().then((machines) => {
      res.json(machines);
    }, (err) => {
      res.send(err);
    });
  });

  router.route('/report').get(function(req, res) {
    reportCtrl.list().then((transactions) => {
      res.json(transactions);
    }, (err) => {
      res.send(err);
    })
  });

  router.route('/alert').get(function(req, res) {
    alertCtrl.list().then((alerts) => {
      res.json(alerts);
    }, (err) => {
      res.send(err);
    })
  });

  router.route('/balance').get((req, res) => {
    balanceCtrl.get().then((balance) => {
      res.json({balance: balance})
    }, (err) => {
      res.send(err);
    })
  })

  router.route('/balance/monitor').get((req, res) => {
    balanceCtrl.monitor()
    res.json({ ok: 1 })
  })


}