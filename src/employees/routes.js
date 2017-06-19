import Employee from './model'

const routes = (api) => {
  api.route('/employees')
    .get((req, res) => {
      Employee.find()
        .then((employees) => {
          res.json({
            success: true,
            data: employees
          })
        })
        .catch((error) => {
          res.status(500).json({ 
            success: false,
            message: error.message,
            data: []
          })
        })
    })
    .post((req, res) => {
      const employe = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        participation: req.body.participation
      })

      employe.save()
        .then(employee => res.json({
          success: true,
          data: employee
        }))
        .catch((err) => {
          res.status(400).json({
            success: false, 
            message: err.message,
            data: []
          })
        })
    })

  api.route('/employees/:id')
    .get((req, res) => {
      Employee.findById(req.params.id)
        .then((employee) => {
          if (employee) {
            res.json({
              success: true,
              data: employee
            })
          } else {
            res.sendStatus(404)
          }
        })
        .catch((error) => {
          res.status(404).json({ 
            success: false,
            message: error.message,
            data: []
          })
        })
    })
    .put((req, res) => {
      res.end('PUT /employees/:id')
    })
    .delete((req, res) => {
      res.end('DELETE /employees/:id')
    })
}

export default routes