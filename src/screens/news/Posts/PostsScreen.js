import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {Container} from 'native-base';
import CustomHeader from 'components/Header/CustomHeader';
import {PostItem, Separator} from 'components';
import {getPosts} from 'services/postServices';
import {useFilterDynamic} from 'hooks/common';
import appRoutes from 'navigations/appRoutes';

const PostListScreen = (props) => {
    const {navigation} = props;
    const defaultFilters = {
        page: 1,
        limit: 10,
    };
    const loadDataPosts = (params) => getPosts(params)
        .then(res => res.data.posts);
    const {
        loading: loadingPosts,
        list: listPosts,
        fetchData,
        refreshPage,
        fetchNext,
    } = useFilterDynamic(defaultFilters, loadDataPosts);

    const renderListItem = ({item}) => {
        return (
            <PostItem
                item={item}
                onPress={() => navigation.navigate(appRoutes.POST_DETAIL, {postId: item.id})}
            />
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container>
            <CustomHeader title="Post"/>
            <FlatList
                data={listPosts}
                renderItem={renderListItem}
                refreshing={loadingPosts}
                onRefresh={refreshPage}
                onEndReached={fetchNext}
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={Separator}
            />
        </Container>
    );
};

export default PostListScreen;
