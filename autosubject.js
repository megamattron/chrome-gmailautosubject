/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

// console.log("AutoSubject extension active...")
 var mainfunc = function() {
    // console.log("Checking for compose fields...")
    var subjectinput = $("#canvas_frame").contents().find('input[name=subject]')[0]
    if (subjectinput) {
        var emailtext = $("#canvas_frame").contents().find('.editable').contents().find('.editable')[0]
        //console.log(emailtext)
        emailtext.addEventListener("keyup",
        function(event) {
            subjectinput.value = sum(emailtext.innerText).replace(/\s/, '')
            //console.log(emailtext.value)
        })
    } else {
        // console.log("No subject input found.")
    }
}
window.addEventListener("DOMSubtreeModified", mainfunc, false);
//window.onhashchange = mainfunc
mainfunc()