import React, { useMemo } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

// api
import UseRequestApi from '../../../hooks/useRequestApi';
import {
    getNewReleases,
    getPlaylists,
    getCategories,
} from '../../../api';

export default function Discover() {
    // * notes
    // i already create the LOADING state for every request
    // but im decide not using LOADING state since the UI already clean.
    // since the token will be expired, then i create some ERROR handling to display ERROR MESSAGE from api

    // dataReleases
    const {
        data: dataReleases,
        // loading: isLoadingDataReleases,
        error: isErrorDataReleases
    } = UseRequestApi(getNewReleases);
    const newReleases = dataReleases?.albums?.items || [];

    // dataPlaylists
    const {
        data: dataPlaylists,
        // loading: isLoadingDataPlayLists,
        error: isErrorDataPlayLists,
    } = UseRequestApi(getPlaylists);
    const playlists = dataPlaylists?.playlists?.items || [];

    // dataCategories
    const {
        data: dataCategories,
        // loading: isLoadingDataCategories,
        error: isErrorDataCategories,
    } = UseRequestApi(getCategories);
    const categories = dataCategories?.categories?.items || [];

    // error handling
    const hasError = useMemo(() => {
        const errorMessage = isErrorDataReleases || isErrorDataPlayLists || isErrorDataCategories;
        if (errorMessage) return { error: true, message: errorMessage }

        return { error: false }
    }, [isErrorDataReleases, isErrorDataPlayLists, isErrorDataCategories])

    return (
        <>
          {hasError.error && <p style={{ textAlign: 'center', }}>{hasError.message}</p>}
          <div className="discover">
            <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
            <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
            <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
          </div>
        </>
    );
}
