
class interceptorManager{
    constructor(){
        this.handlers = []
    }
    use(handlerResolve, handlerReject){
        this.handlers.push({
            fulfilled: handlerResolve,
            rejected: handlerReject
        })
    }
}

export default interceptorManager;