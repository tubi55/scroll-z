import GlobalStyles from './Styles/GlobalStyles';
import Panels from './Panels';
import Btns from './Btns';
import Anime from './asset/anim';

import { useEffect, useState, useRef } from 'react';

function App() {
	const [Scrolled, setScrolled] = useState(0);
	const [Index, setIndex] = useState(0);
	const [Active, setActive] = useState(0);
	//프레임의 원근감과 z축에서의 박스간의 거리, 전체 문서 높이값에 영향
	const distance = useRef(5000);
	const speed = useRef(500);

	useEffect(() => {
		document.body.style.height = distance.current * 5 + 'px';

		window.addEventListener('scroll', () => {
			setScrolled(window.scrollY);

			for (let i = 0; i < 5; i++) {
				if (window.scrollY >= i * distance.current) setActive(i);
			}
		});
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: distance.current * Index,
			duration: speed.current,
		});
	}, [Index]);

	return (
		<>
			<GlobalStyles />
			<Panels Scrolled={Scrolled} distance={distance} />
			<Btns setIndex={setIndex} Active={Active} />
		</>
	);
}

export default App;
