///<reference path="fourslash.ts"/>

////class C {
////    /*ctr*/constructor() {}
////}
////class D extends C {
////    constructor() {
////        /*super*/super();
////    }
////}

goTo.marker("super");
goTo.definition();
verify.caretAtMarker("ctr");
