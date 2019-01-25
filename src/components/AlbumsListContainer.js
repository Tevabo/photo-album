import * as React from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux';
import { getAlbums } from '../actions/ADD_ALBUM'



class AlbumsListContainer extends React.Component {

    componentDidMount() {
        this.props.getAlbums()   
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


export default connect(mapStateToProps, { getAlbums })(AlbumsListContainer)