export default function(){
        this.transition(
            this.hasClass('publish-button'),
            this.toValue(true),
            this.use('toRight', { duration: 500 }),
            this.reverse('toLeft', { duration: 500 })
        );
}