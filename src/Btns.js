import styled from 'styled-components';

const ScrollBtns = styled.ul`
	position: fixed;
	left: 100px;
	top: 300px;
	z-index: 2;

	li {
		margin-bottom: 20px;
		cursor: pointer;

		&.on {
			color: blue;
			font-weight: bold;
		}
	}
`;

function Btns({ setIndex, Active }) {
	return (
		<ScrollBtns className='scrollNavi'>
			{[0, 1, 2, 3, 4].map((num) => {
				let on = '';
				if (num === Active) on = 'on';
				return (
					<li
						key={num}
						className={on}
						onClick={() => setIndex(num)}>{`Box${num}`}</li>
				);
			})}
		</ScrollBtns>
	);
}

export default Btns;
