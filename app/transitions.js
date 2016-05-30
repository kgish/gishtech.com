// http://ember-animation.github.io/liquid-fire/#/
export default function(){
    
    var duration = 250;
    
    this.transition(
        this.fromRoute('index'),
        this.use('toLeft', { duration }),
        this.reverse('toRight', { duration })
    );
    this.transition(
        this.fromRoute('skills'),
        this.use('toLeft', { duration }),
        this.reverse('toRight', { duration })
    );
    this.transition(
        this.fromRoute('contact'),
        this.use('toLeft', { duration }),
        this.reverse('toRight', { duration })
    );
    this.transition(
        this.fromRoute('about'),
        this.use('toLeft', { duration }),
        this.reverse('toRight', { duration })
    );
    this.transition(
        this.fromRoute('links'),
        this.use('toLeft', { duration }),
        this.reverse('toRight', { duration })
    );
    this.transition(
        this.fromRoute('credits'),
        this.use('toLeft', { duration }),
        this.reverse('toRight', { duration })
    );
    this.transition(
        this.fromRoute('repository'),
        this.use('toLeft', { duration }),
        this.reverse('toRight', { duration })
    );
    this.transition(
        this.fromRoute('logo'),
        this.use('toLeft', { duration }),
        this.reverse('toRight', { duration })
    );
    this.transition(
        this.fromRoute('terms-and-conditions'),
        this.use('toLeft', { duration }),
        this.reverse('toRight', { duration })
    );
}
