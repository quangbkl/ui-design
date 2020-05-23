export const getRouterParam = (
    props: Object,
    paramName: string,
    defaultValue: any = null,
) => {
    try {
        return props.route.params[paramName];
    } catch (error) {
        return defaultValue;
    }
};
