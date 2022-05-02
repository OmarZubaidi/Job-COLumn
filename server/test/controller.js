const {expect} = require('chai');
const path = require('path');
/* const {app} = require('../index');
const request = require('supertest') */
const controller = require('../controllers')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

describe('controller', () => {
  let req = {}
  const res = {
    send: function(data){
      this.data = data;
      return this;
    },
    json: function(d) {
       console.log("\n : " + d);;
    },
    status: function(s) {
        this.statusCode = s;
        return this;
    }
};

   it('it should return an array of job objects', async ()=>{
      await controller.getAllJobs(req, res);
      expect(res.statusCode).to.eql(200);
      expect(res.data).to.be.an('array');
      expect(res.data).to.have.lengthOf.above(1000);
      /* let testArr = res.body.data.slice(10);
      for(let job of testArr){
        expect(job.hasOwnProperty('applications') && job.hasOwnProperty('jobDescription')).to.be.true;
      } */
  })
})