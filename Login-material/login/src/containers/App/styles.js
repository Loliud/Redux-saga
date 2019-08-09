const styles = () =>{
    return {
        box:{
            margin: 0,
            padding: 0,
            height: '100vh',
            overflow: 'hidden'
        },
        LoginForm:{
            textAlign: 'center',
            height: '100%',
            boxShadow: '0px 0px 20px rgba(0,0,0,0.5)'
        },
        input:{
            display: 'flex',
            flexDirection: 'column'
        },
        checkbox:{
            width: 30
        },
        image:{
           
            backgroundImage: `url(${"http://tiengnhattructuyen.vn/wp-content/uploads/2017/03/japan-background-2.jpg"})`,
            backgroundSize: 'cover'
        }
    }
}


export default styles;