import React, { useEffect, useState, useLayoutEffect } from 'react';

const quotes = [
	'Raz do roku pojedź w miejsce, w którym jeszcze nie byłeś.',
	'Turyści nie wiedzą gdzie byli, podróżnicy nie wiedzą gdzie będą.',
	'Podróżowanie uczy skromności. Widzisz, jak niewiele miejsca zajmujesz w świecie.',
	'Podróżowanie to nie jest coś, do czego się nadajesz. To coś, co robisz. Jak oddychanie.',
	'Nie musisz być bogaczem aby dobrze podróżować.',
];

const styles = {
	position: 'absolute',
	top: '20px',
	color: '#fff',
    fontStyle: 'italic'
};

function InspiringQuote(props) {
	const [quote, setQuote] = useState('Wszytywanie cytatu...');
	const [loading, setLoadin] = useState(true);

	useEffect(() => {
        // ... pobieranie
		setLoadin(false);
	}, []);

    //wykonuje się synchronicznie
	useLayoutEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, [loading]);

	return <p style={styles}>{quote}</p>;
}

export default InspiringQuote;
