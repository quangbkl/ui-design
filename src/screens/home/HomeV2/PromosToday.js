import React from 'react';
import Text from "../../../components/Text/Text";
import {FlatList, StyleSheet, View} from "react-native";
import Card from "../../../components-v2/Card/Card";
import Button from "../../../components-v2/Button/Button";
import appRoutes from "../../../navigations/appRoutes";
import scaleWithPixel from "../../../helpers/scaleWithPixel";

const PromotionData = [
    {
        id: "1",
        image: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title1: "Attaction & Activities",
        title2: "Barcelona"
    },
    {
        id: "2",
        image: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title1: "Attaction & Activities",
        title2: "Australia"
    },
    {
        id: "3",
        image: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title1: "Attaction & Activities",
        title2: "Japan"
    },
    {
        id: "4",
        image: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title1: "Attaction & Activities",
        title2: "Korean"
    },
    {
        id: "5",
        image: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title1: "Attaction & Activities",
        title2: "Viet Nam"
    }
];

const PromosToday = () => {
    const styles = StyleSheet.create({
        contentCartPromotion: {
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "flex-start"
        },
        btnPromotion: {
            height: 25,
            borderRadius: 3,
            paddingHorizontal: 10,
            paddingVertical: 5
        },
        promotionItem: {
            borderRadius: 8,
            width: scaleWithPixel(200),
            height: scaleWithPixel(250)
        },
    });

    return (
        <View>
            <Text
                title3
                semibold
                style={{marginLeft: 20, marginVertical: 10}}
            >
                Promos Today
            </Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={PromotionData}
                keyExtractor={(item, index) => item.id}
                renderItem={({item, index}) => (
                    <Card
                        style={[
                            styles.promotionItem,
                            index === 0
                                ? {marginHorizontal: 20}
                                : {marginRight: 20}
                        ]}
                        image={item.image}
                        onPress={() =>
                            navigation.navigate(appRoutes.HOTEL_DETAIL)
                        }
                    >
                        <Text subhead whiteColor>
                            {item.title1}
                        </Text>
                        <Text title2 whiteColor semibold>
                            {item.title2}
                        </Text>
                        <View
                            style={styles.contentCartPromotion}
                        >
                            <Button
                                style={styles.btnPromotion}
                                onPress={() => {
                                    navigation.navigate(appRoutes.PREVIEW_BOOKING);
                                }}
                            >
                                <Text body2 semibold whiteColor>
                                    Book Now
                                </Text>
                            </Button>
                        </View>
                    </Card>
                )}
            />
        </View>
    );
}

PromosToday.propTypes = {};

export default PromosToday;
