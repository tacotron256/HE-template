export class UicValueConverter {
    toView(value) {
        if ((value == null) || (value == '')) {
        }
        else {
            value = value.replace(/\W/g, '');
            if (value.length >= 6) {
                return value.substring(0, 6).toUpperCase();
            }
        }
        return value;
    }
}