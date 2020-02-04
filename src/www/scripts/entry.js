var MxApp = require("@mendix/mendix-hybrid-app-base");

MxApp.onConfigReady(function(config) {
  // Perform any custom operations on the dojoConfig object here
  dojoConfig.server.timeout = 30000
  config.afterNavigationFn = function() {
    console.info("OUR CUSTOM UNIERSAL LINKS CODE WORKS HERE");
    //add a listener now for deep links
    //any time they come in now, we'll be ready to handle them
    // universalLinks.subscribe('validateuser', function(eventData) {
    //     // do some work
    //     console.log('Did launch application from the VALIDATE USER link: ' + eventData.url)
    //     console.log('***VALIDATE USER******* EVENT DATA ARRAY IS: ' + JSON.stringify(eventData));
    //     var oReq = new XMLHttpRequest();
    //     /* use a PUT to get responses from DL without redirects
    //      * 200 means it's ready
    //      * 401 means you're not logged in
    //      * 404 means not found
    //      */
    //     oReq.open("put", eventData.url, true);
    //     //detect if iOS for handle deeplink
    //     if (device.platform === 'iOS' || device.platform === 'Android') {
    //         var pid = mx.ui.showProgress("Loading link...");
    //         oReq.onreadystatechange = function () {
    //             if(oReq.readyState === 4) {
    //                 if(oReq.status === 200) {
    //                     // mx.data.action({
    //                     //     params: {
    //                     //         applyto: "selection",
    //                     //         actionname: "Main.ValidateUserAccount",
    //                     //         guids: "[]"
    //                     //     },
    //                     //     origin: mx.ui.getContentForm(),
    //                     //     callback: function() {
    //                     //         mx.ui.hideProgress(pid);
    //                     //     },
    //                     //     error: function(error) {
    //                     //         mx.ui.hideProgress(pid);
    //                     //         mx.ui.error("Unable to load link. Please try again.");
    //                     //     }
    //                     // });
    //                     // console.log("CURRENT LOCATION OF THE WINDOWS IS" + window.location.href);
    //                     // window.location.href = eventData.url;
    //                     // window.location.href = "ISfile:///android_asset/www/index.html";
    //                     cordova.InAppBrowser.open(eventData.url, '_blank', 'location=yes');
    //                     mx.ui.hideProgress(pid);
    //                 } else if (oReq.status === 401) {
    //                     //we weren't redirected (got a 200) and instead were sent to a login page. Show an error
    //                     mx.ui.hideProgress(pid);
    //                     mx.ui.error("Sorry, you need to be logged in to view this link. Please log in and try again");
    //                 } else {
    //                     //something else went wrong
    //                     mx.ui.hideProgress(pid);
    //                     mx.ui.error("Sorry, something went wrong with the link.");
    //                 }
    //             }
    //         };
    //     }
    //     oReq.send();
    // });
    // universalLinks.subscribe('resetpassword', function(eventData) {
    //     // do some work
    //     console.log('Did launch application from the RESET PASSWORD EVENT: ' + eventData.url)
    //     console.log('****RESET PASSWORD*** EVENT DATA ARRAY IS: ' + JSON.stringify(eventData) + eventData.params.GUID);
    //     var testObject = JSON.stringify(eventData);
    //     var oReq = new XMLHttpRequest();
    //     /* use a PUT to get responses from DL without redirects
    //      * 200 means it's ready
    //      * 401 means you're not logged in
    //      * 404 means not found
    //      */
    //     oReq.open("put", eventData.url, true);
    //     //detect if iOS for handle deeplink
    //     if (device.platform === 'iOS' || device.platform === 'Android') {
    //         var pid = mx.ui.showProgress("Loading link...");
    //         oReq.onreadystatechange = function () {
    //             if(oReq.readyState === 4) {
    //                 if(oReq.status === 200) {
    //                     // mx.data.action({
    //                     //     params: {
    //                     //         applyto: 'selection',
    //                     //         actionname: "ForgotPassword.Step3_DL_SetNewPassword",
    //                     //         guids: [eventData.params.GUID.toString()]
    //                     //     },
    //                     //     // origin: this.mxform,
    //                     //     origin: mx.ui.getContentForm(),
    //                     //     callback: function() {
    //                     //         mx.ui.hideProgress(pid);
    //                     //     },
    //                     //     error: function(error) {
    //                     //         mx.ui.hideProgress(pid);
    //                     //         mx.ui.error("Unable to load link. Please try again.");
    //                     //     }
    //                     // });
    //                     // console.log("CURRENT LOCATION OF THE WINDOWS IS" + window.location.href);
    //                     // window.location.href = eventData.url;
    //                     // setTimeout(function(){ window.location.href = "ISfile:///android_asset/www/index.html"; }, 3000);
    //                     // window.location.href = "ISfile:///android_asset/www/index.html";
    //                     cordova.InAppBrowser.open(eventData.url, '_blank', 'location=yes');
    //                     mx.ui.hideProgress(pid);
    //                 } else if (oReq.status === 401) {
    //                     //we weren't redirected (got a 200) and instead were sent to a login page. Show an error
    //                     mx.ui.hideProgress(pid);
    //                     mx.ui.error("Sorry, you need to be logged in to view this link. Please log in and try again");
    //                 } else {
    //                     //something else went wrong
    //                     mx.ui.hideProgress(pid);
    //                     mx.ui.error("Sorry, something went wrong with the link.");
    //                 }
    //             }
    //         };
    //     }
    //     oReq.send();
    // });
    universalLinks.subscribe('launchmyapp', function(eventData) {
        // do some work
        console.log('Did launch application from the LAUNCH MY APP EVENT: ' + eventData.url)
        console.log('****LAUNCH MY APP*** EVENT DATA ARRAY IS: ' + JSON.stringify(eventData) + eventData.params.GUID);
        // var testObject = JSON.stringify(eventData);
        var oReq = new XMLHttpRequest();
        /* use a PUT to get responses from DL without redirects
         * 200 means it's ready
         * 401 means you're not logged in
         * 404 means not found
         */
        oReq.open("put", eventData.url, true);
        //detect if iOS for handle deeplink
        if (device.platform === 'iOS' || device.platform === 'Android') {
            var pid = mx.ui.showProgress("Loading...");
            oReq.onreadystatechange = function () {
              console.log("_____=====OPEN REQUEST=====_____: " + oReq.status);
              if(oReq.readyState === 4) {
                // if(oReq.status === 200) {
                //     mx.data.action({
                //         params: {
                //             actionname: "Main.ShowHome"
                //         },
                //         // origin: this.mxform,
                //         origin: mx.ui.getContentForm(),
                //         callback: function() {
                //             mx.ui.hideProgress(pid);
                //         },
                //         error: function(error) {
                //             mx.ui.hideProgress(pid);
                //             mx.ui.error("Unable to load link. Please try again.");
                //         }
                //     });
                //     // console.log("CURRENT LOCATION OF THE WINDOWS IS" + window.location.href);
                //     // window.location.href = eventData.url;
                //     // cordova.InAppBrowser.open(eventData.url, '_blank', 'location=yes');
                //     // setTimeout(function(){ window.location.href = "ISfile:///android_asset/www/index.html"; }, 3000);
                //     // window.location.href = "ISfile:///android_asset/www/index.html";
                //     // mx.ui.hideProgress(pid);
                // } else if (oReq.status === 401) {
                //     //we weren't redirected (got a 200) and instead were sent to a login page. Show an error
                //     mx.ui.hideProgress(pid);
                //     mx.ui.error("Sorry, you need to be logged in to view this link. Please log in and try again");
                // } else {
                //     //something else went wrong
                    mx.ui.hideProgress(pid);
                //     mx.ui.error("Sorry, something went wrong with the link.");
                // }
              }
            };
        }
        oReq.send();
    });
    universalLinks.subscribe('myorders', function(eventData) {
        // do some work
        console.log('Did launch application from the MY ORDERS EVENT: ' + eventData.url)
        console.log('****MY ORDERS*** EVENT DATA ARRAY IS: ' + JSON.stringify(eventData) + eventData.params.GUID);
        var testObject = JSON.stringify(eventData);
        var oReq = new XMLHttpRequest();
        /* use a PUT to get responses from DL without redirects
         * 200 means it's ready
         * 401 means you're not logged in
         * 404 means not found
         */
        oReq.open("put", eventData.url, true);
        //detect if iOS for handle deeplink
        if (device.platform === 'iOS' || device.platform === 'Android') {
            var pid = mx.ui.showProgress("Loading Your Orders...");
            oReq.onreadystatechange = function () {
                if(oReq.readyState === 4) {
                    if(oReq.status === 200) {
                        mx.data.action({
                            params: {
                                actionname: "Main.MyOrders",
                            },
                            // origin: this.mxform,
                            origin: mx.ui.getContentForm(),
                            callback: function() {
                                mx.ui.hideProgress(pid);
                            },
                            error: function(error) {
                                mx.ui.hideProgress(pid);
                                mx.ui.error("Unable to load link. Please try again.");
                            }
                        });
                        // console.log("CURRENT LOCATION OF THE WINDOWS IS" + window.location.href);
                        // window.location.href = eventData.url;
                        // setTimeout(function(){ window.location.href = "ISfile:///android_asset/www/index.html"; }, 3000);
                        // window.location.href = "ISfile:///android_asset/www/index.html";
                    } else if (oReq.status === 401) {
                        //we weren't redirected (got a 200) and instead were sent to a login page. Show an error
                        mx.ui.hideProgress(pid);
                        mx.ui.error("Sorry, you need to be logged in to view this link. Please log in and try again");
                    } else {
                        //something else went wrong
                        mx.ui.hideProgress(pid);
                        mx.ui.error("Sorry, something went wrong with the link.");
                    }
                }
            };
        }
        oReq.send();
    });
    universalLinks.subscribe('myproducts', function(eventData) {
        // do some work
        console.log('Did launch application from the MY PRODUCTS EVENT: ' + eventData.url)
        console.log('****MY PRODUCTS*** EVENT DATA ARRAY IS: ' + JSON.stringify(eventData) + eventData.params.GUID);
        var testObject = JSON.stringify(eventData);
        var oReq = new XMLHttpRequest();
        /* use a PUT to get responses from DL without redirects
         * 200 means it's ready
         * 401 means you're not logged in
         * 404 means not found
         */
        oReq.open("put", eventData.url, true);
        //detect if iOS for handle deeplink
        if (device.platform === 'iOS' || device.platform === 'Android') {
            var pid = mx.ui.showProgress("Loading Your Products...");
            oReq.onreadystatechange = function () {
                if(oReq.readyState === 4) {
                    if(oReq.status === 200) {
                        mx.data.action({
                            params: {
                                actionname: "Main.LoadMyProductsList",
                            },
                            // origin: this.mxform,
                            origin: mx.ui.getContentForm(),
                            callback: function() {
                                mx.ui.hideProgress(pid);
                            },
                            error: function(error) {
                                mx.ui.hideProgress(pid);
                                mx.ui.error("Unable to load link. Please try again.");
                            }
                        });
                        // console.log("CURRENT LOCATION OF THE WINDOWS IS" + window.location.href);
                        // window.location.href = eventData.url;
                        // setTimeout(function(){ window.location.href = "ISfile:///android_asset/www/index.html"; }, 3000);
                        // window.location.href = "ISfile:///android_asset/www/index.html";
                    } else if (oReq.status === 401) {
                        //we weren't redirected (got a 200) and instead were sent to a login page. Show an error
                        mx.ui.hideProgress(pid);
                        mx.ui.error("Sorry, you need to be logged in to view this link. Please log in and try again");
                    } else {
                        //something else went wrong
                        mx.ui.hideProgress(pid);
                        mx.ui.error("Sorry, something went wrong with the link.");
                    }
                }
            };
        }
        oReq.send();
    });
    universalLinks.subscribe('mysales', function(eventData) {
        // do some work
        console.log('Did launch application from the MY SALES EVENT: ' + eventData.url)
        console.log('****MY SALES*** EVENT DATA ARRAY IS: ' + JSON.stringify(eventData) + eventData.params.GUID);
        var testObject = JSON.stringify(eventData);
        var oReq = new XMLHttpRequest();
        /* use a PUT to get responses from DL without redirects
         * 200 means it's ready
         * 401 means you're not logged in
         * 404 means not found
         */
        oReq.open("put", eventData.url, true);
        //detect if iOS for handle deeplink
        if (device.platform === 'iOS' || device.platform === 'Android') {
            var pid = mx.ui.showProgress("Loading Your Sales...");
            oReq.onreadystatechange = function () {
                if(oReq.readyState === 4) {
                    if(oReq.status === 200) {
                        mx.data.action({
                            params: {
                                actionname: "Main.MySales",
                            },
                            // origin: this.mxform,
                            origin: mx.ui.getContentForm(),
                            callback: function() {
                                mx.ui.hideProgress(pid);
                            },
                            error: function(error) {
                                mx.ui.hideProgress(pid);
                                mx.ui.error("Unable to load link. Please try again.");
                            }
                        });
                        // console.log("CURRENT LOCATION OF THE WINDOWS IS" + window.location.href);
                        // window.location.href = eventData.url;
                        // setTimeout(function(){ window.location.href = "ISfile:///android_asset/www/index.html"; }, 3000);
                        // window.location.href = "ISfile:///android_asset/www/index.html";
                    } else if (oReq.status === 401) {
                        //we weren't redirected (got a 200) and instead were sent to a login page. Show an error
                        mx.ui.hideProgress(pid);
                        mx.ui.error("Sorry, you need to be logged in to view this link. Please log in and try again");
                    } else {
                        //something else went wrong
                        mx.ui.hideProgress(pid);
                        mx.ui.error("Sorry, something went wrong with the link.");
                    }
                }
            };
        }
        oReq.send();
    });
    universalLinks.subscribe('offers', function(eventData) {
        // do some work
        console.log('Did launch application from the MY OFFERS EVENT: ' + eventData.url)
        console.log('****MY OFFERS*** EVENT DATA ARRAY IS: ' + JSON.stringify(eventData) + eventData.params.GUID);
        var testObject = JSON.stringify(eventData);
        var oReq = new XMLHttpRequest();
        /* use a PUT to get responses from DL without redirects
         * 200 means it's ready
         * 401 means you're not logged in
         * 404 means not found
         */
        oReq.open("put", eventData.url, true);
        //detect if iOS for handle deeplink
        if (device.platform === 'iOS' || device.platform === 'Android') {
            var pid = mx.ui.showProgress("Loading Your Offers...");
            oReq.onreadystatechange = function () {
                if(oReq.readyState === 4) {
                    if(oReq.status === 200) {
                        mx.data.action({
                            params: {
                                actionname: "Main.MyOffers",
                            },
                            // origin: this.mxform,
                            origin: mx.ui.getContentForm(),
                            callback: function() {
                                mx.ui.hideProgress(pid);
                            },
                            error: function(error) {
                                mx.ui.hideProgress(pid);
                                mx.ui.error("Unable to load link. Please try again.");
                            }
                        });
                        // console.log("CURRENT LOCATION OF THE WINDOWS IS" + window.location.href);
                        // window.location.href = eventData.url;
                        // setTimeout(function(){ window.location.href = "ISfile:///android_asset/www/index.html"; }, 3000);
                        // window.location.href = "ISfile:///android_asset/www/index.html";
                    } else if (oReq.status === 401) {
                        //we weren't redirected (got a 200) and instead were sent to a login page. Show an error
                        mx.ui.hideProgress(pid);
                        mx.ui.error("Sorry, you need to be logged in to view this link. Please log in and try again");
                    } else {
                        //something else went wrong
                        mx.ui.hideProgress(pid);
                        mx.ui.error("Sorry, something went wrong with the link.");
                    }
                }
            };
        }
        oReq.send();
    });
    universalLinks.subscribe('orderchat', function(eventData) {
      // do some work
      console.log('Did launch application from the MY ORDER CHAT EVENT: ' + eventData.url)
      console.log('****MY ORDER CHAT*** EVENT DATA ARRAY IS: ' + JSON.stringify(eventData) + eventData.params.GUID);
      var testObject = JSON.stringify(eventData);
      var oReq = new XMLHttpRequest();
      /* use a PUT to get responses from DL without redirects
       * 200 means it's ready
       * 401 means you're not logged in
       * 404 means not found
       */
      oReq.open("put", eventData.url, true);
      //detect if iOS for handle deeplink
      if (device.platform === 'iOS' || device.platform === 'Android') {
        var pid = mx.ui.showProgress("Loading Your Order Chats...");
        oReq.onreadystatechange = function () {
          if(oReq.readyState === 4) {
            if(oReq.status === 200) {
              mx.data.action({
                  params: {
                      actionname: "Main.OrderChat",
                  },
                  // origin: this.mxform,
                  origin: mx.ui.getContentForm(),
                  callback: function() {
                      mx.ui.hideProgress(pid);
                  },
                  error: function(error) {
                      mx.ui.hideProgress(pid);
                      mx.ui.error("Unable to load link. Please try again.");
                  }
              });
              // console.log("CURRENT LOCATION OF THE WINDOWS IS" + window.location.href);
              // window.location.href = eventData.url;
              // setTimeout(function(){ window.location.href = "ISfile:///android_asset/www/index.html"; }, 3000);
              // window.location.href = "ISfile:///android_asset/www/index.html";
            } else if (oReq.status === 401) {
              //we weren't redirected (got a 200) and instead were sent to a login page. Show an error
              mx.ui.hideProgress(pid);
              mx.ui.error("Sorry, you need to be logged in to view this link. Please log in and try again");
            } else {
              //something else went wrong
              mx.ui.hideProgress(pid);
              mx.ui.error("Sorry, something went wrong with the link.");
            }
          }
        };
      }
      oReq.send();
    });
    //these lines are from the original afterNavigationFn, which we're overriding
    /*
    * If defined, this function is invoked in onNavigation method,
    * called as the last action during the startup. Lines below handle
    * removal of the loading nodes.
    */
    var removeSelf = function() {
        var appNode = document.getElementById("mx-app");
        if (appNode) appNode.style.display = "none";
    };
    removeSelf();
  }
});

MxApp.onClientReady(function(mx) {
    // Perform any custom operations on the Mendix client object here
});

// Uncomment this function if you would like to control when app updates are performed
/*
MxApp.onAppUpdateAvailable(function(updateCallback) {
    // This function is called when a new version of your Mendix app is available.
    // Invoke the callback to trigger the app update mechanism.
});
*/