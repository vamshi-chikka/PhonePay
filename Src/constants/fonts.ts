import { isIOS } from '../../utils/platformUtil';

export const fontFamily ={
    POPPINS :{
        normal : isIOS() ? 'Poppins-Regular' : 'PoppinsRegular',
        medium : isIOS() ? 'Poppins-Medium' : 'PoppinsMedium',
        semiBold : isIOS() ? 'Poppins-SemiBold' : 'PoppinsSemiBold',
        bold : isIOS() ? 'Poppins-Bold' : 'PoppinsBold',
    }
}