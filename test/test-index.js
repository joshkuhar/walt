global.DATABASE_URL = 'mongodb://localhost/blog-app-test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var server = require('../main.js');
var Category = require('../server/api/blogger/category/categoryModel');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);


describe('Blog-Category', function() {
  before(function(done) {
    server.runServer(function() {
      Category.create({
        category: "foo", 
        posts:['5877425fe01973075cb47c5f', '58711500ac7bfb11c9da3651']
      }, 
        function() {
          done();
      });
    });
  });
  it('should return category', function(done) {
      chai.request(app)
          .get('/categories')
          .end(function(err, res) {
              res.should.have.status(200);
              res.should.be.an('object');
              done();
          });	
  });
  after(function(done) {
    Category.remove(function() {
        done();
      });
    });
 });

//React Tests
//To see what the result is, console.log(result)

var Landing = require('../js/components/landing/landing');

describe('Landing Component', function() {
    it('Renders the first post component',  function() {
      var title = 'Foo the bar';
      var date = '12';
      var category = 'Bars';
      var content = 'lorem ipsum baconinitious';
      var renderer = TestUtils.createRenderer();
      renderer.render(<Landing 
        title={title}
        date={date}
        category={category}
        content={content} />);
      var result = renderer.getRenderOutput();
      var _n = result.props.children.props.children;
      _n[0].props.children.should.be.a('string');
      _n[1].props.children.should.be.a('string');
      _n[2].props.children.should.be.a('string');
      _n[3].props.children.should.be.a('string');
    });
});
