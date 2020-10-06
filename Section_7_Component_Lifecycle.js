// Component Lifecycle - Construction

/* -only available in class-based components.
1. Constructor(props) executes - default ES6 class feature
2. If creating own constructor, need to call super(props)
3. Set up initial state but do not cause side-effects *avoid unnecessary 
re-renders.
4. getDerivedStateFromProps(props,state) - sync states
5. render() - prepare and structure JSX structure
6. All child components of top-level render will render.
7. componentDidMount() - make http requests, cause side-effects, do not 
immediately setState (only after receiving then from promise)

// Component Lifecycle - Update

1. getDerivedStateFromProps(props,state) - sync states
2. shouldComponentUpdate(nextProps,nextState) - may cancel updating process!
3. render()
4. Updates child components.
5. getSnapshotBeforeUpdate(prevProps, prevState) - last minute DOM operations
6. componentDidUpdate() - make requests, cause side effects


*/