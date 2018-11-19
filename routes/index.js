var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var items = [{
		catalog: 'qw',
		label: '器物 Qi Wu'
	}, {
		catalog: 'th',
		label: '图画 Tu Hua'
	}, {
		catalog: 'wy',
		label: '纹印 Wen Yin'
	}, {
		catalog: 'bk',
		label: '边框 Bian Kuang'
	}, {
		catalog: 'mc',
		label: '门窗 Men Chuang'
	}, {
		catalog: 'sp',
		label: '饰品 Shi Pin'
	}];

	var data = [{
		url: '1',
		lablel: '门窗 Men Chuang',
		catalog: 'mc'
	}, {
		url: '2',
		lablel: '门窗 Men Chuang',
		catalog: 'mc'
	}, {
		url: '3',
		lablel: '门窗 Men Chuang',
		catalog: 'mc'
	}, {
		url: '4',
		lablel: '门窗 Men Chuang',
		catalog: 'mc'
	}, {
		url: '5',
		lablel: '门窗 Men Chuang',
		catalog: 'mc'
	}, {
		url: '20',
		lablel: '门窗 Men Chuang',
		catalog: 'mc'
	}, {
		url: '34',
		lablel: '门窗 Men Chuang',
		catalog: 'mc'
	}, {
		url: '35',
		lablel: '门窗 Men Chuang',
		catalog: 'mc'
	}, {
		url: '39',
		lablel: '门窗 Men Chuang',
		catalog: 'mc'
	}, {
		url: '6',
		lablel: '器物 Qi Wu',
		catalog: 'qw'
	}, {
		url: '7',
		lablel: '器物 Qi Wu',
		catalog: 'qw'
	}, {
		url: '8',
		lablel: '器物 Qi Wu',
		catalog: 'qw'
	}, {
		url: '9',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '10',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '11',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '12',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '13',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '14',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '15',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '16',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '17',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '18',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '21',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '22',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '23',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '24',
		lablel: '图画 Tu Hua',
		catalog: 'th'
	}, {
		url: '19',
		lablel: '纹印 Wen Yin',
		catalog: 'wy'
	}, {
		url: '25',
		lablel: '纹印 Wen Yin',
		catalog: 'wy'
	}, {
		url: '26',
		lablel: '纹印 Wen Yin',
		catalog: 'wy'
	}, {
		url: '36',
		lablel: '纹印 Wen Yin',
		catalog: 'wy'
	}, {
		url: '37',
		lablel: '纹印 Wen Yin',
		catalog: 'wy'
	}, {
		url: '35',
		lablel: '纹印 Wen Yin',
		catalog: 'wy'
	}, {
		url: '39',
		lablel: '纹印 Wen Yin',
		catalog: 'wy'
	}, {
		url: '27',
		lablel: '边框 Bian Kuang',
		catalog: 'bk'
	}, {
		url: '28',
		lablel: '边框 Bian Kuang',
		catalog: 'bk'
	}, {
		url: '30',
		lablel: '边框 Bian Kuang',
		catalog: 'bk'
	}, {
		url: '31',
		lablel: '边框 Bian Kuang',
		catalog: 'bk'
	}, {
		url: '32',
		lablel: '边框 Bian Kuang',
		catalog: 'bk'
	}, {
		url: '33',
		lablel: '边框 Bian Kuang',
		catalog: 'bk'
	}, {
		url: '38',
		lablel: '边框 Bian Kuang',
		catalog: 'bk'
	}, {
		url: '40',
		lablel: '饰品 Shi Pin',
		catalog: 'sp'
	}, {
		url: '41',
		lablel: '饰品 Shi Pin',
		catalog: 'sp'
	}, {
		url: '42',
		lablel: '饰品 Shi Pin',
		catalog: 'sp'
	}, {
		url: '43',
		lablel: '饰品 Shi Pin',
		catalog: 'sp'
	}, {
		url: '44',
		lablel: '饰品 Shi Pin',
		catalog: 'sp'
	}];
	res.render('index', {
		title: 'Graduation Project',
		context: data,
		menu: items
	});
});

module.exports = router;