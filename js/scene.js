var space = new CanvasSpace();
var form = new Form( space );
var dot = new Circle( 100, 250 ).setRadius(50);
var another = new Circle( 100, 100 ).setRadius( 50 );
var bot = {
    animate: function (time, fs, context) {
        form.fill("#5AF").stroke(false);
        dot.setRadius( Math.abs(500 - time % 1000)/20 + 20 );
        form.circle(dot);
        form.fill( false ).stroke( "#fc0", 5 ); // another circle has orange stroke and no fill
        form.circle( another );

        var hits = another.intersectCircle( dot );
        if (hits.length > 0) {
            form.stroke( "#fff" ).fill( "#0C9" );
            form.line( new Line( hits[0] ).to( hits[1] ) );
            form.points( hits, 5, true );
        }
    },
    onMouseAction: function(type, x, y, evt) {
        if (type == "move") {
            another.set( x, y ); // set another circle's position
        }
    }
};
space.add( bot );
space.bindMouse();
space.play();
