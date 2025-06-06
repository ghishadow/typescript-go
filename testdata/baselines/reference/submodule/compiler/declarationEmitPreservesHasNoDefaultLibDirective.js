//// [tests/cases/compiler/declarationEmitPreservesHasNoDefaultLibDirective.ts] ////

//// [declarationEmitPreservesHasNoDefaultLibDirective.ts]
/// <reference no-default-lib="true"/>
class Foo {
    public: string;
}
interface Array<T> {}
interface Boolean {}
interface Function {}
interface IArguments {}
interface Number {}
interface Object {}
interface RegExp {}
interface String {}


//// [declarationEmitPreservesHasNoDefaultLibDirective.js]
/// <reference no-default-lib="true"/>
class Foo {
    public;
}


//// [declarationEmitPreservesHasNoDefaultLibDirective.d.ts]
declare class Foo {
    public: string;
}
interface Array<T> {
}
interface Boolean {
}
interface Function {
}
interface IArguments {
}
interface Number {
}
interface Object {
}
interface RegExp {
}
interface String {
}
