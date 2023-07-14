(function() {var implementors = {
"core2":[],
"crossbeam_channel":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"crossbeam_channel/struct.RecvError.html\" title=\"struct crossbeam_channel::RecvError\">RecvError</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"crossbeam_channel/enum.TrySendError.html\" title=\"enum crossbeam_channel::TrySendError\">TrySendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"crossbeam_channel/enum.RecvTimeoutError.html\" title=\"enum crossbeam_channel::RecvTimeoutError\">RecvTimeoutError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"crossbeam_channel/struct.SelectTimeoutError.html\" title=\"struct crossbeam_channel::SelectTimeoutError\">SelectTimeoutError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"crossbeam_channel/enum.TryRecvError.html\" title=\"enum crossbeam_channel::TryRecvError\">TryRecvError</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"crossbeam_channel/enum.SendTimeoutError.html\" title=\"enum crossbeam_channel::SendTimeoutError\">SendTimeoutError</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"crossbeam_channel/struct.SendError.html\" title=\"struct crossbeam_channel::SendError\">SendError</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"crossbeam_channel/struct.TrySelectError.html\" title=\"struct crossbeam_channel::TrySelectError\">TrySelectError</a>"]],
"digest":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"digest/struct.InvalidOutputSize.html\" title=\"struct digest::InvalidOutputSize\">InvalidOutputSize</a>"]],
"either":[["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>,</span>"]],
"getrandom":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"getrandom/struct.Error.html\" title=\"struct getrandom::Error\">Error</a>"]],
"hex":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"hex/enum.FromHexError.html\" title=\"enum hex::FromHexError\">FromHexError</a>"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"proc_macro2/struct.LexError.html\" title=\"struct proc_macro2::LexError\">LexError</a>"]],
"rand_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>"]],
"rayon_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rayon_core/struct.ThreadPoolBuildError.html\" title=\"struct rayon_core::ThreadPoolBuildError\">ThreadPoolBuildError</a>"]],
"serde":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>"]],
"serde_cbor":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"serde_cbor/struct.Error.html\" title=\"struct serde_cbor::Error\">Error</a>"]],
"syn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()