//// [tests/cases/conformance/ambient/ambientInsideNonAmbientExternalModule.ts] ////

//// [ambientInsideNonAmbientExternalModule.ts]
export declare var x;
export declare function f();
export declare class C { }
export declare enum E { }
export declare module M { }

//// [ambientInsideNonAmbientExternalModule.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
