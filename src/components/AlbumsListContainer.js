import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
// import { helloWorld } from '../actions/test'
import { addAlbum } from '../actions/ADD_ALBUM'
import { setAlbums } from '../actions/ADD_ALBUM'

// const sleep = time => new Promise(
//     resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )

class AlbumsListContainer extends React.Component {

    componentDidMount() {
        request('https://jsonplaceholder.typicode.com/albums')
        .then(response => this.props.setAlbums(response.body) )
      
            // .then(response => {
            //     response.body.map(album => this.props.addAlbum(album.id, album.title))
            // })
        // sleep(2000)
        //     .then(message => this.props.setAlbums([
        //         {
        //             id: 1,
        //             title: message
        //         },
        //         {
        //             id: 2,
        //             title: 'This is the second album'
        //         },
        //         {
        //             id: 3,
        //             title: 'The last album'
        //         }
        //     ]))



    }

    render() {
        if (!this.props.albums) return 'Loading...'
        return <AlbumsList albums={this.props.albums} />
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}


export default connect(mapStateToProps, { setAlbums })(AlbumsListContainer)