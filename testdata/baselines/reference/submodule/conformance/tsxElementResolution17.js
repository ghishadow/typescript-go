//// [tests/cases/conformance/jsx/tsxElementResolution17.tsx] ////

//// [file.tsx]
declare module JSX {
	interface Element { }
	interface IntrinsicElements { }
}

declare module 'elements1' {
	class MyElement {

	}
}

declare module 'elements2' {
	class MyElement {

	}
}

//// [consumer.tsx]
///<reference path="file.tsx" />
// Should keep s1 and elide s2
import s1 = require('elements1');
import s2 = require('elements2');
<s1.MyElement />;


//// [file.jsx]
//// [consumer.jsx]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="file.tsx" />
// Should keep s1 and elide s2
const s1 = require("elements1");
<s1.MyElement />;
