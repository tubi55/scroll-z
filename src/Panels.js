import styled from 'styled-components';

const Section = styled.section`
	position: fixed;
	width: 1200px;
	height: 700px;
	left: 50%;
	top: 50%;
	margin-left: -600px;
	margin-top: -350px;
	//prop으로 전달받은 distance값으로 원근감 설정
	perspective: ${(props) => props.perspective - 200};
	z-index: 1;
	border: 1px solid red;
`;

const Article = styled.article`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.3;
	background: blue;
	font-size: 100px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Panels({ Scrolled, distance }) {
	return (
		<Section perspective={distance.current}>
			{[0, 1, 2, 3, 4].map((num) => {
				return (
					<Article
						key={num}
						style={{
							transform: `translateZ(${-distance.current * num + Scrolled}px)`,
						}}>
						{num}
					</Article>
				);
			})}
		</Section>
	);
}

export default Panels;
