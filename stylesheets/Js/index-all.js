$(document).ready(function () {
	$('.hamburger-shell').click(function () {
		$('#menu').slideToggle();
	});
});




/*首頁*/
var content = document.querySelector('.content');
var commodity = [{
	picture: 'https://upload.cc/i1/2020/06/12/coDjMJ.jpg',
	name: '旋轉馬克杯',
	price: 'NT$450',
	sola: ''
}, {
	picture: 'https://upload.cc/i1/2020/06/23/N3cYlg.jpg',
	name: '隨意方便貼',
	price: 'NT$150',
	sola: ''
}, {
	picture: 'https://upload.cc/i1/2020/06/23/HBQyCP.jpg',
	name: '創意插卡',
	price: '<del>NT$300</del>',
	sola: 'NT$100'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/r4YMpl.jpg',
	name: '情人餐具套組',
	price: 'NT$1000',
	sola: ''
}, {
	picture: 'https://upload.cc/i1/2020/06/23/UgQebh.jpg',
	name: '懶人衣架',
	price: 'NT$550',
	sola: ''
}, {
	picture: 'https://upload.cc/i1/2020/06/23/0YXalw.jpg',
	name: '皮夾卡片',
	price: '<del>NT$500</del>',
	sola: 'NT$200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/3oepwI.jpg',
	name: '白色玫瑰花束',
	price: 'NT$750',
	sola: ''
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}];
pagination(commodity, 1)
function pagination(commoditydata, nowPage) {
	const dataTotal = commodity.length;
	const perpage = 8;
	const pageTotal = Math.ceil(dataTotal / perpage);
	console.log(`全部資料:${dataTotal} 每一頁顯示:${perpage}筆 總頁數:${pageTotal}`);
	let currentPage = nowPage;

	if (currentPage > pageTotal) {
		currentPage = pageTotal
	}

	const minData = (currentPage * perpage) - perpage + 1;
	const maxData = (currentPage * perpage);

	const data = [];
	commodity.forEach((item, index) => {
		const num = index + 1;
		if (num >= minData && num <= maxData) {
			data.push(item)
		}
		const page = {
			pageTotal,
			currentPage,
			hasPage: currentPage > 1,
			hasNext: currentPage < pageTotal,
		}
		displayData(data);
		pageBtn(page);
		function displayData(data) {
			let str = '';
			data.forEach((item) => {
				str += `<div class="col-md-6 col-sm-6 col-lg-3 mt-4">
				  <div class="card-deck h-100">
					<div class="card border-0 bg-lightpink">
						  <img src="${item.picture}" class="card-img-top rounded-0"
						  alt="...">
						  <h5 class="card-title text-danger mt-3">${item.name}</h5>
						  <p class="card-text mb-0">${item.price}</p>
						  <p class="card-text text-danger">${item.sola}</p>
						  <a href="shopp-all.html" class="commodity-items"></a>						
					 </div>
					</div>
				</div>`;
			});
			content.innerHTML = str;
		};
	});
}
function pageBtn(page) {
	let str = '';
	const total = page.pageTotal;

	if (page.hasPage) {
		str += `<li class="page-item"><a class="page-link" href="#" data-page="${Number(page.currentPage) - 1}">Previous</a></li>`;
	} else {
		str += `<li class="page-item disabled"><span class="page-link">Previous</span></li>`;
	}


	for (let i = 1; i <= total; i++) {
		if (Number(page.currentPage) === i) {
			str += `<li class="page-item active"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
		} else {
			str += `<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
		}
	};

	if (page.hasNext) {
		str += `<li class="page-item"><a class="page-link" href="#" data-page="${Number(page.currentPage) + 1}">Next</a></li>`;
	} else {
		str += `<li class="page-item disabled"><span class="page-link">Next</span></li>`;
	}

	pageid.innerHTML = str;
}
function switchPage(e) {
	e.preventDefault();
	if (e.target.nodeName !== 'A') return;
	const page = e.target.dataset.page;
	pagination(commodity, page);
}
pageid.addEventListener('click', switchPage);



