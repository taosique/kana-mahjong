alphabetType = {
	romaji: { style: "western", index: 1 },
	kiriji: { style: "western", index: 2 },	
	hiragana: { style: "kana", index: 3 },
	katakana: { style: "kana", index: 4 }
}
matchingType = [
	{ name: "Hiragana-Romaji", items: [alphabetType.hiragana, alphabetType.romaji] },
	{ name: "Katakana-Romaji", items: [alphabetType.katakana, alphabetType.romaji] },
	{ name: "Hiragana-Kiriji", items: [alphabetType.hiragana, alphabetType.kiriji] },
	{ name: "Katakana-Kiriji", items: [alphabetType.katakana, alphabetType.kiriji] },
	{ name: "Hiragana-Katakana", items: [alphabetType.hiragana, alphabetType.katakana] }
];

VARIANTS = [
    { name: "variants_a", contents: [
	[1, "a", "&#x430;", "&#x3042;", "&#x30A2;"],
	[2, "i", "&#x438;", "&#x3044;", "&#x30A4;"],
	[3, "u", "&#x443;", "&#x3046;", "&#x30A6;"],
	[4, "e", "&#x44D;", "&#x3048;", "&#x30A8;"],
	[5, "o", "&#x43E;", "&#x304A;", "&#x30AA;"] ]},

    { name: "variants_ka", contents: [
	[6, "ka", "&#x43A;&#x430;", "&#x304B;", "&#x30AB;"],
	[7, "ki", "&#x43A;&#x438;", "&#x304D;", "&#x30AD;"],
	[8, "ku", "&#x43A;&#x443;", "&#x304F;", "&#x30AF;"],
	[9, "ke", "&#x43A;&#x44D;", "&#x3051;", "&#x30B1;"],
	[10, "ko", "&#x43A;&#x43E;", "&#x3053;", "&#x30B3;"] ]},

    { name: "variants_ga", contents: [
	[11, "ga", "&#x433;&#x430;", "&#x304C;", "&#x30AC;"],
	[12, "gi", "&#x433;&#x438;", "&#x304E;", "&#x30AE;"],
	[13, "gu", "&#x433;&#x443;", "&#x3050;", "&#x30B0;"],
	[14, "ge", "&#x433;&#x44D;", "&#x3052;", "&#x30B2;"],
	[15, "go", "&#x433;&#x43E;", "&#x3054;", "&#x30B4;"] ]},

    { name: "variants_sa", contents: [
	[16, "sa", "&#x441;&#x430;", "&#x3055;", "&#x30B5;"],
	[17, "shi", "&#x441;&#x438;", "&#x3057;", "&#x30B7;"],
	[18, "su", "&#x441;&#x443;", "&#x3059;", "&#x30B9;"],
	[19, "se", "&#x441;&#x44D;", "&#x305B;", "&#x30BB;"],
	[20, "so", "&#x441;&#x43E;", "&#x305D;", "&#x30BD;"] ]},

    { name: "variants_za", contents: [
	[21, "za", "&#x434;&#x437;&#x430;", "&#x3056;", "&#x30B6;"],
	[22, "ji", "&#x434;&#x437;&#x438;", "&#x3058;", "&#x30B8;"],
	[23, "zu", "&#x434;&#x437;&#x443;", "&#x305A;", "&#x30BA;"],
	[24, "ze", "&#x434;&#x437;&#x44D;", "&#x305C;", "&#x30BC;"],
	[25, "zo", "&#x434;&#x437;&#x43E;", "&#x305E;", "&#x30BE;"] ]},

    { name: "variants_a", contents: [
	[26, "ta", "&#x442;&#x430;", "&#x305F;", "&#x30BF;"],
	[27, "chi", "&#x442;&#x438;", "&#x3061;", "&#x30C1;"],
	[28, "tsu", "&#x446;&#x443;", "&#x3064;", "&#x30C4;"],
	[29, "te", "&#x442;&#x44D;", "&#x3066;", "&#x30C6;"],
	[30, "to", "&#x442;&#x43E;", "&#x3068;", "&#x30C8;"] ]},

    { name: "variants_da", contents: [
	[31, "da", "&#x434;&#x430;", "&#x3060;", "&#x30C0;"],
	[22, "ji", "&#x434;&#x437;&#x438;", "&#x3062;", "&#x30C2;"],
	[23, "zu", "&#x434;&#x437;&#x443;", "&#x3065;", "&#x30C5;"],
	[32, "de", "&#x434;&#x44D;", "&#x3067;", "&#x30C7;"],
	[33, "do", "&#x434;&#x43E;", "&#x3069;", "&#x30C9;"] ]},

    { name: "variants_na", contents: [
	[34, "na", "&#x43D;&#x430;", "&#x306A;", "&#x30CA;"],
	[35, "ni", "&#x43D;&#x438;", "&#x306B;", "&#x30CB;"],
	[36, "nu", "&#x43D;&#x443;", "&#x306C;", "&#x30CC;"],
	[37, "ne", "&#x43D;&#x44D;", "&#x306D;", "&#x30CD;"],
	[38, "no", "&#x43D;&#x43E;", "&#x306E;", "&#x30CE;"] ]},

    { name: "variants_ha", contents: [
	[39, "ha", "&#x445;&#x430;", "&#x306F;", "&#x30CF;"],
	[40, "hi", "&#x445;&#x438;", "&#x3072;", "&#x30D2;"],
	[41, "fu", "&#x444;&#x443;", "&#x3075;", "&#x30D5;"],
	[42, "he", "&#x445;&#x44D;", "&#x3078;", "&#x30D8;"],
	[43, "ho", "&#x445;&#x43E;", "&#x307B;", "&#x30DB;"] ]},

    { name: "variants_ba", contents: [
	[44, "ba", "&#x431;&#x430;", "&#x3070;", "&#x30D0;"],
	[45, "bi", "&#x431;&#x438;", "&#x3073;", "&#x30D3;"],
	[46, "bu", "&#x431;&#x443;", "&#x3076;", "&#x30D6;"],
	[47, "be", "&#x431;&#x44D;", "&#x3079;", "&#x30D9;"],
	[48, "bo", "&#x431;&#x43E;", "&#x307C;", "&#x30DC;"] ]},

    { name: "variants_pa", contents: [
	[49, "pa", "&#x43F;&#x430;", "&#x3071;", "&#x30D1;"],
	[50, "pi", "&#x43F;&#x438;", "&#x3074;", "&#x30D4;"],
	[51, "pu", "&#x43F;&#x443;", "&#x3077;", "&#x30D7;"],
	[52, "pe", "&#x43F;&#x44D;", "&#x307A;", "&#x30DA;"],
	[53, "po", "&#x43F;&#x43E;", "&#x307D;", "&#x30DD;"] ]},

    { name: "variants_ma", contents: [
	[54, "ma", "&#x43C;&#x430;", "&#x307E;", "&#x30DE;"],
	[55, "mi", "&#x43C;&#x438;", "&#x307F;", "&#x30DF;"],
	[56, "mu", "&#x43C;&#x443;", "&#x3080;", "&#x30E0;"],
	[57, "me", "&#x43C;&#x44D;", "&#x3081;", "&#x30E1;"],
	[58, "mo", "&#x43C;&#x43E;", "&#x3082;", "&#x30E2;"] ]},

    { name: "variants_ya", contents: [
	[59, "ya", "&#x44F;", "&#x3084;", "&#x30E4;"],
	[60, "yu", "&#x44E;", "&#x3086;", "&#x30E6;"],
	[61, "yo", "&#x451;", "&#x3088;", "&#x30E8;"] ]},

    { name: "variants_ra", contents: [
	[62, "ra", "&#x440;&#x430;", "&#x3089;", "&#x30E9;"],
	[63, "ri", "&#x440;&#x438;", "&#x308A;", "&#x30EA;"],
	[64, "ru", "&#x440;&#x443;", "&#x308B;", "&#x30EB;"],
	[65, "re", "&#x440;&#x44D;", "&#x308C;", "&#x30EC;"],
	[66, "ro", "&#x440;&#x443;", "&#x308D;", "&#x30ED;"] ]},

    { name: "variants_wan", contents: [
	[67, "wa", "&#x432;&#x430;", "&#x308F;", "&#x30EF;"],
	[68, "wo", "(&#x43E;)", "&#x3092;", "&#x30F2;"],
	[69, "n", "&#x43D;", "&#x3093;", "&#x30F3;"] ]}
];