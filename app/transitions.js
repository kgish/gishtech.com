// http://ember-animation.github.io/liquid-fire/#/
export default function(){
    this.transition(
        this.fromRoute('index'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    this.transition(
        this.fromRoute('skills'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    this.transition(
        this.fromRoute('contact'),
        this.use('toRight'),
        this.reverse('toLeft')
    );
}
