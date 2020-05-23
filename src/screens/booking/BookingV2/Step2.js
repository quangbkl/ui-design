import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'components';

const Step2 = props => {
    const [expandPriceDetail, setExpandPriceDetail] = useState(false);

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={{ margin: 10 }}>Thông tin giao dịch</Text>
                </View>
            </ScrollView>
            <View style={{padding: 10}}>
                <Button>
                    <Text whiteColor>Thanh toán</Text>
                </Button>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    content: {
        flex: 1,
    },
});

export default Step2;
