"use strict";
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var notification_content_renderer_1 = require("./notification-content-renderer");
/* eslint-disable no-unused-expressions */
describe('notification-content-renderer', function () {
    var contentRenderer = new notification_content_renderer_1.NotificationContentRenderer();
    it('should remove new lines', function () {
        expectRenderedContent('foo\nbar', 'foo bar');
        expectRenderedContent('foo\n\n\nbar', 'foo bar');
    });
    it('should render links', function () {
        expectRenderedContent('Link to [theia](https://github.com/eclipse-theia/theia)!', 'Link to <a href="https://github.com/eclipse-theia/theia">theia</a>!');
        expectRenderedContent('Link to [theia](https://github.com/eclipse-theia/theia "title on hover")!', 'Link to <a href="https://github.com/eclipse-theia/theia" title="title on hover">theia</a>!');
        expectRenderedContent('Click [here](command:my-command-id) to open stuff!', 'Click <a href="command:my-command-id">here</a> to open stuff!');
        expectRenderedContent('Click [here](javascript:window.alert();) to open stuff!', 'Click [here](javascript:window.alert();) to open stuff!');
    });
    it('should render markdown', function () {
        expectRenderedContent('*italic*', '<em>italic</em>');
        expectRenderedContent('**bold**', '<strong>bold</strong>');
    });
    it('should not render html', function () {
        expectRenderedContent('<script>document.getElementById("demo").innerHTML = "Hello JavaScript!";</script>', '&lt;script&gt;document.getElementById(&quot;demo&quot;).innerHTML = &quot;Hello JavaScript!&quot;;&lt;/script&gt;');
        expectRenderedContent('<a href="javascript:window.alert();">foobar</a>', '&lt;a href=&quot;javascript:window.alert();&quot;&gt;foobar&lt;/a&gt;');
    });
    var expectRenderedContent = function (input, output) {
        return chai_1.expect(contentRenderer.renderMessage(input)).to.be.equal(output);
    };
});
//# sourceMappingURL=notification-content-renderer.spec.js.map