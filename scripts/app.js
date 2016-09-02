var xs = xstream.default;
var div = CycleDOM.div, input = CycleDOM.input, p = CycleDOM.p, makeDOMDriver = CycleDOM.makeDOMDriver;
function main(sources) {
    var sinks = {
        DOM: sources.DOM
            .select('input').events('change')
            .map(function (ev) { return ev.target.checked; })
            .startWith(false)
            .map(function (toggled) {
            return div([
                input({ attrs: { type: 'checkbox' } }), 'Toggle me',
                p("" + (toggled ? 'ON' : 'off'))
            ]);
        })
    };
    return sinks;
}
Cycle.run(main, {
    DOM: makeDOMDriver('#app')
});
//# sourceMappingURL=app.js.map