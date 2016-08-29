///<reference path="fourslash.ts"/>

////class A {
////    /*ctr*/constructor() {}
////}
////class B extends A {}
////class C extends B {
////    constructor() {
////        /*super*/super();
////    }
////}
////class D {
////    constructor() {
////        /*superBroken*/super();
////    }
////}

goTo.marker("super");
goTo.definition();
verify.caretAtMarker("ctr");

goTo.marker("superBroken");
verify.definitionCountIs(0);

//TODO: test w/ overloads
