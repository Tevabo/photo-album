import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
// import { helloWorld } from '../actions/test'
import { addAlbum } from '../actions/ADD_ALBUM'

class AlbumsListContainer extends React.Component {
    // state = {}

    componentDidMount() {
        request('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                response.body.map(album => this.props.addAlbum(album.id, album.title))
            })
        // this.props.addAlbum(5, 'Enjoying sunshine')
        // this.props.addAlbum(10, 'Having fun in the US')
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


export default connect(mapStateToProps, { addAlbum })(AlbumsListContainer)