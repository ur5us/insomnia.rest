(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("app", [], factory);
	else if(typeof exports === 'object')
		exports["app"] = factory();
	else
		root["app"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(1);
	
	(0, _app.init)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	
	var _login = __webpack_require__(2);
	
	var login = _interopRequireWildcard(_login);
	
	var _signup = __webpack_require__(156);
	
	var signup = _interopRequireWildcard(_signup);
	
	var _navbar = __webpack_require__(160);
	
	var navbar = _interopRequireWildcard(_navbar);
	
	var _buttons = __webpack_require__(161);
	
	var buttons = _interopRequireWildcard(_buttons);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function init() {
	  login.init(window.location.pathname);
	  signup.init(window.location.pathname);
	  navbar.init(window.location.pathname);
	  buttons.init(window.location.pathname);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(3);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.init = init;
	
	var _session = __webpack_require__(73);
	
	var session = _interopRequireWildcard(_session);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function init(pathname) {
	  var _this = this;
	
	  if (!pathname.match(/^\/app\/login\/$/)) {
	    return;
	  }
	
	  document.querySelector('form').addEventListener('submit', function _callee(e) {
	    var email, password;
	    return _regenerator2.default.async(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            e.preventDefault();
	
	            email = document.querySelector('input[name="email"]').value;
	            password = document.querySelector('input[name="password"]').value;
	            _context.prev = 3;
	            _context.next = 6;
	            return _regenerator2.default.awrap(session.login(email, password));
	
	          case 6:
	            _context.next = 12;
	            break;
	
	          case 8:
	            _context.prev = 8;
	            _context.t0 = _context['catch'](3);
	
	            alert(_context.t0.message);
	            return _context.abrupt('return');
	
	          case 12:
	
	            window.location = '/app';
	
	          case 13:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, null, _this, [[3, 8]]);
	  });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(4);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	module.exports = { "default": module.exports, __esModule: true };
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	"use strict";
	
	var _Symbol = __webpack_require__(6)["default"];
	
	var _Object$create = __webpack_require__(37)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(39)["default"];
	
	var _Promise = __webpack_require__(43)["default"];
	
	!(function (global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };
	
	  runtime.mark = function (genFun) {
	    if (_Object$setPrototypeOf) {
	      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return _Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return _Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new _Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
	
	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function () {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function stop() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	__webpack_require__(36);
	module.exports = __webpack_require__(15).Symbol;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(9)
	  , global         = __webpack_require__(10)
	  , has            = __webpack_require__(11)
	  , DESCRIPTORS    = __webpack_require__(12)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(18)
	  , $fails         = __webpack_require__(13)
	  , shared         = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(22)
	  , uid            = __webpack_require__(24)
	  , wks            = __webpack_require__(23)
	  , keyOf          = __webpack_require__(25)
	  , $names         = __webpack_require__(30)
	  , enumKeys       = __webpack_require__(31)
	  , isArray        = __webpack_require__(32)
	  , anObject       = __webpack_require__(33)
	  , toIObject      = __webpack_require__(26)
	  , createDesc     = __webpack_require__(20)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(35)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 9 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(13)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(9)
	  , createDesc = __webpack_require__(20);
	module.exports = __webpack_require__(12) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(9).setDesc
	  , has = __webpack_require__(11)
	  , TAG = __webpack_require__(23)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(21)('wks')
	  , uid    = __webpack_require__(24)
	  , Symbol = __webpack_require__(10).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(9)
	  , toIObject = __webpack_require__(26);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(27)
	  , defined = __webpack_require__(29);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(28);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(26)
	  , getNames  = __webpack_require__(9).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(9);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(28);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 36 */
/***/ function(module, exports) {



/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	module.exports = __webpack_require__(15).Object.setPrototypeOf;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(42).set});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(9).getDesc
	  , isObject = __webpack_require__(34)
	  , anObject = __webpack_require__(33);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(45);
	__webpack_require__(51);
	__webpack_require__(55);
	module.exports = __webpack_require__(15).Promise;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(46)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(48)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(47)
	  , defined   = __webpack_require__(29);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(35)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(19)
	  , has            = __webpack_require__(11)
	  , Iterators      = __webpack_require__(49)
	  , $iterCreate    = __webpack_require__(50)
	  , setToStringTag = __webpack_require__(22)
	  , getProto       = __webpack_require__(9).getProto
	  , ITERATOR       = __webpack_require__(23)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(9)
	  , descriptor     = __webpack_require__(20)
	  , setToStringTag = __webpack_require__(22)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(23)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var Iterators = __webpack_require__(49);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(53)
	  , step             = __webpack_require__(54)
	  , Iterators        = __webpack_require__(49)
	  , toIObject        = __webpack_require__(26);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(48)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(9)
	  , LIBRARY    = __webpack_require__(35)
	  , global     = __webpack_require__(10)
	  , ctx        = __webpack_require__(16)
	  , classof    = __webpack_require__(56)
	  , $export    = __webpack_require__(14)
	  , isObject   = __webpack_require__(34)
	  , anObject   = __webpack_require__(33)
	  , aFunction  = __webpack_require__(17)
	  , strictNew  = __webpack_require__(57)
	  , forOf      = __webpack_require__(58)
	  , setProto   = __webpack_require__(42).set
	  , same       = __webpack_require__(63)
	  , SPECIES    = __webpack_require__(23)('species')
	  , speciesConstructor = __webpack_require__(64)
	  , asap       = __webpack_require__(65)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , empty      = function(){ /* empty */ }
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(empty), promise;
	  if(sub)test.constructor = function(exec){
	    exec(empty, empty);
	  };
	  (promise = P.resolve(test))['catch'](empty);
	  return promise === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(12)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(70)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(22)(P, PROMISE);
	__webpack_require__(71)(PROMISE);
	Wrapper = __webpack_require__(15)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(72)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(28)
	  , TAG = __webpack_require__(23)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(16)
	  , call        = __webpack_require__(59)
	  , isArrayIter = __webpack_require__(60)
	  , anObject    = __webpack_require__(33)
	  , toLength    = __webpack_require__(61)
	  , getIterFn   = __webpack_require__(62);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(33);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(49)
	  , ITERATOR   = __webpack_require__(23)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(47)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(56)
	  , ITERATOR  = __webpack_require__(23)('iterator')
	  , Iterators = __webpack_require__(49);
	module.exports = __webpack_require__(15).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(33)
	  , aFunction = __webpack_require__(17)
	  , SPECIES   = __webpack_require__(23)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , macrotask = __webpack_require__(66).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(28)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(16)
	  , invoke             = __webpack_require__(67)
	  , html               = __webpack_require__(68)
	  , cel                = __webpack_require__(69)
	  , global             = __webpack_require__(10)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(28)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10).document && document.documentElement;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34)
	  , document = __webpack_require__(10).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(15)
	  , $           = __webpack_require__(9)
	  , DESCRIPTORS = __webpack_require__(12)
	  , SPECIES     = __webpack_require__(23)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(23)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(3);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _stringify = __webpack_require__(78);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	exports.signup = signup;
	exports.login = login;
	exports.subscribe = subscribe;
	exports.getCurrentSessionId = getCurrentSessionId;
	exports.hasSessionId = hasSessionId;
	exports.logout = logout;
	exports.cancelAccount = cancelAccount;
	exports.whoami = whoami;
	
	var _srp = __webpack_require__(80);
	
	var _srp2 = _interopRequireDefault(_srp);
	
	var _crypt = __webpack_require__(142);
	
	var crypt = _interopRequireWildcard(_crypt);
	
	var _fetch = __webpack_require__(148);
	
	var util = _interopRequireWildcard(_fetch);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NO_SESSION = '__NO_SESSION__';
	
	/** Create a new Account for the user */
	function signup(firstName, lastName, rawEmail, rawPassphrase) {
	  var email, passphrase, account, authSecret, derivedSymmetricKey, _ref, publicKey, privateKey, symmetricKeyJWK, encSymmetricJWKMessage, encPrivateJWKMessage;
	
	  return _regenerator2.default.async(function signup$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          email = _sanitizeEmail(rawEmail);
	          passphrase = _sanitizePassphrase(rawPassphrase);
	
	          // Get a fancy new Account object
	
	          _context.next = 4;
	          return _regenerator2.default.awrap(_initAccount(firstName, lastName, email));
	
	        case 4:
	          account = _context.sent;
	          _context.next = 7;
	          return _regenerator2.default.awrap(crypt.deriveKey(passphrase, account.email, account.saltKey));
	
	        case 7:
	          authSecret = _context.sent;
	          _context.next = 10;
	          return _regenerator2.default.awrap(crypt.deriveKey(passphrase, account.email, account.saltEnc));
	
	        case 10:
	          derivedSymmetricKey = _context.sent;
	          _context.next = 13;
	          return _regenerator2.default.awrap(crypt.generateKeyPairJWK());
	
	        case 13:
	          _ref = _context.sent;
	          publicKey = _ref.publicKey;
	          privateKey = _ref.privateKey;
	          _context.next = 18;
	          return _regenerator2.default.awrap(crypt.generateAES256Key());
	
	        case 18:
	          symmetricKeyJWK = _context.sent;
	
	
	          // Compute the verifier key and add it to the Account object
	          account.verifier = _srp2.default.computeVerifier(_getSrpParams(), Buffer.from(account.saltAuth, 'hex'), Buffer.from(account.email, 'utf8'), Buffer.from(authSecret, 'hex')).toString('hex');
	
	          // Encode keypair
	          encSymmetricJWKMessage = crypt.encryptAES(derivedSymmetricKey, (0, _stringify2.default)(symmetricKeyJWK));
	          encPrivateJWKMessage = crypt.encryptAES(symmetricKeyJWK, (0, _stringify2.default)(privateKey));
	
	          // Add keys to account
	
	          account.publicKey = (0, _stringify2.default)(publicKey);
	          account.encPrivateKey = (0, _stringify2.default)(encPrivateJWKMessage);
	          account.encSymmetricKey = (0, _stringify2.default)(encSymmetricJWKMessage);
	
	          return _context.abrupt('return', util.post('/auth/signup', account));
	
	        case 26:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, null, this);
	}
	
	/** Create a new session for the user */
	function login(rawEmail, rawPassphrase) {
	  var email, passphrase, _ref2, saltKey, saltAuth, authSecret, secret1, c, srpA, _ref3, sessionStarterId, srpB, srpM1, _ref4, srpM2, sessionId;
	
	  return _regenerator2.default.async(function login$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	
	          // ~~~~~~~~~~~~~~~ //
	          // Sanitize Inputs //
	          // ~~~~~~~~~~~~~~~ //
	
	          email = _sanitizeEmail(rawEmail);
	          passphrase = _sanitizePassphrase(rawPassphrase);
	
	          // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
	          // Fetch Salt and Submit A To Server //
	          // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
	
	          _context2.next = 4;
	          return _regenerator2.default.awrap(util.post('/auth/login-s', { email: email }));
	
	        case 4:
	          _ref2 = _context2.sent;
	          saltKey = _ref2.saltKey;
	          saltAuth = _ref2.saltAuth;
	          _context2.next = 9;
	          return _regenerator2.default.awrap(crypt.deriveKey(passphrase, email, saltKey));
	
	        case 9:
	          authSecret = _context2.sent;
	          _context2.next = 12;
	          return _regenerator2.default.awrap(crypt.srpGenKey());
	
	        case 12:
	          secret1 = _context2.sent;
	          c = new _srp2.default.Client(_getSrpParams(), Buffer.from(saltAuth, 'hex'), Buffer.from(email, 'utf8'), Buffer.from(authSecret, 'hex'), Buffer.from(secret1, 'hex'));
	          srpA = c.computeA().toString('hex');
	          _context2.next = 17;
	          return _regenerator2.default.awrap(util.post('/auth/login-a', { srpA: srpA, email: email }));
	
	        case 17:
	          _ref3 = _context2.sent;
	          sessionStarterId = _ref3.sessionStarterId;
	          srpB = _ref3.srpB;
	
	
	          // ~~~~~~~~~~~~~~~~~~~~~ //
	          // Compute and Submit M1 //
	          // ~~~~~~~~~~~~~~~~~~~~~ //
	
	          c.setB(new Buffer(srpB, 'hex'));
	          srpM1 = c.computeM1().toString('hex');
	          _context2.next = 24;
	          return _regenerator2.default.awrap(util.post('/auth/login-m1', { srpM1: srpM1, sessionStarterId: sessionStarterId }));
	
	        case 24:
	          _ref4 = _context2.sent;
	          srpM2 = _ref4.srpM2;
	
	
	          // ~~~~~~~~~~~~~~~~~~~~~~~~~ //
	          // Verify Server Identity M2 //
	          // ~~~~~~~~~~~~~~~~~~~~~~~~~ //
	
	          c.checkM2(new Buffer(srpM2, 'hex'));
	
	          // ~~~~~~~~~~~~~~~~~~~~~~ //
	          // Initialize the Session //
	          // ~~~~~~~~~~~~~~~~~~~~~~ //
	
	          // Compute K (used for session ID)
	          sessionId = c.computeK().toString('hex');
	
	          // Store the information for later
	
	          localStorage.setItem('currentSessionId', sessionId);
	
	        case 29:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, null, this);
	}
	
	function subscribe(tokenId, planId) {
	  return util.post('/api/billing/subscriptions', {
	    token: tokenId,
	    quantity: 1,
	    plan: planId
	  });
	}
	
	function getCurrentSessionId() {
	  return localStorage.getItem('currentSessionId') || NO_SESSION;
	}
	
	/** Check if we (think) we have a session */
	function hasSessionId() {
	  return getCurrentSessionId() !== NO_SESSION;
	}
	
	/** Log out and delete session data */
	function logout() {
	  return _regenerator2.default.async(function logout$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.prev = 0;
	          _context3.next = 3;
	          return _regenerator2.default.awrap(util.post('/auth/logout'));
	
	        case 3:
	          _context3.next = 8;
	          break;
	
	        case 5:
	          _context3.prev = 5;
	          _context3.t0 = _context3['catch'](0);
	
	          // Not a huge deal if this fails, but we don't want it to prevent the
	          // user from signing out.
	          console.warn('Failed to logout', _context3.t0);
	
	        case 8:
	
	          localStorage.removeItem('currentSessionId');
	
	        case 9:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, null, this, [[0, 5]]);
	}
	
	function cancelAccount() {
	  return _regenerator2.default.async(function cancelAccount$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          _context4.next = 2;
	          return _regenerator2.default.awrap(util.del('/api/billing/subscriptions'));
	
	        case 2:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, null, this);
	}
	
	function whoami() {
	  return _regenerator2.default.async(function whoami$(_context5) {
	    while (1) {
	      switch (_context5.prev = _context5.next) {
	        case 0:
	          _context5.next = 2;
	          return _regenerator2.default.awrap(util.get('/auth/whoami'));
	
	        case 2:
	        case 'end':
	          return _context5.stop();
	      }
	    }
	  }, null, this);
	}
	
	// ~~~~~~~~~~~~~~~~ //
	// Helper Functions //
	// ~~~~~~~~~~~~~~~~ //
	
	function _initAccount(firstName, lastName, email) {
	  return _regenerator2.default.async(function _initAccount$(_context6) {
	    while (1) {
	      switch (_context6.prev = _context6.next) {
	        case 0:
	          _context6.t0 = email;
	          _context6.t1 = firstName;
	          _context6.t2 = lastName;
	          _context6.next = 5;
	          return _regenerator2.default.awrap(crypt.generateAccountId());
	
	        case 5:
	          _context6.t3 = _context6.sent;
	          _context6.next = 8;
	          return _regenerator2.default.awrap(crypt.getRandomHex());
	
	        case 8:
	          _context6.t4 = _context6.sent;
	          _context6.next = 11;
	          return _regenerator2.default.awrap(crypt.getRandomHex());
	
	        case 11:
	          _context6.t5 = _context6.sent;
	          _context6.next = 14;
	          return _regenerator2.default.awrap(crypt.getRandomHex());
	
	        case 14:
	          _context6.t6 = _context6.sent;
	          return _context6.abrupt('return', {
	            email: _context6.t0,
	            firstName: _context6.t1,
	            lastName: _context6.t2,
	            id: _context6.t3,
	            saltEnc: _context6.t4,
	            saltAuth: _context6.t5,
	            saltKey: _context6.t6
	          });
	
	        case 16:
	        case 'end':
	          return _context6.stop();
	      }
	    }
	  }, null, this);
	}
	
	function _getSrpParams() {
	  return _srp2.default.params[2048];
	}
	
	function _sanitizeEmail(email) {
	  return email.trim().toLowerCase();
	}
	
	function _sanitizePassphrase(passphrase) {
	  return passphrase.trim().normalize('NFKD');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(75)
	var ieee754 = __webpack_require__(76)
	var isArray = __webpack_require__(77)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ },
/* 76 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 77 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(15);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(81);
	
	module.exports.params = __webpack_require__(141);


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	const crypto = __webpack_require__(82),
	      bignum = __webpack_require__(136),
	      Buffer = __webpack_require__(137),
	      assert = __webpack_require__(140);
	
	const zero = bignum(0);
	
	function assert_(val, msg) {
	  if (!val)
	    throw new Error(msg||"assertion");
	}
	
	/*
	 * If a conversion is explicitly specified with the operator PAD(),
	 * the integer will first be implicitly converted, then the resultant
	 * byte-string will be left-padded with zeros (if necessary) until its
	 * length equals the implicitly-converted length of N.
	 *
	 * params:
	 *         n (buffer)       Number to pad
	 *         len (int)        length of the resulting Buffer
	 *
	 * returns: buffer
	 */
	function padTo(n, len) {
	  assertIsBuffer(n, "n");
	  var padding = len - n.length;
	  assert_(padding > -1, "Negative padding.  Very uncomfortable.");
	  var result = new Buffer(len);
	  result.fill(0, 0, padding);
	  n.copy(result, padding);
	  assert.equal(result.length, len);
	  return result;
	};
	
	function padToN(number, params) {
	  assertIsBignum(number);
	  return padTo(number.toBuffer(), params.N_length_bits/8);
	}
	
	function padToH(number, params) {
	  assertIsBignum(number);
	  var hashlen_bits;
	  if (params.hash === "sha1")
	    hashlen_bits = 160;
	  else if (params.hash === "sha256")
	    hashlen_bits = 256;
	  else if (params.hash === "sha512")
	    hashlen_bits = 512;
	  else
	    throw Error("cannot determine length of hash '"+params.hash+"'");
	
	  return padTo(number.toBuffer(), hashlen_bits/8);
	}
	
	function assertIsBuffer(arg, argname) {
	  argname = argname || "arg";
	  assert_(Buffer.isBuffer(arg), "Type error: "+argname+" must be a buffer");
	}
	
	function assertIsNBuffer(arg, params, argname) {
	  argname = argname || "arg";
	  assert_(Buffer.isBuffer(arg), "Type error: "+argname+" must be a buffer");
	  if (arg.length != params.N_length_bits/8)
	    assert_(false, argname+" was "+arg.length+", expected "+(params.N_length_bits/8));
	}
	
	function assertIsBignum(arg) {
	  assert.equal(arg.constructor.name, "BigInteger");
	}
	
	/*
	 * compute the intermediate value x as a hash of three buffers:
	 * salt, identity, and password.  And a colon.  FOUR buffers.
	 *
	 *      x = H(s | H(I | ":" | P))
	 *
	 * params:
	 *         salt (buffer)    salt
	 *         I (buffer)       user identity
	 *         P (buffer)       user password
	 *
	 * returns: x (bignum)      user secret
	 */
	function getx(params, salt, I, P) {
	  assertIsBuffer(salt, "salt (salt)");
	  assertIsBuffer(I, "identity (I)");
	  assertIsBuffer(P, "password (P)");
	  var hashIP = crypto.createHash(params.hash)
	    .update(Buffer.concat([I, new Buffer(':'), P]))
	    .digest();
	  var hashX = crypto.createHash(params.hash)
	    .update(salt)
	    .update(hashIP)
	    .digest();
	  return bignum.fromBuffer(hashX);
	};
	
	/*
	 * The verifier is calculated as described in Section 3 of [SRP-RFC].
	 * We give the algorithm here for convenience.
	 *
	 * The verifier (v) is computed based on the salt (s), user name (I),
	 * password (P), and group parameters (N, g).
	 *
	 *         x = H(s | H(I | ":" | P))
	 *         v = g^x % N
	 *
	 * params:
	 *         params (obj)     group parameters, with .N, .g, .hash
	 *         salt (buffer)    salt
	 *         I (buffer)       user identity
	 *         P (buffer)       user password
	 *
	 * returns: buffer
	 */
	function computeVerifier(params, salt, I, P) {
	  assertIsBuffer(salt, "salt (salt)");
	  assertIsBuffer(I, "identity (I)");
	  assertIsBuffer(P, "password (P)");
	  var v_num = params.g.powm(getx(params, salt, I, P), params.N);
	  return padToN(v_num, params);
	};
	
	/*
	 * calculate the SRP-6 multiplier
	 *
	 * params:
	 *         params (obj)     group parameters, with .N, .g, .hash
	 *
	 * returns: bignum
	 */
	function getk(params) {
	  var k_buf = crypto
	    .createHash(params.hash)
	    .update(padToN(params.N, params))
	    .update(padToN(params.g, params))
	    .digest();
	  return bignum.fromBuffer(k_buf);
	};
	
	/*
	 * Generate a random key
	 *
	 * params:
	 *         bytes (int)      length of key (default=32)
	 *         callback (func)  function to call with err,key
	 *
	 * returns: nothing, but runs callback with a Buffer
	 */
	function genKey(bytes, callback) {
	  // bytes is optional
	  if (arguments.length < 2) {
	    callback = bytes;
	    bytes = 32;
	  }
	  if (typeof callback !== 'function') {
	    throw("Callback required");
	  }
	  crypto.randomBytes(bytes, function(err, buf) {
	    if (err) return callback (err);
	    return callback(null, buf);
	  });
	};
	
	/*
	 * The server key exchange message also contains the server's public
	 * value (B).  The server calculates this value as B = k*v + g^b % N,
	 * where b is a random number that SHOULD be at least 256 bits in length
	 * and k = H(N | PAD(g)).
	 *
	 * Note: as the tests imply, the entire expression is mod N.
	 *
	 * params:
	 *         params (obj)     group parameters, with .N, .g, .hash
	 *         v (bignum)       verifier (stored)
	 *         b (bignum)       server secret exponent
	 *
	 * returns: B (buffer)      the server public message
	 */
	function getB(params, k, v, b) {
	  assertIsBignum(v);
	  assertIsBignum(k);
	  assertIsBignum(b);
	  var N = params.N;
	  var r = k.mul(v).add(params.g.powm(b, N)).mod(N);
	  return padToN(r, params);
	};
	
	/*
	 * The client key exchange message carries the client's public value
	 * (A).  The client calculates this value as A = g^a % N, where a is a
	 * random number that SHOULD be at least 256 bits in length.
	 *
	 * Note: for this implementation, we take that to mean 256/8 bytes.
	 *
	 * params:
	 *         params (obj)     group parameters, with .N, .g, .hash
	 *         a (bignum)       client secret exponent
	 *
	 * returns A (bignum)       the client public message
	 */
	function getA(params, a_num) {
	  assertIsBignum(a_num);
	  if (Math.ceil(a_num.bitLength() / 8) < 256/8) {
	    console.warn("getA: client key length", a_num.bitLength(), "is less than the recommended 256");
	  }
	  return padToN(params.g.powm(a_num, params.N), params);
	};
	
	/*
	 * getu() hashes the two public messages together, to obtain a scrambling
	 * parameter "u" which cannot be predicted by either party ahead of time.
	 * This makes it safe to use the message ordering defined in the SRP-6a
	 * paper, in which the server reveals their "B" value before the client
	 * commits to their "A" value.
	 *
	 * params:
	 *         params (obj)     group parameters, with .N, .g, .hash
	 *         A (Buffer)       client ephemeral public key
	 *         B (Buffer)       server ephemeral public key
	 *
	 * returns: u (bignum)      shared scrambling parameter
	 */
	function getu(params, A, B) {
	  assertIsNBuffer(A, params, "A");
	  assertIsNBuffer(B, params, "B");
	  var u_buf = crypto.createHash(params.hash)
	    .update(A).update(B)
	    .digest();
	  return bignum.fromBuffer(u_buf);
	};
	
	/*
	 * The TLS premaster secret as calculated by the client
	 *
	 * params:
	 *         params (obj)     group parameters, with .N, .g, .hash
	 *         salt (buffer)    salt (read from server)
	 *         I (buffer)       user identity (read from user)
	 *         P (buffer)       user password (read from user)
	 *         a (bignum)       ephemeral private key (generated for session)
	 *         B (bignum)       server ephemeral public key (read from server)
	 *
	 * returns: buffer
	 */
	
	function client_getS(params, k_num, x_num, a_num, B_num, u_num) {
	  assertIsBignum(k_num);
	  assertIsBignum(x_num);
	  assertIsBignum(a_num);
	  assertIsBignum(B_num);
	  assertIsBignum(u_num);
	  var g = params.g;
	  var N = params.N;
	  if (zero.ge(B_num) || N.le(B_num))
	    throw new Error("invalid server-supplied 'B', must be 1..N-1");
	  var S_num = B_num.sub(k_num.mul(g.powm(x_num, N))).powm(a_num.add(u_num.mul(x_num)), N).mod(N);
	  return padToN(S_num, params);
	};
	
	/*
	 * The TLS premastersecret as calculated by the server
	 *
	 * params:
	 *         params (obj)     group parameters, with .N, .g, .hash
	 *         v (bignum)       verifier (stored on server)
	 *         A (bignum)       ephemeral client public key (read from client)
	 *         b (bignum)       server ephemeral private key (generated for session)
	 *
	 * returns: bignum
	 */
	
	function server_getS(params, v_num, A_num, b_num, u_num) {
	  assertIsBignum(v_num);
	  assertIsBignum(A_num);
	  assertIsBignum(b_num);
	  assertIsBignum(u_num);
	  var N = params.N;
	  if (zero.ge(A_num) || N.le(A_num))
	    throw new Error("invalid client-supplied 'A', must be 1..N-1");
	  var S_num = A_num.mul(v_num.powm(u_num, N)).powm(b_num, N).mod(N);
	  return padToN(S_num, params);
	};
	
	/*
	 * Compute the shared session key K from S
	 *
	 * params:
	 *         params (obj)     group parameters, with .N, .g, .hash
	 *         S (buffer)       Session key
	 *
	 * returns: buffer
	 */
	function getK(params, S_buf) {
	  assertIsNBuffer(S_buf, params, "S");
	  return crypto.createHash(params.hash)
	      .update(S_buf)
	      .digest();
	};
	
	function getM1(params, A_buf, B_buf, S_buf) {
	  assertIsNBuffer(A_buf, params, "A");
	  assertIsNBuffer(B_buf, params, "B");
	  assertIsNBuffer(S_buf, params, "S");
	  return crypto.createHash(params.hash)
	    .update(A_buf).update(B_buf).update(S_buf)
	    .digest();
	}
	
	function getM2(params, A_buf, M_buf, K_buf) {
	  assertIsNBuffer(A_buf, params, "A");
	  assertIsBuffer(M_buf, "M");
	  assertIsBuffer(K_buf, "K");
	  return crypto.createHash(params.hash)
	    .update(A_buf).update(M_buf).update(K_buf)
	    .digest();
	}
	
	function equal(buf1, buf2) {
	  // constant-time comparison. A drop in the ocean compared to our
	  // non-constant-time modexp operations, but still good practice.
	  var mismatch = buf1.length - buf2.length;
	  if (mismatch) {
	    return false;
	  }
	  for (var i = 0; i < buf1.length; i++) {
	    mismatch |= buf1[i] ^ buf2[i];
	  }
	  return mismatch === 0;
	}
	
	function Client(params, salt_buf, identity_buf, password_buf, secret1_buf) {
	  if (!(this instanceof Client)) {
	    return new Client(params, salt_buf, identity_buf, password_buf, secret1_buf);
	  }
	  assertIsBuffer(salt_buf, "salt (salt)");
	  assertIsBuffer(identity_buf, "identity (I)");
	  assertIsBuffer(password_buf, "password (P)");
	  assertIsBuffer(secret1_buf, "secret1");
	  this._private = { params: params,
	                    k_num: getk(params),
	                    x_num: getx(params, salt_buf, identity_buf, password_buf),
	                    a_num: bignum.fromBuffer(secret1_buf) };
	  this._private.A_buf = getA(params, this._private.a_num);
	}
	
	Client.prototype = {
	  computeA: function computeA() {
	    return this._private.A_buf;
	  },
	  setB: function setB(B_buf) {
	    var p = this._private;
	    var B_num = bignum.fromBuffer(B_buf);
	    var u_num = getu(p.params, p.A_buf, B_buf);
	    var S_buf = client_getS(p.params, p.k_num, p.x_num, p.a_num, B_num, u_num);
	    p.K_buf = getK(p.params, S_buf);
	    p.M1_buf = getM1(p.params, p.A_buf, B_buf, S_buf);
	    p.M2_buf = getM2(p.params, p.A_buf, p.M1_buf, p.K_buf);
	    p.u_num = u_num; // only for tests
	    p.S_buf = S_buf; // only for tests
	  },
	  computeM1: function computeM1() {
	    if (this._private.M1_buf === undefined)
	      throw new Error("incomplete protocol");
	    return this._private.M1_buf;
	  },
	  checkM2: function checkM2(serverM2_buf) {
	    if (!equal(this._private.M2_buf, serverM2_buf))
	      throw new Error("server is not authentic");
	  },
	  computeK: function computeK() {
	    if (this._private.K_buf === undefined)
	      throw new Error("incomplete protocol");
	    return this._private.K_buf;
	  }
	};
	
	function Server(params, verifier_buf, secret2_buf) {
	  if (!(this instanceof Server))  {
	    return new Server(params, verifier_buf, secret2_buf);
	  }
	  assertIsBuffer(verifier_buf, "verifier");
	  assertIsBuffer(secret2_buf, "secret2");
	  this._private = { params: params,
	                    k_num: getk(params),
	                    b_num: bignum.fromBuffer(secret2_buf),
	                    v_num: bignum.fromBuffer(verifier_buf) };
	  this._private.B_buf = getB(params, this._private.k_num,
	                             this._private.v_num, this._private.b_num);
	}
	
	Server.prototype = {
	  computeB: function computeB() {
	    return this._private.B_buf;
	  },
	  setA: function setA(A_buf) {
	    var p = this._private;
	    var A_num = bignum.fromBuffer(A_buf);
	    var u_num = getu(p.params, A_buf, p.B_buf);
	    var S_buf = server_getS(p.params, p.v_num, A_num, p.b_num, u_num);
	    p.K_buf = getK(p.params, S_buf);
	    p.M1_buf = getM1(p.params, A_buf, p.B_buf, S_buf);
	    p.M2_buf = getM2(p.params, A_buf, p.M1_buf, p.K_buf);
	    p.u_num = u_num; // only for tests
	    p.S_buf = S_buf; // only for tests
	  },
	  checkM1: function checkM1(clientM1_buf) {
	    if (this._private.M1_buf === undefined)
	      throw new Error("incomplete protocol");
	    if (!equal(this._private.M1_buf, clientM1_buf))
	      throw new Error("client did not use the same password");
	    return this._private.M2_buf;
	  },
	  computeK: function computeK() {
	    if (this._private.K_buf === undefined)
	      throw new Error("incomplete protocol");
	    return this._private.K_buf;
	  }
	};
	
	module.exports = {
	  params: __webpack_require__(141),
	  genKey: genKey,
	  computeVerifier: computeVerifier,
	  Client: Client,
	  Server: Server
	};


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var rng = __webpack_require__(83)
	
	function error () {
	  var m = [].slice.call(arguments).join(' ')
	  throw new Error([
	    m,
	    'we accept pull requests',
	    'http://github.com/dominictarr/crypto-browserify'
	    ].join('\n'))
	}
	
	exports.createHash = __webpack_require__(85)
	
	exports.createHmac = __webpack_require__(97)
	
	exports.randomBytes = function(size, callback) {
	  if (callback && callback.call) {
	    try {
	      callback.call(this, undefined, new Buffer(rng(size)))
	    } catch (err) { callback(err) }
	  } else {
	    return new Buffer(rng(size))
	  }
	}
	
	function each(a, f) {
	  for(var i in a)
	    f(a[i], i)
	}
	
	exports.getHashes = function () {
	  return ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
	}
	
	var p = __webpack_require__(98)(exports)
	exports.pbkdf2 = p.pbkdf2
	exports.pbkdf2Sync = p.pbkdf2Sync
	__webpack_require__(100)(exports, module.exports);
	
	// the least I can do is make error messages for the rest of the node.js/crypto api.
	each(['createCredentials'
	, 'createSign'
	, 'createVerify'
	, 'createDiffieHellman'
	], function (name) {
	  exports[name] = function () {
	    error('sorry,', name, 'is not implemented yet')
	  }
	})
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function() {
	  var g = ('undefined' === typeof window ? global : window) || {}
	  _crypto = (
	    g.crypto || g.msCrypto || __webpack_require__(84)
	  )
	  module.exports = function(size) {
	    // Modern Browsers
	    if(_crypto.getRandomValues) {
	      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
	      /* This will not work in older browsers.
	       * See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
	       */
	    
	      _crypto.getRandomValues(bytes);
	      return bytes;
	    }
	    else if (_crypto.randomBytes) {
	      return _crypto.randomBytes(size)
	    }
	    else
	      throw new Error(
	        'secure random number generation not supported by this browser\n'+
	        'use chrome, FireFox or Internet Explorer 11'
	      )
	  }
	}())
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(74).Buffer))

/***/ },
/* 84 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(86)
	
	var md5 = toConstructor(__webpack_require__(94))
	var rmd160 = toConstructor(__webpack_require__(96))
	
	function toConstructor (fn) {
	  return function () {
	    var buffers = []
	    var m= {
	      update: function (data, enc) {
	        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
	        buffers.push(data)
	        return this
	      },
	      digest: function (enc) {
	        var buf = Buffer.concat(buffers)
	        var r = fn(buf)
	        buffers = null
	        return enc ? r.toString(enc) : r
	      }
	    }
	    return m
	  }
	}
	
	module.exports = function (alg) {
	  if('md5' === alg) return new md5()
	  if('rmd160' === alg) return new rmd160()
	  return createHash(alg)
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var exports = module.exports = function (alg) {
	  var Alg = exports[alg]
	  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
	  return new Alg()
	}
	
	var Buffer = __webpack_require__(74).Buffer
	var Hash   = __webpack_require__(87)(Buffer)
	
	exports.sha1 = __webpack_require__(88)(Buffer, Hash)
	exports.sha256 = __webpack_require__(92)(Buffer, Hash)
	exports.sha512 = __webpack_require__(93)(Buffer, Hash)


/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = function (Buffer) {
	
	  //prototype class for hash functions
	  function Hash (blockSize, finalSize) {
	    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
	    this._finalSize = finalSize
	    this._blockSize = blockSize
	    this._len = 0
	    this._s = 0
	  }
	
	  Hash.prototype.init = function () {
	    this._s = 0
	    this._len = 0
	  }
	
	  Hash.prototype.update = function (data, enc) {
	    if ("string" === typeof data) {
	      enc = enc || "utf8"
	      data = new Buffer(data, enc)
	    }
	
	    var l = this._len += data.length
	    var s = this._s = (this._s || 0)
	    var f = 0
	    var buffer = this._block
	
	    while (s < l) {
	      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
	      var ch = (t - f)
	
	      for (var i = 0; i < ch; i++) {
	        buffer[(s % this._blockSize) + i] = data[i + f]
	      }
	
	      s += ch
	      f += ch
	
	      if ((s % this._blockSize) === 0) {
	        this._update(buffer)
	      }
	    }
	    this._s = s
	
	    return this
	  }
	
	  Hash.prototype.digest = function (enc) {
	    // Suppose the length of the message M, in bits, is l
	    var l = this._len * 8
	
	    // Append the bit 1 to the end of the message
	    this._block[this._len % this._blockSize] = 0x80
	
	    // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
	    this._block.fill(0, this._len % this._blockSize + 1)
	
	    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
	      this._update(this._block)
	      this._block.fill(0)
	    }
	
	    // to this append the block which is equal to the number l written in binary
	    // TODO: handle case where l is > Math.pow(2, 29)
	    this._block.writeInt32BE(l, this._blockSize - 4)
	
	    var hash = this._update(this._block) || this._hash()
	
	    return enc ? hash.toString(enc) : hash
	  }
	
	  Hash.prototype._update = function () {
	    throw new Error('_update must be implemented by subclass')
	  }
	
	  return Hash
	}


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */
	
	var inherits = __webpack_require__(89).inherits
	
	module.exports = function (Buffer, Hash) {
	
	  var A = 0|0
	  var B = 4|0
	  var C = 8|0
	  var D = 12|0
	  var E = 16|0
	
	  var W = new (typeof Int32Array === 'undefined' ? Array : Int32Array)(80)
	
	  var POOL = []
	
	  function Sha1 () {
	    if(POOL.length)
	      return POOL.pop().init()
	
	    if(!(this instanceof Sha1)) return new Sha1()
	    this._w = W
	    Hash.call(this, 16*4, 14*4)
	
	    this._h = null
	    this.init()
	  }
	
	  inherits(Sha1, Hash)
	
	  Sha1.prototype.init = function () {
	    this._a = 0x67452301
	    this._b = 0xefcdab89
	    this._c = 0x98badcfe
	    this._d = 0x10325476
	    this._e = 0xc3d2e1f0
	
	    Hash.prototype.init.call(this)
	    return this
	  }
	
	  Sha1.prototype._POOL = POOL
	  Sha1.prototype._update = function (X) {
	
	    var a, b, c, d, e, _a, _b, _c, _d, _e
	
	    a = _a = this._a
	    b = _b = this._b
	    c = _c = this._c
	    d = _d = this._d
	    e = _e = this._e
	
	    var w = this._w
	
	    for(var j = 0; j < 80; j++) {
	      var W = w[j] = j < 16 ? X.readInt32BE(j*4)
	        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)
	
	      var t = add(
	        add(rol(a, 5), sha1_ft(j, b, c, d)),
	        add(add(e, W), sha1_kt(j))
	      )
	
	      e = d
	      d = c
	      c = rol(b, 30)
	      b = a
	      a = t
	    }
	
	    this._a = add(a, _a)
	    this._b = add(b, _b)
	    this._c = add(c, _c)
	    this._d = add(d, _d)
	    this._e = add(e, _e)
	  }
	
	  Sha1.prototype._hash = function () {
	    if(POOL.length < 100) POOL.push(this)
	    var H = new Buffer(20)
	    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
	    H.writeInt32BE(this._a|0, A)
	    H.writeInt32BE(this._b|0, B)
	    H.writeInt32BE(this._c|0, C)
	    H.writeInt32BE(this._d|0, D)
	    H.writeInt32BE(this._e|0, E)
	    return H
	  }
	
	  /*
	   * Perform the appropriate triplet combination function for the current
	   * iteration
	   */
	  function sha1_ft(t, b, c, d) {
	    if(t < 20) return (b & c) | ((~b) & d);
	    if(t < 40) return b ^ c ^ d;
	    if(t < 60) return (b & c) | (b & d) | (c & d);
	    return b ^ c ^ d;
	  }
	
	  /*
	   * Determine the appropriate additive constant for the current iteration
	   */
	  function sha1_kt(t) {
	    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
	           (t < 60) ? -1894007588 : -899497514;
	  }
	
	  /*
	   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	   * to work around bugs in some JS interpreters.
	   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
	   *
	   */
	  function add(x, y) {
	    return (x + y ) | 0
	  //lets see how this goes on testling.
	  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  //  return (msw << 16) | (lsw & 0xFFFF);
	  }
	
	  /*
	   * Bitwise rotate a 32-bit number to the left.
	   */
	  function rol(num, cnt) {
	    return (num << cnt) | (num >>> (32 - cnt));
	  }
	
	  return Sha1
	}


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(90);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(91);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)))

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */
	
	var inherits = __webpack_require__(89).inherits
	
	module.exports = function (Buffer, Hash) {
	
	  var K = [
	      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
	      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
	      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
	      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
	      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
	      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
	      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
	      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
	      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
	      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
	      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
	      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
	      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
	      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
	      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
	      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
	    ]
	
	  var W = new Array(64)
	
	  function Sha256() {
	    this.init()
	
	    this._w = W //new Array(64)
	
	    Hash.call(this, 16*4, 14*4)
	  }
	
	  inherits(Sha256, Hash)
	
	  Sha256.prototype.init = function () {
	
	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0
	
	    this._len = this._s = 0
	
	    return this
	  }
	
	  function S (X, n) {
	    return (X >>> n) | (X << (32 - n));
	  }
	
	  function R (X, n) {
	    return (X >>> n);
	  }
	
	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }
	
	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }
	
	  function Sigma0256 (x) {
	    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
	  }
	
	  function Sigma1256 (x) {
	    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
	  }
	
	  function Gamma0256 (x) {
	    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
	  }
	
	  function Gamma1256 (x) {
	    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
	  }
	
	  Sha256.prototype._update = function(M) {
	
	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var T1, T2
	
	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0
	
	    for (var j = 0; j < 64; j++) {
	      var w = W[j] = j < 16
	        ? M.readInt32BE(j * 4)
	        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]
	
	      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w
	
	      T2 = Sigma0256(a) + Maj(a, b, c);
	      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
	    }
	
	    this._a = (a + this._a) | 0
	    this._b = (b + this._b) | 0
	    this._c = (c + this._c) | 0
	    this._d = (d + this._d) | 0
	    this._e = (e + this._e) | 0
	    this._f = (f + this._f) | 0
	    this._g = (g + this._g) | 0
	    this._h = (h + this._h) | 0
	
	  };
	
	  Sha256.prototype._hash = function () {
	    var H = new Buffer(32)
	
	    H.writeInt32BE(this._a,  0)
	    H.writeInt32BE(this._b,  4)
	    H.writeInt32BE(this._c,  8)
	    H.writeInt32BE(this._d, 12)
	    H.writeInt32BE(this._e, 16)
	    H.writeInt32BE(this._f, 20)
	    H.writeInt32BE(this._g, 24)
	    H.writeInt32BE(this._h, 28)
	
	    return H
	  }
	
	  return Sha256
	
	}


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(89).inherits
	
	module.exports = function (Buffer, Hash) {
	  var K = [
	    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	  ]
	
	  var W = new Array(160)
	
	  function Sha512() {
	    this.init()
	    this._w = W
	
	    Hash.call(this, 128, 112)
	  }
	
	  inherits(Sha512, Hash)
	
	  Sha512.prototype.init = function () {
	
	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0
	
	    this._al = 0xf3bcc908|0
	    this._bl = 0x84caa73b|0
	    this._cl = 0xfe94f82b|0
	    this._dl = 0x5f1d36f1|0
	    this._el = 0xade682d1|0
	    this._fl = 0x2b3e6c1f|0
	    this._gl = 0xfb41bd6b|0
	    this._hl = 0x137e2179|0
	
	    this._len = this._s = 0
	
	    return this
	  }
	
	  function S (X, Xl, n) {
	    return (X >>> n) | (Xl << (32 - n))
	  }
	
	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }
	
	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }
	
	  Sha512.prototype._update = function(M) {
	
	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var al, bl, cl, dl, el, fl, gl, hl
	
	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0
	
	    al = this._al | 0
	    bl = this._bl | 0
	    cl = this._cl | 0
	    dl = this._dl | 0
	    el = this._el | 0
	    fl = this._fl | 0
	    gl = this._gl | 0
	    hl = this._hl | 0
	
	    for (var i = 0; i < 80; i++) {
	      var j = i * 2
	
	      var Wi, Wil
	
	      if (i < 16) {
	        Wi = W[j] = M.readInt32BE(j * 4)
	        Wil = W[j + 1] = M.readInt32BE(j * 4 + 4)
	
	      } else {
	        var x  = W[j - 15*2]
	        var xl = W[j - 15*2 + 1]
	        var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
	        var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)
	
	        x  = W[j - 2*2]
	        xl = W[j - 2*2 + 1]
	        var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
	        var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)
	
	        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	        var Wi7  = W[j - 7*2]
	        var Wi7l = W[j - 7*2 + 1]
	
	        var Wi16  = W[j - 16*2]
	        var Wi16l = W[j - 16*2 + 1]
	
	        Wil = gamma0l + Wi7l
	        Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
	        Wil = Wil + gamma1l
	        Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
	        Wil = Wil + Wi16l
	        Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)
	
	        W[j] = Wi
	        W[j + 1] = Wil
	      }
	
	      var maj = Maj(a, b, c)
	      var majl = Maj(al, bl, cl)
	
	      var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
	      var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
	      var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
	      var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)
	
	      // t1 = h + sigma1 + ch + K[i] + W[i]
	      var Ki = K[j]
	      var Kil = K[j + 1]
	
	      var ch = Ch(e, f, g)
	      var chl = Ch(el, fl, gl)
	
	      var t1l = hl + sigma1l
	      var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
	      t1l = t1l + chl
	      t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
	      t1l = t1l + Kil
	      t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
	      t1l = t1l + Wil
	      t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)
	
	      // t2 = sigma0 + maj
	      var t2l = sigma0l + majl
	      var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)
	
	      h  = g
	      hl = gl
	      g  = f
	      gl = fl
	      f  = e
	      fl = el
	      el = (dl + t1l) | 0
	      e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	      d  = c
	      dl = cl
	      c  = b
	      cl = bl
	      b  = a
	      bl = al
	      al = (t1l + t2l) | 0
	      a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0
	    }
	
	    this._al = (this._al + al) | 0
	    this._bl = (this._bl + bl) | 0
	    this._cl = (this._cl + cl) | 0
	    this._dl = (this._dl + dl) | 0
	    this._el = (this._el + el) | 0
	    this._fl = (this._fl + fl) | 0
	    this._gl = (this._gl + gl) | 0
	    this._hl = (this._hl + hl) | 0
	
	    this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
	    this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
	    this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
	    this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	    this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
	    this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
	    this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
	    this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
	  }
	
	  Sha512.prototype._hash = function () {
	    var H = new Buffer(64)
	
	    function writeInt64BE(h, l, offset) {
	      H.writeInt32BE(h, offset)
	      H.writeInt32BE(l, offset + 4)
	    }
	
	    writeInt64BE(this._a, this._al, 0)
	    writeInt64BE(this._b, this._bl, 8)
	    writeInt64BE(this._c, this._cl, 16)
	    writeInt64BE(this._d, this._dl, 24)
	    writeInt64BE(this._e, this._el, 32)
	    writeInt64BE(this._f, this._fl, 40)
	    writeInt64BE(this._g, this._gl, 48)
	    writeInt64BE(this._h, this._hl, 56)
	
	    return H
	  }
	
	  return Sha512
	
	}


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */
	
	var helpers = __webpack_require__(95);
	
	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;
	
	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;
	
	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;
	
	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
	
	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
	
	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
	
	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);
	
	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);
	
	}
	
	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}
	
	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}
	
	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}
	
	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var intSize = 4;
	var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
	var chrsz = 8;
	
	function toArray(buf, bigEndian) {
	  if ((buf.length % intSize) !== 0) {
	    var len = buf.length + (intSize - (buf.length % intSize));
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }
	
	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}
	
	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}
	
	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}
	
	module.exports = { hash: hash };
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = ripemd160
	
	
	
	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.
	
	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
	
	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
	
	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	
	// Constants table
	var zl = [
	    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
	var zr = [
	    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
	var sl = [
	     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
	var sr = [
	    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];
	
	var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
	var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];
	
	var bytesToWords = function (bytes) {
	  var words = [];
	  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
	    words[b >>> 5] |= bytes[i] << (24 - b % 32);
	  }
	  return words;
	};
	
	var wordsToBytes = function (words) {
	  var bytes = [];
	  for (var b = 0; b < words.length * 32; b += 8) {
	    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	  }
	  return bytes;
	};
	
	var processBlock = function (H, M, offset) {
	
	  // Swap endian
	  for (var i = 0; i < 16; i++) {
	    var offset_i = offset + i;
	    var M_offset_i = M[offset_i];
	
	    // Swap
	    M[offset_i] = (
	        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	    );
	  }
	
	  // Working variables
	  var al, bl, cl, dl, el;
	  var ar, br, cr, dr, er;
	
	  ar = al = H[0];
	  br = bl = H[1];
	  cr = cl = H[2];
	  dr = dl = H[3];
	  er = el = H[4];
	  // Computation
	  var t;
	  for (var i = 0; i < 80; i += 1) {
	    t = (al +  M[offset+zl[i]])|0;
	    if (i<16){
	        t +=  f1(bl,cl,dl) + hl[0];
	    } else if (i<32) {
	        t +=  f2(bl,cl,dl) + hl[1];
	    } else if (i<48) {
	        t +=  f3(bl,cl,dl) + hl[2];
	    } else if (i<64) {
	        t +=  f4(bl,cl,dl) + hl[3];
	    } else {// if (i<80) {
	        t +=  f5(bl,cl,dl) + hl[4];
	    }
	    t = t|0;
	    t =  rotl(t,sl[i]);
	    t = (t+el)|0;
	    al = el;
	    el = dl;
	    dl = rotl(cl, 10);
	    cl = bl;
	    bl = t;
	
	    t = (ar + M[offset+zr[i]])|0;
	    if (i<16){
	        t +=  f5(br,cr,dr) + hr[0];
	    } else if (i<32) {
	        t +=  f4(br,cr,dr) + hr[1];
	    } else if (i<48) {
	        t +=  f3(br,cr,dr) + hr[2];
	    } else if (i<64) {
	        t +=  f2(br,cr,dr) + hr[3];
	    } else {// if (i<80) {
	        t +=  f1(br,cr,dr) + hr[4];
	    }
	    t = t|0;
	    t =  rotl(t,sr[i]) ;
	    t = (t+er)|0;
	    ar = er;
	    er = dr;
	    dr = rotl(cr, 10);
	    cr = br;
	    br = t;
	  }
	  // Intermediate hash value
	  t    = (H[1] + cl + dr)|0;
	  H[1] = (H[2] + dl + er)|0;
	  H[2] = (H[3] + el + ar)|0;
	  H[3] = (H[4] + al + br)|0;
	  H[4] = (H[0] + bl + cr)|0;
	  H[0] =  t;
	};
	
	function f1(x, y, z) {
	  return ((x) ^ (y) ^ (z));
	}
	
	function f2(x, y, z) {
	  return (((x)&(y)) | ((~x)&(z)));
	}
	
	function f3(x, y, z) {
	  return (((x) | (~(y))) ^ (z));
	}
	
	function f4(x, y, z) {
	  return (((x) & (z)) | ((y)&(~(z))));
	}
	
	function f5(x, y, z) {
	  return ((x) ^ ((y) |(~(z))));
	}
	
	function rotl(x,n) {
	  return (x<<n) | (x>>>(32-n));
	}
	
	function ripemd160(message) {
	  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];
	
	  if (typeof message == 'string')
	    message = new Buffer(message, 'utf8');
	
	  var m = bytesToWords(message);
	
	  var nBitsLeft = message.length * 8;
	  var nBitsTotal = message.length * 8;
	
	  // Add padding
	  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	  );
	
	  for (var i=0 ; i<m.length; i += 16) {
	    processBlock(H, m, i);
	  }
	
	  // Swap endian
	  for (var i = 0; i < 5; i++) {
	      // Shortcut
	    var H_i = H[i];
	
	    // Swap
	    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	  }
	
	  var digestbytes = wordsToBytes(H);
	  return new Buffer(digestbytes);
	}
	
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(85)
	
	var zeroBuffer = new Buffer(128)
	zeroBuffer.fill(0)
	
	module.exports = Hmac
	
	function Hmac (alg, key) {
	  if(!(this instanceof Hmac)) return new Hmac(alg, key)
	  this._opad = opad
	  this._alg = alg
	
	  var blocksize = (alg === 'sha512') ? 128 : 64
	
	  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key
	
	  if(key.length > blocksize) {
	    key = createHash(alg).update(key).digest()
	  } else if(key.length < blocksize) {
	    key = Buffer.concat([key, zeroBuffer], blocksize)
	  }
	
	  var ipad = this._ipad = new Buffer(blocksize)
	  var opad = this._opad = new Buffer(blocksize)
	
	  for(var i = 0; i < blocksize; i++) {
	    ipad[i] = key[i] ^ 0x36
	    opad[i] = key[i] ^ 0x5C
	  }
	
	  this._hash = createHash(alg).update(ipad)
	}
	
	Hmac.prototype.update = function (data, enc) {
	  this._hash.update(data, enc)
	  return this
	}
	
	Hmac.prototype.digest = function (enc) {
	  var h = this._hash.digest()
	  return createHash(this._alg).update(this._opad).update(h).digest(enc)
	}
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var pbkdf2Export = __webpack_require__(99)
	
	module.exports = function (crypto, exports) {
	  exports = exports || {}
	
	  var exported = pbkdf2Export(crypto)
	
	  exports.pbkdf2 = exported.pbkdf2
	  exports.pbkdf2Sync = exported.pbkdf2Sync
	
	  return exports
	}


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(crypto) {
	  function pbkdf2(password, salt, iterations, keylen, digest, callback) {
	    if ('function' === typeof digest) {
	      callback = digest
	      digest = undefined
	    }
	
	    if ('function' !== typeof callback)
	      throw new Error('No callback provided to pbkdf2')
	
	    setTimeout(function() {
	      var result
	
	      try {
	        result = pbkdf2Sync(password, salt, iterations, keylen, digest)
	      } catch (e) {
	        return callback(e)
	      }
	
	      callback(undefined, result)
	    })
	  }
	
	  function pbkdf2Sync(password, salt, iterations, keylen, digest) {
	    if ('number' !== typeof iterations)
	      throw new TypeError('Iterations not a number')
	
	    if (iterations < 0)
	      throw new TypeError('Bad iterations')
	
	    if ('number' !== typeof keylen)
	      throw new TypeError('Key length not a number')
	
	    if (keylen < 0)
	      throw new TypeError('Bad key length')
	
	    digest = digest || 'sha1'
	
	    if (!Buffer.isBuffer(password)) password = new Buffer(password)
	    if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)
	
	    var hLen, l = 1, r, T
	    var DK = new Buffer(keylen)
	    var block1 = new Buffer(salt.length + 4)
	    salt.copy(block1, 0, 0, salt.length)
	
	    for (var i = 1; i <= l; i++) {
	      block1.writeUInt32BE(i, salt.length)
	
	      var U = crypto.createHmac(digest, password).update(block1).digest()
	
	      if (!hLen) {
	        hLen = U.length
	        T = new Buffer(hLen)
	        l = Math.ceil(keylen / hLen)
	        r = keylen - (l - 1) * hLen
	
	        if (keylen > (Math.pow(2, 32) - 1) * hLen)
	          throw new TypeError('keylen exceeds maximum length')
	      }
	
	      U.copy(T, 0, 0, hLen)
	
	      for (var j = 1; j < iterations; j++) {
	        U = crypto.createHmac(digest, password).update(U).digest()
	
	        for (var k = 0; k < hLen; k++) {
	          T[k] ^= U[k]
	        }
	      }
	
	      var destPos = (i - 1) * hLen
	      var len = (i == l ? r : hLen)
	      T.copy(DK, destPos, 0, len)
	    }
	
	    return DK
	  }
	
	  return {
	    pbkdf2: pbkdf2,
	    pbkdf2Sync: pbkdf2Sync
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (crypto, exports) {
	  exports = exports || {};
	  var ciphers = __webpack_require__(101)(crypto);
	  exports.createCipher = ciphers.createCipher;
	  exports.createCipheriv = ciphers.createCipheriv;
	  var deciphers = __webpack_require__(135)(crypto);
	  exports.createDecipher = deciphers.createDecipher;
	  exports.createDecipheriv = deciphers.createDecipheriv;
	  var modes = __webpack_require__(126);
	  function listCiphers () {
	    return Object.keys(modes);
	  }
	  exports.listCiphers = listCiphers;
	};
	


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(102);
	var Transform = __webpack_require__(103);
	var inherits = __webpack_require__(106);
	var modes = __webpack_require__(126);
	var ebtk = __webpack_require__(127);
	var StreamCipher = __webpack_require__(128);
	inherits(Cipher, Transform);
	function Cipher(mode, key, iv) {
	  if (!(this instanceof Cipher)) {
	    return new Cipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cache = new Splitter();
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  iv.copy(this._prev);
	  this._mode = mode;
	}
	Cipher.prototype._transform = function (data, _, next) {
	  this._cache.add(data);
	  var chunk;
	  var thing;
	  while ((chunk = this._cache.get())) {
	    thing = this._mode.encrypt(this, chunk);
	    this.push(thing);
	  }
	  next();
	};
	Cipher.prototype._flush = function (next) {
	  var chunk = this._cache.flush();
	  this.push(this._mode.encrypt(this, chunk));
	  this._cipher.scrub();
	  next();
	};
	
	
	function Splitter() {
	   if (!(this instanceof Splitter)) {
	    return new Splitter();
	  }
	  this.cache = new Buffer('');
	}
	Splitter.prototype.add = function (data) {
	  this.cache = Buffer.concat([this.cache, data]);
	};
	
	Splitter.prototype.get = function () {
	  if (this.cache.length > 15) {
	    var out = this.cache.slice(0, 16);
	    this.cache = this.cache.slice(16);
	    return out;
	  }
	  return null;
	};
	Splitter.prototype.flush = function () {
	  var len = 16 - this.cache.length;
	  var padBuff = new Buffer(len);
	
	  var i = -1;
	  while (++i < len) {
	    padBuff.writeUInt8(len, i);
	  }
	  var out = Buffer.concat([this.cache, padBuff]);
	  return out;
	};
	var modelist = {
	  ECB: __webpack_require__(129),
	  CBC: __webpack_require__(130),
	  CFB: __webpack_require__(132),
	  OFB: __webpack_require__(133),
	  CTR: __webpack_require__(134)
	};
	module.exports = function (crypto) {
	  function createCipheriv(suite, password, iv) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    if (typeof iv === 'string') {
	      iv = new Buffer(iv);
	    }
	    if (typeof password === 'string') {
	      password = new Buffer(password);
	    }
	    if (password.length !== config.key/8) {
	      throw new TypeError('invalid key length ' + password.length);
	    }
	    if (iv.length !== config.iv) {
	      throw new TypeError('invalid iv length ' + iv.length);
	    }
	    if (config.type === 'stream') {
	      return new StreamCipher(modelist[config.mode], password, iv);
	    }
	    return new Cipher(modelist[config.mode], password, iv);
	  }
	  function createCipher (suite, password) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    var keys = ebtk(crypto, password, config.key, config.iv);
	    return createCipheriv(suite, keys.key, keys.iv);
	  }
	  return {
	    createCipher: createCipher,
	    createCipheriv: createCipheriv
	  };
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var uint_max = Math.pow(2, 32);
	function fixup_uint32(x) {
	    var ret, x_pos;
	    ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x;
	    return ret;
	}
	function scrub_vec(v) {
	  var i, _i, _ref;
	  for (i = _i = 0, _ref = v.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
	    v[i] = 0;
	  }
	  return false;
	}
	
	function Global() {
	  var i;
	  this.SBOX = [];
	  this.INV_SBOX = [];
	  this.SUB_MIX = (function() {
	    var _i, _results;
	    _results = [];
	    for (i = _i = 0; _i < 4; i = ++_i) {
	      _results.push([]);
	    }
	    return _results;
	  })();
	  this.INV_SUB_MIX = (function() {
	    var _i, _results;
	    _results = [];
	    for (i = _i = 0; _i < 4; i = ++_i) {
	      _results.push([]);
	    }
	    return _results;
	  })();
	  this.init();
	  this.RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
	}
	
	Global.prototype.init = function() {
	  var d, i, sx, t, x, x2, x4, x8, xi, _i;
	  d = (function() {
	    var _i, _results;
	    _results = [];
	    for (i = _i = 0; _i < 256; i = ++_i) {
	      if (i < 128) {
	        _results.push(i << 1);
	      } else {
	        _results.push((i << 1) ^ 0x11b);
	      }
	    }
	    return _results;
	  })();
	  x = 0;
	  xi = 0;
	  for (i = _i = 0; _i < 256; i = ++_i) {
	    sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	    sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	    this.SBOX[x] = sx;
	    this.INV_SBOX[sx] = x;
	    x2 = d[x];
	    x4 = d[x2];
	    x8 = d[x4];
	    t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	    this.SUB_MIX[0][x] = (t << 24) | (t >>> 8);
	    this.SUB_MIX[1][x] = (t << 16) | (t >>> 16);
	    this.SUB_MIX[2][x] = (t << 8) | (t >>> 24);
	    this.SUB_MIX[3][x] = t;
	    t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	    this.INV_SUB_MIX[0][sx] = (t << 24) | (t >>> 8);
	    this.INV_SUB_MIX[1][sx] = (t << 16) | (t >>> 16);
	    this.INV_SUB_MIX[2][sx] = (t << 8) | (t >>> 24);
	    this.INV_SUB_MIX[3][sx] = t;
	    if (x === 0) {
	      x = xi = 1;
	    } else {
	      x = x2 ^ d[d[d[x8 ^ x2]]];
	      xi ^= d[d[xi]];
	    }
	  }
	  return true;
	};
	
	var G = new Global();
	
	
	AES.blockSize = 4 * 4;
	
	AES.prototype.blockSize = AES.blockSize;
	
	AES.keySize = 256 / 8;
	
	AES.prototype.keySize = AES.keySize;
	
	AES.ivSize = AES.blockSize;
	
	AES.prototype.ivSize = AES.ivSize;
	
	 function bufferToArray(buf) {
	  var len = buf.length/4;
	  var out = new Array(len);
	  var i = -1;
	  while (++i < len) {
	    out[i] = buf.readUInt32BE(i * 4);
	  }
	  return out;
	 }
	function AES(key) {
	  this._key = bufferToArray(key);
	  this._doReset();
	}
	
	AES.prototype._doReset = function() {
	  var invKsRow, keySize, keyWords, ksRow, ksRows, t, _i, _j;
	  keyWords = this._key;
	  keySize = keyWords.length;
	  this._nRounds = keySize + 6;
	  ksRows = (this._nRounds + 1) * 4;
	  this._keySchedule = [];
	  for (ksRow = _i = 0; 0 <= ksRows ? _i < ksRows : _i > ksRows; ksRow = 0 <= ksRows ? ++_i : --_i) {
	    this._keySchedule[ksRow] = ksRow < keySize ? keyWords[ksRow] : (t = this._keySchedule[ksRow - 1], (ksRow % keySize) === 0 ? (t = (t << 8) | (t >>> 24), t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff], t ^= G.RCON[(ksRow / keySize) | 0] << 24) : keySize > 6 && ksRow % keySize === 4 ? t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff] : void 0, this._keySchedule[ksRow - keySize] ^ t);
	  }
	  this._invKeySchedule = [];
	  for (invKsRow = _j = 0; 0 <= ksRows ? _j < ksRows : _j > ksRows; invKsRow = 0 <= ksRows ? ++_j : --_j) {
	    ksRow = ksRows - invKsRow;
	    t = this._keySchedule[ksRow - (invKsRow % 4 ? 0 : 4)];
	    this._invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : G.INV_SUB_MIX[0][G.SBOX[t >>> 24]] ^ G.INV_SUB_MIX[1][G.SBOX[(t >>> 16) & 0xff]] ^ G.INV_SUB_MIX[2][G.SBOX[(t >>> 8) & 0xff]] ^ G.INV_SUB_MIX[3][G.SBOX[t & 0xff]];
	  }
	  return true;
	};
	
	AES.prototype.encryptBlock = function(M) {
	  M = bufferToArray(new Buffer(M));
	  var out = this._doCryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX);
	  var buf = new Buffer(16);
	  buf.writeUInt32BE(out[0], 0);
	  buf.writeUInt32BE(out[1], 4);
	  buf.writeUInt32BE(out[2], 8);
	  buf.writeUInt32BE(out[3], 12);
	  return buf;
	};
	
	AES.prototype.decryptBlock = function(M) {
	  M = bufferToArray(new Buffer(M));
	  var temp = [M[3], M[1]];
	  M[1] = temp[0];
	  M[3] = temp[1];
	  var out = this._doCryptBlock(M, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX);
	  var buf = new Buffer(16);
	  buf.writeUInt32BE(out[0], 0);
	  buf.writeUInt32BE(out[3], 4);
	  buf.writeUInt32BE(out[2], 8);
	  buf.writeUInt32BE(out[1], 12);
	  return buf;
	};
	
	AES.prototype.scrub = function() {
	  scrub_vec(this._keySchedule);
	  scrub_vec(this._invKeySchedule);
	  scrub_vec(this._key);
	};
	
	AES.prototype._doCryptBlock = function(M, keySchedule, SUB_MIX, SBOX) {
	  var ksRow, round, s0, s1, s2, s3, t0, t1, t2, t3, _i, _ref;
	
	  s0 = M[0] ^ keySchedule[0];
	  s1 = M[1] ^ keySchedule[1];
	  s2 = M[2] ^ keySchedule[2];
	  s3 = M[3] ^ keySchedule[3];
	  ksRow = 4;
	  for (round = _i = 1, _ref = this._nRounds; 1 <= _ref ? _i < _ref : _i > _ref; round = 1 <= _ref ? ++_i : --_i) {
	    t0 = SUB_MIX[0][s0 >>> 24] ^ SUB_MIX[1][(s1 >>> 16) & 0xff] ^ SUB_MIX[2][(s2 >>> 8) & 0xff] ^ SUB_MIX[3][s3 & 0xff] ^ keySchedule[ksRow++];
	    t1 = SUB_MIX[0][s1 >>> 24] ^ SUB_MIX[1][(s2 >>> 16) & 0xff] ^ SUB_MIX[2][(s3 >>> 8) & 0xff] ^ SUB_MIX[3][s0 & 0xff] ^ keySchedule[ksRow++];
	    t2 = SUB_MIX[0][s2 >>> 24] ^ SUB_MIX[1][(s3 >>> 16) & 0xff] ^ SUB_MIX[2][(s0 >>> 8) & 0xff] ^ SUB_MIX[3][s1 & 0xff] ^ keySchedule[ksRow++];
	    t3 = SUB_MIX[0][s3 >>> 24] ^ SUB_MIX[1][(s0 >>> 16) & 0xff] ^ SUB_MIX[2][(s1 >>> 8) & 0xff] ^ SUB_MIX[3][s2 & 0xff] ^ keySchedule[ksRow++];
	    s0 = t0;
	    s1 = t1;
	    s2 = t2;
	    s3 = t3;
	  }
	  t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	  t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	  t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	  t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
	  return [
	    fixup_uint32(t0),
	    fixup_uint32(t1),
	    fixup_uint32(t2),
	    fixup_uint32(t3)
	  ];
	
	};
	
	
	
	
	  exports.AES = AES;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var Transform = __webpack_require__(104).Transform;
	var inherits = __webpack_require__(106);
	
	module.exports = CipherBase;
	inherits(CipherBase, Transform);
	function CipherBase() {
	  Transform.call(this);
	}
	CipherBase.prototype.update = function (data, inputEnd, outputEnc) {
	  this.write(data, inputEnd);
	  var outData = new Buffer('');
	  var chunk;
	  while ((chunk = this.read())) {
	    outData = Buffer.concat([outData, chunk]);
	  }
	  if (outputEnc) {
	    outData = outData.toString(outputEnc);
	  }
	  return outData;
	};
	CipherBase.prototype.final = function (outputEnc) {
	  this.end();
	  var outData = new Buffer('');
	  var chunk;
	  while ((chunk = this.read())) {
	    outData = Buffer.concat([outData, chunk]);
	  }
	  if (outputEnc) {
	    outData = outData.toString(outputEnc);
	  }
	  return outData;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	module.exports = Stream;
	
	var EE = __webpack_require__(105).EventEmitter;
	var inherits = __webpack_require__(106);
	
	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(107);
	Stream.Writable = __webpack_require__(122);
	Stream.Duplex = __webpack_require__(123);
	Stream.Transform = __webpack_require__(124);
	Stream.PassThrough = __webpack_require__(125);
	
	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;
	
	
	
	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.
	
	function Stream() {
	  EE.call(this);
	}
	
	Stream.prototype.pipe = function(dest, options) {
	  var source = this;
	
	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }
	
	  source.on('data', ondata);
	
	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }
	
	  dest.on('drain', ondrain);
	
	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }
	
	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;
	
	    dest.end();
	  }
	
	
	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;
	
	    if (typeof dest.destroy === 'function') dest.destroy();
	  }
	
	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }
	
	  source.on('error', onerror);
	  dest.on('error', onerror);
	
	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);
	
	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);
	
	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);
	
	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);
	
	    dest.removeListener('close', cleanup);
	  }
	
	  source.on('end', cleanup);
	  source.on('close', cleanup);
	
	  dest.on('close', cleanup);
	
	  dest.emit('pipe', source);
	
	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },
/* 105 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 106 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var Stream = (function (){
	  try {
	    return __webpack_require__(104); // hack to fix a circular dependency issue when used with browserify
	  } catch(_){}
	}());
	exports = module.exports = __webpack_require__(108);
	exports.Stream = Stream || exports;
	exports.Readable = exports;
	exports.Writable = __webpack_require__(115);
	exports.Duplex = __webpack_require__(114);
	exports.Transform = __webpack_require__(120);
	exports.PassThrough = __webpack_require__(121);
	
	if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
	  module.exports = Stream;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	module.exports = Readable;
	
	/*<replacement>*/
	var processNextTick = __webpack_require__(109);
	/*</replacement>*/
	
	/*<replacement>*/
	var isArray = __webpack_require__(77);
	/*</replacement>*/
	
	Readable.ReadableState = ReadableState;
	
	/*<replacement>*/
	var EE = __webpack_require__(105).EventEmitter;
	
	var EElistenerCount = function (emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/
	
	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(104);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(105).EventEmitter;
	  }
	})();
	/*</replacement>*/
	
	var Buffer = __webpack_require__(74).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(110);
	/*</replacement>*/
	
	/*<replacement>*/
	var util = __webpack_require__(111);
	util.inherits = __webpack_require__(106);
	/*</replacement>*/
	
	/*<replacement>*/
	var debugUtil = __webpack_require__(112);
	var debug = void 0;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/
	
	var BufferList = __webpack_require__(113);
	var StringDecoder;
	
	util.inherits(Readable, Stream);
	
	function prependListener(emitter, event, fn) {
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
	  }
	}
	
	var Duplex;
	function ReadableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(114);
	
	  options = options || {};
	
	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;
	
	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
	
	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
	
	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;
	
	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;
	
	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;
	
	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;
	
	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';
	
	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;
	
	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;
	
	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;
	
	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = __webpack_require__(119).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	
	var Duplex;
	function Readable(options) {
	  Duplex = Duplex || __webpack_require__(114);
	
	  if (!(this instanceof Readable)) return new Readable(options);
	
	  this._readableState = new ReadableState(options, this);
	
	  // legacy
	  this.readable = true;
	
	  if (options && typeof options.read === 'function') this._read = options.read;
	
	  Stream.call(this);
	}
	
	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;
	
	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = bufferShim.from(chunk, encoding);
	      encoding = '';
	    }
	  }
	
	  return readableAddChunk(this, state, chunk, encoding, false);
	};
	
	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};
	
	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};
	
	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }
	
	      if (!addToFront) state.reading = false;
	
	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
	
	          if (state.needReadable) emitReadable(stream);
	        }
	      }
	
	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }
	
	  return needMoreData(state);
	}
	
	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}
	
	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = __webpack_require__(119).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};
	
	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}
	
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}
	
	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;
	
	  if (n !== 0) state.emittedReadable = false;
	
	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }
	
	  n = howMuchToRead(n, state);
	
	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }
	
	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.
	
	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);
	
	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }
	
	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }
	
	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;
	
	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }
	
	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;
	
	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }
	
	  if (ret !== null) this.emit('data', ret);
	
	  return ret;
	};
	
	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}
	
	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;
	
	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}
	
	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}
	
	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}
	
	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextTick(maybeReadMore_, stream, state);
	  }
	}
	
	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}
	
	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('not implemented'));
	};
	
	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;
	
	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
	
	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
	
	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);
	
	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }
	
	  function onend() {
	    debug('onend');
	    dest.end();
	  }
	
	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);
	
	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);
	
	    cleanedUp = true;
	
	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }
	
	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }
	
	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }
	
	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);
	
	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);
	
	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }
	
	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);
	
	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }
	
	  return dest;
	};
	
	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}
	
	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;
	
	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;
	
	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;
	
	    if (!dest) dest = state.pipes;
	
	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }
	
	  // slow case. multiple pipe destinations.
	
	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	
	    for (var _i = 0; _i < len; _i++) {
	      dests[_i].emit('unpipe', this);
	    }return this;
	  }
	
	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1) return this;
	
	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];
	
	  dest.emit('unpipe', this);
	
	  return this;
	};
	
	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);
	
	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        processNextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }
	
	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;
	
	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}
	
	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};
	
	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextTick(resume_, stream, state);
	  }
	}
	
	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }
	
	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}
	
	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};
	
	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}
	
	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;
	
	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }
	
	    self.push(null);
	  });
	
	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);
	
	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
	
	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });
	
	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }
	
	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });
	
	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };
	
	  return self;
	};
	
	// exposed for testing purposes only.
	Readable._fromList = fromList;
	
	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;
	
	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }
	
	  return ret;
	}
	
	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}
	
	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}
	
	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = bufferShim.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}
	
	function endReadable(stream) {
	  var state = stream._readableState;
	
	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
	
	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextTick(endReadableNT, state, stream);
	  }
	}
	
	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}
	
	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}
	
	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	if (!process.version ||
	    process.version.indexOf('v0.') === 0 ||
	    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = nextTick;
	} else {
	  module.exports = process.nextTick;
	}
	
	function nextTick(fn, arg1, arg2, arg3) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('"callback" argument must be a function');
	  }
	  var len = arguments.length;
	  var args, i;
	  switch (len) {
	  case 0:
	  case 1:
	    return process.nextTick(fn);
	  case 2:
	    return process.nextTick(function afterTickOne() {
	      fn.call(null, arg1);
	    });
	  case 3:
	    return process.nextTick(function afterTickTwo() {
	      fn.call(null, arg1, arg2);
	    });
	  case 4:
	    return process.nextTick(function afterTickThree() {
	      fn.call(null, arg1, arg2, arg3);
	    });
	  default:
	    args = new Array(len - 1);
	    i = 0;
	    while (i < args.length) {
	      args[i++] = arguments[i];
	    }
	    return process.nextTick(function afterTick() {
	      fn.apply(null, args);
	    });
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var buffer = __webpack_require__(74);
	var Buffer = buffer.Buffer;
	var SlowBuffer = buffer.SlowBuffer;
	var MAX_LEN = buffer.kMaxLength || 2147483647;
	exports.alloc = function alloc(size, fill, encoding) {
	  if (typeof Buffer.alloc === 'function') {
	    return Buffer.alloc(size, fill, encoding);
	  }
	  if (typeof encoding === 'number') {
	    throw new TypeError('encoding must not be number');
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  var enc = encoding;
	  var _fill = fill;
	  if (_fill === undefined) {
	    enc = undefined;
	    _fill = 0;
	  }
	  var buf = new Buffer(size);
	  if (typeof _fill === 'string') {
	    var fillBuf = new Buffer(_fill, enc);
	    var flen = fillBuf.length;
	    var i = -1;
	    while (++i < size) {
	      buf[i] = fillBuf[i % flen];
	    }
	  } else {
	    buf.fill(_fill);
	  }
	  return buf;
	}
	exports.allocUnsafe = function allocUnsafe(size) {
	  if (typeof Buffer.allocUnsafe === 'function') {
	    return Buffer.allocUnsafe(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new Buffer(size);
	}
	exports.from = function from(value, encodingOrOffset, length) {
	  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
	    return Buffer.from(value, encodingOrOffset, length);
	  }
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }
	  if (typeof value === 'string') {
	    return new Buffer(value, encodingOrOffset);
	  }
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    var offset = encodingOrOffset;
	    if (arguments.length === 1) {
	      return new Buffer(value);
	    }
	    if (typeof offset === 'undefined') {
	      offset = 0;
	    }
	    var len = length;
	    if (typeof len === 'undefined') {
	      len = value.byteLength - offset;
	    }
	    if (offset >= value.byteLength) {
	      throw new RangeError('\'offset\' is out of bounds');
	    }
	    if (len > value.byteLength - offset) {
	      throw new RangeError('\'length\' is out of bounds');
	    }
	    return new Buffer(value.slice(offset, offset + len));
	  }
	  if (Buffer.isBuffer(value)) {
	    var out = new Buffer(value.length);
	    value.copy(out, 0, 0, value.length);
	    return out;
	  }
	  if (value) {
	    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
	      return new Buffer(value);
	    }
	    if (value.type === 'Buffer' && Array.isArray(value.data)) {
	      return new Buffer(value.data);
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
	}
	exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
	  if (typeof Buffer.allocUnsafeSlow === 'function') {
	    return Buffer.allocUnsafeSlow(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size >= MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new SlowBuffer(size);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	
	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = Buffer.isBuffer;
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 112 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Buffer = __webpack_require__(74).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(110);
	/*</replacement>*/
	
	module.exports = BufferList;
	
	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}
	
	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};
	
	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};
	
	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};
	
	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};
	
	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};
	
	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return bufferShim.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = bufferShim.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.
	
	'use strict';
	
	/*<replacement>*/
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/
	
	module.exports = Duplex;
	
	/*<replacement>*/
	var processNextTick = __webpack_require__(109);
	/*</replacement>*/
	
	/*<replacement>*/
	var util = __webpack_require__(111);
	util.inherits = __webpack_require__(106);
	/*</replacement>*/
	
	var Readable = __webpack_require__(108);
	var Writable = __webpack_require__(115);
	
	util.inherits(Duplex, Readable);
	
	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}
	
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);
	
	  Readable.call(this, options);
	  Writable.call(this, options);
	
	  if (options && options.readable === false) this.readable = false;
	
	  if (options && options.writable === false) this.writable = false;
	
	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
	
	  this.once('end', onend);
	}
	
	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;
	
	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextTick(onEndNT, this);
	}
	
	function onEndNT(self) {
	  self.end();
	}
	
	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.
	
	'use strict';
	
	module.exports = Writable;
	
	/*<replacement>*/
	var processNextTick = __webpack_require__(109);
	/*</replacement>*/
	
	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
	/*</replacement>*/
	
	Writable.WritableState = WritableState;
	
	/*<replacement>*/
	var util = __webpack_require__(111);
	util.inherits = __webpack_require__(106);
	/*</replacement>*/
	
	/*<replacement>*/
	var internalUtil = {
	  deprecate: __webpack_require__(118)
	};
	/*</replacement>*/
	
	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(104);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(105).EventEmitter;
	  }
	})();
	/*</replacement>*/
	
	var Buffer = __webpack_require__(74).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(110);
	/*</replacement>*/
	
	util.inherits(Writable, Stream);
	
	function nop() {}
	
	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}
	
	var Duplex;
	function WritableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(114);
	
	  options = options || {};
	
	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;
	
	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
	
	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
	
	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;
	
	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;
	
	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;
	
	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';
	
	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;
	
	  // a flag to see when we're in the middle of a write.
	  this.writing = false;
	
	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;
	
	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;
	
	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;
	
	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };
	
	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;
	
	  // the amount that is being written when _write is called.
	  this.writelen = 0;
	
	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;
	
	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;
	
	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;
	
	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	
	  // count buffered requests
	  this.bufferedRequestCount = 0;
	
	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}
	
	WritableState.prototype.getBuffer = function writableStateGetBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	
	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	    });
	  } catch (_) {}
	})();
	
	var Duplex;
	function Writable(options) {
	  Duplex = Duplex || __webpack_require__(114);
	
	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);
	
	  this._writableState = new WritableState(options, this);
	
	  // legacy.
	  this.writable = true;
	
	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;
	
	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }
	
	  Stream.call(this);
	}
	
	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};
	
	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextTick(cb, er);
	}
	
	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    processNextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}
	
	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;
	
	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	
	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
	
	  if (typeof cb !== 'function') cb = nop;
	
	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }
	
	  return ret;
	};
	
	Writable.prototype.cork = function () {
	  var state = this._writableState;
	
	  state.corked++;
	};
	
	Writable.prototype.uncork = function () {
	  var state = this._writableState;
	
	  if (state.corked) {
	    state.corked--;
	
	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};
	
	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};
	
	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = bufferShim.from(chunk, encoding);
	  }
	  return chunk;
	}
	
	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	
	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;
	
	  state.length += len;
	
	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;
	
	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }
	
	  return ret;
	}
	
	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}
	
	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) processNextTick(cb, er);else cb(er);
	
	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}
	
	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}
	
	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;
	
	  onwriteStateUpdate(state);
	
	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);
	
	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }
	
	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}
	
	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}
	
	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}
	
	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;
	
	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;
	
	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }
	
	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);
	
	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;
	
	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }
	
	    if (entry === null) state.lastBufferedRequest = null;
	  }
	
	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}
	
	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};
	
	Writable.prototype._writev = null;
	
	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;
	
	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	
	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
	
	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }
	
	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};
	
	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}
	
	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}
	
	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}
	
	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}
	
	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;
	
	  this.next = null;
	  this.entry = null;
	
	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(116).setImmediate))

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(117);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)))

/***/ },
/* 118 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module exports.
	 */
	
	module.exports = deprecate;
	
	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */
	
	function deprecate (fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	}
	
	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */
	
	function config (name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var Buffer = __webpack_require__(74).Buffer;
	
	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }
	
	
	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}
	
	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }
	
	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};
	
	
	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;
	
	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;
	
	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }
	
	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);
	
	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
	
	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;
	
	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }
	
	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);
	
	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }
	
	  charStr += buffer.toString(this.encoding, 0, end);
	
	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }
	
	  // or just emit the charStr
	  return charStr;
	};
	
	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;
	
	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];
	
	    // See http://en.wikipedia.org/wiki/UTF-8#Description
	
	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }
	
	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }
	
	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};
	
	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);
	
	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }
	
	  return res;
	};
	
	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}
	
	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}
	
	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.
	
	'use strict';
	
	module.exports = Transform;
	
	var Duplex = __webpack_require__(114);
	
	/*<replacement>*/
	var util = __webpack_require__(111);
	util.inherits = __webpack_require__(106);
	/*</replacement>*/
	
	util.inherits(Transform, Duplex);
	
	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };
	
	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}
	
	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;
	
	  var cb = ts.writecb;
	
	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));
	
	  ts.writechunk = null;
	  ts.writecb = null;
	
	  if (data !== null && data !== undefined) stream.push(data);
	
	  cb(er);
	
	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}
	
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);
	
	  Duplex.call(this, options);
	
	  this._transformState = new TransformState(this);
	
	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;
	
	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;
	
	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;
	
	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;
	
	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }
	
	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er) {
	      done(stream, er);
	    });else done(stream);
	  });
	}
	
	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};
	
	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('Not implemented');
	};
	
	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};
	
	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;
	
	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};
	
	function done(stream, er) {
	  if (er) return stream.emit('error', er);
	
	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;
	
	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');
	
	  if (ts.transforming) throw new Error('Calling transform done when still transforming');
	
	  return stream.push(null);
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.
	
	'use strict';
	
	module.exports = PassThrough;
	
	var Transform = __webpack_require__(120);
	
	/*<replacement>*/
	var util = __webpack_require__(111);
	util.inherits = __webpack_require__(106);
	/*</replacement>*/
	
	util.inherits(PassThrough, Transform);
	
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);
	
	  Transform.call(this, options);
	}
	
	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(115)


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(114)


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(120)


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(121)


/***/ },
/* 126 */
/***/ function(module, exports) {

	exports['aes-128-ecb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-192-ecb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-256-ecb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-128-cbc'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes-192-cbc'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes-256-cbc'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes128'] = exports['aes-128-cbc'];
	exports['aes192'] = exports['aes-192-cbc'];
	exports['aes256'] = exports['aes-256-cbc'];
	exports['aes-128-cfb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-192-cfb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-256-cfb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-128-ofb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-192-ofb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-256-ofb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-128-ctr'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};
	exports['aes-192-ctr'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};
	exports['aes-256-ctr'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = function (crypto, password, keyLen, ivLen) {
	  keyLen = keyLen/8;
	  ivLen = ivLen || 0;
	  var ki = 0;
	  var ii = 0;
	  var key = new Buffer(keyLen);
	  var iv = new Buffer(ivLen);
	  var addmd = 0;
	  var md, md_buf;
	  var i;
	  while (true) {
	    md = crypto.createHash('md5');
	    if(addmd++ > 0) {
	       md.update(md_buf);
	    }
	    md.update(password);
	    md_buf = md.digest();
	    i = 0;
	    if(keyLen > 0) {
	      while(true) {
	        if(keyLen === 0) {
	          break;
	        }
	        if(i === md_buf.length) {
	          break;
	        }
	        key[ki++] = md_buf[i];
	        keyLen--;
	        i++;
	       }
	    }
	    if(ivLen > 0 && i !== md_buf.length) {
	      while(true) {
	        if(ivLen === 0) {
	          break;
	        }
	        if(i === md_buf.length) {
	          break;
	        }
	       iv[ii++] = md_buf[i];
	       ivLen--;
	       i++;
	     }
	   }
	   if(keyLen === 0 && ivLen === 0) {
	      break;
	    }
	  }
	  for(i=0;i<md_buf.length;i++) {
	    md_buf[i] = 0;
	  }
	  return {
	    key: key,
	    iv: iv
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(102);
	var Transform = __webpack_require__(103);
	var inherits = __webpack_require__(106);
	
	inherits(StreamCipher, Transform);
	module.exports = StreamCipher;
	function StreamCipher(mode, key, iv, decrypt) {
	  if (!(this instanceof StreamCipher)) {
	    return new StreamCipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  this._cache = new Buffer('');
	  this._secCache = new Buffer('');
	  this._decrypt = decrypt;
	  iv.copy(this._prev);
	  this._mode = mode;
	}
	StreamCipher.prototype._transform = function (chunk, _, next) {
	  next(null, this._mode.encrypt(this, chunk, this._decrypt));
	};
	StreamCipher.prototype._flush = function (next) {
	  this._cipher.scrub();
	  next();
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 129 */
/***/ function(module, exports) {

	exports.encrypt = function (self, block) {
	  return self._cipher.encryptBlock(block);
	};
	exports.decrypt = function (self, block) {
	  return self._cipher.decryptBlock(block);
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var xor = __webpack_require__(131);
	exports.encrypt = function (self, block) {
	  var data = xor(block, self._prev);
	  self._prev = self._cipher.encryptBlock(data);
	  return self._prev;
	};
	exports.decrypt = function (self, block) {
	  var pad = self._prev;
	  self._prev = block;
	  var out = self._cipher.decryptBlock(block);
	  return xor(out, pad);
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = xor;
	function xor(a, b) {
	  var len = Math.min(a.length, b.length);
	  var out = new Buffer(len);
	  var i = -1;
	  while (++i < len) {
	    out.writeUInt8(a[i] ^ b[i], i);
	  }
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(131);
	exports.encrypt = function (self, data, decrypt) {
	  var out = new Buffer('');
	  var len;
	  while (data.length) {
	    if (self._cache.length === 0) {
	      self._cache = self._cipher.encryptBlock(self._prev);
	      self._prev = new Buffer('');
	    }
	    if (self._cache.length <= data.length) {
	      len = self._cache.length;
	      out = Buffer.concat([out, encryptStart(self, data.slice(0, len), decrypt)]);
	      data = data.slice(len);
	    } else {
	      out = Buffer.concat([out, encryptStart(self, data, decrypt)]);
	      break;
	    }
	  }
	  return out;
	};
	function encryptStart(self, data, decrypt) {
	  var len = data.length;
	  var out = xor(data, self._cache);
	  self._cache = self._cache.slice(len);
	  self._prev = Buffer.concat([self._prev, decrypt?data:out]);
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(131);
	function getBlock(self) {
	  self._prev = self._cipher.encryptBlock(self._prev);
	  return self._prev;
	}
	exports.encrypt = function (self, chunk) {
	  while (self._cache.length < chunk.length) {
	    self._cache = Buffer.concat([self._cache, getBlock(self)]);
	  }
	  var pad = self._cache.slice(0, chunk.length);
	  self._cache = self._cache.slice(chunk.length);
	  return xor(chunk, pad);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(131);
	function getBlock(self) {
	  var out = self._cipher.encryptBlock(self._prev);
	  incr32(self._prev);
	  return out;
	}
	exports.encrypt = function (self, chunk) {
	  while (self._cache.length < chunk.length) {
	    self._cache = Buffer.concat([self._cache, getBlock(self)]);
	  }
	  var pad = self._cache.slice(0, chunk.length);
	  self._cache = self._cache.slice(chunk.length);
	  return xor(chunk, pad);
	};
	function incr32(iv) {
	  var len = iv.length;
	  var item;
	  while (len--) {
	    item = iv.readUInt8(len);
	    if (item === 255) {
	      iv.writeUInt8(0, len);
	    } else {
	      item++;
	      iv.writeUInt8(item, len);
	      break;
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(102);
	var Transform = __webpack_require__(103);
	var inherits = __webpack_require__(106);
	var modes = __webpack_require__(126);
	var StreamCipher = __webpack_require__(128);
	var ebtk = __webpack_require__(127);
	
	inherits(Decipher, Transform);
	function Decipher(mode, key, iv) {
	  if (!(this instanceof Decipher)) {
	    return new Decipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cache = new Splitter();
	  this._last = void 0;
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  iv.copy(this._prev);
	  this._mode = mode;
	}
	Decipher.prototype._transform = function (data, _, next) {
	  this._cache.add(data);
	  var chunk;
	  var thing;
	  while ((chunk = this._cache.get())) {
	    thing = this._mode.decrypt(this, chunk);
	    this.push(thing);
	  }
	  next();
	};
	Decipher.prototype._flush = function (next) {
	  var chunk = this._cache.flush();
	  if (!chunk) {
	    return next;
	  }
	
	  this.push(unpad(this._mode.decrypt(this, chunk)));
	
	  next();
	};
	
	function Splitter() {
	   if (!(this instanceof Splitter)) {
	    return new Splitter();
	  }
	  this.cache = new Buffer('');
	}
	Splitter.prototype.add = function (data) {
	  this.cache = Buffer.concat([this.cache, data]);
	};
	
	Splitter.prototype.get = function () {
	  if (this.cache.length > 16) {
	    var out = this.cache.slice(0, 16);
	    this.cache = this.cache.slice(16);
	    return out;
	  }
	  return null;
	};
	Splitter.prototype.flush = function () {
	  if (this.cache.length) {
	    return this.cache;
	  }
	};
	function unpad(last) {
	  var padded = last[15];
	  if (padded === 16) {
	    return;
	  }
	  return last.slice(0, 16 - padded);
	}
	
	var modelist = {
	  ECB: __webpack_require__(129),
	  CBC: __webpack_require__(130),
	  CFB: __webpack_require__(132),
	  OFB: __webpack_require__(133),
	  CTR: __webpack_require__(134)
	};
	
	module.exports = function (crypto) {
	  function createDecipheriv(suite, password, iv) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    if (typeof iv === 'string') {
	      iv = new Buffer(iv);
	    }
	    if (typeof password === 'string') {
	      password = new Buffer(password);
	    }
	    if (password.length !== config.key/8) {
	      throw new TypeError('invalid key length ' + password.length);
	    }
	    if (iv.length !== config.iv) {
	      throw new TypeError('invalid iv length ' + iv.length);
	    }
	    if (config.type === 'stream') {
	      return new StreamCipher(modelist[config.mode], password, iv, true);
	    }
	    return new Decipher(modelist[config.mode], password, iv);
	  }
	
	  function createDecipher (suite, password) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    var keys = ebtk(crypto, password, config.key, config.iv);
	    return createDecipheriv(suite, keys.key, keys.iv);
	  }
	  return {
	    createDecipher: createDecipher,
	    createDecipheriv: createDecipheriv
	  };
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Buffer = __webpack_require__(137);
	var jsbn = __webpack_require__(139);
	
	var BigInteger = jsbn.BigInteger;
	BigInteger.prototype.toBuffer = function () {
	    var h = this.toString(16);
	
	    // Fix odd-length hex values from BigInteger
	    if (h.length % 2 === 1) {
	        h = '0' + h;
	    }
	
	    return new Buffer(h, 'hex');
	};
	
	function ensureBI (n) {
	    if (n.constructor.name !== 'BigInteger') {
	        n = bignum(n);
	    }
	
	    return n;
	}
	
	BigInteger.prototype.oldAdd = BigInteger.prototype.add;
	BigInteger.prototype.add = function (n) {
	    return this.oldAdd(ensureBI(n));
	};
	
	BigInteger.prototype.mul = function (n) {
	    return this.multiply(ensureBI(n));
	};
	
	BigInteger.prototype.sub = function (n) {
	    return this.subtract(ensureBI(n));
	};
	
	BigInteger.prototype.powm = function (n, m) {
	    return this.modPow(ensureBI(n), ensureBI(m));
	};
	
	BigInteger.prototype.eq = function (n) {
	    return this.equals(ensureBI(n));
	};
	
	BigInteger.prototype.ge = function (n) {
	  return this.compareTo(n) >= 0;
	};
	
	BigInteger.prototype.le = function (n) {
	    return this.compareTo(n) <= 0;
	};
	
	function fromBuffer (buffer) {
	    var hex = buffer.toString('hex');
	    return new BigInteger(hex, 16);
	}
	
	function bignum (v, r) {
	    return new BigInteger(v.toString(), r)
	}
	
	module.exports = bignum;
	module.exports.fromBuffer = fromBuffer;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {'use strict';
	
	if (!Buffer) {
	    global.Buffer = __webpack_require__(138).Buffer;
	}
	
	module.exports = Buffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer, (function() { return this; }())))

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(75)
	var ieee754 = __webpack_require__(76)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	var K_MAX_LENGTH = 0x7fffffff
	exports.kMaxLength = K_MAX_LENGTH
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
	 *               implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * We report that the browser does not support typed arrays if the are not subclassable
	 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
	 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
	 * for __proto__ and has a buggy typed array implementation.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()
	
	if (!Buffer.TYPED_ARRAY_SUPPORT) {
	  console.error(
	    'This browser lacks typed array (Uint8Array) support which is required by ' +
	    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.')
	}
	
	function typedArraySupport () {
	  // Can typed array instances can be augmented?
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42
	  } catch (e) {
	    return false
	  }
	}
	
	function createBuffer (length) {
	  if (length > K_MAX_LENGTH) {
	    throw new RangeError('Invalid typed array length')
	  }
	  // Return an augmented `Uint8Array` instance
	  var buf = new Uint8Array(length)
	  buf.__proto__ = Buffer.prototype
	  return buf
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(arg)
	  }
	  return from(arg, encodingOrOffset, length)
	}
	
	// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	if (typeof Symbol !== 'undefined' && Symbol.species &&
	    Buffer[Symbol.species] === Buffer) {
	  Object.defineProperty(Buffer, Symbol.species, {
	    value: null,
	    configurable: true,
	    enumerable: false,
	    writable: false
	  })
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	function from (value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(value, encodingOrOffset)
	  }
	
	  return fromObject(value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(value, encodingOrOffset, length)
	}
	
	// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
	// https://github.com/feross/buffer/pull/148
	Buffer.prototype.__proto__ = Uint8Array.prototype
	Buffer.__proto__ = Uint8Array
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(size).fill(fill, encoding)
	      : createBuffer(size).fill(fill)
	  }
	  return createBuffer(size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(size, fill, encoding)
	}
	
	function allocUnsafe (size) {
	  assertSize(size)
	  return createBuffer(size < 0 ? 0 : checked(size) | 0)
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(size)
	}
	
	function fromString (string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  var buf = createBuffer(length)
	
	  var actual = buf.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    buf = buf.slice(0, actual)
	  }
	
	  return buf
	}
	
	function fromArrayLike (array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  var buf = createBuffer(length)
	  for (var i = 0; i < length; i += 1) {
	    buf[i] = array[i] & 255
	  }
	  return buf
	}
	
	function fromArrayBuffer (array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  var buf
	  if (byteOffset === undefined && length === undefined) {
	    buf = new Uint8Array(array)
	  } else if (length === undefined) {
	    buf = new Uint8Array(array, byteOffset)
	  } else {
	    buf = new Uint8Array(array, byteOffset, length)
	  }
	
	  // Return an augmented `Uint8Array` instance
	  buf.__proto__ = Buffer.prototype
	  return buf
	}
	
	function fromObject (obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    var buf = createBuffer(len)
	
	    if (buf.length === 0) {
	      return buf
	    }
	
	    obj.copy(buf, 0, 0, len)
	    return buf
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(0)
	      }
	      return fromArrayLike(obj)
	    }
	
	    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
	      return fromArrayLike(obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= K_MAX_LENGTH) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!Array.isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset >>> 0
	    if (isFinite(length)) {
	      length = length >>> 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf = this.subarray(start, end)
	  // Return an augmented `Uint8Array` instance
	  newBuf.__proto__ = Buffer.prototype
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  this[offset] = (value >>> 8)
	  this[offset + 1] = (value & 0xff)
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  this[offset + 3] = (value >>> 24)
	  this[offset + 2] = (value >>> 16)
	  this[offset + 1] = (value >>> 8)
	  this[offset] = (value & 0xff)
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  this[offset] = (value >>> 24)
	  this[offset + 1] = (value >>> 16)
	  this[offset + 2] = (value >>> 8)
	  this[offset + 3] = (value & 0xff)
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  this[offset] = (value >>> 8)
	  this[offset + 1] = (value & 0xff)
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  this[offset + 2] = (value >>> 16)
	  this[offset + 3] = (value >>> 24)
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  this[offset] = (value >>> 24)
	  this[offset + 1] = (value >>> 16)
	  this[offset + 2] = (value >>> 8)
	  this[offset + 3] = (value & 0xff)
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : new Buffer(val, encoding)
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	(function(){
	
	    // Copyright (c) 2005  Tom Wu
	    // All Rights Reserved.
	    // See "LICENSE" for details.
	
	    // Basic JavaScript BN library - subset useful for RSA encryption.
	
	    // Bits per digit
	    var dbits;
	
	    // JavaScript engine analysis
	    var canary = 0xdeadbeefcafe;
	    var j_lm = ((canary&0xffffff)==0xefcafe);
	
	    // (public) Constructor
	    function BigInteger(a,b,c) {
	      if(a != null)
	        if("number" == typeof a) this.fromNumber(a,b,c);
	        else if(b == null && "string" != typeof a) this.fromString(a,256);
	        else this.fromString(a,b);
	    }
	
	    // return new, unset BigInteger
	    function nbi() { return new BigInteger(null); }
	
	    // am: Compute w_j += (x*this_i), propagate carries,
	    // c is initial carry, returns final carry.
	    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
	    // We need to select the fastest one that works in this environment.
	
	    // am1: use a single mult and divide to get the high bits,
	    // max digit bits should be 26 because
	    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
	    function am1(i,x,w,j,c,n) {
	      while(--n >= 0) {
	        var v = x*this[i++]+w[j]+c;
	        c = Math.floor(v/0x4000000);
	        w[j++] = v&0x3ffffff;
	      }
	      return c;
	    }
	    // am2 avoids a big mult-and-extract completely.
	    // Max digit bits should be <= 30 because we do bitwise ops
	    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
	    function am2(i,x,w,j,c,n) {
	      var xl = x&0x7fff, xh = x>>15;
	      while(--n >= 0) {
	        var l = this[i]&0x7fff;
	        var h = this[i++]>>15;
	        var m = xh*l+h*xl;
	        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
	        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
	        w[j++] = l&0x3fffffff;
	      }
	      return c;
	    }
	    // Alternately, set max digit bits to 28 since some
	    // browsers slow down when dealing with 32-bit numbers.
	    function am3(i,x,w,j,c,n) {
	      var xl = x&0x3fff, xh = x>>14;
	      while(--n >= 0) {
	        var l = this[i]&0x3fff;
	        var h = this[i++]>>14;
	        var m = xh*l+h*xl;
	        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
	        c = (l>>28)+(m>>14)+xh*h;
	        w[j++] = l&0xfffffff;
	      }
	      return c;
	    }
	    var inBrowser = typeof navigator !== "undefined";
	    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
	      BigInteger.prototype.am = am2;
	      dbits = 30;
	    }
	    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
	      BigInteger.prototype.am = am1;
	      dbits = 26;
	    }
	    else { // Mozilla/Netscape seems to prefer am3
	      BigInteger.prototype.am = am3;
	      dbits = 28;
	    }
	
	    BigInteger.prototype.DB = dbits;
	    BigInteger.prototype.DM = ((1<<dbits)-1);
	    BigInteger.prototype.DV = (1<<dbits);
	
	    var BI_FP = 52;
	    BigInteger.prototype.FV = Math.pow(2,BI_FP);
	    BigInteger.prototype.F1 = BI_FP-dbits;
	    BigInteger.prototype.F2 = 2*dbits-BI_FP;
	
	    // Digit conversions
	    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
	    var BI_RC = new Array();
	    var rr,vv;
	    rr = "0".charCodeAt(0);
	    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
	    rr = "a".charCodeAt(0);
	    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
	    rr = "A".charCodeAt(0);
	    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
	
	    function int2char(n) { return BI_RM.charAt(n); }
	    function intAt(s,i) {
	      var c = BI_RC[s.charCodeAt(i)];
	      return (c==null)?-1:c;
	    }
	
	    // (protected) copy this to r
	    function bnpCopyTo(r) {
	      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
	      r.t = this.t;
	      r.s = this.s;
	    }
	
	    // (protected) set from integer value x, -DV <= x < DV
	    function bnpFromInt(x) {
	      this.t = 1;
	      this.s = (x<0)?-1:0;
	      if(x > 0) this[0] = x;
	      else if(x < -1) this[0] = x+this.DV;
	      else this.t = 0;
	    }
	
	    // return bigint initialized to value
	    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
	
	    // (protected) set from string and radix
	    function bnpFromString(s,b) {
	      var k;
	      if(b == 16) k = 4;
	      else if(b == 8) k = 3;
	      else if(b == 256) k = 8; // byte array
	      else if(b == 2) k = 1;
	      else if(b == 32) k = 5;
	      else if(b == 4) k = 2;
	      else { this.fromRadix(s,b); return; }
	      this.t = 0;
	      this.s = 0;
	      var i = s.length, mi = false, sh = 0;
	      while(--i >= 0) {
	        var x = (k==8)?s[i]&0xff:intAt(s,i);
	        if(x < 0) {
	          if(s.charAt(i) == "-") mi = true;
	          continue;
	        }
	        mi = false;
	        if(sh == 0)
	          this[this.t++] = x;
	        else if(sh+k > this.DB) {
	          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
	          this[this.t++] = (x>>(this.DB-sh));
	        }
	        else
	          this[this.t-1] |= x<<sh;
	        sh += k;
	        if(sh >= this.DB) sh -= this.DB;
	      }
	      if(k == 8 && (s[0]&0x80) != 0) {
	        this.s = -1;
	        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
	      }
	      this.clamp();
	      if(mi) BigInteger.ZERO.subTo(this,this);
	    }
	
	    // (protected) clamp off excess high words
	    function bnpClamp() {
	      var c = this.s&this.DM;
	      while(this.t > 0 && this[this.t-1] == c) --this.t;
	    }
	
	    // (public) return string representation in given radix
	    function bnToString(b) {
	      if(this.s < 0) return "-"+this.negate().toString(b);
	      var k;
	      if(b == 16) k = 4;
	      else if(b == 8) k = 3;
	      else if(b == 2) k = 1;
	      else if(b == 32) k = 5;
	      else if(b == 4) k = 2;
	      else return this.toRadix(b);
	      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
	      var p = this.DB-(i*this.DB)%k;
	      if(i-- > 0) {
	        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
	        while(i >= 0) {
	          if(p < k) {
	            d = (this[i]&((1<<p)-1))<<(k-p);
	            d |= this[--i]>>(p+=this.DB-k);
	          }
	          else {
	            d = (this[i]>>(p-=k))&km;
	            if(p <= 0) { p += this.DB; --i; }
	          }
	          if(d > 0) m = true;
	          if(m) r += int2char(d);
	        }
	      }
	      return m?r:"0";
	    }
	
	    // (public) -this
	    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
	
	    // (public) |this|
	    function bnAbs() { return (this.s<0)?this.negate():this; }
	
	    // (public) return + if this > a, - if this < a, 0 if equal
	    function bnCompareTo(a) {
	      var r = this.s-a.s;
	      if(r != 0) return r;
	      var i = this.t;
	      r = i-a.t;
	      if(r != 0) return (this.s<0)?-r:r;
	      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
	      return 0;
	    }
	
	    // returns bit length of the integer x
	    function nbits(x) {
	      var r = 1, t;
	      if((t=x>>>16) != 0) { x = t; r += 16; }
	      if((t=x>>8) != 0) { x = t; r += 8; }
	      if((t=x>>4) != 0) { x = t; r += 4; }
	      if((t=x>>2) != 0) { x = t; r += 2; }
	      if((t=x>>1) != 0) { x = t; r += 1; }
	      return r;
	    }
	
	    // (public) return the number of bits in "this"
	    function bnBitLength() {
	      if(this.t <= 0) return 0;
	      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
	    }
	
	    // (protected) r = this << n*DB
	    function bnpDLShiftTo(n,r) {
	      var i;
	      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
	      for(i = n-1; i >= 0; --i) r[i] = 0;
	      r.t = this.t+n;
	      r.s = this.s;
	    }
	
	    // (protected) r = this >> n*DB
	    function bnpDRShiftTo(n,r) {
	      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
	      r.t = Math.max(this.t-n,0);
	      r.s = this.s;
	    }
	
	    // (protected) r = this << n
	    function bnpLShiftTo(n,r) {
	      var bs = n%this.DB;
	      var cbs = this.DB-bs;
	      var bm = (1<<cbs)-1;
	      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
	      for(i = this.t-1; i >= 0; --i) {
	        r[i+ds+1] = (this[i]>>cbs)|c;
	        c = (this[i]&bm)<<bs;
	      }
	      for(i = ds-1; i >= 0; --i) r[i] = 0;
	      r[ds] = c;
	      r.t = this.t+ds+1;
	      r.s = this.s;
	      r.clamp();
	    }
	
	    // (protected) r = this >> n
	    function bnpRShiftTo(n,r) {
	      r.s = this.s;
	      var ds = Math.floor(n/this.DB);
	      if(ds >= this.t) { r.t = 0; return; }
	      var bs = n%this.DB;
	      var cbs = this.DB-bs;
	      var bm = (1<<bs)-1;
	      r[0] = this[ds]>>bs;
	      for(var i = ds+1; i < this.t; ++i) {
	        r[i-ds-1] |= (this[i]&bm)<<cbs;
	        r[i-ds] = this[i]>>bs;
	      }
	      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
	      r.t = this.t-ds;
	      r.clamp();
	    }
	
	    // (protected) r = this - a
	    function bnpSubTo(a,r) {
	      var i = 0, c = 0, m = Math.min(a.t,this.t);
	      while(i < m) {
	        c += this[i]-a[i];
	        r[i++] = c&this.DM;
	        c >>= this.DB;
	      }
	      if(a.t < this.t) {
	        c -= a.s;
	        while(i < this.t) {
	          c += this[i];
	          r[i++] = c&this.DM;
	          c >>= this.DB;
	        }
	        c += this.s;
	      }
	      else {
	        c += this.s;
	        while(i < a.t) {
	          c -= a[i];
	          r[i++] = c&this.DM;
	          c >>= this.DB;
	        }
	        c -= a.s;
	      }
	      r.s = (c<0)?-1:0;
	      if(c < -1) r[i++] = this.DV+c;
	      else if(c > 0) r[i++] = c;
	      r.t = i;
	      r.clamp();
	    }
	
	    // (protected) r = this * a, r != this,a (HAC 14.12)
	    // "this" should be the larger one if appropriate.
	    function bnpMultiplyTo(a,r) {
	      var x = this.abs(), y = a.abs();
	      var i = x.t;
	      r.t = i+y.t;
	      while(--i >= 0) r[i] = 0;
	      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
	      r.s = 0;
	      r.clamp();
	      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
	    }
	
	    // (protected) r = this^2, r != this (HAC 14.16)
	    function bnpSquareTo(r) {
	      var x = this.abs();
	      var i = r.t = 2*x.t;
	      while(--i >= 0) r[i] = 0;
	      for(i = 0; i < x.t-1; ++i) {
	        var c = x.am(i,x[i],r,2*i,0,1);
	        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
	          r[i+x.t] -= x.DV;
	          r[i+x.t+1] = 1;
	        }
	      }
	      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
	      r.s = 0;
	      r.clamp();
	    }
	
	    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
	    // r != q, this != m.  q or r may be null.
	    function bnpDivRemTo(m,q,r) {
	      var pm = m.abs();
	      if(pm.t <= 0) return;
	      var pt = this.abs();
	      if(pt.t < pm.t) {
	        if(q != null) q.fromInt(0);
	        if(r != null) this.copyTo(r);
	        return;
	      }
	      if(r == null) r = nbi();
	      var y = nbi(), ts = this.s, ms = m.s;
	      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
	      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
	      else { pm.copyTo(y); pt.copyTo(r); }
	      var ys = y.t;
	      var y0 = y[ys-1];
	      if(y0 == 0) return;
	      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
	      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
	      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
	      y.dlShiftTo(j,t);
	      if(r.compareTo(t) >= 0) {
	        r[r.t++] = 1;
	        r.subTo(t,r);
	      }
	      BigInteger.ONE.dlShiftTo(ys,t);
	      t.subTo(y,y);  // "negative" y so we can replace sub with am later
	      while(y.t < ys) y[y.t++] = 0;
	      while(--j >= 0) {
	        // Estimate quotient digit
	        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
	        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
	          y.dlShiftTo(j,t);
	          r.subTo(t,r);
	          while(r[i] < --qd) r.subTo(t,r);
	        }
	      }
	      if(q != null) {
	        r.drShiftTo(ys,q);
	        if(ts != ms) BigInteger.ZERO.subTo(q,q);
	      }
	      r.t = ys;
	      r.clamp();
	      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
	      if(ts < 0) BigInteger.ZERO.subTo(r,r);
	    }
	
	    // (public) this mod a
	    function bnMod(a) {
	      var r = nbi();
	      this.abs().divRemTo(a,null,r);
	      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
	      return r;
	    }
	
	    // Modular reduction using "classic" algorithm
	    function Classic(m) { this.m = m; }
	    function cConvert(x) {
	      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
	      else return x;
	    }
	    function cRevert(x) { return x; }
	    function cReduce(x) { x.divRemTo(this.m,null,x); }
	    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
	    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
	
	    Classic.prototype.convert = cConvert;
	    Classic.prototype.revert = cRevert;
	    Classic.prototype.reduce = cReduce;
	    Classic.prototype.mulTo = cMulTo;
	    Classic.prototype.sqrTo = cSqrTo;
	
	    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
	    // justification:
	    //         xy == 1 (mod m)
	    //         xy =  1+km
	    //   xy(2-xy) = (1+km)(1-km)
	    // x[y(2-xy)] = 1-k^2m^2
	    // x[y(2-xy)] == 1 (mod m^2)
	    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
	    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
	    // JS multiply "overflows" differently from C/C++, so care is needed here.
	    function bnpInvDigit() {
	      if(this.t < 1) return 0;
	      var x = this[0];
	      if((x&1) == 0) return 0;
	      var y = x&3;       // y == 1/x mod 2^2
	      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
	      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
	      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
	      // last step - calculate inverse mod DV directly;
	      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
	      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
	      // we really want the negative inverse, and -DV < y < DV
	      return (y>0)?this.DV-y:-y;
	    }
	
	    // Montgomery reduction
	    function Montgomery(m) {
	      this.m = m;
	      this.mp = m.invDigit();
	      this.mpl = this.mp&0x7fff;
	      this.mph = this.mp>>15;
	      this.um = (1<<(m.DB-15))-1;
	      this.mt2 = 2*m.t;
	    }
	
	    // xR mod m
	    function montConvert(x) {
	      var r = nbi();
	      x.abs().dlShiftTo(this.m.t,r);
	      r.divRemTo(this.m,null,r);
	      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
	      return r;
	    }
	
	    // x/R mod m
	    function montRevert(x) {
	      var r = nbi();
	      x.copyTo(r);
	      this.reduce(r);
	      return r;
	    }
	
	    // x = x/R mod m (HAC 14.32)
	    function montReduce(x) {
	      while(x.t <= this.mt2) // pad x so am has enough room later
	        x[x.t++] = 0;
	      for(var i = 0; i < this.m.t; ++i) {
	        // faster way of calculating u0 = x[i]*mp mod DV
	        var j = x[i]&0x7fff;
	        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
	        // use am to combine the multiply-shift-add into one call
	        j = i+this.m.t;
	        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
	        // propagate carry
	        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
	      }
	      x.clamp();
	      x.drShiftTo(this.m.t,x);
	      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
	    }
	
	    // r = "x^2/R mod m"; x != r
	    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
	
	    // r = "xy/R mod m"; x,y != r
	    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
	
	    Montgomery.prototype.convert = montConvert;
	    Montgomery.prototype.revert = montRevert;
	    Montgomery.prototype.reduce = montReduce;
	    Montgomery.prototype.mulTo = montMulTo;
	    Montgomery.prototype.sqrTo = montSqrTo;
	
	    // (protected) true iff this is even
	    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
	
	    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
	    function bnpExp(e,z) {
	      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
	      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
	      g.copyTo(r);
	      while(--i >= 0) {
	        z.sqrTo(r,r2);
	        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
	        else { var t = r; r = r2; r2 = t; }
	      }
	      return z.revert(r);
	    }
	
	    // (public) this^e % m, 0 <= e < 2^32
	    function bnModPowInt(e,m) {
	      var z;
	      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
	      return this.exp(e,z);
	    }
	
	    // protected
	    BigInteger.prototype.copyTo = bnpCopyTo;
	    BigInteger.prototype.fromInt = bnpFromInt;
	    BigInteger.prototype.fromString = bnpFromString;
	    BigInteger.prototype.clamp = bnpClamp;
	    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
	    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
	    BigInteger.prototype.lShiftTo = bnpLShiftTo;
	    BigInteger.prototype.rShiftTo = bnpRShiftTo;
	    BigInteger.prototype.subTo = bnpSubTo;
	    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
	    BigInteger.prototype.squareTo = bnpSquareTo;
	    BigInteger.prototype.divRemTo = bnpDivRemTo;
	    BigInteger.prototype.invDigit = bnpInvDigit;
	    BigInteger.prototype.isEven = bnpIsEven;
	    BigInteger.prototype.exp = bnpExp;
	
	    // public
	    BigInteger.prototype.toString = bnToString;
	    BigInteger.prototype.negate = bnNegate;
	    BigInteger.prototype.abs = bnAbs;
	    BigInteger.prototype.compareTo = bnCompareTo;
	    BigInteger.prototype.bitLength = bnBitLength;
	    BigInteger.prototype.mod = bnMod;
	    BigInteger.prototype.modPowInt = bnModPowInt;
	
	    // "constants"
	    BigInteger.ZERO = nbv(0);
	    BigInteger.ONE = nbv(1);
	
	    // Copyright (c) 2005-2009  Tom Wu
	    // All Rights Reserved.
	    // See "LICENSE" for details.
	
	    // Extended JavaScript BN functions, required for RSA private ops.
	
	    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
	    // Version 1.2: square() API, isProbablePrime fix
	
	    // (public)
	    function bnClone() { var r = nbi(); this.copyTo(r); return r; }
	
	    // (public) return value as integer
	    function bnIntValue() {
	      if(this.s < 0) {
	        if(this.t == 1) return this[0]-this.DV;
	        else if(this.t == 0) return -1;
	      }
	      else if(this.t == 1) return this[0];
	      else if(this.t == 0) return 0;
	      // assumes 16 < DB < 32
	      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
	    }
	
	    // (public) return value as byte
	    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }
	
	    // (public) return value as short (assumes DB>=16)
	    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }
	
	    // (protected) return x s.t. r^x < DV
	    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
	
	    // (public) 0 if this == 0, 1 if this > 0
	    function bnSigNum() {
	      if(this.s < 0) return -1;
	      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
	      else return 1;
	    }
	
	    // (protected) convert to radix string
	    function bnpToRadix(b) {
	      if(b == null) b = 10;
	      if(this.signum() == 0 || b < 2 || b > 36) return "0";
	      var cs = this.chunkSize(b);
	      var a = Math.pow(b,cs);
	      var d = nbv(a), y = nbi(), z = nbi(), r = "";
	      this.divRemTo(d,y,z);
	      while(y.signum() > 0) {
	        r = (a+z.intValue()).toString(b).substr(1) + r;
	        y.divRemTo(d,y,z);
	      }
	      return z.intValue().toString(b) + r;
	    }
	
	    // (protected) convert from radix string
	    function bnpFromRadix(s,b) {
	      this.fromInt(0);
	      if(b == null) b = 10;
	      var cs = this.chunkSize(b);
	      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
	      for(var i = 0; i < s.length; ++i) {
	        var x = intAt(s,i);
	        if(x < 0) {
	          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
	          continue;
	        }
	        w = b*w+x;
	        if(++j >= cs) {
	          this.dMultiply(d);
	          this.dAddOffset(w,0);
	          j = 0;
	          w = 0;
	        }
	      }
	      if(j > 0) {
	        this.dMultiply(Math.pow(b,j));
	        this.dAddOffset(w,0);
	      }
	      if(mi) BigInteger.ZERO.subTo(this,this);
	    }
	
	    // (protected) alternate constructor
	    function bnpFromNumber(a,b,c) {
	      if("number" == typeof b) {
	        // new BigInteger(int,int,RNG)
	        if(a < 2) this.fromInt(1);
	        else {
	          this.fromNumber(a,c);
	          if(!this.testBit(a-1))	// force MSB set
	            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
	          if(this.isEven()) this.dAddOffset(1,0); // force odd
	          while(!this.isProbablePrime(b)) {
	            this.dAddOffset(2,0);
	            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
	          }
	        }
	      }
	      else {
	        // new BigInteger(int,RNG)
	        var x = new Array(), t = a&7;
	        x.length = (a>>3)+1;
	        b.nextBytes(x);
	        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
	        this.fromString(x,256);
	      }
	    }
	
	    // (public) convert to bigendian byte array
	    function bnToByteArray() {
	      var i = this.t, r = new Array();
	      r[0] = this.s;
	      var p = this.DB-(i*this.DB)%8, d, k = 0;
	      if(i-- > 0) {
	        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
	          r[k++] = d|(this.s<<(this.DB-p));
	        while(i >= 0) {
	          if(p < 8) {
	            d = (this[i]&((1<<p)-1))<<(8-p);
	            d |= this[--i]>>(p+=this.DB-8);
	          }
	          else {
	            d = (this[i]>>(p-=8))&0xff;
	            if(p <= 0) { p += this.DB; --i; }
	          }
	          if((d&0x80) != 0) d |= -256;
	          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
	          if(k > 0 || d != this.s) r[k++] = d;
	        }
	      }
	      return r;
	    }
	
	    function bnEquals(a) { return(this.compareTo(a)==0); }
	    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
	    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }
	
	    // (protected) r = this op a (bitwise)
	    function bnpBitwiseTo(a,op,r) {
	      var i, f, m = Math.min(a.t,this.t);
	      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
	      if(a.t < this.t) {
	        f = a.s&this.DM;
	        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
	        r.t = this.t;
	      }
	      else {
	        f = this.s&this.DM;
	        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
	        r.t = a.t;
	      }
	      r.s = op(this.s,a.s);
	      r.clamp();
	    }
	
	    // (public) this & a
	    function op_and(x,y) { return x&y; }
	    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }
	
	    // (public) this | a
	    function op_or(x,y) { return x|y; }
	    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }
	
	    // (public) this ^ a
	    function op_xor(x,y) { return x^y; }
	    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }
	
	    // (public) this & ~a
	    function op_andnot(x,y) { return x&~y; }
	    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }
	
	    // (public) ~this
	    function bnNot() {
	      var r = nbi();
	      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
	      r.t = this.t;
	      r.s = ~this.s;
	      return r;
	    }
	
	    // (public) this << n
	    function bnShiftLeft(n) {
	      var r = nbi();
	      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
	      return r;
	    }
	
	    // (public) this >> n
	    function bnShiftRight(n) {
	      var r = nbi();
	      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
	      return r;
	    }
	
	    // return index of lowest 1-bit in x, x < 2^31
	    function lbit(x) {
	      if(x == 0) return -1;
	      var r = 0;
	      if((x&0xffff) == 0) { x >>= 16; r += 16; }
	      if((x&0xff) == 0) { x >>= 8; r += 8; }
	      if((x&0xf) == 0) { x >>= 4; r += 4; }
	      if((x&3) == 0) { x >>= 2; r += 2; }
	      if((x&1) == 0) ++r;
	      return r;
	    }
	
	    // (public) returns index of lowest 1-bit (or -1 if none)
	    function bnGetLowestSetBit() {
	      for(var i = 0; i < this.t; ++i)
	        if(this[i] != 0) return i*this.DB+lbit(this[i]);
	      if(this.s < 0) return this.t*this.DB;
	      return -1;
	    }
	
	    // return number of 1 bits in x
	    function cbit(x) {
	      var r = 0;
	      while(x != 0) { x &= x-1; ++r; }
	      return r;
	    }
	
	    // (public) return number of set bits
	    function bnBitCount() {
	      var r = 0, x = this.s&this.DM;
	      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
	      return r;
	    }
	
	    // (public) true iff nth bit is set
	    function bnTestBit(n) {
	      var j = Math.floor(n/this.DB);
	      if(j >= this.t) return(this.s!=0);
	      return((this[j]&(1<<(n%this.DB)))!=0);
	    }
	
	    // (protected) this op (1<<n)
	    function bnpChangeBit(n,op) {
	      var r = BigInteger.ONE.shiftLeft(n);
	      this.bitwiseTo(r,op,r);
	      return r;
	    }
	
	    // (public) this | (1<<n)
	    function bnSetBit(n) { return this.changeBit(n,op_or); }
	
	    // (public) this & ~(1<<n)
	    function bnClearBit(n) { return this.changeBit(n,op_andnot); }
	
	    // (public) this ^ (1<<n)
	    function bnFlipBit(n) { return this.changeBit(n,op_xor); }
	
	    // (protected) r = this + a
	    function bnpAddTo(a,r) {
	      var i = 0, c = 0, m = Math.min(a.t,this.t);
	      while(i < m) {
	        c += this[i]+a[i];
	        r[i++] = c&this.DM;
	        c >>= this.DB;
	      }
	      if(a.t < this.t) {
	        c += a.s;
	        while(i < this.t) {
	          c += this[i];
	          r[i++] = c&this.DM;
	          c >>= this.DB;
	        }
	        c += this.s;
	      }
	      else {
	        c += this.s;
	        while(i < a.t) {
	          c += a[i];
	          r[i++] = c&this.DM;
	          c >>= this.DB;
	        }
	        c += a.s;
	      }
	      r.s = (c<0)?-1:0;
	      if(c > 0) r[i++] = c;
	      else if(c < -1) r[i++] = this.DV+c;
	      r.t = i;
	      r.clamp();
	    }
	
	    // (public) this + a
	    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }
	
	    // (public) this - a
	    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }
	
	    // (public) this * a
	    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }
	
	    // (public) this^2
	    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }
	
	    // (public) this / a
	    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }
	
	    // (public) this % a
	    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }
	
	    // (public) [this/a,this%a]
	    function bnDivideAndRemainder(a) {
	      var q = nbi(), r = nbi();
	      this.divRemTo(a,q,r);
	      return new Array(q,r);
	    }
	
	    // (protected) this *= n, this >= 0, 1 < n < DV
	    function bnpDMultiply(n) {
	      this[this.t] = this.am(0,n-1,this,0,0,this.t);
	      ++this.t;
	      this.clamp();
	    }
	
	    // (protected) this += n << w words, this >= 0
	    function bnpDAddOffset(n,w) {
	      if(n == 0) return;
	      while(this.t <= w) this[this.t++] = 0;
	      this[w] += n;
	      while(this[w] >= this.DV) {
	        this[w] -= this.DV;
	        if(++w >= this.t) this[this.t++] = 0;
	        ++this[w];
	      }
	    }
	
	    // A "null" reducer
	    function NullExp() {}
	    function nNop(x) { return x; }
	    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
	    function nSqrTo(x,r) { x.squareTo(r); }
	
	    NullExp.prototype.convert = nNop;
	    NullExp.prototype.revert = nNop;
	    NullExp.prototype.mulTo = nMulTo;
	    NullExp.prototype.sqrTo = nSqrTo;
	
	    // (public) this^e
	    function bnPow(e) { return this.exp(e,new NullExp()); }
	
	    // (protected) r = lower n words of "this * a", a.t <= n
	    // "this" should be the larger one if appropriate.
	    function bnpMultiplyLowerTo(a,n,r) {
	      var i = Math.min(this.t+a.t,n);
	      r.s = 0; // assumes a,this >= 0
	      r.t = i;
	      while(i > 0) r[--i] = 0;
	      var j;
	      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
	      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
	      r.clamp();
	    }
	
	    // (protected) r = "this * a" without lower n words, n > 0
	    // "this" should be the larger one if appropriate.
	    function bnpMultiplyUpperTo(a,n,r) {
	      --n;
	      var i = r.t = this.t+a.t-n;
	      r.s = 0; // assumes a,this >= 0
	      while(--i >= 0) r[i] = 0;
	      for(i = Math.max(n-this.t,0); i < a.t; ++i)
	        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
	      r.clamp();
	      r.drShiftTo(1,r);
	    }
	
	    // Barrett modular reduction
	    function Barrett(m) {
	      // setup Barrett
	      this.r2 = nbi();
	      this.q3 = nbi();
	      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
	      this.mu = this.r2.divide(m);
	      this.m = m;
	    }
	
	    function barrettConvert(x) {
	      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
	      else if(x.compareTo(this.m) < 0) return x;
	      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
	    }
	
	    function barrettRevert(x) { return x; }
	
	    // x = x mod m (HAC 14.42)
	    function barrettReduce(x) {
	      x.drShiftTo(this.m.t-1,this.r2);
	      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
	      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
	      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
	      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
	      x.subTo(this.r2,x);
	      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
	    }
	
	    // r = x^2 mod m; x != r
	    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
	
	    // r = x*y mod m; x,y != r
	    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
	
	    Barrett.prototype.convert = barrettConvert;
	    Barrett.prototype.revert = barrettRevert;
	    Barrett.prototype.reduce = barrettReduce;
	    Barrett.prototype.mulTo = barrettMulTo;
	    Barrett.prototype.sqrTo = barrettSqrTo;
	
	    // (public) this^e % m (HAC 14.85)
	    function bnModPow(e,m) {
	      var i = e.bitLength(), k, r = nbv(1), z;
	      if(i <= 0) return r;
	      else if(i < 18) k = 1;
	      else if(i < 48) k = 3;
	      else if(i < 144) k = 4;
	      else if(i < 768) k = 5;
	      else k = 6;
	      if(i < 8)
	        z = new Classic(m);
	      else if(m.isEven())
	        z = new Barrett(m);
	      else
	        z = new Montgomery(m);
	
	      // precomputation
	      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
	      g[1] = z.convert(this);
	      if(k > 1) {
	        var g2 = nbi();
	        z.sqrTo(g[1],g2);
	        while(n <= km) {
	          g[n] = nbi();
	          z.mulTo(g2,g[n-2],g[n]);
	          n += 2;
	        }
	      }
	
	      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
	      i = nbits(e[j])-1;
	      while(j >= 0) {
	        if(i >= k1) w = (e[j]>>(i-k1))&km;
	        else {
	          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
	          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
	        }
	
	        n = k;
	        while((w&1) == 0) { w >>= 1; --n; }
	        if((i -= n) < 0) { i += this.DB; --j; }
	        if(is1) {	// ret == 1, don't bother squaring or multiplying it
	          g[w].copyTo(r);
	          is1 = false;
	        }
	        else {
	          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
	          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
	          z.mulTo(r2,g[w],r);
	        }
	
	        while(j >= 0 && (e[j]&(1<<i)) == 0) {
	          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
	          if(--i < 0) { i = this.DB-1; --j; }
	        }
	      }
	      return z.revert(r);
	    }
	
	    // (public) gcd(this,a) (HAC 14.54)
	    function bnGCD(a) {
	      var x = (this.s<0)?this.negate():this.clone();
	      var y = (a.s<0)?a.negate():a.clone();
	      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
	      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
	      if(g < 0) return x;
	      if(i < g) g = i;
	      if(g > 0) {
	        x.rShiftTo(g,x);
	        y.rShiftTo(g,y);
	      }
	      while(x.signum() > 0) {
	        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
	        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
	        if(x.compareTo(y) >= 0) {
	          x.subTo(y,x);
	          x.rShiftTo(1,x);
	        }
	        else {
	          y.subTo(x,y);
	          y.rShiftTo(1,y);
	        }
	      }
	      if(g > 0) y.lShiftTo(g,y);
	      return y;
	    }
	
	    // (protected) this % n, n < 2^26
	    function bnpModInt(n) {
	      if(n <= 0) return 0;
	      var d = this.DV%n, r = (this.s<0)?n-1:0;
	      if(this.t > 0)
	        if(d == 0) r = this[0]%n;
	        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
	      return r;
	    }
	
	    // (public) 1/this % m (HAC 14.61)
	    function bnModInverse(m) {
	      var ac = m.isEven();
	      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
	      var u = m.clone(), v = this.clone();
	      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
	      while(u.signum() != 0) {
	        while(u.isEven()) {
	          u.rShiftTo(1,u);
	          if(ac) {
	            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
	            a.rShiftTo(1,a);
	          }
	          else if(!b.isEven()) b.subTo(m,b);
	          b.rShiftTo(1,b);
	        }
	        while(v.isEven()) {
	          v.rShiftTo(1,v);
	          if(ac) {
	            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
	            c.rShiftTo(1,c);
	          }
	          else if(!d.isEven()) d.subTo(m,d);
	          d.rShiftTo(1,d);
	        }
	        if(u.compareTo(v) >= 0) {
	          u.subTo(v,u);
	          if(ac) a.subTo(c,a);
	          b.subTo(d,b);
	        }
	        else {
	          v.subTo(u,v);
	          if(ac) c.subTo(a,c);
	          d.subTo(b,d);
	        }
	      }
	      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
	      if(d.compareTo(m) >= 0) return d.subtract(m);
	      if(d.signum() < 0) d.addTo(m,d); else return d;
	      if(d.signum() < 0) return d.add(m); else return d;
	    }
	
	    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
	    var lplim = (1<<26)/lowprimes[lowprimes.length-1];
	
	    // (public) test primality with certainty >= 1-.5^t
	    function bnIsProbablePrime(t) {
	      var i, x = this.abs();
	      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
	        for(i = 0; i < lowprimes.length; ++i)
	          if(x[0] == lowprimes[i]) return true;
	        return false;
	      }
	      if(x.isEven()) return false;
	      i = 1;
	      while(i < lowprimes.length) {
	        var m = lowprimes[i], j = i+1;
	        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
	        m = x.modInt(m);
	        while(i < j) if(m%lowprimes[i++] == 0) return false;
	      }
	      return x.millerRabin(t);
	    }
	
	    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
	    function bnpMillerRabin(t) {
	      var n1 = this.subtract(BigInteger.ONE);
	      var k = n1.getLowestSetBit();
	      if(k <= 0) return false;
	      var r = n1.shiftRight(k);
	      t = (t+1)>>1;
	      if(t > lowprimes.length) t = lowprimes.length;
	      var a = nbi();
	      for(var i = 0; i < t; ++i) {
	        //Pick bases at random, instead of starting at 2
	        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
	        var y = a.modPow(r,this);
	        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
	          var j = 1;
	          while(j++ < k && y.compareTo(n1) != 0) {
	            y = y.modPowInt(2,this);
	            if(y.compareTo(BigInteger.ONE) == 0) return false;
	          }
	          if(y.compareTo(n1) != 0) return false;
	        }
	      }
	      return true;
	    }
	
	    // protected
	    BigInteger.prototype.chunkSize = bnpChunkSize;
	    BigInteger.prototype.toRadix = bnpToRadix;
	    BigInteger.prototype.fromRadix = bnpFromRadix;
	    BigInteger.prototype.fromNumber = bnpFromNumber;
	    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
	    BigInteger.prototype.changeBit = bnpChangeBit;
	    BigInteger.prototype.addTo = bnpAddTo;
	    BigInteger.prototype.dMultiply = bnpDMultiply;
	    BigInteger.prototype.dAddOffset = bnpDAddOffset;
	    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
	    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
	    BigInteger.prototype.modInt = bnpModInt;
	    BigInteger.prototype.millerRabin = bnpMillerRabin;
	
	    // public
	    BigInteger.prototype.clone = bnClone;
	    BigInteger.prototype.intValue = bnIntValue;
	    BigInteger.prototype.byteValue = bnByteValue;
	    BigInteger.prototype.shortValue = bnShortValue;
	    BigInteger.prototype.signum = bnSigNum;
	    BigInteger.prototype.toByteArray = bnToByteArray;
	    BigInteger.prototype.equals = bnEquals;
	    BigInteger.prototype.min = bnMin;
	    BigInteger.prototype.max = bnMax;
	    BigInteger.prototype.and = bnAnd;
	    BigInteger.prototype.or = bnOr;
	    BigInteger.prototype.xor = bnXor;
	    BigInteger.prototype.andNot = bnAndNot;
	    BigInteger.prototype.not = bnNot;
	    BigInteger.prototype.shiftLeft = bnShiftLeft;
	    BigInteger.prototype.shiftRight = bnShiftRight;
	    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
	    BigInteger.prototype.bitCount = bnBitCount;
	    BigInteger.prototype.testBit = bnTestBit;
	    BigInteger.prototype.setBit = bnSetBit;
	    BigInteger.prototype.clearBit = bnClearBit;
	    BigInteger.prototype.flipBit = bnFlipBit;
	    BigInteger.prototype.add = bnAdd;
	    BigInteger.prototype.subtract = bnSubtract;
	    BigInteger.prototype.multiply = bnMultiply;
	    BigInteger.prototype.divide = bnDivide;
	    BigInteger.prototype.remainder = bnRemainder;
	    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
	    BigInteger.prototype.modPow = bnModPow;
	    BigInteger.prototype.modInverse = bnModInverse;
	    BigInteger.prototype.pow = bnPow;
	    BigInteger.prototype.gcd = bnGCD;
	    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
	
	    // JSBN-specific extension
	    BigInteger.prototype.square = bnSquare;
	
	    // Expose the Barrett function
	    BigInteger.prototype.Barrett = Barrett
	
	    // BigInteger interfaces not implemented in jsbn:
	
	    // BigInteger(int signum, byte[] magnitude)
	    // double doubleValue()
	    // float floatValue()
	    // int hashCode()
	    // long longValue()
	    // static BigInteger valueOf(long val)
	
		// Random number generator - requires a PRNG backend, e.g. prng4.js
	
		// For best results, put code like
		// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
		// in your main HTML document.
	
		var rng_state;
		var rng_pool;
		var rng_pptr;
	
		// Mix in a 32-bit integer into the pool
		function rng_seed_int(x) {
		  rng_pool[rng_pptr++] ^= x & 255;
		  rng_pool[rng_pptr++] ^= (x >> 8) & 255;
		  rng_pool[rng_pptr++] ^= (x >> 16) & 255;
		  rng_pool[rng_pptr++] ^= (x >> 24) & 255;
		  if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
		}
	
		// Mix in the current time (w/milliseconds) into the pool
		function rng_seed_time() {
		  rng_seed_int(new Date().getTime());
		}
	
		// Initialize the pool with junk if needed.
		if(rng_pool == null) {
		  rng_pool = new Array();
		  rng_pptr = 0;
		  var t;
		  if(typeof window !== "undefined" && window.crypto) {
			if (window.crypto.getRandomValues) {
			  // Use webcrypto if available
			  var ua = new Uint8Array(32);
			  window.crypto.getRandomValues(ua);
			  for(t = 0; t < 32; ++t)
				rng_pool[rng_pptr++] = ua[t];
			}
			else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
			  // Extract entropy (256 bits) from NS4 RNG if available
			  var z = window.crypto.random(32);
			  for(t = 0; t < z.length; ++t)
				rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
			}
		  }
		  while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
			t = Math.floor(65536 * Math.random());
			rng_pool[rng_pptr++] = t >>> 8;
			rng_pool[rng_pptr++] = t & 255;
		  }
		  rng_pptr = 0;
		  rng_seed_time();
		  //rng_seed_int(window.screenX);
		  //rng_seed_int(window.screenY);
		}
	
		function rng_get_byte() {
		  if(rng_state == null) {
			rng_seed_time();
			rng_state = prng_newstate();
			rng_state.init(rng_pool);
			for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
			  rng_pool[rng_pptr] = 0;
			rng_pptr = 0;
			//rng_pool = null;
		  }
		  // TODO: allow reseeding after first request
		  return rng_state.next();
		}
	
		function rng_get_bytes(ba) {
		  var i;
		  for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
		}
	
		function SecureRandom() {}
	
		SecureRandom.prototype.nextBytes = rng_get_bytes;
	
		// prng4.js - uses Arcfour as a PRNG
	
		function Arcfour() {
		  this.i = 0;
		  this.j = 0;
		  this.S = new Array();
		}
	
		// Initialize arcfour context from key, an array of ints, each from [0..255]
		function ARC4init(key) {
		  var i, j, t;
		  for(i = 0; i < 256; ++i)
			this.S[i] = i;
		  j = 0;
		  for(i = 0; i < 256; ++i) {
			j = (j + this.S[i] + key[i % key.length]) & 255;
			t = this.S[i];
			this.S[i] = this.S[j];
			this.S[j] = t;
		  }
		  this.i = 0;
		  this.j = 0;
		}
	
		function ARC4next() {
		  var t;
		  this.i = (this.i + 1) & 255;
		  this.j = (this.j + this.S[this.i]) & 255;
		  t = this.S[this.i];
		  this.S[this.i] = this.S[this.j];
		  this.S[this.j] = t;
		  return this.S[(t + this.S[this.i]) & 255];
		}
	
		Arcfour.prototype.init = ARC4init;
		Arcfour.prototype.next = ARC4next;
	
		// Plug in your RNG constructor here
		function prng_newstate() {
		  return new Arcfour();
		}
	
		// Pool size must be a multiple of 4 and greater than 32.
		// An array of bytes the size of the pool will be passed to init()
		var rng_psize = 256;
	
	    if (true) {
	        exports = module.exports = {
				BigInteger: BigInteger,
				SecureRandom: SecureRandom,
			};
	    } else {
	        this.BigInteger = BigInteger;
	        this.SecureRandom = SecureRandom;
	    }
	
	}).call(this);


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
	// original notice:
	
	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }
	
	  var x = a.length;
	  var y = b.length;
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	
	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	function isBuffer(b) {
	  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
	    return global.Buffer.isBuffer(b);
	  }
	  return !!(b != null && b._isBuffer);
	}
	
	// based on node assert, original notice:
	
	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var util = __webpack_require__(89);
	var hasOwn = Object.prototype.hasOwnProperty;
	var pSlice = Array.prototype.slice;
	var functionsHaveNames = (function () {
	  return function foo() {}.name === 'foo';
	}());
	function pToString (obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.
	
	var assert = module.exports = ok;
	
	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })
	
	var regex = /\s*function\s+([^\(\s]*)\s*/;
	// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
	function getName(func) {
	  if (!util.isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;
	
	      // try to strip useless frames
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }
	
	      this.stack = out;
	    }
	  }
	};
	
	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);
	
	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect(something) {
	  if (functionsHaveNames || !util.isFunction(something)) {
	    return util.inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' +  name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect(self.actual), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(inspect(self.expected), 128);
	}
	
	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.
	
	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.
	
	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}
	
	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;
	
	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.
	
	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;
	
	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);
	
	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};
	
	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);
	
	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};
	
	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);
	
	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};
	
	assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
	  }
	};
	
	function _deepEqual(actual, expected, strict, memos) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;
	
	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;
	
	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if ((actual === null || typeof actual !== 'object') &&
	             (expected === null || typeof expected !== 'object')) {
	    return strict ? actual === expected : actual == expected;
	
	  // If both values are instances of typed arrays, wrap their underlying
	  // ArrayBuffers in a Buffer each to increase performance
	  // This optimization requires the arrays to have the same type as checked by
	  // Object.prototype.toString (aka pToString). Never perform binary
	  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
	  // bit patterns are not identical.
	  } else if (isView(actual) && isView(expected) &&
	             pToString(actual) === pToString(expected) &&
	             !(actual instanceof Float32Array ||
	               actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer),
	                   new Uint8Array(expected.buffer)) === 0;
	
	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || {actual: [], expected: []};
	
	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }
	
	    memos.actual.push(actual);
	    memos.expected.push(expected);
	
	    return objEquiv(actual, expected, strict, memos);
	  }
	}
	
	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	
	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined)
	    return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b))
	    return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
	    return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length !== kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
	      return false;
	  }
	  return true;
	}
	
	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);
	
	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};
	
	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}
	
	
	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);
	
	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};
	
	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
	
	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};
	
	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }
	
	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }
	
	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	    // Ignore.  The instanceof check doesn't work for arrow functions.
	  }
	
	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }
	
	  return expected.call({}, actual) === true;
	}
	
	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}
	
	function _throws(shouldThrow, block, expected, message) {
	  var actual;
	
	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }
	
	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }
	
	  actual = _tryBlock(block);
	
	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');
	
	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }
	
	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && util.isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;
	
	  if ((isUnwantedException &&
	      userProvidedMessage &&
	      expectedException(actual, expected)) ||
	      isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }
	
	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}
	
	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);
	
	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws(true, block, error, message);
	};
	
	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
	  _throws(false, block, error, message);
	};
	
	assert.ifError = function(err) { if (err) throw err; };
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	 * SRP Group Parameters
	 * http://tools.ietf.org/html/rfc5054#appendix-A
	 *
	 * The 1024-, 1536-, and 2048-bit groups are taken from software
	 * developed by Tom Wu and Eugene Jhong for the Stanford SRP
	 * distribution, and subsequently proven to be prime.  The larger primes
	 * are taken from [MODP], but generators have been calculated that are
	 * primitive roots of N, unlike the generators in [MODP].
	 *
	 * The 1024-bit and 1536-bit groups MUST be supported.
	 */
	
	// since these are meant to be used internally, all values are numbers. If
	// you want to add parameter sets, you'll need to convert them to bignums.
	
	const bignum = __webpack_require__(136);
	
	function hex(s) {
	    return bignum(s.split(/\s/).join(''), 16);
	}
	
	module.exports = {
	
	  1024: {
	    N_length_bits: 1024,
	    N: hex(' EEAF0AB9 ADB38DD6 9C33F80A FA8FC5E8 60726187 75FF3C0B 9EA2314C'
	           +'9C256576 D674DF74 96EA81D3 383B4813 D692C6E0 E0D5D8E2 50B98BE4'
	           +'8E495C1D 6089DAD1 5DC7D7B4 6154D6B6 CE8EF4AD 69B15D49 82559B29'
	           +'7BCF1885 C529F566 660E57EC 68EDBC3C 05726CC0 2FD4CBF4 976EAA9A'
	           +'FD5138FE 8376435B 9FC61D2F C0EB06E3'),
	    g: hex('02'),
	    hash: 'sha1'},
	
	  1536: {
	    N_length_bits: 1536,
	    N: hex(' 9DEF3CAF B939277A B1F12A86 17A47BBB DBA51DF4 99AC4C80 BEEEA961'
	           +'4B19CC4D 5F4F5F55 6E27CBDE 51C6A94B E4607A29 1558903B A0D0F843'
	           +'80B655BB 9A22E8DC DF028A7C EC67F0D0 8134B1C8 B9798914 9B609E0B'
	           +'E3BAB63D 47548381 DBC5B1FC 764E3F4B 53DD9DA1 158BFD3E 2B9C8CF5'
	           +'6EDF0195 39349627 DB2FD53D 24B7C486 65772E43 7D6C7F8C E442734A'
	           +'F7CCB7AE 837C264A E3A9BEB8 7F8A2FE9 B8B5292E 5A021FFF 5E91479E'
	           +'8CE7A28C 2442C6F3 15180F93 499A234D CF76E3FE D135F9BB'),
	    g: hex('02'),
	    hash: 'sha1'},
	
	  2048: {
	    N_length_bits: 2048,
	    N: hex(' AC6BDB41 324A9A9B F166DE5E 1389582F AF72B665 1987EE07 FC319294'
	           +'3DB56050 A37329CB B4A099ED 8193E075 7767A13D D52312AB 4B03310D'
	           +'CD7F48A9 DA04FD50 E8083969 EDB767B0 CF609517 9A163AB3 661A05FB'
	           +'D5FAAAE8 2918A996 2F0B93B8 55F97993 EC975EEA A80D740A DBF4FF74'
	           +'7359D041 D5C33EA7 1D281E44 6B14773B CA97B43A 23FB8016 76BD207A'
	           +'436C6481 F1D2B907 8717461A 5B9D32E6 88F87748 544523B5 24B0D57D'
	           +'5EA77A27 75D2ECFA 032CFBDB F52FB378 61602790 04E57AE6 AF874E73'
	           +'03CE5329 9CCC041C 7BC308D8 2A5698F3 A8D0C382 71AE35F8 E9DBFBB6'
	           +'94B5C803 D89F7AE4 35DE236D 525F5475 9B65E372 FCD68EF2 0FA7111F'
	           +'9E4AFF73'),
	    g: hex('02'),
	    hash: 'sha256'},
	
	  3072: {
	    N_length_bits: 3072,
	    N: hex(' FFFFFFFF FFFFFFFF C90FDAA2 2168C234 C4C6628B 80DC1CD1 29024E08'
	           +'8A67CC74 020BBEA6 3B139B22 514A0879 8E3404DD EF9519B3 CD3A431B'
	           +'302B0A6D F25F1437 4FE1356D 6D51C245 E485B576 625E7EC6 F44C42E9'
	           +'A637ED6B 0BFF5CB6 F406B7ED EE386BFB 5A899FA5 AE9F2411 7C4B1FE6'
	           +'49286651 ECE45B3D C2007CB8 A163BF05 98DA4836 1C55D39A 69163FA8'
	           +'FD24CF5F 83655D23 DCA3AD96 1C62F356 208552BB 9ED52907 7096966D'
	           +'670C354E 4ABC9804 F1746C08 CA18217C 32905E46 2E36CE3B E39E772C'
	           +'180E8603 9B2783A2 EC07A28F B5C55DF0 6F4C52C9 DE2BCBF6 95581718'
	           +'3995497C EA956AE5 15D22618 98FA0510 15728E5A 8AAAC42D AD33170D'
	           +'04507A33 A85521AB DF1CBA64 ECFB8504 58DBEF0A 8AEA7157 5D060C7D'
	           +'B3970F85 A6E1E4C7 ABF5AE8C DB0933D7 1E8C94E0 4A25619D CEE3D226'
	           +'1AD2EE6B F12FFA06 D98A0864 D8760273 3EC86A64 521F2B18 177B200C'
	           +'BBE11757 7A615D6C 770988C0 BAD946E2 08E24FA0 74E5AB31 43DB5BFC'
	           +'E0FD108E 4B82D120 A93AD2CA FFFFFFFF FFFFFFFF'),
	    g: hex('05'),
	    hash: 'sha256'},
	
	  4096: {
	    N_length_bits: 4096,
	    N: hex(' FFFFFFFF FFFFFFFF C90FDAA2 2168C234 C4C6628B 80DC1CD1 29024E08'
	           +'8A67CC74 020BBEA6 3B139B22 514A0879 8E3404DD EF9519B3 CD3A431B'
	           +'302B0A6D F25F1437 4FE1356D 6D51C245 E485B576 625E7EC6 F44C42E9'
	           +'A637ED6B 0BFF5CB6 F406B7ED EE386BFB 5A899FA5 AE9F2411 7C4B1FE6'
	           +'49286651 ECE45B3D C2007CB8 A163BF05 98DA4836 1C55D39A 69163FA8'
	           +'FD24CF5F 83655D23 DCA3AD96 1C62F356 208552BB 9ED52907 7096966D'
	           +'670C354E 4ABC9804 F1746C08 CA18217C 32905E46 2E36CE3B E39E772C'
	           +'180E8603 9B2783A2 EC07A28F B5C55DF0 6F4C52C9 DE2BCBF6 95581718'
	           +'3995497C EA956AE5 15D22618 98FA0510 15728E5A 8AAAC42D AD33170D'
	           +'04507A33 A85521AB DF1CBA64 ECFB8504 58DBEF0A 8AEA7157 5D060C7D'
	           +'B3970F85 A6E1E4C7 ABF5AE8C DB0933D7 1E8C94E0 4A25619D CEE3D226'
	           +'1AD2EE6B F12FFA06 D98A0864 D8760273 3EC86A64 521F2B18 177B200C'
	           +'BBE11757 7A615D6C 770988C0 BAD946E2 08E24FA0 74E5AB31 43DB5BFC'
	           +'E0FD108E 4B82D120 A9210801 1A723C12 A787E6D7 88719A10 BDBA5B26'
	           +'99C32718 6AF4E23C 1A946834 B6150BDA 2583E9CA 2AD44CE8 DBBBC2DB'
	           +'04DE8EF9 2E8EFC14 1FBECAA6 287C5947 4E6BC05D 99B2964F A090C3A2'
	           +'233BA186 515BE7ED 1F612970 CEE2D7AF B81BDD76 2170481C D0069127'
	           +'D5B05AA9 93B4EA98 8D8FDDC1 86FFB7DC 90A6C08F 4DF435C9 34063199'
	           +'FFFFFFFF FFFFFFFF'),
	    g: hex('05'),
	    hash: 'sha256'},
	
	  6244: {
	    N_length_bits: 6244,
	    N: hex(' FFFFFFFF FFFFFFFF C90FDAA2 2168C234 C4C6628B 80DC1CD1 29024E08'
	           +'8A67CC74 020BBEA6 3B139B22 514A0879 8E3404DD EF9519B3 CD3A431B'
	           +'302B0A6D F25F1437 4FE1356D 6D51C245 E485B576 625E7EC6 F44C42E9'
	           +'A637ED6B 0BFF5CB6 F406B7ED EE386BFB 5A899FA5 AE9F2411 7C4B1FE6'
	           +'49286651 ECE45B3D C2007CB8 A163BF05 98DA4836 1C55D39A 69163FA8'
	           +'FD24CF5F 83655D23 DCA3AD96 1C62F356 208552BB 9ED52907 7096966D'
	           +'670C354E 4ABC9804 F1746C08 CA18217C 32905E46 2E36CE3B E39E772C'
	           +'180E8603 9B2783A2 EC07A28F B5C55DF0 6F4C52C9 DE2BCBF6 95581718'
	           +'3995497C EA956AE5 15D22618 98FA0510 15728E5A 8AAAC42D AD33170D'
	           +'04507A33 A85521AB DF1CBA64 ECFB8504 58DBEF0A 8AEA7157 5D060C7D'
	           +'B3970F85 A6E1E4C7 ABF5AE8C DB0933D7 1E8C94E0 4A25619D CEE3D226'
	           +'1AD2EE6B F12FFA06 D98A0864 D8760273 3EC86A64 521F2B18 177B200C'
	           +'BBE11757 7A615D6C 770988C0 BAD946E2 08E24FA0 74E5AB31 43DB5BFC'
	           +'E0FD108E 4B82D120 A9210801 1A723C12 A787E6D7 88719A10 BDBA5B26'
	           +'99C32718 6AF4E23C 1A946834 B6150BDA 2583E9CA 2AD44CE8 DBBBC2DB'
	           +'04DE8EF9 2E8EFC14 1FBECAA6 287C5947 4E6BC05D 99B2964F A090C3A2'
	           +'233BA186 515BE7ED 1F612970 CEE2D7AF B81BDD76 2170481C D0069127'
	           +'D5B05AA9 93B4EA98 8D8FDDC1 86FFB7DC 90A6C08F 4DF435C9 34028492'
	           +'36C3FAB4 D27C7026 C1D4DCB2 602646DE C9751E76 3DBA37BD F8FF9406'
	           +'AD9E530E E5DB382F 413001AE B06A53ED 9027D831 179727B0 865A8918'
	           +'DA3EDBEB CF9B14ED 44CE6CBA CED4BB1B DB7F1447 E6CC254B 33205151'
	           +'2BD7AF42 6FB8F401 378CD2BF 5983CA01 C64B92EC F032EA15 D1721D03'
	           +'F482D7CE 6E74FEF6 D55E702F 46980C82 B5A84031 900B1C9E 59E7C97F'
	           +'BEC7E8F3 23A97A7E 36CC88BE 0F1D45B7 FF585AC5 4BD407B2 2B4154AA'
	           +'CC8F6D7E BF48E1D8 14CC5ED2 0F8037E0 A79715EE F29BE328 06A1D58B'
	           +'B7C5DA76 F550AA3D 8A1FBFF0 EB19CCB1 A313D55C DA56C9EC 2EF29632'
	           +'387FE8D7 6E3C0468 043E8F66 3F4860EE 12BF2D5B 0B7474D6 E694F91E'
	           +'6DCC4024 FFFFFFFF FFFFFFFF'),
	    g: hex('05'),
	    hash: 'sha256'},
	
	  8192: {
	    N_length_bits: 8192,
	    N: hex(' FFFFFFFF FFFFFFFF C90FDAA2 2168C234 C4C6628B 80DC1CD1 29024E08'
	           +'8A67CC74 020BBEA6 3B139B22 514A0879 8E3404DD EF9519B3 CD3A431B'
	           +'302B0A6D F25F1437 4FE1356D 6D51C245 E485B576 625E7EC6 F44C42E9'
	           +'A637ED6B 0BFF5CB6 F406B7ED EE386BFB 5A899FA5 AE9F2411 7C4B1FE6'
	           +'49286651 ECE45B3D C2007CB8 A163BF05 98DA4836 1C55D39A 69163FA8'
	           +'FD24CF5F 83655D23 DCA3AD96 1C62F356 208552BB 9ED52907 7096966D'
	           +'670C354E 4ABC9804 F1746C08 CA18217C 32905E46 2E36CE3B E39E772C'
	           +'180E8603 9B2783A2 EC07A28F B5C55DF0 6F4C52C9 DE2BCBF6 95581718'
	           +'3995497C EA956AE5 15D22618 98FA0510 15728E5A 8AAAC42D AD33170D'
	           +'04507A33 A85521AB DF1CBA64 ECFB8504 58DBEF0A 8AEA7157 5D060C7D'
	           +'B3970F85 A6E1E4C7 ABF5AE8C DB0933D7 1E8C94E0 4A25619D CEE3D226'
	           +'1AD2EE6B F12FFA06 D98A0864 D8760273 3EC86A64 521F2B18 177B200C'
	           +'BBE11757 7A615D6C 770988C0 BAD946E2 08E24FA0 74E5AB31 43DB5BFC'
	           +'E0FD108E 4B82D120 A9210801 1A723C12 A787E6D7 88719A10 BDBA5B26'
	           +'99C32718 6AF4E23C 1A946834 B6150BDA 2583E9CA 2AD44CE8 DBBBC2DB'
	           +'04DE8EF9 2E8EFC14 1FBECAA6 287C5947 4E6BC05D 99B2964F A090C3A2'
	           +'233BA186 515BE7ED 1F612970 CEE2D7AF B81BDD76 2170481C D0069127'
	           +'D5B05AA9 93B4EA98 8D8FDDC1 86FFB7DC 90A6C08F 4DF435C9 34028492'
	           +'36C3FAB4 D27C7026 C1D4DCB2 602646DE C9751E76 3DBA37BD F8FF9406'
	           +'AD9E530E E5DB382F 413001AE B06A53ED 9027D831 179727B0 865A8918'
	           +'DA3EDBEB CF9B14ED 44CE6CBA CED4BB1B DB7F1447 E6CC254B 33205151'
	           +'2BD7AF42 6FB8F401 378CD2BF 5983CA01 C64B92EC F032EA15 D1721D03'
	           +'F482D7CE 6E74FEF6 D55E702F 46980C82 B5A84031 900B1C9E 59E7C97F'
	           +'BEC7E8F3 23A97A7E 36CC88BE 0F1D45B7 FF585AC5 4BD407B2 2B4154AA'
	           +'CC8F6D7E BF48E1D8 14CC5ED2 0F8037E0 A79715EE F29BE328 06A1D58B'
	           +'B7C5DA76 F550AA3D 8A1FBFF0 EB19CCB1 A313D55C DA56C9EC 2EF29632'
	           +'387FE8D7 6E3C0468 043E8F66 3F4860EE 12BF2D5B 0B7474D6 E694F91E'
	           +'6DBE1159 74A3926F 12FEE5E4 38777CB6 A932DF8C D8BEC4D0 73B931BA'
	           +'3BC832B6 8D9DD300 741FA7BF 8AFC47ED 2576F693 6BA42466 3AAB639C'
	           +'5AE4F568 3423B474 2BF1C978 238F16CB E39D652D E3FDB8BE FC848AD9'
	           +'22222E04 A4037C07 13EB57A8 1A23F0C7 3473FC64 6CEA306B 4BCBC886'
	           +'2F8385DD FA9D4B7F A2C087E8 79683303 ED5BDD3A 062B3CF5 B3A278A6'
	           +'6D2A13F8 3F44F82D DF310EE0 74AB6A36 4597E899 A0255DC1 64F31CC5'
	           +'0846851D F9AB4819 5DED7EA1 B1D510BD 7EE74D73 FAF36BC3 1ECFA268'
	           +'359046F4 EB879F92 4009438B 481C6CD7 889A002E D5EE382B C9190DA6'
	           +'FC026E47 9558E447 5677E9AA 9E3050E2 765694DF C81F56E8 80B96E71'
	           +'60C980DD 98EDD3DF FFFFFFFF FFFFFFFF'),
	    g: hex('13'),
	    hash: 'sha256'}
	};


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(43);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _regenerator = __webpack_require__(3);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.deriveKey = deriveKey;
	exports.encryptRSAWithJWK = encryptRSAWithJWK;
	exports.decryptRSAWithJWK = decryptRSAWithJWK;
	exports.encryptAES = encryptAES;
	exports.decryptAES = decryptAES;
	exports.getRandomHex = getRandomHex;
	exports.generateAccountId = generateAccountId;
	exports.srpGenKey = srpGenKey;
	exports.generateAES256Key = generateAES256Key;
	exports.generateKeyPairJWK = generateKeyPairJWK;
	
	var _hkdf = __webpack_require__(143);
	
	var _hkdf2 = _interopRequireDefault(_hkdf);
	
	var _sjcl = __webpack_require__(145);
	
	var _sjcl2 = _interopRequireDefault(_sjcl);
	
	var _srp = __webpack_require__(80);
	
	var _srp2 = _interopRequireDefault(_srp);
	
	var _nodeForge = __webpack_require__(146);
	
	var _nodeForge2 = _interopRequireDefault(_nodeForge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_BYTE_LENGTH = 32;
	var DEFAULT_PBKDF2_ITERATIONS = 1E5; // 100,000
	
	/**
	 * Generate hex signing key used for AES encryption
	 *
	 * @param pass
	 * @param email
	 * @param salt
	 */
	function deriveKey(pass, email, salt) {
	  var combinedSalt;
	  return _regenerator2.default.async(function deriveKey$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return _regenerator2.default.awrap(_hkdfSalt(salt, email));
	
	        case 2:
	          combinedSalt = _context.sent;
	          return _context.abrupt('return', _pbkdf2Passphrase(pass, combinedSalt));
	
	        case 4:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, null, this);
	}
	
	/**
	 * Encrypt with RSA256 public key
	 *
	 * @param publicKeyJWK
	 * @param plaintext
	 * @return String
	 */
	function encryptRSAWithJWK(publicKeyJWK, plaintext) {
	  if (publicKeyJWK.alg !== 'RSA-OAEP-256') {
	    throw new Error('Public key algorithm was not RSA-OAEP-256');
	  } else if (publicKeyJWK.kty !== 'RSA') {
	    throw new Error('Public key type was not RSA');
	  } else if (!publicKeyJWK.key_ops.find(function (o) {
	    return o === 'encrypt';
	  })) {
	    throw new Error('Public key does not have "encrypt" op');
	  }
	
	  var encodedPlaintext = encodeURIComponent(plaintext);
	
	  var n = _b64UrlToBigInt(publicKeyJWK.n);
	  var e = _b64UrlToBigInt(publicKeyJWK.e);
	  var publicKey = _nodeForge2.default.rsa.setPublicKey(n, e);
	
	  var encrypted = publicKey.encrypt(encodedPlaintext, 'RSA-OAEP', {
	    md: _nodeForge2.default.md.sha256.create()
	  });
	  return _nodeForge2.default.util.bytesToHex(encrypted);
	}
	
	function decryptRSAWithJWK(privateJWK, encryptedBlob) {
	  var n = _b64UrlToBigInt(privateJWK.n);
	  var e = _b64UrlToBigInt(privateJWK.e);
	  var d = _b64UrlToBigInt(privateJWK.d);
	  var p = _b64UrlToBigInt(privateJWK.p);
	  var q = _b64UrlToBigInt(privateJWK.q);
	  var dP = _b64UrlToBigInt(privateJWK.dp);
	  var dQ = _b64UrlToBigInt(privateJWK.dq);
	  var qInv = _b64UrlToBigInt(privateJWK.qi);
	
	  var privateKey = _nodeForge2.default.rsa.setPrivateKey(n, e, d, p, q, dP, dQ, qInv);
	  var bytes = _nodeForge2.default.util.hexToBytes(encryptedBlob);
	  var decrypted = privateKey.decrypt(bytes, 'RSA-OAEP', {
	    md: _nodeForge2.default.md.sha256.create()
	  });
	
	  return decodeURIComponent(decrypted);
	}
	
	/**
	 * Encrypt data using symmetric key
	 *
	 * @param jwkOrKey JWK or string representing symmetric key
	 * @param plaintext string of data to encrypt
	 * @param additionalData any additional public data to attach
	 * @returns {{iv, t, d, ad}}
	 */
	function encryptAES(jwkOrKey, plaintext) {
	  var additionalData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	  // TODO: Add assertion checks for JWK
	  var rawKey = typeof jwkOrKey === 'string' ? jwkOrKey : _b64UrlToHex(jwkOrKey.k);
	  var key = _nodeForge2.default.util.hexToBytes(rawKey);
	
	  var iv = _nodeForge2.default.random.getBytesSync(12);
	  var cipher = _nodeForge2.default.cipher.createCipher('AES-GCM', key);
	
	  // Plaintext could contain weird unicode, so we have to encode that
	  var encodedPlaintext = encodeURIComponent(plaintext);
	
	  cipher.start({ additionalData: additionalData, iv: iv, tagLength: 128 });
	  cipher.update(_nodeForge2.default.util.createBuffer(encodedPlaintext));
	  cipher.finish();
	
	  return {
	    iv: _nodeForge2.default.util.bytesToHex(iv),
	    t: _nodeForge2.default.util.bytesToHex(cipher.mode.tag),
	    d: _nodeForge2.default.util.bytesToHex(cipher.output),
	    ad: _nodeForge2.default.util.bytesToHex(additionalData)
	  };
	}
	
	/**
	 * Decrypt AES using a key
	 *
	 * @param jwkOrKey JWK or string representing symmetric key
	 * @param message
	 * @returns String
	 */
	function decryptAES(jwkOrKey, message) {
	  // TODO: Add assertion checks for JWK
	  var rawKey = typeof jwkOrKey === 'string' ? jwkOrKey : _b64UrlToHex(jwkOrKey.k);
	  var key = _nodeForge2.default.util.hexToBytes(rawKey);
	
	  // ~~~~~~~~~~~~~~~~~~~~ //
	  // Decrypt with AES-GCM //
	  // ~~~~~~~~~~~~~~~~~~~~ //
	
	  var decipher = _nodeForge2.default.cipher.createDecipher('AES-GCM', key);
	  decipher.start({
	    iv: _nodeForge2.default.util.hexToBytes(message.iv),
	    tagLength: message.t.length * 4,
	    tag: _nodeForge2.default.util.hexToBytes(message.t),
	    additionalData: _nodeForge2.default.util.hexToBytes(message.ad)
	  });
	
	  decipher.update(_nodeForge2.default.util.createBuffer(_nodeForge2.default.util.hexToBytes(message.d)));
	
	  if (decipher.finish()) {
	    return decodeURIComponent(decipher.output.toString());
	  } else {
	    throw new Error('Failed to decrypt data');
	  }
	}
	
	/**
	 * Generate a random salt in hex
	 *
	 * @returns {string}
	 */
	function getRandomHex() {
	  var bytes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_BYTE_LENGTH;
	
	  return _nodeForge2.default.util.bytesToHex(_nodeForge2.default.random.getBytesSync(bytes));
	}
	
	/**
	 * Generate a random account Id
	 *
	 * @returns {string}
	 */
	function generateAccountId() {
	  return 'act_' + getRandomHex(DEFAULT_BYTE_LENGTH);
	}
	
	/**
	 * Generate a random key
	 *
	 * @returns {Promise}
	 */
	function srpGenKey() {
	  return new _promise2.default(function (resolve, reject) {
	    _srp2.default.genKey(function (err, secret1Buffer) {
	      if (err) {
	        reject(err);
	      } else {
	        resolve(secret1Buffer.toString('hex'));
	      }
	    });
	  });
	}
	
	/**
	 * Generate a random AES256 key for use with symmetric encryption
	 */
	function generateAES256Key() {
	  var c, subtle, key, _key;
	
	  return _regenerator2.default.async(function generateAES256Key$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          c = window.crypto;
	          subtle = c ? c.subtle || c.webkitSubtle : null;
	
	          if (!subtle) {
	            _context2.next = 10;
	            break;
	          }
	
	          console.log('-- Using Native AES Key Generation --');
	          _context2.next = 6;
	          return _regenerator2.default.awrap(subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']));
	
	        case 6:
	          key = _context2.sent;
	          return _context2.abrupt('return', subtle.exportKey('jwk', key));
	
	        case 10:
	          console.log('-- Using Falback Forge AES Key Generation --');
	          _key = _nodeForge2.default.util.bytesToHex(_nodeForge2.default.random.getBytesSync(32));
	          return _context2.abrupt('return', {
	            kty: 'oct',
	            alg: 'A256GCM',
	            ext: true,
	            key_ops: ['encrypt', 'decrypt'],
	            k: _hexToB64Url(_key)
	          });
	
	        case 13:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, null, this);
	}
	
	/**
	 * Generate RSA keypair JWK with 2048 bits and exponent 0x10001
	 *
	 * @returns Object
	 */
	function generateKeyPairJWK() {
	  var subtle, pair, _pair, privateKey, publicKey;
	
	  return _regenerator2.default.async(function generateKeyPairJWK$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          // NOTE: Safari has crypto.webkitSubtle, but does not support RSA-OAEP-SHA256
	          subtle = window.crypto && window.crypto.subtle;
	
	          if (!subtle) {
	            _context3.next = 15;
	            break;
	          }
	
	          console.log('-- Using Native RSA Generation --');
	
	          _context3.next = 5;
	          return _regenerator2.default.awrap(subtle.generateKey({
	            name: 'RSA-OAEP',
	            publicExponent: new Uint8Array([1, 0, 1]),
	            modulusLength: 2048,
	            hash: 'SHA-256'
	          }, true, ['encrypt', 'decrypt']));
	
	        case 5:
	          pair = _context3.sent;
	          _context3.next = 8;
	          return _regenerator2.default.awrap(subtle.exportKey('jwk', pair.publicKey));
	
	        case 8:
	          _context3.t0 = _context3.sent;
	          _context3.next = 11;
	          return _regenerator2.default.awrap(subtle.exportKey('jwk', pair.privateKey));
	
	        case 11:
	          _context3.t1 = _context3.sent;
	          return _context3.abrupt('return', {
	            publicKey: _context3.t0,
	            privateKey: _context3.t1
	          });
	
	        case 15:
	          console.log('-- Using Forge RSA Generation --');
	
	          _pair = _nodeForge2.default.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
	          privateKey = {
	            alg: 'RSA-OAEP-256',
	            kty: 'RSA',
	            key_ops: ['decrypt'],
	            ext: true,
	            d: _bigIntToB64Url(_pair.privateKey.d),
	            dp: _bigIntToB64Url(_pair.privateKey.dP),
	            dq: _bigIntToB64Url(_pair.privateKey.dQ),
	            e: _bigIntToB64Url(_pair.privateKey.e),
	            n: _bigIntToB64Url(_pair.privateKey.n),
	            p: _bigIntToB64Url(_pair.privateKey.p),
	            q: _bigIntToB64Url(_pair.privateKey.q),
	            qi: _bigIntToB64Url(_pair.privateKey.qInv)
	          };
	          publicKey = {
	            alg: 'RSA-OAEP-256',
	            kty: 'RSA',
	            key_ops: ['encrypt'],
	            e: _bigIntToB64Url(_pair.publicKey.e),
	            n: _bigIntToB64Url(_pair.publicKey.n)
	          };
	          return _context3.abrupt('return', { privateKey: privateKey, publicKey: publicKey });
	
	        case 20:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, null, this);
	}
	
	// ~~~~~~~~~~~~~~~~ //
	// Helper Functions //
	// ~~~~~~~~~~~~~~~~ //
	
	/**
	 * Combine email and raw salt into usable salt
	 *
	 * @param rawSalt
	 * @param rawEmail
	 * @returns {Promise}
	 */
	function _hkdfSalt(rawSalt, rawEmail) {
	  return new _promise2.default(function (resolve) {
	    var hkdf = new _hkdf2.default('sha256', rawSalt, rawEmail);
	    hkdf.derive('', DEFAULT_BYTE_LENGTH, function (buffer) {
	      return resolve(buffer.toString('hex'));
	    });
	  });
	}
	
	/**
	 * Convert a JSBN BigInteger to a URL-safe version of base64 encoding. This
	 * should only be used for encoding JWKs
	 *
	 * @param n BigInteger
	 * @returns {string}
	 */
	function _bigIntToB64Url(n) {
	  return _hexToB64Url(n.toString(16));
	}
	
	function _hexToB64Url(h) {
	  var bytes = _nodeForge2.default.util.hexToBytes(h);
	  return btoa(bytes).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
	}
	
	function _b64UrlToBigInt(s) {
	  return new _nodeForge2.default.jsbn.BigInteger(_b64UrlToHex(s), 16);
	}
	
	function _b64UrlToHex(s) {
	  var b64 = s.replace(/-/g, '+').replace(/_/g, '/');
	  return _nodeForge2.default.util.bytesToHex(atob(b64));
	}
	
	window.b64urltohex = _b64UrlToHex;
	window.forge = _nodeForge2.default;
	
	/**
	 * Derive key from password
	 *
	 * @param passphrase
	 * @param salt hex representation of salt
	 */
	function _pbkdf2Passphrase(passphrase, salt) {
	  var k, algo, derivedKeyRaw, _derivedKeyRaw;
	
	  return _regenerator2.default.async(function _pbkdf2Passphrase$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          if (!(window.crypto && window.crypto.subtle)) {
	            _context4.next = 12;
	            break;
	          }
	
	          console.log('-- Using native PBKDF2 --');
	
	          _context4.next = 4;
	          return _regenerator2.default.awrap(window.crypto.subtle.importKey('raw', Buffer.from(passphrase, 'utf8'), { name: 'PBKDF2' }, true, ['deriveBits']));
	
	        case 4:
	          k = _context4.sent;
	          algo = {
	            name: 'PBKDF2',
	            salt: new Buffer(salt, 'hex'),
	            iterations: DEFAULT_PBKDF2_ITERATIONS,
	            hash: 'SHA-256'
	          };
	          _context4.next = 8;
	          return _regenerator2.default.awrap(window.crypto.subtle.deriveBits(algo, k, DEFAULT_BYTE_LENGTH * 8));
	
	        case 8:
	          derivedKeyRaw = _context4.sent;
	          return _context4.abrupt('return', new Buffer(derivedKeyRaw).toString('hex'));
	
	        case 12:
	          console.log('-- Using SJCL PBKDF2 --');
	
	          _derivedKeyRaw = _sjcl2.default.misc.pbkdf2(passphrase, _sjcl2.default.codec.hex.toBits(salt), DEFAULT_PBKDF2_ITERATIONS, DEFAULT_BYTE_LENGTH * 8, _sjcl2.default.hash.sha1);
	          return _context4.abrupt('return', _sjcl2.default.codec.hex.fromBits(_derivedKeyRaw));
	
	        case 15:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, null, this);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer))

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(144);

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, process) {//
	// a straightforward implementation of HKDF
	//
	// https://tools.ietf.org/html/rfc5869
	//
	
	var crypto = __webpack_require__(82);
	
	function zeros(length) {
	  var buf = new Buffer(length);
	
	  buf.fill(0);
	
	  return buf.toString();
	}
	// imk is initial keying material
	function HKDF(hashAlg, salt, ikm) {
	  this.hashAlg = hashAlg;
	
	  // create the hash alg to see if it exists and get its length
	  var hash = crypto.createHash(this.hashAlg);
	  this.hashLength = hash.digest().length;
	
	  this.salt = salt || zeros(this.hashLength);
	  this.ikm = ikm;
	
	  // now we compute the PRK
	  var hmac = crypto.createHmac(this.hashAlg, this.salt);
	  hmac.update(this.ikm);
	  this.prk = hmac.digest();
	}
	
	HKDF.prototype = {
	  derive: function(info, size, cb) {
	    var prev = new Buffer(0);
	    var output;
	    var buffers = [];
	    var num_blocks = Math.ceil(size / this.hashLength);
	    info = new Buffer(info);
	
	    for (var i=0; i<num_blocks; i++) {
	      var hmac = crypto.createHmac(this.hashAlg, this.prk);
	      hmac.update(prev);
	      hmac.update(info);
	      hmac.update(new Buffer([i + 1]));
	      prev = hmac.digest();
	      buffers.push(prev);
	    }
	    output = Buffer.concat(buffers, size);
	
	    process.nextTick(function() {cb(output);});
	  }
	};
	
	module.exports = HKDF;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74).Buffer, __webpack_require__(5)))

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
	sjcl.cipher.aes=function(a){this.s[0][0][0]||this.O();var b,c,d,e,f=this.s[0][4],g=this.s[1];b=a.length;var h=1;if(4!==b&&6!==b&&8!==b)throw new sjcl.exception.invalid("invalid aes key size");this.b=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(0===a%b||8===b&&4===a%b)c=f[c>>>24]<<24^f[c>>16&255]<<16^f[c>>8&255]<<8^f[c&255],0===a%b&&(c=c<<8^c>>>24^h<<24,h=h<<1^283*(h>>7));d[a]=d[a-b]^c}for(b=0;a;b++,a--)c=d[b&3?a:a-4],e[b]=4>=a||4>b?c:g[0][f[c>>>24]]^g[1][f[c>>16&255]]^g[2][f[c>>8&255]]^g[3][f[c&
	255]]};
	sjcl.cipher.aes.prototype={encrypt:function(a){return t(this,a,0)},decrypt:function(a){return t(this,a,1)},s:[[[],[],[],[],[]],[[],[],[],[],[]]],O:function(){var a=this.s[0],b=this.s[1],c=a[4],d=b[4],e,f,g,h=[],k=[],l,n,m,p;for(e=0;0x100>e;e++)k[(h[e]=e<<1^283*(e>>7))^e]=e;for(f=g=0;!c[f];f^=l||1,g=k[g]||1)for(m=g^g<<1^g<<2^g<<3^g<<4,m=m>>8^m&255^99,c[f]=m,d[m]=f,n=h[e=h[l=h[f]]],p=0x1010101*n^0x10001*e^0x101*l^0x1010100*f,n=0x101*h[m]^0x1010100*m,e=0;4>e;e++)a[e][f]=n=n<<24^n>>>8,b[e][m]=p=p<<24^p>>>8;for(e=
	0;5>e;e++)a[e]=a[e].slice(0),b[e]=b[e].slice(0)}};
	function t(a,b,c){if(4!==b.length)throw new sjcl.exception.invalid("invalid aes block size");var d=a.b[c],e=b[0]^d[0],f=b[c?3:1]^d[1],g=b[2]^d[2];b=b[c?1:3]^d[3];var h,k,l,n=d.length/4-2,m,p=4,r=[0,0,0,0];h=a.s[c];a=h[0];var q=h[1],v=h[2],w=h[3],x=h[4];for(m=0;m<n;m++)h=a[e>>>24]^q[f>>16&255]^v[g>>8&255]^w[b&255]^d[p],k=a[f>>>24]^q[g>>16&255]^v[b>>8&255]^w[e&255]^d[p+1],l=a[g>>>24]^q[b>>16&255]^v[e>>8&255]^w[f&255]^d[p+2],b=a[b>>>24]^q[e>>16&255]^v[f>>8&255]^w[g&255]^d[p+3],p+=4,e=h,f=k,g=l;for(m=
	0;4>m;m++)r[c?3&-m:m]=x[e>>>24]<<24^x[f>>16&255]<<16^x[g>>8&255]<<8^x[b&255]^d[p++],h=e,e=f,f=g,g=b,b=h;return r}
	sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.$(a.slice(b/32),32-(b&31)).slice(1);return void 0===c?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(0===a.length||0===b.length)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return 32===d?a.concat(b):sjcl.bitArray.$(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;return 0===
	b?0:32*(b-1)+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(32*a.length<b)return a;a=a.slice(0,Math.ceil(b/32));var c=a.length;b=b&31;0<c&&b&&(a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1));return a},partial:function(a,b,c){return 32===a?b:(c?b|0:b<<32-a)+0x10000000000*a},getPartial:function(a){return Math.round(a/0x10000000000)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return!1;var c=0,d;for(d=0;d<a.length;d++)c|=a[d]^b[d];return 0===
	c},$:function(a,b,c,d){var e;e=0;for(void 0===d&&(d=[]);32<=b;b-=32)d.push(c),c=0;if(0===b)return d.concat(a);for(e=0;e<a.length;e++)d.push(c|a[e]>>>b),c=a[e]<<32-b;e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,32<b+a?c:d.pop(),1));return d},i:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]},byteswapM:function(a){var b,c;for(b=0;b<a.length;++b)c=a[b],a[b]=c>>>24|c>>>8&0xff00|(c&0xff00)<<8|c<<24;return a}};
	sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++)0===(d&3)&&(e=a[d/4]),b+=String.fromCharCode(e>>>24),e<<=8;return decodeURIComponent(escape(b))},toBits:function(a){a=unescape(encodeURIComponent(a));var b=[],c,d=0;for(c=0;c<a.length;c++)d=d<<8|a.charCodeAt(c),3===(c&3)&&(b.push(d),d=0);c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
	sjcl.codec.hex={fromBits:function(a){var b="",c;for(c=0;c<a.length;c++)b+=((a[c]|0)+0xf00000000000).toString(16).substr(4);return b.substr(0,sjcl.bitArray.bitLength(a)/4)},toBits:function(a){var b,c=[],d;a=a.replace(/\s|0x/g,"");d=a.length;a=a+"00000000";for(b=0;b<a.length;b+=8)c.push(parseInt(a.substr(b,8),16)^0);return sjcl.bitArray.clamp(c,4*d)}};
	sjcl.codec.base32={B:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",X:"0123456789ABCDEFGHIJKLMNOPQRSTUV",BITS:32,BASE:5,REMAINING:27,fromBits:function(a,b,c){var d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,f="",g=0,h=sjcl.codec.base32.B,k=0,l=sjcl.bitArray.bitLength(a);c&&(h=sjcl.codec.base32.X);for(c=0;f.length*d<l;)f+=h.charAt((k^a[c]>>>g)>>>e),g<d?(k=a[c]<<d-g,g+=e,c++):(k<<=d,g-=d);for(;f.length&7&&!b;)f+="=";return f},toBits:function(a,b){a=a.replace(/\s|=/g,"").toUpperCase();var c=sjcl.codec.base32.BITS,
	d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,f=[],g,h=0,k=sjcl.codec.base32.B,l=0,n,m="base32";b&&(k=sjcl.codec.base32.X,m="base32hex");for(g=0;g<a.length;g++){n=k.indexOf(a.charAt(g));if(0>n){if(!b)try{return sjcl.codec.base32hex.toBits(a)}catch(p){}throw new sjcl.exception.invalid("this isn't "+m+"!");}h>e?(h-=e,f.push(l^n>>>h),l=n<<c-h):(h+=d,l^=n<<c-h)}h&56&&f.push(sjcl.bitArray.partial(h&56,l,1));return f}};
	sjcl.codec.base32hex={fromBits:function(a,b){return sjcl.codec.base32.fromBits(a,b,1)},toBits:function(a){return sjcl.codec.base32.toBits(a,1)}};
	sjcl.codec.base64={B:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,f=sjcl.codec.base64.B,g=0,h=sjcl.bitArray.bitLength(a);c&&(f=f.substr(0,62)+"-_");for(c=0;6*d.length<h;)d+=f.charAt((g^a[c]>>>e)>>>26),6>e?(g=a[c]<<6-e,e+=26,c++):(g<<=6,e-=6);for(;d.length&3&&!b;)d+="=";return d},toBits:function(a,b){a=a.replace(/\s|=/g,"");var c=[],d,e=0,f=sjcl.codec.base64.B,g=0,h;b&&(f=f.substr(0,62)+"-_");for(d=0;d<a.length;d++){h=f.indexOf(a.charAt(d));
	if(0>h)throw new sjcl.exception.invalid("this isn't base64!");26<e?(e-=26,c.push(g^h>>>e),g=h<<32-e):(e+=6,g^=h<<32-e)}e&56&&c.push(sjcl.bitArray.partial(e&56,g,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.b[0]||this.O();a?(this.F=a.F.slice(0),this.A=a.A.slice(0),this.l=a.l):this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
	sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.F=this.Y.slice(0);this.A=[];this.l=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this.A=sjcl.bitArray.concat(this.A,a);b=this.l;a=this.l=b+sjcl.bitArray.bitLength(a);if(0x1fffffffffffff<a)throw new sjcl.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!==typeof Uint32Array){var d=new Uint32Array(c),e=0;for(b=512+b-(512+b&0x1ff);b<=a;b+=512)u(this,d.subarray(16*e,
	16*(e+1))),e+=1;c.splice(0,16*e)}else for(b=512+b-(512+b&0x1ff);b<=a;b+=512)u(this,c.splice(0,16));return this},finalize:function(){var a,b=this.A,c=this.F,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.l/0x100000000));for(b.push(this.l|0);b.length;)u(this,b.splice(0,16));this.reset();return c},Y:[],b:[],O:function(){function a(a){return 0x100000000*(a-Math.floor(a))|0}for(var b=0,c=2,d,e;64>b;c++){e=!0;for(d=2;d*d<=c;d++)if(0===c%d){e=
	!1;break}e&&(8>b&&(this.Y[b]=a(Math.pow(c,.5))),this.b[b]=a(Math.pow(c,1/3)),b++)}}};
	function u(a,b){var c,d,e,f=a.F,g=a.b,h=f[0],k=f[1],l=f[2],n=f[3],m=f[4],p=f[5],r=f[6],q=f[7];for(c=0;64>c;c++)16>c?d=b[c]:(d=b[c+1&15],e=b[c+14&15],d=b[c&15]=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+b[c&15]+b[c+9&15]|0),d=d+q+(m>>>6^m>>>11^m>>>25^m<<26^m<<21^m<<7)+(r^m&(p^r))+g[c],q=r,r=p,p=m,m=n+d|0,n=l,l=k,k=h,h=d+(k&l^n&(k^l))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;f[0]=f[0]+h|0;f[1]=f[1]+k|0;f[2]=f[2]+l|0;f[3]=f[3]+n|0;f[4]=f[4]+m|0;f[5]=f[5]+p|0;f[6]=f[6]+r|0;f[7]=
	f[7]+q|0}
	sjcl.mode.ccm={name:"ccm",G:[],listenProgress:function(a){sjcl.mode.ccm.G.push(a)},unListenProgress:function(a){a=sjcl.mode.ccm.G.indexOf(a);-1<a&&sjcl.mode.ccm.G.splice(a,1)},fa:function(a){var b=sjcl.mode.ccm.G.slice(),c;for(c=0;c<b.length;c+=1)b[c](a)},encrypt:function(a,b,c,d,e){var f,g=b.slice(0),h=sjcl.bitArray,k=h.bitLength(c)/8,l=h.bitLength(g)/8;e=e||64;d=d||[];if(7>k)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(f=2;4>f&&l>>>8*f;f++);f<15-k&&(f=15-k);c=h.clamp(c,
	8*(15-f));b=sjcl.mode.ccm.V(a,b,c,d,e,f);g=sjcl.mode.ccm.C(a,g,c,b,e,f);return h.concat(g.data,g.tag)},decrypt:function(a,b,c,d,e){e=e||64;d=d||[];var f=sjcl.bitArray,g=f.bitLength(c)/8,h=f.bitLength(b),k=f.clamp(b,h-e),l=f.bitSlice(b,h-e),h=(h-e)/8;if(7>g)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(b=2;4>b&&h>>>8*b;b++);b<15-g&&(b=15-g);c=f.clamp(c,8*(15-b));k=sjcl.mode.ccm.C(a,k,c,l,e,b);a=sjcl.mode.ccm.V(a,k.data,c,d,e,b);if(!f.equal(k.tag,a))throw new sjcl.exception.corrupt("ccm: tag doesn't match");
	return k.data},na:function(a,b,c,d,e,f){var g=[],h=sjcl.bitArray,k=h.i;d=[h.partial(8,(b.length?64:0)|d-2<<2|f-1)];d=h.concat(d,c);d[3]|=e;d=a.encrypt(d);if(b.length)for(c=h.bitLength(b)/8,65279>=c?g=[h.partial(16,c)]:0xffffffff>=c&&(g=h.concat([h.partial(16,65534)],[c])),g=h.concat(g,b),b=0;b<g.length;b+=4)d=a.encrypt(k(d,g.slice(b,b+4).concat([0,0,0])));return d},V:function(a,b,c,d,e,f){var g=sjcl.bitArray,h=g.i;e/=8;if(e%2||4>e||16<e)throw new sjcl.exception.invalid("ccm: invalid tag length");
	if(0xffffffff<d.length||0xffffffff<b.length)throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");c=sjcl.mode.ccm.na(a,d,c,e,g.bitLength(b)/8,f);for(d=0;d<b.length;d+=4)c=a.encrypt(h(c,b.slice(d,d+4).concat([0,0,0])));return g.clamp(c,8*e)},C:function(a,b,c,d,e,f){var g,h=sjcl.bitArray;g=h.i;var k=b.length,l=h.bitLength(b),n=k/50,m=n;c=h.concat([h.partial(8,f-1)],c).concat([0,0,0]).slice(0,4);d=h.bitSlice(g(d,a.encrypt(c)),0,e);if(!k)return{tag:d,data:[]};for(g=0;g<k;g+=4)g>n&&(sjcl.mode.ccm.fa(g/
	k),n+=m),c[3]++,e=a.encrypt(c),b[g]^=e[0],b[g+1]^=e[1],b[g+2]^=e[2],b[g+3]^=e[3];return{tag:d,data:h.clamp(b,l)}}};
	sjcl.mode.ocb2={name:"ocb2",encrypt:function(a,b,c,d,e,f){if(128!==sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");var g,h=sjcl.mode.ocb2.S,k=sjcl.bitArray,l=k.i,n=[0,0,0,0];c=h(a.encrypt(c));var m,p=[];d=d||[];e=e||64;for(g=0;g+4<b.length;g+=4)m=b.slice(g,g+4),n=l(n,m),p=p.concat(l(c,a.encrypt(l(c,m)))),c=h(c);m=b.slice(g);b=k.bitLength(m);g=a.encrypt(l(c,[0,0,0,b]));m=k.clamp(l(m.concat([0,0,0]),g),b);n=l(n,l(m.concat([0,0,0]),g));n=a.encrypt(l(n,l(c,h(c))));
	d.length&&(n=l(n,f?d:sjcl.mode.ocb2.pmac(a,d)));return p.concat(k.concat(m,k.clamp(n,e)))},decrypt:function(a,b,c,d,e,f){if(128!==sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");e=e||64;var g=sjcl.mode.ocb2.S,h=sjcl.bitArray,k=h.i,l=[0,0,0,0],n=g(a.encrypt(c)),m,p,r=sjcl.bitArray.bitLength(b)-e,q=[];d=d||[];for(c=0;c+4<r/32;c+=4)m=k(n,a.decrypt(k(n,b.slice(c,c+4)))),l=k(l,m),q=q.concat(m),n=g(n);p=r-32*c;m=a.encrypt(k(n,[0,0,0,p]));m=k(m,h.clamp(b.slice(c),p).concat([0,
	0,0]));l=k(l,m);l=a.encrypt(k(l,k(n,g(n))));d.length&&(l=k(l,f?d:sjcl.mode.ocb2.pmac(a,d)));if(!h.equal(h.clamp(l,e),h.bitSlice(b,r)))throw new sjcl.exception.corrupt("ocb: tag doesn't match");return q.concat(h.clamp(m,p))},pmac:function(a,b){var c,d=sjcl.mode.ocb2.S,e=sjcl.bitArray,f=e.i,g=[0,0,0,0],h=a.encrypt([0,0,0,0]),h=f(h,d(d(h)));for(c=0;c+4<b.length;c+=4)h=d(h),g=f(g,a.encrypt(f(h,b.slice(c,c+4))));c=b.slice(c);128>e.bitLength(c)&&(h=f(h,d(h)),c=e.concat(c,[-2147483648,0,0,0]));g=f(g,c);
	return a.encrypt(f(d(f(h,d(h))),g))},S:function(a){return[a[0]<<1^a[1]>>>31,a[1]<<1^a[2]>>>31,a[2]<<1^a[3]>>>31,a[3]<<1^135*(a[0]>>>31)]}};
	sjcl.mode.gcm={name:"gcm",encrypt:function(a,b,c,d,e){var f=b.slice(0);b=sjcl.bitArray;d=d||[];a=sjcl.mode.gcm.C(!0,a,f,d,c,e||128);return b.concat(a.data,a.tag)},decrypt:function(a,b,c,d,e){var f=b.slice(0),g=sjcl.bitArray,h=g.bitLength(f);e=e||128;d=d||[];e<=h?(b=g.bitSlice(f,h-e),f=g.bitSlice(f,0,h-e)):(b=f,f=[]);a=sjcl.mode.gcm.C(!1,a,f,d,c,e);if(!g.equal(a.tag,b))throw new sjcl.exception.corrupt("gcm: tag doesn't match");return a.data},ka:function(a,b){var c,d,e,f,g,h=sjcl.bitArray.i;e=[0,0,
	0,0];f=b.slice(0);for(c=0;128>c;c++){(d=0!==(a[Math.floor(c/32)]&1<<31-c%32))&&(e=h(e,f));g=0!==(f[3]&1);for(d=3;0<d;d--)f[d]=f[d]>>>1|(f[d-1]&1)<<31;f[0]>>>=1;g&&(f[0]^=-0x1f000000)}return e},j:function(a,b,c){var d,e=c.length;b=b.slice(0);for(d=0;d<e;d+=4)b[0]^=0xffffffff&c[d],b[1]^=0xffffffff&c[d+1],b[2]^=0xffffffff&c[d+2],b[3]^=0xffffffff&c[d+3],b=sjcl.mode.gcm.ka(b,a);return b},C:function(a,b,c,d,e,f){var g,h,k,l,n,m,p,r,q=sjcl.bitArray;m=c.length;p=q.bitLength(c);r=q.bitLength(d);h=q.bitLength(e);
	g=b.encrypt([0,0,0,0]);96===h?(e=e.slice(0),e=q.concat(e,[1])):(e=sjcl.mode.gcm.j(g,[0,0,0,0],e),e=sjcl.mode.gcm.j(g,e,[0,0,Math.floor(h/0x100000000),h&0xffffffff]));h=sjcl.mode.gcm.j(g,[0,0,0,0],d);n=e.slice(0);d=h.slice(0);a||(d=sjcl.mode.gcm.j(g,h,c));for(l=0;l<m;l+=4)n[3]++,k=b.encrypt(n),c[l]^=k[0],c[l+1]^=k[1],c[l+2]^=k[2],c[l+3]^=k[3];c=q.clamp(c,p);a&&(d=sjcl.mode.gcm.j(g,h,c));a=[Math.floor(r/0x100000000),r&0xffffffff,Math.floor(p/0x100000000),p&0xffffffff];d=sjcl.mode.gcm.j(g,d,a);k=b.encrypt(e);
	d[0]^=k[0];d[1]^=k[1];d[2]^=k[2];d[3]^=k[3];return{tag:q.bitSlice(d,0,f),data:c}}};sjcl.misc.hmac=function(a,b){this.W=b=b||sjcl.hash.sha256;var c=[[],[]],d,e=b.prototype.blockSize/32;this.w=[new b,new b];a.length>e&&(a=b.hash(a));for(d=0;d<e;d++)c[0][d]=a[d]^909522486,c[1][d]=a[d]^1549556828;this.w[0].update(c[0]);this.w[1].update(c[1]);this.R=new b(this.w[0])};
	sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a){if(this.aa)throw new sjcl.exception.invalid("encrypt on already updated hmac called!");this.update(a);return this.digest(a)};sjcl.misc.hmac.prototype.reset=function(){this.R=new this.W(this.w[0]);this.aa=!1};sjcl.misc.hmac.prototype.update=function(a){this.aa=!0;this.R.update(a)};sjcl.misc.hmac.prototype.digest=function(){var a=this.R.finalize(),a=(new this.W(this.w[1])).update(a).finalize();this.reset();return a};
	sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E4;if(0>d||0>c)throw new sjcl.exception.invalid("invalid params to pbkdf2");"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));e=e||sjcl.misc.hmac;a=new e(a);var f,g,h,k,l=[],n=sjcl.bitArray;for(k=1;32*l.length<(d||1);k++){e=f=a.encrypt(n.concat(b,[k]));for(g=1;g<c;g++)for(f=a.encrypt(f),h=0;h<f.length;h++)e[h]^=f[h];l=l.concat(e)}d&&(l=n.clamp(l,d));return l};
	sjcl.prng=function(a){this.c=[new sjcl.hash.sha256];this.m=[0];this.P=0;this.H={};this.N=0;this.U={};this.Z=this.f=this.o=this.ha=0;this.b=[0,0,0,0,0,0,0,0];this.h=[0,0,0,0];this.L=void 0;this.M=a;this.D=!1;this.K={progress:{},seeded:{}};this.u=this.ga=0;this.I=1;this.J=2;this.ca=0x10000;this.T=[0,48,64,96,128,192,0x100,384,512,768,1024];this.da=3E4;this.ba=80};
	sjcl.prng.prototype={randomWords:function(a,b){var c=[],d;d=this.isReady(b);var e;if(d===this.u)throw new sjcl.exception.notReady("generator isn't seeded");if(d&this.J){d=!(d&this.I);e=[];var f=0,g;this.Z=e[0]=(new Date).valueOf()+this.da;for(g=0;16>g;g++)e.push(0x100000000*Math.random()|0);for(g=0;g<this.c.length&&(e=e.concat(this.c[g].finalize()),f+=this.m[g],this.m[g]=0,d||!(this.P&1<<g));g++);this.P>=1<<this.c.length&&(this.c.push(new sjcl.hash.sha256),this.m.push(0));this.f-=f;f>this.o&&(this.o=
	f);this.P++;this.b=sjcl.hash.sha256.hash(this.b.concat(e));this.L=new sjcl.cipher.aes(this.b);for(d=0;4>d&&(this.h[d]=this.h[d]+1|0,!this.h[d]);d++);}for(d=0;d<a;d+=4)0===(d+1)%this.ca&&y(this),e=z(this),c.push(e[0],e[1],e[2],e[3]);y(this);return c.slice(0,a)},setDefaultParanoia:function(a,b){if(0===a&&"Setting paranoia=0 will ruin your security; use it only for testing"!==b)throw new sjcl.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");this.M=a},addEntropy:function(a,
	b,c){c=c||"user";var d,e,f=(new Date).valueOf(),g=this.H[c],h=this.isReady(),k=0;d=this.U[c];void 0===d&&(d=this.U[c]=this.ha++);void 0===g&&(g=this.H[c]=0);this.H[c]=(this.H[c]+1)%this.c.length;switch(typeof a){case "number":void 0===b&&(b=1);this.c[g].update([d,this.N++,1,b,f,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if("[object Uint32Array]"===c){e=[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else for("[object Array]"!==c&&(k=1),c=0;c<a.length&&!k;c++)"number"!==typeof a[c]&&
	(k=1);if(!k){if(void 0===b)for(c=b=0;c<a.length;c++)for(e=a[c];0<e;)b++,e=e>>>1;this.c[g].update([d,this.N++,2,b,f,a.length].concat(a))}break;case "string":void 0===b&&(b=a.length);this.c[g].update([d,this.N++,3,b,f,a.length]);this.c[g].update(a);break;default:k=1}if(k)throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");this.m[g]+=b;this.f+=b;h===this.u&&(this.isReady()!==this.u&&A("seeded",Math.max(this.o,this.f)),A("progress",this.getProgress()))},
	isReady:function(a){a=this.T[void 0!==a?a:this.M];return this.o&&this.o>=a?this.m[0]>this.ba&&(new Date).valueOf()>this.Z?this.J|this.I:this.I:this.f>=a?this.J|this.u:this.u},getProgress:function(a){a=this.T[a?a:this.M];return this.o>=a?1:this.f>a?1:this.f/a},startCollectors:function(){if(!this.D){this.a={loadTimeCollector:B(this,this.ma),mouseCollector:B(this,this.oa),keyboardCollector:B(this,this.la),accelerometerCollector:B(this,this.ea),touchCollector:B(this,this.qa)};if(window.addEventListener)window.addEventListener("load",
	this.a.loadTimeCollector,!1),window.addEventListener("mousemove",this.a.mouseCollector,!1),window.addEventListener("keypress",this.a.keyboardCollector,!1),window.addEventListener("devicemotion",this.a.accelerometerCollector,!1),window.addEventListener("touchmove",this.a.touchCollector,!1);else if(document.attachEvent)document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector);else throw new sjcl.exception.bug("can't attach event");
	this.D=!0}},stopCollectors:function(){this.D&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,!1),window.removeEventListener("mousemove",this.a.mouseCollector,!1),window.removeEventListener("keypress",this.a.keyboardCollector,!1),window.removeEventListener("devicemotion",this.a.accelerometerCollector,!1),window.removeEventListener("touchmove",this.a.touchCollector,!1)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",
	this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.D=!1)},addEventListener:function(a,b){this.K[a][this.ga++]=b},removeEventListener:function(a,b){var c,d,e=this.K[a],f=[];for(d in e)e.hasOwnProperty(d)&&e[d]===b&&f.push(d);for(c=0;c<f.length;c++)d=f[c],delete e[d]},la:function(){C(this,1)},oa:function(a){var b,c;try{b=a.x||a.clientX||a.offsetX||0,c=a.y||a.clientY||a.offsetY||0}catch(d){c=b=0}0!=b&&0!=c&&this.addEntropy([b,c],2,"mouse");C(this,0)},qa:function(a){a=
	a.touches[0]||a.changedTouches[0];this.addEntropy([a.pageX||a.clientX,a.pageY||a.clientY],1,"touch");C(this,0)},ma:function(){C(this,2)},ea:function(a){a=a.accelerationIncludingGravity.x||a.accelerationIncludingGravity.y||a.accelerationIncludingGravity.z;if(window.orientation){var b=window.orientation;"number"===typeof b&&this.addEntropy(b,1,"accelerometer")}a&&this.addEntropy(a,2,"accelerometer");C(this,0)}};
	function A(a,b){var c,d=sjcl.random.K[a],e=[];for(c in d)d.hasOwnProperty(c)&&e.push(d[c]);for(c=0;c<e.length;c++)e[c](b)}function C(a,b){"undefined"!==typeof window&&window.performance&&"function"===typeof window.performance.now?a.addEntropy(window.performance.now(),b,"loadtime"):a.addEntropy((new Date).valueOf(),b,"loadtime")}function y(a){a.b=z(a).concat(z(a));a.L=new sjcl.cipher.aes(a.b)}function z(a){for(var b=0;4>b&&(a.h[b]=a.h[b]+1|0,!a.h[b]);b++);return a.L.encrypt(a.h)}
	function B(a,b){return function(){b.apply(a,arguments)}}sjcl.random=new sjcl.prng(6);
	a:try{var D,E,F,G;if(G="undefined"!==typeof module&&module.exports){var H;try{H=__webpack_require__(82)}catch(a){H=null}G=E=H}if(G&&E.randomBytes)D=E.randomBytes(128),D=new Uint32Array((new Uint8Array(D)).buffer),sjcl.random.addEntropy(D,1024,"crypto['randomBytes']");else if("undefined"!==typeof window&&"undefined"!==typeof Uint32Array){F=new Uint32Array(32);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(F);else if(window.msCrypto&&window.msCrypto.getRandomValues)window.msCrypto.getRandomValues(F);
	else break a;sjcl.random.addEntropy(F,1024,"crypto['getRandomValues']")}}catch(a){"undefined"!==typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(a))}
	sjcl.json={defaults:{v:1,iter:1E4,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},ja:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json,f=e.g({iv:sjcl.random.randomWords(4,0)},e.defaults),g;e.g(f,c);c=f.adata;"string"===typeof f.salt&&(f.salt=sjcl.codec.base64.toBits(f.salt));"string"===typeof f.iv&&(f.iv=sjcl.codec.base64.toBits(f.iv));if(!sjcl.mode[f.mode]||!sjcl.cipher[f.cipher]||"string"===typeof a&&100>=f.iter||64!==f.ts&&96!==f.ts&&128!==f.ts||128!==f.ks&&192!==f.ks&&0x100!==f.ks||2>f.iv.length||
	4<f.iv.length)throw new sjcl.exception.invalid("json encrypt: invalid parameters");"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,f),a=g.key.slice(0,f.ks/32),f.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.publicKey&&(g=a.kem(),f.kemtag=g.tag,a=g.key.slice(0,f.ks/32));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));"string"===typeof c&&(f.adata=c=sjcl.codec.utf8String.toBits(c));g=new sjcl.cipher[f.cipher](a);e.g(d,f);d.key=a;f.ct="ccm"===f.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&
	b instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.encrypt(g,b,f.iv,c,f.ts):sjcl.mode[f.mode].encrypt(g,b,f.iv,c,f.ts);return f},encrypt:function(a,b,c,d){var e=sjcl.json,f=e.ja.apply(e,arguments);return e.encode(f)},ia:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json;b=e.g(e.g(e.g({},e.defaults),b),c,!0);var f,g;f=b.adata;"string"===typeof b.salt&&(b.salt=sjcl.codec.base64.toBits(b.salt));"string"===typeof b.iv&&(b.iv=sjcl.codec.base64.toBits(b.iv));if(!sjcl.mode[b.mode]||!sjcl.cipher[b.cipher]||"string"===
	typeof a&&100>=b.iter||64!==b.ts&&96!==b.ts&&128!==b.ts||128!==b.ks&&192!==b.ks&&0x100!==b.ks||!b.iv||2>b.iv.length||4<b.iv.length)throw new sjcl.exception.invalid("json decrypt: invalid parameters");"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,b),a=g.key.slice(0,b.ks/32),b.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.secretKey&&(a=a.unkem(sjcl.codec.base64.toBits(b.kemtag)).slice(0,b.ks/32));"string"===typeof f&&(f=sjcl.codec.utf8String.toBits(f));g=new sjcl.cipher[b.cipher](a);f="ccm"===
	b.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&b.ct instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.decrypt(g,b.ct,b.iv,b.tag,f,b.ts):sjcl.mode[b.mode].decrypt(g,b.ct,b.iv,f,b.ts);e.g(d,b);d.key=a;return 1===c.raw?f:sjcl.codec.utf8String.fromBits(f)},decrypt:function(a,b,c,d){var e=sjcl.json;return e.ia(a,e.decode(b),c,d)},encode:function(a){var b,c="{",d="";for(b in a)if(a.hasOwnProperty(b)){if(!b.match(/^[a-z0-9]+$/i))throw new sjcl.exception.invalid("json encode: invalid property name");c+=d+'"'+
	b+'":';d=",";switch(typeof a[b]){case "number":case "boolean":c+=a[b];break;case "string":c+='"'+escape(a[b])+'"';break;case "object":c+='"'+sjcl.codec.base64.fromBits(a[b],0)+'"';break;default:throw new sjcl.exception.bug("json encode: unsupported type");}}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");if(!a.match(/^\{.*\}$/))throw new sjcl.exception.invalid("json decode: this isn't json!");a=a.replace(/^\{|\}$/g,"").split(/,/);var b={},c,d;for(c=0;c<a.length;c++){if(!(d=a[c].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i)))throw new sjcl.exception.invalid("json decode: this isn't json!");
	null!=d[3]?b[d[2]]=parseInt(d[3],10):null!=d[4]?b[d[2]]=d[2].match(/^(ct|adata|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4]):null!=d[5]&&(b[d[2]]="true"===d[5])}return b},g:function(a,b,c){void 0===a&&(a={});if(void 0===b)return a;for(var d in b)if(b.hasOwnProperty(d)){if(c&&void 0!==a[d]&&a[d]!==b[d])throw new sjcl.exception.invalid("required parameter overridden");a[d]=b[d]}return a},sa:function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&a[d]!==b[d]&&(c[d]=a[d]);return c},ra:function(a,
	b){var c={},d;for(d=0;d<b.length;d++)void 0!==a[b[d]]&&(c[b[d]]=a[b[d]]);return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.pa={};sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc.pa,d;b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=void 0===b.salt?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};
	"undefined"!==typeof module&&module.exports&&(module.exports=sjcl);"function"==="function"&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return sjcl}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, setImmediate, module, Buffer) {(function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e.forge=t()})(this,function(){var e,t,n;return function(r){function v(e,t){return h.call(e,t)}function m(e,t){var n,r,i,s,o,u,a,f,c,h,p,v=t&&t.split("/"),m=l.map,g=m&&m["*"]||{};if(e&&e.charAt(0)===".")if(t){v=v.slice(0,v.length-1),e=e.split("/"),o=e.length-1,l.nodeIdCompat&&d.test(e[o])&&(e[o]=e[o].replace(d,"")),e=v.concat(e);for(c=0;c<e.length;c+=1){p=e[c];if(p===".")e.splice(c,1),c-=1;else if(p===".."){if(c===1&&(e[2]===".."||e[0]===".."))break;c>0&&(e.splice(c-1,2),c-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((v||g)&&m){n=e.split("/");for(c=n.length;c>0;c-=1){r=n.slice(0,c).join("/");if(v)for(h=v.length;h>0;h-=1){i=m[v.slice(0,h).join("/")];if(i){i=i[r];if(i){s=i,u=c;break}}}if(s)break;!a&&g&&g[r]&&(a=g[r],f=c)}!s&&a&&(s=a,u=f),s&&(n.splice(0,u,s),e=n.join("/"))}return e}function g(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function y(e){return function(t){return m(t,e)}}function b(e){return function(t){a[e]=t}}function w(e){if(v(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!v(a,e)&&!v(c,e))throw new Error("No "+e);return a[e]}function E(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice,d=/\.js$/;o=function(e,t){var n,r=E(e),i=r[0];return e=r[1],i&&(i=m(i,t),n=w(i)),i?n&&n.normalize?e=n.normalize(e,y(t)):e=m(e,t):(e=m(e,t),r=E(e),i=r[0],e=r[1],i&&(n=w(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return g(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:S(e)}}},i=function(e,t,n,i){var s,l,h,p,d,m=[],y=typeof n,E;i=i||e;if(y==="undefined"||y==="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(d=0;d<t.length;d+=1){p=o(t[d],i),l=p.f;if(l==="require")m[d]=u.require(e);else if(l==="exports")m[d]=u.exports(e),E=!0;else if(l==="module")s=m[d]=u.module(e);else if(v(a,l)||v(f,l)||v(c,l))m[d]=w(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,g(i,!0),b(l),{}),m[d]=a[l]}}h=n?n.apply(a[e],m):undefined;if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!E)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){if(typeof e=="string")return u[e]?u[e](t):w(o(e,t).f);if(!e.splice){l=e,l.deps&&s(l.deps,l.callback);if(!t)return;t.splice?(e=t,t=n,n=null):e=r}return t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s},s.config=function(e){return s(e)},e._defined=a,n=function(e,t,n){t.splice||(n=t,t=[]),!v(a,e)&&!v(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}}(),n("node_modules/almond/almond",function(){}),function(){function e(e){function n(e){this.data="",this.read=0;if(typeof e=="string")this.data=e;else if(t.isArrayBuffer(e)||t.isArrayBufferView(e)){var r=new Uint8Array(e);try{this.data=String.fromCharCode.apply(null,r)}catch(i){for(var s=0;s<r.length;++s)this.putByte(r[s])}}else if(e instanceof n||typeof e=="object"&&typeof e.data=="string"&&typeof e.read=="number")this.data=e.data,this.read=e.read;this._constructedStringLength=0}function i(e,n){n=n||{},this.read=n.readOffset||0,this.growSize=n.growSize||1024;var r=t.isArrayBuffer(e),i=t.isArrayBufferView(e);if(r||i){r?this.data=new DataView(e):this.data=new DataView(e.buffer,e.byteOffset,e.byteLength),this.write="writeOffset"in n?n.writeOffset:this.data.byteLength;return}this.data=new DataView(new ArrayBuffer(0)),this.write=0,e!==null&&e!==undefined&&this.putBytes(e),"writeOffset"in n&&(this.write=n.writeOffset)}var t=e.util=e.util||{};(function(){if(typeof process!="undefined"&&process.nextTick){t.nextTick=process.nextTick,typeof setImmediate=="function"?t.setImmediate=setImmediate:t.setImmediate=t.nextTick;return}if(typeof setImmediate=="function"){t.setImmediate=function(){return setImmediate.apply(undefined,arguments)},t.nextTick=function(e){return setImmediate(e)};return}t.setImmediate=function(e){setTimeout(e,0)};if(typeof window!="undefined"&&typeof window.postMessage=="function"){var e="forge.setImmediate",n=[];t.setImmediate=function(t){n.push(t),n.length===1&&window.postMessage(e,"*")};function r(t){if(t.source===window&&t.data===e){t.stopPropagation();var r=n.slice();n.length=0,r.forEach(function(e){e()})}}window.addEventListener("message",r,!0)}if(typeof MutationObserver!="undefined"){var i=Date.now(),s=!0,o=document.createElement("div"),n=[];(new MutationObserver(function(){var e=n.slice();n.length=0,e.forEach(function(e){e()})})).observe(o,{attributes:!0});var u=t.setImmediate;t.setImmediate=function(e){Date.now()-i>15?(i=Date.now(),u(e)):(n.push(e),n.length===1&&o.setAttribute("a",s=!s))}}t.nextTick=t.setImmediate})(),t.isArray=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},t.isArrayBuffer=function(e){return typeof ArrayBuffer!="undefined"&&e instanceof ArrayBuffer},t.isArrayBufferView=function(e){return e&&t.isArrayBuffer(e.buffer)&&e.byteLength!==undefined},t.ByteBuffer=n,t.ByteStringBuffer=n;var r=4096;t.ByteStringBuffer.prototype._optimizeConstructedString=function(e){this._constructedStringLength+=e,this._constructedStringLength>r&&(this.data.substr(0,1),this._constructedStringLength=0)},t.ByteStringBuffer.prototype.length=function(){return this.data.length-this.read},t.ByteStringBuffer.prototype.isEmpty=function(){return this.length()<=0},t.ByteStringBuffer.prototype.putByte=function(e){return this.putBytes(String.fromCharCode(e))},t.ByteStringBuffer.prototype.fillWithByte=function(e,t){e=String.fromCharCode(e);var n=this.data;while(t>0)t&1&&(n+=e),t>>>=1,t>0&&(e+=e);return this.data=n,this._optimizeConstructedString(t),this},t.ByteStringBuffer.prototype.putBytes=function(e){return this.data+=e,this._optimizeConstructedString(e.length),this},t.ByteStringBuffer.prototype.putString=function(e){return this.putBytes(t.encodeUtf8(e))},t.ByteStringBuffer.prototype.putInt16=function(e){return this.putBytes(String.fromCharCode(e>>8&255)+String.fromCharCode(e&255))},t.ByteStringBuffer.prototype.putInt24=function(e){return this.putBytes(String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(e&255))},t.ByteStringBuffer.prototype.putInt32=function(e){return this.putBytes(String.fromCharCode(e>>24&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(e&255))},t.ByteStringBuffer.prototype.putInt16Le=function(e){return this.putBytes(String.fromCharCode(e&255)+String.fromCharCode(e>>8&255))},t.ByteStringBuffer.prototype.putInt24Le=function(e){return this.putBytes(String.fromCharCode(e&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(e>>16&255))},t.ByteStringBuffer.prototype.putInt32Le=function(e){return this.putBytes(String.fromCharCode(e&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>24&255))},t.ByteStringBuffer.prototype.putInt=function(e,t){var n="";do t-=8,n+=String.fromCharCode(e>>t&255);while(t>0);return this.putBytes(n)},t.ByteStringBuffer.prototype.putSignedInt=function(e,t){return e<0&&(e+=2<<t-1),this.putInt(e,t)},t.ByteStringBuffer.prototype.putBuffer=function(e){return this.putBytes(e.getBytes())},t.ByteStringBuffer.prototype.getByte=function(){return this.data.charCodeAt(this.read++)},t.ByteStringBuffer.prototype.getInt16=function(){var e=this.data.charCodeAt(this.read)<<8^this.data.charCodeAt(this.read+1);return this.read+=2,e},t.ByteStringBuffer.prototype.getInt24=function(){var e=this.data.charCodeAt(this.read)<<16^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2);return this.read+=3,e},t.ByteStringBuffer.prototype.getInt32=function(){var e=this.data.charCodeAt(this.read)<<24^this.data.charCodeAt(this.read+1)<<16^this.data.charCodeAt(this.read+2)<<8^this.data.charCodeAt(this.read+3);return this.read+=4,e},t.ByteStringBuffer.prototype.getInt16Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8;return this.read+=2,e},t.ByteStringBuffer.prototype.getInt24Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16;return this.read+=3,e},t.ByteStringBuffer.prototype.getInt32Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16^this.data.charCodeAt(this.read+3)<<24;return this.read+=4,e},t.ByteStringBuffer.prototype.getInt=function(e){var t=0;do t=(t<<8)+this.data.charCodeAt(this.read++),e-=8;while(e>0);return t},t.ByteStringBuffer.prototype.getSignedInt=function(e){var t=this.getInt(e),n=2<<e-2;return t>=n&&(t-=n<<1),t},t.ByteStringBuffer.prototype.getBytes=function(e){var t;return e?(e=Math.min(this.length(),e),t=this.data.slice(this.read,this.read+e),this.read+=e):e===0?t="":(t=this.read===0?this.data:this.data.slice(this.read),this.clear()),t},t.ByteStringBuffer.prototype.bytes=function(e){return typeof e=="undefined"?this.data.slice(this.read):this.data.slice(this.read,this.read+e)},t.ByteStringBuffer.prototype.at=function(e){return this.data.charCodeAt(this.read+e)},t.ByteStringBuffer.prototype.setAt=function(e,t){return this.data=this.data.substr(0,this.read+e)+String.fromCharCode(t)+this.data.substr(this.read+e+1),this},t.ByteStringBuffer.prototype.last=function(){return this.data.charCodeAt(this.data.length-1)},t.ByteStringBuffer.prototype.copy=function(){var e=t.createBuffer(this.data);return e.read=this.read,e},t.ByteStringBuffer.prototype.compact=function(){return this.read>0&&(this.data=this.data.slice(this.read),this.read=0),this},t.ByteStringBuffer.prototype.clear=function(){return this.data="",this.read=0,this},t.ByteStringBuffer.prototype.truncate=function(e){var t=Math.max(0,this.length()-e);return this.data=this.data.substr(this.read,t),this.read=0,this},t.ByteStringBuffer.prototype.toHex=function(){var e="";for(var t=this.read;t<this.data.length;++t){var n=this.data.charCodeAt(t);n<16&&(e+="0"),e+=n.toString(16)}return e},t.ByteStringBuffer.prototype.toString=function(){return t.decodeUtf8(this.bytes())},t.DataBuffer=i,t.DataBuffer.prototype.length=function(){return this.write-this.read},t.DataBuffer.prototype.isEmpty=function(){return this.length()<=0},t.DataBuffer.prototype.accommodate=function(e,t){if(this.length()>=e)return this;t=Math.max(t||this.growSize,e);var n=new Uint8Array(this.data.buffer,this.data.byteOffset,this.data.byteLength),r=new Uint8Array(this.length()+t);return r.set(n),this.data=new DataView(r.buffer),this},t.DataBuffer.prototype.putByte=function(e){return this.accommodate(1),this.data.setUint8(this.write++,e),this},t.DataBuffer.prototype.fillWithByte=function(e,t){this.accommodate(t);for(var n=0;n<t;++n)this.data.setUint8(e);return this},t.DataBuffer.prototype.putBytes=function(e,n){if(t.isArrayBufferView(e)){var r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),i=r.byteLength-r.byteOffset;this.accommodate(i);var s=new Uint8Array(this.data.buffer,this.write);return s.set(r),this.write+=i,this}if(t.isArrayBuffer(e)){var r=new Uint8Array(e);this.accommodate(r.byteLength);var s=new Uint8Array(this.data.buffer);return s.set(r,this.write),this.write+=r.byteLength,this}if(e instanceof t.DataBuffer||typeof e=="object"&&typeof e.read=="number"&&typeof e.write=="number"&&t.isArrayBufferView(e.data)){var r=new Uint8Array(e.data.byteLength,e.read,e.length());this.accommodate(r.byteLength);var s=new Uint8Array(e.data.byteLength,this.write);return s.set(r),this.write+=r.byteLength,this}e instanceof t.ByteStringBuffer&&(e=e.data,n="binary"),n=n||"binary";if(typeof e=="string"){var o;if(n==="hex")return this.accommodate(Math.ceil(e.length/2)),o=new Uint8Array(this.data.buffer,this.write),this.write+=t.binary.hex.decode(e,o,this.write),this;if(n==="base64")return this.accommodate(Math.ceil(e.length/4)*3),o=new Uint8Array(this.data.buffer,this.write),this.write+=t.binary.base64.decode(e,o,this.write),this;n==="utf8"&&(e=t.encodeUtf8(e),n="binary");if(n==="binary"||n==="raw")return this.accommodate(e.length),o=new Uint8Array(this.data.buffer,this.write),this.write+=t.binary.raw.decode(o),this;if(n==="utf16")return this.accommodate(e.length*2),o=new Uint16Array(this.data.buffer,this.write),this.write+=t.text.utf16.encode(o),this;throw new Error("Invalid encoding: "+n)}throw Error("Invalid parameter: "+e)},t.DataBuffer.prototype.putBuffer=function(e){return this.putBytes(e),e.clear(),this},t.DataBuffer.prototype.putString=function(e){return this.putBytes(e,"utf16")},t.DataBuffer.prototype.putInt16=function(e){return this.accommodate(2),this.data.setInt16(this.write,e),this.write+=2,this},t.DataBuffer.prototype.putInt24=function(e){return this.accommodate(3),this.data.setInt16(this.write,e>>8&65535),this.data.setInt8(this.write,e>>16&255),this.write+=3,this},t.DataBuffer.prototype.putInt32=function(e){return this.accommodate(4),this.data.setInt32(this.write,e),this.write+=4,this},t.DataBuffer.prototype.putInt16Le=function(e){return this.accommodate(2),this.data.setInt16(this.write,e,!0),this.write+=2,this},t.DataBuffer.prototype.putInt24Le=function(e){return this.accommodate(3),this.data.setInt8(this.write,e>>16&255),this.data.setInt16(this.write,e>>8&65535,!0),this.write+=3,this},t.DataBuffer.prototype.putInt32Le=function(e){return this.accommodate(4),this.data.setInt32(this.write,e,!0),this.write+=4,this},t.DataBuffer.prototype.putInt=function(e,t){this.accommodate(t/8);do t-=8,this.data.setInt8(this.write++,e>>t&255);while(t>0);return this},t.DataBuffer.prototype.putSignedInt=function(e,t){return this.accommodate(t/8),e<0&&(e+=2<<t-1),this.putInt(e,t)},t.DataBuffer.prototype.getByte=function(){return this.data.getInt8(this.read++)},t.DataBuffer.prototype.getInt16=function(){var e=this.data.getInt16(this.read);return this.read+=2,e},t.DataBuffer.prototype.getInt24=function(){var e=this.data.getInt16(this.read)<<8^this.data.getInt8(this.read+2);return this.read+=3,e},t.DataBuffer.prototype.getInt32=function(){var e=this.data.getInt32(this.read);return this.read+=4,e},t.DataBuffer.prototype.getInt16Le=function(){var e=this.data.getInt16(this.read,!0);return this.read+=2,e},t.DataBuffer.prototype.getInt24Le=function(){var e=this.data.getInt8(this.read)^this.data.getInt16(this.read+1,!0)<<8;return this.read+=3,e},t.DataBuffer.prototype.getInt32Le=function(){var e=this.data.getInt32(this.read,!0);return this.read+=4,e},t.DataBuffer.prototype.getInt=function(e){var t=0;do t=(t<<8)+this.data.getInt8(this.read++),e-=8;while(e>0);return t},t.DataBuffer.prototype.getSignedInt=function(e){var t=this.getInt(e),n=2<<e-2;return t>=n&&(t-=n<<1),t},t.DataBuffer.prototype.getBytes=function(e){var t;return e?(e=Math.min(this.length(),e),t=this.data.slice(this.read,this.read+e),this.read+=e):e===0?t="":(t=this.read===0?this.data:this.data.slice(this.read),this.clear()),t},t.DataBuffer.prototype.bytes=function(e){return typeof e=="undefined"?this.data.slice(this.read):this.data.slice(this.read,this.read+e)},t.DataBuffer.prototype.at=function(e){return this.data.getUint8(this.read+e)},t.DataBuffer.prototype.setAt=function(e,t){return this.data.setUint8(e,t),this},t.DataBuffer.prototype.last=function(){return this.data.getUint8(this.write-1)},t.DataBuffer.prototype.copy=function(){return new t.DataBuffer(this)},t.DataBuffer.prototype.compact=function(){if(this.read>0){var e=new Uint8Array(this.data.buffer,this.read),t=new Uint8Array(e.byteLength);t.set(e),this.data=new DataView(t),this.write-=this.read,this.read=0}return this},t.DataBuffer.prototype.clear=function(){return this.data=new DataView(new ArrayBuffer(0)),this.read=this.write=0,this},t.DataBuffer.prototype.truncate=function(e){return this.write=Math.max(0,this.length()-e),this.read=Math.min(this.read,this.write),this},t.DataBuffer.prototype.toHex=function(){var e="";for(var t=this.read;t<this.data.byteLength;++t){var n=this.data.getUint8(t);n<16&&(e+="0"),e+=n.toString(16)}return e},t.DataBuffer.prototype.toString=function(e){var n=new Uint8Array(this.data,this.read,this.length());e=e||"utf8";if(e==="binary"||e==="raw")return t.binary.raw.encode(n);if(e==="hex")return t.binary.hex.encode(n);if(e==="base64")return t.binary.base64.encode(n);if(e==="utf8")return t.text.utf8.decode(n);if(e==="utf16")return t.text.utf16.decode(n);throw new Error("Invalid encoding: "+e)},t.createBuffer=function(e,n){return n=n||"raw",e!==undefined&&n==="utf8"&&(e=t.encodeUtf8(e)),new t.ByteBuffer(e)},t.fillString=function(e,t){var n="";while(t>0)t&1&&(n+=e),t>>>=1,t>0&&(e+=e);return n},t.xorBytes=function(e,t,n){var r="",i="",s="",o=0,u=0;for(;n>0;--n,++o)i=e.charCodeAt(o)^t.charCodeAt(o),u>=10&&(r+=s,s="",u=0),s+=String.fromCharCode(i),++u;return r+=s,r},t.hexToBytes=function(e){var t="",n=0;e.length&!0&&(n=1,t+=String.fromCharCode(parseInt(e[0],16)));for(;n<e.length;n+=2)t+=String.fromCharCode(parseInt(e.substr(n,2),16));return t},t.bytesToHex=function(e){return t.createBuffer(e).toHex()},t.int32ToBytes=function(e){return String.fromCharCode(e>>24&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(e&255)};var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=[62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,64,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];t.encode64=function(e,t){var n="",r="",i,o,u,a=0;while(a<e.length)i=e.charCodeAt(a++),o=e.charCodeAt(a++),u=e.charCodeAt(a++),n+=s.charAt(i>>2),n+=s.charAt((i&3)<<4|o>>4),isNaN(o)?n+="==":(n+=s.charAt((o&15)<<2|u>>6),n+=isNaN(u)?"=":s.charAt(u&63)),t&&n.length>t&&(r+=n.substr(0,t)+"\r\n",n=n.substr(t));return r+=n,r},t.decode64=function(e){e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");var t="",n,r,i,s,u=0;while(u<e.length)n=o[e.charCodeAt(u++)-43],r=o[e.charCodeAt(u++)-43],i=o[e.charCodeAt(u++)-43],s=o[e.charCodeAt(u++)-43],t+=String.fromCharCode(n<<2|r>>4),i!==64&&(t+=String.fromCharCode((r&15)<<4|i>>2),s!==64&&(t+=String.fromCharCode((i&3)<<6|s)));return t},t.encodeUtf8=function(e){return unescape(encodeURIComponent(e))},t.decodeUtf8=function(e){return decodeURIComponent(escape(e))},t.binary={raw:{},hex:{},base64:{}},t.binary.raw.encode=function(e){return String.fromCharCode.apply(null,e)},t.binary.raw.decode=function(e,t,n){var r=t;r||(r=new Uint8Array(e.length)),n=n||0;var i=n;for(var s=0;s<e.length;++s)r[i++]=e.charCodeAt(s);return t?i-n:r},t.binary.hex.encode=t.bytesToHex,t.binary.hex.decode=function(e,t,n){var r=t;r||(r=new Uint8Array(Math.ceil(e.length/2))),n=n||0;var i=0,s=n;e.length&1&&(i=1,r[s++]=parseInt(e[0],16));for(;i<e.length;i+=2)r[s++]=parseInt(e.substr(i,2),16);return t?s-n:r},t.binary.base64.encode=function(e,t){var n="",r="",i,o,u,a=0;while(a<e.byteLength)i=e[a++],o=e[a++],u=e[a++],n+=s.charAt(i>>2),n+=s.charAt((i&3)<<4|o>>4),isNaN(o)?n+="==":(n+=s.charAt((o&15)<<2|u>>6),n+=isNaN(u)?"=":s.charAt(u&63)),t&&n.length>t&&(r+=n.substr(0,t)+"\r\n",n=n.substr(t));return r+=n,r},t.binary.base64.decode=function(e,t,n){var r=t;r||(r=new Uint8Array(Math.ceil(e.length/4)*3)),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,""),n=n||0;var i,s,u,a,f=0,l=n;while(f<e.length)i=o[e.charCodeAt(f++)-43],s=o[e.charCodeAt(f++)-43],u=o[e.charCodeAt(f++)-43],a=o[e.charCodeAt(f++)-43],r[l++]=i<<2|s>>4,u!==64&&(r[l++]=(s&15)<<4|u>>2,a!==64&&(r[l++]=(u&3)<<6|a));return t?l-n:r.subarray(0,l)},t.text={utf8:{},utf16:{}},t.text.utf8.encode=function(e,n,r){e=t.encodeUtf8(e);var i=n;i||(i=new Uint8Array(e.length)),r=r||0;var s=r;for(var o=0;o<e.length;++o)i[s++]=e.charCodeAt(o);return n?s-r:i},t.text.utf8.decode=function(e){return t.decodeUtf8(String.fromCharCode.apply(null,e))},t.text.utf16.encode=function(e,t,n){var r=t;r||(r=new Uint8Array(e.length*2));var i=new Uint16Array(r.buffer);n=n||0;var s=n,o=n;for(var u=0;u<e.length;++u)i[o++]=e.charCodeAt(u),s+=2;return t?s-n:r},t.text.utf16.decode=function(e){return String.fromCharCode.apply(null,new Uint16Array(e.buffer))},t.deflate=function(e,n,r){n=t.decode64(e.deflate(t.encode64(n)).rval);if(r){var i=2,s=n.charCodeAt(1);s&32&&(i=6),n=n.substring(i,n.length-4)}return n},t.inflate=function(e,n,r){var i=e.inflate(t.encode64(n)).rval;return i===null?null:t.decode64(i)};var u=function(e,n,r){if(!e)throw new Error("WebStorage not available.");var i;r===null?i=e.removeItem(n):(r=t.encode64(JSON.stringify(r)),i=e.setItem(n,r));if(typeof i!="undefined"&&i.rval!==!0){var s=new Error(i.error.message);throw s.id=i.error.id,s.name=i.error.name,s}},a=function(e,n){if(!e)throw new Error("WebStorage not available.");var r=e.getItem(n);if(e.init)if(r.rval===null){if(r.error){var i=new Error(r.error.message);throw i.id=r.error.id,i.name=r.error.name,i}r=null}else r=r.rval;return r!==null&&(r=JSON.parse(t.decode64(r))),r},f=function(e,t,n,r){var i=a(e,t);i===null&&(i={}),i[n]=r,u(e,t,i)},l=function(e,t,n){var r=a(e,t);return r!==null&&(r=n in r?r[n]:null),r},c=function(e,t,n){var r=a(e,t);if(r!==null&&n in r){delete r[n];var i=!0;for(var s in r){i=!1;break}i&&(r=null),u(e,t,r)}},h=function(e,t){u(e,t,null)},p=function(e,t,n){var r=null;typeof n=="undefined"&&(n=["web","flash"]);var i,s=!1,o=null;for(var u in n){i=n[u];try{if(i==="flash"||i==="both"){if(t[0]===null)throw new Error("Flash local storage not available.");r=e.apply(this,t),s=i==="flash"}if(i==="web"||i==="both")t[0]=localStorage,r=e.apply(this,t),s=!0}catch(a){o=a}if(s)break}if(!s)throw o;return r};t.setItem=function(e,t,n,r,i){p(f,arguments,i)},t.getItem=function(e,t,n,r){return p(l,arguments,r)},t.removeItem=function(e,t,n,r){p(c,arguments,r)},t.clearItems=function(e,t,n){p(h,arguments,n)},t.parseUrl=function(e){var t=/^(https?):\/\/([^:&^\/]*):?(\d*)(.*)$/g;t.lastIndex=0;var n=t.exec(e),r=n===null?null:{full:e,scheme:n[1],host:n[2],port:n[3],path:n[4]};return r&&(r.fullHost=r.host,r.port?r.port!==80&&r.scheme==="http"?r.fullHost+=":"+r.port:r.port!==443&&r.scheme==="https"&&(r.fullHost+=":"+r.port):r.scheme==="http"?r.port=80:r.scheme==="https"&&(r.port=443),r.full=r.scheme+"://"+r.fullHost),r};var d=null;t.getQueryVariables=function(e){var t=function(e){var t={},n=e.split("&");for(var r=0;r<n.length;r++){var i=n[r].indexOf("="),s,o;i>0?(s=n[r].substring(0,i),o=n[r].substring(i+1)):(s=n[r],o=null),s in t||(t[s]=[]),!(s in Object.prototype)&&o!==null&&t[s].push(unescape(o))}return t},n;return typeof e=="undefined"?(d===null&&(typeof window!="undefined"&&window.location&&window.location.search?d=t(window.location.search.substring(1)):d={}),n=d):n=t(e),n},t.parseFragment=function(e){var n=e,r="",i=e.indexOf("?");i>0&&(n=e.substring(0,i),r=e.substring(i+1));var s=n.split("/");s.length>0&&s[0]===""&&s.shift();var o=r===""?{}:t.getQueryVariables(r);return{pathString:n,queryString:r,path:s,query:o}},t.makeRequest=function(e){var n=t.parseFragment(e),r={path:n.pathString,query:n.queryString,getPath:function(e){return typeof e=="undefined"?n.path:n.path[e]},getQuery:function(e,t){var r;return typeof e=="undefined"?r=n.query:(r=n.query[e],r&&typeof t!="undefined"&&(r=r[t])),r},getQueryLast:function(e,t){var n,i=r.getQuery(e);return i?n=i[i.length-1]:n=t,n}};return r},t.makeLink=function(e,t,n){e=jQuery.isArray(e)?e.join("/"):e;var r=jQuery.param(t||{});return n=n||"",e+(r.length>0?"?"+r:"")+(n.length>0?"#"+n:"")},t.setPath=function(e,t,n){if(typeof e=="object"&&e!==null){var r=0,i=t.length;while(r<i){var s=t[r++];if(r==i)e[s]=n;else{var o=s in e;if(!o||o&&typeof e[s]!="object"||o&&e[s]===null)e[s]={};e=e[s]}}}},t.getPath=function(e,t,n){var r=0,i=t.length,s=!0;while(s&&r<i&&typeof e=="object"&&e!==null){var o=t[r++];s=o in e,s&&(e=e[o])}return s?e:n},t.deletePath=function(e,t){if(typeof e=="object"&&e!==null){var n=0,r=t.length;while(n<r){var i=t[n++];if(n==r)delete e[i];else{if(!(i in e&&typeof e[i]=="object"&&e[i]!==null))break;e=e[i]}}}},t.isEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},t.format=function(e){var t=/%./g,n,r,i=0,s=[],o=0;while(n=t.exec(e)){r=e.substring(o,t.lastIndex-2),r.length>0&&s.push(r),o=t.lastIndex;var u=n[0][1];switch(u){case"s":case"o":i<arguments.length?s.push(arguments[i++ +1]):s.push("<?>");break;case"%":s.push("%");break;default:s.push("<%"+u+"?>")}}return s.push(e.substring(o)),s.join("")},t.formatNumber=function(e,t,n,r){var i=e,s=isNaN(t=Math.abs(t))?2:t,o=n===undefined?",":n,u=r===undefined?".":r,a=i<0?"-":"",f=parseInt(i=Math.abs(+i||0).toFixed(s),10)+"",l=f.length>3?f.length%3:0;return a+(l?f.substr(0,l)+u:"")+f.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+u)+(s?o+Math.abs(i-f).toFixed(s).slice(2):"")},t.formatSize=function(e){return e>=1073741824?e=t.formatNumber(e/1073741824,2,".","")+" GiB":e>=1048576?e=t.formatNumber(e/1048576,2,".","")+" MiB":e>=1024?e=t.formatNumber(e/1024,0)+" KiB":e=t.formatNumber(e,0)+" bytes",e},t.bytesFromIP=function(e){return e.indexOf(".")!==-1?t.bytesFromIPv4(e):e.indexOf(":")!==-1?t.bytesFromIPv6(e):null},t.bytesFromIPv4=function(e){e=e.split(".");if(e.length!==4)return null;var n=t.createBuffer();for(var r=0;r<e.length;++r){var i=parseInt(e[r],10);if(isNaN(i))return null;n.putByte(i)}return n.getBytes()},t.bytesFromIPv6=function(e){var n=0;e=e.split(":").filter(function(e){return e.length===0&&++n,!0});var r=(8-e.length+n)*2,i=t.createBuffer();for(var s=0;s<8;++s){if(!e[s]||e[s].length===0){i.fillWithByte(0,r),r=0;continue}var o=t.hexToBytes(e[s]);o.length<2&&i.putByte(0),i.putBytes(o)}return i.getBytes()},t.bytesToIP=function(e){return e.length===4?t.bytesToIPv4(e):e.length===16?t.bytesToIPv6(e):null},t.bytesToIPv4=function(e){if(e.length!==4)return null;var t=[];for(var n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t.join(".")},t.bytesToIPv6=function(e){if(e.length!==16)return null;var n=[],r=[],i=0;for(var s=0;s<e.length;s+=2){var o=t.bytesToHex(e[s]+e[s+1]);while(o[0]==="0"&&o!=="0")o=o.substr(1);if(o==="0"){var u=r[r.length-1],a=n.length;!u||a!==u.end+1?r.push({start:a,end:a}):(u.end=a,u.end-u.start>r[i].end-r[i].start&&(i=r.length-1))}n.push(o)}if(r.length>0){var f=r[i];f.end-f.start>0&&(n.splice(f.start,f.end-f.start+1,""),f.start===0&&n.unshift(""),f.end===7&&n.push(""))}return n.join(":")},t.estimateCores=function(e,n){function i(e,u,a){if(u===0){var f=Math.floor(e.reduce(function(e,t){return e+t},0)/e.length);return t.cores=Math.max(1,f),URL.revokeObjectURL(r),n(null,t.cores)}s(a,function(t,n){e.push(o(a,n)),i(e,u-1,a)})}function s(e,t){var n=[],i=[];for(var s=0;s<e;++s){var o=new Worker(r);o.addEventListener("message",function(r){i.push(r.data);if(i.length===e){for(var s=0;s<e;++s)n[s].terminate();t(null,i)}}),n.push(o)}for(var s=0;s<e;++s)n[s].postMessage(s)}function o(e,t){var n=[];for(var r=0;r<e;++r){var i=t[r],s=n[r]=[];for(var o=0;o<e;++o){if(r===o)continue;var u=t[o];(i.st>u.st&&i.st<u.et||u.st>i.st&&u.st<i.et)&&s.push(o)}}return n.reduce(function(e,t){return Math.max(e,t.length)},0)}typeof e=="function"&&(n=e,e={}),e=e||{};if("cores"in t&&!e.update)return n(null,t.cores);if(typeof navigator!="undefined"&&"hardwareConcurrency"in navigator&&navigator.hardwareConcurrency>0)return t.cores=navigator.hardwareConcurrency,n(null,t.cores);if(typeof Worker=="undefined")return t.cores=1,n(null,t.cores);if(typeof Blob=="undefined")return t.cores=2,n(null,t.cores);var r=URL.createObjectURL(new Blob(["(",function(){self.addEventListener("message",function(e){var t=Date.now(),n=t+4;while(Date.now()<n);self.postMessage({st:t,et:n})})}.toString(),")()"],{type:"application/javascript"}));i([],5,16)}}var r="util";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/util",["require","module"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){e.cipher=e.cipher||{},e.cipher.algorithms=e.cipher.algorithms||{},e.cipher.createCipher=function(t,n){var r=t;typeof r=="string"&&(r=e.cipher.getAlgorithm(r),r&&(r=r()));if(!r)throw new Error("Unsupported algorithm: "+t);return new e.cipher.BlockCipher({algorithm:r,key:n,decrypt:!1})},e.cipher.createDecipher=function(t,n){var r=t;typeof r=="string"&&(r=e.cipher.getAlgorithm(r),r&&(r=r()));if(!r)throw new Error("Unsupported algorithm: "+t);return new e.cipher.BlockCipher({algorithm:r,key:n,decrypt:!0})},e.cipher.registerAlgorithm=function(t,n){t=t.toUpperCase(),e.cipher.algorithms[t]=n},e.cipher.getAlgorithm=function(t){return t=t.toUpperCase(),t in e.cipher.algorithms?e.cipher.algorithms[t]:null};var t=e.cipher.BlockCipher=function(e){this.algorithm=e.algorithm,this.mode=this.algorithm.mode,this.blockSize=this.mode.blockSize,this._finish=!1,this._input=null,this.output=null,this._op=e.decrypt?this.mode.decrypt:this.mode.encrypt,this._decrypt=e.decrypt,this.algorithm.initialize(e)};t.prototype.start=function(t){t=t||{};var n={};for(var r in t)n[r]=t[r];n.decrypt=this._decrypt,this._finish=!1,this._input=e.util.createBuffer(),this.output=t.output||e.util.createBuffer(),this.mode.start(n)},t.prototype.update=function(e){e&&this._input.putBuffer(e);while(!this._op.call(this.mode,this._input,this.output,this._finish)&&!this._finish);this._input.compact()},t.prototype.finish=function(e){e&&(this.mode.name==="ECB"||this.mode.name==="CBC")&&(this.mode.pad=function(t){return e(this.blockSize,t,!1)},this.mode.unpad=function(t){return e(this.blockSize,t,!0)});var t={};return t.decrypt=this._decrypt,t.overflow=this._input.length()%this.blockSize,!this._decrypt&&this.mode.pad&&!this.mode.pad(this._input,t)?!1:(this._finish=!0,this.update(),this._decrypt&&this.mode.unpad&&!this.mode.unpad(this.output,t)?!1:this.mode.afterFinish&&!this.mode.afterFinish(this.output,t)?!1:!0)}}var r="cipher";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/cipher",["require","module","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function n(t){typeof t=="string"&&(t=e.util.createBuffer(t));if(e.util.isArray(t)&&t.length>4){var n=t;t=e.util.createBuffer();for(var r=0;r<n.length;++r)t.putByte(n[r])}return e.util.isArray(t)||(t=[t.getInt32(),t.getInt32(),t.getInt32(),t.getInt32()]),t}function r(e){e[e.length-1]=e[e.length-1]+1&4294967295}function i(e){return[e/4294967296|0,e&4294967295]}e.cipher=e.cipher||{};var t=e.cipher.modes=e.cipher.modes||{};t.ecb=function(e){e=e||{},this.name="ECB",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints)},t.ecb.prototype.start=function(e){},t.ecb.prototype.encrypt=function(e,t,n){if(e.length()<this.blockSize&&!(n&&e.length()>0))return!0;for(var r=0;r<this._ints;++r)this._inBlock[r]=e.getInt32();this.cipher.encrypt(this._inBlock,this._outBlock);for(var r=0;r<this._ints;++r)t.putInt32(this._outBlock[r])},t.ecb.prototype.decrypt=function(e,t,n){if(e.length()<this.blockSize&&!(n&&e.length()>0))return!0;for(var r=0;r<this._ints;++r)this._inBlock[r]=e.getInt32();this.cipher.decrypt(this._inBlock,this._outBlock);for(var r=0;r<this._ints;++r)t.putInt32(this._outBlock[r])},t.ecb.prototype.pad=function(e,t){var n=e.length()===this.blockSize?this.blockSize:this.blockSize-e.length();return e.fillWithByte(n,n),!0},t.ecb.prototype.unpad=function(e,t){if(t.overflow>0)return!1;var n=e.length(),r=e.at(n-1);return r>this.blockSize<<2?!1:(e.truncate(r),!0)},t.cbc=function(e){e=e||{},this.name="CBC",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints)},t.cbc.prototype.start=function(e){if(e.iv===null){if(!this._prev)throw new Error("Invalid IV parameter.");this._iv=this._prev.slice(0)}else{if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=n(e.iv),this._prev=this._iv.slice(0)}},t.cbc.prototype.encrypt=function(e,t,n){if(e.length()<this.blockSize&&!(n&&e.length()>0))return!0;for(var r=0;r<this._ints;++r)this._inBlock[r]=this._prev[r]^e.getInt32();this.cipher.encrypt(this._inBlock,this._outBlock);for(var r=0;r<this._ints;++r)t.putInt32(this._outBlock[r]);this._prev=this._outBlock},t.cbc.prototype.decrypt=function(e,t,n){if(e.length()<this.blockSize&&!(n&&e.length()>0))return!0;for(var r=0;r<this._ints;++r)this._inBlock[r]=e.getInt32();this.cipher.decrypt(this._inBlock,this._outBlock);for(var r=0;r<this._ints;++r)t.putInt32(this._prev[r]^this._outBlock[r]);this._prev=this._inBlock.slice(0)},t.cbc.prototype.pad=function(e,t){var n=e.length()===this.blockSize?this.blockSize:this.blockSize-e.length();return e.fillWithByte(n,n),!0},t.cbc.prototype.unpad=function(e,t){if(t.overflow>0)return!1;var n=e.length(),r=e.at(n-1);return r>this.blockSize<<2?!1:(e.truncate(r),!0)},t.cfb=function(t){t=t||{},this.name="CFB",this.cipher=t.cipher,this.blockSize=t.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialBlock=new Array(this._ints),this._partialOutput=e.util.createBuffer(),this._partialBytes=0},t.cfb.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=n(e.iv),this._inBlock=this._iv.slice(0),this._partialBytes=0},t.cfb.prototype.encrypt=function(e,t,n){var r=e.length();if(r===0)return!0;this.cipher.encrypt(this._inBlock,this._outBlock);if(this._partialBytes===0&&r>=this.blockSize){for(var i=0;i<this._ints;++i)this._inBlock[i]=e.getInt32()^this._outBlock[i],t.putInt32(this._inBlock[i]);return}var s=(this.blockSize-r)%this.blockSize;s>0&&(s=this.blockSize-s),this._partialOutput.clear();for(var i=0;i<this._ints;++i)this._partialBlock[i]=e.getInt32()^this._outBlock[i],this._partialOutput.putInt32(this._partialBlock[i]);if(s>0)e.read-=this.blockSize;else for(var i=0;i<this._ints;++i)this._inBlock[i]=this._partialBlock[i];this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes);if(s>0&&!n)return t.putBytes(this._partialOutput.getBytes(s-this._partialBytes)),this._partialBytes=s,!0;t.putBytes(this._partialOutput.getBytes(r-this._partialBytes)),this._partialBytes=0},t.cfb.prototype.decrypt=function(e,t,n){var r=e.length();if(r===0)return!0;this.cipher.encrypt(this._inBlock,this._outBlock);if(this._partialBytes===0&&r>=this.blockSize){for(var i=0;i<this._ints;++i)this._inBlock[i]=e.getInt32(),t.putInt32(this._inBlock[i]^this._outBlock[i]);return}var s=(this.blockSize-r)%this.blockSize;s>0&&(s=this.blockSize-s),this._partialOutput.clear();for(var i=0;i<this._ints;++i)this._partialBlock[i]=e.getInt32(),this._partialOutput.putInt32(this._partialBlock[i]^this._outBlock[i]);if(s>0)e.read-=this.blockSize;else for(var i=0;i<this._ints;++i)this._inBlock[i]=this._partialBlock[i];this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes);if(s>0&&!n)return t.putBytes(this._partialOutput.getBytes(s-this._partialBytes)),this._partialBytes=s,!0;t.putBytes(this._partialOutput.getBytes(r-this._partialBytes)),this._partialBytes=0},t.ofb=function(t){t=t||{},this.name="OFB",this.cipher=t.cipher,this.blockSize=t.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialOutput=e.util.createBuffer(),this._partialBytes=0},t.ofb.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=n(e.iv),this._inBlock=this._iv.slice(0),this._partialBytes=0},t.ofb.prototype.encrypt=function(e,t,n){var r=e.length();if(e.length()===0)return!0;this.cipher.encrypt(this._inBlock,this._outBlock);if(this._partialBytes===0&&r>=this.blockSize){for(var i=0;i<this._ints;++i)t.putInt32(e.getInt32()^this._outBlock[i]),this._inBlock[i]=this._outBlock[i];return}var s=(this.blockSize-r)%this.blockSize;s>0&&(s=this.blockSize-s),this._partialOutput.clear();for(var i=0;i<this._ints;++i)this._partialOutput.putInt32(e.getInt32()^this._outBlock[i]);if(s>0)e.read-=this.blockSize;else for(var i=0;i<this._ints;++i)this._inBlock[i]=this._outBlock[i];this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes);if(s>0&&!n)return t.putBytes(this._partialOutput.getBytes(s-this._partialBytes)),this._partialBytes=s,!0;t.putBytes(this._partialOutput.getBytes(r-this._partialBytes)),this._partialBytes=0},t.ofb.prototype.decrypt=t.ofb.prototype.encrypt,t.ctr=function(t){t=t||{},this.name="CTR",this.cipher=t.cipher,this.blockSize=t.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialOutput=e.util.createBuffer(),this._partialBytes=0},t.ctr.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=n(e.iv),this._inBlock=this._iv.slice(0),this._partialBytes=0},t.ctr.prototype.encrypt=function(e,t,n){var i=e.length();if(i===0)return!0;this.cipher.encrypt(this._inBlock,this._outBlock);if(this._partialBytes===0&&i>=this.blockSize)for(var s=0;s<this._ints;++s)t.putInt32(e.getInt32()^this._outBlock[s]);else{var o=(this.blockSize-i)%this.blockSize;o>0&&(o=this.blockSize-o),this._partialOutput.clear();for(var s=0;s<this._ints;++s)this._partialOutput.putInt32(e.getInt32()^this._outBlock[s]);o>0&&(e.read-=this.blockSize),this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes);if(o>0&&!n)return t.putBytes(this._partialOutput.getBytes(o-this._partialBytes)),this._partialBytes=o,!0;t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=0}r(this._inBlock)},t.ctr.prototype.decrypt=t.ctr.prototype.encrypt,t.gcm=function(t){t=t||{},this.name="GCM",this.cipher=t.cipher,this.blockSize=t.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints),this._partialOutput=e.util.createBuffer(),this._partialBytes=0,this._R=3774873600},t.gcm.prototype.start=function(t){if(!("iv"in t))throw new Error("Invalid IV parameter.");var n=e.util.createBuffer(t.iv);this._cipherLength=0;var s;"additionalData"in t?s=e.util.createBuffer(t.additionalData):s=e.util.createBuffer(),"tagLength"in t?this._tagLength=t.tagLength:this._tagLength=128,this._tag=null;if(t.decrypt){this._tag=e.util.createBuffer(t.tag).getBytes();if(this._tag.length!==this._tagLength/8)throw new Error("Authentication tag does not match tag length.")}this._hashBlock=new Array(this._ints),this.tag=null,this._hashSubkey=new Array(this._ints),this.cipher.encrypt([0,0,0,0],this._hashSubkey),this.componentBits=4,this._m=this.generateHashTable(this._hashSubkey,this.componentBits);var o=n.length();if(o===12)this._j0=[n.getInt32(),n.getInt32(),n.getInt32(),1];else{this._j0=[0,0,0,0];while(n.length()>0)this._j0=this.ghash(this._hashSubkey,this._j0,[n.getInt32(),n.getInt32(),n.getInt32(),n.getInt32()]);this._j0=this.ghash(this._hashSubkey,this._j0,[0,0].concat(i(o*8)))}this._inBlock=this._j0.slice(0),r(this._inBlock),this._partialBytes=0,s=e.util.createBuffer(s),this._aDataLength=i(s.length()*8);var u=s.length()%this.blockSize;u&&s.fillWithByte(0,this.blockSize-u),this._s=[0,0,0,0];while(s.length()>0)this._s=this.ghash(this._hashSubkey,this._s,[s.getInt32(),s.getInt32(),s.getInt32(),s.getInt32()])},t.gcm.prototype.encrypt=function(e,t,n){var i=e.length();if(i===0)return!0;this.cipher.encrypt(this._inBlock,this._outBlock);if(this._partialBytes===0&&i>=this.blockSize){for(var s=0;s<this._ints;++s)t.putInt32(this._outBlock[s]^=e.getInt32());this._cipherLength+=this.blockSize}else{var o=(this.blockSize-i)%this.blockSize;o>0&&(o=this.blockSize-o),this._partialOutput.clear();for(var s=0;s<this._ints;++s)this._partialOutput.putInt32(e.getInt32()^this._outBlock[s]);if(o===0||n){if(n){var u=i%this.blockSize;this._cipherLength+=u,this._partialOutput.truncate(this.blockSize-u)}else this._cipherLength+=this.blockSize;for(var s=0;s<this._ints;++s)this._outBlock[s]=this._partialOutput.getInt32();this._partialOutput.read-=this.blockSize}this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes);if(o>0&&!n)return e.read-=this.blockSize,t.putBytes(this._partialOutput.getBytes(o-this._partialBytes)),this._partialBytes=o,!0;t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=0}this._s=this.ghash(this._hashSubkey,this._s,this._outBlock),r(this._inBlock)},t.gcm.prototype.decrypt=function(e,t,n){var i=e.length();if(i<this.blockSize&&!(n&&i>0))return!0;this.cipher.encrypt(this._inBlock,this._outBlock),r(this._inBlock),this._hashBlock[0]=e.getInt32(),this._hashBlock[1]=e.getInt32(),this._hashBlock[2]=e.getInt32(),this._hashBlock[3]=e.getInt32(),this._s=this.ghash(this._hashSubkey,this._s,this._hashBlock);for(var s=0;s<this._ints;++s)t.putInt32(this._outBlock[s]^this._hashBlock[s]);i<this.blockSize?this._cipherLength+=i%this.blockSize:this._cipherLength+=this.blockSize},t.gcm.prototype.afterFinish=function(t,n){var r=!0;n.decrypt&&n.overflow&&t.truncate(this.blockSize-n.overflow),this.tag=e.util.createBuffer();var s=this._aDataLength.concat(i(this._cipherLength*8));this._s=this.ghash(this._hashSubkey,this._s,s);var o=[];this.cipher.encrypt(this._j0,o);for(var u=0;u<this._ints;++u)this.tag.putInt32(this._s[u]^o[u]);return this.tag.truncate(this.tag.length()%(this._tagLength/8)),n.decrypt&&this.tag.bytes()!==this._tag&&(r=!1),r},t.gcm.prototype.multiply=function(e,t){var n=[0,0,0,0],r=t.slice(0);for(var i=0;i<128;++i){var s=e[i/32|0]&1<<31-i%32;s&&(n[0]^=r[0],n[1]^=r[1],n[2]^=r[2],n[3]^=r[3]),this.pow(r,r)}return n},t.gcm.prototype.pow=function(e,t){var n=e[3]&1;for(var r=3;r>0;--r)t[r]=e[r]>>>1|(e[r-1]&1)<<31;t[0]=e[0]>>>1,n&&(t[0]^=this._R)},t.gcm.prototype.tableMultiply=function(e){var t=[0,0,0,0];for(var n=0;n<32;++n){var r=n/8|0,i=e[r]>>>(7-n%8)*4&15,s=this._m[n][i];t[0]^=s[0],t[1]^=s[1],t[2]^=s[2],t[3]^=s[3]}return t},t.gcm.prototype.ghash=function(e,t,n){return t[0]^=n[0],t[1]^=n[1],t[2]^=n[2],t[3]^=n[3],this.tableMultiply(t)},t.gcm.prototype.generateHashTable=function(e,t){var n=8/t,r=4*n,i=16*n,s=new Array(i);for(var o=0;o<i;++o){var u=[0,0,0,0],a=o/r|0,f=(r-1-o%r)*t;u[a]=1<<t-1<<f,s[o]=this.generateSubHashTable(this.multiply(u,e),t)}return s},t.gcm.prototype.generateSubHashTable=function(e,t){var n=1<<t,r=n>>>1,i=new Array(n);i[r]=e.slice(0);var s=r>>>1;while(s>0)this.pow(i[2*s],i[s]=[]),s>>=1;s=2;while(s<r){for(var o=1;o<s;++o){var u=i[s],a=i[o];i[s+o]=[u[0]^a[0],u[1]^a[1],u[2]^a[2],u[3]^a[3]]}s*=2}i[0]=[0,0,0,0];for(s=r+1;s<n;++s){var f=i[s^r];i[s]=[e[0]^f[0],e[1]^f[1],e[2]^f[2],e[3]^f[3]]}return i}}var r="cipherModes";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/cipherModes",["require","module","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function t(t,n){var r=function(){return new e.aes.Algorithm(t,n)};e.cipher.registerAlgorithm(t,r)}function f(){n=!0,o=[0,1,2,4,8,16,32,64,128,27,54];var e=new Array(256);for(var t=0;t<128;++t)e[t]=t<<1,e[t+128]=t+128<<1^283;i=new Array(256),s=new Array(256),u=new Array(4),a=new Array(4);for(var t=0;t<4;++t)u[t]=new Array(256),a[t]=new Array(256);var r=0,f=0,l,c,h,p,d,v,m;for(var t=0;t<256;++t){p=f^f<<1^f<<2^f<<3^f<<4,p=p>>8^p&255^99,i[r]=p,s[p]=r,d=e[p],l=e[r],c=e[l],h=e[c],v=d<<24^p<<16^p<<8^(p^d),m=(l^c^h)<<24^(r^h)<<16^(r^c^h)<<8^(r^l^h);for(var g=0;g<4;++g)u[g][r]=v,a[g][p]=m,v=v<<24|v>>>8,m=m<<24|m>>>8;r===0?r=f=1:(r=l^e[e[e[l^h]]],f^=e[e[f]])}}function l(e,t){var n=e.slice(0),s,u=1,f=n.length,l=f+6+1,c=r*l;for(var h=f;h<c;++h)s=n[h-1],h%f===0?(s=i[s>>>16&255]<<24^i[s>>>8&255]<<16^i[s&255]<<8^i[s>>>24]^o[u]<<24,u++):f>6&&h%f===4&&(s=i[s>>>24]<<24^i[s>>>16&255]<<16^i[s>>>8&255]<<8^i[s&255]),n[h]=n[h-f]^s;if(t){var p,d=a[0],v=a[1],m=a[2],g=a[3],y=n.slice(0);c=n.length;for(var h=0,b=c-r;h<c;h+=r,b-=r)if(h===0||h===c-r)y[h]=n[b],y[h+1]=n[b+3],y[h+2]=n[b+2],y[h+3]=n[b+1];else for(var w=0;w<r;++w)p=n[b+w],y[h+(3&-w)]=d[i[p>>>24]]^v[i[p>>>16&255]]^m[i[p>>>8&255]]^g[i[p&255]];n=y}return n}function c(e,t,n,r){var o=e.length/4-1,f,l,c,h,p;r?(f=a[0],l=a[1],c=a[2],h=a[3],p=s):(f=u[0],l=u[1],c=u[2],h=u[3],p=i);var d,v,m,g,y,b,w;d=t[0]^e[0],v=t[r?3:1]^e[1],m=t[2]^e[2],g=t[r?1:3]^e[3];var E=3;for(var S=1;S<o;++S)y=f[d>>>24]^l[v>>>16&255]^c[m>>>8&255]^h[g&255]^e[++E],b=f[v>>>24]^l[m>>>16&255]^c[g>>>8&255]^h[d&255]^e[++E],w=f[m>>>24]^l[g>>>16&255]^c[d>>>8&255]^h[v&255]^e[++E],g=f[g>>>24]^l[d>>>16&255]^c[v>>>8&255]^h[m&255]^e[++E],d=y,v=b,m=w;n[0]=p[d>>>24]<<24^p[v>>>16&255]<<16^p[m>>>8&255]<<8^p[g&255]^e[++E],n[r?3:1]=p[v>>>24]<<24^p[m>>>16&255]<<16^p[g>>>8&255]<<8^p[d&255]^e[++E],n[2]=p[m>>>24]<<24^p[g>>>16&255]<<16^p[d>>>8&255]<<8^p[v&255]^e[++E],n[r?1:3]=p[g>>>24]<<24^p[d>>>16&255]<<16^p[v>>>8&255]<<8^p[m&255]^e[++E]}function h(t){t=t||{};var n=(t.mode||"CBC").toUpperCase(),r="AES-"+n,i;t.decrypt?i=e.cipher.createDecipher(r,t.key):i=e.cipher.createCipher(r,t.key);var s=i.start;return i.start=function(t,n){var r=null;n instanceof e.util.ByteBuffer&&(r=n,n={}),n=n||{},n.output=r,n.iv=t,s.call(i,n)},i}e.aes=e.aes||{},e.aes.startEncrypting=function(e,t,n,r){var i=h({key:e,output:n,decrypt:!1,mode:r});return i.start(t),i},e.aes.createEncryptionCipher=function(e,t){return h({key:e,output:null,decrypt:!1,mode:t})},e.aes.startDecrypting=function(e,t,n,r){var i=h({key:e,output:n,decrypt:!0,mode:r});return i.start(t),i},e.aes.createDecryptionCipher=function(e,t){return h({key:e,output:null,decrypt:!0,mode:t})},e.aes.Algorithm=function(e,t){n||f();var r=this;r.name=e,r.mode=new t({blockSize:16,cipher:{encrypt:function(e,t){return c(r._w,e,t,!1)},decrypt:function(e,t){return c(r._w,e,t,!0)}}}),r._init=!1},e.aes.Algorithm.prototype.initialize=function(t){if(this._init)return;var n=t.key,r;if(typeof n!="string"||n.length!==16&&n.length!==24&&n.length!==32){if(e.util.isArray(n)&&(n.length===16||n.length===24||n.length===32)){r=n,n=e.util.createBuffer();for(var i=0;i<r.length;++i)n.putByte(r[i])}}else n=e.util.createBuffer(n);if(!e.util.isArray(n)){r=n,n=[];var s=r.length();if(s===16||s===24||s===32){s>>>=2;for(var i=0;i<s;++i)n.push(r.getInt32())}}if(!e.util.isArray(n)||n.length!==4&&n.length!==6&&n.length!==8)throw new Error("Invalid key parameter.");var o=this.mode.name,u=["CFB","OFB","CTR","GCM"].indexOf(o)!==-1;this._w=l(n,t.decrypt&&!u),this._init=!0},e.aes._expandKey=function(e,t){return n||f(),l(e,t)},e.aes._updateBlock=c,t("AES-ECB",e.cipher.modes.ecb),t("AES-CBC",e.cipher.modes.cbc),t("AES-CFB",e.cipher.modes.cfb),t("AES-OFB",e.cipher.modes.ofb),t("AES-CTR",e.cipher.modes.ctr),t("AES-GCM",e.cipher.modes.gcm);var n=!1,r=4,i,s,o,u,a}var r="aes";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/aes",["require","module","./cipher","./cipherModes","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){e.pki=e.pki||{};var t=e.pki.oids=e.oids=e.oids||{};t["1.2.840.113549.1.1.1"]="rsaEncryption",t.rsaEncryption="1.2.840.113549.1.1.1",t["1.2.840.113549.1.1.4"]="md5WithRSAEncryption",t.md5WithRSAEncryption="1.2.840.113549.1.1.4",t["1.2.840.113549.1.1.5"]="sha1WithRSAEncryption",t.sha1WithRSAEncryption="1.2.840.113549.1.1.5",t["1.2.840.113549.1.1.7"]="RSAES-OAEP",t["RSAES-OAEP"]="1.2.840.113549.1.1.7",t["1.2.840.113549.1.1.8"]="mgf1",t.mgf1="1.2.840.113549.1.1.8",t["1.2.840.113549.1.1.9"]="pSpecified",t.pSpecified="1.2.840.113549.1.1.9",t["1.2.840.113549.1.1.10"]="RSASSA-PSS",t["RSASSA-PSS"]="1.2.840.113549.1.1.10",t["1.2.840.113549.1.1.11"]="sha256WithRSAEncryption",t.sha256WithRSAEncryption="1.2.840.113549.1.1.11",t["1.2.840.113549.1.1.12"]="sha384WithRSAEncryption",t.sha384WithRSAEncryption="1.2.840.113549.1.1.12",t["1.2.840.113549.1.1.13"]="sha512WithRSAEncryption",t.sha512WithRSAEncryption="1.2.840.113549.1.1.13",t["1.3.14.3.2.7"]="desCBC",t.desCBC="1.3.14.3.2.7",t["1.3.14.3.2.26"]="sha1",t.sha1="1.3.14.3.2.26",t["2.16.840.1.101.3.4.2.1"]="sha256",t.sha256="2.16.840.1.101.3.4.2.1",t["2.16.840.1.101.3.4.2.2"]="sha384",t.sha384="2.16.840.1.101.3.4.2.2",t["2.16.840.1.101.3.4.2.3"]="sha512",t.sha512="2.16.840.1.101.3.4.2.3",t["1.2.840.113549.2.5"]="md5",t.md5="1.2.840.113549.2.5",t["1.2.840.113549.1.7.1"]="data",t.data="1.2.840.113549.1.7.1",t["1.2.840.113549.1.7.2"]="signedData",t.signedData="1.2.840.113549.1.7.2",t["1.2.840.113549.1.7.3"]="envelopedData",t.envelopedData="1.2.840.113549.1.7.3",t["1.2.840.113549.1.7.4"]="signedAndEnvelopedData",t.signedAndEnvelopedData="1.2.840.113549.1.7.4",t["1.2.840.113549.1.7.5"]="digestedData",t.digestedData="1.2.840.113549.1.7.5",t["1.2.840.113549.1.7.6"]="encryptedData",t.encryptedData="1.2.840.113549.1.7.6",t["1.2.840.113549.1.9.1"]="emailAddress",t.emailAddress="1.2.840.113549.1.9.1",t["1.2.840.113549.1.9.2"]="unstructuredName",t.unstructuredName="1.2.840.113549.1.9.2",t["1.2.840.113549.1.9.3"]="contentType",t.contentType="1.2.840.113549.1.9.3",t["1.2.840.113549.1.9.4"]="messageDigest",t.messageDigest="1.2.840.113549.1.9.4",t["1.2.840.113549.1.9.5"]="signingTime",t.signingTime="1.2.840.113549.1.9.5",t["1.2.840.113549.1.9.6"]="counterSignature",t.counterSignature="1.2.840.113549.1.9.6",t["1.2.840.113549.1.9.7"]="challengePassword",t.challengePassword="1.2.840.113549.1.9.7",t["1.2.840.113549.1.9.8"]="unstructuredAddress",t.unstructuredAddress="1.2.840.113549.1.9.8",t["1.2.840.113549.1.9.14"]="extensionRequest",t.extensionRequest="1.2.840.113549.1.9.14",t["1.2.840.113549.1.9.20"]="friendlyName",t.friendlyName="1.2.840.113549.1.9.20",t["1.2.840.113549.1.9.21"]="localKeyId",t.localKeyId="1.2.840.113549.1.9.21",t["1.2.840.113549.1.9.22.1"]="x509Certificate",t.x509Certificate="1.2.840.113549.1.9.22.1",t["1.2.840.113549.1.12.10.1.1"]="keyBag",t.keyBag="1.2.840.113549.1.12.10.1.1",t["1.2.840.113549.1.12.10.1.2"]="pkcs8ShroudedKeyBag",t.pkcs8ShroudedKeyBag="1.2.840.113549.1.12.10.1.2",t["1.2.840.113549.1.12.10.1.3"]="certBag",t.certBag="1.2.840.113549.1.12.10.1.3",t["1.2.840.113549.1.12.10.1.4"]="crlBag",t.crlBag="1.2.840.113549.1.12.10.1.4",t["1.2.840.113549.1.12.10.1.5"]="secretBag",t.secretBag="1.2.840.113549.1.12.10.1.5",t["1.2.840.113549.1.12.10.1.6"]="safeContentsBag",t.safeContentsBag="1.2.840.113549.1.12.10.1.6",t["1.2.840.113549.1.5.13"]="pkcs5PBES2",t.pkcs5PBES2="1.2.840.113549.1.5.13",t["1.2.840.113549.1.5.12"]="pkcs5PBKDF2",t.pkcs5PBKDF2="1.2.840.113549.1.5.12",t["1.2.840.113549.1.12.1.1"]="pbeWithSHAAnd128BitRC4",t.pbeWithSHAAnd128BitRC4="1.2.840.113549.1.12.1.1",t["1.2.840.113549.1.12.1.2"]="pbeWithSHAAnd40BitRC4",t.pbeWithSHAAnd40BitRC4="1.2.840.113549.1.12.1.2",t["1.2.840.113549.1.12.1.3"]="pbeWithSHAAnd3-KeyTripleDES-CBC",t["pbeWithSHAAnd3-KeyTripleDES-CBC"]="1.2.840.113549.1.12.1.3",t["1.2.840.113549.1.12.1.4"]="pbeWithSHAAnd2-KeyTripleDES-CBC",t["pbeWithSHAAnd2-KeyTripleDES-CBC"]="1.2.840.113549.1.12.1.4",t["1.2.840.113549.1.12.1.5"]="pbeWithSHAAnd128BitRC2-CBC",t["pbeWithSHAAnd128BitRC2-CBC"]="1.2.840.113549.1.12.1.5",t["1.2.840.113549.1.12.1.6"]="pbewithSHAAnd40BitRC2-CBC",t["pbewithSHAAnd40BitRC2-CBC"]="1.2.840.113549.1.12.1.6",t["1.2.840.113549.2.7"]="hmacWithSHA1",t.hmacWithSHA1="1.2.840.113549.2.7",t["1.2.840.113549.2.8"]="hmacWithSHA224",t.hmacWithSHA224="1.2.840.113549.2.8",t["1.2.840.113549.2.9"]="hmacWithSHA256",t.hmacWithSHA256="1.2.840.113549.2.9",t["1.2.840.113549.2.10"]="hmacWithSHA384",t.hmacWithSHA384="1.2.840.113549.2.10",t["1.2.840.113549.2.11"]="hmacWithSHA512",t.hmacWithSHA512="1.2.840.113549.2.11",t["1.2.840.113549.3.7"]="des-EDE3-CBC",t["des-EDE3-CBC"]="1.2.840.113549.3.7",t["2.16.840.1.101.3.4.1.2"]="aes128-CBC",t["aes128-CBC"]="2.16.840.1.101.3.4.1.2",t["2.16.840.1.101.3.4.1.22"]="aes192-CBC",t["aes192-CBC"]="2.16.840.1.101.3.4.1.22",t["2.16.840.1.101.3.4.1.42"]="aes256-CBC",t["aes256-CBC"]="2.16.840.1.101.3.4.1.42",t["2.5.4.3"]="commonName",t.commonName="2.5.4.3",t["2.5.4.5"]="serialName",t.serialName="2.5.4.5",t["2.5.4.6"]="countryName",t.countryName="2.5.4.6",t["2.5.4.7"]="localityName",t.localityName="2.5.4.7",t["2.5.4.8"]="stateOrProvinceName",t.stateOrProvinceName="2.5.4.8",t["2.5.4.10"]="organizationName",t.organizationName="2.5.4.10",t["2.5.4.11"]="organizationalUnitName",t.organizationalUnitName="2.5.4.11",t["2.16.840.1.113730.1.1"]="nsCertType",t.nsCertType="2.16.840.1.113730.1.1",t["2.5.29.1"]="authorityKeyIdentifier",t["2.5.29.2"]="keyAttributes",t["2.5.29.3"]="certificatePolicies",t["2.5.29.4"]="keyUsageRestriction",t["2.5.29.5"]="policyMapping",t["2.5.29.6"]="subtreesConstraint",t["2.5.29.7"]="subjectAltName",t["2.5.29.8"]="issuerAltName",t["2.5.29.9"]="subjectDirectoryAttributes",t["2.5.29.10"]="basicConstraints",t["2.5.29.11"]="nameConstraints",t["2.5.29.12"]="policyConstraints",t["2.5.29.13"]="basicConstraints",t["2.5.29.14"]="subjectKeyIdentifier",t.subjectKeyIdentifier="2.5.29.14",t["2.5.29.15"]="keyUsage",t.keyUsage="2.5.29.15",t["2.5.29.16"]="privateKeyUsagePeriod",t["2.5.29.17"]="subjectAltName",t.subjectAltName="2.5.29.17",t["2.5.29.18"]="issuerAltName",t.issuerAltName="2.5.29.18",t["2.5.29.19"]="basicConstraints",t.basicConstraints="2.5.29.19",t["2.5.29.20"]="cRLNumber",t["2.5.29.21"]="cRLReason",t["2.5.29.22"]="expirationDate",t["2.5.29.23"]="instructionCode",t["2.5.29.24"]="invalidityDate",t["2.5.29.25"]="cRLDistributionPoints",t["2.5.29.26"]="issuingDistributionPoint",t["2.5.29.27"]="deltaCRLIndicator",t["2.5.29.28"]="issuingDistributionPoint",t["2.5.29.29"]="certificateIssuer",t["2.5.29.30"]="nameConstraints",t["2.5.29.31"]="cRLDistributionPoints",t.cRLDistributionPoints="2.5.29.31",t["2.5.29.32"]="certificatePolicies",t.certificatePolicies="2.5.29.32",t["2.5.29.33"]="policyMappings",t["2.5.29.34"]="policyConstraints",t["2.5.29.35"]="authorityKeyIdentifier",t.authorityKeyIdentifier="2.5.29.35",t["2.5.29.36"]="policyConstraints",t["2.5.29.37"]="extKeyUsage",t.extKeyUsage="2.5.29.37",t["2.5.29.46"]="freshestCRL",t["2.5.29.54"]="inhibitAnyPolicy",t["1.3.6.1.4.1.11129.2.4.2"]="timestampList",t.timestampList="1.3.6.1.4.1.11129.2.4.2",t["1.3.6.1.5.5.7.1.1"]="authorityInfoAccess",t.authorityInfoAccess="1.3.6.1.5.5.7.1.1",t["1.3.6.1.5.5.7.3.1"]="serverAuth",t.serverAuth="1.3.6.1.5.5.7.3.1",t["1.3.6.1.5.5.7.3.2"]="clientAuth",t.clientAuth="1.3.6.1.5.5.7.3.2",t["1.3.6.1.5.5.7.3.3"]="codeSigning",t.codeSigning="1.3.6.1.5.5.7.3.3",t["1.3.6.1.5.5.7.3.4"]="emailProtection",t.emailProtection="1.3.6.1.5.5.7.3.4",t["1.3.6.1.5.5.7.3.8"]="timeStamping",t.timeStamping="1.3.6.1.5.5.7.3.8"}var r="oids";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/oids",["require","module"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){var t=e.asn1=e.asn1||{};t.Class={UNIVERSAL:0,APPLICATION:64,CONTEXT_SPECIFIC:128,PRIVATE:192},t.Type={NONE:0,BOOLEAN:1,INTEGER:2,BITSTRING:3,OCTETSTRING:4,NULL:5,OID:6,ODESC:7,EXTERNAL:8,REAL:9,ENUMERATED:10,EMBEDDED:11,UTF8:12,ROID:13,SEQUENCE:16,SET:17,PRINTABLESTRING:19,IA5STRING:22,UTCTIME:23,GENERALIZEDTIME:24,BMPSTRING:30},t.create=function(t,n,r,i){if(e.util.isArray(i)){var s=[];for(var o=0;o<i.length;++o)i[o]!==undefined&&s.push(i[o]);i=s}return{tagClass:t,type:n,constructed:r,composed:r||e.util.isArray(i),value:i}};var n=t.getBerValueLength=function(e){var t=e.getByte();if(t===128)return undefined;var n,r=t&128;return r?n=e.getInt((t&127)<<3):n=t,n};t.fromDer=function(r,i){i===undefined&&(i=!0),typeof r=="string"&&(r=e.util.createBuffer(r));if(r.length()<2){var s=new Error("Too few bytes to parse DER.");throw s.bytes=r.length(),s}var o=r.getByte(),u=o&192,a=o&31,f=n(r);if(r.length()<f){if(i){var s=new Error("Too few bytes to read ASN.1 value.");throw s.detail=r.length()+" < "+f,s}f=r.length()}var l,c=(o&32)===32,h=c;if(!h&&u===t.Class.UNIVERSAL&&a===t.Type.BITSTRING&&f>1){var p=r.read,d=r.getByte();if(d===0){o=r.getByte();var v=o&192;if(v===t.Class.UNIVERSAL||v===t.Class.CONTEXT_SPECIFIC)try{var m=n(r);h=m===f-(r.read-p),h&&(++p,--f)}catch(g){}}r.read=p}if(h){l=[];if(f===undefined)for(;;){if(r.bytes(2)===String.fromCharCode(0,0)){r.getBytes(2);break}l.push(t.fromDer(r,i))}else{var y=r.length();while(f>0)l.push(t.fromDer(r,i)),f-=y-r.length(),y=r.length()}}else{if(f===undefined){if(i)throw new Error("Non-constructed ASN.1 object of indefinite length.");f=r.length()}if(a===t.Type.BMPSTRING){l="";for(var b=0;b<f;b+=2)l+=String.fromCharCode(r.getInt16())}else l=r.getBytes(f)}return t.create(u,a,c,l)},t.toDer=function(n){var r=e.util.createBuffer(),i=n.tagClass|n.type,s=e.util.createBuffer();if(n.composed){n.constructed?i|=32:s.putByte(0);for(var o=0;o<n.value.length;++o)n.value[o]!==undefined&&s.putBuffer(t.toDer(n.value[o]))}else if(n.type===t.Type.BMPSTRING)for(var o=0;o<n.value.length;++o)s.putInt16(n.value.charCodeAt(o));else n.type===t.Type.INTEGER&&n.value.length>1&&(n.value.charCodeAt(0)===0&&(n.value.charCodeAt(1)&128)===0||n.value.charCodeAt(0)===255&&(n.value.charCodeAt(1)&128)===128)?s.putBytes(n.value.substr(1)):s.putBytes(n.value);r.putByte(i);if(s.length()<=127)r.putByte(s.length()&127);else{var u=s.length(),a="";do a+=String.fromCharCode(u&255),u>>>=8;while(u>0);r.putByte(a.length|128);for(var o=a.length-1;o>=0;--o)r.putByte(a.charCodeAt(o))}return r.putBuffer(s),r},t.oidToDer=function(t){var n=t.split("."),r=e.util.createBuffer();r.putByte(40*parseInt(n[0],10)+parseInt(n[1],10));var i,s,o,u;for(var a=2;a<n.length;++a){i=!0,s=[],o=parseInt(n[a],10);do u=o&127,o>>>=7,i||(u|=128),s.push(u),i=!1;while(o>0);for(var f=s.length-1;f>=0;--f)r.putByte(s[f])}return r},t.derToOid=function(t){var n;typeof t=="string"&&(t=e.util.createBuffer(t));var r=t.getByte();n=Math.floor(r/40)+"."+r%40;var i=0;while(t.length()>0)r=t.getByte(),i<<=7,r&128?i+=r&127:(n+="."+(i+r),i=0);return n},t.utcTimeToDate=function(e){var t=new Date,n=parseInt(e.substr(0,2),10);n=n>=50?1900+n:2e3+n;var r=parseInt(e.substr(2,2),10)-1,i=parseInt(e.substr(4,2),10),s=parseInt(e.substr(6,2),10),o=parseInt(e.substr(8,2),10),u=0;if(e.length>11){var a=e.charAt(10),f=10;a!=="+"&&a!=="-"&&(u=parseInt(e.substr(10,2),10),f+=2)}t.setUTCFullYear(n,r,i),t.setUTCHours(s,o,u,0);if(f){a=e.charAt(f);if(a==="+"||a==="-"){var l=parseInt(e.substr(f+1,2),10),c=parseInt(e.substr(f+4,2),10),h=l*60+c;h*=6e4,a==="+"?t.setTime(+t-h):t.setTime(+t+h)}}return t},t.generalizedTimeToDate=function(e){var t=new Date,n=parseInt(e.substr(0,4),10),r=parseInt(e.substr(4,2),10)-1,i=parseInt(e.substr(6,2),10),s=parseInt(e.substr(8,2),10),o=parseInt(e.substr(10,2),10),u=parseInt(e.substr(12,2),10),a=0,f=0,l=!1;e.charAt(e.length-1)==="Z"&&(l=!0);var c=e.length-5,h=e.charAt(c);if(h==="+"||h==="-"){var p=parseInt(e.substr(c+1,2),10),d=parseInt(e.substr(c+4,2),10);f=p*60+d,f*=6e4,h==="+"&&(f*=-1),l=!0}return e.charAt(14)==="."&&(a=parseFloat(e.substr(14),10)*1e3),l?(t.setUTCFullYear(n,r,i),t.setUTCHours(s,o,u,a),t.setTime(+t+f)):(t.setFullYear(n,r,i),t.setHours(s,o,u,a)),t},t.dateToUtcTime=function(e){if(typeof e=="string")return e;var t="",n=[];n.push((""+e.getUTCFullYear()).substr(2)),n.push(""+(e.getUTCMonth()+1)),n.push(""+e.getUTCDate()),n.push(""+e.getUTCHours()),n.push(""+e.getUTCMinutes()),n.push(""+e.getUTCSeconds());for(var r=0;r<n.length;++r)n[r].length<2&&(t+="0"),t+=n[r];return t+="Z",t},t.dateToGeneralizedTime=function(e){if(typeof e=="string")return e;var t="",n=[];n.push(""+e.getUTCFullYear()),n.push(""+(e.getUTCMonth()+1)),n.push(""+e.getUTCDate()),n.push(""+e.getUTCHours()),n.push(""+e.getUTCMinutes()),n.push(""+e.getUTCSeconds());for(var r=0;r<n.length;++r)n[r].length<2&&(t+="0"),t+=n[r];return t+="Z",t},t.integerToDer=function(t){var n=e.util.createBuffer();if(t>=-128&&t<128)return n.putSignedInt(t,8);if(t>=-32768&&t<32768)return n.putSignedInt(t,16);if(t>=-8388608&&t<8388608)return n.putSignedInt(t,24);if(t>=-2147483648&&t<2147483648)return n.putSignedInt(t,32);var r=new Error("Integer too large; max is 32-bits.");throw r.integer=t,r},t.derToInteger=function(t){typeof t=="string"&&(t=e.util.createBuffer(t));var n=t.length()*8;if(n>32)throw new Error("Integer too large; max is 32-bits.");return t.getSignedInt(n)},t.validate=function(n,r,i,s){var o=!1;if(n.tagClass!==r.tagClass&&typeof r.tagClass!="undefined"||n.type!==r.type&&typeof r.type!="undefined")s&&(n.tagClass!==r.tagClass&&s.push("["+r.name+"] "+'Expected tag class "'+r.tagClass+'", got "'+n.tagClass+'"'),n.type!==r.type&&s.push("["+r.name+"] "+'Expected type "'+r.type+'", got "'+n.type+'"'));else if(n.constructed===r.constructed||typeof r.constructed=="undefined"){o=!0;if(r.value&&e.util.isArray(r.value)){var u=0;for(var a=0;o&&a<r.value.length;++a)o=r.value[a].optional||!1,n.value[u]&&(o=t.validate(n.value[u],r.value[a],i,s),o?++u:r.value[a].optional&&(o=!0)),!o&&s&&s.push("["+r.name+"] "+'Tag class "'+r.tagClass+'", type "'+r.type+'" expected value length "'+r.value.length+'", got "'+n.value.length+'"')}o&&i&&(r.capture&&(i[r.capture]=n.value),r.captureAsn1&&(i[r.captureAsn1]=n))}else s&&s.push("["+r.name+"] "+'Expected constructed "'+r.constructed+'", got "'+n.constructed+'"');return o};var r=/[^\\u0000-\\u00ff]/;t.prettyPrint=function(n,i,s){var o="";i=i||0,s=s||2,i>0&&(o+="\n");var u="";for(var a=0;a<i*s;++a)u+=" ";o+=u+"Tag: ";switch(n.tagClass){case t.Class.UNIVERSAL:o+="Universal:";break;case t.Class.APPLICATION:o+="Application:";break;case t.Class.CONTEXT_SPECIFIC:o+="Context-Specific:";break;case t.Class.PRIVATE:o+="Private:"}if(n.tagClass===t.Class.UNIVERSAL){o+=n.type;switch(n.type){case t.Type.NONE:o+=" (None)";break;case t.Type.BOOLEAN:o+=" (Boolean)";break;case t.Type.BITSTRING:o+=" (Bit string)";break;case t.Type.INTEGER:o+=" (Integer)";break;case t.Type.OCTETSTRING:o+=" (Octet string)";break;case t.Type.NULL:o+=" (Null)";break;case t.Type.OID:o+=" (Object Identifier)";break;case t.Type.ODESC:o+=" (Object Descriptor)";break;case t.Type.EXTERNAL:o+=" (External or Instance of)";break;case t.Type.REAL:o+=" (Real)";break;case t.Type.ENUMERATED:o+=" (Enumerated)";break;case t.Type.EMBEDDED:o+=" (Embedded PDV)";break;case t.Type.UTF8:o+=" (UTF8)";break;case t.Type.ROID:o+=" (Relative Object Identifier)";break;case t.Type.SEQUENCE:o+=" (Sequence)";break;case t.Type.SET:o+=" (Set)";break;case t.Type.PRINTABLESTRING:o+=" (Printable String)";break;case t.Type.IA5String:o+=" (IA5String (ASCII))";break;case t.Type.UTCTIME:o+=" (UTC time)";break;case t.Type.GENERALIZEDTIME:o+=" (Generalized time)";break;case t.Type.BMPSTRING:o+=" (BMP String)"}}else o+=n.type;o+="\n",o+=u+"Constructed: "+n.constructed+"\n";if(n.composed){var f=0,l="";for(var a=0;a<n.value.length;++a)n.value[a]!==undefined&&(f+=1,l+=t.prettyPrint(n.value[a],i+1,s),a+1<n.value.length&&(l+=","));o+=u+"Sub values: "+f+l}else{o+=u+"Value: ";if(n.type===t.Type.OID){var c=t.derToOid(n.value);o+=c,e.pki&&e.pki.oids&&c in e.pki.oids&&(o+=" ("+e.pki.oids[c]+") ")}if(n.type===t.Type.INTEGER)try{o+=t.derToInteger(n.value)}catch(h){o+="0x"+e.util.bytesToHex(n.value)}else n.type===t.Type.OCTETSTRING?(r.test(n.value)||(o+="("+n.value+") "),o+="0x"+e.util.bytesToHex(n.value)):n.type===t.Type.UTF8?o+=e.util.decodeUtf8(n.value):n.type===t.Type.PRINTABLESTRING||n.type===t.Type.IA5String?o+=n.value:r.test(n.value)?o+="0x"+e.util.bytesToHex(n.value):n.value.length===0?o+="[null]":o+=n.value}return o}}var r="asn1";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/asn1",["require","module","./util","./oids"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function u(){n=String.fromCharCode(128),n+=e.util.fillString(String.fromCharCode(0),64),r=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,6,11,0,5,10,15,4,9,14,3,8,13,2,7,12,5,8,11,14,1,4,7,10,13,0,3,6,9,12,15,2,0,7,14,5,12,3,10,1,8,15,6,13,4,11,2,9],i=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],s=new Array(64);for(var t=0;t<64;++t)s[t]=Math.floor(Math.abs(Math.sin(t+1))*4294967296);o=!0}function a(e,t,n){var o,u,a,f,l,c,h,p,d=n.length();while(d>=64){u=e.h0,a=e.h1,f=e.h2,l=e.h3;for(p=0;p<16;++p)t[p]=n.getInt32Le(),c=l^a&(f^l),o=u+c+s[p]+t[p],h=i[p],u=l,l=f,f=a,a+=o<<h|o>>>32-h;for(;p<32;++p)c=f^l&(a^f),o=u+c+s[p]+t[r[p]],h=i[p],u=l,l=f,f=a,a+=o<<h|o>>>32-h;for(;p<48;++p)c=a^f^l,o=u+c+s[p]+t[r[p]],h=i[p],u=l,l=f,f=a,a+=o<<h|o>>>32-h;for(;p<64;++p)c=f^(a|~l),o=u+c+s[p]+t[r[p]],h=i[p],u=l,l=f,f=a,a+=o<<h|o>>>32-h;e.h0=e.h0+u|0,e.h1=e.h1+a|0,e.h2=e.h2+f|0,e.h3=e.h3+l|0,d-=64}}var t=e.md5=e.md5||{};e.md=e.md||{},e.md.algorithms=e.md.algorithms||{},e.md.md5=e.md.algorithms.md5=t,t.create=function(){o||u();var t=null,r=e.util.createBuffer(),i=new Array(16),s={algorithm:"md5",blockLength:64,digestLength:16,messageLength:0,fullMessageLength:null,messageLengthSize:8};return s.start=function(){s.messageLength=0,s.fullMessageLength=s.messageLength64=[];var n=s.messageLengthSize/4;for(var i=0;i<n;++i)s.fullMessageLength.push(0);return r=e.util.createBuffer(),t={h0:1732584193,h1:4023233417,h2:2562383102,h3:271733878},s},s.start(),s.update=function(n,o){o==="utf8"&&(n=e.util.encodeUtf8(n));var u=n.length;s.messageLength+=u,u=[u/4294967296>>>0,u>>>0];for(var f=s.fullMessageLength.length-1;f>=0;--f)s.fullMessageLength[f]+=u[1],u[1]=u[0]+(s.fullMessageLength[f]/4294967296>>>0),s.fullMessageLength[f]=s.fullMessageLength[f]>>>0,u[0]=u[1]/4294967296>>>0;return r.putBytes(n),a(t,i,r),(r.read>2048||r.length()===0)&&r.compact(),s},s.digest=function(){var o=e.util.createBuffer();o.putBytes(r.bytes());var u=s.fullMessageLength[s.fullMessageLength.length-1]+s.messageLengthSize,f=u&s.blockLength-1;o.putBytes(n.substr(0,s.blockLength-f));var l,c=0;for(var h=s.fullMessageLength.length-1;h>=0;--h)l=s.fullMessageLength[h]*8+c,c=l/4294967296>>>0,o.putInt32Le(l>>>0);var p={h0:t.h0,h1:t.h1,h2:t.h2,h3:t.h3};a(p,i,o);var d=e.util.createBuffer();return d.putInt32Le(p.h0),d.putInt32Le(p.h1),d.putInt32Le(p.h2),d.putInt32Le(p.h3),d},s};var n=null,r=null,i=null,s=null,o=!1}var r="md5";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/md5",["require","module","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function i(){n=String.fromCharCode(128),n+=e.util.fillString(String.fromCharCode(0),64),r=!0}function s(e,t,n){var r,i,s,o,u,a,f,l,c=n.length();while(c>=64){i=e.h0,s=e.h1,o=e.h2,u=e.h3,a=e.h4;for(l=0;l<16;++l)r=n.getInt32(),t[l]=r,f=u^s&(o^u),r=(i<<5|i>>>27)+f+a+1518500249+r,a=u,u=o,o=(s<<30|s>>>2)>>>0,s=i,i=r;for(;l<20;++l)r=t[l-3]^t[l-8]^t[l-14]^t[l-16],r=r<<1|r>>>31,t[l]=r,f=u^s&(o^u),r=(i<<5|i>>>27)+f+a+1518500249+r,a=u,u=o,o=(s<<30|s>>>2)>>>0,s=i,i=r;for(;l<32;++l)r=t[l-3]^t[l-8]^t[l-14]^t[l-16],r=r<<1|r>>>31,t[l]=r,f=s^o^u,r=(i<<5|i>>>27)+f+a+1859775393+r,a=u,u=o,o=(s<<30|s>>>2)>>>0,s=i,i=r;for(;l<40;++l)r=t[l-6]^t[l-16]^t[l-28]^t[l-32],r=r<<2|r>>>30,t[l]=r,f=s^o^u,r=(i<<5|i>>>27)+f+a+1859775393+r,a=u,u=o,o=(s<<30|s>>>2)>>>0,s=i,i=r;for(;l<60;++l)r=t[l-6]^t[l-16]^t[l-28]^t[l-32],r=r<<2|r>>>30,t[l]=r,f=s&o|u&(s^o),r=(i<<5|i>>>27)+f+a+2400959708+r,a=u,u=o,o=(s<<30|s>>>2)>>>0,s=i,i=r;for(;l<80;++l)r=t[l-6]^t[l-16]^t[l-28]^t[l-32],r=r<<2|r>>>30,t[l]=r,f=s^o^u,r=(i<<5|i>>>27)+f+a+3395469782+r,a=u,u=o,o=(s<<30|s>>>2)>>>0,s=i,i=r;e.h0=e.h0+i|0,e.h1=e.h1+s|0,e.h2=e.h2+o|0,e.h3=e.h3+u|0,e.h4=e.h4+a|0,c-=64}}var t=e.sha1=e.sha1||{};e.md=e.md||{},e.md.algorithms=e.md.algorithms||{},e.md.sha1=e.md.algorithms.sha1=t,t.create=function(){r||i();var t=null,o=e.util.createBuffer(),u=new Array(80),a={algorithm:"sha1",blockLength:64,digestLength:20,messageLength:0,fullMessageLength:null,messageLengthSize:8};return a.start=function(){a.messageLength=0,a.fullMessageLength=a.messageLength64=[];var n=a.messageLengthSize/4;for(var r=0;r<n;++r)a.fullMessageLength.push(0);return o=e.util.createBuffer(),t={h0:1732584193,h1:4023233417,h2:2562383102,h3:271733878,h4:3285377520},a},a.start(),a.update=function(n,r){r==="utf8"&&(n=e.util.encodeUtf8(n));var i=n.length;a.messageLength+=i,i=[i/4294967296>>>0,i>>>0];for(var f=a.fullMessageLength.length-1;f>=0;--f)a.fullMessageLength[f]+=i[1],i[1]=i[0]+(a.fullMessageLength[f]/4294967296>>>0),a.fullMessageLength[f]=a.fullMessageLength[f]>>>0,i[0]=i[1]/4294967296>>>0;return o.putBytes(n),s(t,u,o),(o.read>2048||o.length()===0)&&o.compact(),a},a.digest=function(){var r=e.util.createBuffer();r.putBytes(o.bytes());var i=a.fullMessageLength[a.fullMessageLength.length-1]+a.messageLengthSize,f=i&a.blockLength-1;r.putBytes(n.substr(0,a.blockLength-f));var l,c,h=a.fullMessageLength[0]*8;for(var p=0;p<a.fullMessageLength.length-1;++p)l=a.fullMessageLength[p+1]*8,c=l/4294967296>>>0,h+=c,r.putInt32(h>>>0),h=l>>>0;r.putInt32(h);var d={h0:t.h0,h1:t.h1,h2:t.h2,h3:t.h3,h4:t.h4};s(d,u,r);var v=e.util.createBuffer();return v.putInt32(d.h0),v.putInt32(d.h1),v.putInt32(d.h2),v.putInt32(d.h3),v.putInt32(d.h4),v},a};var n=null,r=!1}var r="sha1";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/sha1",["require","module","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function s(){n=String.fromCharCode(128),n+=e.util.fillString(String.fromCharCode(0),64),i=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],r=!0}function o(e,t,n){var r,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b=n.length();while(b>=64){for(l=0;l<16;++l)t[l]=n.getInt32();for(;l<64;++l)r=t[l-2],r=(r>>>17|r<<15)^(r>>>19|r<<13)^r>>>10,s=t[l-15],s=(s>>>7|s<<25)^(s>>>18|s<<14)^s>>>3,t[l]=r+t[l-7]+s+t[l-16]|0;c=e.h0,h=e.h1,p=e.h2,d=e.h3,v=e.h4,m=e.h5,g=e.h6,y=e.h7;for(l=0;l<64;++l)u=(v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7),a=g^v&(m^g),o=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),f=c&h|p&(c^h),r=y+u+a+i[l]+t[l],s=o+f,y=g,g=m,m=v,v=d+r>>>0,d=p,p=h,h=c,c=r+s>>>0;e.h0=e.h0+c|0,e.h1=e.h1+h|0,e.h2=e.h2+p|0,e.h3=e.h3+d|0,e.h4=e.h4+v|0,e.h5=e.h5+m|0,e.h6=e.h6+g|0,e.h7=e.h7+y|0,b-=64}}var t=e.sha256=e.sha256||{};e.md=e.md||{},e.md.algorithms=e.md.algorithms||{},e.md.sha256=e.md.algorithms.sha256=t,t.create=function(){r||s();var t=null,i=e.util.createBuffer(),u=new Array(64),a={algorithm:"sha256",blockLength:64,digestLength:32,messageLength:0,fullMessageLength:null,messageLengthSize:8};return a.start=function(){a.messageLength=0,a.fullMessageLength=a.messageLength64=[];var n=a.messageLengthSize/4;for(var r=0;r<n;++r)a.fullMessageLength.push(0);return i=e.util.createBuffer(),t={h0:1779033703,h1:3144134277,h2:1013904242,h3:2773480762,h4:1359893119,h5:2600822924,h6:528734635,h7:1541459225},a},a.start(),a.update=function(n,r){r==="utf8"&&(n=e.util.encodeUtf8(n));var s=n.length;a.messageLength+=s,s=[s/4294967296>>>0,s>>>0];for(var f=a.fullMessageLength.length-1;f>=0;--f)a.fullMessageLength[f]+=s[1],s[1]=s[0]+(a.fullMessageLength[f]/4294967296>>>0),a.fullMessageLength[f]=a.fullMessageLength[f]>>>0,s[0]=s[1]/4294967296>>>0;return i.putBytes(n),o(t,u,i),(i.read>2048||i.length()===0)&&i.compact(),a},a.digest=function(){var r=e.util.createBuffer();r.putBytes(i.bytes());var s=a.fullMessageLength[a.fullMessageLength.length-1]+a.messageLengthSize,f=s&a.blockLength-1;r.putBytes(n.substr(0,a.blockLength-f));var l,c,h=a.fullMessageLength[0]*8;for(var p=0;p<a.fullMessageLength.length-1;++p)l=a.fullMessageLength[p+1]*8,c=l/4294967296>>>0,h+=c,r.putInt32(h>>>0),h=l>>>0;r.putInt32(h);var d={h0:t.h0,h1:t.h1,h2:t.h2,h3:t.h3,h4:t.h4,h5:t.h5,h6:t.h6,h7:t.h7};o(d,u,r);var v=e.util.createBuffer();return v.putInt32(d.h0),v.putInt32(d.h1),v.putInt32(d.h2),v.putInt32(d.h3),v.putInt32(d.h4),v.putInt32(d.h5),v.putInt32(d.h6),v.putInt32(d.h7),v},a};var n=null,r=!1,i=null}var r="sha256";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/sha256",["require","module","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function u(){r=String.fromCharCode(128),r+=e.util.fillString(String.fromCharCode(0),128),s=[[1116352408,3609767458],[1899447441,602891725],[3049323471,3964484399],[3921009573,2173295548],[961987163,4081628472],[1508970993,3053834265],[2453635748,2937671579],[2870763221,3664609560],[3624381080,2734883394],[310598401,1164996542],[607225278,1323610764],[1426881987,3590304994],[1925078388,4068182383],[2162078206,991336113],[2614888103,633803317],[3248222580,3479774868],[3835390401,2666613458],[4022224774,944711139],[264347078,2341262773],[604807628,2007800933],[770255983,1495990901],[1249150122,1856431235],[1555081692,3175218132],[1996064986,2198950837],[2554220882,3999719339],[2821834349,766784016],[2952996808,2566594879],[3210313671,3203337956],[3336571891,1034457026],[3584528711,2466948901],[113926993,3758326383],[338241895,168717936],[666307205,1188179964],[773529912,1546045734],[1294757372,1522805485],[1396182291,2643833823],[1695183700,2343527390],[1986661051,1014477480],[2177026350,1206759142],[2456956037,344077627],[2730485921,1290863460],[2820302411,3158454273],[3259730800,3505952657],[3345764771,106217008],[3516065817,3606008344],[3600352804,1432725776],[4094571909,1467031594],[275423344,851169720],[430227734,3100823752],[506948616,1363258195],[659060556,3750685593],[883997877,3785050280],[958139571,3318307427],[1322822218,3812723403],[1537002063,2003034995],[1747873779,3602036899],[1955562222,1575990012],[2024104815,1125592928],[2227730452,2716904306],[2361852424,442776044],[2428436474,593698344],[2756734187,3733110249],[3204031479,2999351573],[3329325298,3815920427],[3391569614,3928383900],[3515267271,566280711],[3940187606,3454069534],[4118630271,4000239992],[116418474,1914138554],[174292421,2731055270],[289380356,3203993006],[460393269,320620315],[685471733,587496836],[852142971,1086792851],[1017036298,365543100],[1126000580,2618297676],[1288033470,3409855158],[1501505948,4234509866],[1607167915,987167468],[1816402316,1246189591]],o={},o["SHA-512"]=[[1779033703,4089235720],[3144134277,2227873595],[1013904242,4271175723],[2773480762,1595750129],[1359893119,2917565137],[2600822924,725511199],[528734635,4215389547],[1541459225,327033209]],o["SHA-384"]=[[3418070365,3238371032],[1654270250,914150663],[2438529370,812702999],[355462360,4144912697],[1731405415,4290775857],[2394180231,1750603025],[3675008525,1694076839],[1203062813,3204075428]],o["SHA-512/256"]=[[573645204,4230739756],[2673172387,3360449730],[596883563,1867755857],[2520282905,1497426621],[2519219938,2827943907],[3193839141,1401305490],[721525244,746961066],[246885852,2177182882]],o["SHA-512/224"]=[[2352822216,424955298],[1944164710,2312950998],[502970286,855612546],[1738396948,1479516111],[258812777,2077511080],[2011393907,79989058],[1067287976,1780299464],[286451373,2446758561]],i=!0}function a(e,t,n){var r,i,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I=n.length();while(I>=128){for(_=0;_<16;++_)t[_][0]=n.getInt32()>>>0,t[_][1]=n.getInt32()>>>0;for(;_<80;++_)H=t[_-2],D=H[0],P=H[1],r=((D>>>19|P<<13)^(P>>>29|D<<3)^D>>>6)>>>0,i=((D<<13|P>>>19)^(P<<3|D>>>29)^(D<<26|P>>>6))>>>0,j=t[_-15],D=j[0],P=j[1],o=((D>>>1|P<<31)^(D>>>8|P<<24)^D>>>7)>>>0,u=((D<<31|P>>>1)^(D<<24|P>>>8)^(D<<25|P>>>7))>>>0,B=t[_-7],F=t[_-16],P=i+B[1]+u+F[1],t[_][0]=r+B[0]+o+F[0]+(P/4294967296>>>0)>>>0,t[_][1]=P>>>0;m=e[0][0],g=e[0][1],y=e[1][0],b=e[1][1],w=e[2][0],E=e[2][1],S=e[3][0],x=e[3][1],T=e[4][0],N=e[4][1],C=e[5][0],k=e[5][1],L=e[6][0],A=e[6][1],O=e[7][0],M=e[7][1];for(_=0;_<80;++_)l=((T>>>14|N<<18)^(T>>>18|N<<14)^(N>>>9|T<<23))>>>0,c=((T<<18|N>>>14)^(T<<14|N>>>18)^(N<<23|T>>>9))>>>0,h=(L^T&(C^L))>>>0,p=(A^N&(k^A))>>>0,a=((m>>>28|g<<4)^(g>>>2|m<<30)^(g>>>7|m<<25))>>>0,f=((m<<4|g>>>28)^(g<<30|m>>>2)^(g<<25|m>>>7))>>>0,d=(m&y|w&(m^y))>>>0,v=(g&b|E&(g^b))>>>0,P=M+c+p+s[_][1]+t[_][1],r=O+l+h+s[_][0]+t[_][0]+(P/4294967296>>>0)>>>0,i=P>>>0,P=f+v,o=a+d+(P/4294967296>>>0)>>>0,u=P>>>0,O=L,M=A,L=C,A=k,C=T,k=N,P=x+i,T=S+r+(P/4294967296>>>0)>>>0,N=P>>>0,S=w,x=E,w=y,E=b,y=m,b=g,P=i+u,m=r+o+(P/4294967296>>>0)>>>0,g=P>>>0;P=e[0][1]+g,e[0][0]=e[0][0]+m+(P/4294967296>>>0)>>>0,e[0][1]=P>>>0,P=e[1][1]+b,e[1][0]=e[1][0]+y+(P/4294967296>>>0)>>>0,e[1][1]=P>>>0,P=e[2][1]+E,e[2][0]=e[2][0]+w+(P/4294967296>>>0)>>>0,e[2][1]=P>>>0,P=e[3][1]+x,e[3][0]=e[3][0]+S+(P/4294967296>>>0)>>>0,e[3][1]=P>>>0,P=e[4][1]+N,e[4][0]=e[4][0]+T+(P/4294967296>>>0)>>>0,e[4][1]=P>>>0,P=e[5][1]+k,e[5][0]=e[5][0]+C+(P/4294967296>>>0)>>>0,e[5][1]=P>>>0,P=e[6][1]+A,e[6][0]=e[6][0]+L+(P/4294967296>>>0)>>>0,e[6][1]=P>>>0,P=e[7][1]+M,e[7][0]=e[7][0]+O+(P/4294967296>>>0)>>>0,e[7][1]=P>>>0,I-=128}}var t=e.sha512=e.sha512||{};e.md=e.md||{},e.md.algorithms=e.md.algorithms||{},e.md.sha512=e.md.algorithms.sha512=t;var n=e.sha384=e.sha512.sha384=e.sha512.sha384||{};n.create=function(){return t.create("SHA-384")},e.md.sha384=e.md.algorithms.sha384=n,e.sha512.sha256=e.sha512.sha256||{create:function(){return t.create("SHA-512/256")}},e.md["sha512/256"]=e.md.algorithms["sha512/256"]=e.sha512.sha256,e.sha512.sha224=e.sha512.sha224||{create:function(){return t.create("SHA-512/224")}},e.md["sha512/224"]=e.md.algorithms["sha512/224"]=e.sha512.sha224,t.create=function(t){i||u(),typeof t=="undefined"&&(t="SHA-512");if(t in o){var n=o[t],s=null,f=e.util.createBuffer(),l=new Array(80);for(var c=0;c<80;++c)l[c]=new Array(2);var h={algorithm:t.replace("-","").toLowerCase(),blockLength:128,digestLength:64,messageLength:0,fullMessageLength:null,messageLengthSize:16};return h.start=function(){h.messageLength=0,h.fullMessageLength=h.messageLength128=[];var t=h.messageLengthSize/4;for(var r=0;r<t;++r)h.fullMessageLength.push(0);f=e.util.createBuffer(),s=new Array(n.length);for(var r=0;r<n.length;++r)s[r]=n[r].slice(0);return h},h.start(),h.update=function(t,n){n==="utf8"&&(t=e.util.encodeUtf8(t));var r=t.length;h.messageLength+=r,r=[r/4294967296>>>0,r>>>0];for(var i=h.fullMessageLength.length-1;i>=0;--i)h.fullMessageLength[i]+=r[1],r[1]=r[0]+(h.fullMessageLength[i]/4294967296>>>0),h.fullMessageLength[i]=h.fullMessageLength[i]>>>0,r[0]=r[1]/4294967296>>>0;return f.putBytes(t),a(s,l,f),(f.read>2048||f.length()===0)&&f.compact(),h},h.digest=function(){var n=e.util.createBuffer();n.putBytes(f.bytes());var i=h.fullMessageLength[h.fullMessageLength.length-1]+h.messageLengthSize,o=i&h.blockLength-1;n.putBytes(r.substr(0,h.blockLength-o));var u,c,p=h.fullMessageLength[0]*8;for(var d=0;d<h.fullMessageLength.length-1;++d)u=h.fullMessageLength[d+1]*8,c=u/4294967296>>>0,p+=c,n.putInt32(p>>>0),p=u>>>0;n.putInt32(p);var v=new Array(s.length);for(var d=0;d<s.length;++d)v[d]=s[d].slice(0);a(v,l,n);var m=e.util.createBuffer(),g;t==="SHA-512"?g=v.length:t==="SHA-384"?g=v.length-2:g=v.length-4;for(var d=0;d<g;++d)m.putInt32(v[d][0]),(d!==g-1||t!=="SHA-512/224")&&m.putInt32(v[d][1]);return m},h}throw new Error("Invalid SHA-512 algorithm: "+t)};var r=null,i=!1,s=null,o=null}var r="sha512";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/sha512",["require","module","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){e.md=e.md||{},e.md.algorithms={md5:e.md5,sha1:e.sha1,sha256:e.sha256},e.md.md5=e.md5,e.md.sha1=e.sha1,e.md.sha256=e.sha256}var r="md";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/md",["require","module","./md5","./sha1","./sha256","./sha512"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){var t=e.hmac=e.hmac||{};t.create=function(){var t=null,n=null,r=null,i=null,s={};return s.start=function(s,o){if(s!==null)if(typeof s=="string"){s=s.toLowerCase();if(!(s in e.md.algorithms))throw new Error('Unknown hash algorithm "'+s+'"');n=e.md.algorithms[s].create()}else n=s;if(o===null)o=t;else{if(typeof o=="string")o=e.util.createBuffer(o);else if(e.util.isArray(o)){var u=o;o=e.util.createBuffer();for(var a=0;a<u.length;++a)o.putByte(u[a])}var f=o.length();f>n.blockLength&&(n.start(),n.update(o.bytes()),o=n.digest()),r=e.util.createBuffer(),i=e.util.createBuffer(),f=o.length();for(var a=0;a<f;++a){var u=o.at(a);r.putByte(54^u),i.putByte(92^u)}if(f<n.blockLength){var u=n.blockLength-f;for(var a=0;a<u;++a)r.putByte(54),i.putByte(92)}t=o,r=r.bytes(),i=i.bytes()}n.start(),n.update(r)},s.update=function(e){n.update(e)},s.getMac=function(){var e=n.digest().bytes();return n.start(),n.update(i),n.update(e),n.digest()},s.digest=s.getMac,s}}var r="hmac";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/hmac",["require","module","./md","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function n(e){var t=e.name+": ",n=[],r=function(e,t){return" "+t};for(var i=0;i<e.values.length;++i)n.push(e.values[i].replace(/^(\S+\r\n)/,r));t+=n.join(",")+"\r\n";var s=0,o=-1;for(var i=0;i<t.length;++i,++s)if(s>65&&o!==-1){var u=t[o];u===","?(++o,t=t.substr(0,o)+"\r\n "+t.substr(o)):t=t.substr(0,o)+"\r\n"+u+t.substr(o+1),s=i-o-1,o=-1,++i}else if(t[i]===" "||t[i]==="	"||t[i]===",")o=i;return t}function r(e){return e.replace(/^\s+/,"")}var t=e.pem=e.pem||{};t.encode=function(t,r){r=r||{};var i="-----BEGIN "+t.type+"-----\r\n",s;t.procType&&(s={name:"Proc-Type",values:[String(t.procType.version),t.procType.type]},i+=n(s)),t.contentDomain&&(s={name:"Content-Domain",values:[t.contentDomain]},i+=n(s)),t.dekInfo&&(s={name:"DEK-Info",values:[t.dekInfo.algorithm]},t.dekInfo.parameters&&s.values.push(t.dekInfo.parameters),i+=n(s));if(t.headers)for(var o=0;o<t.headers.length;++o)i+=n(t.headers[o]);return t.procType&&(i+="\r\n"),i+=e.util.encode64(t.body,r.maxline||64)+"\r\n",i+="-----END "+t.type+"-----\r\n",i},t.decode=function(t){var n=[],i=/\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,s=/([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,o=/\r?\n/,u;for(;;){u=i.exec(t);if(!u)break;var a={type:u[1],procType:null,contentDomain:null,dekInfo:null,headers:[],body:e.util.decode64(u[3])};n.push(a);if(!u[2])continue;var f=u[2].split(o),l=0;while(u&&l<f.length){var c=f[l].replace(/\s+$/,"");for(var h=l+1;h<f.length;++h){var p=f[h];if(!/\s/.test(p[0]))break;c+=p,l=h}u=c.match(s);if(u){var d={name:u[1],values:[]},v=u[2].split(",");for(var m=0;m<v.length;++m)d.values.push(r(v[m]));if(!a.procType){if(d.name!=="Proc-Type")throw new Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');if(d.values.length!==2)throw new Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');a.procType={version:v[0],type:v[1]}}else if(!a.contentDomain&&d.name==="Content-Domain")a.contentDomain=v[0]||"";else if(!a.dekInfo&&d.name==="DEK-Info"){if(d.values.length===0)throw new Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');a.dekInfo={algorithm:v[0],parameters:v[1]||null}}else a.headers.push(d)}++l}if(a.procType==="ENCRYPTED"&&!a.dekInfo)throw new Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".')}if(n.length===0)throw new Error("Invalid PEM formatted message.");return n}}var r="pem";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/pem",["require","module","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function t(t,n){var r=function(){return new e.des.Algorithm(t,n)};e.cipher.registerAlgorithm(t,r)}function l(e){var t=[0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964],n=[0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697],r=[0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272],i=[0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144],s=[0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256],o=[0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488],u=[0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746],a=[0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568],f=[0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578],l=[0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488],c=[0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800],h=[0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744],p=[0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128],d=[0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261],v=e.length()>8?3:1,m=[],g=[0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],y=0,b;for(var w=0;w<v;w++){var E=e.getInt32(),S=e.getInt32();b=(E>>>4^S)&252645135,S^=b,E^=b<<4,b=(S>>>-16^E)&65535,E^=b,S^=b<<-16,b=(E>>>2^S)&858993459,S^=b,E^=b<<2,b=(S>>>-16^E)&65535,E^=b,S^=b<<-16,b=(E>>>1^S)&1431655765,S^=b,E^=b<<1,b=(S>>>8^E)&16711935,E^=b,S^=b<<8,b=(E>>>1^S)&1431655765,S^=b,E^=b<<1,b=E<<8|S>>>20&240,E=S<<24|S<<8&16711680|S>>>8&65280|S>>>24&240,S=b;for(var x=0;x<g.length;++x){g[x]?(E=E<<2|E>>>26,S=S<<2|S>>>26):(E=E<<1|E>>>27,S=S<<1|S>>>27),E&=-15,S&=-15;var T=t[E>>>28]|n[E>>>24&15]|r[E>>>20&15]|i[E>>>16&15]|s[E>>>12&15]|o[E>>>8&15]|u[E>>>4&15],N=a[S>>>28]|f[S>>>24&15]|l[S>>>20&15]|c[S>>>16&15]|h[S>>>12&15]|p[S>>>8&15]|d[S>>>4&15];b=(N>>>16^T)&65535,m[y++]=T^b,m[y++]=N^b<<16}}return m}function c(e,t,l,c){var h=e.length===32?3:9,p;h===3?p=c?[30,-2,-2]:[0,32,2]:p=c?[94,62,-2,32,64,2,30,-2,-2]:[0,32,2,62,30,-2,64,96,2];var d,v=t[0],m=t[1];d=(v>>>4^m)&252645135,m^=d,v^=d<<4,d=(v>>>16^m)&65535,m^=d,v^=d<<16,d=(m>>>2^v)&858993459,v^=d,m^=d<<2,d=(m>>>8^v)&16711935,v^=d,m^=d<<8,d=(v>>>1^m)&1431655765,m^=d,v^=d<<1,v=v<<1|v>>>31,m=m<<1|m>>>31;for(var g=0;g<h;g+=3){var y=p[g+1],b=p[g+2];for(var w=p[g];w!=y;w+=b){var E=m^e[w],S=(m>>>4|m<<28)^e[w+1];d=v,v=m,m=d^(r[E>>>24&63]|s[E>>>16&63]|u[E>>>8&63]|f[E&63]|n[S>>>24&63]|i[S>>>16&63]|o[S>>>8&63]|a[S&63])}d=v,v=m,m=d}v=v>>>1|v<<31,m=m>>>1|m<<31,d=(v>>>1^m)&1431655765,m^=d,v^=d<<1,d=(m>>>8^v)&16711935,v^=d,m^=d<<8,d=(m>>>2^v)&858993459,v^=d,m^=d<<2,d=(v>>>16^m)&65535,m^=d,v^=d<<16,d=(v>>>4^m)&252645135,m^=d,v^=d<<4,l[0]=v,l[1]=m}function h(t){t=t||{};var n=(t.mode||"CBC").toUpperCase(),r="DES-"+n,i;t.decrypt?i=e.cipher.createDecipher(r,t.key):i=e.cipher.createCipher(r,t.key);var s=i.start;return i.start=function(t,n){var r=null;n instanceof e.util.ByteBuffer&&(r=n,n={}),n=n||{},n.output=r,n.iv=t,s.call(i,n)},i}e.des=e.des||{},e.des.startEncrypting=function(e,t,n,r){var i=h({key:e,output:n,decrypt:!1,mode:r||(t===null?"ECB":"CBC")});return i.start(t),i},e.des.createEncryptionCipher=function(e,t){return h({key:e,output:null,decrypt:!1,mode:t})},e.des.startDecrypting=function(e,t,n,r){var i=h({key:e,output:n,decrypt:!0,mode:r||(t===null?"ECB":"CBC")});return i.start(t),i},e.des.createDecryptionCipher=function(e,t){return h({key:e,output:null,decrypt:!0,mode:t})},e.des.Algorithm=function(e,t){var n=this;n.name=e,n.mode=new t({blockSize:8,cipher:{encrypt:function(e,t){return c(n._keys,e,t,!1)},decrypt:function(e,t){return c(n._keys,e,t,!0)}}}),n._init=!1},e.des.Algorithm.prototype.initialize=function(t){if(this._init)return;var n=e.util.createBuffer(t.key);if(this.name.indexOf("3DES")===0&&n.length()!==24)throw new Error("Invalid Triple-DES key size: "+n.length()*8);this._keys=l(n),this._init=!0},t("DES-ECB",e.cipher.modes.ecb),t("DES-CBC",e.cipher.modes.cbc),t("DES-CFB",e.cipher.modes.cfb),t("DES-OFB",e.cipher.modes.ofb),t("DES-CTR",e.cipher.modes.ctr),t("3DES-ECB",e.cipher.modes.ecb),t("3DES-CBC",e.cipher.modes.cbc),t("3DES-CFB",e.cipher.modes.cfb),t("3DES-OFB",e.cipher.modes.ofb),t("3DES-CTR",e.cipher.modes.ctr);var n=[16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756],r=[-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344],i=[520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584],s=[8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928],o=[256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080],u=[536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312],a=[2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154],f=[268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696]}var r="des";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/des",["require","module","./cipher","./cipherModes","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){var n=e.pkcs5=e.pkcs5||{},r=typeof process!="undefined"&&process.versions&&process.versions.node,i;r&&!e.disableNativeCode&&(i=t("crypto")),e.pbkdf2=n.pbkdf2=function(t,n,s,o,u,a){function w(){if(y>c)return a(null,d);p.start(null,null),p.update(n),p.update(e.util.int32ToBytes(y)),v=g=p.digest().getBytes(),b=2,E()}function E(){if(b<=s)return p.start(null,null),p.update(g),m=p.digest().getBytes(),v=e.util.xorBytes(v,m,f),g=m,++b,e.util.setImmediate(E);d+=y<c?v:v.substr(0,h),++y,w()}typeof u=="function"&&(a=u,u=null);if(r&&!e.disableNativeCode&&i.pbkdf2&&(u===null||typeof u!="object")&&(i.pbkdf2Sync.length>4||!u||u==="sha1"))return typeof u!="string"&&(u="sha1"),n=new Buffer(n,"binary"),a?i.pbkdf2Sync.length===4?i.pbkdf2(t,n,s,o,function(e,t){if(e)return a(e);a(null,t.toString("binary"))}):i.pbkdf2(t,n,s,o,u,function(e,t){if(e)return a(e);a(null,t.toString("binary"))}):i.pbkdf2Sync.length===4?i.pbkdf2Sync(t,n,s,o).toString("binary"):i.pbkdf2Sync(t,n,s,o,u).toString("binary");if(typeof u=="undefined"||u===null)u=e.md.sha1.create();if(typeof u=="string"){if(!(u in e.md.algorithms))throw new Error("Unknown hash algorithm: "+u);u=e.md[u].create()}var f=u.digestLength;if(o>4294967295*f){var l=new Error("Derived key is too long.");if(a)return a(l);throw l}var c=Math.ceil(o/f),h=o-(c-1)*f,p=e.hmac.create();p.start(u,t);var d="",v,m,g;if(!a){for(var y=1;y<=c;++y){p.start(null,null),p.update(n),p.update(e.util.int32ToBytes(y)),v=g=p.digest().getBytes();for(var b=2;b<=s;++b)p.start(null,null),p.update(g),m=p.digest().getBytes(),v=e.util.xorBytes(v,m,f),g=m;d+=y<c?v:v.substr(0,h)}return d}var y=1,b;w()}}var r="pbkdf2";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/pbkdf2",["require","module","./hmac","./md","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){var n=typeof process!="undefined"&&process.versions&&process.versions.node,r=null;!e.disableNativeCode&&n&&!process.versions["node-webkit"]&&(r=t("crypto"));var i=e.prng=e.prng||{};i.create=function(t){function u(e){if(n.pools[0].messageLength>=32)return f(),e();var t=32-n.pools[0].messageLength<<5;n.seedFile(t,function(t,r){if(t)return e(t);n.collect(r),f(),e()})}function a(){if(n.pools[0].messageLength>=32)return f();var e=32-n.pools[0].messageLength<<5;n.collect(n.seedFileSync(e)),f()}function f(){var e=n.plugin.md.create();e.update(n.pools[0].digest().getBytes()),n.pools[0].start();var t=1;for(var r=1;r<32;++r)t=t===31?2147483648:t<<2,t%n.reseeds===0&&(e.update(n.pools[r].digest().getBytes()),n.pools[r].start());var i=e.digest().getBytes();e.start(),e.update(i);var s=e.digest().getBytes();n.key=n.plugin.formatKey(i),n.seed=n.plugin.formatSeed(s),n.reseeds=n.reseeds===4294967295?0:n.reseeds+1,n.generated=0}function l(t){var n=null;if(typeof window!="undefined"){var r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(n=function(e){return r.getRandomValues(e)})}var i=e.util.createBuffer();if(n)while(i.length()<t){var s=Math.max(1,Math.min(t-i.length(),65536)/4),o=new Uint32Array(Math.floor(s));try{n(o);for(var u=0;u<o.length;++u)i.putInt32(o[u])}catch(a){if(!(typeof QuotaExceededError!="undefined"&&a instanceof QuotaExceededError))throw a}}if(i.length()<t){var f,l,c,h=Math.floor(Math.random()*65536);while(i.length()<t){l=16807*(h&65535),f=16807*(h>>16),l+=(f&32767)<<16,l+=f>>15,l=(l&2147483647)+(l>>31),h=l&4294967295;for(var u=0;u<3;++u)c=h>>>(u<<3),c^=Math.floor(Math.random()*256),i.putByte(String.fromCharCode(c&255))}}return i.getBytes(t)}var n={plugin:t,key:null,seed:null,time:null,reseeds:0,generated:0},i=t.md,s=new Array(32);for(var o=0;o<32;++o)s[o]=i.create();return n.pools=s,n.pool=0,n.generate=function(t,r){function l(c){if(c)return r(c);if(f.length()>=t)return r(null,f.getBytes(t));n.generated>1048575&&(n.key=null);if(n.key===null)return e.util.nextTick(function(){u(l)});var h=i(n.key,n.seed);n.generated+=h.length,f.putBytes(h),n.key=o(i(n.key,s(n.seed))),n.seed=a(i(n.key,n.seed)),e.util.setImmediate(l)}if(!r)return n.generateSync(t);var i=n.plugin.cipher,s=n.plugin.increment,o=n.plugin.formatKey,a=n.plugin.formatSeed,f=e.util.createBuffer();n.key=null,l()},n.generateSync=function(t){var r=n.plugin.cipher,i=n.plugin.increment,s=n.plugin.formatKey,o=n.plugin.formatSeed;n.key=null;var u=e.util.createBuffer();while(u.length()<t){n.generated>1048575&&(n.key=null),n.key===null&&a();var f=r(n.key,n.seed);n.generated+=f.length,u.putBytes(f),n.key=s(r(n.key,i(n.seed))),n.seed=o(r(n.key,n.seed))}return u.getBytes(t)},r?(n.seedFile=function(e,t){r.randomBytes(e,function(e,n){if(e)return t(e);t(null,n.toString())})},n.seedFileSync=function(e){return r.randomBytes(e).toString()}):(n.seedFile=function(e,t){try{t(null,l(e))}catch(n){t(n)}},n.seedFileSync=l),n.collect=function(e){var t=e.length;for(var r=0;r<t;++r)n.pools[n.pool].update(e.substr(r,1)),n.pool=n.pool===31?0:n.pool+1},n.collectInt=function(e,t){var r="";for(var i=0;i<t;i+=8)r+=String.fromCharCode(e>>i&255);n.collect(r)},n.registerWorker=function(e){if(e===self)n.seedFile=function(e,t){function n(e){var r=e.data;r.forge&&r.forge.prng&&(self.removeEventListener("message",n),t(r.forge.prng.err,r.forge.prng.bytes))}self.addEventListener("message",n),self.postMessage({forge:{prng:{needed:e}}})};else{var t=function(t){var r=t.data;r.forge&&r.forge.prng&&n.seedFile(r.forge.prng.needed,function(t,n){e.postMessage({forge:{prng:{err:t,bytes:n}}})})};e.addEventListener("message",t)}},n}}var r="prng";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/prng",["require","module","./md","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){if(e.random&&e.random.getBytes)return;(function(t){function s(){var t=e.prng.create(n);return t.getBytes=function(e,n){return t.generate(e,n)},t.getBytesSync=function(e){return t.generate(e)},t}var n={},r=new Array(4),i=e.util.createBuffer();n.formatKey=function(t){var n=e.util.createBuffer(t);return t=new Array(4),t[0]=n.getInt32(),t[1]=n.getInt32(),t[2]=n.getInt32(),t[3]=n.getInt32(),e.aes._expandKey(t,!1)},n.formatSeed=function(t){var n=e.util.createBuffer(t);return t=new Array(4),t[0]=n.getInt32(),t[1]=n.getInt32(),t[2]=n.getInt32(),t[3]=n.getInt32(),t},n.cipher=function(t,n){return e.aes._updateBlock(t,n,r,!1),i.putInt32(r[0]),i.putInt32(r[1]),i.putInt32(r[2]),i.putInt32(r[3]),i.getBytes()},n.increment=function(e){return++e[3],e},n.md=e.md.sha256;var o=s(),u=typeof process!="undefined"&&process.versions&&process.versions.node,a=null;if(typeof window!="undefined"){var f=window.crypto||window.msCrypto;f&&f.getRandomValues&&(a=function(e){return f.getRandomValues(e)})}if(e.disableNativeCode||!u&&!a){typeof window=="undefined"||window.document===undefined,o.collectInt(+(new Date),32);if(typeof navigator!="undefined"){var l="";for(var c in navigator)try{typeof navigator[c]=="string"&&(l+=navigator[c])}catch(h){}o.collect(l),l=null}t&&(t().mousemove(function(e){o.collectInt(e.clientX,16),o.collectInt(e.clientY,16)}),t().keypress(function(e){o.collectInt(e.charCode,8)}))}if(!e.random)e.random=o;else for(var c in o)e.random[c]=o[c];e.random.createInstance=s})(typeof jQuery!="undefined"?jQuery:null)}var r="random";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/random",["require","module","./aes","./md","./prng","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){var t=[217,120,249,196,25,221,181,237,40,233,253,121,74,160,216,157,198,126,55,131,43,118,83,142,98,76,100,136,68,139,251,162,23,154,89,245,135,179,79,19,97,69,109,141,9,129,125,50,189,143,64,235,134,183,123,11,240,149,33,34,92,107,78,130,84,214,101,147,206,96,178,28,115,86,192,20,167,140,241,220,18,117,202,31,59,190,228,209,66,61,212,48,163,60,182,38,111,191,14,218,70,105,7,87,39,242,29,155,188,148,67,3,248,17,199,246,144,239,62,231,6,195,213,47,200,102,30,215,8,232,234,222,128,82,238,247,132,170,114,172,53,77,106,42,150,26,210,113,90,21,73,116,75,159,208,94,4,24,164,236,194,224,65,110,15,81,203,204,36,145,175,80,161,244,112,57,153,124,58,133,35,184,180,122,252,2,54,91,37,85,151,49,45,93,250,152,227,138,146,174,5,223,41,16,103,108,186,201,211,0,230,207,225,158,168,44,99,22,1,63,88,226,137,169,13,56,52,27,171,51,255,176,187,72,12,95,185,177,205,46,197,243,219,71,229,165,156,119,10,166,32,104,254,127,193,173],n=[1,2,3,5],r=function(e,t){return e<<t&65535|(e&65535)>>16-t},i=function(e,t){return(e&65535)>>t|e<<16-t&65535};e.rc2=e.rc2||{},e.rc2.expandKey=function(n,r){typeof n=="string"&&(n=e.util.createBuffer(n)),r=r||128;var i=n,s=n.length(),o=r,u=Math.ceil(o/8),a=255>>(o&7),f;for(f=s;f<128;f++)i.putByte(t[i.at(f-1)+i.at(f-s)&255]);i.setAt(128-u,t[i.at(128-u)&a]);for(f=127-u;f>=0;f--)i.setAt(f,t[i.at(f+1)^i.at(f+u)]);return i};var s=function(t,s,o){var u=!1,a=null,f=null,l=null,c,h,p,d,v=[];t=e.rc2.expandKey(t,s);for(p=0;p<64;p++)v.push(t.getInt16Le());o?(c=function(e){for(p=0;p<4;p++)e[p]+=v[d]+(e[(p+3)%4]&e[(p+2)%4])+(~e[(p+3)%4]&e[(p+1)%4]),e[p]=r(e[p],n[p]),d++},h=function(e){for(p=0;p<4;p++)e[p]+=v[e[(p+3)%4]&63]}):(c=function(e){for(p=3;p>=0;p--)e[p]=i(e[p],n[p]),e[p]-=v[d]+(e[(p+3)%4]&e[(p+2)%4])+(~e[(p+3)%4]&e[(p+1)%4]),d--},h=function(e){for(p=3;p>=0;p--)e[p]-=v[e[(p+3)%4]&63]});var m=function(e){var t=[];for(p=0;p<4;p++){var n=a.getInt16Le();l!==null&&(o?n^=l.getInt16Le():l.putInt16Le(n)),t.push(n&65535)}d=o?0:63;for(var r=0;r<e.length;r++)for(var i=0;i<e[r][0];i++)e[r][1](t);for(p=0;p<4;p++)l!==null&&(o?l.putInt16Le(t[p]):t[p]^=l.getInt16Le()),f.putInt16Le(t[p])},g=null;return g={start:function(t,n){t&&typeof t=="string"&&(t=e.util.createBuffer(t)),u=!1,a=e.util.createBuffer(),f=n||new e.util.createBuffer,l=t,g.output=f},update:function(e){u||a.putBuffer(e);while(a.length()>=8)m([[5,c],[1,h],[6,c],[1,h],[5,c]])},finish:function(e){var t=!0;if(o)if(e)t=e(8,a,!o);else{var n=a.length()===8?8:8-a.length();a.fillWithByte(n,n)}t&&(u=!0,g.update());if(!o){t=a.length()===0;if(t)if(e)t=e(8,f,!o);else{var r=f.length(),i=f.at(r-1);i>r?t=!1:f.truncate(i)}}return t}},g};e.rc2.startEncrypting=function(t,n,r){var i=e.rc2.createEncryptionCipher(t,128);return i.start(n,r),i},e.rc2.createEncryptionCipher=function(e,t){return s(e,t,!0)},e.rc2.startDecrypting=function(t,n,r){var i=e.rc2.createDecryptionCipher(t,128);return i.start(n,r),i},e.rc2.createDecryptionCipher=function(e,t){return s(e,t,!1)}}var r="rc2";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/rc2",["require","module","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function i(e,t,n){this.data=[],e!=null&&("number"==typeof e?this.fromNumber(e,t,n):t==null&&"string"!=typeof e?this.fromString(e,256):this.fromString(e,t))}function s(){return new i(null)}function o(e,t,n,r,i,s){while(--s>=0){var o=t*this.data[e++]+n.data[r]+i;i=Math.floor(o/67108864),n.data[r++]=o&67108863}return i}function u(e,t,n,r,i,s){var o=t&32767,u=t>>15;while(--s>=0){var a=this.data[e]&32767,f=this.data[e++]>>15,l=u*a+f*o;a=o*a+((l&32767)<<15)+n.data[r]+(i&1073741823),i=(a>>>30)+(l>>>15)+u*f+(i>>>30),n.data[r++]=a&1073741823}return i}function a(e,t,n,r,i,s){var o=t&16383,u=t>>14;while(--s>=0){var a=this.data[e]&16383,f=this.data[e++]>>14,l=u*a+f*o;a=o*a+((l&16383)<<14)+n.data[r]+i,i=(a>>28)+(l>>14)+u*f,n.data[r++]=a&268435455}return i}function d(e){return l.charAt(e)}function v(e,t){var n=c[e.charCodeAt(t)];return n==null?-1:n}function m(e){for(var t=this.t-1;t>=0;--t)e.data[t]=this.data[t];e.t=this.t,e.s=this.s}function g(e){this.t=1,this.s=e<0?-1:0,e>0?this.data[0]=e:e<-1?this.data[0]=e+this.DV:this.t=0}function y(e){var t=s();return t.fromInt(e),t}function b(e,t){var n;if(t==16)n=4;else if(t==8)n=3;else if(t==256)n=8;else if(t==2)n=1;else if(t==32)n=5;else{if(t!=4){this.fromRadix(e,t);return}n=2}this.t=0,this.s=0;var r=e.length,s=!1,o=0;while(--r>=0){var u=n==8?e[r]&255:v(e,r);if(u<0){e.charAt(r)=="-"&&(s=!0);continue}s=!1,o==0?this.data[this.t++]=u:o+n>this.DB?(this.data[this.t-1]|=(u&(1<<this.DB-o)-1)<<o,this.data[this.t++]=u>>this.DB-o):this.data[this.t-1]|=u<<o,o+=n,o>=this.DB&&(o-=this.DB)}n==8&&(e[0]&128)!=0&&(this.s=-1,o>0&&(this.data[this.t-1]|=(1<<this.DB-o)-1<<o)),this.clamp(),s&&i.ZERO.subTo(this,this)}function w(){var e=this.s&this.DM;while(this.t>0&&this.data[this.t-1]==e)--this.t}function E(e){if(this.s<0)return"-"+this.negate().toString(e);var t;if(e==16)t=4;else if(e==8)t=3;else if(e==2)t=1;else if(e==32)t=5;else{if(e!=4)return this.toRadix(e);t=2}var n=(1<<t)-1,r,i=!1,s="",o=this.t,u=this.DB-o*this.DB%t;if(o-->0){u<this.DB&&(r=this.data[o]>>u)>0&&(i=!0,s=d(r));while(o>=0)u<t?(r=(this.data[o]&(1<<u)-1)<<t-u,r|=this.data[--o]>>(u+=this.DB-t)):(r=this.data[o]>>(u-=t)&n,u<=0&&(u+=this.DB,--o)),r>0&&(i=!0),i&&(s+=d(r))}return i?s:"0"}function S(){var e=s();return i.ZERO.subTo(this,e),e}function x(){return this.s<0?this.negate():this}function T(e){var t=this.s-e.s;if(t!=0)return t;var n=this.t;t=n-e.t;if(t!=0)return this.s<0?-t:t;while(--n>=0)if((t=this.data[n]-e.data[n])!=0)return t;return 0}function N(e){var t=1,n;return(n=e>>>16)!=0&&(e=n,t+=16),(n=e>>8)!=0&&(e=n,t+=8),(n=e>>4)!=0&&(e=n,t+=4),(n=e>>2)!=0&&(e=n,t+=2),(n=e>>1)!=0&&(e=n,t+=1),t}function C(){return this.t<=0?0:this.DB*(this.t-1)+N(this.data[this.t-1]^this.s&this.DM)}function k(e,t){var n;for(n=this.t-1;n>=0;--n)t.data[n+e]=this.data[n];for(n=e-1;n>=0;--n)t.data[n]=0;t.t=this.t+e,t.s=this.s}function L(e,t){for(var n=e;n<this.t;++n)t.data[n-e]=this.data[n];t.t=Math.max(this.t-e,0),t.s=this.s}function A(e,t){var n=e%this.DB,r=this.DB-n,i=(1<<r)-1,s=Math.floor(e/this.DB),o=this.s<<n&this.DM,u;for(u=this.t-1;u>=0;--u)t.data[u+s+1]=this.data[u]>>r|o,o=(this.data[u]&i)<<n;for(u=s-1;u>=0;--u)t.data[u]=0;t.data[s]=o,t.t=this.t+s+1,t.s=this.s,t.clamp()}function O(e,t){t.s=this.s;var n=Math.floor(e/this.DB);if(n>=this.t){t.t=0;return}var r=e%this.DB,i=this.DB-r,s=(1<<r)-1;t.data[0]=this.data[n]>>r;for(var o=n+1;o<this.t;++o)t.data[o-n-1]|=(this.data[o]&s)<<i,t.data[o-n]=this.data[o]>>r;r>0&&(t.data[this.t-n-1]|=(this.s&s)<<i),t.t=this.t-n,t.clamp()}function M(e,t){var n=0,r=0,i=Math.min(e.t,this.t);while(n<i)r+=this.data[n]-e.data[n],t.data[n++]=r&this.DM,r>>=this.DB;if(e.t<this.t){r-=e.s;while(n<this.t)r+=this.data[n],t.data[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{r+=this.s;while(n<e.t)r-=e.data[n],t.data[n++]=r&this.DM,r>>=this.DB;r-=e.s}t.s=r<0?-1:0,r<-1?t.data[n++]=this.DV+r:r>0&&(t.data[n++]=r),t.t=n,t.clamp()}function _(e,t){var n=this.abs(),r=e.abs(),s=n.t;t.t=s+r.t;while(--s>=0)t.data[s]=0;for(s=0;s<r.t;++s)t.data[s+n.t]=n.am(0,r.data[s],t,s,0,n.t);t.s=0,t.clamp(),this.s!=e.s&&i.ZERO.subTo(t,t)}function D(e){var t=this.abs(),n=e.t=2*t.t;while(--n>=0)e.data[n]=0;for(n=0;n<t.t-1;++n){var r=t.am(n,t.data[n],e,2*n,0,1);(e.data[n+t.t]+=t.am(n+1,2*t.data[n],e,2*n+1,r,t.t-n-1))>=t.DV&&(e.data[n+t.t]-=t.DV,e.data[n+t.t+1]=1)}e.t>0&&(e.data[e.t-1]+=t.am(n,t.data[n],e,2*n,0,1)),e.s=0,e.clamp()}function P(e,t,n){var r=e.abs();if(r.t<=0)return;var o=this.abs();if(o.t<r.t){t!=null&&t.fromInt(0),n!=null&&this.copyTo(n);return}n==null&&(n=s());var u=s(),a=this.s,f=e.s,l=this.DB-N(r.data[r.t-1]);l>0?(r.lShiftTo(l,u),o.lShiftTo(l,n)):(r.copyTo(u),o.copyTo(n));var c=u.t,h=u.data[c-1];if(h==0)return;var p=h*(1<<this.F1)+(c>1?u.data[c-2]>>this.F2:0),d=this.FV/p,v=(1<<this.F1)/p,m=1<<this.F2,g=n.t,y=g-c,b=t==null?s():t;u.dlShiftTo(y,b),n.compareTo(b)>=0&&(n.data[n.t++]=1,n.subTo(b,n)),i.ONE.dlShiftTo(c,b),b.subTo(u,u);while(u.t<c)u.data[u.t++]=0;while(--y>=0){var w=n.data[--g]==h?this.DM:Math.floor(n.data[g]*d+(n.data[g-1]+m)*v);if((n.data[g]+=u.am(0,w,n,y,0,c))<w){u.dlShiftTo(y,b),n.subTo(b,n);while(n.data[g]<--w)n.subTo(b,n)}}t!=null&&(n.drShiftTo(c,t),a!=f&&i.ZERO.subTo(t,t)),n.t=c,n.clamp(),l>0&&n.rShiftTo(l,n),a<0&&i.ZERO.subTo(n,n)}function H(e){var t=s();return this.abs().divRemTo(e,null,t),this.s<0&&t.compareTo(i.ZERO)>0&&e.subTo(t,t),t}function B(e){this.m=e}function j(e){return e.s<0||e.compareTo(this.m)>=0?e.mod(this.m):e}function F(e){return e}function I(e){e.divRemTo(this.m,null,e)}function q(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function R(e,t){e.squareTo(t),this.reduce(t)}function U(){if(this.t<1)return 0;var e=this.data[0];if((e&1)==0)return 0;var t=e&3;return t=t*(2-(e&15)*t)&15,t=t*(2-(e&255)*t)&255,t=t*(2-((e&65535)*t&65535))&65535,t=t*(2-e*t%this.DV)%this.DV,t>0?this.DV-t:-t}function z(e){this.m=e,this.mp=e.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}function W(e){var t=s();return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),e.s<0&&t.compareTo(i.ZERO)>0&&this.m.subTo(t,t),t}function X(e){var t=s();return e.copyTo(t),this.reduce(t),t}function V(e){while(e.t<=this.mt2)e.data[e.t++]=0;for(var t=0;t<this.m.t;++t){var n=e.data[t]&32767,r=n*this.mpl+((n*this.mph+(e.data[t]>>15)*this.mpl&this.um)<<15)&e.DM;n=t+this.m.t,e.data[n]+=this.m.am(0,r,e,t,0,this.m.t);while(e.data[n]>=e.DV)e.data[n]-=e.DV,e.data[++n]++}e.clamp(),e.drShiftTo(this.m.t,e),e.compareTo(this.m)>=0&&e.subTo(this.m,e)}function $(e,t){e.squareTo(t),this.reduce(t)}function J(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function K(){return(this.t>0?this.data[0]&1:this.s)==0}function Q(e,t){if(e>4294967295||e<1)return i.ONE;var n=s(),r=s(),o=t.convert(this),u=N(e)-1;o.copyTo(n);while(--u>=0){t.sqrTo(n,r);if((e&1<<u)>0)t.mulTo(r,o,n);else{var a=n;n=r,r=a}}return t.revert(n)}function G(e,t){var n;return e<256||t.isEven()?n=new B(t):n=new z(t),this.exp(e,n)}function Y(){var e=s();return this.copyTo(e),e}function Z(){if(this.s<0){if(this.t==1)return this.data[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this.data[0];if(this.t==0)return 0}return(this.data[1]&(1<<32-this.DB)-1)<<this.DB|this.data[0]}function et(){return this.t==0?this.s:this.data[0]<<24>>24}function tt(){return this.t==0?this.s:this.data[0]<<16>>16}function nt(e){return Math.floor(Math.LN2*this.DB/Math.log(e))}function rt(){return this.s<0?-1:this.t<=0||this.t==1&&this.data[0]<=0?0:1}function it(e){e==null&&(e=10);if(this.signum()==0||e<2||e>36)return"0";var t=this.chunkSize(e),n=Math.pow(e,t),r=y(n),i=s(),o=s(),u="";this.divRemTo(r,i,o);while(i.signum()>0)u=(n+o.intValue()).toString(e).substr(1)+u,i.divRemTo(r,i,o);return o.intValue().toString(e)+u}function st(e,t){this.fromInt(0),t==null&&(t=10);var n=this.chunkSize(t),r=Math.pow(t,n),s=!1,o=0,u=0;for(var a=0;a<e.length;++a){var f=v(e,a);if(f<0){e.charAt(a)=="-"&&this.signum()==0&&(s=!0);continue}u=t*u+f,++o>=n&&(this.dMultiply(r),this.dAddOffset(u,0),o=0,u=0)}o>0&&(this.dMultiply(Math.pow(t,o)),this.dAddOffset(u,0)),s&&i.ZERO.subTo(this,this)}function ot(e,t,n){if("number"==typeof t)if(e<2)this.fromInt(1);else{this.fromNumber(e,n),this.testBit(e-1)||this.bitwiseTo(i.ONE.shiftLeft(e-1),dt,this),this.isEven()&&this.dAddOffset(1,0);while(!this.isProbablePrime(t))this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(i.ONE.shiftLeft(e-1),this)}else{var r=new Array,s=e&7;r.length=(e>>3)+1,t.nextBytes(r),s>0?r[0]&=(1<<s)-1:r[0]=0,this.fromString(r,256)}}function ut(){var e=this.t,t=new Array;t[0]=this.s;var n=this.DB-e*this.DB%8,r,i=0;if(e-->0){n<this.DB&&(r=this.data[e]>>n)!=(this.s&this.DM)>>n&&(t[i++]=r|this.s<<this.DB-n);while(e>=0){n<8?(r=(this.data[e]&(1<<n)-1)<<8-n,r|=this.data[--e]>>(n+=this.DB-8)):(r=this.data[e]>>(n-=8)&255,n<=0&&(n+=this.DB,--e)),(r&128)!=0&&(r|=-256),i==0&&(this.s&128)!=(r&128)&&++i;if(i>0||r!=this.s)t[i++]=r}}return t}function at(e){return this.compareTo(e)==0}function ft(e){return this.compareTo(e)<0?this:e}function lt(e){return this.compareTo(e)>0?this:e}function ct(e,t,n){var r,i,s=Math.min(e.t,this.t);for(r=0;r<s;++r)n.data[r]=t(this.data[r],e.data[r]);if(e.t<this.t){i=e.s&this.DM;for(r=s;r<this.t;++r)n.data[r]=t(this.data[r],i);n.t=this.t}else{i=this.s&this.DM;for(r=s;r<e.t;++r)n.data[r]=t(i,e.data[r]);n.t=e.t}n.s=t(this.s,e.s),n.clamp()}function ht(e,t){return e&t}function pt(e){var t=s();return this.bitwiseTo(e,ht,t),t}function dt(e,t){return e|t}function vt(e){var t=s();return this.bitwiseTo(e,dt,t),t}function mt(e,t){return e^t}function gt(e){var t=s();return this.bitwiseTo(e,mt,t),t}function yt(e,t){return e&~t}function bt(e){var t=s();return this.bitwiseTo(e,yt,t),t}function wt(){var e=s();for(var t=0;t<this.t;++t)e.data[t]=this.DM&~this.data[t];return e.t=this.t,e.s=~this.s,e}function Et(e){var t=s();return e<0?this.rShiftTo(-e,t):this.lShiftTo(e,t),t}function St(e){var t=s();return e<0?this.lShiftTo(-e,t):this.rShiftTo(e,t),t}function xt(e){if(e==0)return-1;var t=0;return(e&65535)==0&&(e>>=16,t+=16),(e&255)==0&&(e>>=8,t+=8),(e&15)==0&&(e>>=4,t+=4),(e&3)==0&&(e>>=2,t+=2),(e&1)==0&&++t,t}function Tt(){for(var e=0;e<this.t;++e)if(this.data[e]!=0)return e*this.DB+xt(this.data[e]);return this.s<0?this.t*this.DB:-1}function Nt(e){var t=0;while(e!=0)e&=e-1,++t;return t}function Ct(){var e=0,t=this.s&this.DM;for(var n=0;n<this.t;++n)e+=Nt(this.data[n]^t);return e}function kt(e){var t=Math.floor(e/this.DB);return t>=this.t?this.s!=0:(this.data[t]&1<<e%this.DB)!=0}function Lt(e,t){var n=i.ONE.shiftLeft(e);return this.bitwiseTo(n,t,n),n}function At(e){return this.changeBit(e,dt)}function Ot(e){return this.changeBit(e,yt)}function Mt(e){return this.changeBit(e,mt)}function _t(e,t){var n=0,r=0,i=Math.min(e.t,this.t);while(n<i)r+=this.data[n]+e.data[n],t.data[n++]=r&this.DM,r>>=this.DB;if(e.t<this.t){r+=e.s;while(n<this.t)r+=this.data[n],t.data[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{r+=this.s;while(n<e.t)r+=e.data[n],t.data[n++]=r&this.DM,r>>=this.DB;r+=e.s}t.s=r<0?-1:0,r>0?t.data[n++]=r:r<-1&&(t.data[n++]=this.DV+r),t.t=n,t.clamp()}function Dt(e){var t=s();return this.addTo(e,t),t}function Pt(e){var t=s();return this.subTo(e,t),t}function Ht(e){var t=s();return this.multiplyTo(e,t),t}function Bt(e){var t=s();return this.divRemTo(e,t,null),t}function jt(e){var t=s();return this.divRemTo(e,null,t),t}function Ft(e){var t=s(),n=s();return this.divRemTo(e,t,n),new Array(t,n)}function It(e){this.data[this.t]=this.am(0,e-1,this,0,0,this.t),++this.t,this.clamp()}function qt(e,t){if(e==0)return;while(this.t<=t)this.data[this.t++]=0;this.data[t]+=e;while(this.data[t]>=this.DV)this.data[t]-=this.DV,++t>=this.t&&(this.data[this.t++]=0),++this.data[t]}function Rt(){}function Ut(e){return e}function zt(e,t,n){e.multiplyTo(t,n)}function Wt(e,t){e.squareTo(t)}function Xt(e){return this.exp(e,new Rt)}function Vt(e,t,n){var r=Math.min(this.t+e.t,t);n.s=0,n.t=r;while(r>0)n.data[--r]=0;var i;for(i=n.t-this.t;r<i;++r)n.data[r+this.t]=this.am(0,e.data[r],n,r,0,this.t);for(i=Math.min(e.t,t);r<i;++r)this.am(0,e.data[r],n,r,0,t-r);n.clamp()}function $t(e,t,n){--t;var r=n.t=this.t+e.t-t;n.s=0;while(--r>=0)n.data[r]=0;for(r=Math.max(t-this.t,0);r<e.t;++r)n.data[this.t+r-t]=this.am(t-r,e.data[r],n,0,0,this.t+r-t);n.clamp(),n.drShiftTo(1,n)}function Jt(e){this.r2=s(),this.q3=s(),i.ONE.dlShiftTo(2*e.t,this.r2),this.mu=this.r2.divide(e),this.m=e}function Kt(e){if(e.s<0||e.t>2*this.m.t)return e.mod(this.m);if(e.compareTo(this.m)<0)return e;var t=s();return e.copyTo(t),this.reduce(t),t}function Qt(e){return e}function Gt(e){e.drShiftTo(this.m.t-1,this.r2),e.t>this.m.t+1&&(e.t=this.m.t+1,e.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(e.compareTo(this.r2)<0)e.dAddOffset(1,this.m.t+1);e.subTo(this.r2,e);while(e.compareTo(this.m)>=0)e.subTo(this.m,e)}function Yt(e,t){e.squareTo(t),this.reduce(t)}function Zt(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function en(e,t){var n=e.bitLength(),r,i=y(1),o;if(n<=0)return i;n<18?r=1:n<48?r=3:n<144?r=4:n<768?r=5:r=6,n<8?o=new B(t):t.isEven()?o=new Jt(t):o=new z(t);var u=new Array,a=3,f=r-1,l=(1<<r)-1;u[1]=o.convert(this);if(r>1){var c=s();o.sqrTo(u[1],c);while(a<=l)u[a]=s(),o.mulTo(c,u[a-2],u[a]),a+=2}var h=e.t-1,p,d=!0,v=s(),m;n=N(e.data[h])-1;while(h>=0){n>=f?p=e.data[h]>>n-f&l:(p=(e.data[h]&(1<<n+1)-1)<<f-n,h>0&&(p|=e.data[h-1]>>this.DB+n-f)),a=r;while((p&1)==0)p>>=1,--a;(n-=a)<0&&(n+=this.DB,--h);if(d)u[p].copyTo(i),d=!1;else{while(a>1)o.sqrTo(i,v),o.sqrTo(v,i),a-=2;a>0?o.sqrTo(i,v):(m=i,i=v,v=m),o.mulTo(v,u[p],i)}while(h>=0&&(e.data[h]&1<<n)==0)o.sqrTo(i,v),m=i,i=v,v=m,--n<0&&(n=this.DB-1,--h)}return o.revert(i)}function tn(e){var t=this.s<0?this.negate():this.clone(),n=e.s<0?e.negate():e.clone();if(t.compareTo(n)<0){var r=t;t=n,n=r}var i=t.getLowestSetBit(),s=n.getLowestSetBit();if(s<0)return t;i<s&&(s=i),s>0&&(t.rShiftTo(s,t),n.rShiftTo(s,n));while(t.signum()>0)(i=t.getLowestSetBit())>0&&t.rShiftTo(i,t),(i=n.getLowestSetBit())>0&&n.rShiftTo(i,n),t.compareTo(n)>=0?(t.subTo(n,t),t.rShiftTo(1,t)):(n.subTo(t,n),n.rShiftTo(1,n));return s>0&&n.lShiftTo(s,n),n}function nn(e){if(e<=0)return 0;var t=this.DV%e,n=this.s<0?e-1:0;if(this.t>0)if(t==0)n=this.data[0]%e;else for(var r=this.t-1;r>=0;--r)n=(t*n+this.data[r])%e;return n}function rn(e){var t=e.isEven();if(this.isEven()&&t||e.signum()==0)return i.ZERO;var n=e.clone(),r=this.clone(),s=y(1),o=y(0),u=y(0),a=y(1);while(n.signum()!=0){while(n.isEven()){n.rShiftTo(1,n);if(t){if(!s.isEven()||!o.isEven())s.addTo(this,s),o.subTo(e,o);s.rShiftTo(1,s)}else o.isEven()||o.subTo(e,o);o.rShiftTo(1,o)}while(r.isEven()){r.rShiftTo(1,r);if(t){if(!u.isEven()||!a.isEven())u.addTo(this,u),a.subTo(e,a);u.rShiftTo(1,u)}else a.isEven()||a.subTo(e,a);a.rShiftTo(1,a)}n.compareTo(r)>=0?(n.subTo(r,n),t&&s.subTo(u,s),o.subTo(a,o)):(r.subTo(n,r),t&&u.subTo(s,u),a.subTo(o,a))}return r.compareTo(i.ONE)!=0?i.ZERO:a.compareTo(e)>=0?a.subtract(e):a.signum()<0?(a.addTo(e,a),a.signum()<0?a.add(e):a):a}function un(e){var t,n=this.abs();if(n.t==1&&n.data[0]<=sn[sn.length-1]){for(t=0;t<sn.length;++t)if(n.data[0]==sn[t])return!0;return!1}if(n.isEven())return!1;t=1;while(t<sn.length){var r=sn[t],i=t+1;while(i<sn.length&&r<on)r*=sn[i++];r=n.modInt(r);while(t<i)if(r%sn[t++]==0)return!1}return n.millerRabin(e)}function an(e){var t=this.subtract(i.ONE),n=t.getLowestSetBit();if(n<=0)return!1;var r=t.shiftRight(n),s=fn(),o;for(var u=0;u<e;++u){do o=new i(this.bitLength(),s);while(o.compareTo(i.ONE)<=0||o.compareTo(t)>=0);var a=o.modPow(r,this);if(a.compareTo(i.ONE)!=0&&a.compareTo(t)!=0){var f=1;while(f++<n&&a.compareTo(t)!=0){a=a.modPowInt(2,this);if(a.compareTo(i.ONE)==0)return!1}if(a.compareTo(t)!=0)return!1}}return!0}function fn(){return{nextBytes:function(e){for(var t=0;t<e.length;++t)e[t]=Math.floor(Math.random()*256)}}}var t,n=0xdeadbeefcafe,r=(n&16777215)==15715070;typeof navigator=="undefined"?(i.prototype.am=a,t=28):r&&navigator.appName=="Microsoft Internet Explorer"?(i.prototype.am=u,t=30):r&&navigator.appName!="Netscape"?(i.prototype.am=o,t=26):(i.prototype.am=a,t=28),i.prototype.DB=t,i.prototype.DM=(1<<t)-1,i.prototype.DV=1<<t;var f=52;i.prototype.FV=Math.pow(2,f),i.prototype.F1=f-t,i.prototype.F2=2*t-f;var l="0123456789abcdefghijklmnopqrstuvwxyz",c=new Array,h,p;h="0".charCodeAt(0);for(p=0;p<=9;++p)c[h++]=p;h="a".charCodeAt(0);for(p=10;p<36;++p)c[h++]=p;h="A".charCodeAt(0);for(p=10;p<36;++p)c[h++]=p;B.prototype.convert=j,B.prototype.revert=F,B.prototype.reduce=I,B.prototype.mulTo=q,B.prototype.sqrTo=R,z.prototype.convert=W,z.prototype.revert=X,z.prototype.reduce=V,z.prototype.mulTo=J,z.prototype.sqrTo=$,i.prototype.copyTo=m,i.prototype.fromInt=g,i.prototype.fromString=b,i.prototype.clamp=w,i.prototype.dlShiftTo=k,i.prototype.drShiftTo=L,i.prototype.lShiftTo=A,i.prototype.rShiftTo=O,i.prototype.subTo=M,i.prototype.multiplyTo=_,i.prototype.squareTo=D,i.prototype.divRemTo=P,i.prototype.invDigit=U,i.prototype.isEven=K,i.prototype.exp=Q,i.prototype.toString=E,i.prototype.negate=S,i.prototype.abs=x,i.prototype.compareTo=T,i.prototype.bitLength=C,i.prototype.mod=H,i.prototype.modPowInt=G,i.ZERO=y(0),i.ONE=y(1),Rt.prototype.convert=Ut,Rt.prototype.revert=Ut,Rt.prototype.mulTo=zt,Rt.prototype.sqrTo=Wt,Jt.prototype.convert=Kt,Jt.prototype.revert=Qt,Jt.prototype.reduce=Gt,Jt.prototype.mulTo=Zt,Jt.prototype.sqrTo=Yt;var sn=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],on=(1<<26)/sn[sn.length-1];i.prototype.chunkSize=nt,i.prototype.toRadix=it,i.prototype.fromRadix=st,i.prototype.fromNumber=ot,i.prototype.bitwiseTo=ct,i.prototype.changeBit=Lt,i.prototype.addTo=_t,i.prototype.dMultiply=It,i.prototype.dAddOffset=qt,i.prototype.multiplyLowerTo=Vt,i.prototype.multiplyUpperTo=$t,i.prototype.modInt=nn,i.prototype.millerRabin=an,i.prototype.clone=Y,i.prototype.intValue=Z,i.prototype.byteValue=et,i.prototype.shortValue=tt,i.prototype.signum=rt,i.prototype.toByteArray=ut,i.prototype.equals=at,i.prototype.min=ft,i.prototype.max=lt,i.prototype.and=pt,i.prototype.or=vt,i.prototype.xor=gt,i.prototype.andNot=bt,i.prototype.not=wt,i.prototype.shiftLeft=Et,i.prototype.shiftRight=St,i.prototype.getLowestSetBit=Tt,i.prototype.bitCount=Ct,i.prototype.testBit=kt,i.prototype.setBit=At,i.prototype.clearBit=Ot,i.prototype.flipBit=Mt,i.prototype.add=Dt,i.prototype.subtract=Pt,i.prototype.multiply=Ht,i.prototype.divide=Bt,i.prototype.remainder=jt,i.prototype.divideAndRemainder=Ft,i.prototype.modPow=en,i.prototype.modInverse=rn,i.prototype.pow=Xt,i.prototype.gcd=tn,i.prototype.isProbablePrime=un,e.jsbn=e.jsbn||{},e.jsbn.BigInteger=i}var r="jsbn";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/jsbn",["require","module"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function n(t,n,r){r||(r=e.md.sha1.create());var i="",s=Math.ceil(n/r.digestLength);for(var o=0;o<s;++o){var u=String.fromCharCode(o>>24&255,o>>16&255,o>>8&255,o&255);r.start(),r.update(t+u),i+=r.digest().getBytes()}return i.substring(0,n)}var t=e.pkcs1=e.pkcs1||{};t.encode_rsa_oaep=function(t,r,i){var s,o,u,a;typeof i=="string"?(s=i,o=arguments[3]||undefined,u=arguments[4]||undefined):i&&(s=i.label||undefined,o=i.seed||undefined,u=i.md||undefined,i.mgf1&&i.mgf1.md&&(a=i.mgf1.md)),u?u.start():u=e.md.sha1.create(),a||(a=u);var f=Math.ceil(t.n.bitLength()/8),l=f-2*u.digestLength-2;if(r.length>l){var c=new Error("RSAES-OAEP input message length is too long.");throw c.length=r.length,c.maxLength=l,c}s||(s=""),u.update(s,"raw");var h=u.digest(),p="",d=l-r.length;for(var v=0;v<d;v++)p+="\0";var m=h.getBytes()+p+""+r;if(!o)o=e.random.getBytes(u.digestLength);else if(o.length!==u.digestLength){var c=new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.");throw c.seedLength=o.length,c.digestLength=u.digestLength,c}var g=n(o,f-u.digestLength-1,a),y=e.util.xorBytes(m,g,m.length),b=n(y,u.digestLength,a),w=e.util.xorBytes(o,b,o.length);return"\0"+w+y},t.decode_rsa_oaep=function(t,r,i){var s,o,u;typeof i=="string"?(s=i,o=arguments[3]||undefined):i&&(s=i.label||undefined,o=i.md||undefined,i.mgf1&&i.mgf1.md&&(u=i.mgf1.md));var a=Math.ceil(t.n.bitLength()/8);if(r.length!==a){var f=new Error("RSAES-OAEP encoded message length is invalid.");throw f.length=r.length,f.expectedLength=a,f}o===undefined?o=e.md.sha1.create():o.start(),u||(u=o);if(a<2*o.digestLength+2)throw new Error("RSAES-OAEP key is too short for the hash function.");s||(s=""),o.update(s,"raw");var l=o.digest().getBytes(),c=r.charAt(0),h=r.substring(1,o.digestLength+1),p=r.substring(1+o.digestLength),d=n(p,o.digestLength,u),v=e.util.xorBytes(h,d,h.length),m=n(v,a-o.digestLength-1,u),g=e.util.xorBytes(p,m,p.length),y=g.substring(0,o.digestLength),f=c!=="\0";for(var b=0;b<o.digestLength;++b)f|=l.charAt(b)!==y.charAt(b);var w=1,E=o.digestLength;for(var S=o.digestLength;S<g.length;S++){var x=g.charCodeAt(S),T=x&1^1,N=w?65534:0;f|=x&N,w&=T,E+=w}if(f||g.charCodeAt(E)!==1)throw new Error("Invalid RSAES-OAEP padding.");return g.substring(E+1)}}var r="pkcs1";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/pkcs1",["require","module","./util","./random","./sha1"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function o(e,t,n,r){return"workers"in n?a(e,t,n,r):u(e,t,n,r)}function u(t,n,i,s){var o=f(t,n),a=0,c=l(o.bitLength());"millerRabinTests"in i&&(c=i.millerRabinTests);var h=10;"maxBlockTime"in i&&(h=i.maxBlockTime);var p=+(new Date);do{o.bitLength()>t&&(o=f(t,n));if(o.isProbablePrime(c))return s(null,o);o.dAddOffset(r[a++%8],0)}while(h<0||+(new Date)-p<h);e.util.setImmediate(function(){u(t,n,i,s)})}function a(t,r,i,s){function p(){function d(i){if(p)return;--u;var a=i.data;if(a.found){for(var h=0;h<e.length;++h)e[h].terminate();return p=!0,s(null,new n(a.prime,16))}o.bitLength()>t&&(o=f(t,r));var d=o.toString(16);i.target.postMessage({hex:d,workLoad:l}),o.dAddOffset(c,0)}a=Math.max(1,a);var e=[];for(var i=0;i<a;++i)e[i]=new Worker(h);var u=a;for(var i=0;i<a;++i)e[i].addEventListener("message",d);var p=!1}if(typeof Worker=="undefined")return u(t,r,i,s);var o=f(t,r),a=i.workers,l=i.workLoad||100,c=l*30/8,h=i.workerScript||"forge/prime.worker.js";if(a===-1)return e.util.estimateCores(function(e,t){e&&(t=2),a=t-1,p()});p()}function f(e,t){var r=new n(e,t),o=e-1;return r.testBit(o)||r.bitwiseTo(n.ONE.shiftLeft(o),s,r),r.dAddOffset(31-r.mod(i).byteValue(),0),r}function l(e){return e<=100?27:e<=150?18:e<=200?15:e<=250?12:e<=300?9:e<=350?8:e<=400?7:e<=500?6:e<=600?5:e<=800?4:e<=1250?3:2}if(e.prime)return;var t=e.prime=e.prime||{},n=e.jsbn.BigInteger,r=[6,4,2,4,2,4,6,2],i=new n(null);i.fromInt(30);var s=function(e,t){return e|t};t.generateProbablePrime=function(t,n,r){typeof n=="function"&&(r=n,n={}),n=n||{};var i=n.algorithm||"PRIMEINC";typeof i=="string"&&(i={name:i}),i.options=i.options||{};var s=n.prng||e.random,u={nextBytes:function(e){var t=s.getBytesSync(e.length);for(var n=0;n<e.length;++n)e[n]=t.charCodeAt(n)}};if(i.name==="PRIMEINC")return o(t,u,i.options,r);throw new Error("Invalid prime generation algorithm: "+i.name)}}var r="prime";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/prime",["require","module","./util","./jsbn","./random"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function c(t,n,r){var i=e.util.createBuffer(),s=Math.ceil(n.n.bitLength()/8);if(t.length>s-11){var o=new Error("Message is too long for PKCS#1 v1.5 padding.");throw o.length=t.length,o.max=s-11,o}i.putByte(0),i.putByte(r);var u=s-3-t.length,a;if(r===0||r===1){a=r===0?0:255;for(var f=0;f<u;++f)i.putByte(a)}else while(u>0){var l=0,c=e.random.getBytes(u);for(var f=0;f<u;++f)a=c.charCodeAt(f),a===0?++l:i.putByte(a);u=l}return i.putByte(0),i.putBytes(t),i}function h(t,n,r,i){var s=Math.ceil(n.n.bitLength()/8),o=e.util.createBuffer(t),u=o.getByte(),a=o.getByte();if(u!==0||r&&a!==0&&a!==1||!r&&a!=2||r&&a===0&&typeof i=="undefined")throw new Error("Encryption block is invalid.");var f=0;if(a===0){f=s-3-i;for(var l=0;l<f;++l)if(o.getByte()!==0)throw new Error("Encryption block is invalid.")}else if(a===1){f=0;while(o.length()>1){if(o.getByte()!==255){--o.read;break}++f}}else if(a===2){f=0;while(o.length()>1){if(o.getByte()===0){--o.read;break}++f}}var c=o.getByte();if(c!==0||f!==s-3-o.length())throw new Error("Encryption block is invalid.");return o.getBytes()}function p(n,i,s){function u(){a(n.pBits,function(e,t){if(e)return s(e);n.p=t;if(n.q!==null)return f(e,n.q);a(n.qBits,f)})}function a(t,n){e.prime.generateProbablePrime(t,o,n)}function f(e,i){if(e)return s(e);n.q=i;if(n.p.compareTo(n.q)<0){var o=n.p;n.p=n.q,n.q=o}if(n.p.subtract(t.ONE).gcd(n.e).compareTo(t.ONE)!==0){n.p=null,u();return}if(n.q.subtract(t.ONE).gcd(n.e).compareTo(t.ONE)!==0){n.q=null,a(n.qBits,f);return}n.p1=n.p.subtract(t.ONE),n.q1=n.q.subtract(t.ONE),n.phi=n.p1.multiply(n.q1);if(n.phi.gcd(n.e).compareTo(t.ONE)!==0){n.p=n.q=null,u();return}n.n=n.p.multiply(n.q);if(n.n.bitLength()!==n.bits){n.q=null,a(n.qBits,f);return}var l=n.e.modInverse(n.phi);n.keys={privateKey:r.rsa.setPrivateKey(n.n,n.e,l,n.p,n.q,l.mod(n.p1),l.mod(n.q1),n.q.modInverse(n.p)),publicKey:r.rsa.setPublicKey(n.n,n.e)},s(null,n.keys)}typeof i=="function"&&(s=i,i={}),i=i||{};var o={algorithm:{name:i.algorithm||"PRIMEINC",options:{workers:i.workers||2,workLoad:i.workLoad||100,workerScript:i.workerScript}}};"prng"in i&&(o.prng=i.prng),u()}function d(t){var n=t.toString(16);n[0]>="8"&&(n="00"+n);var r=e.util.hexToBytes(n);return r.length>1&&(r.charCodeAt(0)===0&&(r.charCodeAt(1)&128)===0||r.charCodeAt(0)===255&&(r.charCodeAt(1)&128)===128)?r.substr(1):r}function v(e){return e<=100?27:e<=150?18:e<=200?15:e<=250?12:e<=300?9:e<=350?8:e<=400?7:e<=500?6:e<=600?5:e<=800?4:e<=1250?3:2}function m(e){return typeof window!="undefined"&&typeof window.crypto=="object"&&typeof window.crypto.subtle=="object"&&typeof window.crypto.subtle[e]=="function"}function g(e){return typeof window!="undefined"&&typeof window.msCrypto=="object"&&typeof window.msCrypto.subtle=="object"&&typeof window.msCrypto.subtle[e]=="function"}function y(t){var n=e.util.hexToBytes(t.toString(16)),r=new Uint8Array(n.length);for(var i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}function b(e){if(e.kty!=="RSA")throw new Error('Unsupported key algorithm "'+e.kty+'"; algorithm must be "RSA".');return r.setRsaPrivateKey(E(e.n),E(e.e),E(e.d),E(e.p),E(e.q),E(e.dp),E(e.dq),E(e.qi))}function w(e){if(e.kty!=="RSA")throw new Error('Key algorithm must be "RSA".');return r.setRsaPublicKey(E(e.n),E(e.e))}function E(n){return new t(e.util.bytesToHex(e.util.decode64(n)),16)}if(typeof t=="undefined")var t=e.jsbn.BigInteger;var n=e.asn1;e.pki=e.pki||{},e.pki.rsa=e.rsa=e.rsa||{};var r=e.pki,i=[6,4,2,4,2,4,6,2],s={name:"PrivateKeyInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PrivateKeyInfo.version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"PrivateKeyInfo.privateKeyAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"privateKeyOid"}]},{name:"PrivateKeyInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"privateKey"}]},o={name:"RSAPrivateKey",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"RSAPrivateKey.version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"RSAPrivateKey.modulus",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyModulus"},{name:"RSAPrivateKey.publicExponent",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyPublicExponent"},{name:"RSAPrivateKey.privateExponent",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyPrivateExponent"},{name:"RSAPrivateKey.prime1",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyPrime1"},{name:"RSAPrivateKey.prime2",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyPrime2"},{name:"RSAPrivateKey.exponent1",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyExponent1"},{name:"RSAPrivateKey.exponent2",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyExponent2"},{name:"RSAPrivateKey.coefficient",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyCoefficient"}]},u={name:"RSAPublicKey",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"RSAPublicKey.modulus",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"publicKeyModulus"},{name:"RSAPublicKey.exponent",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"publicKeyExponent"}]},a=e.pki.rsa.publicKeyValidator={name:"SubjectPublicKeyInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"subjectPublicKeyInfo",value:[{name:"SubjectPublicKeyInfo.AlgorithmIdentifier",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"publicKeyOid"}]},{name:"SubjectPublicKeyInfo.subjectPublicKey",tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,value:[{name:"SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,optional:!0,captureAsn1:"rsaPublicKey"}]}]},f=function(e){var t;if(e.algorithm in r.oids){t=r.oids[e.algorithm];var s=n.oidToDer(t).getBytes(),o=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]),u=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);u.value.push(n.create(n.Class.UNIVERSAL,n.Type.OID,!1,s)),u.value.push(n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,""));var a=n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,e.digest().getBytes());return o.value.push(u),o.value.push(a),n.toDer(o).getBytes()}var i=new Error("Unknown message digest algorithm.");throw i.algorithm=e.algorithm,i},l=function(n,r,i){if(i)return n.modPow(r.e,r.n);if(!r.p||!r.q)return n.modPow(r.d,r.n);r.dP||(r.dP=r.d.mod(r.p.subtract(t.ONE))),r.dQ||(r.dQ=r.d.mod(r.q.subtract(t.ONE))),r.qInv||(r.qInv=r.q.modInverse(r.p));var s;do s=new t(e.util.bytesToHex(e.random.getBytes(r.n.bitLength()/8)),16);while(s.compareTo(r.n)>=0||!s.gcd(r.n).equals(t.ONE));n=n.multiply(s.modPow(r.e,r.n)).mod(r.n);var o=n.mod(r.p).modPow(r.dP,r.p),u=n.mod(r.q).modPow(r.dQ,r.q);while(o.compareTo(u)<0)o=o.add(r.p);var a=o.subtract(u).multiply(r.qInv).mod(r.p).multiply(r.q).add(u);return a=a.multiply(s.modInverse(r.n)).mod(r.n),a};r.rsa.encrypt=function(n,r,i){var s=i,o,u=Math.ceil(r.n.bitLength()/8);i!==!1&&i!==!0?(s=i===2,o=c(n,r,i)):(o=e.util.createBuffer(),o.putBytes(n));var a=new t(o.toHex(),16),f=l(a,r,s),h=f.toString(16),p=e.util.createBuffer(),d=u-Math.ceil(h.length/2);while(d>0)p.putByte(0),--d;return p.putBytes(e.util.hexToBytes(h)),p.getBytes()},r.rsa.decrypt=function(n,r,i,s){var o=Math.ceil(r.n.bitLength()/8);if(n.length!==o){var u=new Error("Encrypted message length is invalid.");throw u.length=n.length,u.expected=o,u}var a=new t(e.util.createBuffer(n).toHex(),16);if(a.compareTo(r.n)>=0)throw new Error("Encrypted message is invalid.");var f=l(a,r,i),c=f.toString(16),p=e.util.createBuffer(),d=o-Math.ceil(c.length/2);while(d>0)p.putByte(0),--d;return p.putBytes(e.util.hexToBytes(c)),s!==!1?h(p.getBytes(),r,i):p.getBytes()},r.rsa.createKeyPairGenerationState=function(n,r,i){typeof n=="string"&&(n=parseInt(n,10)),n=n||2048,i=i||{};var s=i.prng||e.random,o={nextBytes:function(e){var t=s.getBytesSync(e.length);for(var n=0;n<e.length;++n)e[n]=t.charCodeAt(n)}},u=i.algorithm||"PRIMEINC",a;if(u!=="PRIMEINC")throw new Error("Invalid key generation algorithm: "+u);return a={algorithm:u,state:0,bits:n,rng:o,eInt:r||65537,e:new t(null),p:null,q:null,qBits:n>>1,pBits:n-(n>>1),pqState:0,num:null,keys:null},a.e.fromInt(a.eInt),a},r.rsa.stepKeyPairGenerationState=function(e,n){"algorithm"in e||(e.algorithm="PRIMEINC");var s=new t(null);s.fromInt(30);var o=0,u=function(e,t){return e|t},a=+(new Date),f,l=0;while(e.keys===null&&(n<=0||l<n)){if(e.state===0){var c=e.p===null?e.pBits:e.qBits,h=c-1;e.pqState===0?(e.num=new t(c,e.rng),e.num.testBit(h)||e.num.bitwiseTo(t.ONE.shiftLeft(h),u,e.num),e.num.dAddOffset(31-e.num.mod(s).byteValue(),0),o=0,++e.pqState):e.pqState===1?e.num.bitLength()>c?e.pqState=0:e.num.isProbablePrime(v(e.num.bitLength()))?++e.pqState:e.num.dAddOffset(i[o++%8],0):e.pqState===2?e.pqState=e.num.subtract(t.ONE).gcd(e.e).compareTo(t.ONE)===0?3:0:e.pqState===3&&(e.pqState=0,e.p===null?e.p=e.num:e.q=e.num,e.p!==null&&e.q!==null&&++e.state,e.num=null)}else if(e.state===1)e.p.compareTo(e.q)<0&&(e.num=e.p,e.p=e.q,e.q=e.num),++e.state;else if(e.state===2)e.p1=e.p.subtract(t.ONE),e.q1=e.q.subtract(t.ONE),e.phi=e.p1.multiply(e.q1),++e.state;else if(e.state===3)e.phi.gcd(e.e).compareTo(t.ONE)===0?++e.state:(e.p=null,e.q=null,e.state=0);else if(e.state===4)e.n=e.p.multiply(e.q),e.n.bitLength()===e.bits?++e.state:(e.q=null,e.state=0);else if(e.state===5){var p=e.e.modInverse(e.phi);e.keys={privateKey:r.rsa.setPrivateKey(e.n,e.e,p,e.p,e.q,p.mod(e.p1),p.mod(e.q1),e.q.modInverse(e.p)),publicKey:r.rsa.setPublicKey(e.n,e.e)}}f=+(new Date),l+=f-a,a=f}return e.keys!==null},r.rsa.generateKeyPair=function(t,i,s,o){arguments.length===1?typeof t=="object"?(s=t,t=undefined):typeof t=="function"&&(o=t,t=undefined):arguments.length===2?typeof t=="number"?typeof i=="function"?(o=i,i=undefined):typeof i!="number"&&(s=i,i=undefined):(s=t,o=i,t=undefined,i=undefined):arguments.length===3&&(typeof i=="number"?typeof s=="function"&&(o=s,s=undefined):(o=s,s=i,i=undefined)),s=s||{},t===undefined&&(t=s.bits||2048),i===undefined&&(i=s.e||65537);if(!e.disableNativeCode&&o&&t>=256&&t<=16384&&(i===65537||i===3)){if(m("generateKey")&&m("exportKey"))return window.crypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:t,publicExponent:y(i),hash:{name:"SHA-256"}},!0,["sign","verify"]).then(function(e){return window.crypto.subtle.exportKey("pkcs8",e.privateKey)}).catch(function(e){o(e)}).then(function(t){if(t){var i=r.privateKeyFromAsn1(n.fromDer(e.util.createBuffer(t)));o(null,{privateKey:i,publicKey:r.setRsaPublicKey(i.n,i.e)})}});if(g("generateKey")&&g("exportKey")){var u=window.msCrypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:t,publicExponent:y(i),hash:{name:"SHA-256"}},!0,["sign","verify"]);u.oncomplete=function(t){var i=t.target.result,s=window.msCrypto.subtle.exportKey("pkcs8",i.privateKey);s.oncomplete=function(t){var i=t.target.result,s=r.privateKeyFromAsn1(n.fromDer(e.util.createBuffer(i)));o(null,{privateKey:s,publicKey:r.setRsaPublicKey(s.n,s.e)})},s.onerror=function(e){o(e)}},u.onerror=function(e){o(e)};return}}var a=r.rsa.createKeyPairGenerationState(t,i,s);if(!o)return r.rsa.stepKeyPairGenerationState(a,0),a.keys;p(a,s,o)},r.setRsaPublicKey=r.rsa.setPublicKey=function(t,i){var s={n:t,e:i};return s.encrypt=function(t,n,i){typeof n=="string"?n=n.toUpperCase():n===undefined&&(n="RSAES-PKCS1-V1_5");if(n==="RSAES-PKCS1-V1_5")n={encode:function(e,t,n){return c(e,t,2).getBytes()}};else if(n==="RSA-OAEP"||n==="RSAES-OAEP")n={encode:function(t,n){return e.pkcs1.encode_rsa_oaep(n,t,i)}};else if(["RAW","NONE","NULL",null].indexOf(n)!==-1)n={encode:function(e){return e}};else if(typeof n=="string")throw new Error('Unsupported encryption scheme: "'+n+'".');var o=n.encode(t,s,!0);return r.rsa.encrypt(o,s,!0)},s.verify=function(e,t,i){typeof i=="string"?i=i.toUpperCase():i===undefined&&(i="RSASSA-PKCS1-V1_5");if(i==="RSASSA-PKCS1-V1_5")i={verify:function(e,t){t=h(t,s,!0);var r=n.fromDer(t);return e===r.value[1].value}};else if(i==="NONE"||i==="NULL"||i===null)i={verify:function(e,t){return t=h(t,s,!0),e===t}};var o=r.rsa.decrypt(t,s,!0,!1);return i.verify(e,o,s.n.bitLength())},s},r.setRsaPrivateKey=r.rsa.setPrivateKey=function(t,n,i,s,o,u,a,l){var c={n:t,e:n,d:i,p:s,q:o,dP:u,dQ:a,qInv:l};return c.decrypt=function(t,n,i){typeof n=="string"?n=n.toUpperCase():n===undefined&&(n="RSAES-PKCS1-V1_5");var s=r.rsa.decrypt(t,c,!1,!1);if(n==="RSAES-PKCS1-V1_5")n={decode:h};else if(n==="RSA-OAEP"||n==="RSAES-OAEP")n={decode:function(t,n){return e.pkcs1.decode_rsa_oaep(n,t,i)}};else{if(["RAW","NONE","NULL",null].indexOf(n)===-1)throw new Error('Unsupported encryption scheme: "'+n+'".');n={decode:function(e){return e}}}return n.decode(s,c,!1)},c.sign=function(e,t){var n=!1;typeof t=="string"&&(t=t.toUpperCase());if(t===undefined||t==="RSASSA-PKCS1-V1_5")t={encode:f},n=1;else if(t==="NONE"||t==="NULL"||t===null)t={encode:function(){return e}},n=1;var i=t.encode(e,c.n.bitLength());return r.rsa.encrypt(i,c,n)},c},r.wrapRsaPrivateKey=function(e){return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(0).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(r.oids.rsaEncryption).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")]),n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,n.toDer(e).getBytes())])},r.privateKeyFromAsn1=function(i){var u={},a=[];n.validate(i,s,u,a)&&(i=n.fromDer(e.util.createBuffer(u.privateKey))),u={},a=[];if(!n.validate(i,o,u,a)){var f=new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");throw f.errors=a,f}var l,c,h,p,d,v,m,g;return l=e.util.createBuffer(u.privateKeyModulus).toHex(),c=e.util.createBuffer(u.privateKeyPublicExponent).toHex(),h=e.util.createBuffer(u.privateKeyPrivateExponent).toHex(),p=e.util.createBuffer(u.privateKeyPrime1).toHex(),d=e.util.createBuffer(u.privateKeyPrime2).toHex(),v=e.util.createBuffer(u.privateKeyExponent1).toHex(),m=e.util.createBuffer(u.privateKeyExponent2).toHex(),g=e.util.createBuffer(u.privateKeyCoefficient).toHex(),r.setRsaPrivateKey(new t(l,16),new t(c,16),new t(h,16),new t(p,16),new t(d,16),new t(v,16),new t(m,16),new t(g,16))},r.privateKeyToAsn1=r.privateKeyToRSAPrivateKey=function(e){return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(0).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,d(e.n)),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,d(e.e)),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,d(e.d)),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,d(e.p)),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,d(e.q)),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,d(e.dP)),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,d(e.dQ)),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,d(e.qInv))])},r.publicKeyFromAsn1=function(i){var s={},o=[];if(n.validate(i,a,s,o)){var f=n.derToOid(s.publicKeyOid);if(f!==r.oids.rsaEncryption){var l=new Error("Cannot read public key. Unknown OID.");throw l.oid=f,l}i=s.rsaPublicKey}o=[];if(!n.validate(i,u,s,o)){var l=new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.");throw l.errors=o,l}var c=e.util.createBuffer(s.publicKeyModulus).toHex(),h=e.util.createBuffer(s.publicKeyExponent).toHex();return r.setRsaPublicKey(new t(c,16),new t(h,16))},r.publicKeyToAsn1=r.publicKeyToSubjectPublicKeyInfo=function(e){return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(r.oids.rsaEncryption).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")]),n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,[r.publicKeyToRSAPublicKey(e)])])},r.publicKeyToRSAPublicKey=function(e){return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,d(e.n)),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,d(e.e))])}}var r="rsa";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/rsa",["require","module","./asn1","./jsbn","./oids","./pkcs1","./prime","./random","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function a(e,t){return e.start().update(t).digest().getBytes()}function f(e){var t;if(!e)t="hmacWithSHA1";else{t=r.oids[n.derToOid(e)];if(!t){var i=new Error("Unsupported PRF OID.");throw i.oid=e,i.supported=["hmacWithSHA1","hmacWithSHA224","hmacWithSHA256","hmacWithSHA384","hmacWithSHA512"],i}}return l(t)}function l(t){var n=e.md;switch(t){case"hmacWithSHA224":n=e.md.sha512;case"hmacWithSHA1":case"hmacWithSHA256":case"hmacWithSHA384":case"hmacWithSHA512":t=t.substr(8).toLowerCase();break;default:var r=new Error("Unsupported PRF algorithm.");throw r.algorithm=t,r.supported=["hmacWithSHA1","hmacWithSHA224","hmacWithSHA256","hmacWithSHA384","hmacWithSHA512"],r}return n[t].create()}function c(t,i,s,o){var u=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,t),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,i.getBytes())]);return o!=="hmacWithSHA1"&&u.value.push(n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,e.util.hexToBytes(s.toString(16))),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(r.oids[o]).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")])),u}if(typeof t=="undefined")var t=e.jsbn.BigInteger;var n=e.asn1,r=e.pki=e.pki||{};r.pbe=e.pbe=e.pbe||{};var i=r.oids,s={name:"EncryptedPrivateKeyInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedPrivateKeyInfo.encryptionAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"encryptionOid"},{name:"AlgorithmIdentifier.parameters",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"encryptionParams"}]},{name:"EncryptedPrivateKeyInfo.encryptedData",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"encryptedData"}]},o={name:"PBES2Algorithms",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.keyDerivationFunc",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.keyDerivationFunc.oid",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"kdfOid"},{name:"PBES2Algorithms.params",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.params.salt",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"kdfSalt"},{name:"PBES2Algorithms.params.iterationCount",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"kdfIterationCount"},{name:"PBES2Algorithms.params.keyLength",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,optional:!0,capture:"keyLength"},{name:"PBES2Algorithms.params.prf",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,optional:!0,value:[{name:"PBES2Algorithms.params.prf.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"prfOid"}]}]}]},{name:"PBES2Algorithms.encryptionScheme",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.encryptionScheme.oid",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"encOid"},{name:"PBES2Algorithms.encryptionScheme.iv",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"encIv"}]}]},u={name:"pkcs-12PbeParams",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"pkcs-12PbeParams.salt",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"salt"},{name:"pkcs-12PbeParams.iterations",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"iterations"}]};r.encryptPrivateKeyInfo=function(t,s,o){o=o||{},o.saltSize=o.saltSize||8,o.count=o.count||2048,o.algorithm=o.algorithm||"aes128",o.prfAlgorithm=o.prfAlgorithm||"sha1";var u=e.random.getBytesSync(o.saltSize),a=o.count,f=n.integerToDer(a),h,p,d;if(o.algorithm.indexOf("aes")===0||o.algorithm==="des"){var v,m,g;switch(o.algorithm){case"aes128":h=16,v=16,m=i["aes128-CBC"],g=e.aes.createEncryptionCipher;break;case"aes192":h=24,v=16,m=i["aes192-CBC"],g=e.aes.createEncryptionCipher;break;case"aes256":h=32,v=16,m=i["aes256-CBC"],g=e.aes.createEncryptionCipher;break;case"des":h=8,v=8,m=i.desCBC,g=e.des.createEncryptionCipher;break;default:var y=new Error("Cannot encrypt private key. Unknown encryption algorithm.");throw y.algorithm=o.algorithm,y}var b="hmacWith"+o.prfAlgorithm.toUpperCase(),w=l(b),E=e.pkcs5.pbkdf2(s,u,a,h,w),S=e.random.getBytesSync(v),x=g(E);x.start(S),x.update(n.toDer(t)),x.finish(),d=x.output.getBytes();var T=c(u,f,h,b);p=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.pkcs5PBES2).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.pkcs5PBKDF2).getBytes()),T]),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(m).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,S)])])])}else{if(o.algorithm!=="3des"){var y=new Error("Cannot encrypt private key. Unknown encryption algorithm.");throw y.algorithm=o.algorithm,y}h=24;var N=new e.util.ByteBuffer(u),E=r.pbe.generatePkcs12Key(s,N,1,a,h),S=r.pbe.generatePkcs12Key(s,N,2,a,h),x=e.des.createEncryptionCipher(E);x.start(S),x.update(n.toDer(t)),x.finish(),d=x.output.getBytes(),p=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,u),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,f.getBytes())])])}var C=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[p,n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,d)]);return C},r.decryptPrivateKeyInfo=function(t,i){var o=null,u={},a=[];if(!n.validate(t,s,u,a)){var f=new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw f.errors=a,f}var l=n.derToOid(u.encryptionOid),c=r.pbe.getCipher(l,u.encryptionParams,i),h=e.util.createBuffer(u.encryptedData);return c.update(h),c.finish()&&(o=n.fromDer(c.output)),o},r.encryptedPrivateKeyToPem=function(t,r){var i={type:"ENCRYPTED PRIVATE KEY",body:n.toDer(t).getBytes()};return e.pem.encode(i,{maxline:r})},r.encryptedPrivateKeyFromPem=function(t){var r=e.pem.decode(t)[0];if(r.type!=="ENCRYPTED PRIVATE KEY"){var i=new Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');throw i.headerType=r.type,i}if(r.procType&&r.procType.type==="ENCRYPTED")throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");return n.fromDer(r.body)},r.encryptRsaPrivateKey=function(t,i,s){s=s||{};if(!s.legacy){var o=r.wrapRsaPrivateKey(r.privateKeyToAsn1(t));return o=r.encryptPrivateKeyInfo(o,i,s),r.encryptedPrivateKeyToPem(o)}var u,a,f,l;switch(s.algorithm){case"aes128":u="AES-128-CBC",f=16,a=e.random.getBytesSync(16),l=e.aes.createEncryptionCipher;break;case"aes192":u="AES-192-CBC",f=24,a=e.random.getBytesSync(16),l=e.aes.createEncryptionCipher;break;case"aes256":u="AES-256-CBC",f=32,a=e.random.getBytesSync(16),l=e.aes.createEncryptionCipher;break;case"3des":u="DES-EDE3-CBC",f=24,a=e.random.getBytesSync(8),l=e.des.createEncryptionCipher;break;case"des":u="DES-CBC",f=8,a=e.random.getBytesSync(8),l=e.des.createEncryptionCipher;break;default:var c=new Error('Could not encrypt RSA private key; unsupported encryption algorithm "'+s.algorithm+'".');throw c.algorithm=s.algorithm,c}var h=e.pbe.opensslDeriveBytes(i,a.substr(0,8),f),p=l(h);p.start(a),p.update(n.toDer(r.privateKeyToAsn1(t))),p.finish();var d={type:"RSA PRIVATE KEY",procType:{version:"4",type:"ENCRYPTED"},dekInfo:{algorithm:u,parameters:e.util.bytesToHex(a).toUpperCase()},body:p.output.getBytes()};return e.pem.encode(d)},r.decryptRsaPrivateKey=function(t,i){var s=null,o=e.pem.decode(t)[0];if(o.type!=="ENCRYPTED PRIVATE KEY"&&o.type!=="PRIVATE KEY"&&o.type!=="RSA PRIVATE KEY"){var u=new Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".');throw u.headerType=u,u}if(o.procType&&o.procType.type==="ENCRYPTED"){var a,f;switch(o.dekInfo.algorithm){case"DES-CBC":a=8,f=e.des.createDecryptionCipher;break;case"DES-EDE3-CBC":a=24,f=e.des.createDecryptionCipher;break;case"AES-128-CBC":a=16,f=e.aes.createDecryptionCipher;break;case"AES-192-CBC":a=24,f=e.aes.createDecryptionCipher;break;case"AES-256-CBC":a=32,f=e.aes.createDecryptionCipher;break;case"RC2-40-CBC":a=5,f=function(t){return e.rc2.createDecryptionCipher(t,40)};break;case"RC2-64-CBC":a=8,f=function(t){return e.rc2.createDecryptionCipher(t,64)};break;case"RC2-128-CBC":a=16,f=function(t){return e.rc2.createDecryptionCipher(t,128)};break;default:var u=new Error('Could not decrypt private key; unsupported encryption algorithm "'+o.dekInfo.algorithm+'".');throw u.algorithm=o.dekInfo.algorithm,u}var l=e.util.hexToBytes(o.dekInfo.parameters),c=e.pbe.opensslDeriveBytes(i,l.substr(0,8),a),h=f(c);h.start(l),h.update(e.util.createBuffer(o.body));if(!h.finish())return s;s=h.output.getBytes()}else s=o.body;return o.type==="ENCRYPTED PRIVATE KEY"?s=r.decryptPrivateKeyInfo(n.fromDer(s),i):s=n.fromDer(s),s!==null&&(s=r.privateKeyFromAsn1(s)),s},r.pbe.generatePkcs12Key=function(t,n,r,i,s,o){var u,a;if(typeof o=="undefined"||o===null)o=e.md.sha1.create();var f=o.digestLength,l=o.blockLength,c=new e.util.ByteBuffer,h=new e.util.ByteBuffer;if(t!==null&&t!==undefined){for(a=0;a<t.length;a++)h.putInt16(t.charCodeAt(a));h.putInt16(0)}var p=h.length(),d=n.length(),v=new e.util.ByteBuffer;v.fillWithByte(r,l);var m=l*Math.ceil(d/l),g=new e.util.ByteBuffer;for(a=0;a<m;a++)g.putByte(n.at(a%d));var y=l*Math.ceil(p/l),b=new e.util.ByteBuffer;for(a=0;a<y;a++)b.putByte(h.at(a%p));var w=g;w.putBuffer(b);var E=Math.ceil(s/f);for(var S=1;S<=E;S++){var x=new e.util.ByteBuffer;x.putBytes(v.bytes()),x.putBytes(w.bytes());for(var T=0;T<i;T++)o.start(),o.update(x.getBytes()),x=o.digest();var N=new e.util.ByteBuffer;for(a=0;a<l;a++)N.putByte(x.at(a%f));var C=Math.ceil(d/l)+Math.ceil(p/l),k=new e.util.ByteBuffer;for(u=0;u<C;u++){var L=new e.util.ByteBuffer(w.getBytes(l)),A=511;for(a=N.length()-1;a>=0;a--)A>>=8,A+=N.at(a)+L.at(a),L.setAt(a,A&255);k.putBuffer(L)}w=k,c.putBuffer(x)}return c.truncate(c.length()-s),c},r.pbe.getCipher=function(e,t,n){switch(e){case r.oids.pkcs5PBES2:return r.pbe.getCipherForPBES2(e,t,n);case r.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:case r.oids["pbewithSHAAnd40BitRC2-CBC"]:return r.pbe.getCipherForPKCS12PBE(e,t,n);default:var i=new Error("Cannot read encrypted PBE data block. Unsupported OID.");throw i.oid=e,i.supportedOids=["pkcs5PBES2","pbeWithSHAAnd3-KeyTripleDES-CBC","pbewithSHAAnd40BitRC2-CBC"],i}},r.pbe.getCipherForPBES2=function(t,i,s){var u={},a=[];if(!n.validate(i,o,u,a)){var l=new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw l.errors=a,l}t=n.derToOid(u.kdfOid);if(t!==r.oids.pkcs5PBKDF2){var l=new Error("Cannot read encrypted private key. Unsupported key derivation function OID.");throw l.oid=t,l.supportedOids=["pkcs5PBKDF2"],l}t=n.derToOid(u.encOid);if(t!==r.oids["aes128-CBC"]&&t!==r.oids["aes192-CBC"]&&t!==r.oids["aes256-CBC"]&&t!==r.oids["des-EDE3-CBC"]&&t!==r.oids.desCBC){var l=new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.");throw l.oid=t,l.supportedOids=["aes128-CBC","aes192-CBC","aes256-CBC","des-EDE3-CBC","desCBC"],l}var c=u.kdfSalt,h=e.util.createBuffer(u.kdfIterationCount);h=h.getInt(h.length()<<3);var p,d;switch(r.oids[t]){case"aes128-CBC":p=16,d=e.aes.createDecryptionCipher;break;case"aes192-CBC":p=24,d=e.aes.createDecryptionCipher;break;case"aes256-CBC":p=32,d=e.aes.createDecryptionCipher;break;case"des-EDE3-CBC":p=24,d=e.des.createDecryptionCipher;break;case"desCBC":p=8,d=e.des.createDecryptionCipher}var v=f(u.prfOid),m=e.pkcs5.pbkdf2(s,c,h,p,v),g=u.encIv,y=d(m);return y.start(g),y},r.pbe.getCipherForPKCS12PBE=function(t,i,s){var o={},a=[];if(!n.validate(i,u,o,a)){var l=new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw l.errors=a,l}var c=e.util.createBuffer(o.salt),h=e.util.createBuffer(o.iterations);h=h.getInt(h.length()<<3);var p,d,v;switch(t){case r.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:p=24,d=8,v=e.des.startDecrypting;break;case r.oids["pbewithSHAAnd40BitRC2-CBC"]:p=5,d=8,v=function(t,n){var r=e.rc2.createDecryptionCipher(t,40);return r.start(n,null),r};break;default:var l=new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.");throw l.oid=t,l}var m=f(o.prfOid),g=r.pbe.generatePkcs12Key(s,c,1,h,p,m);m.start();var y=r.pbe.generatePkcs12Key(s,c,2,h,d,m);return v(g,y)},r.pbe.opensslDeriveBytes=function(t,n,r,i){if(typeof i=="undefined"||i===null)i=e.md.md5.create();n===null&&(n="");var s=[a(i,t+n)];for(var o=16,u=1;o<r;++u,o+=16)s.push(a(i,s[u-1]+t+n));return s.join("").substr(0,r)}}var r="pbe";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/pbe",["require","module","./aes","./asn1","./des","./md","./oids","./pem","./pbkdf2","./random","./rc2","./rsa","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){var t=e.asn1,n=e.pkcs7asn1=e.pkcs7asn1||{};e.pkcs7=e.pkcs7||{},e.pkcs7.asn1=n;var r={name:"ContentInfo",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"ContentInfo.ContentType",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"contentType"},{name:"ContentInfo.content",tagClass:t.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,captureAsn1:"content"}]};n.contentInfoValidator=r;var i={name:"EncryptedContentInfo",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedContentInfo.contentType",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"contentType"},{name:"EncryptedContentInfo.contentEncryptionAlgorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"encAlgorithm"},{name:"EncryptedContentInfo.contentEncryptionAlgorithm.parameter",tagClass:t.Class.UNIVERSAL,captureAsn1:"encParameter"}]},{name:"EncryptedContentInfo.encryptedContent",tagClass:t.Class.CONTEXT_SPECIFIC,type:0,capture:"encryptedContent",captureAsn1:"encryptedContentAsn1"}]};n.envelopedDataValidator={name:"EnvelopedData",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"EnvelopedData.Version",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,capture:"version"},{name:"EnvelopedData.RecipientInfos",tagClass:t.Class.UNIVERSAL,type:t.Type.SET,constructed:!0,captureAsn1:"recipientInfos"}].concat(i)},n.encryptedDataValidator={name:"EncryptedData",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedData.Version",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,capture:"version"}].concat(i)};var s={name:"SignerInfo",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.version",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1},{name:"SignerInfo.issuerAndSerialNumber",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.issuerAndSerialNumber.issuer",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,captureAsn1:"issuer"},{name:"SignerInfo.issuerAndSerialNumber.serialNumber",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,capture:"serial"}]},{name:"SignerInfo.digestAlgorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.digestAlgorithm.algorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"digestAlgorithm"},{name:"SignerInfo.digestAlgorithm.parameter",tagClass:t.Class.UNIVERSAL,constructed:!1,captureAsn1:"digestParameter",optional:!0}]},{name:"SignerInfo.authenticatedAttributes",tagClass:t.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"authenticatedAttributes"},{name:"SignerInfo.digestEncryptionAlgorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,capture:"signatureAlgorithm"},{name:"SignerInfo.encryptedDigest",tagClass:t.Class.UNIVERSAL,type:t.Type.OCTETSTRING,constructed:!1,capture:"signature"},{name:"SignerInfo.unauthenticatedAttributes",tagClass:t.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,capture:"unauthenticatedAttributes"}]};n.signedDataValidator={name:"SignedData",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"SignedData.Version",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,capture:"version"},{name:"SignedData.DigestAlgorithms",tagClass:t.Class.UNIVERSAL,type:t.Type.SET,constructed:!0,captureAsn1:"digestAlgorithms"},r,{name:"SignedData.Certificates",tagClass:t.Class.CONTEXT_SPECIFIC,type:0,optional:!0,captureAsn1:"certificates"},{name:"SignedData.CertificateRevocationLists",tagClass:t.Class.CONTEXT_SPECIFIC,type:1,optional:!0,captureAsn1:"crls"},{name:"SignedData.SignerInfos",tagClass:t.Class.UNIVERSAL,type:t.Type.SET,capture:"signerInfos",optional:!0,value:[s]}]},n.recipientInfoValidator={name:"RecipientInfo",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.version",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,capture:"version"},{name:"RecipientInfo.issuerAndSerial",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.issuerAndSerial.issuer",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,captureAsn1:"issuer"},{name:"RecipientInfo.issuerAndSerial.serialNumber",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,capture:"serial"}]},{name:"RecipientInfo.keyEncryptionAlgorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.keyEncryptionAlgorithm.algorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"encAlgorithm"},{name:"RecipientInfo.keyEncryptionAlgorithm.parameter",tagClass:t.Class.UNIVERSAL,constructed:!1,captureAsn1:"encParameter"}]},{name:"RecipientInfo.encryptedKey",tagClass:t.Class.UNIVERSAL,type:t.Type.OCTETSTRING,constructed:!1,capture:"encKey"}]}}var r="pkcs7asn1";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/pkcs7asn1",["require","module","./asn1","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){e.mgf=e.mgf||{};var t=e.mgf.mgf1=e.mgf1=e.mgf1||{};t.create=function(t){var n={generate:function(n,r){var i=new e.util.ByteBuffer,s=Math.ceil(r/t.digestLength);for(var o=0;o<s;o++){var u=new e.util.ByteBuffer;u.putInt32(o),t.start(),t.update(n+u.getBytes()),i.putBuffer(t.digest())}return i.truncate(i.length()-r),i.getBytes()}};return n}}var r="mgf1";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/mgf1",["require","module","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){e.mgf=e.mgf||{},e.mgf.mgf1=e.mgf1}var r="mgf";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/mgf",["require","module","./mgf1"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){var t=e.pss=e.pss||{};t.create=function(t){arguments.length===3&&(t={md:arguments[0],mgf:arguments[1],saltLength:arguments[2]});var n=t.md,r=t.mgf,i=n.digestLength,s=t.salt||null;typeof s=="string"&&(s=e.util.createBuffer(s));var o;if("saltLength"in t)o=t.saltLength;else{if(s===null)throw new Error("Salt length not specified or specific salt not given.");o=s.length()}if(s!==null&&s.length()!==o)throw new Error("Given salt length does not match length of given salt.");var u=t.prng||e.random,a={};return a.encode=function(t,a){var f,l=a-1,c=Math.ceil(l/8),h=t.digest().getBytes();if(c<i+o+2)throw new Error("Message is too long to encrypt.");var p;s===null?p=u.getBytesSync(o):p=s.bytes();var d=new e.util.ByteBuffer;d.fillWithByte(0,8),d.putBytes(h),d.putBytes(p),n.start(),n.update(d.getBytes());var v=n.digest().getBytes(),m=new e.util.ByteBuffer;m.fillWithByte(0,c-o-i-2),m.putByte(1),m.putBytes(p);var g=m.getBytes(),y=c-i-1,b=r.generate(v,y),w="";for(f=0;f<y;f++)w+=String.fromCharCode(g.charCodeAt(f)^b.charCodeAt(f));var E=65280>>8*c-l&255;return w=String.fromCharCode(w.charCodeAt(0)&~E)+w.substr(1),w+v+String.fromCharCode(188)},a.verify=function(t,s,u){var a,f=u-1,l=Math.ceil(f/8);s=s.substr(-l);if(l<i+o+2)throw new Error("Inconsistent parameters to PSS signature verification.");if(s.charCodeAt(l-1)!==188)throw new Error("Encoded message does not end in 0xBC.");var c=l-i-1,h=s.substr(0,c),p=s.substr(c,i),d=65280>>8*l-f&255;if((h.charCodeAt(0)&d)!==0)throw new Error("Bits beyond keysize not zero as expected.");var v=r.generate(p,c),m="";for(a=0;a<c;a++)m+=String.fromCharCode(h.charCodeAt(a)^v.charCodeAt(a));m=String.fromCharCode(m.charCodeAt(0)&~d)+m.substr(1);var g=l-i-o-2;for(a=0;a<g;a++)if(m.charCodeAt(a)!==0)throw new Error("Leftmost octets not zero as expected");if(m.charCodeAt(g)!==1)throw new Error("Inconsistent PSS signature, 0x01 marker not found");var y=m.substr(-o),b=new e.util.ByteBuffer;b.fillWithByte(0,8),b.putBytes(t),b.putBytes(y),n.start(),n.update(b.getBytes());var w=n.digest().getBytes();return p===w},a}}var r="pss";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/pss",["require","module","./random","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function l(e,t){typeof t=="string"&&(t={shortName:t});var n=null,r;for(var i=0;n===null&&i<e.attributes.length;++i)r=e.attributes[i],t.type&&t.type===r.type?n=r:t.name&&t.name===r.name?n=r:t.shortName&&t.shortName===r.shortName&&(n=r);return n}function h(n){var r=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[]),i,s,o=n.attributes;for(var u=0;u<o.length;++u){i=o[u];var a=i.value,f=t.Type.PRINTABLESTRING;"valueTagClass"in i&&(f=i.valueTagClass,f===t.Type.UTF8&&(a=e.util.encodeUtf8(a))),s=t.create(t.Class.UNIVERSAL,t.Type.SET,!0,[t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(i.type).getBytes()),t.create(t.Class.UNIVERSAL,f,!1,a)])]),r.value.push(s)}return r}function p(n){var r={};for(var i=0;i<n.length;++i){var s=n[i];if(s.shortName&&(s.valueTagClass===t.Type.UTF8||s.valueTagClass===t.Type.PRINTABLESTRING||s.valueTagClass===t.Type.IA5STRING)){var o=s.value;s.valueTagClass===t.Type.UTF8&&(o=e.util.encodeUtf8(s.value)),s.shortName in r?e.util.isArray(r[s.shortName])?r[s.shortName].push(o):r[s.shortName]=[r[s.shortName],o]:r[s.shortName]=o}}return r}function d(e){var s;for(var o=0;o<e.length;++o){s=e[o],typeof s.name=="undefined"&&(s.type&&s.type in n.oids?s.name=n.oids[s.type]:s.shortName&&s.shortName in i&&(s.name=n.oids[i[s.shortName]]));if(typeof s.type=="undefined"){if(!(s.name&&s.name in n.oids)){var u=new Error("Attribute type not specified.");throw u.attribute=s,u}s.type=n.oids[s.name]}typeof s.shortName=="undefined"&&s.name&&s.name in i&&(s.shortName=i[s.name]);if(s.type===r.extensionRequest){s.valueConstructed=!0,s.valueTagClass=t.Type.SEQUENCE;if(!s.value&&s.extensions){s.value=[];for(var a=0;a<s.extensions.length;++a)s.value.push(n.certificateExtensionToAsn1(v(s.extensions[a])))}}if(typeof s.value=="undefined"){var u=new Error("Attribute value not specified.");throw u.attribute=s,u}}}function v(i,s){s=s||{},typeof i.name=="undefined"&&i.id&&i.id in n.oids&&(i.name=n.oids[i.id]);if(typeof i.id=="undefined"){if(!(i.name&&i.name in n.oids)){var o=new Error("Extension ID not specified.");throw o.extension=i,o}i.id=n.oids[i.name]}if(typeof i.value!="undefined")return i;if(i.name==="keyUsage"){var u=0,a=0,f=0;i.digitalSignature&&(a|=128,u=7),i.nonRepudiation&&(a|=64,u=6),i.keyEncipherment&&(a|=32,u=5),i.dataEncipherment&&(a|=16,u=4),i.keyAgreement&&(a|=8,u=3),i.keyCertSign&&(a|=4,u=2),i.cRLSign&&(a|=2,u=1),i.encipherOnly&&(a|=1,u=0),i.decipherOnly&&(f|=128,u=7);var l=String.fromCharCode(u);f!==0?l+=String.fromCharCode(a)+String.fromCharCode(f):a!==0&&(l+=String.fromCharCode(a)),i.value=t.create(t.Class.UNIVERSAL,t.Type.BITSTRING,!1,l)}else if(i.name==="basicConstraints")i.value=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[]),i.cA&&i.value.value.push(t.create(t.Class.UNIVERSAL,t.Type.BOOLEAN,!1,String.fromCharCode(255))),"pathLenConstraint"in i&&i.value.value.push(t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,t.integerToDer(i.pathLenConstraint).getBytes()));else if(i.name==="extKeyUsage"){i.value=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[]);var c=i.value.value;for(var p in i){if(i[p]!==!0)continue;p in r?c.push(t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(r[p]).getBytes())):p.indexOf(".")!==-1&&c.push(t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(p).getBytes()))}}else if(i.name==="nsCertType"){var u=0,a=0;i.client&&(a|=128,u=7),i.server&&(a|=64,u=6),i.email&&(a|=32,u=5),i.objsign&&(a|=16,u=4),i.reserved&&(a|=8,u=3),i.sslCA&&(a|=4,u=2),i.emailCA&&(a|=2,u=1),i.objCA&&(a|=1,u=0);var l=String.fromCharCode(u);a!==0&&(l+=String.fromCharCode(a)),i.value=t.create(t.Class.UNIVERSAL,t.Type.BITSTRING,!1,l)}else if(i.name==="subjectAltName"||i.name==="issuerAltName"){i.value=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[]);var d;for(var v=0;v<i.altNames.length;++v){d=i.altNames[v];var l=d.value;if(d.type===7&&d.ip){l=e.util.bytesFromIP(d.ip);if(l===null){var o=new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');throw o.extension=i,o}}else d.type===8&&(d.oid?l=t.oidToDer(t.oidToDer(d.oid)):l=t.oidToDer(l));i.value.value.push(t.create(t.Class.CONTEXT_SPECIFIC,d.type,!1,l))}}else if(i.name==="subjectKeyIdentifier"&&s.cert){var m=s.cert.generateSubjectKeyIdentifier();i.subjectKeyIdentifier=m.toHex(),i.value=t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,m.getBytes())}else if(i.name==="authorityKeyIdentifier"&&s.cert){i.value=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[]);var c=i.value.value;if(i.keyIdentifier){var g=i.keyIdentifier===!0?s.cert.generateSubjectKeyIdentifier().getBytes():i.keyIdentifier;c.push(t.create(t.Class.CONTEXT_SPECIFIC,0,!1,g))}if(i.authorityCertIssuer){var y=[t.create(t.Class.CONTEXT_SPECIFIC,4,!0,[h(i.authorityCertIssuer===!0?s.cert.issuer:i.authorityCertIssuer)])];c.push(t.create(t.Class.CONTEXT_SPECIFIC,1,!0,y))}if(i.serialNumber){var b=e.util.hexToBytes(i.serialNumber===!0?s.cert.serialNumber:i.serialNumber);c.push(t.create(t.Class.CONTEXT_SPECIFIC,2,!1,b))}}else if(i.name==="cRLDistributionPoints"){i.value=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[]);var c=i.value.value,w=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[]),E=t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[]),d;for(var v=0;v<i.altNames.length;++v){d=i.altNames[v];var l=d.value;if(d.type===7&&d.ip){l=e.util.bytesFromIP(d.ip);if(l===null){var o=new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.');throw o.extension=i,o}}else d.type===8&&(d.oid?l=t.oidToDer(t.oidToDer(d.oid)):l=t.oidToDer(l));E.value.push(t.create(t.Class.CONTEXT_SPECIFIC,d.type,!1,l))}w.value.push(t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[E])),c.push(w)}if(typeof i.value=="undefined"){var o=new Error("Extension value not specified.");throw o.extension=i,o}return i}function m(e,n){switch(e){case r["RSASSA-PSS"]:var i=[];return n.hash.algorithmOid!==undefined&&i.push(t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.hash.algorithmOid).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.NULL,!1,"")])])),n.mgf.algorithmOid!==undefined&&i.push(t.create(t.Class.CONTEXT_SPECIFIC,1,!0,[t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.mgf.algorithmOid).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.mgf.hash.algorithmOid).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.NULL,!1,"")])])])),n.saltLength!==undefined&&i.push(t.create(t.Class.CONTEXT_SPECIFIC,2,!0,[t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,t.integerToDer(n.saltLength).getBytes())])),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,i);default:return t.create(t.Class.UNIVERSAL,t.Type.NULL,!1,"")}}function g(n){var r=t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[]);if(n.attributes.length===0)return r;var i=n.attributes;for(var s=0;s<i.length;++s){var o=i[s],u=o.value,a=t.Type.UTF8;"valueTagClass"in o&&(a=o.valueTagClass),a===t.Type.UTF8&&(u=e.util.encodeUtf8(u));var f=!1;"valueConstructed"in o&&(f=o.valueConstructed);var l=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(o.type).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SET,!0,[t.create(t.Class.UNIVERSAL,a,f,u)])]);r.value.push(l)}return r}var t=e.asn1,n=e.pki=e.pki||{},r=n.oids,i={};i.CN=r.commonName,i.commonName="CN",i.C=r.countryName,i.countryName="C",i.L=r.localityName,i.localityName="L",i.ST=r.stateOrProvinceName,i.stateOrProvinceName="ST",i.O=r.organizationName,i.organizationName="O",i.OU=r.organizationalUnitName,i.organizationalUnitName="OU",i.E=r.emailAddress,i.emailAddress="E";var s=e.pki.rsa.publicKeyValidator,o={name:"Certificate",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,captureAsn1:"tbsCertificate",value:[{name:"Certificate.TBSCertificate.version",tagClass:t.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.version.integer",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,capture:"certVersion"}]},{name:"Certificate.TBSCertificate.serialNumber",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,capture:"certSerialNumber"},{name:"Certificate.TBSCertificate.signature",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.signature.algorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"certinfoSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:t.Class.UNIVERSAL,optional:!0,captureAsn1:"certinfoSignatureParams"}]},{name:"Certificate.TBSCertificate.issuer",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,captureAsn1:"certIssuer"},{name:"Certificate.TBSCertificate.validity",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.validity.notBefore (utc)",tagClass:t.Class.UNIVERSAL,type:t.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity1UTCTime"},{name:"Certificate.TBSCertificate.validity.notBefore (generalized)",tagClass:t.Class.UNIVERSAL,type:t.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity2GeneralizedTime"},{name:"Certificate.TBSCertificate.validity.notAfter (utc)",tagClass:t.Class.UNIVERSAL,type:t.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity3UTCTime"},{name:"Certificate.TBSCertificate.validity.notAfter (generalized)",tagClass:t.Class.UNIVERSAL,type:t.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity4GeneralizedTime"}]},{name:"Certificate.TBSCertificate.subject",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,captureAsn1:"certSubject"},s,{name:"Certificate.TBSCertificate.issuerUniqueID",tagClass:t.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.issuerUniqueID.id",tagClass:t.Class.UNIVERSAL,type:t.Type.BITSTRING,constructed:!1,capture:"certIssuerUniqueId"}]},{name:"Certificate.TBSCertificate.subjectUniqueID",tagClass:t.Class.CONTEXT_SPECIFIC,type:2,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.subjectUniqueID.id",tagClass:t.Class.UNIVERSAL,type:t.Type.BITSTRING,constructed:!1,capture:"certSubjectUniqueId"}]},{name:"Certificate.TBSCertificate.extensions",tagClass:t.Class.CONTEXT_SPECIFIC,type:3,constructed:!0,captureAsn1:"certExtensions",optional:!0}]},{name:"Certificate.signatureAlgorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.signatureAlgorithm.algorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"certSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:t.Class.UNIVERSAL,optional:!0,captureAsn1:"certSignatureParams"}]},{name:"Certificate.signatureValue",tagClass:t.Class.UNIVERSAL,type:t.Type.BITSTRING,constructed:!1,capture:"certSignature"}]},u={name:"rsapss",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.hashAlgorithm",tagClass:t.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier",tagClass:t.Class.UNIVERSAL,type:t.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"hashOid"}]}]},{name:"rsapss.maskGenAlgorithm",tagClass:t.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier",tagClass:t.Class.UNIVERSAL,type:t.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"maskGenOid"},{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"maskGenHashOid"}]}]}]},{name:"rsapss.saltLength",tagClass:t.Class.CONTEXT_SPECIFIC,type:2,optional:!0,value:[{name:"rsapss.saltLength.saltLength",tagClass:t.Class.UNIVERSAL,type:t.Class.INTEGER,constructed:!1,capture:"saltLength"}]},{name:"rsapss.trailerField",tagClass:t.Class.CONTEXT_SPECIFIC,type:3,optional:!0,value:[{name:"rsapss.trailer.trailer",tagClass:t.Class.UNIVERSAL,type:t.Class.INTEGER,constructed:!1,capture:"trailer"}]}]},a={name:"CertificationRequestInfo",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfo",value:[{name:"CertificationRequestInfo.integer",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,capture:"certificationRequestInfoVersion"},{name:"CertificationRequestInfo.subject",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfoSubject"},s,{name:"CertificationRequestInfo.attributes",tagClass:t.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"certificationRequestInfoAttributes",value:[{name:"CertificationRequestInfo.attributes",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"CertificationRequestInfo.attributes.type",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1},{name:"CertificationRequestInfo.attributes.value",tagClass:t.Class.UNIVERSAL,type:t.Type.SET,constructed:!0}]}]}]},f={name:"CertificationRequest",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,captureAsn1:"csr",value:[a,{name:"CertificationRequest.signatureAlgorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"CertificationRequest.signatureAlgorithm.algorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"csrSignatureOid"},{name:"CertificationRequest.signatureAlgorithm.parameters",tagClass:t.Class.UNIVERSAL,optional:!0,captureAsn1:"csrSignatureParams"}]},{name:"CertificationRequest.signature",tagClass:t.Class.UNIVERSAL,type:t.Type.BITSTRING,constructed:!1,capture:"csrSignature"}]};n.RDNAttributesAsArray=function(e,n){var s=[],o,u,a;for(var f=0;f<e.value.length;++f){o=e.value[f];for(var l=0;l<o.value.length;++l)a={},u=o.value[l],a.type=t.derToOid(u.value[0].value),a.value=u.value[1].value,a.valueTagClass=u.value[1].type,a.type in r&&(a.name=r[a.type],a.name in i&&(a.shortName=i[a.name])),n&&(n.update(a.type),n.update(a.value)),s.push(a)}return s},n.CRIAttributesAsArray=function(e){var s=[];for(var o=0;o<e.length;++o){var u=e[o],a=t.derToOid(u.value[0].value),f=u.value[1].value;for(var l=0;l<f.length;++l){var c={};c.type=a,c.value=f[l].value,c.valueTagClass=f[l].type,c.type in r&&(c.name=r[c.type],c.name in i&&(c.shortName=i[c.name]));if(c.type===r.extensionRequest){c.extensions=[];for(var h=0;h<c.value.length;++h)c.extensions.push(n.certificateExtensionFromAsn1(c.value[h]))}s.push(c)}}return s};var c=function(e,n,i){var s={};if(e!==r["RSASSA-PSS"])return s;i&&(s={hash:{algorithmOid:r.sha1},mgf:{algorithmOid:r.mgf1,hash:{algorithmOid:r.sha1}},saltLength:20});var o={},a=[];if(!t.validate(n,u,o,a)){var f=new Error("Cannot read RSASSA-PSS parameter block.");throw f.errors=a,f}return o.hashOid!==undefined&&(s.hash=s.hash||{},s.hash.algorithmOid=t.derToOid(o.hashOid)),o.maskGenOid!==undefined&&(s.mgf=s.mgf||{},s.mgf.algorithmOid=t.derToOid(o.maskGenOid),s.mgf.hash=s.mgf.hash||{},s.mgf.hash.algorithmOid=t.derToOid(o.maskGenHashOid)),o.saltLength!==undefined&&(s.saltLength=o.saltLength.charCodeAt(0)),s};n.certificateFromPem=function(r,i,s){var o=e.pem.decode(r)[0];if(o.type!=="CERTIFICATE"&&o.type!=="X509 CERTIFICATE"&&o.type!=="TRUSTED CERTIFICATE"){var u=new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');throw u.headerType=o.type,u}if(o.procType&&o.procType.type==="ENCRYPTED")throw new Error("Could not convert certificate from PEM; PEM is encrypted.");var a=t.fromDer(o.body,s);return n.certificateFromAsn1(a,i)},n.certificateToPem=function(r,i){var s={type:"CERTIFICATE",body:t.toDer(n.certificateToAsn1(r)).getBytes()};return e.pem.encode(s,{maxline:i})},n.publicKeyFromPem=function(r){var i=e.pem.decode(r)[0];if(i.type!=="PUBLIC KEY"&&i.type!=="RSA PUBLIC KEY"){var s=new Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');throw s.headerType=i.type,s}if(i.procType&&i.procType.type==="ENCRYPTED")throw new Error("Could not convert public key from PEM; PEM is encrypted.");var o=t.fromDer(i.body);return n.publicKeyFromAsn1(o)},n.publicKeyToPem=function(r,i){var s={type:"PUBLIC KEY",body:t.toDer(n.publicKeyToAsn1(r)).getBytes()};return e.pem.encode(s,{maxline:i})},n.publicKeyToRSAPublicKeyPem=function(r,i){var s={type:"RSA PUBLIC KEY",body:t.toDer(n.publicKeyToRSAPublicKey(r)).getBytes()};return e.pem.encode(s,{maxline:i})},n.getPublicKeyFingerprint=function(r,i){i=i||{};var s=i.md||e.md.sha1.create(),o=i.type||"RSAPublicKey",u;switch(o){case"RSAPublicKey":u=t.toDer(n.publicKeyToRSAPublicKey(r)).getBytes();break;case"SubjectPublicKeyInfo":u=t.toDer(n.publicKeyToAsn1(r)).getBytes();break;default:throw new Error('Unknown fingerprint type "'+i.type+'".')}s.start(),s.update(u);var a=s.digest();if(i.encoding==="hex"){var f=a.toHex();return i.delimiter?f.match(/.{2}/g).join(i.delimiter):f}if(i.encoding==="binary")return a.getBytes();if(i.encoding)throw new Error('Unknown encoding "'+i.encoding+'".');return a},n.certificationRequestFromPem=function(r,i,s){var o=e.pem.decode(r)[0];if(o.type!=="CERTIFICATE REQUEST"){var u=new Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');throw u.headerType=o.type,u}if(o.procType&&o.procType.type==="ENCRYPTED")throw new Error("Could not convert certification request from PEM; PEM is encrypted.");var a=t.fromDer(o.body,s);return n.certificationRequestFromAsn1(a,i)},n.certificationRequestToPem=function(r,i){var s={type:"CERTIFICATE REQUEST",body:t.toDer(n.certificationRequestToAsn1(r)).getBytes()};return e.pem.encode(s,{maxline:i})},n.createCertificate=function(){var i={};return i.version=2,i.serialNumber="00",i.signatureOid=null,i.signature=null,i.siginfo={},i.siginfo.algorithmOid=null,i.validity={},i.validity.notBefore=new Date,i.validity.notAfter=new Date,i.issuer={},i.issuer.getField=function(e){return l(i.issuer,e)},i.issuer.addField=function(e){d([e]),i.issuer.attributes.push(e)},i.issuer.attributes=[],i.issuer.hash=null,i.subject={},i.subject.getField=function(e){return l(i.subject,e)},i.subject.addField=function(e){d([e]),i.subject.attributes.push(e)},i.subject.attributes=[],i.subject.hash=null,i.extensions=[],i.publicKey=null,i.md=null,i.setSubject=function(e,t){d(e),i.subject.attributes=e,delete i.subject.uniqueId,t&&(i.subject.uniqueId=t),i.subject.hash=null},i.setIssuer=function(e,t){d(e),i.issuer.attributes=e,delete i.issuer.uniqueId,t&&(i.issuer.uniqueId=t),i.issuer.hash=null},i.setExtensions=function(e){for(var t=0;t<e.length;++t)v(e[t],{cert:i});i.extensions=e},i.getExtension=function(e){typeof e=="string"&&(e={name:e});var t=null,n;for(var r=0;t===null&&r<i.extensions.length;++r)n=i.extensions[r],e.id&&n.id===e.id?t=n:e.name&&n.name===e.name&&(t=n);return t},i.sign=function(s,o){i.md=o||e.md.sha1.create();var u=r[i.md.algorithm+"WithRSAEncryption"];if(!u){var a=new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");throw a.algorithm=i.md.algorithm,a}i.signatureOid=i.siginfo.algorithmOid=u,i.tbsCertificate=n.getTBSCertificate(i);var f=t.toDer(i.tbsCertificate);i.md.update(f.getBytes()),i.signature=s.sign(i.md)},i.verify=function(s){var o=!1;if(!i.issued(s)){var u=s.issuer,a=i.subject,f=new Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.");throw f.expectedIssuer=u.attributes,f.actualIssuer=a.attributes,f}var l=s.md;if(l===null){if(s.signatureOid in r){var c=r[s.signatureOid];switch(c){case"sha1WithRSAEncryption":l=e.md.sha1.create();break;case"md5WithRSAEncryption":l=e.md.md5.create();break;case"sha256WithRSAEncryption":l=e.md.sha256.create();break;case"sha512WithRSAEncryption":l=e.md.sha512.create();break;case"RSASSA-PSS":l=e.md.sha256.create()}}if(l===null){var f=new Error("Could not compute certificate digest. Unknown signature OID.");throw f.signatureOid=s.signatureOid,f}var h=s.tbsCertificate||n.getTBSCertificate(s),p=t.toDer(h);l.update(p.getBytes())}if(l!==null){var d;switch(s.signatureOid){case r.sha1WithRSAEncryption:d=undefined;break;case r["RSASSA-PSS"]:var v,m;v=r[s.signatureParameters.mgf.hash.algorithmOid];if(v===undefined||e.md[v]===undefined){var f=new Error("Unsupported MGF hash function.");throw f.oid=s.signatureParameters.mgf.hash.algorithmOid,f.name=v,f}m=r[s.signatureParameters.mgf.algorithmOid];if(m===undefined||e.mgf[m]===undefined){var f=new Error("Unsupported MGF function.");throw f.oid=s.signatureParameters.mgf.algorithmOid,f.name=m,f}m=e.mgf[m].create(e.md[v].create()),v=r[s.signatureParameters.hash.algorithmOid];if(v===undefined||e.md[v]===undefined)throw{message:"Unsupported RSASSA-PSS hash function.",oid:s.signatureParameters.hash.algorithmOid,name:v};d=e.pss.create(e.md[v].create(),m,s.signatureParameters.saltLength)}o=i.publicKey.verify(l.digest().getBytes(),s.signature,d)}return o},i.isIssuer=function(e){var t=!1,n=i.issuer,r=e.subject;if(n.hash&&r.hash)t=n.hash===r.hash;else if(n.attributes.length===r.attributes.length){t=!0;var s,o;for(var u=0;t&&u<n.attributes.length;++u){s=n.attributes[u],o=r.attributes[u];if(s.type!==o.type||s.value!==o.value)t=!1}}return t},i.issued=function(e){return e.isIssuer(i)},i.generateSubjectKeyIdentifier=function(){return n.getPublicKeyFingerprint(i.publicKey,{type:"RSAPublicKey"})},i.verifySubjectKeyIdentifier=function(){var t=r.subjectKeyIdentifier;for(var n=0;n<i.extensions.length;++n){var s=i.extensions[n];if(s.id===t){var o=i.generateSubjectKeyIdentifier().getBytes();return e.util.hexToBytes(s.subjectKeyIdentifier)===o}}return!1},i},n.certificateFromAsn1=function(i,s){var u={},a=[];if(!t.validate(i,o,u,a)){var f=new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.");throw f.errors=a,f}if(typeof u.certSignature!="string"){var h="\0";for(var p=0;p<u.certSignature.length;++p)h+=t.toDer(u.certSignature[p]).getBytes();u.certSignature=h}var v=t.derToOid(u.publicKeyOid);if(v!==n.oids.rsaEncryption)throw new Error("Cannot read public key. OID is not RSA.");var m=n.createCertificate();m.version=u.certVersion?u.certVersion.charCodeAt(0):0;var g=e.util.createBuffer(u.certSerialNumber);m.serialNumber=g.toHex(),m.signatureOid=e.asn1.derToOid(u.certSignatureOid),m.signatureParameters=c(m.signatureOid,u.certSignatureParams,!0),m.siginfo.algorithmOid=e.asn1.derToOid(u.certinfoSignatureOid),m.siginfo.parameters=c(m.siginfo.algorithmOid,u.certinfoSignatureParams,!1);var y=e.util.createBuffer(u.certSignature);++y.read,m.signature=y.getBytes();var b=[];u.certValidity1UTCTime!==undefined&&b.push(t.utcTimeToDate(u.certValidity1UTCTime)),u.certValidity2GeneralizedTime!==undefined&&b.push(t.generalizedTimeToDate(u.certValidity2GeneralizedTime)),u.certValidity3UTCTime!==undefined&&b.push(t.utcTimeToDate(u.certValidity3UTCTime)),u.certValidity4GeneralizedTime!==undefined&&b.push(t.generalizedTimeToDate(u.certValidity4GeneralizedTime));if(b.length>2)throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");if(b.length<2)throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");m.validity.notBefore=b[0],m.validity.notAfter=b[1],m.tbsCertificate=u.tbsCertificate;if(s){m.md=null;if(m.signatureOid in r){var v=r[m.signatureOid];switch(v){case"sha1WithRSAEncryption":m.md=e.md.sha1.create();break;case"md5WithRSAEncryption":m.md=e.md.md5.create();break;case"sha256WithRSAEncryption":m.md=e.md.sha256.create();break;case"sha512WithRSAEncryption":m.md=e.md.sha512.create();break;case"RSASSA-PSS":m.md=e.md.sha256.create()}}if(m.md===null){var f=new Error("Could not compute certificate digest. Unknown signature OID.");throw f.signatureOid=m.signatureOid,f}var w=t.toDer(m.tbsCertificate);m.md.update(w.getBytes())}var E=e.md.sha1.create();m.issuer.getField=function(e){return l(m.issuer,e)},m.issuer.addField=function(e){d([e]),m.issuer.attributes.push(e)},m.issuer.attributes=n.RDNAttributesAsArray(u.certIssuer,E),u.certIssuerUniqueId&&(m.issuer.uniqueId=u.certIssuerUniqueId),m.issuer.hash=E.digest().toHex();var S=e.md.sha1.create();return m.subject.getField=function(e){return l(m.subject,e)},m.subject.addField=function(e){d([e]),m.subject.attributes.push(e)},m.subject.attributes=n.RDNAttributesAsArray(u.certSubject,S),u.certSubjectUniqueId&&(m.subject.uniqueId=u.certSubjectUniqueId),m.subject.hash=S.digest().toHex(),u.certExtensions?m.extensions=n.certificateExtensionsFromAsn1(u.certExtensions):m.extensions=[],m.publicKey=n.publicKeyFromAsn1(u.subjectPublicKeyInfo),m},n.certificateExtensionsFromAsn1=function(e){var t=[];for(var r=0;r<e.value.length;++r){var i=e.value[r];for(var s=0;s<i.value.length;++s)t.push(n.certificateExtensionFromAsn1(i.value[s]))}return t},n.certificateExtensionFromAsn1=function(n){var i={};i.id=t.derToOid(n.value[0].value),i.critical=!1,n.value[1].type===t.Type.BOOLEAN?(i.critical=n.value[1].value.charCodeAt(0)!==0,i.value=n.value[2].value):i.value=n.value[1].value;if(i.id in r){i.name=r[i.id];if(i.name==="keyUsage"){var s=t.fromDer(i.value),o=0,u=0;s.value.length>1&&(o=s.value.charCodeAt(1),u=s.value.length>2?s.value.charCodeAt(2):0),i.digitalSignature=(o&128)===128,i.nonRepudiation=(o&64)===64,i.keyEncipherment=(o&32)===32,i.dataEncipherment=(o&16)===16,i.keyAgreement=(o&8)===8,i.keyCertSign=(o&4)===4,i.cRLSign=(o&2)===2,i.encipherOnly=(o&1)===1,i.decipherOnly=(u&128)===128}else if(i.name==="basicConstraints"){var s=t.fromDer(i.value);s.value.length>0&&s.value[0].type===t.Type.BOOLEAN?i.cA=s.value[0].value.charCodeAt(0)!==0:i.cA=!1;var a=null;s.value.length>0&&s.value[0].type===t.Type.INTEGER?a=s.value[0].value:s.value.length>1&&(a=s.value[1].value),a!==null&&(i.pathLenConstraint=t.derToInteger(a))}else if(i.name==="extKeyUsage"){var s=t.fromDer(i.value);for(var f=0;f<s.value.length;++f){var l=t.derToOid(s.value[f].value);l in r?i[r[l]]=!0:i[l]=!0}}else if(i.name==="nsCertType"){var s=t.fromDer(i.value),o=0;s.value.length>1&&(o=s.value.charCodeAt(1)),i.client=(o&128)===128,i.server=(o&64)===64,i.email=(o&32)===32,i.objsign=(o&16)===16,i.reserved=(o&8)===8,i.sslCA=(o&4)===4,i.emailCA=(o&2)===2,i.objCA=(o&1)===1}else if(i.name==="subjectAltName"||i.name==="issuerAltName"){i.altNames=[];var c,s=t.fromDer(i.value);for(var h=0;h<s.value.length;++h){c=s.value[h];var p={type:c.type,value:c.value};i.altNames.push(p);switch(c.type){case 1:case 2:case 6:break;case 7:p.ip=e.util.bytesToIP(c.value);break;case 8:p.oid=t.derToOid(c.value);break;default:}}}else if(i.name==="subjectKeyIdentifier"){var s=t.fromDer(i.value);i.subjectKeyIdentifier=e.util.bytesToHex(s.value)}}return i},n.certificationRequestFromAsn1=function(i,s){var o={},u=[];if(!t.validate(i,f,o,u)){var a=new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.");throw a.errors=u,a}if(typeof o.csrSignature!="string"){var h="\0";for(var p=0;p<o.csrSignature.length;++p)h+=t.toDer(o.csrSignature[p]).getBytes();o.csrSignature=h}var v=t.derToOid(o.publicKeyOid);if(v!==n.oids.rsaEncryption)throw new Error("Cannot read public key. OID is not RSA.");var m=n.createCertificationRequest();m.version=o.csrVersion?o.csrVersion.charCodeAt(0):0,m.signatureOid=e.asn1.derToOid(o.csrSignatureOid),m.signatureParameters=c(m.signatureOid,o.csrSignatureParams,!0),m.siginfo.algorithmOid=e.asn1.derToOid(o.csrSignatureOid),m.siginfo.parameters=c(m.siginfo.algorithmOid,o.csrSignatureParams,!1);var g=e.util.createBuffer(o.csrSignature);++g.read,m.signature=g.getBytes(),m.certificationRequestInfo=o.certificationRequestInfo;if(s){m.md=null;if(m.signatureOid in r){var v=r[m.signatureOid];switch(v){case"sha1WithRSAEncryption":m.md=e.md.sha1.create();break;case"md5WithRSAEncryption":m.md=e.md.md5.create();break;case"sha256WithRSAEncryption":m.md=e.md.sha256.create();break;case"sha512WithRSAEncryption":m.md=e.md.sha512.create();break;case"RSASSA-PSS":m.md=e.md.sha256.create()}}if(m.md===null){var a=new Error("Could not compute certification request digest. Unknown signature OID.");throw a.signatureOid=m.signatureOid,a}var y=t.toDer(m.certificationRequestInfo);m.md.update(y.getBytes())}var b=e.md.sha1.create();return m.subject.getField=function(e){return l(m.subject,e)},m.subject.addField=function(e){d([e]),m.subject.attributes.push(e)},m.subject.attributes=n.RDNAttributesAsArray(o.certificationRequestInfoSubject,b),m.subject.hash=b.digest().toHex(),m.publicKey=n.publicKeyFromAsn1(o.subjectPublicKeyInfo),m.getAttribute=function(e){return l(m,e)},m.addAttribute=function(e){d([e]),m.attributes.push(e)},m.attributes=n.CRIAttributesAsArray(o.certificationRequestInfoAttributes||[]),m},n.createCertificationRequest=function(){var i={};return i.version=0,i.signatureOid=null,i.signature=null,i.siginfo={},i.siginfo.algorithmOid=null,i.subject={},i.subject.getField=function(e){return l(i.subject,e)},i.subject.addField=function(e){d([e]),i.subject.attributes.push(e)},i.subject.attributes=[],i.subject.hash=null,i.publicKey=null,i.attributes=[],i.getAttribute=function(e){return l(i,e)},i.addAttribute=function(e){d([e]),i.attributes.push(e)},i.md=null,i.setSubject=function(e){d(e),i.subject.attributes=e,i.subject.hash=null},i.setAttributes=function(e){d(e),i.attributes=e},i.sign=function(s,o){i.md=o||e.md.sha1.create();var u=r[i.md.algorithm+"WithRSAEncryption"];if(!u){var a=new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");throw a.algorithm=i.md.algorithm,a}i.signatureOid=i.siginfo.algorithmOid=u,i.certificationRequestInfo=n.getCertificationRequestInfo(i);var f=t.toDer(i.certificationRequestInfo);i.md.update(f.getBytes()),i.signature=s.sign(i.md)},i.verify=function(){var s=!1,o=i.md;if(o===null){if(i.signatureOid in r){var u=r[i.signatureOid];switch(u){case"sha1WithRSAEncryption":o=e.md.sha1.create();break;case"md5WithRSAEncryption":o=e.md.md5.create();break;case"sha256WithRSAEncryption":o=e.md.sha256.create();break;case"sha512WithRSAEncryption":o=e.md.sha512.create();break;case"RSASSA-PSS":o=e.md.sha256.create()}}if(o===null){var a=new Error("Could not compute certification request digest. Unknown signature OID.");throw a.signatureOid=i.signatureOid,a}var f=i.certificationRequestInfo||n.getCertificationRequestInfo(i),l=t.toDer(f);o.update(l.getBytes())}if(o!==null){var c;switch(i.signatureOid){case r.sha1WithRSAEncryption:break;case r["RSASSA-PSS"]:var h,p;h=r[i.signatureParameters.mgf.hash.algorithmOid];if(h===undefined||e.md[h]===undefined){var a=new Error("Unsupported MGF hash function.");throw a.oid=i.signatureParameters.mgf.hash.algorithmOid,a.name=h,a}p=r[i.signatureParameters.mgf.algorithmOid];if(p===undefined||e.mgf[p]===undefined){var a=new Error("Unsupported MGF function.");throw a.oid=i.signatureParameters.mgf.algorithmOid,a.name=p,a}p=e.mgf[p].create(e.md[h].create()),h=r[i.signatureParameters.hash.algorithmOid];if(h===undefined||e.md[h]===undefined){var a=new Error("Unsupported RSASSA-PSS hash function.");throw a.oid=i.signatureParameters.hash.algorithmOid,a.name=h,a}c=e.pss.create(e.md[h].create(),p,i.signatureParameters.saltLength)}s=i.publicKey.verify(o.digest().getBytes(),i.signature,c)}return s},i},n.getTBSCertificate=function(r){var i=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,t.integerToDer(r.version).getBytes())]),t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,e.util.hexToBytes(r.serialNumber)),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(r.siginfo.algorithmOid).getBytes()),m(r.siginfo.algorithmOid,r.siginfo.parameters)]),h(r.issuer),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.UTCTIME,!1,t.dateToUtcTime(r.validity.notBefore)),t.create(t.Class.UNIVERSAL,t.Type.UTCTIME,!1,t.dateToUtcTime(r.validity.notAfter))]),h(r.subject),n.publicKeyToAsn1(r.publicKey)]);return r.issuer.uniqueId&&i.value.push(t.create(t.Class.CONTEXT_SPECIFIC,1,!0,[t.create(t.Class.UNIVERSAL,t.Type.BITSTRING,!1,String.fromCharCode(0)+r.issuer.uniqueId)])),r.subject.uniqueId&&i.value.push(t.create(t.Class.CONTEXT_SPECIFIC,2,!0,[t.create(t.Class.UNIVERSAL,t.Type.BITSTRING,!1,String.fromCharCode(0)+r.subject.uniqueId)])),r.extensions.length>0&&i.value.push(n.certificateExtensionsToAsn1(r.extensions)),i},n.getCertificationRequestInfo=function(e){var r=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,t.integerToDer(e.version).getBytes()),h(e.subject),n.publicKeyToAsn1(e.publicKey),g(e)]);return r},n.distinguishedNameToAsn1=function(e){return h(e)},n.certificateToAsn1=function(e){var r=e.tbsCertificate||n.getTBSCertificate(e);return t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[r,t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(e.signatureOid).getBytes()),m(e.signatureOid,e.signatureParameters)]),t.create(t.Class.UNIVERSAL,t.Type.BITSTRING,!1,String.fromCharCode(0)+e.signature)])},n.certificateExtensionsToAsn1=function(e){var r=t.create(t.Class.CONTEXT_SPECIFIC,3,!0,[]),i=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[]);r.value.push(i);for(var s=0;s<e.length;++s)i.value.push(n.certificateExtensionToAsn1(e[s]));return r},n.certificateExtensionToAsn1=function(e){var n=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[]);n.value.push(t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(e.id).getBytes())),e.critical&&n.value.push(t.create(t.Class.UNIVERSAL,t.Type.BOOLEAN,!1,String.fromCharCode(255)));var r=e.value;return typeof e.value!="string"&&(r=t.toDer(r).getBytes()),n.value.push(t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,r)),n},n.certificationRequestToAsn1=function(e){var r=e.certificationRequestInfo||n.getCertificationRequestInfo(e);return t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[r,t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(e.signatureOid).getBytes()),m(e.signatureOid,e.signatureParameters)]),t.create(t.Class.UNIVERSAL,t.Type.BITSTRING,!1,String.fromCharCode(0)+e.signature)])},n.createCaStore=function(r){function s(e){return o(e),i.certs[e.hash]||null}function o(t){if(!t.hash){var r=e.md.sha1.create();t.attributes=n.RDNAttributesAsArray(h(t),r),t.hash=r.digest().toHex()}}var i={certs:{}};i.getIssuer=function(e){var t=s(e.issuer);return t},i.addCertificate=function(t){typeof t=="string"&&(t=e.pki.certificateFromPem(t)),o(t.subject);if(!i.hasCertificate(t))if(t.subject.hash in i.certs){var n=i.certs[t.subject.hash];e.util.isArray(n)||(n=[n]),n.push(t),i.certs[t.subject.hash]=n}else i.certs[t.subject.hash]=t},i.hasCertificate=function(r){typeof r=="string"&&(r=e.pki.certificateFromPem(r));var i=s(r.subject);if(!i)return!1;e.util.isArray(i)||(i=[i]);var o=t.toDer(n.certificateToAsn1(r)).getBytes();for(var u=0;u<i.length;++u){var a=t.toDer(n.certificateToAsn1(i[u])).getBytes();if(o===a)return!0}return!1},i.listAllCertificates=function(){var t=[];for(var n in i.certs)if(i.certs.hasOwnProperty(n)){var r=i.certs[n];if(!e.util.isArray(r))t.push(r);else for(var s=0;s<r.length;++s)t.push(r[s])}return t},i.removeCertificate=function(r){var u;typeof r=="string"&&(r=e.pki.certificateFromPem(r)),o(r.subject);if(!i.hasCertificate(r))return null;var a=s(r.subject);if(!e.util.isArray(a))return u=i.certs[r.subject.hash],delete i.certs[r.subject.hash],u;var f=t.toDer(n.certificateToAsn1(r)).getBytes();for(var l=0;l<a.length;++l){var c=t.toDer(n.certificateToAsn1(a[l])).getBytes();f===c&&(u=a[l],a.splice(l,1))}return a.length===0&&delete i.certs[r.subject.hash],u};if(r)for(var u=0;u<r.length;++u){var a=r[u];i.addCertificate(a)}return i},n.certificateError={bad_certificate:"forge.pki.BadCertificate",unsupported_certificate:"forge.pki.UnsupportedCertificate",certificate_revoked:"forge.pki.CertificateRevoked",certificate_expired:"forge.pki.CertificateExpired",certificate_unknown:"forge.pki.CertificateUnknown",unknown_ca:"forge.pki.UnknownCertificateAuthority"},n.verifyCertificateChain=function(t,r,i){r=r.slice(0);var s=r.slice(0),o=new Date,u=!0,a=null,f=0;do{var l=r.shift(),c=null,h=!1;if(o<l.validity.notBefore||o>l.validity.notAfter)a={message:"Certificate is not valid yet or has expired.",error:n.certificateError.certificate_expired,notBefore:l.validity.notBefore,notAfter:l.validity.notAfter,now:o};if(a===null){c=r[0]||t.getIssuer(l),c===null&&l.isIssuer(l)&&(h=!0,c=l);if(c){var p=c;e.util.isArray(p)||(p=[p]);var d=!1;while(!d&&p.length>0){c=p.shift();try{d=c.verify(l)}catch(v){}}d||(a={message:"Certificate signature is invalid.",error:n.certificateError.bad_certificate})}a===null&&(!c||h)&&!t.hasCertificate(l)&&(a={message:"Certificate is not trusted.",error:n.certificateError.unknown_ca})}a===null&&c&&!l.isIssuer(c)&&(a={message:"Certificate issuer is invalid.",error:n.certificateError.bad_certificate});if(a===null){var m={keyUsage:!0,basicConstraints:!0};for(var g=0;a===null&&g<l.extensions.length;++g){var y=l.extensions[g];y.critical&&!(y.name in m)&&(a={message:"Certificate has an unsupported critical extension.",error:n.certificateError.unsupported_certificate})}}if(a===null&&(!u||r.length===0&&(!c||h))){var b=l.getExtension("basicConstraints"),w=l.getExtension("keyUsage");w!==null&&(!w.keyCertSign||b===null)&&(a={message:"Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",error:n.certificateError.bad_certificate}),a===null&&b!==null&&!b.cA&&(a={message:"Certificate basicConstraints indicates the certificate is not a CA.",error:n.certificateError.bad_certificate});if(a===null&&w!==null&&"pathLenConstraint"in b){var E=f-1;E>b.pathLenConstraint&&(a={message:"Certificate basicConstraints pathLenConstraint violated.",error:n.certificateError.bad_certificate})}}var S=a===null?!0:a.error,x=i?i(S,f,s):S;if(x!==!0){S===!0&&(a={message:"The application rejected the certificate.",error:n.certificateError.bad_certificate});if(x||x===0)typeof x=="object"&&!e.util.isArray(x)?(x.message&&(a.message=x.message),x.error&&(a.error=x.error)):typeof x=="string"&&(a.error=x);throw a}a=null,u=!1,++f}while(r.length>0);return!0}}var r="x509";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n.pki}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/x509",["require","module","./aes","./asn1","./des","./md","./mgf","./oids","./pem","./pss","./rsa","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function f(e,t,n,r){var i=[];for(var s=0;s<e.length;s++)for(var o=0;o<e[s].safeBags.length;o++){var u=e[s].safeBags[o];if(r!==undefined&&u.type!==r)continue;if(t===null){i.push(u);continue}u.attributes[t]!==undefined&&u.attributes[t].indexOf(n)>=0&&i.push(u)}return i}function l(t){if(t.composed||t.constructed){var n=e.util.createBuffer();for(var r=0;r<t.value.length;++r)n.putBytes(t.value[r].value);t.composed=t.constructed=!1,t.value=n.getBytes()}return t}function c(e,r,s,o){r=t.fromDer(r,s);if(r.tagClass!==t.Class.UNIVERSAL||r.type!==t.Type.SEQUENCE||r.constructed!==!0)throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");for(var u=0;u<r.value.length;u++){var a=r.value[u],f={},c=[];if(!t.validate(a,i,f,c)){var d=new Error("Cannot read ContentInfo.");throw d.errors=c,d}var v={encrypted:!1},m=null,g=f.content.value[0];switch(t.derToOid(f.contentType)){case n.oids.data:if(g.tagClass!==t.Class.UNIVERSAL||g.type!==t.Type.OCTETSTRING)throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");m=l(g).value;break;case n.oids.encryptedData:m=h(g,o),v.encrypted=!0;break;default:var d=new Error("Unsupported PKCS#12 contentType.");throw d.contentType=t.derToOid(f.contentType),d}v.safeBags=p(m,s,o),e.safeContents.push(v)}}function h(r,i){var s={},o=[];if(!t.validate(r,e.pkcs7.asn1.encryptedDataValidator,s,o)){var u=new Error("Cannot read EncryptedContentInfo.");throw u.errors=o,u}var a=t.derToOid(s.contentType);if(a!==n.oids.data){var u=new Error("PKCS#12 EncryptedContentInfo ContentType is not Data.");throw u.oid=a,u}a=t.derToOid(s.encAlgorithm);var f=n.pbe.getCipher(a,s.encParameter,i),c=l(s.encryptedContentAsn1),h=e.util.createBuffer(c.value);f.update(h);if(!f.finish())throw new Error("Failed to decrypt PKCS#12 SafeContents.");return f.output.getBytes()}function p(e,r,i){if(!r&&e.length===0)return[];e=t.fromDer(e,r);if(e.tagClass!==t.Class.UNIVERSAL||e.type!==t.Type.SEQUENCE||e.constructed!==!0)throw new Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");var s=[];for(var u=0;u<e.value.length;u++){var f=e.value[u],l={},c=[];if(!t.validate(f,o,l,c)){var h=new Error("Cannot read SafeBag.");throw h.errors=c,h}var p={type:t.derToOid(l.bagId),attributes:d(l.bagAttributes)};s.push(p);var v,m,g=l.bagValue.value[0];switch(p.type){case n.oids.pkcs8ShroudedKeyBag:g=n.decryptPrivateKeyInfo(g,i);if(g===null)throw new Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");case n.oids.keyBag:try{p.key=n.privateKeyFromAsn1(g)}catch(y){p.key=null,p.asn1=g}continue;case n.oids.certBag:v=a,m=function(){if(t.derToOid(l.certId)!==n.oids.x509Certificate){var e=new Error("Unsupported certificate type, only X.509 supported.");throw e.oid=t.derToOid(l.certId),e}var i=t.fromDer(l.cert,r);try{p.cert=n.certificateFromAsn1(i,!0)}catch(s){p.cert=null,p.asn1=i}};break;default:var h=new Error("Unsupported PKCS#12 SafeBag type.");throw h.oid=p.type,h}if(v!==undefined&&!t.validate(g,v,l,c)){var h=new Error("Cannot read PKCS#12 "+v.name);throw h.errors=c,h}m()}return s}function d(e){var r={};if(e!==undefined)for(var i=0;i<e.length;++i){var s={},o=[];if(!t.validate(e[i],u,s,o)){var a=new Error("Cannot read PKCS#12 BagAttribute.");throw a.errors=o,a}var f=t.derToOid(s.oid);if(n.oids[f]===undefined)continue;r[n.oids[f]]=[];for(var l=0;l<s.values.length;++l)r[n.oids[f]].push(s.values[l].value)}return r}var t=e.asn1,n=e.pki,r=e.pkcs12=e.pkcs12||{},i={name:"ContentInfo",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"ContentInfo.contentType",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"contentType"},{name:"ContentInfo.content",tagClass:t.Class.CONTEXT_SPECIFIC,constructed:!0,captureAsn1:"content"}]},s={name:"PFX",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.version",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,capture:"version"},i,{name:"PFX.macData",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,optional:!0,captureAsn1:"mac",value:[{name:"PFX.macData.mac",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.macData.mac.digestAlgorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.macData.mac.digestAlgorithm.algorithm",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"macAlgorithm"},{name:"PFX.macData.mac.digestAlgorithm.parameters",tagClass:t.Class.UNIVERSAL,captureAsn1:"macAlgorithmParameters"}]},{name:"PFX.macData.mac.digest",tagClass:t.Class.UNIVERSAL,type:t.Type.OCTETSTRING,constructed:!1,capture:"macDigest"}]},{name:"PFX.macData.macSalt",tagClass:t.Class.UNIVERSAL,type:t.Type.OCTETSTRING,constructed:!1,capture:"macSalt"},{name:"PFX.macData.iterations",tagClass:t.Class.UNIVERSAL,type:t.Type.INTEGER,constructed:!1,optional:!0,capture:"macIterations"}]}]},o={name:"SafeBag",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"SafeBag.bagId",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"bagId"},{name:"SafeBag.bagValue",tagClass:t.Class.CONTEXT_SPECIFIC,constructed:!0,captureAsn1:"bagValue"},{name:"SafeBag.bagAttributes",tagClass:t.Class.UNIVERSAL,type:t.Type.SET,constructed:!0,optional:!0,capture:"bagAttributes"}]},u={name:"Attribute",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"Attribute.attrId",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"oid"},{name:"Attribute.attrValues",tagClass:t.Class.UNIVERSAL,type:t.Type.SET,constructed:!0,capture:"values"}]},a={name:"CertBag",tagClass:t.Class.UNIVERSAL,type:t.Type.SEQUENCE,constructed:!0,value:[{name:"CertBag.certId",tagClass:t.Class.UNIVERSAL,type:t.Type.OID,constructed:!1,capture:"certId"},{name:"CertBag.certValue",tagClass:t.Class.CONTEXT_SPECIFIC,constructed:!0,value:[{name:"CertBag.certValue[0]",tagClass:t.Class.UNIVERSAL,type:t.Class.OCTETSTRING,constructed:!1,capture:"cert"}]}]};r.pkcs12FromAsn1=function(i,o,u){typeof o=="string"?(u=o,o=!0):o===undefined&&(o=!0);var a={},h=[];if(!t.validate(i,s,a,h)){var p=new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.");throw p.errors=p,p}var d={version:a.version.charCodeAt(0),safeContents:[],getBags:function(t){var n={},r;return"localKeyId"in t?r=t.localKeyId:"localKeyIdHex"in t&&(r=e.util.hexToBytes(t.localKeyIdHex)),r===undefined&&!("friendlyName"in t)&&"bagType"in t&&(n[t.bagType]=f(d.safeContents,null,null,t.bagType)),r!==undefined&&(n.localKeyId=f(d.safeContents,"localKeyId",r,t.bagType)),"friendlyName"in t&&(n.friendlyName=f(d.safeContents,"friendlyName",t.friendlyName,t.bagType)),n},getBagsByFriendlyName:function(e,t){return f(d.safeContents,"friendlyName",e,t)},getBagsByLocalKeyId:function(e,t){return f(d.safeContents,"localKeyId",e,t)}};if(a.version.charCodeAt(0)!==3){var p=new Error("PKCS#12 PFX of version other than 3 not supported.");throw p.version=a.version.charCodeAt(0),p}if(t.derToOid(a.contentType)!==n.oids.data){var p=new Error("Only PKCS#12 PFX in password integrity mode supported.");throw p.oid=t.derToOid(a.contentType),p}var v=a.content.value[0];if(v.tagClass!==t.Class.UNIVERSAL||v.type!==t.Type.OCTETSTRING)throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");v=l(v);if(a.mac){var m=null,g=0,y=t.derToOid(a.macAlgorithm);switch(y){case n.oids.sha1:m=e.md.sha1.create(),g=20;break;case n.oids.sha256:m=e.md.sha256.create(),g=32;break;case n.oids.sha384:m=e.md.sha384.create(),g=48;break;case n.oids.sha512:m=e.md.sha512.create(),g=64;break;case n.oids.md5:m=e.md.md5.create(),g=16}if(m===null)throw new Error("PKCS#12 uses unsupported MAC algorithm: "+y);var b=new e.util.ByteBuffer(a.macSalt),w="macIterations"in a?parseInt(e.util.bytesToHex(a.macIterations),16):1,E=r.generateKey(u,b,3,w,g,m),S=e.hmac.create();S.start(m,E),S.update(v.value);var x=S.getMac();if(x.getBytes()!==a.macDigest)throw new Error("PKCS#12 MAC could not be verified. Invalid password?")}return c(d,v.value,o,u),d},r.toPkcs12Asn1=function(i,s,o,u){u=u||{},u.saltSize=u.saltSize||8,u.count=u.count||2048,u.algorithm=u.algorithm||u.encAlgorithm||"aes128","useMac"in u||(u.useMac=!0),"localKeyId"in u||(u.localKeyId=null),"generateLocalKeyId"in u||(u.generateLocalKeyId=!0);var a=u.localKeyId,f;if(a!==null)a=e.util.hexToBytes(a);else if(u.generateLocalKeyId)if(s){var l=e.util.isArray(s)?s[0]:s;typeof l=="string"&&(l=n.certificateFromPem(l));var c=e.md.sha1.create();c.update(t.toDer(n.certificateToAsn1(l)).getBytes()),a=c.digest().getBytes()}else a=e.random.getBytes(20);var h=[];a!==null&&h.push(t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.oids.localKeyId).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SET,!0,[t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,a)])])),"friendlyName"in u&&h.push(t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.oids.friendlyName).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SET,!0,[t.create(t.Class.UNIVERSAL,t.Type.BMPSTRING,!1,u.friendlyName)])])),h.length>0&&(f=t.create(t.Class.UNIVERSAL,t.Type.SET,!0,h));var p=[],d=[];s!==null&&(e.util.isArray(s)?d=s:d=[s]);var v=[];for(var m=0;m<d.length;++m){s=d[m],typeof s=="string"&&(s=n.certificateFromPem(s));var g=m===0?f:undefined,y=n.certificateToAsn1(s),b=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.oids.certBag).getBytes()),t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.oids.x509Certificate).getBytes()),t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,t.toDer(y).getBytes())])])]),g]);v.push(b)}if(v.length>0){var w=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,v),E=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.oids.data).getBytes()),t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,t.toDer(w).getBytes())])]);p.push(E)}var S=null;if(i!==null){var x=n.wrapRsaPrivateKey(n.privateKeyToAsn1(i));o===null?S=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.oids.keyBag).getBytes()),t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[x]),f]):S=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.oids.pkcs8ShroudedKeyBag).getBytes()),t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[n.encryptPrivateKeyInfo(x,o,u)]),f]);var T=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[S]),N=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.oids.data).getBytes()),t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,t.toDer(T).getBytes())])]);p.push(N)}var C=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,p),k;if(u.useMac){var c=e.md.sha1.create(),L=new e.util.ByteBuffer(e.random.getBytes(u.saltSize)),A=u.count,i=r.generateKey(o,L,3,A,20),O=e.hmac.create();O.start(c,i),O.update(t.toDer(C).getBytes());var M=O.getMac();k=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.oids.sha1).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.NULL,!1,"")]),t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,M.getBytes())]),t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,L.getBytes()),t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,t.integerToDer(A).getBytes())])}return t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,t.integerToDer(3).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.oids.data).getBytes()),t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,t.toDer(C).getBytes())])]),k])},r.generateKey=e.pbe.generatePkcs12Key}var r="pkcs12";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/pkcs12",["require","module","./asn1","./hmac","./oids","./pkcs7asn1","./pbe","./random","./rsa","./sha1","./util","./x509"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){var t=e.asn1,n=e.pki=e.pki||{};n.pemToDer=function(t){var n=e.pem.decode(t)[0];if(n.procType&&n.procType.type==="ENCRYPTED")throw new Error("Could not convert PEM to DER; PEM is encrypted.");return e.util.createBuffer(n.body)},n.privateKeyFromPem=function(r){var i=e.pem.decode(r)[0];if(i.type!=="PRIVATE KEY"&&i.type!=="RSA PRIVATE KEY"){var s=new Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');throw s.headerType=i.type,s}if(i.procType&&i.procType.type==="ENCRYPTED")throw new Error("Could not convert private key from PEM; PEM is encrypted.");var o=t.fromDer(i.body);return n.privateKeyFromAsn1(o)},n.privateKeyToPem=function(r,i){var s={type:"RSA PRIVATE KEY",body:t.toDer(n.privateKeyToAsn1(r)).getBytes()};return e.pem.encode(s,{maxline:i})},n.privateKeyInfoToPem=function(n,r){var i={type:"PRIVATE KEY",body:t.toDer(n).getBytes()};return e.pem.encode(i,{maxline:r})}}var r="pki";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/pki",["require","module","./asn1","./oids","./pbe","./pem","./pbkdf2","./pkcs12","./pss","./rsa","./util","./x509"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){var t=function(t,n,r,i){var s=e.util.createBuffer(),o=t.length>>1,u=o+(t.length&1),a=t.substr(0,u),f=t.substr(o,u),l=e.util.createBuffer(),c=e.hmac.create();r=n+r;var h=Math.ceil(i/16),p=Math.ceil(i/20);c.start("MD5",a);var d=e.util.createBuffer();l.putBytes(r);for(var v=0;v<h;++v)c.start(null,null),c.update(l.getBytes()),l.putBuffer(c.digest()),c.start(null,null),c.update(l.bytes()+r),d.putBuffer(c.digest());c.start("SHA1",f);var m=e.util.createBuffer();l.clear(),l.putBytes(r);for(var v=0;v<p;++v)c.start(null,null),c.update(l.getBytes()),l.putBuffer(c.digest()),c.start(null,null),c.update(l.bytes()+r),m.putBuffer(c.digest());return s.putBytes(e.util.xorBytes(d.getBytes(),m.getBytes(),i)),s},n=function(e,t,n,r){},r=function(t,n,r){var i=e.hmac.create();i.start("SHA1",t);var s=e.util.createBuffer();return s.putInt32(n[0]),s.putInt32(n[1]),s.putByte(r.type),s.putByte(r.version.major),s.putByte(r.version.minor),s.putInt16(r.length),s.putBytes(r.fragment.bytes()),i.update(s.getBytes()),i.digest().getBytes()},i=function(t,n,r){var i=!1;try{var s=t.deflate(n.fragment.getBytes());n.fragment=e.util.createBuffer(s),n.length=s.length,i=!0}catch(o){}return i},s=function(t,n,r){var i=!1;try{var s=t.inflate(n.fragment.getBytes());n.fragment=e.util.createBuffer(s),n.length=s.length,i=!0}catch(o){}return i},o=function(t,n){var r=0;switch(n){case 1:r=t.getByte();break;case 2:r=t.getInt16();break;case 3:r=t.getInt24();break;case 4:r=t.getInt32()}return e.util.createBuffer(t.getBytes(r))},u=function(e,t,n){e.putInt(n.length(),t<<3),e.putBuffer(n)},a={};a.Versions={TLS_1_0:{major:3,minor:1},TLS_1_1:{major:3,minor:2},TLS_1_2:{major:3,minor:3}},a.SupportedVersions=[a.Versions.TLS_1_1,a.Versions.TLS_1_0],a.Version=a.SupportedVersions[0],a.MaxFragment=15360,a.ConnectionEnd={server:0,client:1},a.PRFAlgorithm={tls_prf_sha256:0},a.BulkCipherAlgorithm={none:null,rc4:0,des3:1,aes:2},a.CipherType={stream:0,block:1,aead:2},a.MACAlgorithm={none:null,hmac_md5:0,hmac_sha1:1,hmac_sha256:2,hmac_sha384:3,hmac_sha512:4},a.CompressionMethod={none:0,deflate:1},a.ContentType={change_cipher_spec:20,alert:21,handshake:22,application_data:23,heartbeat:24},a.HandshakeType={hello_request:0,client_hello:1,server_hello:2,certificate:11,server_key_exchange:12,certificate_request:13,server_hello_done:14,certificate_verify:15,client_key_exchange:16,finished:20},a.Alert={},a.Alert.Level={warning:1,fatal:2},a.Alert.Description={close_notify:0,unexpected_message:10,bad_record_mac:20,decryption_failed:21,record_overflow:22,decompression_failure:30,handshake_failure:40,bad_certificate:42,unsupported_certificate:43,certificate_revoked:44,certificate_expired:45,certificate_unknown:46,illegal_parameter:47,unknown_ca:48,access_denied:49,decode_error:50,decrypt_error:51,export_restriction:60,protocol_version:70,insufficient_security:71,internal_error:80,user_canceled:90,no_renegotiation:100},a.HeartbeatMessageType={heartbeat_request:1,heartbeat_response:2},a.CipherSuites={},a.getCipherSuite=function(e){var t=null;for(var n in a.CipherSuites){var r=a.CipherSuites[n];if(r.id[0]===e.charCodeAt(0)&&r.id[1]===e.charCodeAt(1)){t=r;break}}return t},a.handleUnexpected=function(e,t){var n=!e.open&&e.entity===a.ConnectionEnd.client;n||e.error(e,{message:"Unexpected message. Received TLS record out of order.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.unexpected_message}})},a.handleHelloRequest=function(e,t,n){!e.handshaking&&e.handshakes>0&&(a.queue(e,a.createAlert(e,{level:a.Alert.Level.warning,description:a.Alert.Description.no_renegotiation})),a.flush(e)),e.process()},a.parseHelloMessage=function(t,n,r){var i=null,s=t.entity===a.ConnectionEnd.client;if(r<38)t.error(t,{message:s?"Invalid ServerHello message. Message too short.":"Invalid ClientHello message. Message too short.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.illegal_parameter}});else{var u=n.fragment,f=u.length();i={version:{major:u.getByte(),minor:u.getByte()},random:e.util.createBuffer(u.getBytes(32)),session_id:o(u,1),extensions:[]},s?(i.cipher_suite=u.getBytes(2),i.compression_method=u.getByte()):(i.cipher_suites=o(u,2),i.compression_methods=o(u,1)),f=r-(f-u.length());if(f>0){var l=o(u,2);while(l.length()>0)i.extensions.push({type:[l.getByte(),l.getByte()],data:o(l,2)});if(!s)for(var c=0;c<i.extensions.length;++c){var h=i.extensions[c];if(h.type[0]===0&&h.type[1]===0){var p=o(h.data,2);while(p.length()>0){var d=p.getByte();if(d!==0)break;t.session.extensions.server_name.serverNameList.push(o(p,2).getBytes())}}}}if(t.session.version)if(i.version.major!==t.session.version.major||i.version.minor!==t.session.version.minor)return t.error(t,{message:"TLS version change is disallowed during renegotiation.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.protocol_version}});if(s)t.session.cipherSuite=a.getCipherSuite(i.cipher_suite);else{var v=e.util.createBuffer(i.cipher_suites.bytes());while(v.length()>0){t.session.cipherSuite=a.getCipherSuite(v.getBytes(2));if(t.session.cipherSuite!==null)break}}if(t.session.cipherSuite===null)return t.error(t,{message:"No cipher suites in common.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.handshake_failure},cipherSuite:e.util.bytesToHex(i.cipher_suite)});s?t.session.compressionMethod=i.compression_method:t.session.compressionMethod=a.CompressionMethod.none}return i},a.createSecurityParameters=function(e,t){var n=e.entity===a.ConnectionEnd.client,r=t.random.bytes(),i=n?e.session.sp.client_random:r,s=n?r:a.createRandom().getBytes();e.session.sp={entity:e.entity,prf_algorithm:a.PRFAlgorithm.tls_prf_sha256,bulk_cipher_algorithm:null,cipher_type:null,enc_key_length:null,block_length:null,fixed_iv_length:null,record_iv_length:null,mac_algorithm:null,mac_length:null,mac_key_length:null,compression_algorithm:e.session.compressionMethod,pre_master_secret:null,master_secret:null,client_random:i,server_random:s}},a.handleServerHello=function(e,t,n){var r=a.parseHelloMessage(e,t,n);if(e.fail)return;if(!(r.version.minor<=e.version.minor))return e.error(e,{message:"Incompatible TLS version.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.protocol_version}});e.version.minor=r.version.minor,e.session.version=e.version;var i=r.session_id.bytes();i.length>0&&i===e.session.id?(e.expect=d,e.session.resuming=!0,e.session.sp.server_random=r.random.bytes()):(e.expect=l,e.session.resuming=!1,a.createSecurityParameters(e,r)),e.session.id=i,e.process()},a.handleClientHello=function(t,n,r){var i=a.parseHelloMessage(t,n,r);if(t.fail)return;var s=i.session_id.bytes(),o=null;if(t.sessionCache){o=t.sessionCache.getSession(s);if(o===null)s="";else if(o.version.major!==i.version.major||o.version.minor>i.version.minor)o=null,s=""}s.length===0&&(s=e.random.getBytes(32)),t.session.id=s,t.session.clientHelloVersion=i.version,t.session.sp={};if(o)t.version=t.session.version=o.version,t.session.sp=o.sp;else{var u;for(var f=1;f<a.SupportedVersions.length;++f){u=a.SupportedVersions[f];if(u.minor<=i.version.minor)break}t.version={major:u.major,minor:u.minor},t.session.version=t.version}o!==null?(t.expect=S,t.session.resuming=!0,t.session.sp.client_random=i.random.bytes()):(t.expect=t.verifyClient!==!1?b:w,t.session.resuming=!1,a.createSecurityParameters(t,i)),t.open=!0,a.queue(t,a.createRecord(t,{type:a.ContentType.handshake,data:a.createServerHello(t)})),t.session.resuming?(a.queue(t,a.createRecord(t,{type:a.ContentType.change_cipher_spec,data:a.createChangeCipherSpec()})),t.state.pending=a.createConnectionState(t),t.state.current.write=t.state.pending.write,a.queue(t,a.createRecord(t,{type:a.ContentType.handshake,data:a.createFinished(t)}))):(a.queue(t,a.createRecord(t,{type:a.ContentType.handshake,data:a.createCertificate(t)})),t.fail||(a.queue(t,a.createRecord(t,{type:a.ContentType.handshake,data:a.createServerKeyExchange(t)})),t.verifyClient!==!1&&a.queue(t,a.createRecord(t,{type:a.ContentType.handshake,data:a.createCertificateRequest(t)})),a.queue(t,a.createRecord(t,{type:a.ContentType.handshake,data:a.createServerHelloDone(t)})))),a.flush(t),t.process()},a.handleCertificate=function(t,n,r){if(r<3)return t.error(t,{message:"Invalid Certificate message. Message too short.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.illegal_parameter}});var i=n.fragment,s={certificate_list:o(i,3)},u,f,l=[];try{while(s.certificate_list.length()>0)u=o(s.certificate_list,3),f=e.asn1.fromDer(u),u=e.pki.certificateFromAsn1(f,!0),l.push(u)}catch(h){return t.error(t,{message:"Could not parse certificate list.",cause:h,send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.bad_certificate}})}var p=t.entity===a.ConnectionEnd.client;!p&&t.verifyClient!==!0||l.length!==0?l.length===0?t.expect=p?c:w:(p?t.session.serverCertificate=l[0]:t.session.clientCertificate=l[0],a.verifyCertificateChain(t,l)&&(t.expect=p?c:w)):t.error(t,{message:p?"No server certificate provided.":"No client certificate provided.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.illegal_parameter}}),t.process()},a.handleServerKeyExchange=function(e,t,n){if(n>0)return e.error(e,{message:"Invalid key parameters. Only RSA is supported.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.unsupported_certificate}});e.expect=h,e.process()},a.handleClientKeyExchange=function(t,n,r){if(r<48)return t.error(t,{message:"Invalid key parameters. Only RSA is supported.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.unsupported_certificate}});var i=n.fragment,s={enc_pre_master_secret:o(i,2).getBytes()},u=null;if(t.getPrivateKey)try{u=t.getPrivateKey(t,t.session.serverCertificate),u=e.pki.privateKeyFromPem(u)}catch(f){t.error(t,{message:"Could not get private key.",cause:f,send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.internal_error}})}if(u===null)return t.error(t,{message:"No private key set.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.internal_error}});try{var l=t.session.sp;l.pre_master_secret=u.decrypt(s.enc_pre_master_secret);var c=t.session.clientHelloVersion;if(c.major!==l.pre_master_secret.charCodeAt(0)||c.minor!==l.pre_master_secret.charCodeAt(1))throw new Error("TLS version rollback attack detected.")}catch(f){l.pre_master_secret=e.random.getBytes(48)}t.expect=S,t.session.clientCertificate!==null&&(t.expect=E),t.process()},a.handleCertificateRequest=function(e,t,n){if(n<3)return e.error(e,{message:"Invalid CertificateRequest. Message too short.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.illegal_parameter}});var r=t.fragment,i={certificate_types:o(r,1),certificate_authorities:o(r,2)};e.session.certificateRequest=i,e.expect=p,e.process()},a.handleCertificateVerify=function(t,n,r){if(r<2)return t.error(t,{message:"Invalid CertificateVerify. Message too short.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.illegal_parameter}});var i=n.fragment;i.read-=4;var s=i.bytes();i.read+=4;var u={signature:o(i,2).getBytes()},f=e.util.createBuffer();f.putBuffer(t.session.md5.digest()),f.putBuffer(t.session.sha1.digest()),f=f.getBytes();try{var l=t.session.clientCertificate;if(!l.publicKey.verify(f,u.signature,"NONE"))throw new Error("CertificateVerify signature does not match.");t.session.md5.update(s),t.session.sha1.update(s)}catch(c){return t.error(t,{message:"Bad signature in CertificateVerify.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.handshake_failure}})}t.expect=S,t.process()},a.handleServerHelloDone=function(t,n,r){if(r>0)return t.error(t,{message:"Invalid ServerHelloDone message. Invalid length.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.record_overflow}});if(t.serverCertificate===null){var i={message:"No server certificate provided. Not enough security.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.insufficient_security}},s=0,o=t.verify(t,i.alert.description,s,[]);if(o!==!0){if(o||o===0)typeof o=="object"&&!e.util.isArray(o)?(o.message&&(i.message=o.message),o.alert&&(i.alert.description=o.alert)):typeof o=="number"&&(i.alert.description=o);return t.error(t,i)}}t.session.certificateRequest!==null&&(n=a.createRecord(t,{type:a.ContentType.handshake,data:a.createCertificate(t)}),a.queue(t,n)),n=a.createRecord(t,{type:a.ContentType.handshake,data:a.createClientKeyExchange(t)}),a.queue(t,n),t.expect=g;var u=function(e,t){e.session.certificateRequest!==null&&e.session.clientCertificate!==null&&a.queue(e,a.createRecord(e,{type:a.ContentType.handshake,data:a.createCertificateVerify(e,t)})),a.queue(e,a.createRecord(e,{type:a.ContentType.change_cipher_spec,data:a.createChangeCipherSpec()})),e.state.pending=a.createConnectionState(e),e.state.current.write=e.state.pending.write,a.queue(e,a.createRecord(e,{type:a.ContentType.handshake,data:a.createFinished(e)})),e.expect=d,a.flush(e),e.process()};if(t.session.certificateRequest===null||t.session.clientCertificate===null)return u(t,null);a.getClientSignature(t,u)},a.handleChangeCipherSpec=function(e,t){if(t.fragment.getByte()!==1)return e.error(e,{message:"Invalid ChangeCipherSpec message received.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.illegal_parameter}});var n=e.entity===a.ConnectionEnd.client;if(e.session.resuming&&n||!e.session.resuming&&!n)e.state.pending=a.createConnectionState(e);e.state.current.read=e.state.pending.read;if(!e.session.resuming&&n||e.session.resuming&&!n)e.state.pending=null;e.expect=n?v:x,e.process()},a.handleFinished=function(n,r,i){var s=r.fragment;s.read-=4;var o=s.bytes();s.read+=4;var u=r.fragment.getBytes();s=e.util.createBuffer(),s.putBuffer(n.session.md5.digest()),s.putBuffer(n.session.sha1.digest());var f=n.entity===a.ConnectionEnd.client,l=f?"server finished":"client finished",c=n.session.sp,h=12,p=t;s=p(c.master_secret,l,s.getBytes(),h);if(s.getBytes()!==u)return n.error(n,{message:"Invalid verify_data in Finished message.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.decrypt_error}});n.session.md5.update(o),n.session.sha1.update(o);if(n.session.resuming&&f||!n.session.resuming&&!f)a.queue(n,a.createRecord(n,{type:a.ContentType.change_cipher_spec,data:a.createChangeCipherSpec()})),n.state.current.write=n.state.pending.write,n.state.pending=null,a.queue(n,a.createRecord(n,{type:a.ContentType.handshake,data:a.createFinished(n)}));n.expect=f?m:T,n.handshaking=!1,++n.handshakes,n.peerCertificate=f?n.session.serverCertificate:n.session.clientCertificate,a.flush(n),n.isConnected=!0,n.connected(n),n.process()},a.handleAlert=function(e,t){var n=t.fragment,r={level:n.getByte(),description:n.getByte()},i;switch(r.description){case a.Alert.Description.close_notify:i="Connection closed.";break;case a.Alert.Description.unexpected_message:i="Unexpected message.";break;case a.Alert.Description.bad_record_mac:i="Bad record MAC.";break;case a.Alert.Description.decryption_failed:i="Decryption failed.";break;case a.Alert.Description.record_overflow:i="Record overflow.";break;case a.Alert.Description.decompression_failure:i="Decompression failed.";break;case a.Alert.Description.handshake_failure:i="Handshake failure.";break;case a.Alert.Description.bad_certificate:i="Bad certificate.";break;case a.Alert.Description.unsupported_certificate:i="Unsupported certificate.";break;case a.Alert.Description.certificate_revoked:i="Certificate revoked.";break;case a.Alert.Description.certificate_expired:i="Certificate expired.";break;case a.Alert.Description.certificate_unknown:i="Certificate unknown.";break;case a.Alert.Description.illegal_parameter:i="Illegal parameter.";break;case a.Alert.Description.unknown_ca:i="Unknown certificate authority.";break;case a.Alert.Description.access_denied:i="Access denied.";break;case a.Alert.Description.decode_error:i="Decode error.";break;case a.Alert.Description.decrypt_error:i="Decrypt error.";break;case a.Alert.Description.export_restriction:i="Export restriction.";break;case a.Alert.Description.protocol_version:i="Unsupported protocol version.";break;case a.Alert.Description.insufficient_security:i="Insufficient security.";break;case a.Alert.Description.internal_error:i="Internal error.";break;case a.Alert.Description.user_canceled:i="User canceled.";break;case a.Alert.Description.no_renegotiation:i="Renegotiation not supported.";break;default:i="Unknown error."}if(r.description===a.Alert.Description.close_notify)return e.close();e.error(e,{message:i,send:!1,origin:e.entity===a.ConnectionEnd.client?"server":"client",alert:r}),e.process()},a.handleHandshake=function(t,n){var r=n.fragment,i=r.getByte(),s=r.getInt24();if(s>r.length())return t.fragmented=n,n.fragment=e.util.createBuffer(),r.read-=4,t.process();t.fragmented=null,r.read-=4;var o=r.bytes(s+4);r.read+=4,i in q[t.entity][t.expect]?(t.entity===a.ConnectionEnd.server&&!t.open&&!t.fail&&(t.handshaking=!0,t.session={version:null,extensions:{server_name:{serverNameList:[]}},cipherSuite:null,compressionMethod:null,serverCertificate:null,clientCertificate:null,md5:e.md.md5.create(),sha1:e.md.sha1.create()}),i!==a.HandshakeType.hello_request&&i!==a.HandshakeType.certificate_verify&&i!==a.HandshakeType.finished&&(t.session.md5.update(o),t.session.sha1.update(o)),q[t.entity][t.expect][i](t,n,s)):a.handleUnexpected(t,n)},a.handleApplicationData=function(e,t){e.data.putBuffer(t.fragment),e.dataReady(e),e.process()},a.handleHeartbeat=function(t,n){var r=n.fragment,i=r.getByte(),s=r.getInt16(),o=r.getBytes(s);if(i===a.HeartbeatMessageType.heartbeat_request){if(t.handshaking||s>o.length)return t.process();a.queue(t,a.createRecord(t,{type:a.ContentType.heartbeat,data:a.createHeartbeat(a.HeartbeatMessageType.heartbeat_response,o)})),a.flush(t)}else if(i===a.HeartbeatMessageType.heartbeat_response){if(o!==t.expectedHeartbeatPayload)return t.process();t.heartbeatReceived&&t.heartbeatReceived(t,e.util.createBuffer(o))}t.process()};var f=0,l=1,c=2,h=3,p=4,d=5,v=6,m=7,g=8,y=0,b=1,w=2,E=3,S=4,x=5,T=6,N=7,C=a.handleUnexpected,k=a.handleChangeCipherSpec,L=a.handleAlert,A=a.handleHandshake,O=a.handleApplicationData,M=a.handleHeartbeat,_=[];_[a.ConnectionEnd.client]=[[C,L,A,C,M],[C,L,A,C,M],[C,L,A,C,M],[C,L,A,C,M],[C,L,A,C,M],[k,L,C,C,M],[C,L,A,C,M],[C,L,A,O,M],[C,L,A,C,M]],_[a.ConnectionEnd.server]=[[C,L,A,C,M],[C,L,A,C,M],[C,L,A,C,M],[C,L,A,C,M],[k,L,C,C,M],[C,L,A,C,M],[C,L,A,O,M],[C,L,A,C,M]];var D=a.handleHelloRequest,P=a.handleServerHello,H=a.handleCertificate,B=a.handleServerKeyExchange,j=a.handleCertificateRequest,F=a.handleServerHelloDone,I=a.handleFinished,q=[];q[a.ConnectionEnd.client]=[[C,C,P,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C],[D,C,C,C,C,C,C,C,C,C,C,H,B,j,F,C,C,C,C,C,C],[D,C,C,C,C,C,C,C,C,C,C,C,B,j,F,C,C,C,C,C,C],[D,C,C,C,C,C,C,C,C,C,C,C,C,j,F,C,C,C,C,C,C],[D,C,C,C,C,C,C,C,C,C,C,C,C,C,F,C,C,C,C,C,C],[D,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C],[D,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,I],[D,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C],[D,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C]];var R=a.handleClientHello,U=a.handleClientKeyExchange,z=a.handleCertificateVerify;q[a.ConnectionEnd.server]=[[C,R,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C],[C,C,C,C,C,C,C,C,C,C,C,H,C,C,C,C,C,C,C,C,C],[C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,U,C,C,C,C],[C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,z,C,C,C,C,C],[C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C],[C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,I],[C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C],[C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C,C]],a.generateKeys=function(e,n){var r=t,i=n.client_random+n.server_random;e.session.resuming||(n.master_secret=r(n.pre_master_secret,"master secret",i,48).bytes(),n.pre_master_secret=null),i=n.server_random+n.client_random;var s=2*n.mac_key_length+2*n.enc_key_length,o=e.version.major===a.Versions.TLS_1_0.major&&e.version.minor===a.Versions.TLS_1_0.minor;o&&(s+=2*n.fixed_iv_length);var u=r(n.master_secret,"key expansion",i,s),f={client_write_MAC_key:u.getBytes(n.mac_key_length),server_write_MAC_key:u.getBytes(n.mac_key_length),client_write_key:u.getBytes(n.enc_key_length),server_write_key:u.getBytes(n.enc_key_length)};return o&&(f.client_write_IV=u.getBytes(n.fixed_iv_length),f.server_write_IV=u.getBytes(n.fixed_iv_length)),f},a.createConnectionState=function(e){var t=e.entity===a.ConnectionEnd.client,n=function(){var e={sequenceNumber:[0,0],macKey:null,macLength:0,macFunction:null,cipherState:null,cipherFunction:function(e){return!0},compressionState:null,compressFunction:function(e){return!0},updateSequenceNumber:function(){e.sequenceNumber[1]===4294967295?(e.sequenceNumber[1]=0,++e.sequenceNumber[0]):++e.sequenceNumber[1]}};return e},r={read:n(),write:n()};r.read.update=function(e,t){return r.read.cipherFunction(t,r.read)?r.read.compressFunction(e,t,r.read)||e.error(e,{message:"Could not decompress record.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.decompression_failure}}):e.error(e,{message:"Could not decrypt record or bad MAC.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.bad_record_mac}}),!e.fail},r.write.update=function(e,t){return r.write.compressFunction(e,t,r.write)?r.write.cipherFunction(t,r.write)||e.error(e,{message:"Could not encrypt record.",send:!1,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.internal_error}}):e.error(e,{message:"Could not compress record.",send:!1,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.internal_error}}),!e.fail};if(e.session){var o=e.session.sp;e.session.cipherSuite.initSecurityParameters(o),o.keys=a.generateKeys(e,o),r.read.macKey=t?o.keys.server_write_MAC_key:o.keys.client_write_MAC_key,r.write.macKey=t?o.keys.client_write_MAC_key:o.keys.server_write_MAC_key,e.session.cipherSuite.initConnectionState(r,e,o);switch(o.compression_algorithm){case a.CompressionMethod.none:break;case a.CompressionMethod.deflate:r.read.compressFunction=s,r.write.compressFunction=i;break;default:throw new Error("Unsupported compression algorithm.")}}return r},a.createRandom=function(){var t=new Date,n=+t+t.getTimezoneOffset()*6e4,r=e.util.createBuffer();return r.putInt32(n),r.putBytes(e.random.getBytes(28)),r},a.createRecord=function(e,t){if(!t.data)return null;var n={type:t.type,version:{major:e.version.major,minor:e.version.minor},length:t.data.length(),fragment:t.data};return n},a.createAlert=function(t,n){var r=e.util.createBuffer();return r.putByte(n.level),r.putByte(n.description),a.createRecord(t,{type:a.ContentType.alert,data:r})},a.createClientHello=function(t){t.session.clientHelloVersion={major:t.version.major,minor:t.version.minor};var n=e.util.createBuffer();for(var r=0;r<t.cipherSuites.length;++r){var i=t.cipherSuites[r];n.putByte(i.id[0]),n.putByte(i.id[1])}var s=n.length(),o=e.util.createBuffer();o.putByte(a.CompressionMethod.none);var f=o.length(),l=e.util.createBuffer();if(t.virtualHost){var c=e.util.createBuffer();c.putByte(0),c.putByte(0);var h=e.util.createBuffer();h.putByte(0),u(h,2,e.util.createBuffer(t.virtualHost));var p=e.util.createBuffer();u(p,2,h),u(c,2,p),l.putBuffer(c)}var d=l.length();d>0&&(d+=2);var v=t.session.id,m=v.length+1+2+4+28+2+s+1+f+d,g=e.util.createBuffer();return g.putByte(a.HandshakeType.client_hello),g.putInt24(m),g.putByte(t.version.major),g.putByte(t.version.minor),g.putBytes(t.session.sp.client_random),u(g,1,e.util.createBuffer(v)),u(g,2,n),u(g,1,o),d>0&&u(g,2,l),g},a.createServerHello=function(t){var n=t.session.id,r=n.length+1+2+4+28+2+1,i=e.util.createBuffer();return i.putByte(a.HandshakeType.server_hello),i.putInt24(r),i.putByte(t.version.major),i.putByte(t.version.minor),i.putBytes(t.session.sp.server_random),u(i,1,e.util.createBuffer(n)),i.putByte(t.session.cipherSuite.id[0]),i.putByte(t.session.cipherSuite.id[1]),i.putByte(t.session.compressionMethod),i},a.createCertificate=function(t){var n=t.entity===a.ConnectionEnd.client,r=null;if(t.getCertificate){var i;n?i=t.session.certificateRequest:i=t.session.extensions.server_name.serverNameList,r=t.getCertificate(t,i)}var s=e.util.createBuffer();if(r!==null)try{e.util.isArray(r)||(r=[r]);var o=null;for(var f=0;f<r.length;++f){var l=e.pem.decode(r[f])[0];if(l.type!=="CERTIFICATE"&&l.type!=="X509 CERTIFICATE"&&l.type!=="TRUSTED CERTIFICATE"){var c=new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');throw c.headerType=l.type,c}if(l.procType&&l.procType.type==="ENCRYPTED")throw new Error("Could not convert certificate from PEM; PEM is encrypted.");var h=e.util.createBuffer(l.body);o===null&&(o=e.asn1.fromDer(h.bytes(),!1));var p=e.util.createBuffer();u(p,3,h),s.putBuffer(p)}r=e.pki.certificateFromAsn1(o),n?t.session.clientCertificate=r:t.session.serverCertificate=r}catch(d){return t.error(t,{message:"Could not send certificate list.",cause:d,send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.bad_certificate}})}var v=3+s.length(),m=e.util.createBuffer();return m.putByte(a.HandshakeType.certificate),m.putInt24(v),u(m,3,s),m},a.createClientKeyExchange=function(t){var n=e.util.createBuffer();n.putByte(t.session.clientHelloVersion.major),n.putByte(t.session.clientHelloVersion.minor),n.putBytes(e.random.getBytes(46));var r=t.session.sp;r.pre_master_secret=n.getBytes();var i=t.session.serverCertificate.publicKey;n=i.encrypt(r.pre_master_secret);var s=n.length+2,o=e.util.createBuffer();return o.putByte(a.HandshakeType.client_key_exchange),o.putInt24(s),o.putInt16(n.length),o.putBytes(n),o},a.createServerKeyExchange=function(t){var n=0,r=e.util.createBuffer();return n>0&&(r.putByte(a.HandshakeType.server_key_exchange),r.putInt24(n)),r},a.getClientSignature=function(t,n){var r=e.util.createBuffer();r.putBuffer(t.session.md5.digest()),r.putBuffer(t.session.sha1.digest()),r=r.getBytes(),t.getSignature=t.getSignature||function(t,n,r){var i=null;if(t.getPrivateKey)try{i=t.getPrivateKey(t,t.session.clientCertificate),i=e.pki.privateKeyFromPem(i)}catch(s){t.error(t,{message:"Could not get private key.",cause:s,send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.internal_error}})}i===null?t.error(t,{message:"No private key set.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.internal_error}}):n=i.sign(n,null),r(t,n)},t.getSignature(t,r,n)},a.createCertificateVerify=function(t,n){var r=n.length+2,i=e.util.createBuffer();return i.putByte(a.HandshakeType.certificate_verify),i.putInt24(r),i.putInt16(n.length),i.putBytes(n),i},a.createCertificateRequest=function(t){var n=e.util.createBuffer();n.putByte(1);var r=e.util.createBuffer();for(var i in t.caStore.certs){var s=t.caStore.certs[i],o=e.pki.distinguishedNameToAsn1(s.subject),f=e.asn1.toDer(o);r.putInt16(f.length()),r.putBuffer(f)}var l=1+n.length()+2+r.length(),c=e.util.createBuffer();return c.putByte(a.HandshakeType.certificate_request),c.putInt24(l),u(c,1,n),u(c,2,r),c},a.createServerHelloDone=function(t){var n=e.util.createBuffer();return n.putByte(a.HandshakeType.server_hello_done),n.putInt24(0),n},a.createChangeCipherSpec=function(){var t=e.util.createBuffer();return t.putByte(1),t},a.createFinished=function(n){var r=e.util.createBuffer();r.putBuffer(n.session.md5.digest()),r.putBuffer(n.session.sha1.digest());var i=n.entity===a.ConnectionEnd.client,s=n.session.sp,o=12,u=t,f=i?"client finished":"server finished";r=u(s.master_secret,f,r.getBytes(),o);var l=e.util.createBuffer();return l.putByte(a.HandshakeType.finished),l.putInt24(r.length()),l.putBuffer(r),l},a.createHeartbeat=function(t,n,r){typeof r=="undefined"&&(r=n.length);var i=e.util.createBuffer();i.putByte(t),i.putInt16(r),i.putBytes(n);var s=i.length(),o=Math.max(16,s-r-3);return i.putBytes(e.random.getBytes(o)),i},a.queue=function(t,n){if(!n)return;if(n.fragment.length()===0)if(n.type===a.ContentType.handshake||n.type===a.ContentType.alert||n.type===a.ContentType.change_cipher_spec)return;if(n.type===a.ContentType.handshake){var r=n.fragment.bytes();t.session.md5.update(r),t.session.sha1.update(r),r=null}var i;if(n.fragment.length()<=a.MaxFragment)i=[n];else{i=[];var s=n.fragment.bytes();while(s.length>a.MaxFragment)i.push(a.createRecord(t,{type:n.type,data:e.util.createBuffer(s.slice(0,a.MaxFragment))})),s=s.slice(a.MaxFragment);s.length>0&&i.push(a.createRecord(t,{type:n.type,data:e.util.createBuffer(s)}))}for(var o=0;o<i.length&&!t.fail;++o){var u=i[o],f=t.state.current.write;f.update(t,u)&&t.records.push(u)}},a.flush=function(e){for(var t=0;t<e.records.length;++t){var n=e.records[t];e.tlsData.putByte(n.type),e.tlsData.putByte(n.version.major),e.tlsData.putByte(n.version.minor),e.tlsData.putInt16(n.fragment.length()),e.tlsData.putBuffer(e.records[t].fragment)}return e.records=[],e.tlsDataReady(e)};var W=function(t){switch(t){case!0:return!0;case e.pki.certificateError.bad_certificate:return a.Alert.Description.bad_certificate;case e.pki.certificateError.unsupported_certificate:return a.Alert.Description.unsupported_certificate;case e.pki.certificateError.certificate_revoked:return a.Alert.Description.certificate_revoked;case e.pki.certificateError.certificate_expired:return a.Alert.Description.certificate_expired;case e.pki.certificateError.certificate_unknown:return a.Alert.Description.certificate_unknown;case e.pki.certificateError.unknown_ca:return a.Alert.Description.unknown_ca;default:return a.Alert.Description.bad_certificate}},X=function(t){switch(t){case!0:return!0;case a.Alert.Description.bad_certificate:return e.pki.certificateError.bad_certificate;case a.Alert.Description.unsupported_certificate:return e.pki.certificateError.unsupported_certificate;case a.Alert.Description.certificate_revoked:return e.pki.certificateError.certificate_revoked;case a.Alert.Description.certificate_expired:return e.pki.certificateError.certificate_expired;case a.Alert.Description.certificate_unknown:return e.pki.certificateError.certificate_unknown;case a.Alert.Description.unknown_ca:return e.pki.certificateError.unknown_ca;default:return e.pki.certificateError.bad_certificate}};a.verifyCertificateChain=function(t,n){try{e.pki.verifyCertificateChain(t.caStore,n,function(r,i,s){var o=W(r),u=t.verify(t,r,i,s);if(u!==!0){if(typeof u=="object"&&!e.util.isArray(u)){var f=new Error("The application rejected the certificate.");throw f.send=!0,f.alert={level:a.Alert.Level.fatal,description:a.Alert.Description.bad_certificate},u.message&&(f.message=u.message),u.alert&&(f.alert.description=u.alert),f}u!==r&&(u=X(u))}return u})}catch(r){var i=r;if(typeof i!="object"||e.util.isArray(i))i={send:!0,alert:{level:a.Alert.Level.fatal,description:W(r)}};"send"in i||(i.send=!0),"alert"in i||(i.alert={level:a.Alert.Level.fatal,description:W(i.error)}),t.error(t,i)}return!t.fail},a.createSessionCache=function(t,n){var r=null;if(t&&t.getSession&&t.setSession&&t.order)r=t;else{r={},r.cache=t||{},r.capacity=Math.max(n||100,1),r.order=[];for(var i in t)r.order.length<=n?r.order.push(i):delete t[i];r.getSession=function(t){var n=null,i=null;t?i=e.util.bytesToHex(t):r.order.length>0&&(i=r.order[0]);if(i!==null&&i in r.cache){n=r.cache[i],delete r.cache[i];for(var s in r.order)if(r.order[s]===i){r.order.splice(s,1);break}}return n},r.setSession=function(t,n){if(r.order.length===r.capacity){var i=r.order.shift();delete r.cache[i]}var i=e.util.bytesToHex(t);r.order.push(i),r.cache[i]=n}}return r},a.createConnection=function(t){var n=null;t.caStore?e.util.isArray(t.caStore)?n=e.pki.createCaStore(t.caStore):n=t.caStore:n=e.pki.createCaStore();var r=t.cipherSuites||null;if(r===null){r=[];for(var i in a.CipherSuites)r.push(a.CipherSuites[i])}var s=t.server||!1?a.ConnectionEnd.server:a.ConnectionEnd.client,o=t.sessionCache?a.createSessionCache(t.sessionCache):null,u={version:{major:a.Version.major,minor:a.Version.minor},entity:s,sessionId:t.sessionId,caStore:n,sessionCache:o,cipherSuites:r,connected:t.connected,virtualHost:t.virtualHost||null,verifyClient:t.verifyClient||!1,verify:t.verify||function(e,t,n,r){return t},getCertificate:t.getCertificate||null,getPrivateKey:t.getPrivateKey||null,getSignature:t.getSignature||null,input:e.util.createBuffer(),tlsData:e.util.createBuffer(),data:e.util.createBuffer(),tlsDataReady:t.tlsDataReady,dataReady:t.dataReady,heartbeatReceived:t.heartbeatReceived,closed:t.closed,error:function(e,n){n.origin=n.origin||(e.entity===a.ConnectionEnd.client?"client":"server"),n.send&&(a.queue(e,a.createAlert(e,n.alert)),a.flush(e));var r=n.fatal!==!1;r&&(e.fail=!0),t.error(e,n),r&&e.close(!1)},deflate:t.deflate||null,inflate:t.inflate||null};u.reset=function(e){u.version={major:a.Version.major,minor:a.Version.minor},u.record=null,u.session=null,u.peerCertificate=null,u.state={pending:null,current:null},u.expect=u.entity===a.ConnectionEnd.client?f:y,u.fragmented=null,u.records=[],u.open=!1,u.handshakes=0,u.handshaking=!1,u.isConnected=!1,u.fail=!e&&typeof e!="undefined",u.input.clear(),u.tlsData.clear(),u.data.clear(),u.state.current=a.createConnectionState(u)},u.reset();var l=function(e,t){var n=t.type-a.ContentType.change_cipher_spec,r=_[e.entity][e.expect];n in r?r[n](e,t):a.handleUnexpected(e,t)},c=function(t){var n=0,r=t.input,i=r.length();if(i<5)n=5-i;else{t.record={type:r.getByte(),version:{major:r.getByte(),minor:r.getByte()},length:r.getInt16(),fragment:e.util.createBuffer(),ready:!1};var s=t.record.version.major===t.version.major;s&&t.session&&t.session.version&&(s=t.record.version.minor===t.version.minor),s||t.error(t,{message:"Incompatible TLS version.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.protocol_version}})}return n},h=function(e){var t=0,n=e.input,r=n.length();if(r<e.record.length)t=e.record.length-r;else{e.record.fragment.putBytes(n.getBytes(e.record.length)),n.compact();var i=e.state.current.read;i.update(e,e.record)&&(e.fragmented!==null&&(e.fragmented.type===e.record.type?(e.fragmented.fragment.putBuffer(e.record.fragment),e.record=e.fragmented):e.error(e,{message:"Invalid fragmented record.",send:!0,alert:{level:a.Alert.Level.fatal,description:a.Alert.Description.unexpected_message}})),e.record.ready=!0)}return t};return u.handshake=function(t){if(u.entity!==a.ConnectionEnd.client)u.error(u,{message:"Cannot initiate handshake as a server.",fatal:!1});else if(u.handshaking)u.error(u,{message:"Handshake already in progress.",fatal:!1});else{u.fail&&!u.open&&u.handshakes===0&&(u.fail=!1),u.handshaking=!0,t=t||"";var n=null;t.length>0&&(u.sessionCache&&(n=u.sessionCache.getSession(t)),n===null&&(t="")),t.length===0&&u.sessionCache&&(n=u.sessionCache.getSession(),n!==null&&(t=n.id)),u.session={id:t,version:null,cipherSuite:null,compressionMethod:null,serverCertificate:null,certificateRequest:null,clientCertificate:null,sp:{},md5:e.md.md5.create(),sha1:e.md.sha1.create()},n&&(u.version=n.version,u.session.sp=n.sp),u.session.sp.client_random=a.createRandom().getBytes(),u.open=!0,a.queue(u,a.createRecord(u,{type:a.ContentType.handshake,data:a.createClientHello(u)})),a.flush(u)}},u.process=function(e){var t=0;return e&&u.input.putBytes(e),u.fail||(u.record!==null&&u.record.ready&&u.record.fragment.isEmpty()&&(u.record=null),u.record===null&&(t=c(u)),!u.fail&&u.record!==null&&!u.record.ready&&(t=h(u)),!u.fail&&u.record!==null&&u.record.ready&&l(u,u.record)),t},u.prepare=function(t){return a.queue(u,a.createRecord(u,{type:a.ContentType.application_data,data:e.util.createBuffer(t)})),a.flush(u)},u.prepareHeartbeatRequest=function(t,n){return t instanceof e.util.ByteBuffer&&(t=t.bytes()),typeof n=="undefined"&&(n=t.length),u.expectedHeartbeatPayload=t,a.queue(u,a.createRecord(u,{type:a.ContentType.heartbeat,data:a.createHeartbeat(a.HeartbeatMessageType.heartbeat_request,t,n)})),a.flush(u)},u.close=function(e){if(!u.fail&&u.sessionCache&&u.session){var t={id:u.session.id,version:u.session.version,sp:u.session.sp};t.sp.keys=null,u.sessionCache.setSession(t.id,t)}if(u.open){u.open=!1,u.input.clear();if(u.isConnected||u.handshaking)u.isConnected=u.handshaking=!1,a.queue(u,a.createAlert(u,{level:a.Alert.Level.warning,description:a.Alert.Description.close_notify})),a.flush(u);u.closed(u)}u.reset(e)},u},e.tls=e.tls||{};for(var V in a)typeof a[V]!="function"&&(e.tls[V]=a[V]);e.tls.prf_tls1=t,e.tls.hmac_sha1=r,e.tls.createSessionCache=a.createSessionCache,e.tls.createConnection=a.createConnection}var r="tls";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/tls",["require","module","./asn1","./hmac","./md","./pem","./pki","./random","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function n(n,i,s){var o=i.entity===e.tls.ConnectionEnd.client;n.read.cipherState={init:!1,cipher:e.cipher.createDecipher("AES-CBC",o?s.keys.server_write_key:s.keys.client_write_key),iv:o?s.keys.server_write_IV:s.keys.client_write_IV},n.write.cipherState={init:!1,cipher:e.cipher.createCipher("AES-CBC",o?s.keys.client_write_key:s.keys.server_write_key),iv:o?s.keys.client_write_IV:s.keys.server_write_IV},n.read.cipherFunction=u,n.write.cipherFunction=r,n.read.macLength=n.write.macLength=s.mac_length,n.read.macFunction=n.write.macFunction=t.hmac_sha1}function r(n,r){var s=!1,o=r.macFunction(r.macKey,r.sequenceNumber,n);n.fragment.putBytes(o),r.updateSequenceNumber();var u;n.version.minor===t.Versions.TLS_1_0.minor?u=r.cipherState.init?null:r.cipherState.iv:u=e.random.getBytesSync(16),r.cipherState.init=!0;var a=r.cipherState.cipher;return a.start({iv:u}),n.version.minor>=t.Versions.TLS_1_1.minor&&a.output.putBytes(u),a.update(n.fragment),a.finish(i)&&(n.fragment=a.output,n.length=n.fragment.length(),s=!0),s}function i(e,t,n){if(!n){var r=e-t.length()%e;t.fillWithByte(r-1,r)}return!0}function s(e,t,n){var r=!0;if(n){var i=t.length(),s=t.last();for(var o=i-1-s;o<i-1;++o)r=r&&t.at(o)==s;r&&t.truncate(s+1)}return r}function u(n,r){var i=!1;++o;var u;n.version.minor===t.Versions.TLS_1_0.minor?u=r.cipherState.init?null:r.cipherState.iv:u=n.fragment.getBytes(16),r.cipherState.init=!0;var f=r.cipherState.cipher;f.start({iv:u}),f.update(n.fragment),i=f.finish(s);var l=r.macLength,c=e.random.getBytesSync(l),h=f.output.length();h>=l?(n.fragment=f.output.getBytes(h-l),c=f.output.getBytes(l)):n.fragment=f.output.getBytes(),n.fragment=e.util.createBuffer(n.fragment),n.length=n.fragment.length();var p=r.macFunction(r.macKey,r.sequenceNumber,n);return r.updateSequenceNumber(),i=a(r.macKey,c,p)&&i,i}function a(t,n,r){var i=e.hmac.create();return i.start("SHA1",t),i.update(n),n=i.digest().getBytes(),i.start(null,null),i.update(r),r=i.digest().getBytes(),n===r}var t=e.tls;t.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA={id:[0,47],name:"TLS_RSA_WITH_AES_128_CBC_SHA",initSecurityParameters:function(e){e.bulk_cipher_algorithm=t.BulkCipherAlgorithm.aes,e.cipher_type=t.CipherType.block,e.enc_key_length=16,e.block_length=16,e.fixed_iv_length=16,e.record_iv_length=16,e.mac_algorithm=t.MACAlgorithm.hmac_sha1,e.mac_length=20,e.mac_key_length=20},initConnectionState:n},t.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA={id:[0,53],name:"TLS_RSA_WITH_AES_256_CBC_SHA",initSecurityParameters:function(e){e.bulk_cipher_algorithm=t.BulkCipherAlgorithm.aes,e.cipher_type=t.CipherType.block,e.enc_key_length=32,e.block_length=16,e.fixed_iv_length=16,e.record_iv_length=16,e.mac_algorithm=t.MACAlgorithm.hmac_sha1,e.mac_length=20,e.mac_key_length=20},initConnectionState:n};var o=0}var r="aesCipherSuites";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/aesCipherSuites",["require","module","./aes","./tls"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){e.debug=e.debug||{},e.debug.storage={},e.debug.get=function(t,n){var r;return typeof t=="undefined"?r=e.debug.storage:t in e.debug.storage&&(typeof n=="undefined"?r=e.debug.storage[t]:r=e.debug.storage[t][n]),r},e.debug.set=function(t,n,r){t in e.debug.storage||(e.debug.storage[t]={}),e.debug.storage[t][n]=r},e.debug.clear=function(t,n){typeof t=="undefined"?e.debug.storage={}:t in e.debug.storage&&(typeof n=="undefined"?delete e.debug.storage[t]:delete e.debug.storage[t][n])}}var r="debug";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/debug",["require","module"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function n(t,n,r,i){t.generate=function(t,s){var o=new e.util.ByteBuffer,u=Math.ceil(s/i)+r,a=new e.util.ByteBuffer;for(var f=r;f<u;++f){a.putInt32(f),n.start(),n.update(t+a.getBytes());var l=n.digest();o.putBytes(l.getBytes(i))}return o.truncate(o.length()-s),o.getBytes()}}e.kem=e.kem||{};var t=e.jsbn.BigInteger;e.kem.rsa={},e.kem.rsa.create=function(n,r){r=r||{};var i=r.prng||e.random,s={};return s.encrypt=function(r,s){var o=Math.ceil(r.n.bitLength()/8),u;do u=(new t(e.util.bytesToHex(i.getBytesSync(o)),16)).mod(r.n);while(u.equals(t.ZERO));u=e.util.hexToBytes(u.toString(16));var a=o-u.length;a>0&&(u=e.util.fillString(String.fromCharCode(0),a)+u);var f=r.encrypt(u,"NONE"),l=n.generate(u,s);return{encapsulation:f,key:l}},s.decrypt=function(e,t,r){var i=e.decrypt(t,"NONE");return n.generate(i,r)},s},e.kem.kdf1=function(e,t){n(this,e,0,t||e.digestLength)},e.kem.kdf2=function(e,t){n(this,e,1,t||e.digestLength)}}var r="kem";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/kem",["require","module","./util","./random","./jsbn"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){e.log=e.log||{},e.log.levels=["none","error","warning","info","debug","verbose","max"];var t={},n=[],r=null;e.log.LEVEL_LOCKED=2,e.log.NO_LEVEL_CHECK=4,e.log.INTERPOLATE=8;for(var i=0;i<e.log.levels.length;++i){var s=e.log.levels[i];t[s]={index:i,name:s.toUpperCase()}}e.log.logMessage=function(r){var i=t[r.level].index;for(var s=0;s<n.length;++s){var o=n[s];if(o.flags&e.log.NO_LEVEL_CHECK)o.f(r);else{var u=t[o.level].index;i<=u&&o.f(o,r)}}},e.log.prepareStandard=function(e){"standard"in e||(e.standard=t[e.level].name+" ["+e.category+"] "+e.message)},e.log.prepareFull=function(t){if(!("full"in t)){var n=[t.message];n=n.concat([]||t.arguments),t.full=e.util.format.apply(this,n)}},e.log.prepareStandardFull=function(t){"standardFull"in t||(e.log.prepareStandard(t),t.standardFull=t.standard)};var o=["error","warning","info","debug","verbose"];for(var i=0;i<o.length;++i)(function(t){e.log[t]=function(n,r){var i=Array.prototype.slice.call(arguments).slice(2),s={timestamp:new Date,level:t,category:n,message:r,arguments:i};e.log.logMessage(s)}})(o[i]);e.log.makeLogger=function(t){var n={flags:0,f:t};return e.log.setLevel(n,"none"),n},e.log.setLevel=function(t,n){var r=!1;if(t&&!(t.flags&e.log.LEVEL_LOCKED))for(var i=0;i<e.log.levels.length;++i){var s=e.log.levels[i];if(n==s){t.level=n,r=!0;break}}return r},e.log.lock=function(t,n){typeof n=="undefined"||n?t.flags|=e.log.LEVEL_LOCKED:t.flags&=~e.log.LEVEL_LOCKED},e.log.addLogger=function(e){n.push(e)};if(typeof console!="undefined"&&"log"in console){var u;if(console.error&&console.warn&&console.info&&console.debug){var a={error:console.error,warning:console.warn,info:console.info,debug:console.debug,verbose:console.debug},f=function(t,n){e.log.prepareStandard(n);var r=a[n.level],i=[n.standard];i=i.concat(n.arguments.slice()),r.apply(console,i)};u=e.log.makeLogger(f)}else{var f=function(t,n){e.log.prepareStandardFull(n),console.log(n.standardFull)};u=e.log.makeLogger(f)}e.log.setLevel(u,"debug"),e.log.addLogger(u),r=u}else console={log:function(){}};if(r!==null){var l=e.util.getQueryVariables();"console.level"in l&&e.log.setLevel(r,l["console.level"].slice(-1)[0]);if("console.lock"in l){var c=l["console.lock"].slice(-1)[0];c=="true"&&e.log.lock(r)}}e.log.consoleLogger=r}var r="log";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/log",["require","module","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function r(r){var i={},s=[];if(!t.validate(r,n.asn1.recipientInfoValidator,i,s)){var o=new Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");throw o.errors=s,o}return{version:i.version.charCodeAt(0),issuer:e.pki.RDNAttributesAsArray(i.issuer),serialNumber:e.util.createBuffer(i.serial).toHex(),encryptedContent:{algorithm:t.derToOid(i.encAlgorithm),parameter:i.encParameter.value,content:i.encKey}}}function i(n){return t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,t.integerToDer(n.version).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[e.pki.distinguishedNameToAsn1({attributes:n.issuer}),t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,e.util.hexToBytes(n.serialNumber))]),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.encryptedContent.algorithm).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.NULL,!1,"")]),t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,n.encryptedContent.content)])}function s(e){var t=[];for(var n=0;n<e.length;++n)t.push(r(e[n]));return t}function o(e){var t=[];for(var n=0;n<e.length;++n)t.push(i(e[n]));return t}function u(r){var i={},s=[];if(!t.validate(r,n.asn1.signerInfoValidator,i,s)){var o=new Error("Cannot read PKCS#7 SignerInfo. ASN.1 object is not an PKCS#7 SignerInfo.");throw o.errors=s,o}var u={version:i.version.charCodeAt(0),issuer:e.pki.RDNAttributesAsArray(i.issuer),serialNumber:e.util.createBuffer(i.serial).toHex(),digestAlgorithm:t.derToOid(i.digestAlgorithm),signatureAlgorithm:t.derToOid(i.signatureAlgorithm),signature:i.signature,authenticatedAttributes:[],unauthenticatedAttributes:[]},a=i.authenticatedAttributes||[],f=i.unauthenticatedAttributes||[];return u}function a(n){var r=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,t.integerToDer(n.version).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[e.pki.distinguishedNameToAsn1({attributes:n.issuer}),t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,e.util.hexToBytes(n.serialNumber))]),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.digestAlgorithm).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.NULL,!1,"")])]);n.authenticatedAttributesAsn1&&r.value.push(n.authenticatedAttributesAsn1),r.value.push(t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.signatureAlgorithm).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.NULL,!1,"")])),r.value.push(t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,n.signature));if(n.unauthenticatedAttributes.length>0){var i=t.create(t.Class.CONTEXT_SPECIFIC,1,!0,[]);for(var s=0;s<n.unauthenticatedAttributes.length;++s){var o=n.unauthenticatedAttributes[s];i.values.push(c(o))}r.value.push(i)}return r}function f(e){var t=[];for(var n=0;n<e.length;++n)t.push(u(e[n]));return t}function l(e){var t=[];for(var n=0;n<e.length;++n)t.push(a(e[n]));return t}function c(n){var r;if(n.type===e.pki.oids.contentType)r=t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.value).getBytes());else if(n.type===e.pki.oids.messageDigest)r=t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,n.value.bytes());else if(n.type===e.pki.oids.signingTime){var i=new Date("1950-01-01T00:00:00Z"),s=new Date("2050-01-01T00:00:00Z"),o=n.value;if(typeof o=="string"){var u=Date.parse(o);isNaN(u)?o.length===13?o=t.utcTimeToDate(o):o=t.generalizedTimeToDate(o):o=new Date(u)}o>=i&&o<s?r=t.create(t.Class.UNIVERSAL,t.Type.UTCTIME,!1,t.dateToUtcTime(o)):r=t.create(t.Class.UNIVERSAL,t.Type.GENERALIZEDTIME,!1,t.dateToGeneralizedTime(o))}return t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.type).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SET,!0,[r])])}function h(n){return[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(e.pki.oids.data).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(n.algorithm).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,n.parameter.getBytes())]),t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,n.content.getBytes())])]}function p(n,r,i){var s={},o=[];if(!t.validate(r,i,s,o)){var u=new Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");throw u.errors=u,u}var a=t.derToOid(s.contentType);if(a!==e.pki.oids.data)throw new Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");if(s.encryptedContent){var f="";if(e.util.isArray(s.encryptedContent))for(var l=0;l<s.encryptedContent.length;++l){if(s.encryptedContent[l].type!==t.Type.OCTETSTRING)throw new Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");f+=s.encryptedContent[l].value}else f=s.encryptedContent;n.encryptedContent={algorithm:t.derToOid(s.encAlgorithm),parameter:e.util.createBuffer(s.encParameter.value),content:e.util.createBuffer(f)}}if(s.content){var f="";if(e.util.isArray(s.content))for(var l=0;l<s.content.length;++l){if(s.content[l].type!==t.Type.OCTETSTRING)throw new Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");f+=s.content[l].value}else f=s.content;n.content=e.util.createBuffer(f)}return n.version=s.version.charCodeAt(0),n.rawCapture=s,s}function d(t){if(t.encryptedContent.key===undefined)throw new Error("Symmetric key not available.");if(t.content===undefined){var n;switch(t.encryptedContent.algorithm){case e.pki.oids["aes128-CBC"]:case e.pki.oids["aes192-CBC"]:case e.pki.oids["aes256-CBC"]:n=e.aes.createDecryptionCipher(t.encryptedContent.key);break;case e.pki.oids.desCBC:case e.pki.oids["des-EDE3-CBC"]:n=e.des.createDecryptionCipher(t.encryptedContent.key);break;default:throw new Error("Unsupported symmetric cipher, OID "+t.encryptedContent.algorithm)}n.start(t.encryptedContent.parameter),n.update(t.encryptedContent.content);if(!n.finish())throw new Error("Symmetric decryption failed.");t.content=n.output}}var t=e.asn1,n=e.pkcs7=e.pkcs7||{};n.messageFromPem=function(r){var i=e.pem.decode(r)[0];if(i.type!=="PKCS7"){var s=new Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');throw s.headerType=i.type,s}if(i.procType&&i.procType.type==="ENCRYPTED")throw new Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");var o=t.fromDer(i.body);return n.messageFromAsn1(o)},n.messageToPem=function(n,r){var i={type:"PKCS7",body:t.toDer(n.toAsn1()).getBytes()};return e.pem.encode(i,{maxline:r})},n.messageFromAsn1=function(r){var i={},s=[];if(!t.validate(r,n.asn1.contentInfoValidator,i,s)){var o=new Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");throw o.errors=s,o}var u=t.derToOid(i.contentType),a;switch(u){case e.pki.oids.envelopedData:a=n.createEnvelopedData();break;case e.pki.oids.encryptedData:a=n.createEncryptedData();break;case e.pki.oids.signedData:a=n.createSignedData();break;default:throw new Error("Cannot read PKCS#7 message. ContentType with OID "+u+" is not (yet) supported.")}return a.fromAsn1(i.content.value[0]),a},n.createSignedData=function(){function i(){var n={};for(var i=0;i<r.signers.length;++i){var s=r.signers[i],o=s.digestAlgorithm;o in n||(n[o]=e.md[e.pki.oids[o]].create()),s.authenticatedAttributes.length===0?s.md=n[o]:s.md=e.md[e.pki.oids[o]].create()}r.digestAlgorithmIdentifiers=[];for(var o in n)r.digestAlgorithmIdentifiers.push(t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(o).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.NULL,!1,"")]));return n}function s(n){if(r.contentInfo.value.length<2)throw new Error("Could not sign PKCS#7 message; there is no content to sign.");var i=t.derToOid(r.contentInfo.value[0].value),s=r.contentInfo.value[1];s=s.value[0];var o=t.toDer(s);o.getByte(),t.getBerValueLength(o),o=o.getBytes();for(var u in n)n[u].start().update(o);var a=new Date;for(var f=0;f<r.signers.length;++f){var h=r.signers[f];if(h.authenticatedAttributes.length===0){if(i!==e.pki.oids.data)throw new Error("Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.")}else{h.authenticatedAttributesAsn1=t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[]);var p=t.create(t.Class.UNIVERSAL,t.Type.SET,!0,[]);for(var d=0;d<h.authenticatedAttributes.length;++d){var v=h.authenticatedAttributes[d];v.type===e.pki.oids.messageDigest?v.value=n[h.digestAlgorithm].digest():v.type===e.pki.oids.signingTime&&(v.value||(v.value=a)),p.value.push(c(v)),h.authenticatedAttributesAsn1.value.push(c(v))}o=t.toDer(p).getBytes(),h.md.start().update(o)}h.signature=h.key.sign(h.md,"RSASSA-PKCS1-V1_5")}r.signerInfos=l(r.signers)}var r=null;return r={type:e.pki.oids.signedData,version:1,certificates:[],crls:[],signers:[],digestAlgorithmIdentifiers:[],contentInfo:null,signerInfos:[],fromAsn1:function(t){p(r,t,n.asn1.signedDataValidator),r.certificates=[],r.crls=[],r.digestAlgorithmIdentifiers=[],r.contentInfo=null,r.signerInfos=[];var i=r.rawCapture.certificates.value;for(var s=0;s<i.length;++s)r.certificates.push(e.pki.certificateFromAsn1(i[s]))},toAsn1:function(){r.contentInfo||r.sign();var n=[];for(var i=0;i<r.certificates.length;++i)n.push(e.pki.certificateToAsn1(r.certificates[i]));var s=[],o=t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,t.integerToDer(r.version).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SET,!0,r.digestAlgorithmIdentifiers),r.contentInfo])]);return n.length>0&&o.value[0].value.push(t.create(t.Class.CONTEXT_SPECIFIC,0,!0,n)),s.length>0&&o.value[0].value.push(t.create(t.Class.CONTEXT_SPECIFIC,1,!0,s)),o.value[0].value.push(t.create(t.Class.UNIVERSAL,t.Type.SET,!0,r.signerInfos)),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(r.type).getBytes()),o])},addSigner:function(t){var n=t.issuer,i=t.serialNumber;if(t.certificate){var s=t.certificate;typeof s=="string"&&(s=e.pki.certificateFromPem(s)),n=s.issuer.attributes,i=s.serialNumber}var o=t.key;if(!o)throw new Error("Could not add PKCS#7 signer; no private key specified.");typeof o=="string"&&(o=e.pki.privateKeyFromPem(o));var u=t.digestAlgorithm||e.pki.oids.sha1;switch(u){case e.pki.oids.sha1:case e.pki.oids.sha256:case e.pki.oids.sha384:case e.pki.oids.sha512:case e.pki.oids.md5:break;default:throw new Error("Could not add PKCS#7 signer; unknown message digest algorithm: "+u)}var a=t.authenticatedAttributes||[];if(a.length>0){var f=!1,l=!1;for(var c=0;c<a.length;++c){var h=a[c];if(!f&&h.type===e.pki.oids.contentType){f=!0;if(l)break;continue}if(!l&&h.type===e.pki.oids.messageDigest){l=!0;if(f)break;continue}}if(!f||!l)throw new Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.")}r.signers.push({key:o,version:1,issuer:n,serialNumber:i,digestAlgorithm:u,signatureAlgorithm:e.pki.oids.rsaEncryption,signature:null,authenticatedAttributes:a,unauthenticatedAttributes:[]})},sign:function(){if(typeof r.content!="object"||r.contentInfo===null){r.contentInfo=t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(e.pki.oids.data).getBytes())]);if("content"in r){var n;r.content instanceof e.util.ByteBuffer?n=r.content.bytes():typeof r.content=="string"&&(n=e.util.encodeUtf8(r.content)),r.contentInfo.value.push(t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.OCTETSTRING,!1,n)]))}}if(r.signers.length===0)return;var o=i();s(o)},verify:function(){throw new Error("PKCS#7 signature verification not yet implemented.")},addCertificate:function(t){typeof t=="string"&&(t=e.pki.certificateFromPem(t)),r.certificates.push(t)},addCertificateRevokationList:function(e){throw new Error("PKCS#7 CRL support not yet implemented.")}},r},n.createEncryptedData=function(){var t=null;return t={type:e.pki.oids.encryptedData,version:0,encryptedContent:{algorithm:e.pki.oids["aes256-CBC"]},fromAsn1:function(e){p(t,e,n.asn1.encryptedDataValidator)},decrypt:function(e){e!==undefined&&(t.encryptedContent.key=e),d(t)}},t},n.createEnvelopedData=function(){var r=null;return r={type:e.pki.oids.envelopedData,version:0,recipients:[],encryptedContent:{algorithm:e.pki.oids["aes256-CBC"]},fromAsn1:function(e){var t=p(r,e,n.asn1.envelopedDataValidator);r.recipients=s(t.recipientInfos.value)},toAsn1:function(){return t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.OID,!1,t.oidToDer(r.type).getBytes()),t.create(t.Class.CONTEXT_SPECIFIC,0,!0,[t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,[t.create(t.Class.UNIVERSAL,t.Type.INTEGER,!1,t.integerToDer(r.version).getBytes()),t.create(t.Class.UNIVERSAL,t.Type.SET,!0,o(r.recipients)),t.create(t.Class.UNIVERSAL,t.Type.SEQUENCE,!0,h(r.encryptedContent))])])])},findRecipient:function(e){var t=e.issuer.attributes;for(var n=0;n<r.recipients.length;++n){var i=r.recipients[n],s=i.issuer;if(i.serialNumber!==e.serialNumber)continue;if(s.length!==t.length)continue;var o=!0;for(var u=0;u<t.length;++u)if(s[u].type!==t[u].type||s[u].value!==t[u].value){o=!1;break}if(o)return i}return null},decrypt:function(t,n){if(r.encryptedContent.key===undefined&&t!==undefined&&n!==undefined)switch(t.encryptedContent.algorithm){case e.pki.oids.rsaEncryption:case e.pki.oids.desCBC:var i=n.decrypt(t.encryptedContent.content);r.encryptedContent.key=e.util.createBuffer(i);break;default:throw new Error("Unsupported asymmetric cipher, OID "+t.encryptedContent.algorithm)}d(r)},addRecipient:function(t){r.recipients.push({version:0,issuer:t.issuer.attributes,serialNumber:t.serialNumber,encryptedContent:{algorithm:e.pki.oids.rsaEncryption,key:t.publicKey}})},encrypt:function(t,n){if(r.encryptedContent.content===undefined){n=n||r.encryptedContent.algorithm,t=t||r.encryptedContent.key;var i,s,o;switch(n){case e.pki.oids["aes128-CBC"]:i=16,s=16,o=e.aes.createEncryptionCipher;break;case e.pki.oids["aes192-CBC"]:i=24,s=16,o=e.aes.createEncryptionCipher;break;case e.pki.oids["aes256-CBC"]:i=32,s=16,o=e.aes.createEncryptionCipher;break;case e.pki.oids["des-EDE3-CBC"]:i=24,s=8,o=e.des.createEncryptionCipher;break;default:throw new Error("Unsupported symmetric cipher, OID "+n)}if(t===undefined)t=e.util.createBuffer(e.random.getBytes(i));else if(t.length()!=i)throw new Error("Symmetric key has wrong length; got "+t.length()+" bytes, expected "+i+".");r.encryptedContent.algorithm=n,r.encryptedContent.key=t,r.encryptedContent.parameter=e.util.createBuffer(e.random.getBytes(s));var u=o(t);u.start(r.encryptedContent.parameter.copy()),u.update(r.content);if(!u.finish())throw new Error("Symmetric encryption failed.");r.encryptedContent.content=u.output}for(var a=0;a<r.recipients.length;++a){var f=r.recipients[a];if(f.encryptedContent.content!==undefined)continue;switch(f.encryptedContent.algorithm){case e.pki.oids.rsaEncryption:f.encryptedContent.content=f.encryptedContent.key.encrypt(r.encryptedContent.key.data);break;default:throw new Error("Unsupported asymmetric cipher, OID "+f.encryptedContent.algorithm)}}}},r}}var r="pkcs7";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/pkcs7",["require","module","./aes","./asn1","./des","./oids","./pem","./pkcs7asn1","./random","./util","./x509"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){function n(t,n){var r=n.toString(16);r[0]>="8"&&(r="00"+r);var i=e.util.hexToBytes(r);t.putInt32(i.length),t.putBytes(i)}function r(e,t){e.putInt32(t.length),e.putString(t)}function i(){var t=e.md.sha1.create(),n=arguments.length;for(var r=0;r<n;++r)t.update(arguments[r]);return t.digest()}var t=e.ssh=e.ssh||{};t.privateKeyToPutty=function(t,s,o){o=o||"",s=s||"";var u="ssh-rsa",a=s===""?"none":"aes256-cbc",f="PuTTY-User-Key-File-2: "+u+"\r\n";f+="Encryption: "+a+"\r\n",f+="Comment: "+o+"\r\n";var l=e.util.createBuffer();r(l,u),n(l,t.e),n(l,t.n);var c=e.util.encode64(l.bytes(),64),h=Math.floor(c.length/66)+1;f+="Public-Lines: "+h+"\r\n",f+=c;var p=e.util.createBuffer();n(p,t.d),n(p,t.p),n(p,t.q),n(p,t.qInv);var d;if(!s)d=e.util.encode64(p.bytes(),64);else{var v=p.length()+16-1;v-=v%16;var m=i(p.bytes());m.truncate(m.length()-v+p.length()),p.putBuffer(m);var g=e.util.createBuffer();g.putBuffer(i("\0\0\0\0",s)),g.putBuffer(i("\0\0\0",s));var y=e.aes.createEncryptionCipher(g.truncate(8),"CBC");y.start(e.util.createBuffer().fillWithByte(0,16)),y.update(p.copy()),y.finish();var b=y.output;b.truncate(16),d=e.util.encode64(b.bytes(),64)}h=Math.floor(d.length/66)+1,f+="\r\nPrivate-Lines: "+h+"\r\n",f+=d;var w=i("putty-private-key-file-mac-key",s),E=e.util.createBuffer();r(E,u),r(E,a),r(E,o),E.putInt32(l.length()),E.putBuffer(l),E.putInt32(p.length()),E.putBuffer(p);var S=e.hmac.create();return S.start("sha1",w),S.update(E.bytes()),f+="\r\nPrivate-MAC: "+S.digest().toHex()+"\r\n",f},t.publicKeyToOpenSSH=function(t,i){var s="ssh-rsa";i=i||"";var o=e.util.createBuffer();return r(o,s),n(o,t.e),n(o,t.n),s+" "+e.util.encode64(o.bytes())+" "+i},t.privateKeyToOpenSSH=function(t,n){return n?e.pki.encryptRsaPrivateKey(t,n,{legacy:!0,algorithm:"aes128"}):e.pki.privateKeyToPem(t)},t.getPublicKeyFingerprint=function(t,i){i=i||{};var s=i.md||e.md.md5.create(),o="ssh-rsa",u=e.util.createBuffer();r(u,o),n(u,t.e),n(u,t.n),s.start(),s.update(u.getBytes());var a=s.digest();if(i.encoding==="hex"){var f=a.toHex();return i.delimiter?f.match(/.{2}/g).join(i.delimiter):f}if(i.encoding==="binary")return a.getBytes();if(i.encoding)throw new Error('Unknown encoding "'+i.encoding+'".');return a}}var r="ssh";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/ssh",["require","module","./aes","./hmac","./md5","./sha1","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){function e(e){var t="forge.task",n=0,r={},i=0;e.debug.set(t,"tasks",r);var s={};e.debug.set(t,"queues",s);var o="?",u=30,a=20,f="ready",l="running",c="blocked",h="sleeping",p="done",d="error",v="stop",m="start",g="block",y="unblock",b="sleep",w="wakeup",E="cancel",S="fail",x={};x[f]={},x[f][v]=f,x[f][m]=l,x[f][E]=p,x[f][S]=d,x[l]={},x[l][v]=f,x[l][m]=l,x[l][g]=c,x[l][y]=l,x[l][b]=h,x[l][w]=l,x[l][E]=p,x[l][S]=d,x[c]={},x[c][v]=c,x[c][m]=c,x[c][g]=c,x[c][y]=c,x[c][b]=c,x[c][w]=c,x[c][E]=p,x[c][S]=d,x[h]={},x[h][v]=h,x[h][m]=h,x[h][g]=h,x[h][y]=h,x[h][b]=h,x[h][w]=h,x[h][E]=p,x[h][S]=d,x[p]={},x[p][v]=p,x[p][m]=p,x[p][g]=p,x[p][y]=p,x[p][b]=p,x[p][w]=p,x[p][E]=p,x[p][S]=d,x[d]={},x[d][v]=d,x[d][m]=d,x[d][g]=d,x[d][y]=d,x[d][b]=d,x[d][w]=d,x[d][E]=d,x[d][S]=d;var T=function(s){this.id=-1,this.name=s.name||o,this.parent=s.parent||null,this.run=s.run,this.subtasks=[],this.error=!1,this.state=f,this.blocks=0,this.timeoutId=null,this.swapTime=null,this.userData=null,this.id=i++,r[this.id]=this,n>=1&&e.log.verbose(t,"[%s][%s] init",this.id,this.name,this)};T.prototype.debug=function(n){n=n||"",e.log.debug(t,n,"[%s][%s] task:",this.id,this.name,this,"subtasks:",this.subtasks.length,"queue:",s)},T.prototype.next=function(e,t){typeof e=="function"&&(t=e,e=this.name);var n=new T({run:t,name:e,parent:this});return n.state=l,n.type=this.type,n.successCallback=this.successCallback||null,n.failureCallback=this.failureCallback||null,this.subtasks.push(n),this},T.prototype.parallel=function(t,n){return e.util.isArray(t)&&(n=t,t=this.name),this.next(t,function(r){var i=r;i.block(n.length);var s=function(t,r){e.task.start({type:t,run:function(e){n[r](e)},success:function(e){i.unblock()},failure:function(e){i.unblock()}})};for(var o=0;o<n.length;o++){var u=t+"__parallel-"+r.id+"-"+o,a=o;s(u,a)}})},T.prototype.stop=function(){this.state=x[this.state][v]},T.prototype.start=function(){this.error=!1,this.state=x[this.state][m],this.state===l&&(this.start=new Date,this.run(this),C(this,0))},T.prototype.block=function(e){e=typeof e=="undefined"?1:e,this.blocks+=e,this.blocks>0&&(this.state=x[this.state][g])},T.prototype.unblock=function(e){return e=typeof e=="undefined"?1:e,this.blocks-=e,this.blocks===0&&this.state!==p&&(this.state=l,C(this,0)),this.blocks},T.prototype.sleep=function(e){e=typeof e=="undefined"?0:e,this.state=x[this.state][b];var t=this;this.timeoutId=setTimeout(function(){t.timeoutId=null,t.state=l,C(t,0)},e)},T.prototype.wait=function(e){e.wait(this)},T.prototype.wakeup=function(){this.state===h&&(cancelTimeout(this.timeoutId),this.timeoutId=null,this.state=l,C(this,0))},T.prototype.cancel=function(){this.state=x[this.state][E],this.permitsNeeded=0,this.timeoutId!==null&&(cancelTimeout(this.timeoutId),this.timeoutId=null),this.subtasks=[]},T.prototype.fail=function(e){this.error=!0,k(this,!0);if(e)e.error=this.error,e.swapTime=this.swapTime,e.userData=this.userData,C(e,0);else{if(this.parent!==null){var t=this.parent;while(t.parent!==null)t.error=this.error,t.swapTime=this.swapTime,t.userData=this.userData,t=t.parent;k(t,!0)}this.failureCallback&&this.failureCallback(this)}};var N=function(e){e.error=!1,e.state=x[e.state][m],setTimeout(function(){e.state===l&&(e.swapTime=+(new Date),e.run(e),C(e,0))},0)},C=function(e,t){var n=t>u||+(new Date)-e.swapTime>a,r=function(t){t++;if(e.state===l){n&&(e.swapTime=+(new Date));if(e.subtasks.length>0){var r=e.subtasks.shift();r.error=e.error,r.swapTime=e.swapTime,r.userData=e.userData,r.run(r),r.error||C(r,t)}else k(e),e.error||e.parent!==null&&(e.parent.error=e.error,e.parent.swapTime=e.swapTime,e.parent.userData=e.userData,C(e.parent,t))}};n?setTimeout(r,0):r(t)},k=function(i,o){i.state=p,delete r[i.id],n>=1&&e.log.verbose(t,"[%s][%s] finish",i.id,i.name,i),i.parent===null&&(i.type in s?s[i.type].length===0?e.log.error(t,"[%s][%s] task queue empty [%s]",i.id,i.name,i.type):s[i.type][0]!==i?e.log.error(t,"[%s][%s] task not first in queue [%s]",i.id,i.name,i.type):(s[i.type].shift(),s[i.type].length===0?(n>=1&&e.log.verbose(t,"[%s][%s] delete queue [%s]",i.id,i.name,i.type),delete s[i.type]):(n>=1&&e.log.verbose(t,"[%s][%s] queue start next [%s] remain:%s",i.id,i.name,i.type,s[i.type].length),s[i.type][0].start())):e.log.error(t,"[%s][%s] task queue missing [%s]",i.id,i.name,i.type),o||(i.error&&i.failureCallback?i.failureCallback(i):!i.error&&i.successCallback&&i.successCallback(i)))};e.task=e.task||{},e.task.start=function(r){var i=new T({run:r.run,name:r.name||o});i.type=r.type,i.successCallback=r.success||null,i.failureCallback=r.failure||null,i.type in s?s[r.type].push(i):(n>=1&&e.log.verbose(t,"[%s][%s] create queue [%s]",i.id,i.name,i.type),s[i.type]=[i],N(i))},e.task.cancel=function(e){e in s&&(s[e]=[s[e][0]])},e.task.createCondition=function(){var e={tasks:{}};return e.wait=function(t){t.id in e.tasks||(t.block(),e.tasks[t.id]=t)},e.notify=function(){var t=e.tasks;e.tasks={};for(var n in t)t[n].unblock()},e}}var r="task";if(typeof n!="function"){if(typeof module!="object"||!module.exports)return typeof forge=="undefined"&&(forge={}),e(forge);var i=!0;n=function(e,n){n(t,module)}}var s,o=function(t,n){n.exports=function(n){var i=s.map(function(e){return t(e)}).concat(e);n=n||{},n.defined=n.defined||{};if(n.defined[r])return n[r];n.defined[r]=!0;for(var o=0;o<i.length;++o)i[o](n);return n[r]}},u=n;n=function(e,t){return s=typeof e=="string"?t.slice(2):e.slice(2),i?(delete n,u.apply(null,Array.prototype.slice.call(arguments,0))):(n=u,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/task",["require","module","./debug","./log","./util"],function(){o.apply(null,Array.prototype.slice.call(arguments,0))})}(),function(){var e="forge";if(typeof n!="function"){if(typeof module!="object"||!module.exports){typeof forge=="undefined"&&(forge={disableNativeCode:!1});return}var r=!0;n=function(e,n){n(t,module)}}var i,s=function(t,n){n.exports=function(n){var r=i.map(function(e){return t(e)});n=n||{},n.defined=n.defined||{};if(n.defined[e])return n[e];n.defined[e]=!0;for(var s=0;s<r.length;++s)typeof r[s]=="function"&&r[s](n);return n},n.exports.disableNativeCode=!1,n.exports(n.exports)},o=n;n=function(e,t){return i=typeof e=="string"?t.slice(2):e.slice(2),r?(delete n,o.apply(null,Array.prototype.slice.call(arguments,0))):(n=o,n.apply(null,Array.prototype.slice.call(arguments,0)))},n("js/forge",["require","module","./aes","./aesCipherSuites","./asn1","./cipher","./cipherModes","./debug","./des","./hmac","./kem","./log","./md","./mgf1","./pbkdf2","./pem","./pkcs7","./pkcs1","./pkcs12","./pki","./prime","./prng","./pss","./random","./rc2","./ssh","./task","./tls","./util"],function(){s.apply(null,Array.prototype.slice.call(arguments,0))})}(),t("js/forge")});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(116).setImmediate, __webpack_require__(147)(module), __webpack_require__(74).Buffer))

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(3);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _stringify = __webpack_require__(78);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	exports.onCommand = onCommand;
	exports.offCommand = offCommand;
	exports.post = post;
	exports.get = get;
	exports.del = del;
	exports.put = put;
	
	var _url = __webpack_require__(149);
	
	var _session = __webpack_require__(73);
	
	var session = _interopRequireWildcard(_session);
	
	var _package = __webpack_require__(155);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var commandListeners = [];
	function onCommand(callback) {
	  console.log('-- Added DB Listener -- ');
	  commandListeners.push(callback);
	}
	
	function offCommand(callback) {
	  console.log('-- Removed DB Listener -- ');
	  commandListeners = commandListeners.filter(function (l) {
	    return l !== callback;
	  });
	}
	
	function post(path, obj) {
	  return _fetch('POST', path, obj);
	}
	
	function get(path) {
	  var sessionId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	  return _fetch('GET', path, null, sessionId);
	}
	
	function del(path) {
	  var sessionId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	  return _fetch('DELETE', path, null, sessionId);
	}
	
	function put(path) {
	  var sessionId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	  return _fetch('PUT', path, null, sessionId);
	}
	
	function _fetch(method, path, json) {
	  var sessionId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	  var config, response, uri, err;
	  return _regenerator2.default.async(function _fetch$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          config = {
	            method: method,
	            headers: new Headers()
	          };
	
	          // Set some client information
	
	          config.headers.set('X-Insomnia-Client', getClientString());
	
	          if (json) {
	            config.body = (0, _stringify2.default)(json, null, 2);
	            config.headers.set('Content-Type', 'application/json');
	          }
	
	          sessionId = sessionId || session.getCurrentSessionId();
	          if (sessionId) {
	            config.headers.set('X-Session-Id', sessionId);
	          }
	
	          _context.next = 7;
	          return _regenerator2.default.awrap(fetch(_getUrl(path), config));
	
	        case 7:
	          response = _context.sent;
	
	
	          if (response.status === 403) {
	            // TODO: Somehow signal the user to login
	          } else if (response.status === 402) {
	            // TODO: Somehow signal that payment is required
	          }
	
	          uri = response.headers.get('x-insomnia-command');
	
	          uri && _notifyCommandListeners(uri);
	
	          if (response.ok) {
	            _context.next = 17;
	            break;
	          }
	
	          err = new Error('Response ' + response.status + ' for ' + path);
	          _context.next = 15;
	          return _regenerator2.default.awrap(response.text());
	
	        case 15:
	          err.message = _context.sent;
	          throw err;
	
	        case 17:
	          if (!(response.headers.get('content-type') === 'application/json')) {
	            _context.next = 21;
	            break;
	          }
	
	          return _context.abrupt('return', response.json());
	
	        case 21:
	          return _context.abrupt('return', response.text());
	
	        case 22:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, null, this);
	}
	
	function _getUrl(path) {
	  if (isDev()) {
	    return 'http://localhost:8000' + path;
	  } else {
	    return 'https://api.insomnia.rest' + path;
	  }
	}
	
	function _notifyCommandListeners(uri) {
	  var parsed = (0, _url.parse)(uri, true);
	
	  var command = '' + parsed.hostname + parsed.pathname;
	  var args = JSON.parse((0, _stringify2.default)(parsed.query));
	
	  commandListeners.map(function (fn) {
	    return fn(command, args);
	  });
	}
	
	function getClientString() {
	  return (isDev() ? 'development' : 'production') + '::browser::' + _package.version;
	}
	
	function isDev() {
	  return process.env.NODE_ENV !== 'production';
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var punycode = __webpack_require__(150);
	var util = __webpack_require__(151);
	
	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;
	
	exports.Url = Url;
	
	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}
	
	// Reference: RFC 3986, RFC 1808, RFC 2396
	
	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,
	
	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
	
	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
	
	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
	
	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(152);
	
	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;
	
	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}
	
	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }
	
	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);
	
	  var rest = url;
	
	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();
	
	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }
	
	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }
	
	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }
	
	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {
	
	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c
	
	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.
	
	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	
	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }
	
	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }
	
	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;
	
	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);
	
	    // pull out port.
	    this.parseHost();
	
	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';
	
	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';
	
	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }
	
	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }
	
	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }
	
	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;
	
	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }
	
	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {
	
	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }
	
	
	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }
	
	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }
	
	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};
	
	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}
	
	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }
	
	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';
	
	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }
	
	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }
	
	  var search = this.search || (query && ('?' + query)) || '';
	
	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
	
	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }
	
	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;
	
	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');
	
	  return protocol + host + pathname + search + hash;
	};
	
	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}
	
	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};
	
	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}
	
	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }
	
	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }
	
	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;
	
	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }
	
	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }
	
	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }
	
	    result.href = result.format();
	    return result;
	  }
	
	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }
	
	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }
	
	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];
	
	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }
	
	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }
	
	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');
	
	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }
	
	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }
	
	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }
	
	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');
	
	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }
	
	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);
	
	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }
	
	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }
	
	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};
	
	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {
	
		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}
	
		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,
	
		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
	
		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'
	
		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
	
		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},
	
		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,
	
		/** Temporary variable */
		key;
	
		/*--------------------------------------------------------------------------*/
	
		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}
	
		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}
	
		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}
	
		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}
	
		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}
	
		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}
	
		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}
	
		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;
	
			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.
	
			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}
	
			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}
	
			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.
	
			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {
	
				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {
	
					if (index >= inputLength) {
						error('invalid-input');
					}
	
					digit = basicToDigit(input.charCodeAt(index++));
	
					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}
	
					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
	
					if (digit < t) {
						break;
					}
	
					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}
	
					w *= baseMinusT;
	
				}
	
				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);
	
				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}
	
				n += floor(i / out);
				i %= out;
	
				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);
	
			}
	
			return ucs2encode(output);
		}
	
		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;
	
			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);
	
			// Cache the length
			inputLength = input.length;
	
			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;
	
			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}
	
			handledCPCount = basicLength = output.length;
	
			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.
	
			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}
	
			// Main encoding loop:
			while (handledCPCount < inputLength) {
	
				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}
	
				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}
	
				delta += (m - n) * handledCPCountPlusOne;
				n = m;
	
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
	
					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}
	
					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}
	
						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
	
				++delta;
				++n;
	
			}
			return output.join('');
		}
	
		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}
	
		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}
	
		/*--------------------------------------------------------------------------*/
	
		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};
	
		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(147)(module), (function() { return this; }())))

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(153);
	exports.encode = exports.stringify = __webpack_require__(154);


/***/ },
/* 153 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 154 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = {
		"name": "insomnia-website",
		"private": true,
		"version": "1.0.0",
		"description": "Website for https://insomnia.rest",
		"author": "Gregory Schier <gschier1990@gmail.com>",
		"licence": "MIT",
		"scripts": {
			"task:changelog": "rm -rf ./content/changelog-json && cp -r ./content/changelog ./content/changelog-json",
			"build:clean": "rm -rf _hugo _speedpack",
			"build:generate": "npm run task:changelog && hugo --destination _hugo",
			"build:pack": "speedpack _hugo --output _speedpack",
			"build:js": "NODE_ENV=production webpack --config webpack.config.babel.js",
			"build": "npm run build:clean && npm run build:js && npm run build:generate && npm run build:pack",
			"deploy:surge": "npm run deploy:push",
			"deploy:push": "surge _speedpack",
			"deploy": "npm run build && npm run deploy:surge",
			"dev:js": "webpack --config webpack.config.babel.js --watch",
			"dev:serve": "hugo serve --buildDrafts --bind ::1",
			"dev": "npm run task:changelog && npm run dev:serve",
			"start:serve": "hugo serve --bind 0.0.0.0",
			"start": "npm run task:changelog && npm run start:serve"
		},
		"repository": {
			"type": "git",
			"url": "git+https://github.com/getinsomnia/website.git"
		},
		"homepage": "https://github.com/getinsomnia/website#readme",
		"devDependencies": {
			"speedpack": "^0.1.2",
			"surge": "^0.18.0",
			"webpack": "^1.14.0",
			"babel": "6.3.13",
			"babel-core": "6.1.18",
			"babel-eslint": "5.0.0",
			"babel-loader": "6.1.0",
			"babel-plugin-add-module-exports": "0.1.2",
			"babel-plugin-transform-object-rest-spread": "^6.6.5",
			"babel-plugin-transform-regenerator": "^6.16.1",
			"babel-plugin-transform-runtime": "^6.15.0",
			"babel-preset-es2015": "6.3.13"
		},
		"dependencies": {
			"hkdf": "0.0.2",
			"isomorphic-fetch": "^2.2.1",
			"lie": "^3.1.0",
			"node-forge": "^0.6.46",
			"json-loader": "^0.5.4",
			"preact": "^7.1.0",
			"preact-router": "^2.3.2",
			"sjcl": "^1.0.6",
			"srp": "git@github.com:getinsomnia/srp-js.git#6ebd8c3acfbcf69645e4c6e6f8f6b55138ff22c3"
		},
		"babel": {
			"presets": [
				"es2015"
			],
			"plugins": [
				"transform-object-rest-spread",
				"add-module-exports",
				"transform-regenerator",
				"transform-runtime"
			]
		}
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(3);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _getIterator2 = __webpack_require__(157);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	exports.init = init;
	
	var _session = __webpack_require__(73);
	
	var session = _interopRequireWildcard(_session);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var step = void 0;
	
	function init(pathname) {
	  if (!pathname.match(/^\/app\/signup\/$/)) {
	    return;
	  }
	
	  step = 1;
	  _updateVisibility();
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = (0, _getIterator3.default)(document.querySelectorAll('.step-back')), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var link = _step.value;
	
	      link.addEventListener('click', _handleBack);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  document.querySelector('form').addEventListener('submit', _handleSubmit);
	
	  document.querySelector('input[name="password-confirm"]').addEventListener('keydown', _handleConfirmPasswordChange);
	}
	
	/** Update visibility of signup steps */
	function _updateVisibility() {
	  var elements = document.querySelectorAll('[data-step]');
	  for (var i = 0; i < elements.length; i++) {
	    var el = elements[i];
	    if (step === i + 1) {
	      el.style.display = 'block';
	      el.querySelector('input').focus();
	    } else {
	      el.style.display = 'none';
	    }
	  }
	}
	
	function _handleBack(e) {
	  e.preventDefault();
	  step--;
	  _updateVisibility();
	}
	
	function serializeForm() {
	  return {
	    firstName: document.querySelector('input[name="first-name"]').value,
	    lastName: document.querySelector('input[name="last-name"]').value,
	    email: document.querySelector('input[name="email"]').value,
	    password: document.querySelector('input[name="password"]').value,
	    password2: document.querySelector('input[name="password-confirm"]').value
	  };
	}
	
	function _handleSubmit(e) {
	  var _serializeForm, firstName, lastName, email, password;
	
	  return _regenerator2.default.async(function _handleSubmit$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          e.preventDefault();
	
	          if (!(step === 2)) {
	            _context.next = 13;
	            break;
	          }
	
	          _serializeForm = serializeForm(), firstName = _serializeForm.firstName, lastName = _serializeForm.lastName, email = _serializeForm.email, password = _serializeForm.password;
	          _context.prev = 3;
	          _context.next = 6;
	          return _regenerator2.default.awrap(session.signup(firstName, lastName, email, password));
	
	        case 6:
	          window.location = '/app';
	          _context.next = 13;
	          break;
	
	        case 9:
	          _context.prev = 9;
	          _context.t0 = _context['catch'](3);
	
	          alert(_context.t0.message);
	          return _context.abrupt('return');
	
	        case 13:
	
	          step++;
	          _updateVisibility();
	
	        case 15:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, null, this, [[3, 9]]);
	}
	
	function _handleConfirmPasswordChange(e) {
	  var data = serializeForm();
	  if (step === 2 && data.password !== data.password2) {
	    e.target.setCustomValidity('Passwords did not match');
	  } else {
	    e.target.setCustomValidity('');
	  }
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(45);
	module.exports = __webpack_require__(159);

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(33)
	  , get      = __webpack_require__(62);
	module.exports = __webpack_require__(15).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(3);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.init = init;
	
	var _session = __webpack_require__(73);
	
	var session = _interopRequireWildcard(_session);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function init() {
	  return _regenerator2.default.async(function init$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          if (session.hasSessionId()) {
	            _context.next = 3;
	            break;
	          }
	
	          _setLoggedIn(false);
	          return _context.abrupt('return');
	
	        case 3:
	
	          // We have a sessionId, so assume we're logged in
	          _setLoggedIn(true);
	
	          // Actually check the server to see if we're logged in
	          _context.prev = 4;
	          _context.next = 7;
	          return _regenerator2.default.awrap(session.whoami());
	
	        case 7:
	          _setLoggedIn(true);
	          _context.next = 14;
	          break;
	
	        case 10:
	          _context.prev = 10;
	          _context.t0 = _context['catch'](4);
	
	          _setLoggedIn(false);
	          session.logout();
	
	        case 14:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, null, this, [[4, 10]]);
	}
	
	function _setLoggedIn(isLoggedIn) {
	  if (isLoggedIn) {
	    document.body.setAttribute('data-logged-in', 'yes');
	  } else {
	    document.body.setAttribute('data-logged-in', 'no');
	  }
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(3);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.init = init;
	
	var _session = __webpack_require__(73);
	
	var session = _interopRequireWildcard(_session);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function init(pathname) {
	  return _regenerator2.default.async(function init$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          if (pathname.match(/^\/app\/logout\/$/)) {
	            _context.next = 2;
	            break;
	          }
	
	          return _context.abrupt('return');
	
	        case 2:
	          if (!session.hasSessionId()) {
	            _context.next = 5;
	            break;
	          }
	
	          _context.next = 5;
	          return _regenerator2.default.awrap(session.logout());
	
	        case 5:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, null, this);
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=app.js.map