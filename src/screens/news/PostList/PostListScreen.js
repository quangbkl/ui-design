import React, {useState, useEffect} from 'react';
import {ScrollView, FlatList} from 'react-native';
import {Container} from 'native-base';
import Header from '../../../components/Header';
import PostItem from './PostItem';
import Separator from '../../../components/Separator';

const PostListScreen = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    }, []);

    return (
        <Container>
            <Header title="Post"/>
            <ScrollView>
                <FlatList
                    data={list}
                    renderItem={() => <PostItem/>}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </ScrollView>
        </Container>
    );
};

export default PostListScreen;
