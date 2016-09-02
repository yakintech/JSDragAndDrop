/*
 * Copyright (c) 2012-2015 Taye Adeyemi
 * Open source under the MIT License.
 * https://raw.github.com/taye/interact.js/master/LICENSE
 */


function DemoNode(element,id, src) {

        switch (element) {
            case "img":
                $("body").append("<div id='" + id + "' class='demo-node' width='200px' height='200px'><img widht='70px' height='70px' src='" + src + "' id='" + "deneme" + "' />" + "<button onclick='removehtml(" + id + ")'>Sil</button>" +
                    "</div></br>");
                break;
            case "text":
                alert("text")
                break;
        }




    window[id] = this.element;
}
function dragMove(e) {
    var target = e.target;

    if ('SVGElement' in window && e.target instanceof SVGElement) {
        target.dragX += e.dx;
        target.dragY += e.dy;

        target.parentNode.setAttribute('transform', ['translate(', target.dragX, target.dragY, ')'].join(' '));
    } else {
        target.style.left = parseInt(target.style.left || 0, 10) + e.dx + 'px';
        target.style.top = parseInt(target.style.top || 0, 10) + e.dy + 'px';
    }
}

function resizeMove(event) {
    var target = event.target;


    target.style.left = parseInt(target.style.left || 0, 10) + event.deltaRect.left + 'px';
    target.style.top = parseInt(target.style.top || 0, 10) + event.deltaRect.top + 'px';

    target.style.width = Math.max(parseInt(target.style.width || 0, 10) + event.deltaRect.width, 50) + 'px';
    target.style.height = Math.max(parseInt(target.style.height || 0, 10) + event.deltaRect.height, 50) + 'px';


}

interact.on('resizemove', resizeMove);
interact.on('dragmove', dragMove);


function createhtml(element, src) {

    id = Random.Generate();
    new DemoNode(element,id, src);

    interact('div.demo-node')
        .draggable({
            max: 2,
            autoScroll: true,
            inertia: true
        })
        .gesturable({ max: 1 })
        .resizable({
            max: 2,
            autoScroll: { enabled: true },
            inertia: { resistance: 40 },
            edges: { left: true, right: true, top: true, bottom: true }
        })
        .dropzone(true);
}

interact.maxInteractions(Infinity);

// interact(window).on('addEventListener' in document? 'DOMContentLoaded': 'load', onReady);

// Display event properties for debugging
interact.on([
    'resizestart',
    'resizemove',
    'resizeend',
    'gesturestart',
    'gesturemove',
    'gestureend',
    'dragstart',
    'dragmove',
    'dragend',
], nodeEventDebug);

window.demo = {
    DemoNode: DemoNode,
    nodeEventDebug: nodeEventDebug,
};

function removehtml(id) {
    $("#" + id).remove();
}
