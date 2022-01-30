document.addEventListener('DOMContentLoaded', function () {
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	const nav = document.querySelector('.navbar')
	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
})
