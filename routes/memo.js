var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/rst_memo');
var Schema = mongoose.Schema;

//메모 모델을 정의합니다.
var Memo = new Schema({
	author: String,
	contents: String,
	date: Date
});

var memoModel = mongoose.model('Memo', Memo);

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

//모든 메모 목록을 반환합니다.
exports.load = function(req, res) {
	memoModel.find({}, function(err, data) {
		console.log(data);

		res.json(data);
	});
};

//메모 쓰기 요청을 처리합니다.
exports.write = function(req, res) {
	var author = req.body.author;
	var contents = req.body.contents;
	var date = Date.now();

	var memo = new memoModel();

	memo.author = author;
	memo.contents = contents;
	memo.date = date;
	memo.comments = [];

	memo.save(function (err) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
};

//메모 삭제 요청을 처리합니다.
exports.del = function(req, res) {
	var _id = req.body._id;

	memoModel.remove({_id: _id}, function(err, result) {
		if (err) {
			throw err;
		}
		else {
			res.json({status: "SUCCESS"});
		}
	});
};

//메모 수정 요청을 처리합니다.
exports.modify = function(req, res) {
	var _id = req.body._id;
	var contents = req.body.contents;


	memoModel.findOne({_id: _id}, function(err, memo) {
		if (err) {
			throw err;
		}
		else {
			memo.contents = contents;

			memo.save(function (err) {
				if (err) {
					throw err;
				}
				else {
					res.json({status: "SUCCESS"});
				}
			});
		}
	});
};
