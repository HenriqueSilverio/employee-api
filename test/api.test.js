import chai from 'chai'
import http from 'chai-http'

import Employee from '../src/employees/model'
import '../src/api'

const expect = chai.expect

chai.use(http)

describe('API', () => {
  const ENDPOINT   = 'http://localhost:3000/employees'
  let mockEmployee = null

  beforeEach((done) => {
    Employee.remove({})
      .then(() => {
        Employee.create([{
          firstName: 'Carlos',
          lastName: 'Moura',
          participation: 5
        }, {
          firstName: 'Fernanda',
          lastName: 'Oliveira',
          participation: 15
        }, {
          firstName: 'Hugo',
          lastName: 'Silva',
          participation: 20
        }, {
          firstName: 'Eliza',
          lastName: 'Souza',
          participation: 20
        }, {
          firstName: 'Anderson',
          lastName: 'Santos',
          participation: 40
        }])
          .then((employees) => {
            mockEmployee = employees[0]
            done()
          })
      })
  })

  describe('GET /employees', () => {
    it('should return all employees', (done) => {
      chai.request(ENDPOINT)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body.data).to.be.a('array')
          expect(res.body.data).to.have.lengthOf(5)
          done()
        })
    })
  })

  describe('POST /employees', () => {
    it('should creates a new employee', (done) => {
      chai.request(ENDPOINT)
        .post('/')
        .send({ firstName: 'John', lastName: 'Doe', participation: 35 })
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body.data.firstName).to.equal('John')
          expect(res.body.data.lastName).to.equal('Doe')
          expect(res.body.data.participation).to.equal(35)
          done()
        })
    })
  })

  describe('GET /employees/:id', () => {
    it('should return a employee by ID', (done) => {
      chai.request(ENDPOINT)
        .get(`/${mockEmployee._id}`)
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body.data.firstName).to.equal('Carlos')
          expect(res.body.data.lastName).to.equal('Moura')
          expect(res.body.data.participation).to.equal(5)
          done()
        })
    })

    it('should return 404 when ID is not found', (done) => {
      chai.request(ENDPOINT)
        .get('/mockInvalidObjectId')
        .end((err, res) => {
          expect(res).to.have.status(404)
          done()
        })
    })
  })

  describe('PUT /employees/:id', () => {
    it('should update a employee by ID')
  })

  describe('DELETE /employees/:id', () => {
    it('should remove a employee by ID')
  })
})