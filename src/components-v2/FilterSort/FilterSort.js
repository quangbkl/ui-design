import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import Icon from '../Icon/Icon';
import Text from '../../components/Text/Text';
import Button from '../Button/Button';
import useApp from '../../hooks/app/useApp';

const FilterSort = (props) => {
    const {state: appState} = useApp();
    const {colors} = appState;

    const [sortOption, setSortOption] = useState(props.sortOption);
    const [sortSelected, setSortSelected] = useState(props.sortSelected);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setSortOption(sortOption.map(item => {
            return {
                ...item,
                checked: item.value === sortSelected.value
            };
        }));
    }, []);

    const onSelectFilter = (selected) => {
        setSortOption(sortOption.map(item => {
            return {
                ...item,
                checked: item.value === selected.value
            };
        }));
    };

    const onOpenSort = () => {
        setModalVisible(true);
        setSortOption(sortOption.map(item => {
            return {
                ...item,
                checked: item.value === sortSelected.value
            };
        }));
    };

    const onApply = () => {
        const {onChangeSort} = props;
        const sorted = sortOption.filter(item => item.checked);

        if (sorted.length > 0) {
            setSortSelected(sorted[0]);
            setModalVisible(false);
            onChangeSort(sorted[0]);
        }
    };

    const iconModeView = (modeView) => {
        switch (modeView) {
            case 'block':
                return 'square';
            case 'grid':
                return 'th-large';
            case 'list':
                return 'th-list';
            default:
                return 'th-list';
        }
    };

    const {
        style,
        modeView,
        onFilter,
        onChangeView,
        labelCustom
    } = props;

    const styles = StyleSheet.create({
        contain: {
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        line: {
            width: 1,
            height: 14,
            backgroundColor: colors.grayColor,
            marginLeft: 10
        },
        contentFilter: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10
        },
        bottomModal: {
            justifyContent: 'flex-end',
            margin: 0
        },
        contentFilterBottom: {
            width: '100%',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingHorizontal: 20,
            backgroundColor: colors.whiteColor
        },
        contentSwipeDown: {
            paddingTop: 10,
            alignItems: 'center'
        },
        lineSwipeDown: {
            width: 30,
            height: 2.5,
            backgroundColor: colors.dividerColor
        },
        contentActionModalBottom: {
            flexDirection: 'row',
            paddingVertical: 10,
            marginBottom: 10,
            justifyContent: 'space-between',
            borderBottomColor: colors.textSecondaryColor,
            borderBottomWidth: 1
        }
    });

    const customAction = modeView !== '' ? (
        <TouchableOpacity
            onPress={onChangeView}
            style={{
                width: 30,
                alignItems: 'flex-end'
            }}
        >
            <Icon
                name={iconModeView(modeView)}
                size={16}
                color={colors.grayColor}
                solid
            />
        </TouchableOpacity>
    ) : (
        <Text headline grayColor>
            {labelCustom}
        </Text>
    );

    return (
        <View style={[styles.contain, style]}>
            <Modal
                isVisible={modalVisible}
                onSwipeComplete={() => {
                    setModalVisible(false);
                    setSortOption(props.sortOption);
                }}
                swipeDirection={['down']}
                style={styles.bottomModal}
            >
                <View style={styles.contentFilterBottom}>
                    <View style={styles.contentSwipeDown}>
                        <View style={styles.lineSwipeDown}/>
                    </View>
                    {sortOption.map((item, index) => (
                        <TouchableOpacity
                            style={styles.contentActionModalBottom}
                            key={item.value}
                            onPress={() => onSelectFilter(item)}
                        >
                            <Text
                                body2
                                semibold
                                primaryColor={item.checked}
                            >
                                {item.text}
                            </Text>
                            {item.checked && (
                                <Icon
                                    name="check"
                                    size={14}
                                    color={colors.primaryColor}
                                />
                            )}
                        </TouchableOpacity>
                    ))}
                    <Button
                        full
                        style={{marginTop: 10, marginBottom: 20}}
                        onPress={() => onApply()}
                    >
                        Apply
                    </Button>
                </View>
            </Modal>
            <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => onOpenSort()}
            >
                <Icon
                    name={sortSelected.icon}
                    size={16}
                    color={colors.grayColor}
                    solid
                />
                <Text headline grayColor style={{marginLeft: 5}}>
                    {sortSelected.text}
                </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {customAction}
                <View style={styles.line}/>
                <TouchableOpacity
                    onPress={onFilter}
                    style={styles.contentFilter}
                >
                    <Icon
                        name="filter"
                        size={16}
                        color={colors.grayColor}
                        solid
                    />
                    <Text headline grayColor style={{marginLeft: 5}}>
                        Filter
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

FilterSort.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    sortOption: PropTypes.array,
    sortSelected: PropTypes.object,
    modeView: PropTypes.string,
    labelCustom: PropTypes.string,
    onChangeSort: PropTypes.func,
    onChangeView: PropTypes.func,
    onFilter: PropTypes.func
};

FilterSort.defaultProps = {
    style: {},
    sortOption: [
        {
            value: 'low_price',
            icon: 'sort-amount-up',
            text: 'Lowest Price'
        },
        {
            value: 'hight_price',
            icon: 'sort-amount-down',
            text: 'Hightest Price'
        },
        {
            value: 'high_rate',
            icon: 'sort-amount-up',
            text: 'Hightest Rating'
        },
        {
            value: 'popular',
            icon: 'sort-amount-down',
            text: 'Popularity'
        }
    ],
    sortSelected: {
        value: 'high_rate',
        icon: 'sort-amount-up',
        text: 'Hightest Rating'
    },
    modeView: '',
    labelCustom: '',
    onChangeSort: () => {
    },
    onChangeView: () => {
    },
    onFilter: () => {
    }
};

export default FilterSort;
