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
        this.fromRoute('about'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    this.transition(
        this.fromRoute('contact'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    this.transition(
        this.hasClass('jumbotron'),
        this.use('crossFade')
    );
}
