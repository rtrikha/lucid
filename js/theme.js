var breakPoint1, breakPoint2, breakPoint3, breakPoint4;

const letterSpacingValue = -30;
const lineHeightValue = 0.56;

const stock = {
	appBackground: '#0D0D0D',
	foregroundHigh: '#FFFFFF',
	foregroundMed: '#A1A1A6',
	foregroundLow: '#4C4C4E',
	backgroundHigh: '#4C4C4E',
	backgroundMed: '#1D1D1F',
	backgroundLow: ' #000000',
	toneForeground: '#6E6E73',
	toneBackground: '#7A849D'
};
const lucid = {
	appBackground: '#0D0D0D',
	foregroundHigh: '#FFFFFF',
	foregroundMed: '#A1A1A6',
	foregroundLow: '#4C4C4E',
	backgroundHigh: '#4C4C4E',
	backgroundMed: '#1D1D1F',
	backgroundLow: ' #000000',
	toneForeground: '#61BEA2',
	toneBackground: '#529CA0'
};

function applyColourTheme(themeName) {
	document.documentElement.style.setProperty('--a-b', themeName.appBackground);
	document.documentElement.style.setProperty('--f-h', themeName.foregroundHigh);
	document.documentElement.style.setProperty('--f-m', themeName.foregroundMed);
	document.documentElement.style.setProperty('--f-l', themeName.foregroundLow);
	document.documentElement.style.setProperty('--b-h', themeName.backgroundHigh);
	document.documentElement.style.setProperty('--b-m', themeName.backgroundMed);
	document.documentElement.style.setProperty('--b-l', themeName.backgroundLow);
	document.documentElement.style.setProperty('--t-f', themeName.toneForeground);
	document.documentElement.style.setProperty('--t-b', themeName.toneBackground);
}
function declareBreakpoints(xl, l, m, s) {
	breakPoint1 = xl;
	breakPoint2 = l;
	breakPoint3 = m;
	breakPoint4 = s;
}
function declareFontInBreakpoints(fontType, fontSize1, fontSize2, fontSize3, fontSize4, fontSize5) {
	var lineHeight;
	var letterSpacing;
	function manipluateAttributes() {
		document.documentElement.style.setProperty(`--l-s-${fontType}`, letterSpacing);
		document.documentElement.style.setProperty(`--l-h-${fontType}`, lineHeight);
	}
	function declatreAttributes(fontSize) {
		lineHeight = `${Math.round(parseInt(fontSize, 10) / lineHeightValue)}px`;
		letterSpacing = `${(parseInt(fontSize, 10) / letterSpacingValue).toFixed(1)}px`;
	}
	if (screen.width >= breakPoint1) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize1);
		declatreAttributes(fontSize1);
		manipluateAttributes();
	} else if (screen.width < breakPoint1 && screen.width > breakPoint2) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize2);
		declatreAttributes(fontSize2);
		manipluateAttributes();
	} else if (screen.width < breakPoint2 && screen.width > breakPoint3) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize3);
		declatreAttributes(fontSize3);
		manipluateAttributes();
	} else if (screen.width < breakPoint3 && screen.width > breakPoint4) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize4);
		declatreAttributes(fontSize4);
		manipluateAttributes();
	} else if (screen.width < breakPoint4) {
		document.documentElement.style.setProperty(`--f-t-${fontType}`, fontSize5);
		declatreAttributes(fontSize5);
		manipluateAttributes();
	}
}

// define the theme here

applyColourTheme(lucid);

declareBreakpoints(1440, 900, 720, 560);

declareFontInBreakpoints('cta', '16px', '16px', '14px', '14px', '14px');
declareFontInBreakpoints('h', '22px', '2px', '22px', '20px', '20px');
declareFontInBreakpoints('sh', '14px', '14px', '14px', '13px', '13px');
declareFontInBreakpoints('nt', '12px', '12px', '12px', '11px', '11px');
declareFontInBreakpoints('misc', '13px', '13px', '13px', '13px', '12px');
