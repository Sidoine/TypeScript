///<reference path="fourslash.ts"/>

////interface I {
////    /*defFNumber*/f(x: number): number;
////    /*defFString*/f(x: string): string;
////}
////const i: I = undefined;
////i./*useFNumber*/f(0);
////i./*useFString*/f("");

goTo.marker("useFNumber");
goTo.definition();
verify.caretAtMarker("defFNumber");

//goTo.marker("useFString");
//goTo.definition();
//verify.caretAtMarker("defFString");
