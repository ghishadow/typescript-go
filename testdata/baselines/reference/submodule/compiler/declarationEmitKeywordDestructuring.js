//// [tests/cases/compiler/declarationEmitKeywordDestructuring.ts] ////

//// [declarationEmitKeywordDestructuring.ts]
type P = {
    enum: boolean;
    function: boolean;
    abstract: boolean;
    async: boolean;
    await: boolean;
    one: boolean;
};

function f1({ enum: _enum, ...rest }: P) {
    return rest;
}

function f2({ function: _function, ...rest }: P) {
    return rest;
}

function f3({ abstract: _abstract, ...rest }: P) {
    return rest;
}

function f4({ async: _async, ...rest }: P) {
    return rest;
}

function f5({ await: _await, ...rest }: P) {
    return rest;
}


//// [declarationEmitKeywordDestructuring.js]
function f1({ enum: _enum, ...rest }) {
    return rest;
}
function f2({ function: _function, ...rest }) {
    return rest;
}
function f3({ abstract: _abstract, ...rest }) {
    return rest;
}
function f4({ async: _async, ...rest }) {
    return rest;
}
function f5({ await: _await, ...rest }) {
    return rest;
}


//// [declarationEmitKeywordDestructuring.d.ts]
type P = {
    enum: boolean;
    function: boolean;
    abstract: boolean;
    async: boolean;
    await: boolean;
    one: boolean;
};
declare function f1({ enum: _enum, ...rest }: P): {
    function: boolean;
    abstract: boolean;
    async: boolean;
    await: boolean;
    one: boolean;
};
declare function f2({ function: _function, ...rest }: P): {
    enum: boolean;
    abstract: boolean;
    async: boolean;
    await: boolean;
    one: boolean;
};
declare function f3({ abstract: _abstract, ...rest }: P): {
    enum: boolean;
    function: boolean;
    async: boolean;
    await: boolean;
    one: boolean;
};
declare function f4({ async: _async, ...rest }: P): {
    enum: boolean;
    function: boolean;
    abstract: boolean;
    await: boolean;
    one: boolean;
};
declare function f5({ await: _await, ...rest }: P): {
    enum: boolean;
    function: boolean;
    abstract: boolean;
    async: boolean;
    one: boolean;
};
