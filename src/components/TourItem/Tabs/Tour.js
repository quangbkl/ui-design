import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from 'native-base';
import Gallery from './Gallery';
import TourInformationItem from './TourInformationItem';

const Tour = ({item}) => {
    const renderListDayItem = ({item}) => {
        return (
            <TourInformationItem
                title={item.title}
                image={item.image}
                description={item.description}
            />

        );
    };
    return (
        <Container>
            <ScrollView>
                <View style={styles.container}>
                    <Gallery item={item}/>
                   {/* <FlatList
                        data={item.tourInformation}
                        renderItem={renderListDayItem}
                        keyExtractor={item => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                    />*/}
	
	                <TourInformationItem
		                title='LẠC BƯỚC GIỮA CON ĐƯỜNG NHỎ KHÔNG TÊN Ở AN BÀNG'
		                image='https://mytourcdn.com/upload_images/Image/Location/23_6_2015/du-lich-bai-bien-an-bang-hoi-an-mytour-1.jpg'
		                description='Chúng tôi đến bãi biển An Bàng vào một buổi chiều mùa hạ nắng ấm, mất hơn 30 phút chạy xe máy từ Trung tâm thành phố Đà Nẵng, đường đi rất thuận tiện.
		                 Di chuyển trên đoạn đường dọc bờ biển từng là một làng chài lưới trước đây, có thể ngắm biển và chiêm ngưỡng sự phát triển từng ngày của thành phố xinh
		                 đẹp miền Trung cùng những khu nghỉ dưỡng xa hoa và mang đẳng cấp quốc tế đã và đang xây dựng. Từ đường Biển, tiếp tục đi thẳng đường Lạc Long Quân,
		                 tới chỗ giao nhau, rẽ trái vào đường Hai Bà Trưng, đi đến cuối con đường này là bãi biển An Bàng. Đi gần đến biển An Bàng, có một con đường nhỏ bên tay trái,
		                 rẽ vào đây và tìm đến một quán bar/cà phê nhỏ có tên là Surf Bar.'
	                />
	                <TourInformationItem
		                title='AN BÀNG MANG LẠI MỘT BUỔI CHIỀU YÊN BÌNH VÀ ẤM ÁP'
		                image='https://mytourcdn.com/upload_images/Image/Location/23_6_2015/du-lich-bai-bien-an-bang-hoi-an-mytour-6.jpg'
		                description='Du khách đến An Bàng chủ yếu di chuyển bằng xe đạp, chủ yếu là người phương Tây. Họ đi vào con đường này,
		                càng làm chúng tôi cảm nhận đang ở một con đường lát đá Châu Âu điển hình.
						Gọi một ly Moska có pha kem, thức uống ưa thích của tôi và chọn một chiếc bàn nhỏ đơn giản ngoài trời
						để ngồi xuống. Trời mùa hạ có nắng ấm trong xanh và cao vút. Vội vàng nhìn lướt qua không gian xung quanh, ngoài hai cô gái
						 người Việt Nam chúng tôi thì toàn bộ là người nước ngoài. Họ rất thoải mái, chọn cho mình một chòi lớn hay một chiếc giường
						 tại đây để đọc sách hay nằm thư giãn nghe nhạc, nhấm nháp một ly nước hoặc tắm biển. Chúng tôi đến đây bỏ đằng sau những bộn bề
						 của cuộc sống thành thị với cơm, áo, gạo, tiền, tận hưởng không gian của riêng mình, chìm đắm vào không gian đó và thư thái.'
	                />
                </View>
            </ScrollView>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20
    }
});
export default Tour;
