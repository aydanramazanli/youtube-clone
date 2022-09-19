import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getSearchingVideos} from '../../redux/slices/video';

export default function SearchScreen() {
  console.log(getSearchingVideos());
    const {query} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSearchingVideos(query));
    },[query, dispatch]);
  return (
    <div>SearchScreen</div>
  );
}
